<?php /* Template Name: My Account */ ?>

<?php get_header() ?>

<?php echo do_shortcode('[woocommerce_my_account]'); ?>

<?php if ( is_account_page() && ! is_wc_endpoint_url() ) : ?>
    <div class="account-social-link">
        <div class="social-links">
            <a href="https://instagram.com/kirgostore?igshid=OGQ5ZDc2ODk2ZA==" class="social-link__items">
                <?php echo file_get_contents(get_template_directory() .'/assets/images/instagram.svg') ?>
            </a>
            <a href="https://www.youtube.com/@Kirgostore" class="social-link__items">
                <?php echo file_get_contents(get_template_directory() .'/assets/images/youtube.svg') ?>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551918715460" class="social-link__items">
                <?php echo file_get_contents(get_template_directory() .'/assets/images/facebook.svg') ?>
            </a>
        </div>
        <a href="/get-in-touch" class="social-link__items get-in-touch">
            get in touch
        </a>
    </div>
<?php endif; ?>

<?php get_footer() ?>