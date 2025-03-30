<?php
/**
 * Product Cards Template
 */
?>

<!-- Classic Section -->

<!-- Classic Section -->

<section class="product-activewear classic-section">
    <?php if ( have_rows( 'product_collection' ) ) : ?>
        <?php while ( have_rows( 'product_collection' ) ) : the_row(); ?>
            <div class="product-activewear__text">
                <p class="product-activewear__title">
                    <?php the_sub_field( 'card_title' ); ?>
                </p>
                <p class="product-activewear__subtitle">
                    <?php the_sub_field( 'card_subtitle' ); ?>
                </p>
            </div>

            <div class="wow animate__animated animate__fadeInUp-section__wrapper summer-collection ">

                <div class="classic-section__category classic-section__categoryRegular">
            
                    <?php 
                        // Fetching product details dynamically
                        $sports_bra = wc_get_product(65);
                        $leggings = wc_get_product(14);

                        $sports_bra_name = $sports_bra->get_name();
                        $leggings_name = $leggings->get_name();

                        $sports_bra_short_desc = $sports_bra->get_short_description();
                        $leggings_short_desc = $leggings->get_short_description();
                        
                        $sports_bra_price = $sports_bra->get_price();
                        $leggings_price = $leggings->get_price();
                        
                        $sports_bra_image = $sports_bra->get_image();
                        $leggings_image = $leggings->get_image();
                        
                        // Get Add to Cart URL
                        $sports_bra_cart_url = $sports_bra->add_to_cart_url();
                        $leggings_cart_url = $leggings->add_to_cart_url();
                    ?>

                    <?php $product_detail_page_link_1 = get_sub_field('product_detail_page_link_1'); ?>
                    <?php if ($product_detail_page_link_1) : ?>
                        <div class="classic-section__linkContainer">
                            <a href="<?php echo esc_url($product_detail_page_link_1['url']); ?>" class="classic-section__link leggings-category">
                                <div class="desktop-elements">
                                    <span class="classic-section__text">classic</span>
                                    <p><?php the_sub_field('product_name_1'); ?></p>
                                </div>
                                <div class="mobile-elements">
                                    <div class="homepage-product-image">
                                        <?php
                                            // Get first gallery image
                                            $product_id = 14;
                                            $gallery_image_url = get_post_meta($product_id, '_product_image_gallery', true);
                                            $gallery_image_ids = explode(',', $gallery_image_url);
                                            $first_image_id = isset($gallery_image_ids[3]) ? $gallery_image_ids[3] : '';
                                        ?>
                                        <img src="<?php echo wp_get_attachment_image_url($first_image_id, 'full'); ?>" alt="">
                                    </div>
                                    <?php echo file_get_contents(get_template_directory() . '/assets/images/icons/add-to-cart.svg'); ?>
                                    <h2 class="homepage-product-name"><?php echo $leggings_name; ?></h2>
                                    <p class="homepage-product-description"><?php echo $leggings_short_desc; ?></p>
                                </div>
    
                                <p class="product-link">buy for Rs. <?php echo $leggings_price; ?></p>
    
                                <!-- Add to Cart Button -->
                                <a href="<?php echo esc_url($leggings_cart_url); ?>" class="add-to-cart-button">+</a>
                            </a>
                        </div>
                    <?php endif; ?>

                    <?php $product_detail_page_link_2 = get_sub_field('product_detail_page_link_2'); ?>
                    <?php if ($product_detail_page_link_2) : ?>

                        <div class="classic-section__linkContainer">
                            <a href="<?php echo esc_url($product_detail_page_link_2['url']); ?>" class="classic-section__link top-category">
                                <div class="desktop-elements">
                                    <span class="classic-section__text">classic</span>
                                    <p><?php the_sub_field('product_name_2'); ?></p>
                                </div>
                                <div class="mobile-elements">
                                    <div class="homepage-product-image">
                                        <?php echo $sports_bra_image; ?>
                                    </div>
                                    <?php echo file_get_contents(get_template_directory() . '/assets/images/icons/add-to-cart.svg'); ?>
                                    <h2 class="homepage-product-name"><?php echo $sports_bra_name; ?></h2>
                                    <p class="homepage-product-description"><?php echo $sports_bra_short_desc; ?></p>
                                </div>
    
                                <p class="product-link">buy for Rs. <?php echo $sports_bra_price; ?></p>
    
                                <!-- Add to Cart Button -->
                                <a href="<?php echo esc_url($sports_bra_cart_url); ?>" class="add-to-cart-button">+</a>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>

                <div class="classic-section__category">

                    <?php 
                        // Fetching product details dynamically
                        $summer_sports_bra = wc_get_product(1365);
                        $summer_leggings = wc_get_product(1375);

                        $summer_sports_bra_name = $summer_sports_bra->get_name();
                        $summer_leggings_name = $summer_leggings->get_name();
                        
                        $summer_sports_bra_short_desc = $summer_sports_bra->get_short_description();
                        $summer_leggings_short_desc = $summer_leggings->get_short_description();

                        $summer_sports_bra_price = $summer_sports_bra->get_price();
                        $summer_leggings_price = $summer_leggings->get_price();

                        $summer_sports_bra_image = $summer_sports_bra->get_image();
                        $summer_leggings_image = $summer_leggings->get_image();
                        
                        // Get Add to Cart URL
                        $summer_sports_bra_cart_url = $summer_sports_bra->add_to_cart_url();
                        $summer_leggings_cart_url = $summer_leggings->add_to_cart_url();
                    ?>

                    <?php $product_detail_page_link_3 = get_sub_field('product_detail_page_link_3'); ?>
                    <?php if ($product_detail_page_link_3) : ?>
                        <div class="classic-section__linkContainer">
                            <a href="<?php echo esc_url($product_detail_page_link_3['url']); ?>" class="classic-section__link leggings-category">
                                <div class="desktop-elements">
                                    <span class="classic-section__text">classic</span>
                                    <p><?php the_sub_field('product_name_1'); ?></p>
                                </div>
                                <div class="mobile-elements">
                                    <div class="homepage-product-image">
                                        <?php
                                            // Get first gallery image
                                            $product_id = 14;
                                            $gallery_image_url = get_post_meta($product_id, '_product_image_gallery', true);
                                            $gallery_image_ids = explode(',', $gallery_image_url);
                                            $first_image_id = isset($gallery_image_ids[3]) ? $gallery_image_ids[3] : '';
                                        ?>
                                        <img src="<?php echo wp_get_attachment_image_url($first_image_id, 'full'); ?>" alt="">
                                    </div>
                                    <?php echo file_get_contents(get_template_directory() . '/assets/images/icons/add-to-cart.svg'); ?>
                                    <h2 class="homepage-product-name"><?php echo $summer_leggings_name; ?></h2>
                                    <p class="homepage-product-description"><?php echo $summer_leggings_short_desc; ?></p>
                                </div>
    
                                <p class="product-link">buy for Rs. <?php echo $summer_leggings_price; ?></p>
    
                                <!-- Add to Cart Button -->
                                <a href="<?php echo esc_url($summer_leggings_cart_url); ?>" class="add-to-cart-button">+</a>
                            </a>
                        </div>
                    <?php endif; ?>

                    <?php $product_detail_page_link_4 = get_sub_field('product_detail_page_link_4'); ?>
                    <?php if ($product_detail_page_link_4) : ?>

                        <div class="classic-section__linkContainer">
                            <a href="<?php echo esc_url($product_detail_page_link_4['url']); ?>" class="classic-section__link top-category">
                                <div class="desktop-elements">
                                    <span class="classic-section__text">classic</span>
                                    <p><?php the_sub_field('product_name_2'); ?></p>
                                </div>
                                <div class="mobile-elements">
                                    <div class="homepage-product-image">
                                        <?php echo $summer_sports_bra_image; ?>
                                    </div>
                                    <?php echo file_get_contents(get_template_directory() . '/assets/images/icons/add-to-cart.svg'); ?>
                                    <h2 class="homepage-product-name"><?php echo $summer_sports_bra_name; ?></h2>
                                    <p class="homepage-product-description"><?php echo $summer_sports_bra_short_desc; ?></p>
                                </div>
    
                                <p class="product-link">buy for Rs. <?php echo $summer_sports_bra_price; ?></p>
    
                                <!-- Add to Cart Button -->
                                <a href="<?php echo esc_url($summer_sports_bra_cart_url); ?>" class="add-to-cart-button">+</a>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>

            </div>
           
        <?php endwhile; ?>
    <?php endif; ?>
</section>
