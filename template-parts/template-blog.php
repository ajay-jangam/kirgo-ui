<?php /* Template Name: Blog */ ?>

<?php get_header() ?>

<?php $blog_posts = get_field( 'blog_posts' ); ?>
<?php if ( $blog_posts ) : ?>
	<?php $post = $blog_posts; ?>
	<?php setup_postdata( $post ); ?> 
	<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	<?php wp_reset_postdata(); ?>
<?php endif; ?>

<?php get_footer() ?>