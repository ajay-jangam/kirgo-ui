<?php


/**
 * Extra variations component
 */
function woocommerce_single_product_variations_extras() {
	echo "
	<div class='woovr-variation__extra'>
		<span class='woovr-variation__extra-title'>XS & XL coming soon</span>
		<!-- <a class='woovr-variation__extra-link' href='#'>notify me</a> -->

		<button type='button' class='woovr-variation__extra-link' data-bs-toggle='modal' data-bs-target='#notifyMePopup'>
		notify me
		</button>

		
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
    return __( 'Add to cart', 'kirgo' );
} );


/**
 * After Product Add to cart button
 */
function woocommerce_single_product_after_addtocart() {
	get_template_part( 'template-parts/woocommerce/content', 'product-meta-top' );
}

add_action('woocommerce_after_add_to_cart_button', 'woocommerce_single_product_after_addtocart', 10, 2);

/**
 * After Product Reviews
 */
function woocommerce_single_product_after_reviews() {
	get_template_part( 'template-parts/woocommerce/content', 'product-meta-bottom' );
}

add_action('woocommerce_product_after_tabs', 'woocommerce_single_product_after_reviews', 10, 2);



/**
* Remove tabs from woocommerce
*/
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {

unset( $tabs['description'] ); // Remove the description tab
// unset( $tabs['reviews'] ); // Remove the reviews tab
unset( $tabs['additional_information'] ); // Remove the additional information tab

return $tabs;
}

/**
 * Remove related products output
 */
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );