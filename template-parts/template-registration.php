<?php
  /*
   * Template name: Registration Form
   */
?>
<?php if(is_user_logged_in()){
  wp_redirect(get_permalink(get_option('woocommerce_myaccount_page_id')));
} ?>
<?php get_header();?>
<?php do_action( 'woocommerce_before_customer_login_form' ); ?>

<img class="account-banner-image" src="/wp-content/themes/kirgo-theme/assets/images/account/sign-in-banner.jpg"
    alt="Banner Image" />
<div class="wow animate__animated animate__fadeInUp custom-registration">
    <h2><?php esc_html_e( 'Register', 'woocommerce' ); ?></h2>
    <form method="post" class="woocommerce-form woocommerce-form-register register"
        <?php do_action( 'woocommerce_register_form_tag' ); ?>>
        <?php do_action( 'woocommerce_register_form_start' ); ?>
        <?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>
        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?>&nbsp;<span
                    class="required">*</span></label>
            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
                id="reg_username" autocomplete="username"
                value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
        </p>
        <?php endif; ?>
        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="reg_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span
                    class="required">*</span></label>
            <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email"
                autocomplete="email"
                value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
        </p>
        <?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>
        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="reg_password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span
                    class="required">*</span></label>
            <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password"
                id="reg_password" autocomplete="new-password" />
        </p>
        <?php else : ?>
        <p><?php esc_html_e( 'A password will be sent to your email address.', 'woocommerce' ); ?></p>
        <?php endif; ?>
        <?php do_action( 'woocommerce_register_form' ); ?>
        <p class="woocommerce-form-row form-row">
            <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
            <button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                name="register"
                value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>"><?php esc_html_e( 'Register', 'woocommerce' ); ?></button>
        </p>

        <a href="/my-account" class="sign-in-btn">sign in</a>

        <?php do_action( 'woocommerce_register_form_end' ); ?>
    </form>
</div>
<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
<?php get_footer();?>