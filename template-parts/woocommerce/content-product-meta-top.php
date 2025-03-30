<?php
/**
 * Product Details after Buy Button and before Reviews
 */
?>

<!-- AFC Repeator Field -->

<div class="wow animate__animated animate__fadeInUp accordion accordion-flush" id="accordionFlushExample">
    <?php $accordian_ids = 1; ?>
    <?php if ( have_rows( 'product_faq_accordian' ) ) : ?>
        <?php while ( have_rows( 'product_faq_accordian' ) ) : the_row(); ?>
   
            <?php 
                $faq_section = get_sub_field( 'faq_section' );
                $faq_subsection = get_sub_field( 'faq_subsection' );
                $faq_content = get_sub_field( 'faq_content' ); 
                $accordion_header_id = 'flush-heading-' . $accordian_ids;
                $accordion_collapse_id = 'flush-collapse-' . $accordian_ids;
            ?>
                
            <div class="accordion-item">
                <h2 class="accordion-header" id="<?php echo $accordion_header_id; ?>">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#<?php echo $accordion_collapse_id; ?>" aria-expanded="false" aria-controls="<?php echo $accordion_collapse_id; ?>">
                        <span><?php echo $faq_section; ?></span>
                        <?php echo $faq_subsection; ?>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M.9 8.107V2.328C.9.547 3.053-.346 4.313.914l5.07 5.071a2 2 0 0 1 0 2.829l-5.07 5.07c-1.26 1.26-3.415.368-3.415-1.414V8.107z"
                                fill="#fff" />
                        </svg>
                    </button>
                </h2>
                <div id="<?php echo $accordion_collapse_id; ?>" class="accordion-collapse collapse" aria-labelledby="<?php echo $accordion_header_id; ?>"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"><span><?php echo $faq_content; ?></span>
                    </div>
                </div>
            </div>
            <?php $accordian_ids++; ?>
    
        <?php endwhile; ?>
    <?php endif; ?>
</div>
