<?php
/**
 * Product Set Template
 */
?>
<?php
$is_summer_collection = false;
$current_product_id = get_the_ID(); // Store current product ID

if ( is_product() ) {
    global $post;
    $product = wc_get_product( $post->ID );

    if ( $product && has_term( 'summer-collection', 'product_cat', $product->get_id() ) ) {
        $is_summer_collection = true;
    }
}
?>

<?php if ( $is_summer_collection && $current_product_id !== 1406 ) : ?>

<!-- 🚀 Fetch one other product from summer-collection (excluding current product) -->
<?php
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 1,
        'post__not_in'   => array( $current_product_id ), // Exclude current product
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => 'summer-collection',
            ),
        ),
    );
    $summer_query = new WP_Query( $args );
    ?>

<?php if ( $summer_query->have_posts() ) : ?>
<?php while ( $summer_query->have_posts() ) : $summer_query->the_post(); global $product; ?>

<!-- Render One Summer Product -->
<div class="wow animate__animated animate__fadeInUp product__set">
    <div class="product__set-img">
        <img src="<?php echo get_the_post_thumbnail_url( get_the_ID() ); ?>" />
    </div>
    <div class="product__set-meta">
        <span class="product__set-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></span>
        <div class="product__set-text"><?php the_excerpt(); ?></div>
        <div class="product__set-icon">
            <?php require get_template_directory() . '/assets/images/icons/cart_dark.svg'; ?>
        </div>
    </div>
    <div class="product__set-buy">
        <button class="buy-button btn btn-dark product-size-modal-button" data-bs-toggle="modal"
            data-bs-target="#product-size-modal-<?php echo get_the_ID(); ?>">buy the set for
            <span>&nbsp;<?php echo $product->get_price_html(); ?></span></button>
        <div class="modal fade cart-product-size-modal" id="product-size-modal-<?php echo get_the_ID(); ?>"
            tabindex="-1" role="dialog" aria-labelledby="product-size-modal-label-<?php echo get_the_ID(); ?>"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <p class="modal-title">select</br> <span><?php the_title(); ?> size</span></p>
                        <div class="buy-button">
                            <?php woocommerce_template_single_add_to_cart(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php endwhile; wp_reset_postdata(); ?>
<?php endif; ?>

<?php else : ?>

<!-- 🔁 Default ACF Repeater Logic -->
<?php if ( have_rows( 'product_set' ) ) : ?>
<?php while ( have_rows( 'product_set' ) ) : the_row(); ?>
<?php
            $product = get_sub_field( 'product' );
            if ( $product ) :
                $post = $product;
                setup_postdata( $post );
            ?>

<div class="wow animate__animated animate__fadeInUp product__set">
    <div class="product__set-img">
        <img src="<?php echo get_the_post_thumbnail_url( $post->ID ) ?>" />
    </div>
    <div class="product__set-meta">
        <span class="product__set-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></span>
        <div class="product__set-text"><?php the_excerpt(); ?></div>
        <div class="product__set-icon">
            <?php require get_template_directory() . '/assets/images/icons/cart_dark.svg'; ?>
        </div>
    </div>
    <div class="product__set-buy">
        <?php global $product; ?>
        <button class="buy-button btn btn-dark product-size-modal-button" data-bs-toggle="modal"
            data-bs-target="#product-size-modal-<?php echo get_the_ID(); ?>">buy the set for <span>
                &nbsp;<?php echo $product->get_price_html(); ?></span></button>
        <div class="modal fade cart-product-size-modal" id="product-size-modal-<?php echo get_the_ID(); ?>"
            tabindex="-1" role="dialog" aria-labelledby="product-size-modal-label-<?php echo get_the_ID(); ?>"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <p class="modal-title">select</br> <span><?php echo get_the_title(); ?> size</span></p>
                        <div class="buy-button">
                            <?php woocommerce_template_single_add_to_cart(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php wp_reset_postdata(); ?>
<?php endif; ?>
<?php endwhile; ?>
<?php endif; ?>

<?php endif; ?>