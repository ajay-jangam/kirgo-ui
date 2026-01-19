<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kirgo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	
	<!-- Conditionally render mobile wrapper on desktop/tablet -->
	<script>
		(function() {
			// Check if we're in an iframe (to prevent nested wrappers)
			if (window.self !== window.top) {
				return;
			}
			
			// Check if URL has bypass parameter
			const urlParams = new URLSearchParams(window.location.search);
			if (urlParams.has('no_wrapper') || urlParams.has('mobile_view')) {
				return;
			}
			
			// Detect if device is desktop or tablet (width >= 768px)
			if (window.innerWidth >= 768) {
				// Stop normal page rendering and show wrapper instead
				document.addEventListener('DOMContentLoaded', function() {
					// Replace entire body with mobile wrapper
					document.body.innerHTML = `
						<style>
							* { margin: 0; padding: 0; box-sizing: border-box; }
							
							@keyframes gradientShift {
								0% { background-position: 0% 0%; }
								50% { background-position: 0% 100%; }
								100% { background-position: 0% 0%; }
							}
							
							body {
								background: linear-gradient(180deg, #2e3c4e 0%, #000000 50%, #2e3c4e 100%);
								background-size: 100% 300%;
								background-position: 0% 0%;
								animation: gradientShift 45s ease-in-out infinite;
								display: flex;
								justify-content: center;
								align-items: flex-start;
								min-height: 100vh;
								padding: 40px 20px;
								overflow-x: hidden;
							}
							.mobile-frame {
								width: 100%;
								max-width: 430px;
								min-height: calc(100vh - 80px);
								box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
								border-radius: 20px;
								overflow: hidden;
								position: relative;
							}
							.mobile-frame iframe {
								width: 430px;
								height: calc(100vh - 80px);
								border: none;
								display: block;
							}
						</style>
						<div class="mobile-frame">
							<iframe 
								src="${window.location.href}${window.location.search ? '&' : '?'}mobile_view=1" 
								title="Mobile View"
								allow="geolocation; microphone; camera; payment"
								sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals"
							></iframe>
						</div>
					`;
				});
			}
		})();
	</script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lekton:wght@400;700&display=swap" rel="stylesheet">

	<!-- Bootstrap CSS -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
		crossorigin="anonymous"
	/>

	<!-- Animation CSS -->

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
	<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">

	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'kirgo' ); ?></a>

	<header class="site-header">
		<?php get_template_part( 'template-parts/content', 'header' ); ?>
	</header><!-- #masthead -->
