<!-- Header -->
<nav class="navbar <?php echo get_field( 'transparent_navbar' ) == 1 ? 'navbar-transparent' : '' ?>">

    <?php if (is_cart() || is_checkout() || (is_account_page() && is_user_logged_in())) : ?>
        <a href="/" class="home-arrow">
            <?php echo file_get_contents(get_template_directory() .'/assets/images/home-page/prev-arrow.svg') ?>
        </a>
        <p class="woocommerce-page-title"><?php the_title(); ?></p>
    <?php else : ?>
        <a href="/" class="navbar-brand__logo">
            <?php echo file_get_contents(get_template_directory() .'/assets/images/kirgo-logo.svg') ?>
        </a>
    <?php endif; ?>

    <a href="/my-account" class="navbar-admin">
        <?php require get_template_directory() . '/assets/images/icons/admin.svg'; ?>
    </a>
    <a href="/cart" class="navbar-cart">
        <?php require get_template_directory() . '/assets/images/icons/cart_dark.svg'; ?>
        <?php
            $count = WC()->cart->get_cart_contents_count();
            if ( $count > 0 ) {
                echo '<span class="cart-count">' . esc_html( $count ) . '</span>';
            }
        ?>
    </a>
    <div class="navbar-hamburger">
        <span></span>
    </div>
    <div class="navbar-links">
        <div class="product-nav-links-left links-desktop">
            <div class="product-nav-link sports-bra" style="background-image: url('/wp-content/themes/kirgo-theme/assets/images/header/sports-bra-menu-img.png')">
                <span class="product-prefix">classic</span>
                <p class="product-title">sports bra</p>
                <a href="/product/classic-sports-bra" class="menu-buy-link">buy for Rs. 1,234</a>
            </div>
            <div class="product-nav-link leggings" style="background-image: url('/wp-content/themes/kirgo-theme/assets/images/header/leggings-menu-img.png')">
                <span class="product-prefix">classic</span>
                <p class="product-title">leggings</p>
                <a href="/product/classic-leggings" class="menu-buy-link">buy for Rs. 1,234</a>
            </div>
        </div>
        <div class="product-nav-links-right links-mobile">
            <ul class="navbar-menu">
                <a href="#" class="navbar-menu__item hidden-link-desktop">
                    <li class="navbar-menu__link product-category top-category"><span class="classic">classic</span> top</li>
                </a>
                <a href="#" class="navbar-menu__item hidden-link-desktop">
                    <li class="navbar-menu__link product-category leggings-category">
                        <span class="classic">classic</span> leggings
                    </li>
                </a>
                <a href="/about-us" class="navbar-menu__item">
                    <li class="navbar-menu__link"><span>read</span>about kirgo</li>
                </a>
                <a href="#" class="navbar-menu__item">
                    <li class="navbar-menu__link"><span>read</span>our newsletters</li>
                </a>
                <a href="#" class="navbar-menu__item">
                    <li class="navbar-menu__link"><span>track</span>your kirgo delivery</li>
                </a>
            </ul>
            <div class="social-link">
                <div class="social-links">
                    <a href="#" class="social-link__items">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/instagram.svg" alt="Instagram" class="social-link__image" />
                    </a>
                    <a href="#" class="social-link__items">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/youtube.svg" alt="Youtube" class="social-link__image" />
                    </a>
                    <a href="#" class="social-link__items">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/facebook.svg" alt="Facebook" class="social-link__image" />
                    </a>
                </div>
                <a href="#" class="social-link__items get-in-touch">
                    get in touch
                </a>
            </div>
        </div>
    </div>
</nav>
