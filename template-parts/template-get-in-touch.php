<?php /* Template Name: Get In Touch */ ?>

<?php get_header() ?>

<section class="getInTouch-section">
    <div class="getInTouch-section__wrapper">
        <div class="getInTouch-section__banner">
            <?php if ( get_field( 'mobile_banner_image' ) ) : ?>
                <img src="<?php the_field( 'mobile_banner_image' ); ?>" alt="Kirgo Mobile Banner Image" class="getInTouch-section__mobileBannerImage" />
            <?php endif ?>
            <?php if ( get_field( 'desktop_banner_image' ) ) : ?>
                <img src="<?php the_field( 'desktop_banner_image' ); ?>" alt="Kirgo Desktop Banner Image" class="getInTouch-section__desktopBannerImage" />
            <?php endif ?>
        </div>
        <div class="getInTouch-section__details">
            <h1 class="getInTouch-section__title">
                <?php echo file_get_contents(get_template_directory() .'/assets/images/icons/left-arrow.svg') ?>
                <?php the_field( 'page_title' ); ?>
            </h1>
            <p class="getInTouch-section__subTitle"><?php the_field( 'sub_title' ); ?></p>
            <ul class="getInTouch-section__socialLinks">
                <?php if ( have_rows( 'social_links' ) ) : ?>
                    <?php while ( have_rows( 'social_links' ) ) : the_row(); ?>

                        <li class="getInTouch-section__socialLink">
                            <a href="mailto:<?php the_sub_field( 'mail_id' ); ?>">
                                <?php echo file_get_contents(get_template_directory() .'/assets/images/icons/mail.svg') ?>
                                <p class="getInTouch-section__socialLinkText"><?php the_sub_field( 'mail_id' ); ?></p>
                            </a>
                        </li>
                        
                        <li class="getInTouch-section__socialLink phone-number">
                            <a href="tel:<?php the_sub_field( 'phone_number' ); ?>">
                                <?php echo file_get_contents(get_template_directory() .'/assets/images/icons/phone.svg') ?>
                                <p class="getInTouch-section__socialLinkText"><?php the_sub_field( 'phone_number' ); ?></p>
                            </a>
                        </li>
                        
                        <li class="getInTouch-section__socialLink">
                            <?php echo file_get_contents(get_template_directory() .'/assets/images/icons/insta.svg') ?>
                            <p class="getInTouch-section__socialLinkText"><?php the_sub_field( 'instagram_id' ); ?></p>
                        </li>
                            
                        <li class="getInTouch-section__socialLink">
                            <?php echo file_get_contents(get_template_directory() .'/assets/images/icons/youtube.svg') ?>
                            <p class="getInTouch-section__socialLinkText"><?php the_sub_field( 'youtube_account' ); ?></p>
                        </li>

                    <?php endwhile; ?>
                <?php endif; ?>
            </ul>

            <div class="getInTouch-section__addressWrapper">
                <p class="getInTouch-section__addressTitle">address</p>
                <p class="getInTouch-section__address">
                    <?php the_field( 'address' ); ?>                
                </p>
            </div>
            
            <div class="getInTouch-section__desktopContent">
                <p class="getInTouch-section__kirgoText">
                    KIRGO CO.
                </p>
                <div class="getInTouch-section__socialLinksDesktop">
                    <a href="https://www.instagram.com/kirgostore/" class="getInTouch-section__socialLinksDesktopItems">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/insta.svg" alt="Instagram" class="getInTouch-section__socialLinksDesktopImage" />
                    </a>
                    <a href="https://www.youtube.com/@Kirgostore" class="getInTouch-section__socialLinksDesktopItems">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/youtube.svg" alt="Youtube" class="getInTouch-section__socialLinksDesktopImage" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61551918715460" class="getInTouch-section__socialLinksDesktopItems">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/facebook.svg" alt="Facebook" class="getInTouch-section__socialLinksDesktopImage" />
                    </a>
                </div>
            </div>
            <!-- <a href="/shop" class="getInTouch-section__shopBtn">shop more</a> -->
        </div>
    </div>
</section>

<?php get_footer() ?>