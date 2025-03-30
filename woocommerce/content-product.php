<?php
/**
 * The template for displaying product content within loops
 *
 * This template is overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}


$product_price = $product->get_price();

$product_id = $product->get_id();

?>

<li <?php wc_product_class( '', $product ); ?>>


	<?php

		// Get the product tags
		$tags = get_the_terms(get_the_ID(), 'product_tag');
		
		// Check if tags exist
		if ($tags && !is_wp_error($tags)) {
			echo '<div class="product-tags">';
			foreach ($tags as $tag) {
			echo '<span class="tag">' . esc_html($tag->name) . '</span>';
			}
			echo '</div>';
		}


		/**
		 * Hook: woocommerce_before_shop_loop_item.
		 *
		 * @hooked woocommerce_template_loop_product_link_open - 10
		 */
		do_action( 'woocommerce_before_shop_loop_item' );

		/**
		 * Hook: woocommerce_before_shop_loop_item_title.
		 *
		 * @hooked woocommerce_show_product_loop_sale_flash - 10
		 * @hooked woocommerce_template_loop_product_thumbnail - 10
		 */

		global $product;

		// Get the product gallery images
		$gallery_images = $product->get_gallery_image_ids();
		$image_ids = array_merge(array($product->get_image_id()), $gallery_images);

		
		if ((!empty($image_ids))) {
			?>
			<div class="carousel woocommerce-product-card-gallery-<?php echo $product_id; ?>" data-flickity='{ "pageDots": false, "prevNextButtons": false  }'>
			<?php
			foreach ($image_ids as $image_id) {
				echo '<div class="carousel-cell">';
					echo wp_get_attachment_image($image_id, 'woocommerce_thumbnail');
				echo '</div>';
			}
			echo '</div>';
		} 
		else {
			do_action('woocommerce_before_shop_loop_item_title');
		}

		?>
		<div class="img-slider-nav">

			<!-- Nav images for slider -->
			
			<div class="carousel carousel-nav" data-flickity='{ "asNavFor": ".woocommerce-product-card-gallery-<?php echo $product_id; ?>",  "contain": true, "freeScroll": true, "pageDots": false, "prevNextButtons": false  }'>
			<?php
				foreach ($image_ids as $image_id) {
					echo '<div class="carousel-nav-item">';
					echo wp_get_attachment_image($image_id, 'woocommerce_thumbnail');
					echo '</div>';
				}
				echo '</div>';
			?>
		</div>
			
		<?php $product_permalink = $product->get_permalink(); ?>
		
		<a class="productLink" href="<?php echo esc_url($product_permalink); ?>" >
			<div class="product-card-details">
				<?php
				/**
				 * Hook: woocommerce_shop_loop_item_title.
				 *
				 * @hooked woocommerce_template_loop_product_title - 10
				 */
				do_action( 'woocommerce_shop_loop_item_title' );

				/**
				 * Hook: woocommerce_after_shop_loop_item_title.
				 *
				 * @hooked woocommerce_template_loop_rating - 5
				 * @hooked woocommerce_template_loop_price - 10
				 */
				do_action( 'woocommerce_after_shop_loop_item_title' );

				/**
				 * Hook: woocommerce_after_shop_loop_item.
				 *
				 * @hooked woocommerce_template_loop_product_link_close - 5
				 * @hooked woocommerce_template_loop_add_to_cart - 10
				 */
				do_action( 'woocommerce_after_shop_loop_item' );

			?>

			<!-- share icons modal  -->
			<button class='product-share-modal-button' data-bs-toggle='modal' data-bs-target='#productShareIcons-<?php echo $product_id; ?>'>
				<?php require get_template_directory() . '/assets/images/icons/share.svg' ?>
			</button>
			<div class='product-share-modal modal fade' id='productShareIcons-<?php echo $product_id; ?>' tabindex='-1' aria-labelledby='productShareIcons-<?php echo $product_id; ?>Label' aria-hidden='true'>1
				<div class='modal-dialog modal-dialog-centered'>
					<div class='modal-content'>
						<div class='modal-body'>
							<p class='modal-title'><span>share</span> on</p>
							<?php echo do_shortcode("[psfw_basic_share]"); ?> 
						</div>
					</div>
				</div>
			</div>

			<!-- Add to cart button and modal -->

			<button class="shop-add-to-cart" data-bs-toggle="modal" data-bs-target="#add-to-cart-modal-<?php echo get_the_ID() ?>"><?php require get_template_directory() . '/assets/images/icons/add-to-cart.svg'; ?></button>
			<div class="modal fade shop-add-to-cart-modal" id="add-to-cart-modal-<?php echo get_the_ID(); ?>" tabindex="-1" role="dialog" aria-labelledby="add-to-cart-modal-label-<?php get_the_ID(); ?>" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">

						<div class="modal-body">
							<p class="modal-title">select</br> <span><?php echo get_the_title(); ?> size</span></p>

							<!-- Buy Button -->
							<div class="buy-button">
								<?php  woocommerce_template_single_add_to_cart(); ?>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p class="product-card-short-desc"><?php echo get_the_excerpt(); ?></p>
			<a href="<?php echo esc_url( get_permalink() ) ?>" class="product-card-buy-btn">buy for Rs. <?php echo $product_price; ?></a>
		</div>
	</a>
</li>


