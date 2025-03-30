<?php /* Template Name: About Us */ ?>

<?php get_header(); ?>

<section class="about-us-content">
    <div class="container">
        <?php 
        if (have_posts()) :
            while (have_posts()) : the_post();
                the_content();
            endwhile;
        endif;
        ?>
    </div>
</section>

<?php get_footer(); ?>