<?php
/**
 * Kirgo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Kirgo
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function kirgo_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on kirgo, use a find and replace
		* to change 'kirgo' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'kirgo', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'kirgo' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'kirgo_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'kirgo_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function kirgo_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'kirgo_content_width', 640 );
}
add_action( 'after_setup_theme', 'kirgo_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function kirgo_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'kirgo' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'kirgo' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'kirgo_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function kirgo_scripts() {
	wp_enqueue_style( 'kirgo-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'kirgo-style', 'rtl', 'replace' );

	wp_enqueue_script( 'kirgo-navigation', get_template_directory_uri() . '/assets/dist/js/navigation.js', array(), _S_VERSION, true );

	// app js
	wp_enqueue_script( 'kirgo-appjs', get_template_directory_uri() . '/assets/dist/js/app.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'kirgo_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}


/**
 * Load Guternberg editor for Woocommerce products
 */
// Enable Gutenberg editor for WooCommerce
// function j0e_activate_gutenberg_product( $can_edit, $post_type ) {
// 	if ( $post_type == 'product' ) {
// 		   $can_edit = true;
// 	   }
// 	   return $can_edit;
//    }
//    add_filter( 'use_block_editor_for_post_type', 'j0e_activate_gutenberg_product', 10, 2 );

//    // enable taxonomy fields for woocommerce with gutenberg on
//    function j0e_enable_taxonomy_rest( $args ) {
// 	   $args['show_in_rest'] = true;
// 	   return $args;
//    }
//    add_filter( 'woocommerce_taxonomy_args_product_cat', 'j0e_enable_taxonomy_rest' );
//    add_filter( 'woocommerce_taxonomy_args_product_tag', 'j0e_enable_taxonomy_rest' );

/***********************
 * Single Product
 ***********************/

/**
 * Extra variations component
 */
function woocommerce_single_product_variations_extras() {
	echo "
	<div class='woovr-variation__extra'>
		<span class='woovr-variation__extra-title'>XS & XL coming soon</span>
		<a class='woovr-variation__extra-link' href='#'>notify me</a>
	</div>";
}

add_action('woovr_variations_after', 'woocommerce_single_product_variations_extras', 10, 2);


/**
 * Transform buy now button
 */
function tranform_buy_now($output, $atts) {
	global $product;

	$btn_text = 'Buy Now';

	if ($product) {

		$btn_text = 'buy for ' . wc_price( wc_get_price_to_display( $product, array( 'price' => $product->get_price() ) ) );

		$output = sprintf( '<button type="submit" name="buy-now" value="%d" class="wpcbn-btn wpcbn-btn-single single_add_to_cart_button button alt btn btn-light" data-product_id="%s">%s</button>', $product->get_ID(), $product->get_ID(), $btn_text );
	}

	return $output;
}

add_filter('wpcbn_btn_single', 'tranform_buy_now', 10, 3);

/**
 * Add icon to add to cart
 */
add_filter( 'woocommerce_product_single_add_to_cart_text', function() {
    return __( 'Add to cart 🔥', 'kirgo' );
} );


/**
 * Product FAQ Accordion
 */
function woocommerce_single_product_faq_accordion() {
	get_template_part( 'template-parts/content', 'product-meta' );
}

add_action('woocommerce_after_add_to_cart_button', 'woocommerce_single_product_faq_accordion', 10, 2);

