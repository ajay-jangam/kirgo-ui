<?php


/**
 * Render disabled (unchecked "Enable") variations as greyed-out size buttons.
 *
 * WooVR skips variations where variation_is_visible() === false (i.e. the
 * "Enable" checkbox is unchecked in the product edit page). We fetch ALL
 * children, find the disabled ones, and inject them with the same WooVR
 * markup so CSS can grey them out via [data-purchasable="no"].
 *
 * See: assets/sass/pages/product-single.scss (.woovr-variation[data-purchasable="no"])
 */
function kirgo_render_disabled_variations() {
	global $product;

	if ( ! is_a( $product, 'WC_Product' ) || ! $product->is_type( 'variable' ) ) {
		return;
	}

	$all_children = $product->get_children(); // ALL variation IDs, including disabled ones

	if ( empty( $all_children ) ) {
		return;
	}

	$disabled_variations = [];

	foreach ( $all_children as $child_id ) {
		$child_product = wc_get_product( $child_id );

		// Only collect truly disabled (not-visible) variations
		if ( ! $child_product || $child_product->variation_is_visible() ) {
			continue;
		}

		$disabled_variations[] = $child_product;
	}

	if ( empty( $disabled_variations ) ) {
		return;
	}

	// Output disabled buttons using the same WooVR DOM structure so that:
	// 1. The existing JS abbreviation logic (.woovr-variation-name) picks them up.
	// 2. JS moves them into .woovr-variations and sorts by size order.
	// 3. CSS [data-purchasable="no"] greys them out once inside the container.
	echo '<div class="kirgo-disabled-staging">';
	foreach ( $disabled_variations as $child_product ) {
		$child_name = $child_product->get_name();
		// Strip parent product name prefix (WooCommerce appends it automatically)
		$parent_name = $product->get_name();
		if ( strpos( $child_name, $parent_name ) === 0 ) {
			$child_name = trim( substr( $child_name, strlen( $parent_name ) ) );
		}

		echo '<div class="woovr-variation woovr-variation-radio woovr-variation-disabled" '
			. 'data-purchasable="no" '
			. 'data-id="' . esc_attr( $child_product->get_id() ) . '">';
		echo '<div class="woovr-variation-info">';
		echo '<div class="woovr-variation-name">' . esc_html( $child_name ) . '</div>';
		echo '</div>';
		echo '</div>';
	}
	echo '</div><!-- /.kirgo-disabled-staging -->';
}

add_action( 'woovr_variations_after', 'kirgo_render_disabled_variations', 10, 2 );


/**
 * Transform buy now button
 */
function tranform_buy_now($output, $atts) {
	global $product;

	$btn_text = 'Buy Now';

	if ($product) {

		$btn_text = 'buy for ' . wc_price( wc_get_price_to_display( $product, array( 'price' => $product->get_price() ) ) );

		$output = sprintf( '<button type="submit" name="buy-now" value="%d" class="product-detail-buy-now-btn wpcbn-btn wpcbn-btn-single single_add_to_cart_button button alt btn btn-light" data-product_id="%s">%s</button>', $product->get_ID(), $product->get_ID(), $btn_text );
	}

	return $output;
}

add_filter('wpcbn_btn_single', 'tranform_buy_now', 10, 3);

/**
 * Add icon to add to cart
 */
add_filter( 'woocommerce_product_single_add_to_cart_text', 'change_add_to_cart_text_with_plain_currency_price' );

function change_add_to_cart_text_with_plain_currency_price() {
	global $product;

	$price = strip_tags( wc_price( $product->get_price() ) );

	return __( 'Buy for', 'kirgo' ) . ' ' . $price;
}

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