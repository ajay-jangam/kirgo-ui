<?php
/**
 * Product Details after Buy Button and before Reviews
 */
?>

<!-- FAQ Accordion -->
<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <span>SIZE CHART</span>
                which size fits what?
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M.9 8.107V2.328C.9.547 3.053-.346 4.313.914l5.07 5.071a2 2 0 0 1 0 2.829l-5.07 5.07c-1.26 1.26-3.415.368-3.415-1.414V8.107z"
                        fill="#fff" />
                </svg>
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code> class. This is the first item's accordion body.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <span>DELIVERY & RETURN DETAILS</span>
                what about shipping?
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M.9 8.107V2.328C.9.547 3.053-.346 4.313.914l5.07 5.071a2 2 0 0 1 0 2.829l-5.07 5.07c-1.26 1.26-3.415.368-3.415-1.414V8.107z"
                        fill="#fff" />
                </svg>
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
                filled with some actual content.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <span>PAYMENT DETAILS</span>
                how does one pay?
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M.9 8.107V2.328C.9.547 3.053-.346 4.313.914l5.07 5.071a2 2 0 0 1 0 2.829l-5.07 5.07c-1.26 1.26-3.415.368-3.415-1.414V8.107z"
                        fill="#fff" />
                </svg>
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                happening here in terms of content, but just filling up the space to make it look, at least at first
                glance, a bit more representative of how this would look in a real-world application.
            </div>
        </div>
    </div>
</div>

<!-- Features -->
<?php if ( have_rows( 'features' ) ) : ?>
<?php while ( have_rows( 'features' ) ) : the_row(); ?>
<div class="product__features">
    <div class="product__features-title"><?php the_sub_field( 'features_section_title' ); ?></div>
    <span class="product__features-text"><?php the_sub_field( 'features_section_subtitle' ); ?></span>

    <?php if ( have_rows( 'features_list' ) ) : ?>
    <?php while ( have_rows( 'features_list' ) ) : the_row(); ?>
    <ul class="product__features-list">
        <li class="product__features-item">
            <?php if ( get_sub_field( 'features_1_image' ) ) : ?>
            <img src="<?php the_sub_field( 'features_1_image' ); ?>" alt="" class="">
            <?php endif; ?>
            <span class="product__features-itemtitle"><?php the_sub_field( 'features_1_title' ); ?></span>
        </li>
        <li class="product__features-item">
            <?php if ( get_sub_field( 'features_2_image' ) ) : ?>
            <img src="<?php the_sub_field( 'features_2_image' ); ?>" alt="" class="">
            <?php endif; ?>
            <span class="product__features-itemtitle"><?php the_sub_field( 'features_1_title' ); ?></span>
        </li>
        <li class="product__features-item">
            <?php if ( get_sub_field( 'features_3_image' ) ) : ?>
            <img src="<?php the_sub_field( 'features_3_image' ); ?>" alt="" class="">
            <?php endif; ?>
            <span class="product__features-itemtitle"><?php the_sub_field( 'features_1_title' ); ?></span>
        </li>
    </ul>
    <?php endwhile; ?>
    <?php endif; ?>
</div>
<?php endwhile; ?>
<?php endif; ?>

<!-- Banner Top -->
<?php if ( have_rows( 'small_banner' ) ) : ?>
<?php while ( have_rows( 'small_banner' ) ) : the_row(); ?>
<?php if ( get_sub_field( 'background_image' ) ) : ?>
<div class="product__banner" style="background-image: url('<?php the_sub_field( 'background_image' ); ?>')">
    <div class="product__banner-title"><?php the_sub_field( 'title' ); ?></div>
</div>
<?php endif ?>
<?php endwhile; ?>
<?php endif; ?>