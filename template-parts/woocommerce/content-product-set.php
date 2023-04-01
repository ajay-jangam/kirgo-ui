<?php
/**
 * Product Set Template
 */
?>

<?php if ( have_rows( 'product_set' ) ) : ?>
<?php while ( have_rows( 'product_set' ) ) : the_row(); ?>

<div class="product__set-header">
    <h5><?php the_sub_field( 'title' ); ?></h5>
    <p><?php the_sub_field( 'sub_title' ); ?></p>
</div>

<?php $product = get_sub_field( 'product' ); ?>
<?php if ( $product ) : ?>
<?php $post = $product; ?>
<?php setup_postdata( $post ); ?>
<div class="product__set">
    <div class="product__set-img">
        <img src="<?php echo get_the_post_thumbnail_url($post->ID) ?>" />
    </div>
    <div class="product__set-meta">
        <span class="product__set-title"><?php the_title(); ?></span>
        <div class="product__set-text"><?php the_excerpt(); ?></div>
        <div class="product__set-icon">
            <?php 
                require get_template_directory() . '/assets/images/icons/cart_dark.svg';
            ?>
        </div>
    </div>
    <div class="product__set-buy">
        <a href="<?php the_permalink(); ?>" class="btn btn-dark">Add for Rs. 1,454</a>
    </div>
</div>
<?php wp_reset_postdata(); ?>
<?php endif; ?>

<?php endwhile; ?>
<?php endif; ?>