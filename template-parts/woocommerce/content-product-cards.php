<?php
/**
 * Product Cards Template
 */
?>

<!-- Retrieve the ACF field values -->
<?php if ( have_rows( 'product_collection' ) ) : ?>
<?php while ( have_rows( 'product_collection' ) ) : the_row(); ?>

<?php if ( have_rows( 'product_image_1' ) ) : ?>
<?php while ( have_rows( 'product_image_1' ) ) : the_row(); ?>

<?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .product-activewear .leggings-category {
        background-image: url('<?php the_sub_field( 'product_image_desktop' ); ?>');
        margin-right: 1rem;
    }
}
</style>
<?php endif ?>
<?php endwhile; ?>
<?php endif ?>


<?php if ( have_rows( 'product_image_2' ) ) : ?>
<?php while ( have_rows( 'product_image_2' ) ) : the_row(); ?>

<?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .product-activewear .top-category {
        background-image: url('<?php the_sub_field( 'product_image_desktop' ); ?>');
    }
}
</style>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>

<?php endwhile; ?>
<?php endif; ?>


<?php if ( have_rows( 'product_collection_2' ) ) : ?>
<?php while ( have_rows( 'product_collection_2' ) ) : the_row(); ?>

<?php if ( have_rows( 'product_image_1' ) ) : ?>
<?php while ( have_rows( 'product_image_1' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .product-activewear .summer-collection .leggings-category {
        background-image: url('<?php the_sub_field( 'product_image_desktop' ); ?>');
        margin-right: 1rem;
    }
}
</style>
<?php endif ?>
<?php endwhile; ?>
<?php endif ?>


<?php if ( have_rows( 'product_image_2' ) ) : ?>
<?php while ( have_rows( 'product_image_2' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .product-activewear .summer-collection .top-category {
        background-image: url('<?php the_sub_field( 'product_image_desktop' ); ?>');
    }
}
</style>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>

<?php endwhile; ?>
<?php endif; ?>



<?php
// Determine current product's collection
$current_collection = '';
if ( has_term( 'core-collection', 'product_cat' ) ) {
    $current_collection = 'core-collection';
    $target_collections = array( 'summer-collection', 'classic-collection' );
} elseif ( has_term( 'summer-collection', 'product_cat' ) ) {
    $current_collection = 'summer-collection';
    $target_collections = array( 'core-collection', 'classic-collection' );
} elseif ( has_term( 'classic-collection', 'product_cat' ) ) {
    $current_collection = 'classic-collection';
    $target_collections = array( 'core-collection', 'summer-collection' );
} else {
    // Fallback
    $target_collections = array( 'summer-collection', 'classic-collection' );
}

$display_products = array();

// Fetch 2 products from each target collection
foreach ( $target_collections as $collection_slug ) {
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 2,
        'orderby'        => 'rand',
        'tax_query'      => array(
            'relation' => 'AND',
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => $collection_slug,
            ),
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => 'single-product', // Only single pieces
            ),
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => 'set-product',
                'operator' => 'NOT IN',
            ),
        ),
        'meta_query'     => array(
            array(
                'key'     => '_stock_status',
                'value'   => 'instock',
            ),
        ),
    );

    // Exclude current product
    if ( is_single() ) {
        $args['post__not_in'] = array( get_the_ID() );
    }

    $query = new WP_Query( $args );
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            $display_products[] = wc_get_product( get_the_ID() );
        }
    }
    wp_reset_postdata();
}

// Limit to 4 just in case, though logic should produce 4 max usually
$display_products = array_slice( $display_products, 0, 4 );

if ( ! empty( $display_products ) ) :
?>

<section class="product-activewear classic-section">
    <div class="wow animate__animated animate__fadeInUp-section__wrapper">
        <div class="classic-section__category classic-section__categoryRegular">
            <?php 
            // First 2 products
            $first_section_products = array_slice( $display_products, 0, 2 );
            $count = 0;
            foreach ( $first_section_products as $product ) : 
                $count++;
                $layout_class = ( $count % 2 === 1 ) ? 'leggings-category' : 'top-category'; 
                
                if ( ! $product ) continue;
                
                $product_name = $product->get_name();
                $product_short_desc = $product->get_short_description();
                $product_price = $product->get_price();
                $product_image = $product->get_image();
                $product_cart_url = $product->add_to_cart_url();
                $product_link = $product->get_permalink();
            ?>

            <div class="classic-section__linkContainer">
                <a href="<?php echo esc_url( $product_link ); ?>" class="classic-section__link <?php echo esc_attr( $layout_class ); ?>">
                    
                    <div class="desktop-elements">
                         <p><?php echo esc_html( $product_name ); ?></p>
                    </div>

                    <div class="mobile-elements">
                        <div class="homepage-product-image">
                            <?php echo $product_image; ?>
                        </div>
                        
                        <?php echo file_get_contents( get_template_directory() . '/assets/images/icons/add-to-cart.svg' ); ?>
                        
                        <h2 class="homepage-product-name"><?php echo esc_html( $product_name ); ?></h2>
                        <p class="homepage-product-description"><?php echo wp_kses_post( $product_short_desc ); ?></p>
                    </div>

                    <p class="product-link">buy for Rs. <?php echo esc_html( $product_price ); ?></p>

                    <a href="<?php echo esc_url( $product_cart_url ); ?>" class="add-to-cart-button">+</a>
                </a>
            </div>

            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php if ( count( $display_products ) > 2 ) : ?>
<section class="product-activewear summer-section" style="padding-top: 0">
    <div class="wow animate__animated animate__fadeInUp-section__wrapper summer-collection">
        <div class="classic-section__category">
            <?php 
            // Next 2 products
            $second_section_products = array_slice( $display_products, 2, 2 );
            $count = 0;
            foreach ( $second_section_products as $product ) : 
                $count++;
                $layout_class = ( $count % 2 === 1 ) ? 'top-category' : 'leggings-category'; 
                // Note: Original code often flipped logic or kept it same. 
                // We'll flip start class for second row if we want variety, or keep standard.
                // Keeping standard standard alternation for now but starting with top-category to match summer-section original style
                
                if ( ! $product ) continue;
                
                $product_name = $product->get_name();
                $product_short_desc = $product->get_short_description();
                $product_price = $product->get_price();
                $product_image = $product->get_image();
                $product_cart_url = $product->add_to_cart_url();
                $product_link = $product->get_permalink();
            ?>

            <div class="classic-section__linkContainer">
                <a href="<?php echo esc_url( $product_link ); ?>" class="classic-section__link <?php echo esc_attr( $layout_class ); ?>">
                    <div class="desktop-elements">
                         <p><?php echo esc_html( $product_name ); ?></p>
                    </div>
                    <div class="mobile-elements">
                        <div class="homepage-product-image">
                            <?php echo $product_image; ?>
                        </div>
                        <?php echo file_get_contents( get_template_directory() . '/assets/images/icons/add-to-cart.svg' ); ?>
                        <h2 class="homepage-product-name"><?php echo esc_html( $product_name ); ?></h2>
                        <p class="homepage-product-description"><?php echo wp_kses_post( $product_short_desc ); ?></p>
                    </div>
                    <p class="product-link">buy for Rs. <?php echo esc_html( $product_price ); ?></p>
                    <a href="<?php echo esc_url( $product_cart_url ); ?>" class="add-to-cart-button">+</a>
                </a>
            </div>

            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php endif; ?>