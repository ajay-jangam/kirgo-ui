<?php
/**
 * Customer processing order email
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/customer-processing-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates\Emails
 * @version 3.7.0
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * @hooked WC_Emails::email_header() Output the email header
 */

 
?>
<!-- Added custom styles  -->

<style>

    #template_container {
        border: none;
    }

    #header_wrapper {
        display: none;
    }

    #body_content table tbody tr td {
        padding: 0 !important; 
        display: contents;
    }

    #body_content_inner {
        border: 3px solid #000;
    }

    #addresses tbody tr {
        display: flex;
        flex-direction: column;
    }

    #addresses tbody tr td {
        width: 100% !important;
        margin: 0 0 40px !important;
    }
    .custom-heading-section {
        background-color: #000; 
        padding: 50px 48px; 
        margin: -48px 0 0 -48px; 
    }

    .custom-subHeading-section {
        background-color: #fff; 
        text-align: center; 
        padding: 30px 0 0;
    }

    .custom-subHeading-section span {
        color: #000; 
        font-family: 'BlaakRegular_personal'; 
        font-weight: 700; 
        line-height: 1;
    }

    .custom-subHeading-section  .subHeading-text {
        font-size: 46.204px; 
        margin-bottom: 10px !important;
    }

    .custom-subHeading-section  .subHeading-subText {
        font-size: 16px; 
    }

    .custom-order-detail-section {
        background-color: #000; 
        padding: 20px 0; 
        margin: 30px -48px; 
    }

    .custom-order-detail-section p {
        color: #fff; 
        font-family: 'BlaakRegular_personal'; 
        font-size: 16px; 
        font-weight: 700; 
        line-height: 1; 
        margin: 0 !important;
    }


</style>


<?php

// fetched icons
$custom_email_heading = '<img src="' . get_template_directory_uri() . '/assets/images/kirgo-icon.png" alt="Header Image" style="max-width: 80px; height: auto;">';
$custom_email_footer_img = '<img src="' . get_template_directory_uri() . '/assets/images/about-us/text-icon-shadow.png" alt="Footer Image" style="max-width: 125px; height: auto; filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));">';

do_action( 'woocommerce_email_header', $email_heading, $email); 

// Fetched order number and date of the order
$order_number = $order->get_order_number();
$order_date = $order->get_date_created()->format( 'F j, Y' );

?> 

<!-- Custom HTML content -->
<div class="custom-email-content">
    <div class="custom-heading-section" style="background-color: #000; padding: 50px 48px; margin: -48px 0 0 -48px !important; text-align: center;">
        <?php echo $custom_email_heading; ?>
    </div>

    <div class="custom-subHeading-section" style="font-family: 'BlaakRegular_personal'; background-color: #fff; text-align: center; padding: 50px 0 30px;">
        <p class="subHeading-text" style="color: #000; font-weight: 700;">Thank You</p>
        <p class="subHeading-subText" style="color: #000; font-weight: 700;" >for trusting us with your activewear</p>
    </div>

    <div class="custom-order-detail-section" style="font-family: 'BlaakRegular_personal'; background-color: #000; padding: 20px 0; margin: 30px -48px !important; text-align: center;">
        <span style="padding-right: 70px; color: #fff; font-weight: 700;">Order Number: <?php echo $order_number; ?></span><span  style="color: #fff; font-weight: 700;"><?php echo $order_date; ?></span>
    </div>
</div>
<div class="email-body-content" style="padding: 50px 20px;">
    <?php /* translators: %s: Customer first name */ ?>
    <p><?php printf( esc_html__( 'Hi %s,', 'woocommerce' ), esc_html( $order->get_billing_first_name() ) ); ?></p>
    <?php /* translators: %s: Order number */ ?>
    <p><?php printf( esc_html__( 'Just to let you know — we\'ve received your order #%s, and it is now being processed:', 'woocommerce' ), esc_html( $order->get_order_number() ) ); ?></p>

    <?php

    /*
    * @hooked WC_Emails::order_details() Shows the order details table.
    * @hooked WC_Structured_Data::generate_order_data() Generates structured data.
    * @hooked WC_Structured_Data::output_structured_data() Outputs structured data.
    * @since 2.5.0
    */
    do_action( 'woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email );

    /*
    * @hooked WC_Emails::order_meta() Shows order meta data.
    */
    do_action( 'woocommerce_email_order_meta', $order, $sent_to_admin, $plain_text, $email );

    /*
    * @hooked WC_Emails::customer_details() Shows customer details
    * @hooked WC_Emails::email_address() Shows email address
    */
    do_action( 'woocommerce_email_customer_details', $order, $sent_to_admin, $plain_text, $email );

    /**
     * Show user-defined additional content - this is set in each email's settings.

    */
    // if ( $additional_content ) {
    // 	echo wp_kses_post( wpautop( wptexturize( $additional_content ) ) );
    // }
    ?>
</div>
<!-- Custom Footer Section -->

<div class="custom-email-footer" style="background-color: #000; text-align: center; padding: 40px 0; margin: 0 -48px -32px !important;">
    <?php echo $custom_email_footer_img; ?>
</div>

<?php
/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action( 'woocommerce_email_footer', $email );
