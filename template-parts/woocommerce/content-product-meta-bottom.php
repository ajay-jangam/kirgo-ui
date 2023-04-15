<?php
/**
 * Product Details after Reviews
 */
?>


<!-- Features -->
<?php if ( have_rows( 'features' ) ) : ?>
<?php while ( have_rows( 'features' ) ) : the_row(); ?>
<div class="product__features">
    <div class="product__features-title"><?php the_sub_field( 'features_section_title' ); ?></div>
    <span class="product__features-text"><?php the_sub_field( 'features_section_subtitle' ); ?></span>

    <?php if ( have_rows( 'features_list' ) ) : ?>
    <?php while ( have_rows( 'features_list' ) ) : the_row(); ?>
    <ul class="product__features-list">
        <li class="product__features-item">
            <?php if ( get_sub_field( 'features_1_image' ) ) : ?>
            <img src="<?php the_sub_field( 'features_1_image' ); ?>" alt="" class="">
            <?php endif; ?>
            <span class="product__features-itemtitle"><?php the_sub_field( 'features_1_title' ); ?></span>
        </li>
        <li class="product__features-item">
            <?php if ( get_sub_field( 'features_2_image' ) ) : ?>
            <img src="<?php the_sub_field( 'features_2_image' ); ?>" alt="" class="">
            <?php endif; ?>
            <span class="product__features-itemtitle"><?php the_sub_field( 'features_2_title' ); ?></span>
        </li>
        <li class="product__features-item">
            <?php if ( get_sub_field( 'features_3_image' ) ) : ?>
            <img src="<?php the_sub_field( 'features_3_image' ); ?>" alt="" class="">
            <?php endif; ?>
            <span class="product__features-itemtitle"><?php the_sub_field( 'features_3_title' ); ?></span>
        </li>
    </ul>
    <?php endwhile; ?>
    <?php endif; ?>
</div>
<?php endwhile; ?>
<?php endif; ?>

<!-- Banner Top -->
<?php if ( have_rows( 'small_banner' ) ) : ?>
<?php while ( have_rows( 'small_banner' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'background_image' ) ) : ?>
<div class="product__banner" style="background-image: url('<?php the_sub_field( 'background_image' ); ?>')">
    <div class="product__banner-title"><?php the_sub_field( 'title' ); ?></div>
</div>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>


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

<!-- Owner Words -->
<p class="product__owner-words">
    <?php the_field( 'owner_words' ); ?>
</p>

<!-- Product Set -->
<?php
require get_template_directory() . '/template-parts/woocommerce/content-product-set.php';