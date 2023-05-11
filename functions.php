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

require get_template_directory() . '/inc/woocommerce/single-product.php';

// Show Buttons on Cart quantity input
add_action( 'woocommerce_before_quantity_input_field', 'display_quantity_plus' );
function display_quantity_plus() {
   echo '<button type="button" class="plus" >+</button>';
}
add_action( 'woocommerce_after_quantity_input_field', 'display_quantity_minus' );
function display_quantity_minus() {
   echo '<button type="button" class="minus" >-</button>';
}


/***********************
 * Cart Page
 ***********************/

// Chnaged the cart total title text
add_filter( 'gettext', 'custom_cart_totals_title', 10, 3 );

function custom_cart_totals_title( $translated_text, $text, $domain ) {
    if ( $text == 'Cart totals' && $domain == 'woocommerce' ) {
        $translated_text = __( 'your receipt', $domain );
    }
    return $translated_text;
}

// Add custom text with hyperlink before "Proceed to Checkout" button on cart page
add_action( 'woocommerce_proceed_to_checkout', 'add_custom_text_with_hyperlink_before_checkout_button', 5 );

function add_custom_text_with_hyperlink_before_checkout_button() {
    $custom_text = '<strong>You can still save a total of Rs. <span>300</span>/-</strong> <a href="/product/classic-sports-bra">add the sports bra</a> to avail';
    echo '<p class="discount-text">' . $custom_text . '</p>';
}


/***********************
 * Checkout Page
 ***********************/

// Chnaged the checkout order title text
add_filter( 'gettext', 'woocommerce_checkout_before_order_review_heading', 10, 3 );

function woocommerce_checkout_before_order_review_heading( $translated_text, $text, $domain ) {
    if ( $text == 'Your order' && $domain == 'woocommerce' ) {
        $translated_text = __( 'your receipt', $domain );
    }
    return $translated_text;
}

add_action( 'woocommerce_single_product_summary', 'add_duplicate_content', 25 );

function add_duplicate_content() {
   global $product;
   echo '<div class="duplicate-elements">';
  
   // Product Image
   echo '<div class="product-image-side">';
   echo $product->get_image();
   echo '</div>';

   echo '<div class="product-details-side">';
 
   echo '<div class="product-text-content">';

   // Product Title
   echo '<div class="product-title-div">';
   echo '<h1 class="product_title">'.$product->get_name().'</h1>';
   echo '</div>';
 
   // Short Description
   echo '<div class="product-short-description">';
   echo $product->get_short_description();
   echo '</div>';

   echo '</div>';
   
   // Buy Button
   echo '<div class="buy-button">';
   woocommerce_template_single_add_to_cart();
   echo '</div>';
   
   echo '</div>';

   echo '</div>';
}

add_action( 'woocommerce_single_product_summary', 'add_modal_content', 35 );

function add_modal_content() {
 	echo "
	<div class='modal fade' id='notifyMePopup' tabindex='-1' aria-labelledby='notifyMePopupLabel' aria-hidden='true'>
		<div class='modal-dialog modal-dialog-centered'>
			<div class='modal-content'>
				<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
				<div class='modal-body'>
					<p class='model-title'>enter e-mail address to get notify</p>
					<form class='notify-me-form'>
						<input
							type='email'
							name='email'
							placeholder='enter e-mail address'
						/>
						<button type='button' class='notify-me-button'>send</button>
					</form>
				</div>
			</div>
		</div>
	</div>";
}
