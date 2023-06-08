<?php /* Template Name: Homepage */ ?>

<?php get_header() ?>

<!-- Style for background image used for Product collection section  -->


<!-- Retrieve the ACF field values -->
<?php if ( have_rows( 'product_collection' ) ) : ?>
    <?php while ( have_rows( 'product_collection' ) ) : the_row(); ?>

        <?php if ( have_rows( 'product_image_1' ) ) : ?>
            <?php while ( have_rows( 'product_image_1' ) ) : the_row(); ?>
                <?php if ( get_sub_field( 'product_image_mobile' ) ) : ?>
                    <style>
                        /* Mobile Background Image */
                        @media screen and (max-width: 1023px) {
                            .leggings-category {
                                background-image: url('<?php the_sub_field( 'product_image_mobile' ); ?>');
                                margin-right: 1rem;
                            }
                        }
                    </style>
                <?php endif ?>
                <?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
                    <style>                     
                        /* Desktop Background Image */
                        @media screen and (min-width: 1023px) {
                            .leggings-category {
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
                <?php if ( get_sub_field( 'product_image_mobile' ) ) : ?>
                    <style>
                        /* Mobile Background Image */
                        @media screen and (max-width: 1023px) {
                            .top-category {
                                background-image: url('<?php the_sub_field( 'product_image_mobile' ); ?>');
                            }
                        }
                    </style>
                <?php endif ?>
                <?php if ( get_sub_field( 'product_image_desktop' ) ) : ?>
                    <style>
                        /* Desktop Background Image */                        
                        @media screen and (min-width: 1023px) {
                            .top-category {
                                background-image: url('<?php the_sub_field( 'product_image_desktop' ); ?>');
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
        <h2 class="title">introducing</br> <strong>our first collection</strong></h2>
        <p class="subTitle">sports bra and leggings made to move</p>
        <a href="/product/classic-leggings" class="buy-button">buy the complete set</a>
    </div>
    <div class="home-carousel">
        <?php if( have_rows('slider') ): ?>
            <?php while( have_rows('slider') ): the_row(); ?>
                <div class="carousel-cell">
                    <div class="carousel-cell__data">
                        <span class="carousel-cell__text"
                            ><?php// the_sub_field('slider_text'); ?></span
                        >
                        <img
                            src="<?php the_sub_field('slider_image'); ?>"
                            alt="Slider Image"
                            class="slider-image"
                        />
                    </div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>
<!-- Slider Section -->

<!-- Classic Section -->
<section class="wow animate__animated animate__fadeInUp classic-section">
    <?php if ( have_rows( 'product_collection' ) ) : ?>
        <?php while ( have_rows( 'product_collection' ) ) : the_row(); ?>
            <div class="wow animate__animated animate__fadeInUp-section__wrapper">
                <div class="primary-link">
                    <span class="primary-link__text">introducing</span>
                    the classic collection
                </div>

                <div class="classic-section__category">
                    <div class="motto-image">
                        <?php $motto_image = get_sub_field( 'motto_image' ); ?>
                        <?php if ( $motto_image ) : ?>
                            <img src="<?php the_sub_field( 'motto_image' ); ?>" alt=""  class="motto-img"/>
                        <?php endif; ?>
                    </div>
                    <?php $product_detail_page_link_1 = get_sub_field( 'product_detail_page_link_1' ); ?>
                    <?php if ( $product_detail_page_link_1 ) : ?>
                        <a href="<?php echo esc_url( $product_detail_page_link_1['url'] ); ?>" class="classic-section__link leggings-category">
                            <span class="classic-section__text">classic</span>
                            <p><?php the_sub_field( 'product_name_1' ); ?></p>
                                <!-- <a href="<?php echo esc_url( $product_detail_page_link_1['url'] ); ?>" target="<?php echo esc_attr( $product_detail_page_link_1['target'] ); ?>"  class="product-link"><?php echo esc_html( $product_detail_page_link_1['title'] ); ?></a> -->
                                <p class="product-link"><?php echo esc_html( $product_detail_page_link_1['title'] ); ?></p>
                        </a>
                    <?php endif; ?>
                    <?php $product_detail_page_link_2 = get_sub_field( 'product_detail_page_link_2' ); ?>
                    <?php if ( $product_detail_page_link_2 ) : ?>
                        <a href="<?php echo esc_url( $product_detail_page_link_2['url'] ); ?>" class="classic-section__link top-category">
                            <span class="classic-section__text">classic</span>
                            <p><?php the_sub_field( 'product_name_2' ); ?></p>
                                <!-- <a href="<?php echo esc_url( $product_detail_page_link_2['url'] ); ?>" target="<?php echo esc_attr( $product_detail_page_link_2['target'] ); ?>" class="product-link" ><?php echo esc_html( $product_detail_page_link_2['title'] ); ?></a> -->
                                <p class="product-link"><?php echo esc_html( $product_detail_page_link_2['title'] ); ?></p>
                        </a>
                    <?php endif; ?>
                </div>

                <?php $shop_page_link = get_sub_field( 'shop_page_link' ); ?>
                <?php if ( $shop_page_link ) : ?>
                    <a href="<?php echo esc_url( $shop_page_link['url'] ); ?>" class="secondary-link" target="<?php echo esc_attr( $shop_page_link['target'] ); ?>"><?php echo esc_html( $shop_page_link['title'] ); ?></a>
                <?php endif; ?>

            </div>
            
            <p class="classic-section__tagline">
                <?php the_sub_field( 'section_tag_line' ); ?>
            </p>
        <?php endwhile; ?>
    <?php endif; ?>

</section>
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

<!-- Banner Top -->

<?php if ( have_rows( 'small_banner' ) ) : ?>
    <?php while ( have_rows( 'small_banner' ) ) : the_row(); ?>
        <?php if ( get_sub_field( 'background_image' ) ) : ?>
            <div class="wow animate__animated animate__fadeInUp product__banner" style="background-image: url('<?php the_sub_field( 'background_image' ); ?>')">
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
                    <img src="<?php the_sub_field( 'join_us_banner' ); ?>" 
                    alt="Join the Crew"
                    class="newsletter-section__image"/>
                <?php endif ?>
                <div class="newsletter-section__content">
                    <h2 class="newsletter-section__title"><?php the_sub_field( 'join_us_title' ); ?></h2>
                    <p class="newsletter-section__subTitle">
                        <?php the_sub_field( 'join_us_subtitle' ); ?>
                    </p>
                    <form class="newsletter-section__form">
                        <input
                            type="text"
                            name="text"
                            placeholder="enter phone number/e-mail address"
                        />
                        <button type="button">join</button>
                    </form>
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
<section class="wow animate__animated animate__fadeInUp blog-section">
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
                    <img src="<?php the_sub_field( 'mobile_gallery_image' ); ?>"
                    alt="Kirgo"
                    class="shop-section__shopImage" />
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
                                <img
                                    src="<?php the_sub_field('gallery_image'); ?>"
                                    alt="Kirgo"
                                    class="shop-section__shopImage"
                                />
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
