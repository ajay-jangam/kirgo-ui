<?php /* Template Name: Homepage */ ?>

<?php get_header() ?>

<!-- Slider Section -->
<section class="slider-section">
    <div class="home-carousel">
        <div class="carousel-cell">
            <div class="carousel-cell__data">
                <span class="carousel-cell__text"
                    >sweat <br />never looked so sexy</span
                >
                <img
                    src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/home-slider1.jpg"
                    alt="Slider Image"
                    class="slider-image"
                />
            </div>
        </div>
        <div class="carousel-cell">
            <div class="carousel-cell__data">
                <span class="carousel-cell__text"
                    >sweat <br />never looked so sexy</span
                >
                <img
                    src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/home-slider2.jpg"
                    alt="Slider Image"
                    class="slider-image"
                />
            </div>
        </div>
        <div class="carousel-cell">
            <div class="carousel-cell__data">
                <span class="carousel-cell__text"
                    >sweat <br />never looked so sexy</span
                >
                <img
                    src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/home-slider3.jpg"
                    alt="Slider Image"
                    class="slider-image"
                />
            </div>
        </div>
    </div>
</section>
<!-- Slider Section -->

<!-- Classic Section -->
<section class="classic-section">
    <div class="classic-section__wrapper">
        <a href="#" class="primary-link">
            <span class="primary-link__text">introducing</span>
            the classic collection
        </a>
        <div class="classic-section__category">
            <a href="#" class="classic-section__link leggings-category">
                <span class="classic-section__text">classic</span>
                leggings
            </a>
            <a href="#" class="classic-section__link top-category">
                <span class="classic-section__text">classic</span>
                sports bra
            </a>
        </div>
        <a href="#" class="secondary-link"> shop kirgo activewear </a>
    </div>
    <p class="classic-section__tagline">
        made to move with love and sweat in India
    </p>
</section>
<!-- Classic Section -->

<!-- Newsletter Section -->

<section class="newsletter-section">
    <div class="newsletter-section__wrapper">
        <img
            src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/newsletter-image.jpg"
            alt="Join the Crew"
            class="newsletter-section__image"
        />
        <div class="newsletter-section__content">
            <h2 class="newsletter-section__title">join the crew</h2>
            <p class="newsletter-section__subTitle">
                receive exclusive offers, newsletters and flash sale
                announcements
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
    </div>
</section>

<!-- Newsletter Section -->

<!-- Blog Section -->
<section class="blog-section">
    <div class="blog-section__wrapper">
        <h3 class="blog-section__title">newsletters</h3>
        <div class="blog-carousel">
            <div class="carousel-cell">
                <div class="blog-section__cell">
                    <img
                        src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/slider-img-1.jpg"
                        alt="Blog Image"
                        class="blog-section__sliderImg"
                    />
                    <div class="blog-section__content">
                        <p class="blog-section__readTime">1 min read</p>
                        <p class="blog-section__newsLetterTitle">
                            an activewear that enables the female body
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="blog-section__cell">
                    <img
                        src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/slider-img-2.jpg"
                        alt="Blog Image"
                        class="blog-section__sliderImg"
                    />
                    <div class="blog-section__content">
                        <p class="blog-section__readTime">1 min read</p>
                        <p class="blog-section__newsLetterTitle">
                            an activewear that enables the female body
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="blog-section__cell">
                    <img
                        src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/slider-img-3.jpg"
                        alt="Blog Image"
                        class="blog-section__sliderImg"
                    />
                    <div class="blog-section__content">
                        <p class="blog-section__readTime">1 min read</p>
                        <p class="blog-section__newsLetterTitle">
                            an activewear that enables the female body
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Blog Section -->

<section class="shop-section">
    <div class="shop-section__wrapper">
        <img
            src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/kirgo.jpg"
            alt="Kirgo"
            class="shop-section__shopImage"
        />
        <div class="shop-section__category">
            <a href="#" class="shop-section__link leggings-category">
                <span class="shop-section__text">shop</span>
                leggings
            </a>
            <a href="#" class="shop-section__link sports-category">
                <span class="shop-section__text">shop</span>
                sports bra
            </a>
        </div>
    </div>
</section>

<?php get_footer() ?>
