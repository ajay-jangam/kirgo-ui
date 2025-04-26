<!-- Header -->
<nav class="navbar <?php echo get_field( 'transparent_navbar' ) == 1 ? 'navbar-transparent' : '' ?>">

    <?php if (is_cart() || is_checkout() || is_shop() || (is_account_page() && is_user_logged_in())) : ?>
    <button class="home-arrow">
        <?php echo file_get_contents(get_template_directory() .'/assets/images/home-page/prev-arrow.svg') ?>
    </button>
    <p class="woocommerce-page-title"><?php echo is_shop() ? woocommerce_page_title() : the_title(); ?></p>
    <a href="/" class="navbar-brand__logo kirgo-mobile-logo">
        <?php echo file_get_contents(get_template_directory() .'/assets/images/kirgo-logo.svg') ?>
    </a>
    <?php else : ?>
    <a href="/" class="navbar-brand__logo">
        <?php echo file_get_contents(get_template_directory() .'/assets/images/kirgo-logo.svg') ?>
    </a>
    <?php endif; ?>


    <a class="navbar-admin navbar-admin-desktop" href="/my-account">
        <?php // echo do_shortcode('[xoo_el_action type="login" text="" change_to="/my-account"]') ?>
        <?php require get_template_directory() . '/assets/images/icons/admin-new.svg'; ?>
    </a>
    <a href="/my-account" class="navbar-admin navbar-admin-mobile">
        <?php require get_template_directory() . '/assets/images/icons/admin-new.svg'; ?>
    </a>
    <a href="/cart" class="navbar-cart">
        <?php echo do_shortcode("[xoo_wsc_cart]") ?>
        <?php require get_template_directory() . '/assets/images/icons/cart_dark.svg'; ?>
        <?php
            // $count = WC()->cart->get_cart_contents_count();
            // if ( $count > 0 ) {
            //     echo '<span class="cart-count">' . esc_html( $count ) . '</span>';
            // }
        ?>
    </a>
    <div class="navbar-hamburger">
        <span></span>
    </div>
    <?php 
        // Fetching product price dynamically
        $sports_bra = wc_get_product( 65 );
        $leggings = wc_get_product( 14 );
        $sports_bra_price = $sports_bra->get_price();
        $leggings_price = $leggings->get_price();
    ?>
    <div class="navbar-links">
        <div class="product-nav-links-left links-desktop">
            <div class="product-nav-link sports-bra">
                <span class="product-prefix">classic</span>
                <p class="product-title">sports bra</p>
                <a href="/product/classic-sports-bra" class="menu-buy-link">buy for Rs.
                    <?php echo $sports_bra_price; ?></a>
            </div>
            <div class="product-nav-link leggings">
                <span class="product-prefix">classic</span>
                <p class="product-title">leggings</p>
                <a href="/product/classic-leggings" class="menu-buy-link">buy for Rs. <?php echo $leggings_price; ?></a>
            </div>
        </div>
        <div class="product-nav-links-right links-mobile">
            <ul class="navbar-menu">
                <a href="/product/classic-sports-bra" class="navbar-menu__item hidden-link-desktop">
                    <li class="navbar-menu__link product-category top-category">
                        summer 25</li>
                </a>
                <a href="/product/classic-leggings" class="navbar-menu__item hidden-link-desktop">
                    <li class="navbar-menu__link product-category leggings-category">
                        
                    </li>
                </a>
                <a href="/about-us" class="navbar-menu__item">
                    <li class="navbar-menu__link"><span>read</span>about kirgo</li>
                </a>

                <div class="nav-product-carousel">
                    <?php
                        $product_ids = [1375, 1365, 65, 14];

                        foreach ($product_ids as $product_id) :
                            $product = wc_get_product($product_id);
                            
                            if ($product) :
                                $categories = wp_get_post_terms($product_id, 'product_cat');
                                $category_classes = '';
                                
                                foreach ($categories as $category) {
                                    $category_classes .= $category->slug . ' ';
                                }
                        ?>
                    <a href="<?php echo get_permalink($product_id); ?>"
                        class="<?php echo trim($category_classes); ?> product-grid__item">
                        <?php echo $product->get_image('medium'); ?>
                        <div class="product-title">
                            <?php echo esc_html($product->get_title()); ?>
                        </div>
                    </a>
                    <?php 
                            endif;
                        endforeach; 
                        ?>
                </div>

                <a href="https://kirgo.shiprocket.co/tracking" class="navbar-menu__item">
                    <li class="navbar-menu__link"><span>track</span>your kirgo delivery</li>
                </a>
            </ul>
            <div class="social-link">
                <div class="social-links">
                    <a href="https://instagram.com/kirgostore?igshid=OGQ5ZDc2ODk2ZA==" class="social-link__items">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/insta.svg" alt="Instagram"
                            class="social-link__image" />
                    </a>
                    <a href="https://www.youtube.com/@Kirgostore" class="social-link__items">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/youtube.svg" alt="Youtube"
                            class="social-link__image" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61551918715460" class="social-link__items">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/facebook.svg" alt="Facebook"
                            class="social-link__image" />
                    </a>
                </div>
                <a href="/get-in-touch" class="social-link__items get-in-touch">
                    get in touch
                </a>
            </div>
        </div>
    </div>
</nav>