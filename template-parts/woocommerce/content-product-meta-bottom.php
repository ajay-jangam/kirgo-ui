<?php
/**
 * Product Details after Reviews
 */
?>

<!-- Banner Bottom -->
<?php if ( have_rows( 'small_banner_2' ) ) : ?>
<?php while ( have_rows( 'small_banner_2' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'background_image' ) ) : ?>
<div class="product__banner product__banner product__banner-bottom"
    style="background-image: url('<?php the_sub_field( 'background_image' ); ?>')">
    <div class="product__banner-title product__banner-bottom-title"><?php the_sub_field( 'title' ); ?></div>
</div>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>

<!-- Product Set -->
<?php
require get_template_directory() . '/template-parts/woocommerce/content-product-set.php';