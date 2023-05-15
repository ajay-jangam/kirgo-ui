<?php /* Template Name: About Us */ ?>

<?php get_header() ?>

<!-- Story Section -->
<section class="wow animate__animated animate__fadeInUp story-section">
    <?php if ( have_rows( 'banner_images' ) ) : ?>
        <?php while ( have_rows( 'banner_images' ) ) : the_row(); ?>
            <?php if ( get_sub_field( 'mobile_banner_image' ) ) : ?>
                <img src="<?php the_sub_field( 'mobile_banner_image' ); ?>" alt="Story Behind"
            class="story-section__image" />
            <?php endif ?>
            <?php if ( get_sub_field( 'desktop_banner_image' ) ) : ?>
                <img src="<?php the_sub_field( 'desktop_banner_image' ); ?>" alt="Story Behind"
            class="story-section__imageDesktop"/>
            <?php endif ?>
        <?php endwhile; ?>
    <?php endif; ?>
  
    <div class="story-section__wrapper">
        <?php if ( have_rows( 'story_section' ) ) : ?>
            <?php while ( have_rows( 'story_section' ) ) : the_row(); ?>
                <p class="story-section__title about-us-title"><?php the_sub_field( 'section_title' ); ?></p>
                <p class="story-section__text about-us-text"><?php the_sub_field( 'section_description' ); ?></p>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>
<!-- Story Section -->

<!-- Vision Section -->
<section class="vision-section">
    <?php if ( have_rows( 'vision_section' ) ) : ?>
        <?php while ( have_rows( 'vision_section' ) ) : the_row(); ?>
          
            <?php if ( have_rows( 'image_wrapper' ) ) : ?>
                <?php while ( have_rows( 'image_wrapper' ) ) : the_row(); ?>
                <div class="wow animate__animated animate__fadeInRight vision-section__imageWrapper">
                    <?php if ( get_sub_field( 'section_banner' ) ) : ?>
                        <img src="<?php the_sub_field( 'section_banner' ); ?>" alt="Vision"
                    class="vision-section__image"/>
                    <?php endif ?>
                    <?php if ( get_sub_field( 'vision_text_icon' ) ) : ?>
                        <img src="<?php the_sub_field( 'vision_text_icon' ); ?>" alt="Vision Text"
                    class="vision-section__imageText"/>
                    <?php endif ?>
                </div>
                <?php endwhile; ?>
            <?php endif; ?>

            <?php if ( have_rows( 'present_subsection' ) ) : ?>
                <?php while ( have_rows( 'present_subsection' ) ) : the_row(); ?>
                    
                <div class="wow animate__animated animate__fadeInLeft vision-section__wrapperPresent">
                    <p class="vision-section__titlePresent about-us-title"><?php the_sub_field( 'present_title' ); ?></p>
                    <p class="vision-section__text  about-us-text"><?php the_sub_field( 'present_description' ); ?></p>
                </div>
                    
                <?php endwhile; ?>
            <?php endif; ?>
  
            <?php if ( have_rows( 'future_subsection' ) ) : ?>
                <?php while ( have_rows( 'future_subsection' ) ) : the_row(); ?>
                    
                <div class="wow animate__animated animate__fadeInUp vision-section__wrapperFuture">
                    <p class="vision-section__titleFuture about-us-title"><?php the_sub_field( 'future_title' ); ?></p>
                    <p class="vision-section__text  about-us-text"><?php the_sub_field( 'future_description' ); ?></p>
                </div>
                    
                <?php endwhile; ?>
            <?php endif; ?>

        <?php endwhile; ?>
    <?php endif; ?>
</section>
<!-- Vision Section -->

<!-- Team Section -->
<section class="wow animate__animated animate__fadeInUp team-section">
    <div class="team-section__wrapper">
        <p class="team-section__title about-us-title">people behind</p>
        <div class="team-section__cards">
            <?php if( have_rows('team_section') ): ?>
                <?php while( have_rows('team_section') ): the_row(); ?>
                    <div class="team-section__card">
                        <div class="team-section__memberProfile">
                            <p class="team-section__memberName"><?php the_sub_field('name'); ?></p>
                            <p class="team-section__memberPost"><?php the_sub_field('position'); ?></p>
                        </div>
                        <img src="<?php the_sub_field('profile_image'); ?>" alt="<?php the_sub_field('name'); ?>" alt="Team Member" 
                            class="team-section__memberImage"/>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>

            <div class="team-section__card team-section__joinUs">
                <img 
                src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/join-us.svg" 
                alt="Team Member" 
                class="team-section__joinUsIcon">
                <p class="team-section__joinUsText">Join Us</p>
            </div>
        </div>
    </div>
</section>
<!-- Team Section -->


<?php get_footer() ?>
