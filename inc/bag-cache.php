<?php
/**
 * Lets Cloudflare serve cached pages to shoppers who have a bag.
 *
 * Browse pages (home, shop, products, content pages) are built as if for a
 * guest: WooCommerce's cart cookies are hidden from this request before
 * WooCommerce loads the cart, so the HTML never holds one shopper's bag and
 * is safe to cache for everyone. The header count is filled in by the
 * browser from the kirgo_bag_count cookie, which is kept in step with the
 * cart on every request that does load it (cart, checkout, wc-ajax).
 *
 * KEEP IN SYNC WITH CLOUDFLARE: every request Cloudflare may cache must be
 * built here as a guest. The paths, query words and cookies below are the
 * same lists as the zone's "Bypass dynamic paths" and "Bypass for logged-in
 * users" cache rules. Adding a cached path in Cloudflare without adding it
 * here is safe; caching a path that is excluded here is not.
 *
 * Must load before the init hook (WooCommerce reads the cart cookies there),
 * so it is required from functions.php at theme load.
 *
 * @package Kirgo
 */

define('KIRGO_BAG_COUNT_COOKIE', 'kirgo_bag_count');

/**
 * Whether this request is a browse page that Cloudflare may cache.
 */
function kirgo_is_cacheable_page_request()
{
	$method = isset($_SERVER['REQUEST_METHOD']) ? strtoupper($_SERVER['REQUEST_METHOD']) : '';
	if ('GET' !== $method && 'HEAD' !== $method) {
		return false;
	}
	if (is_admin() || wp_doing_ajax() || wp_doing_cron() || (defined('WP_CLI') && WP_CLI)) {
		return false;
	}

	$uri   = isset($_SERVER['REQUEST_URI']) ? wp_unslash($_SERVER['REQUEST_URI']) : '/';
	$path  = (string) wp_parse_url($uri, PHP_URL_PATH);
	$query = (string) wp_parse_url($uri, PHP_URL_QUERY);

	foreach (array('/cart', '/checkout', '/my-account', '/wp-admin', '/wp-login', '/wp-json', '/wp-cron') as $prefix) {
		if (0 === strpos($path, $prefix)) {
			return false;
		}
	}
	foreach (array('wc-ajax', 'wc-api', 'rest_route', 'add-to-cart', 'remove_item', 'undo_item', 'order-again', 'pay_for_order', 'cancel_order') as $word) {
		if (false !== strpos($query, $word)) {
			return false;
		}
	}
	foreach (array_keys($_COOKIE) as $name) {
		if (0 === strpos($name, 'wordpress_logged_in_') || 0 === strpos($name, 'comment_author_')) {
			return false;
		}
	}

	return true;
}

/**
 * Hide the cart cookies from WooCommerce on cacheable browse pages.
 *
 * Only this request's copy is changed. The browser keeps its cookies, and
 * WooCommerce sends no cookie changes back, because with no cart cookie in
 * the request it has nothing to update or clear.
 */
function kirgo_build_browse_pages_as_guest()
{
	if (!kirgo_is_cacheable_page_request()) {
		return;
	}
	foreach (array_keys($_COOKIE) as $name) {
		if (0 === strpos($name, 'wp_woocommerce_session_')) {
			// Guest bag ids start with t_. Any other id is a customer's bag left
			// behind by a logout: WooCommerce clears that on the next page it
			// sees, and this page hides it, so clear it here instead.
			$customer_id = explode('|', wp_unslash($_COOKIE[$name]))[0];
			if ('' !== $customer_id && 0 !== strpos($customer_id, 't_')) {
				$GLOBALS['kirgo_left_after_logout'] = array('cookie' => $name, 'customer_id' => $customer_id);
			}
		}
		if (
			0 === strpos($name, 'wp_woocommerce_session_')
			|| in_array($name, array('woocommerce_items_in_cart', 'woocommerce_cart_hash', 'woocommerce_recently_viewed'), true)
		) {
			unset($_COOKIE[$name]);
		}
	}
	$GLOBALS['kirgo_built_as_guest'] = true;
}
kirgo_build_browse_pages_as_guest();

/**
 * Do WooCommerce's logged-out cleanup for a customer's bag this page hid.
 *
 * The theme's logout redirect stops the request before WooCommerce clears the
 * bag, so the browser keeps the customer's bag cookies. WooCommerce would
 * delete them, and the customer's server copy of the bag, on the next page.
 * Their saved bag stays on their account and comes back when they log in.
 * The page itself is still built as a guest.
 */
function kirgo_clear_bag_left_after_logout()
{
	if (empty($GLOBALS['kirgo_left_after_logout']) || headers_sent()) {
		return;
	}
	$left = $GLOBALS['kirgo_left_after_logout'];
	if (function_exists('WC') && WC()->session && method_exists(WC()->session, 'delete_session')) {
		WC()->session->delete_session($left['customer_id']);
	}
	wc_setcookie($left['cookie'], '', time() - YEAR_IN_SECONDS);
	foreach (array('woocommerce_items_in_cart', 'woocommerce_cart_hash', KIRGO_BAG_COUNT_COOKIE) as $name) {
		wc_setcookie($name, '', time() - HOUR_IN_SECONDS);
	}
}
add_action('wp_loaded', 'kirgo_clear_bag_left_after_logout', 20);

/**
 * Clear the bag cookies during the logout itself.
 *
 * The page after logout usually comes from Cloudflare's cache and never
 * reaches WordPress, so the cleanup above would not run. This runs before the
 * theme's logout redirect, which stops the request (functions.php).
 */
function kirgo_clear_bag_on_logout()
{
	if (function_exists('WC') && WC()->session && method_exists(WC()->session, 'destroy_session')) {
		WC()->session->destroy_session();
	}
	if (!headers_sent()) {
		foreach (array('woocommerce_items_in_cart', 'woocommerce_cart_hash', KIRGO_BAG_COUNT_COOKIE) as $name) {
			wc_setcookie($name, '', time() - HOUR_IN_SECONDS);
		}
	}
	unset($_COOKIE[KIRGO_BAG_COUNT_COOKIE]);
}
add_action('wp_logout', 'kirgo_clear_bag_on_logout', 5);

/**
 * Keep the kirgo_bag_count cookie equal to the number of items in the bag.
 *
 * Runs whenever WooCommerce updates its own cart cookies, and once per page
 * on requests that load the real cart, which also clears a count left over
 * from a bag that expired. Readable by JavaScript on purpose: it holds only
 * a number, and the header shows it.
 */
function kirgo_sync_bag_count_cookie()
{
	if (!empty($GLOBALS['kirgo_built_as_guest']) || headers_sent() || !function_exists('WC') || !WC()->cart) {
		return;
	}
	$name  = KIRGO_BAG_COUNT_COOKIE;
	$count = (int) WC()->cart->get_cart_contents_count();

	if ($count > 0) {
		if (!isset($_COOKIE[$name]) || (string) $count !== $_COOKIE[$name]) {
			wc_setcookie($name, (string) $count, time() + 2 * DAY_IN_SECONDS);
			$_COOKIE[$name] = (string) $count;
		}
	} elseif (isset($_COOKIE[$name])) {
		wc_setcookie($name, '', time() - HOUR_IN_SECONDS);
		unset($_COOKIE[$name]);
	}
}
add_action('woocommerce_set_cart_cookies', 'kirgo_sync_bag_count_cookie');
add_action('wp', 'kirgo_sync_bag_count_cookie', 100);
