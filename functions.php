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
	define( '_S_VERSION', '1.3.0' );
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
add_action( 'woocommerce_after_quantity_input_field', 'display_quantity_plus' );
function display_quantity_plus() {
   echo '<button type="button" class="plus" >+</button>';
}
add_action( 'woocommerce_before_quantity_input_field', 'display_quantity_minus' );
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
    $custom_text = '<strong>You can still save a total of Rs. 100/-</strong> add <a href="/product/classic-sports-bra"> sports bra</a> to avail';
    echo '<p class="discount-text">' . $custom_text . '</p>';
}


/***********************
 * Checkout Page
 ***********************/

// Changed the checkout order title text
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
   
   echo '<div class="wow animate__animated animate__fadeInUp duplicate-elements">';
  
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


// Notify me modal on detail page 
add_action( 'woocommerce_single_product_summary', 'add_modal_content', 35 );

function add_modal_content() {
 	echo "
	<div class='modal fade' id='notifyMePopup' tabindex='-1' aria-labelledby='notifyMePopupLabel' aria-hidden='true'>
		<div class='modal-dialog modal-dialog-centered'>
			<div class='modal-content'>
				<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
				<div class='modal-body'>
					<p class='model-title'>ReStock Alert</p>";
					echo do_shortcode("[contact-form-7 id='398' title='Notify me']");
				echo "</div>
			</div>
		</div>
	</div>";
}


// Show Alternate Products on Cart Page
// add_action( 'woocommerce_cart_collaterals', 'display_related_products_on_cart_page' );

// Display related products on the cart page
add_action( 'woocommerce_cart_collaterals', 'display_related_products_on_cart_page' );

function display_related_products_on_cart_page() {
	display_related_products();
}

// Display related products on the checkout page
add_action( 'woocommerce_after_checkout_form', 'display_related_products_on_checkout_page' );

function display_related_products_on_checkout_page() {
	display_related_products();
}


function display_related_products() {
	// Get the current product IDs from the cart
	$product_ids = array();

	foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
		$product_ids[] = $cart_item['product_id'];
	}
	
	
	// Check if product with ID 438 is in the cart
	$set_product_id_438_in_cart = in_array( 438, $product_ids );
	$set_product_id_1406_in_cart = in_array( 1406, $product_ids );

	// Query for related products based on the current product IDs
	$related_args = array(
		'post_type' => 'product',
		'posts_per_page' => 1,
		'post__not_in' => $product_ids,
		'orderby' => 'rand',
		'product_cat' => 'single-product',
		'meta_query' => array(
			array(
				'key' => '_stock_status',
				'value' => 'instock',
			),
		),
	);
	$related_query = new WP_Query( $related_args );

	// Display the related products
	if ( $related_query->have_posts() && !$set_product_id_438_in_cart && !$set_product_id_1406_in_cart ) {

		echo '<div class="alternate-cart-products">';
			echo '<h2 class="cart-product-set-text">make it a set and</br> <span>get free shipping</span></h2>';
			echo '<p class="add-alternate-product-to-cart-text">Add our <span class="alternateProductTitle"></span> to your cart for a complete kirgo experience</p>';
			echo '<ul class="products">';

			while ( $related_query->have_posts() ) {

				$related_query->the_post();
				global $product;
				echo '<li class="product">';
					echo '<a href="' . esc_url( get_permalink() ) . '" class="cart-product-img">' . $product->get_image() . '</a>';
					echo '<div class="cart-product-details">';
						echo '<h3 class="cart-product-title"><a href="' . esc_url( get_permalink() ) . '">' . get_the_title() . '</a></h3>';
						echo '<div class="woocommerce-product-details__short-description">' . get_the_excerpt() . '</div>';
					echo '</div>';
					echo '<button href="#" class="product-size-modal-button" data-bs-toggle="modal" data-bs-target="#product-size-modal-' . get_the_ID() . '">Add for&nbsp;' . $product->get_price_html() . '</button>';
				echo '</li>';
				// Product size modal
				echo '<div class="modal fade cart-product-size-modal" id="product-size-modal-' . get_the_ID() . '" tabindex="-1" role="dialog" aria-labelledby="product-size-modal-label-' . get_the_ID() . '" aria-hidden="true">';
					echo '<div class="modal-dialog modal-dialog-centered" role="document">';
						echo '<div class="modal-content">';
							
							echo '<div class="modal-body">';
								echo '<p class="modal-title">select</br> <span>' . get_the_title() . ' size</span></p>';
									
								// Buy Button
								echo '<div class="buy-button">';
									woocommerce_template_single_add_to_cart();
								echo '</div>';
							echo '</div>';
						echo '</div>';
					echo '</div>';
				echo '</div>';
			}
			echo '</ul>';
		echo '</div>';
	}

	// Reset the post data
	wp_reset_postdata();

}

function get_variation_price( $variation_id ) {
	$variation = wc_get_product( $variation_id );
	return $variation->get_price_html();
}


// share icons modal on detail page 
add_action( 'woocommerce_single_product_summary', 'add_share_icons_modal', 5 );

function add_share_icons_modal() {
 	echo "
	<button class='product-share-modal-button' data-bs-toggle='modal' data-bs-target='#productShareIcons'>
		<img class='share-icon' src='" . get_template_directory_uri() . "/assets/images/icons/share.svg' alt='Share Icon'>
	</button>
	<div class='modal fade' id='productShareIcons' tabindex='-1' aria-labelledby='productShareIconsLabel' aria-hidden='true'>
		<div class='modal-dialog modal-dialog-centered'>
			<div class='modal-content'>
				<div class='modal-body'>
					<p class='modal-title'><span>share</span> on</p>
				</div>
			</div>
		</div>
	</div>";
}

// Redirect to home page after WooCommerce logout
function redirect_after_woocommerce_logout() {
    wp_redirect(home_url());
    exit;
}
add_action('wp_logout', 'redirect_after_woocommerce_logout');

/**
 * Hide shipping rates when free shipping is available.
 * Updated to support WooCommerce 2.6 Shipping Zones.
 */
function my_hide_shipping_when_free_is_available( $rates ) {
	$free = array();

	foreach ( $rates as $rate_id => $rate ) {
		if ( 'free_shipping' === $rate->method_id ) {
			$free[ $rate_id ] = $rate;
			break;
		}
	}

	return ! empty( $free ) ? $free : $rates;
}

add_filter( 'woocommerce_package_rates', 'my_hide_shipping_when_free_is_available', 100 );

// Add a class to the body tag if cart is empty
function add_class_if_cart_empty($classes) {
    if (WC()->cart->is_empty()) {
        $classes[] = 'cart-empty';
    }
    return $classes;
}
add_filter('body_class', 'add_class_if_cart_empty');


// Add Cash on Delivery (COD) charges
// add_action( 'woocommerce_cart_calculate_fees', 'add_cod_fee' );
// function add_cod_fee() {
//     if ( 'cod' === WC()->session->chosen_payment_method ) {
//         $cod_fee = 50; // Set the COD fee amount here
//         WC()->cart->add_fee( 'Cash on delivery Fee', $cod_fee, true );
//     }
// }

// Avoid blur images
add_filter(
    'wp_calculate_image_sizes',
    function( $sizes ) {
        $sizes = '(max-width: 960px) 50vw, 430px';

        return $sizes;
    }
);


function custom_update_cart_button_text($translated_text, $text, $domain) {
    // Check if the text domain is "woocommerce"
    if ($domain === 'woocommerce') {
        // Check if the original text is "Update Cart"
        if ($text === 'Update cart') {
            // Replace it with your desired text
            $translated_text = 'Update receipt';
        }
    }
    return $translated_text;
}

add_filter('gettext', 'custom_update_cart_button_text', 20, 3);


// Added Poppins font
function enqueue_custom_fonts() {
    wp_enqueue_style('custom-font', 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_fonts');


// Rename buttons
function custom_woocommerce_messages( $message, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        // Change "Browse Products" text
        if ( $text === 'Browse products' ) {
            $message = 'Shop now'; 
        }

        // Change "No orders found." message
        if ( $text === 'No order has been made yet.' ) {
            $message = 'No orders yet'; 
        }
    }
    return $message;
}
add_filter( 'gettext', 'custom_woocommerce_messages', 20, 3 );


function ajay_add_summer_collection_body_class( $classes ) {
    if ( is_product() ) { 
        global $post;
        
        $product = wc_get_product( $post->ID ); 

        if ( $product && has_term( 'summer-collection', 'product_cat', $product->get_id() ) ) {
            $classes[] = 'summer-collection-product';
        }
    }
    return $classes;
}
add_filter( 'body_class', 'ajay_add_summer_collection_body_class' );

// function custom_add_to_cart_redirect($url) {
//     return wc_get_cart_url(); // Redirects to cart page
// }
// add_filter('woocommerce_add_to_cart_redirect', 'custom_add_to_cart_redirect');

// add_action( 'woocommerce_add_to_cart', function ()
// {
// 	header('Location: http://kirgo.test/cart/');
// });

// function custom_add_to_cart_redirect($url) {
//     if (isset($_REQUEST['add-to-cart']) && !empty($_REQUEST['add-to-cart'])) {
//         $product_id = $_REQUEST['add-to-cart'];
        
//         // Check if the product was actually added to cart
//         $was_added = wc_get_notices('success');
        
//         if (!empty($was_added)) {
//             return wc_get_cart_url(); // Redirect to cart only if product was added successfully
//         }
//     }
    
//     return $url; // Otherwise return the default URL
// }
// add_filter('woocommerce_add_to_cart_redirect', 'custom_add_to_cart_redirect');

function my_custom_function() {
    // Get the WooCommerce cart URL
    $cart_url = wc_get_cart_url();
    
    // This will modify the AJAX response to include a redirect instruction
    add_filter('xoo_wsc_add_to_cart_data', function($data) use ($cart_url) {
        $data['redirect'] = $cart_url;
        return $data;
    });
}

// Hook into the appropriate action
add_action('wp_ajax_xoo_wsc_add_to_cart', 'my_custom_function', 5); // For logged-in users
add_action('wp_ajax_nopriv_xoo_wsc_add_to_cart', 'my_custom_function', 5); // For