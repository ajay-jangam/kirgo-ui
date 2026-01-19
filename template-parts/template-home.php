<?php /* Template Name: Homepage */ ?>

<?php get_header() ?>

<!-- Style for background image used for Product collection section  -->


<!-- Retrieve the ACF field values -->
<?php if ( have_rows( 'product_collection' ) ) : ?>
<?php while ( have_rows( 'product_collection' ) ) : the_row(); ?>

<?php if ( have_rows( 'product_image_1' ) ) : ?>
<?php while ( have_rows( 'product_image_1' ) ) : the_row(); ?>

<?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .classic-section .leggings-category {
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
    .classic-section .top-category {
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

<?php if ( have_rows( 'product_image_3' ) ) : ?>
<?php while ( have_rows( 'product_image_3' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'product_image_desktop_3' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .summer-collection .leggings-category {
        background-image: url('<?php the_sub_field( 'product_image_desktop_3' ); ?>');
        margin-right: 1rem;
        background-position: 0% 100%;
        background-size: 110%;
    }
}
</style>
<?php endif ?>
<?php endwhile; ?>
<?php endif ?>


<?php if ( have_rows( 'product_image_4' ) ) : ?>
<?php while ( have_rows( 'product_image_4' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'product_image_desktop_4' ) ) : ?>
<style>
/* Desktop Background Image */
@media screen and (min-width: 1023px) {
    .summer-collection .top-category {
        background-image: url('<?php the_sub_field( 'product_image_desktop_4' ); ?>');
    }
}
</style>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>

<?php endwhile; ?>
<?php endif; ?>


<!-- Slider Section -->
<section class="wow animate__animated animate__fadeInUp slider-section">
    <div class="collection-introduction">
        <h2 class="title">Activewear crafted for real</br> <strong>movement</strong></h2>
        <p class="subTitle">fits your every move</p>
        <a href="/shop" class="buy-button">shop kirgo activewear</a>
    </div>
    <div class="home-carousel">
        <?php if( have_rows('slider') ): ?>
        <?php while( have_rows('slider') ): the_row(); ?>
        <div class="carousel-cell">
            <div class="carousel-cell__data">
                <span class="carousel-cell__text"><?php // the_sub_field('slider_text'); ?></span>
                <img src="<?php the_sub_field('slider_image'); ?>" alt="Slider Image" class="slider-image" />
            </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>
<!-- Slider Section -->

<!-- Core Collection -->
<div class="home-hero-sections">
    <section class="wow animate__animated animate__fadeInUp classic-section">
        <?php if ( have_rows( 'product_collection_2' ) ) : ?>
        <?php while ( have_rows( 'product_collection_2' ) ) : the_row(); ?>
        <div class="wow animate__animated animate__fadeInUp-section__wrapper core-collection">
            <a href="/shop/?orderby=date&order=desc" class="hero-section hero-sectionCore">
                <div class="hero-imageContainer">
                    <img class="hero-image"
                        src="<?php echo get_template_directory_uri()  ?>/assets/images/home-page/latest/kirgo-core-set.webp"
                        alt="">
                </div>
                <div class="primary-link">
                    <span class="primary-link__title">Core Collection</span>
                    <span class="primary-link__text">Designed for everyday wear</span>
                </div>
            </a>

            <div class="classic-section__category">
                <div class="motto-image">
                    <?php $motto_image = get_sub_field('motto_image'); ?>
                    <?php if ($motto_image) : ?>
                    <img src="<?php the_sub_field('motto_image'); ?>" alt="" class="motto-img" />
                    <?php endif; ?>
                </div>

                <?php 
                    // Fetching product details dynamically
                    $sports_bra = wc_get_product(1771);
                    $leggings = wc_get_product(1757);

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

                <div class="classic-section__linkContainer">
                    <a href="<?php echo $sports_bra->get_permalink(); ?>"
                        class="classic-section__link top-category">
                        <div class="desktop-elements">
                            <!-- <span class="classic-section__text">classic</span> -->
                            <p><?php the_sub_field('product_name_4'); ?></p>
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

                <div class="classic-section__linkContainer">
                    <a href="<?php echo $leggings->get_permalink(); ?>"
                        class="classic-section__link leggings-category">
                        <div class="desktop-elements">
                            <!-- <span class="classic-section__text">classic</span> -->
                            <p><?php the_sub_field('product_name_3'); ?></p>
                        </div>
                        <div class="mobile-elements">
                            <div class="homepage-product-image">
                                <?php
                                    // Get first gallery image
                                    $product_id = 1757;
                                    $gallery_image_url = get_post_meta($product_id, '_product_image_gallery', true);
                                    $gallery_image_ids = explode(',', $gallery_image_url);
                                    $first_image_id = isset($gallery_image_ids[5]) ? $gallery_image_ids[5] : '';
                                ?>
                                <?php echo $leggings_image; ?>
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
            </div>

        </div>

        <p class="classic-section__tagline">
            <?php the_sub_field( 'section_tag_line' ); ?>
        </p>
        <?php endwhile; ?>
        <?php endif; ?>


        <?php $shop_page_link = get_field( 'shop_page_link' ); ?>
        <?php if ( $shop_page_link ) : ?>
        <a href="<?php echo esc_url( $shop_page_link['url'] ); ?>" class="secondary-link" style="margin-bottom: 16px;"
            target="<?php echo esc_attr( $shop_page_link['target'] ); ?>"><?php echo esc_html( $shop_page_link['title'] ); ?></a>
        <?php endif; ?>

    </section>

<!-- Summer Collection -->
    <section class="wow animate__animated animate__fadeInUp classic-section" style="padding-top: 0">
        <?php if ( have_rows( 'product_collection' ) ) : ?>
        <?php while ( have_rows( 'product_collection' ) ) : the_row(); ?>
        <div class="wow animate__animated animate__fadeInUp-section__wrapper">

            <div class="hero-section hero-classicSection">
                <div class="hero-imageContainer">
                    <img class="hero-image"
                        src="<?php echo get_template_directory_uri()  ?>/assets/images/about-us/story-behind-img-desktop.jpg"
                        alt="">
                </div>
                
                <div class="primary-link">
                    <span class="primary-link__title">classic collection</span>
                    <span class="primary-link__text">Crafted for sweaty workouts</span>
                </div>
            </div>

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
                    <a href="<?php echo esc_url($product_detail_page_link_1['url']); ?>"
                        class="classic-section__link leggings-category">
                        <div class="desktop-elements">
                            <span class="classic-section__text">classic</span>
                            <p><?php the_sub_field('product_name_1'); ?></p>
                        </div>
                        <div class="mobile-elements">
                            <div class="homepage-product-image leggings">
                                <?php
                                                // Get first gallery image
                                                $product_id = 14;
                                                $gallery_image_url = get_post_meta($product_id, '_product_image_gallery', true);
                                                $gallery_image_ids = explode(',', $gallery_image_url);
                                                $first_image_id = isset($gallery_image_ids[4]) ? $gallery_image_ids[4] : '';
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
                    <a href="<?php echo esc_url($product_detail_page_link_2['url']); ?>"
                        class="classic-section__link top-category">
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
        </div>

        <p class="classic-section__tagline">
            <?php the_sub_field( 'section_tag_line' ); ?>
        </p>
        <?php endwhile; ?>
        <?php endif; ?>

    </section>

<!-- Classic Collection -->
    <section class="wow animate__animated animate__fadeInUp classic-section">
        <?php if ( have_rows( 'product_collection_2' ) ) : ?>
        <?php while ( have_rows( 'product_collection_2' ) ) : the_row(); ?>
        <div class="wow animate__animated animate__fadeInUp-section__wrapper summer-collection">
            <div class="hero-section hero-sectionSummer">
                <div class="hero-imageContainer">
                    <img class="hero-image"
                        src="<?php echo get_template_directory_uri()  ?>/assets/images/home-page/latest/Kirgo01109.webp"
                        alt="">
                </div>
                
                <div class="primary-link">
                    <span class="primary-link__title">summer collection</span>
                    <span class="primary-link__text">Light as a feather</span>
                </div>
            </div>

            <div class="classic-section__category">
                <div class="motto-image">
                    <?php $motto_image = get_sub_field('motto_image'); ?>
                    <?php if ($motto_image) : ?>
                    <img src="<?php the_sub_field('motto_image'); ?>" alt="" class="motto-img" />
                    <?php endif; ?>
                </div>

                <?php 
                            // Fetching product details dynamically
                            $sports_bra = wc_get_product(1365);
                            $leggings = wc_get_product(1375);

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



                <?php $product_detail_page_link_4 = get_sub_field('product_detail_page_link_4'); ?>
                <?php if ($product_detail_page_link_4) : ?>

                <div class="classic-section__linkContainer">
                    <a href="<?php echo esc_url($product_detail_page_link_4['url']); ?>"
                        class="classic-section__link top-category">
                        <div class="desktop-elements">
                            <!-- <span class="classic-section__text">classic</span> -->
                            <p><?php the_sub_field('product_name_4'); ?></p>
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

                <?php $product_detail_page_link_3 = get_sub_field('product_detail_page_link_3'); ?>
                <?php if ($product_detail_page_link_3) : ?>
                <div class="classic-section__linkContainer">
                    <a href="<?php echo esc_url($product_detail_page_link_3['url']); ?>"
                        class="classic-section__link leggings-category">
                        <div class="desktop-elements">
                            <!-- <span class="classic-section__text">classic</span> -->
                            <p><?php the_sub_field('product_name_3'); ?></p>
                        </div>
                        <div class="mobile-elements">
                            <div class="homepage-product-image">
                                <?php
                                                // Get first gallery image
                                                $product_id = 1375;
                                                $gallery_image_url = get_post_meta($product_id, '_product_image_gallery', true);
                                                $gallery_image_ids = explode(',', $gallery_image_url);
                                                $first_image_id = isset($gallery_image_ids[5]) ? $gallery_image_ids[5] : '';
                                            ?>
                                <img class="summer-leggins-img"
                                    src="<?php echo wp_get_attachment_image_url($first_image_id, 'full'); ?>" alt="">
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

                <?php $shop_page_link = get_sub_field( 'shop_page_link' ); ?>
                <?php if ( $shop_page_link ) : ?>
                <a href="<?php echo esc_url( $shop_page_link['url'] ); ?>" class="secondary-link"
                    target="<?php echo esc_attr( $shop_page_link['target'] ); ?>"><?php echo esc_html( $shop_page_link['title'] ); ?></a>
                <?php endif; ?>
            </div>

        </div>

        <p class="classic-section__tagline">
            <?php the_sub_field( 'section_tag_line' ); ?>
        </p>
        <?php endwhile; ?>
        <?php endif; ?>

    </section>
</div>
<!-- Classic Section -->

<!-- Features Section -->
<?php if ( have_rows( 'features' ) ) : ?>
<?php while ( have_rows( 'features' ) ) : the_row(); ?>
<div class="wow animate__animated animate__fadeInUp product__features">
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
<!-- Features Section -->

<!-- Buy Links -->

<section class="buyLink-section">
    <div class="buyLink-section__wrapper container">
        <div class="buyLink-section__links">
            <div class="buyLink-section__link summer wow animate__animated animate__fadeInUp">
                <img src="<?php echo get_template_directory_uri() ?>/assets/images/header/summer-desktop.webp"
                    alt="Buy Summer Collection" class="buyLink-section__linkImage">
                <a href="/shop?orderby=date&order=desc" class="buyLink-section__linkMain">buy now</a>
            </div>
            <div class="buyLink-section__link classic wow animate__animated animate__fadeInUp">
                <img src="<?php echo get_template_directory_uri() ?>/assets/images/header/kirgo.jpg"
                    alt="Buy Summer Collection" class="buyLink-section__linkImage">
                <a href="/shop" class="buyLink-section__linkMain">buy now</a>
            </div>
        </div>
    </div>
</section>

<!-- Buy Links -->

<section class="kirgo-logo wow animate__animated animate__fadeInUp">
    <img src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/kirgo-home-logo.svg" alt=""
        class="kirgo-logo_image">
</section>

<!-- Banner Top -->

<?php if ( have_rows( 'small_banner' ) ) : ?>
<?php while ( have_rows( 'small_banner' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'background_image' ) ) : ?>
<div class="wow animate__animated animate__fadeInUp product__banner"
    style="background-image: url('<?php the_sub_field( 'background_image' ); ?>')">
    <div class="product__banner-title"><?php the_sub_field( 'title' ); ?></div>
</div>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>

<!-- Banner Top -->

<!-- Newsletter Section -->

<section class="newsletter-section">
    <div class="wow animate__animated animate__fadeInUp newsletter-section__wrapper">
        <?php if ( have_rows( 'join_us' ) ) : ?>
        <?php while ( have_rows( 'join_us' ) ) : the_row(); ?>
        <?php if ( get_sub_field( 'join_us_banner' ) ) : ?>
        <img src="<?php the_sub_field( 'join_us_banner' ); ?>" alt="Join the Crew" class="newsletter-section__image" />
        <?php endif ?>
        <div class="newsletter-section__content">
            <h2 class="newsletter-section__title"><?php the_sub_field( 'join_us_title' ); ?></h2>
            <p class="newsletter-section__subTitle">
                <?php the_sub_field( 'join_us_subtitle' ); ?>
            </p>
            <?php echo do_shortcode('[contact-form-7 id="396" title="Newsletters"]');?>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>

<!-- Newsletter Section -->
<!-- Banner Bottom -->
<?php if ( have_rows( 'small_banner_2' ) ) : ?>
<?php while ( have_rows( 'small_banner_2' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'background_image' ) ) : ?>
<div class="wow animate__animated animate__fadeInUp product__banner product__banner product__banner-bottom"
    style="background-image: url('<?php the_sub_field( 'background_image' ); ?>')">
    <div class="product__banner-title product__banner-bottom-title"><?php the_sub_field( 'title' ); ?></div>
</div>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>

<!-- Blog Section -->
<section id="blogSection" class="wow animate__animated animate__fadeInUp blog-section">
    <div class="blog-section__wrapper">
        <h3 class="blog-section__title">newsletters</h3>
        <div class="blog-carousel">

            <?php
        // Function for reading time
			function readingTime() {
				$content = get_the_content();
				$words_per_minute = 200;
				$word_count = str_word_count(strip_tags($content));
				
				return $reading_time = ceil($word_count / $words_per_minute);
			}
		?>

            <?php if ( have_rows( 'blog_slider' ) ) : ?>
            <?php while ( have_rows( 'blog_slider' ) ) : the_row(); ?>
            <?php $blogs = get_sub_field( 'blogs' ); ?>
            <?php if ( $blogs ) : ?>
            <?php $post = $blogs; ?>
            <?php setup_postdata( $post ); ?>
            <div class="carousel-cell">
                <div class="blog-section__cell">
                    <a href="<?php the_permalink(); ?>" class="">
                        <div class="blog-section__sliderImg">
                            <?php
                                            if (has_post_thumbnail()) {
                                                // Display the featured image
                                                kirgo_post_thumbnail(); 
                                            } else {
                                                // Display a placeholder image
                                                echo 
                                                '<div class="post-thumbnail">
                                                    <img class="placeholder-image" src="' . get_template_directory_uri() . '/assets/images/blog_placeholder.jpg" alt="Placeholder Image">
                                                </div>';
                                            }		
                                        ?>
                        </div>
                        <div class="blog-section__content">
                            <p class="blog-section__readTime"><?php echo readingTime() . ' min read'?></p>
                            <p class="blog-section__newsLetterTitle">
                                <?php the_title(); ?>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <?php wp_reset_postdata(); ?>
            <?php endif; ?>
            <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
<!-- Blog Section -->

<!-- Shop Section -->
<section class="wow animate__animated animate__fadeInUp shop-section">
    <div class="shop-section__wrapper">
        <?php if( have_rows('shop_section') ): ?>
        <?php while( have_rows('shop_section') ): the_row(); ?>
        <?php if ( get_sub_field( 'mobile_gallery_image' ) ) : ?>
        <img src="<?php the_sub_field( 'mobile_gallery_image' ); ?>" alt="Kirgo" class="shop-section__shopImage" />
        <?php endif ?>
        <?php endwhile; ?>
        <?php endif; ?>

        <div class="wow animate__animated animate__fadeInUp shop-section__category">
            <a href="/product/classic-legging" class="shop-section__link leggings-category">
                <span class="shop-section__text">shop</span>
                leggings
            </a>
            <a href="/product/classic-sports-bra" class="shop-section__link sports-category">
                <span class="shop-section__text">shop</span>
                sports bra
            </a>
        </div>
    </div>
    <div class="wow animate__animated animate__fadeInUp shop-section__wrapperDesktop rdfcd">
        <div class="shop-gallery">
            <?php if( have_rows('shop_section') ): ?>
            <?php while( have_rows('shop_section') ): the_row(); ?>
            <?php if( have_rows('shop_gallery_slider') ): ?>
            <?php while( have_rows('shop_gallery_slider') ): the_row(); ?>
            <div class="carousel-cell">
                <img src="<?php the_sub_field('gallery_image'); ?>" alt="Kirgo" class="shop-section__shopImage" />
            </div>
            <?php endwhile; ?>
            <?php endif; ?>
            <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
<!-- Shop Section -->

<?php get_footer() ?>