<?php


/**
 * Extra variations component
 */
function woocommerce_single_product_variations_extras() {
    global $product;

    // Ensure it's a variable product on a product page
    if ( ! is_a( $product, 'WC_Product' ) || ! $product->is_type( 'variable' ) ) {
        return;
    }

    // --- IMPORTANT Configuration ---
    // !! Since you added "Size" directly to the product, the slug is likely just 'size'.
    // Double-check this on the product edit page -> Product Data -> Attributes tab.
    $size_attribute_slug = 'size'; // <--- Changed from 'pa_size'
    $xs_variation_value = 'XS'; // The exact value string for the XS variation
    $xl_variation_value = 'XL'; // The exact value string for the XL variation
    // --- End Configuration ---

    // This will now likely look for 'attribute_size' in the variation data
    $attribute_key_lookup = 'attribute_' . $size_attribute_slug;
    $available_variations = $product->get_available_variations();

    // Exit if no variations found
    if ( empty( $available_variations ) ) {
        return;
    }

    $has_xs = false;
    $has_xl = false;

    // Check available variations for XS and XL sizes
    foreach ( $available_variations as $variation_data ) {
        // Check if the variation has attributes AND if our specific attribute key exists for this variation
        if ( isset( $variation_data['attributes'][ $attribute_key_lookup ] ) ) {
            // Get the size value for this specific variation
            $variation_size = trim( $variation_data['attributes'][ $attribute_key_lookup ] );

            // Check if it matches XS or XL
            if ( $variation_size === $xs_variation_value ) {
                $has_xs = true;
            }
            if ( $variation_size === $xl_variation_value ) {
                $has_xl = true;
            }
            // Optimization: if both found, no need to check further variations
            if ( $has_xs && $has_xl ) {
                break;
            }
        }
    }

    // Determine the message based on whether XS and XL variations exist
    $message = '';
    if ( ! $has_xs && ! $has_xl ) {
        // Neither XS nor XL exists
        $message = esc_html( $xs_variation_value ) . ' & ' . esc_html( $xl_variation_value ) . ' coming soon';
    } elseif ( $has_xs && ! $has_xl ) {
        // XS exists, but XL does not
        $message = esc_html( $xl_variation_value ) . ' coming soon';
    } elseif ( ! $has_xs && $has_xl ) {
        // XL exists, but XS does not
        $message = esc_html( $xs_variation_value ) . ' coming soon';
    }

    if ( ! empty( $message ) ) {
        echo "<div class='woovr-variation__extra'>";
        echo "<span class='woovr-variationextra-title'>" . $message . "</span>";
        echo "
        <!-- <a class='woovr-variation__extra-link' href='#'>notify me</a> -->
            <button type='button' class='woovr-variation__extra-link' data-bs-toggle='modal' data-bs-target='#notifyMePopup'>
            notify me
            </button>
        </div>";
    }
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