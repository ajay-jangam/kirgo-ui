// End-to-end checks for the empty-bag fix and the bag-check reduction.
// Each test starts as a brand-new shopper (fresh browser context) on a
// phone-sized screen, so the desktop phone-frame wrapper never kicks in.
// Run: node bag-tests.mjs [chromium|webkit]
import { chromium, webkit } from 'playwright';
import http from 'node:http';
import net from 'node:net';
import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';

const BASE = process.env.BASE || 'http://kirgo.test';
const ENGINE = process.argv[2] || 'chromium';
const PRODUCT = '/shop/core-sports-bra/';
const results = [];
// ONLY=J,K runs just those sections.
const run = (id) => !process.env.ONLY || process.env.ONLY.split(',').includes(id);

const engines = { chromium, webkit };
const device = ENGINE === 'webkit'
	? { viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1', isMobile: true, hasTouch: true }
	: { viewport: { width: 412, height: 915 }, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36', isMobile: true, hasTouch: true };

const browser = await engines[ENGINE].launch();

function check(name, ok, detail) {
	results.push({ name, ok: !!ok, detail });
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}

async function newShopper(via = browser) {
	const context = await via.newContext(device);
	// Local Valet sends every image through PHP, which stalls /shop/. The bag
	// logic needs none of them, so local runs can skip them.
	if (process.env.BLOCK_MEDIA) await context.route(/\.(png|jpe?g|gif|webp|avif|svg|woff2?|ttf|otf|mp4|webm)(\?|$)/, (route) => route.abort());
	const page = watch(await context.newPage());
	return { context, page };
}

// Count bag calls and collect JS errors on a page.
function watch(page) {
	page.calls = [];
	page.errors = [];
	page.on('request', (r) => { if (r.url().includes('wc-ajax=')) page.calls.push(r.url().split('wc-ajax=')[1]); });
	// Known errors that also happen on the old code (checked 2026-10-27), in
	// WebKit when a page navigates away: Microsoft Clarity's analytics upload
	// is cut off, and an unhandled promise rejection with no message or stack.
	// They are printed as INFO so they can't hide a new error from our code.
	const isKnown = (e) => /clarity\.ms/.test(e.message + e.stack) || (!e.message && /Unhandled Promise Rejection/.test(String(e.stack)));
	page.on('pageerror', (e) => {
		const line = page.url().replace(BASE, '') + ' :: ' + (e.message || '(no message)') + ' :: ' + String(e.stack || '').split('\n').slice(0, 3).join(' < ');
		if (isKnown(e)) console.log(`INFO  known pre-existing error: ${line.slice(0, 120)}`);
		else page.errors.push(line);
	});
	page.on('dialog', (d) => { page.lastDialog = d.message(); d.dismiss(); });
	return page;
}

// Load a page and let the side cart's 200 ms page-load refresh have time to fire.
async function open(page, path) {
	page.calls = [];
	await page.goto(BASE + path, { waitUntil: 'load', timeout: 90000 });
	await page.waitForTimeout(3000);
}

const header = (page) => page.locator('.navbar-cart .cart-count').first().innerText();
const hasBagNote = async (page) => (await page.context().cookies()).some((c) => c.name === 'woocommerce_items_in_cart');
const cartRows = (page) => page.locator('tr.cart_item').allInnerTexts();
// A page holds a bag if the header count is not 0, the side cart lists an
// item (data-key is the bag line id), or GoKwik got a shopper session id.
const hasNoBag = (html) => /<span class="cart-count">0<\/span>/.test(html) && !/data-key="/.test(html) && /"session_id":null/.test(html);
const bagCountCookie = async (page) => (await page.context().cookies()).find((c) => c.name === 'kirgo_bag_count')?.value ?? null;

async function pickSizeM(page) {
	const form = page.locator('form.variations_form').first();
	await form.locator('.woovr-variation[data-id="1842"]').click();
	const btn = form.locator('.single_add_to_cart_button');
	await page.waitForFunction((el) => !el.classList.contains('disabled'), await btn.elementHandle(), { timeout: 10000 });
	return btn;
}

async function addCoreBraM(page, { delayMs = 0 } = {}) {
	let savedAt = null;
	if (delayMs) {
		// Hold the request, then let the real server answer. Replaying the
		// answer with route.fulfill makes WebKit drop the cart cookie.
		await page.route('**/?wc-ajax=xoo_wsc_add_to_cart', async (route) => {
			await new Promise((r) => setTimeout(r, delayMs));
			await route.continue();
		});
		page.on('response', (r) => { if (r.url().includes('xoo_wsc_add_to_cart')) savedAt = Date.now(); });
	}
	await open(page, PRODUCT);
	const btn = await pickSizeM(page);
	const tappedAt = Date.now();
	await btn.click();
	return { tappedAt, savedAt: () => savedAt };
}

// --- A. Empty bag: no bag calls anywhere, header shows 0 -------------------
if (run('A')) {
	const { context, page } = await newShopper();
	for (const path of ['/', '/shop/', PRODUCT]) {
		await open(page, path);
		check(`A empty bag ${path}: 0 bag calls`, page.calls.length === 0, `calls=${JSON.stringify(page.calls)}`);
		check(`A empty bag ${path}: header shows 0`, (await header(page)) === '0', `header="${await header(page)}"`);
	}
	check('A no JS errors', page.errors.length === 0, page.errors.join(' | '));
	await context.close();
}

// --- B. First add with a slow save (the original bug) ----------------------
if (run('B')) {
	const { context, page } = await newShopper();
	const t = await addCoreBraM(page, { delayMs: 4000 });
	await page.waitForTimeout(2500);
	check('B slow save: still on product page at 2.5 s', page.url().includes(PRODUCT), page.url());
	await page.waitForURL('**/cart/**', { timeout: 60000 });
	const leftAt = Date.now();
	check('B slow save: left only after the save finished', t.savedAt() && leftAt >= t.savedAt(), `saved +${t.savedAt() - t.tappedAt} ms, at cart +${leftAt - t.tappedAt} ms`);
	await page.waitForLoadState('load');
	await page.waitForTimeout(3000);
	const rows = await cartRows(page);
	check('B slow save: bag has the Core Sports Bra M', rows.length === 1 && /core sports bra/i.test(rows[0]) && /M/.test(rows[0]), JSON.stringify(rows));
	check('B slow save: header shows 1', (await header(page)) === '1', `header="${await header(page)}"`);
	check('B no JS errors', page.errors.length === 0, page.errors.join(' | '));
	await context.close();
}

// --- C. Normal add, then browse, change quantity, empty the bag ------------
if (run('C')) {
	const { context, page } = await newShopper();
	await addCoreBraM(page);
	await page.waitForURL('**/cart/**', { timeout: 60000 });
	await page.waitForLoadState('load');
	await page.waitForTimeout(3000);
	check('C normal add: bag has 1 item', (await cartRows(page)).length === 1);
	check('C normal add: bag note cookie set', await hasBagNote(page));

	check('C normal add: bag count cookie says 1', (await bagCountCookie(page)) === '1', await bagCountCookie(page));

	await open(page, '/shop/core-leggings/');
	check('C item in bag, product page: 0 bag calls', page.calls.length === 0, JSON.stringify(page.calls));
	check('C item in bag, product page: header shows 1', (await header(page)) === '1');
	const html = await (await page.request.get(BASE + '/shop/')).text();
	check('C browse page is built without the bag (safe to cache)', hasNoBag(html));
	const cartHtml = await (await page.request.get(BASE + '/cart/')).text();
	check('C cart page is built with the bag', /<span class="cart-count">1<\/span>/.test(cartHtml) && /cart_item/.test(cartHtml));

	await open(page, '/cart/');
	await page.locator('.quantity .plus').first().click();
	await page.locator('[name=update_cart]').click();
	await page.waitForFunction(() => document.querySelector('.navbar-cart .cart-count')?.textContent === '2', null, { timeout: 60000 }).catch(() => {});
	check('C quantity 1→2 + Update receipt: header shows 2', (await header(page)) === '2', `header="${await header(page)}"`);

	await page.locator('tr.cart_item a.remove').first().click();
	await page.locator('.cart-empty, .wc-empty-cart-message').first().waitFor({ timeout: 60000 });
	await page.waitForFunction(() => document.querySelector('.navbar-cart .cart-count')?.textContent === '0', null, { timeout: 30000 }).catch(() => {});
	check('C remove last item: header shows 0 (was stuck before)', (await header(page)) === '0', `header="${await header(page)}"`);
	check('C remove last item: bag note cookie gone', !(await hasBagNote(page)));
	check('C remove last item: bag count cookie gone', (await bagCountCookie(page)) === null, await bagCountCookie(page));

	await open(page, PRODUCT);
	check('C after emptying, product page: 0 bag calls', page.calls.length === 0, JSON.stringify(page.calls));
	check('C no JS errors', page.errors.length === 0, page.errors.join(' | '));
	await context.close();
}

// --- D. Shop-page quick add: stays on the shop page, header goes to 1 ------
if (run('D')) {
	const { context, page } = await newShopper();
	await open(page, '/shop/');
	const opener = page.locator('button.shop-add-to-cart').first();
	const modalSel = await opener.getAttribute('data-bs-target');
	await opener.click();
	const modal = page.locator(modalSel);
	await modal.waitFor({ state: 'visible', timeout: 15000 });
	await modal.locator('.woovr-variation[data-purchasable="yes"]').first().click();
	const btn = modal.locator('.single_add_to_cart_button').first();
	await page.waitForFunction((el) => !el.classList.contains('disabled'), await btn.elementHandle(), { timeout: 10000 });
	await btn.click();
	await page.waitForFunction(() => document.querySelector('.navbar-cart .cart-count')?.textContent === '1', null, { timeout: 60000 }).catch(() => {});
	check('D shop quick add: still on the shop page', new URL(page.url()).pathname === '/shop/', page.url());
	check('D shop quick add: header shows 1', (await header(page)) === '1', `header="${await header(page)}"`);
	check('D no JS errors', page.errors.length === 0, page.errors.join(' | '));
	await context.close();
}

// --- E. Save refused by the store (e.g. out of stock) ----------------------
if (run('E')) {
	const { context, page } = await newShopper();
	await page.route('**/?wc-ajax=xoo_wsc_add_to_cart', (route) => route.fulfill({
		contentType: 'application/json',
		body: JSON.stringify({ error: true, notice: '<ul class="xoo-wsc-notices"><li class="xoo-wsc-notice-error">Sorry, this size is out of stock.</li></ul>' }),
	}));
	await open(page, PRODUCT);
	const btn = await pickSizeM(page);
	await btn.click();
	await page.waitForTimeout(5000);
	check('E store refuses: shopper stays on product page', page.url().includes(PRODUCT), page.url());
	check('E store refuses: bag stays empty', !(await hasBagNote(page)));
	await context.close();
}

// --- F. Network drops during the save --------------------------------------
if (run('F')) {
	const { context, page } = await newShopper();
	await page.route('**/?wc-ajax=xoo_wsc_add_to_cart', (route) => route.abort('failed'));
	await open(page, PRODUCT);
	const btn = await pickSizeM(page);
	await btn.click();
	await page.waitForTimeout(5000);
	check('F network drop: shopper stays on product page', page.url().includes(PRODUCT), page.url());
	check('F network drop: button not stuck loading', !(await btn.getAttribute('class')).includes('loading'), await btn.getAttribute('class'));
	await context.close();
}

// --- G. No size picked ------------------------------------------------------
if (run('G')) {
	const { context, page } = await newShopper();
	await open(page, PRODUCT);
	const btn = page.locator('form.variations_form').first().locator('.single_add_to_cart_button');
	await btn.click({ force: true });
	await page.waitForTimeout(4000);
	check('G no size: stays on product page', page.url().includes(PRODUCT), page.url());
	check('G no size: nothing added', !(await hasBagNote(page)));
	await context.close();
}

// --- Cloudflare cache stand-in ----------------------------------------------
// A local caching proxy that serves page HTML the way Cloudflare does once the
// bag cookies no longer skip the cache: one copy per URL, shared by every
// visitor. Stricter than Cloudflare on purpose: it stores every 200 page, even
// ones that set cookies, so any bag that reaches the HTML would reach the next
// visitor. The path and query lists match the zone's bypass rules. A real
// proxy, not page.route: WebKit loses cookies on pages Playwright fulfils.
const ORIGIN_HOST = new URL(BASE).hostname;
const edgeCache = new Map();
const edge = { hits: 0, misses: 0 };
function cacheable(url) {
	const u = new URL(url);
	if (u.origin !== new URL(BASE).origin) return false;
	if (/^\/(cart|checkout|my-account|register|wp-admin|wp-login|wp-json|wp-cron)/.test(u.pathname)) return false;
	return !/wc-ajax|wc-api|rest_route|add-to-cart|remove_item|undo_item|order-again|pay_for_order|cancel_order/.test(u.search);
}
const proxy = http.createServer((req, res) => {
	const u = new URL(req.url);
	// Logged-in customers skip the cache, like the zone's bypass rule.
	const loggedIn = /wordpress_logged_in_|comment_author_/.test(req.headers.cookie || '');
	const isPage = req.method === 'GET' && !loggedIn && !/\.[a-z0-9]+$/i.test(u.pathname) && /text\/html/.test(req.headers.accept || '') && cacheable(u.href);
	const cached = isPage && edgeCache.get(u.href);
	if (cached) {
		edge.hits++;
		res.writeHead(200, cached.headers);
		return res.end(cached.body);
	}
	const headers = { ...req.headers, host: u.host };
	delete headers['proxy-connection'];
	if (isPage) headers['accept-encoding'] = 'identity';
	const upstream = http.request({ host: u.hostname === ORIGIN_HOST ? '127.0.0.1' : u.hostname, port: u.port || 80, method: req.method, path: u.pathname + u.search, headers }, (up) => {
		if (!isPage) {
			res.writeHead(up.statusCode, up.headers);
			return up.pipe(res);
		}
		edge.misses++;
		const chunks = [];
		up.on('data', (d) => chunks.push(d));
		up.on('end', () => {
			const body = Buffer.concat(chunks);
			if (up.statusCode === 200) {
				const stored = { ...up.headers };
				delete stored['set-cookie'];
				edgeCache.set(u.href, { headers: stored, body });
			}
			res.writeHead(up.statusCode, up.headers);
			res.end(body);
		});
	});
	upstream.on('error', () => { res.writeHead(502); res.end(); });
	req.pipe(upstream);
});
// HTTPS third parties (analytics, GoKwik's CDN) pass through untouched.
proxy.on('connect', (req, socket, head) => {
	const [host, port] = req.url.split(':');
	const tunnel = net.connect(Number(port) || 443, host, () => {
		socket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
		tunnel.write(head);
		tunnel.pipe(socket);
		socket.pipe(tunnel);
	});
	tunnel.on('error', () => socket.destroy());
	socket.on('error', () => tunnel.destroy());
});
await new Promise((resolve) => proxy.listen(0, '127.0.0.1', resolve));
const edgeBrowser = await engines[ENGINE].launch({ proxy: { server: `http://127.0.0.1:${proxy.address().port}` } });
const edgeSince = (before) => ({ hits: edge.hits - before.hits, misses: edge.misses - before.misses });

const BROWSE = ['/', '/shop/', '/shop/core-leggings/', PRODUCT];
const addToBag = (page, variationId, qty) => page.request.post(BASE + '/?wc-ajax=add_to_cart', { form: { product_id: String(variationId), quantity: String(qty) } });

// --- H. Shoppers with a bag get cached pages, and nobody sees their bag -----
if (run('H')) {
	// Shopper A fills the cache while holding 2 items.
	const a = await newShopper(edgeBrowser);
	await addToBag(a.page, 1842, 2);
	let before = { ...edge };
	for (const path of BROWSE) {
		await open(a.page, path);
		check(`H shopper A (2 items) ${path}: 0 bag calls`, a.page.calls.length === 0, JSON.stringify(a.page.calls));
		check(`H shopper A (2 items) ${path}: header shows 2`, (await header(a.page)) === '2', `header="${await header(a.page)}"`);
	}
	check('H shopper A filled the cache', edgeSince(before).misses === BROWSE.length && edgeCache.size === BROWSE.length, JSON.stringify(edgeSince(before)));
	check('H every cached copy is free of the bag', [...edgeCache.values()].every((v) => hasNoBag(v.body.toString())), `${edgeCache.size} pages cached`);

	// Guest B and shopper C (1 item) get A's cached copies.
	const b = await newShopper(edgeBrowser);
	before = { ...edge };
	for (const path of BROWSE) {
		await open(b.page, path);
		check(`H guest B ${path}: header shows 0`, (await header(b.page)) === '0', `header="${await header(b.page)}"`);
	}
	check('H guest B: all pages came from the cache', edgeSince(before).misses === 0 && edgeSince(before).hits === BROWSE.length, JSON.stringify(edgeSince(before)));
	check('H guest B: no bag cookies', !(await hasBagNote(b.page)) && (await bagCountCookie(b.page)) === null);

	const c = await newShopper(edgeBrowser);
	await addToBag(c.page, 1842, 1);
	before = { ...edge };
	await open(c.page, PRODUCT);
	check('H shopper C (1 item), cached page: header shows 1', (await header(c.page)) === '1', `header="${await header(c.page)}"`);
	check('H shopper C: page came from the cache', edgeSince(before).hits === 1 && edgeSince(before).misses === 0, JSON.stringify(edgeSince(before)));

	// A's bag is intact after browsing cached pages.
	await open(a.page, '/cart/');
	const rows = await cartRows(a.page);
	check('H shopper A cart page: still has the item, quantity 2', rows.length === 1 && /core sports bra/i.test(rows[0]) && (await a.page.locator('tr.cart_item input.qty').first().inputValue()) === '2', JSON.stringify(rows));
	check('H shopper A cart page: header shows 2', (await header(a.page)) === '2');

	// Change the bag on the cart page, then go back to a cached page.
	await a.page.locator('.quantity .minus').first().click();
	await a.page.locator('[name=update_cart]').click();
	await a.page.waitForFunction(() => document.querySelector('.navbar-cart .cart-count')?.textContent === '1', null, { timeout: 60000 }).catch(() => {});
	check('H shopper A lowers quantity to 1: count cookie says 1', (await bagCountCookie(a.page)) === '1', await bagCountCookie(a.page));
	await a.page.goBack({ waitUntil: 'load' }).catch(() => {});
	await a.page.waitForTimeout(2000);
	check('H shopper A back button to a cached page: header shows 1', (await header(a.page)) === '1', `${a.page.url().replace(BASE, '')} header="${await header(a.page)}"`);

	// Quick add from the cached shop page.
	await open(a.page, '/shop/');
	const opener = a.page.locator('button.shop-add-to-cart').first();
	const modal = a.page.locator(await opener.getAttribute('data-bs-target'));
	await opener.click();
	await modal.waitFor({ state: 'visible', timeout: 15000 });
	await modal.locator('.woovr-variation[data-purchasable="yes"]').first().click();
	const btn = modal.locator('.single_add_to_cart_button').first();
	await a.page.waitForFunction((el) => !el.classList.contains('disabled'), await btn.elementHandle(), { timeout: 10000 });
	await btn.click();
	await a.page.waitForFunction(() => document.querySelector('.navbar-cart .cart-count')?.textContent === '2', null, { timeout: 60000 }).catch(() => {});
	check('H shopper A quick add on cached shop page: header shows 2', (await header(a.page)) === '2', `header="${await header(a.page)}"`);
	await open(a.page, PRODUCT);
	check('H shopper A next cached page: header shows 2, 0 bag calls', (await header(a.page)) === '2' && a.page.calls.length === 0, `header="${await header(a.page)}" calls=${JSON.stringify(a.page.calls)}`);

	for (const s of [a, b, c]) check(`H no JS errors (${s === a ? 'A' : s === b ? 'B' : 'C'})`, s.page.errors.length === 0, s.page.errors.join(' | '));
	for (const s of [a, b, c]) await s.context.close();
}

// --- I. Shopper whose bag was filled before the count cookie existed --------
if (run('I')) {
	const { context, page } = await newShopper();
	await addToBag(page, 1842, 3);
	await context.clearCookies({ name: 'kirgo_bag_count' });
	await open(page, PRODUCT);
	check('I old bag, no count cookie: exactly 1 bag call', page.calls.length === 1 && page.calls[0] === 'xoo_wsc_refresh_fragments', JSON.stringify(page.calls));
	check('I old bag: header shows 3 after it', (await header(page)) === '3', `header="${await header(page)}"`);
	check('I old bag: count cookie now set to 3', (await bagCountCookie(page)) === '3', await bagCountCookie(page));
	await open(page, '/shop/');
	check('I old bag, next page: 0 bag calls, header 3', page.calls.length === 0 && (await header(page)) === '3', `header="${await header(page)}" calls=${JSON.stringify(page.calls)}`);
	check('I no JS errors', page.errors.length === 0, page.errors.join(' | '));
	await context.close();
}

// GoKwik's checkout opens on GoKwik's live servers, so the tests swap its
// script for a stand-in that only records what our pages hand it.
async function stubGoKwik(context) {
	await context.route(/^https:\/\/pdp\.gokwik\.co\//, (route) => route.abort());
	await context.addInitScript(() => {
		window.gokwikSdk = { initCheckout: (o) => { window.gkOpened = o; }, on: () => {}, close: () => {} };
	});
}
// The shopper's own bag id, from WooCommerce's session cookie.
const ownSessionId = async (page) => {
	const c = (await page.context().cookies()).find((x) => x.name.startsWith('wp_woocommerce_session_'));
	return c ? decodeURIComponent(c.value).split('|')[0] : null;
};
const gcSessionId = (page) => page.evaluate(() => window.gc_data?.session_id ?? null);
const bagTotal = async (page) => {
	await open(page, '/cart/');
	const qty = await page.locator('tr.cart_item input.qty').evaluateAll((els) => els.map((e) => Number(e.value)));
	return qty.reduce((a, b) => a + b, 0);
};

// Throwaway customers on the local copy, with a fresh random password each run.
const customers = [];
function newCustomer() {
	const login = `kirgo_e2e_${randomBytes(4).toString('hex')}`;
	const password = randomBytes(12).toString('hex');
	const out = execFileSync('php', [new URL('./test-user.php', import.meta.url).pathname, 'create', login, password], { encoding: 'utf8', env: { ...process.env, BASE } });
	if (!/created/.test(out)) throw new Error('could not create test customer: ' + out);
	customers.push(login);
	return { login, password };
}
async function logIn(page, who) {
	await open(page, '/my-account/');
	await page.fill('#username', who.login);
	await page.fill('#password', who.password);
	await Promise.all([page.waitForNavigation({ timeout: 90000 }), page.click('button[name=login]')]);
	await page.waitForTimeout(2000);
}
const isLoggedIn = async (page) => (await page.context().cookies()).some((c) => c.name.startsWith('wordpress_logged_in_'));

// --- J. Checkout after browsing cached pages hands GoKwik the shopper's own bag
if (run('J')) {
	// Another shopper fills the cache first, so this one browses shared copies.
	const other = await newShopper(edgeBrowser);
	await addToBag(other.page, 1842, 2);
	for (const path of BROWSE) await open(other.page, path);
	await other.context.close();

	const s = await newShopper(edgeBrowser);
	await stubGoKwik(s.context);
	await addToBag(s.page, 1842, 1);
	let before = { ...edge };
	await open(s.page, PRODUCT);
	check('J product page came from the cache', edgeSince(before).hits === 1, JSON.stringify(edgeSince(before)));
	check('J cached product page carries no bag id for GoKwik', (await gcSessionId(s.page)) === null, String(await gcSessionId(s.page)));

	await open(s.page, '/cart/');
	const own = await ownSessionId(s.page);
	check('J cart page gives GoKwik the shopper\'s own bag id', own && (await gcSessionId(s.page)) === own, `gc=${await gcSessionId(s.page)} own=${own}`);
	// The theme moves the button out of its box, so look for it anywhere on the cart page.
	await s.page.waitForFunction(() => /Place Order/i.test(document.querySelector('.woocommerce-cart .checkout-button')?.innerHTML || ''), null, { timeout: 15000 }).catch(() => {});
	const buttons = await s.page.evaluate(() => [...document.querySelectorAll('.woocommerce-cart .checkout-button')].map((e) => `${e.textContent.trim()} ${e.offsetWidth ? 'shown' : 'hidden'}`));
	check('J cart page shows the "Place Order" button', buttons.some((b) => /Place Order shown/.test(b)), `${s.page.url().replace(BASE, '')} ${JSON.stringify(buttons)}`);
	await s.page.locator('.woocommerce-cart .checkout-button').first().click({ timeout: 10000 }).catch(() => {});
	await s.page.waitForFunction(() => window.gkOpened, null, { timeout: 15000 }).catch(() => {});
	const opened = await s.page.evaluate(() => window.gkOpened || null);
	check('J cart "Place Order" opens GoKwik with the shopper\'s own bag', opened?.merchantParams?.merchantCheckoutId === own, JSON.stringify(opened?.merchantParams));

	const s2 = await newShopper(edgeBrowser);
	await stubGoKwik(s2.context);
	await addToBag(s2.page, 1842, 1);
	await open(s2.page, PRODUCT);
	await open(s2.page, '/checkout/');
	const own2 = await ownSessionId(s2.page);
	const opened2 = await s2.page.evaluate(() => window.gkOpened || null);
	check('J checkout page opens GoKwik with the shopper\'s own bag', own2 && opened2?.merchantParams?.merchantCheckoutId === own2, `gk=${opened2?.merchantParams?.merchantCheckoutId} own=${own2}`);
	check('J the two shoppers have different bag ids', own && own2 && own !== own2);
	for (const x of [s, s2]) check(`J no JS errors (${x === s ? 'cart' : 'checkout'})`, x.page.errors.length === 0, x.page.errors.join(' | '));
	for (const x of [s, s2]) await x.context.close();
}

// --- K. Logged-in customer: real pages, never cached, saved bag after logout --
if (run('K')) {
	// A guest fills the cache, so the page after logout comes from it and never
	// reaches the server.
	const warm = await newShopper(edgeBrowser);
	for (const path of BROWSE) await open(warm.page, path);
	await warm.context.close();

	const who = newCustomer();
	const k = await newShopper(edgeBrowser);
	await logIn(k.page, who);
	check('K logged in', await isLoggedIn(k.page));
	await addToBag(k.page, 1842, 2);
	const cachedBefore = edgeCache.size;
	let before = { ...edge };
	for (const path of BROWSE) {
		await open(k.page, path);
		check(`K logged in ${path}: header shows 2`, (await header(k.page)) === '2', `header="${await header(k.page)}"`);
	}
	check('K logged in: no page came from the cache', edgeSince(before).hits === 0, JSON.stringify(edgeSince(before)));
	check('K logged in: nothing was added to the cache', edgeCache.size === cachedBefore, `${cachedBefore} → ${edgeCache.size}`);
	const html = await (await k.page.request.get(BASE + '/shop/')).text();
	check('K logged in: the server builds the page with the real count', /<span class="cart-count">2<\/span>/.test(html));
	check('K logged in: count cookie says 2', (await bagCountCookie(k.page)) === '2', await bagCountCookie(k.page));

	await open(k.page, '/my-account/');
	before = { ...edge };
	await Promise.all([k.page.waitForNavigation({ timeout: 90000 }), k.page.locator('a[href*="customer-logout"]').first().click()]);
	await k.page.waitForTimeout(2000);
	check('K logged out', !(await isLoggedIn(k.page)));
	await open(k.page, PRODUCT);
	check('K pages after logout came from the cache', edgeSince(before).hits === 2 && edgeSince(before).misses === 0, JSON.stringify(edgeSince(before)));
	check('K after logout, cached page: header shows 0', (await header(k.page)) === '0', `header="${await header(k.page)}"`);
	check('K after logout: count cookie gone', (await bagCountCookie(k.page)) === null, await bagCountCookie(k.page));

	await logIn(k.page, who);
	await open(k.page, '/shop/');
	check('K logs back in: saved bag shows 2 in the header', (await header(k.page)) === '2', `header="${await header(k.page)}"`);
	check('K logs back in: bag still holds 2', (await bagTotal(k.page)) === 2);
	check('K no JS errors', k.page.errors.length === 0, k.page.errors.join(' | '));

	const g = await newShopper(edgeBrowser);
	for (const path of BROWSE) await open(g.page, path);
	check('K guest after a logged-in visit: header shows 0', (await header(g.page)) === '0');
	check('K every cached copy is still free of the bag', [...edgeCache.values()].every((v) => hasNoBag(v.body.toString())));
	for (const x of [k, g]) await x.context.close();
}

// --- N. Login runs out (browser closed) while the bag holds items -----------
if (run('N')) {
	const who = newCustomer();
	const n = await newShopper(edgeBrowser);
	await logIn(n.page, who);
	await addToBag(n.page, 1842, 2);
	await open(n.page, '/shop/');
	await n.context.clearCookies({ name: /^wordpress_logged_in_/ });
	check('N login ran out', !(await isLoggedIn(n.page)));
	await open(n.page, PRODUCT);
	console.log(`INFO  N login ran out, cached page header: ${await header(n.page)} (the old code shows 0)`);
	await logIn(n.page, who);
	await open(n.page, '/shop/');
	check('N logs in again: header shows 2', (await header(n.page)) === '2', `header="${await header(n.page)}"`);
	check('N logs in again: bag still holds 2', (await bagTotal(n.page)) === 2);
	check('N no JS errors', n.page.errors.length === 0, n.page.errors.join(' | '));
	await n.context.close();
}

// --- L. Guest fills a bag on cached pages, then logs in ------------------------
if (run('L')) {
	const who = newCustomer();
	const l = await newShopper(edgeBrowser);
	await addToBag(l.page, 1842, 1);
	await open(l.page, '/shop/');
	check('L guest with 1 item, cached page: header shows 1', (await header(l.page)) === '1');
	await logIn(l.page, who);
	check('L logged in', await isLoggedIn(l.page));
	await open(l.page, PRODUCT);
	check('L after login: header shows 1', (await header(l.page)) === '1', `header="${await header(l.page)}"`);
	check('L after login: count cookie says 1', (await bagCountCookie(l.page)) === '1', await bagCountCookie(l.page));
	check('L after login: bag still holds the item', (await bagTotal(l.page)) === 1);
	check('L no JS errors', l.page.errors.length === 0, l.page.errors.join(' | '));
	await l.context.close();
}

// --- M. Two tabs: a change in one tab shows in the other on its next page -----
if (run('M')) {
	const m = await newShopper(edgeBrowser);
	const tab1 = m.page;
	await open(tab1, '/shop/core-leggings/');
	const tab2 = watch(await m.context.newPage());
	await addCoreBraM(tab2);
	await tab2.waitForURL('**/cart/**', { timeout: 60000 });
	await tab2.waitForTimeout(3000);
	await open(tab1, '/shop/');
	check('M tab 2 adds, tab 1 next page: header shows 1, 0 bag calls', (await header(tab1)) === '1' && tab1.calls.length === 0, `header="${await header(tab1)}" calls=${JSON.stringify(tab1.calls)}`);

	await tab2.locator('tr.cart_item a.remove').first().click();
	await tab2.locator('.cart-empty, .wc-empty-cart-message').first().waitFor({ timeout: 60000 });
	await open(tab1, PRODUCT);
	check('M tab 2 empties the bag, tab 1 next page: header shows 0, 0 bag calls', (await header(tab1)) === '0' && tab1.calls.length === 0, `header="${await header(tab1)}" calls=${JSON.stringify(tab1.calls)}`);
	check('M no JS errors', tab1.errors.length === 0 && tab2.errors.length === 0, [...tab1.errors, ...tab2.errors].join(' | '));
	await m.context.close();
}

// --- R. Sign-up page works for a shopper with a bag, and the bag is kept -----
// The form's security code is tied to the shopper's bag, so a page built as a
// guest would fail for anyone with a bag. Sign-ups are throwaway customers on
// the local copy, where email and Mailchimp are switched off.
async function signUp(page) {
	const login = `kirgo_e2e_${randomBytes(4).toString('hex')}`;
	customers.push(login);
	await open(page, '/register/');
	await page.fill('#reg_username', login);
	await page.fill('#reg_email', `${login}@example.test`);
	await Promise.all([page.waitForNavigation({ timeout: 90000 }), page.click('button[name=register]')]);
	await page.waitForTimeout(2000);
	const error = await page.locator('.woocommerce-error, .woocommerce-notices-wrapper .is-error').allInnerTexts();
	return error.join(' ').trim();
}
if (run('R')) {
	const r = await newShopper(edgeBrowser);
	await addToBag(r.page, 1842, 1);
	await open(r.page, '/shop/');
	const before = { ...edge };
	const error = await signUp(r.page);
	check('R shopper with 1 item: sign-up page never comes from the cache', edgeSince(before).hits === 0, JSON.stringify(edgeSince(before)));
	check('R shopper with 1 item: sign-up shows no error', error === '', error);
	check('R shopper with 1 item: signed up and logged in', await isLoggedIn(r.page));
	await open(r.page, PRODUCT);
	check('R after sign-up: header shows 1', (await header(r.page)) === '1', `header="${await header(r.page)}"`);
	check('R after sign-up: bag still holds the item', (await bagTotal(r.page)) === 1);
	check('R no JS errors (with a bag)', r.page.errors.length === 0, r.page.errors.join(' | '));
	await r.context.close();

	const g = await newShopper(edgeBrowser);
	const gError = await signUp(g.page);
	check('R guest with no bag: sign-up shows no error', gError === '', gError);
	check('R guest with no bag: signed up and logged in', await isLoggedIn(g.page));
	check('R no JS errors (no bag)', g.page.errors.length === 0, g.page.errors.join(' | '));
	await g.context.close();
}

for (const login of customers) execFileSync('php', [new URL('./test-user.php', import.meta.url).pathname, 'delete', login], { env: { ...process.env, BASE } });

await browser.close();
await edgeBrowser.close();
proxy.close();
const failed = results.filter((r) => !r.ok);
console.log(`\n${ENGINE}: ${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
