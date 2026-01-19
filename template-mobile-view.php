<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Kirgo - Mobile View</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		
		body {
			background: #f0f0f0;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			min-height: 100vh;
			padding: 0;
			overflow-x: hidden;
		}
		
		.mobile-frame {
			width: 100%;
			max-width: 390px;
			height: 100vh;
			background: #fff;
			box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
			position: relative;
			margin: 0 auto;
		}
		
		.mobile-frame iframe {
			width: 390px;
			height: 100%;
			border: none;
			display: block;
			transform-origin: top left;
		}
		
		/* Responsive scaling for smaller screens */
		@media (max-width: 430px) {
			.mobile-frame {
				max-width: 100%;
				box-shadow: none;
			}
			
			.mobile-frame iframe {
				width: 390px;
				transform: scale(calc(100vw / 390));
				height: calc(100vh / (100vw / 390));
			}
		}
		
		/* Desktop: center the mobile frame */
		@media (min-width: 768px) {
			body {
				padding: 20px;
			}
			
			.mobile-frame {
				border-radius: 20px;
				overflow: hidden;
			}
		}
	</style>
</head>
<body>
	<div class="mobile-frame">
		<iframe 
			src="<?php echo esc_url( add_query_arg( 'mobile_view', '1', home_url( '/' ) ) ); ?>" 
			title="Mobile View"
			allow="geolocation; microphone; camera"
			loading="eager"
		></iframe>
	</div>
</body>
</html>
