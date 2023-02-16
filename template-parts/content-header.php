<!-- Header -->
<nav class="navbar <?php echo get_field( 'transparent_navbar' ) == 1 ? 'navbar-transparent' : '' ?>">
    <a href="/" class="navbar-brand__logo">
        <?php echo file_get_contents(get_template_directory() .'/assets/images/kirgo-logo.svg') ?>
    </a>
    <div class="navbar-hamburger">
        <span></span>
    </div>
    <div class="navbar-links">
        <ul class="navbar-menu">
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link product-category top-category"><span class="classic">classic</span> top</li>
            </a>
            <a href="#" class="navbar-menu__item">
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
</nav>
