<!-- Header -->
<nav class="navbar">
    <div class="navbar-brand__logo">
        <?php echo file_get_contents(get_template_directory() .'/assets/images/kirgo-logo.svg') ?>
    </div>
    <div class="navbar-hamburger">
        <span></span>
    </div>
    <div class="navbar-links">
        <ul class="navbar-menu">
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link product-category top-category">classic top</li>
            </a>
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link product-category leggings-category">
                    classic leggings
                </li>
            </a>
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link"><span>read</span>our story</li>
            </a>
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link">
                    <span>know more</span>about the fabric
                </li>
            </a>
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link"><span>read</span>our blogs</li>
            </a>
            <a href="#" class="navbar-menu__item">
                <li class="navbar-menu__link"><span>watch</span>our videos</li>
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
