// End-to-end checks for the empty-bag fix and the bag-check reduction.
// Each test starts as a brand-new shopper (fresh browser context) on a
// phone-sized screen, so the desktop phone-frame wrapper never kicks in.
// Run: node bag-tests.mjs [chromium|webkit]
import { chromium, webkit } from 'playwright';

const BASE = process.env.BASE || 'http://kirgo.test';
const ENGINE = process.argv[2] || 'chromium';
const PRODUCT = '/shop/core-sports-bra/';
const results = [];

const engines = { chromium, webkit };
const device = ENGINE === 'webkit'
	? { viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1', isMobile: true, hasTouch: true }
	: { viewport: { width: 412, height: 915 }, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36', isMobile: true, hasTouch: true };

const browser = await engines[ENGINE].launch();

function check(name, ok, detail) {
	results.push({ name, ok: !!ok, detail });
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}

async function newShopper() {
	const context = await browser.newContext(device);
	const page = await context.newPage();
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
	return { context, page };
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
{
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
{
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
{
	const { context, page } = await newShopper();
	await addCoreBraM(page);
	await page.waitForURL('**/cart/**', { timeout: 60000 });
	await page.waitForLoadState('load');
	await page.waitForTimeout(3000);
	check('C normal add: bag has 1 item', (await cartRows(page)).length === 1);
	check('C normal add: bag note cookie set', await hasBagNote(page));

	await open(page, '/shop/core-leggings/');
	check('C item in bag, product page: exactly 1 bag call', page.calls.length === 1 && page.calls[0] === 'xoo_wsc_refresh_fragments', JSON.stringify(page.calls));
	check('C item in bag, product page: header shows 1', (await header(page)) === '1');
	const html = await (await page.request.get(BASE + '/shop/')).text();
	check('C server writes the count into the page', /<span class="cart-count">1<\/span>/.test(html));

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

	await open(page, PRODUCT);
	check('C after emptying, product page: 0 bag calls', page.calls.length === 0, JSON.stringify(page.calls));
	check('C no JS errors', page.errors.length === 0, page.errors.join(' | '));
	await context.close();
}

// --- D. Shop-page quick add: stays on the shop page, header goes to 1 ------
{
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
{
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
{
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
{
	const { context, page } = await newShopper();
	await open(page, PRODUCT);
	const btn = page.locator('form.variations_form').first().locator('.single_add_to_cart_button');
	await btn.click({ force: true });
	await page.waitForTimeout(4000);
	check('G no size: stays on product page', page.url().includes(PRODUCT), page.url());
	check('G no size: nothing added', !(await hasBagNote(page)));
	await context.close();
}

await browser.close();
const failed = results.filter((r) => !r.ok);
console.log(`\n${ENGINE}: ${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
