<?php
/**
 * Product Set Template
 */
?>

<?php if ( have_rows( 'product_set' ) ) : ?>
<?php while ( have_rows( 'product_set' ) ) : the_row(); ?>

<div class="wow animate__animated animate__fadeInUp product__set-header">
    <h5><?php the_sub_field( 'title' ); ?></h5>
    <p><?php the_sub_field( 'sub_title' ); ?></p>
</div>

<?php $product = get_sub_field( 'product' ); ?>
<?php if ( $product ) : ?>
<?php $post = $product; ?>
<?php setup_postdata( $post ); ?>
<div class="wow animate__animated animate__fadeInUp product__set">
    <div class="product__set-img">
        <img src="<?php echo get_the_post_thumbnail_url($post->ID) ?>" />
    </div>
    <div class="product__set-meta">
        <span class="product__set-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></span>
        <div class="product__set-text"><?php the_excerpt(); ?></div>
        <div class="product__set-icon">
            <?php 
                require get_template_directory() . '/assets/images/icons/cart_dark.svg';
            ?>
        </div>
    </div>
    <div class="product__set-buy">
        <?php global $product; ?>
        <button href="#" class="buy-button btn btn-dark product-size-modal-button" data-bs-toggle="modal" data-bs-target="#product-size-modal-<?php get_the_ID() ?>">Add for&nbsp;<?php echo $product->get_price_html(); ?></button>
        <div class="modal fade cart-product-size-modal" id="product-size-modal-<?php get_the_ID(); ?>" tabindex="-1" role="dialog" aria-labelledby="product-size-modal-label-<?php get_the_ID(); ?>" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    
                    <div class="modal-body">
                        <p class="modal-title">select</br> <span><?php echo get_the_title(); ?> size</span></p>
                            
                        <!-- Buy Button -->
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

