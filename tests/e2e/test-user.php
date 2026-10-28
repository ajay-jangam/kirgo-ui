<?php
// Creates and deletes throwaway customers for bag-tests.mjs on a LOCAL copy.
// Terminal only: it refuses to run from a web request.
// Usage: php test-user.php create <login> <password> | delete <login>
if (PHP_SAPI !== 'cli') {
	http_response_code(404);
	exit;
}
$wp_root = getenv('WP_ROOT') ?: '/Users/mac/Documents/xoco/kirgoprod';
$_SERVER['HTTP_HOST'] = parse_url(getenv('BASE') ?: 'http://kirgoprod.test', PHP_URL_HOST);
$_SERVER['REQUEST_URI'] = '/';
define('WP_USE_THEMES', false);
require $wp_root . '/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/user.php';

[, $mode, $login] = $argv;
if (strpos($login, 'kirgo_e2e_') !== 0) exit("refusing: test logins start with kirgo_e2e_\n");
$existing = get_user_by('login', $login);
if ($mode === 'delete') {
	if ($existing) wp_delete_user($existing->ID);
	exit("deleted\n");
}
if ($existing) wp_delete_user($existing->ID);
$id = wp_insert_user(['user_login' => $login, 'user_pass' => $argv[3], 'user_email' => $login . '@example.test', 'role' => 'customer']);
echo is_wp_error($id) ? 'ERR ' . $id->get_error_message() : "created $id", "\n";
