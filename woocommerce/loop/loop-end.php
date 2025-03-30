<?php
/**
 * Product Loop End
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/loop-end.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
</ul>


<section class="kirgo-logo">
    <img src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/kirgo-home-logo.svg" alt="" class="kirgo-logo_image">
</section>

<!-- Newsletter Section -->

<section class="newsletter-section">
    <div class="wow animate__animated animate__fadeInUp newsletter-section__wrapper">
        <img src="<?php echo get_template_directory_uri() ?>/assets/images/home-page/newsletter-image.jpg" 
        alt="Join the Crew"
        class="newsletter-section__image"/>
        <div class="newsletter-section__content">
            <h2 class="newsletter-section__title">join the crew</h2>
            <p class="newsletter-section__subTitle">
                receive exclusive offers, newsletters and flash sale announcements
            </p>
            <?php echo do_shortcode('[contact-form-7 id="396" title="Newsletters"]');?>
        </div>
    </div>
</section>

