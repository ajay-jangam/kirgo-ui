<?php /* Template Name: About Us */ ?>

<?php get_header() ?>

<!-- Story Section -->
<section class="story-section">
    <img
        src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/story-behind-img.jpg"
        alt="Story Behind"
        class="story-section__image" />
          <img
        src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/story-behind-img-desktop.jpg"
        alt="Story Behind"
        class="story-section__imageDesktop" />
    <div class="story-section__wrapper">
        <p class="story-section__title about-us-title">the  story behind</p>
        <p class="story-section__text about-us-text">As a 18-year-old woman, I embarked on a journey to the gym to improve my physical fitness. However, my dream of purchasing fashionable activewear was dashed when I realized that most of the options available in the market were priced beyond my budget. Undeterred, I took matters into my own hands and decided to create my own line of affordable activewear. My goal was to empower women everywhere to feel confident, strong, and attractive while they worked out.</p>
    </div>
</section>
<!-- Story Section -->

<!-- Vision Section -->
<section class="vistion-section">
    <div class="vistion-section__imageWrapper">
        <img
           src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/vision-img.jpg"
           alt="Vision"
           class="vistion-section__image" />
        <img
           src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/text-icon.svg"
           alt="Vision Text"
           class="vistion-section__imageText" />
    </div>
    <div class="vistion-section__wrapperPresent">
        <p class="vistion-section__titlePresent about-us-title">present</p>
        <p class="vistion-section__text  about-us-text">As a 18-year-old woman, I embarked on a journey to the gym to improve my physical fitness. However, my dream of purchasing fashionable activewear was dashed when I realized that most of the</p>
    </div>
    <div class="vistion-section__wrapperFuture">
        <p class="vistion-section__titleFuture about-us-title">the future</p>
        <p class="vistion-section__text  about-us-text">As a 18-year-old woman, I embarked on a journey to the gym to improve my physical fitness. However, my dream of purchasing fashionable activewear was dashed when I realized that most of the options</p>
    </div>
</section>
<!-- Vision Section -->

<!-- Team Section -->
<section class="team-section">
    <div class="team-section__wrapper">
        <p class="team-section__title about-us-title">people behind</p>
        <div class="team-section__cards">
            <div class="team-section__card">
                <div class="team-section__memberProfile">
                    <p class="team-section__memberName">Kanika R</p>
                    <p class="team-section__memberPost">founder</p>
                </div>
                <img 
                    src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/member-1.jpg" 
                    alt="Team Member" 
                    class="team-section__memberImage">
            </div>
            <div class="team-section__card">
                <div class="team-section__memberProfile">
                    <p class="team-section__memberName">Siddharth B</p>
                    <p class="team-section__memberPost">co-founder</p>
                </div>
                <img 
                    src="<?php echo get_template_directory_uri() ?>/assets/images/about-us/member-2.jpg" 
                    alt="Team Member" 
                    class="team-section__memberImage">
            </div>
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
