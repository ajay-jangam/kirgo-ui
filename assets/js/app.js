jQuery(document).ready(function ($) {
    // Navbar Menu

    $(".navbar-hamburger").click(function (e) {
        e.preventDefault();
        $(".navbar").toggleClass("active.white-background");
        $(".navbar").toggleClass("active");
        $("body").toggleClass("isFixed");

        return false;
    });

    $(".navbar-links").scroll(function () {
        var scroll = $(".navbar-links").scrollTop();
        if (
            (scroll > 10 && !$(".active").hasClass("white-background")) ||
            (scroll === 0 && $(".active").hasClass("white-background"))
        ) {
            $(".active").toggleClass("white-background");
        }
    });
    // Home Slider

    var $homeCarousel = $(".home-carousel").flickity({
        // imagesLoaded: true,
        // percentPosition: false,
        wrapAround: true,
        pageDots: false,
        autoPlay: true,
    });

    // Parallax effect
    // var $slideImages = $homeCarousel.find(".slider-image")
    // var $slideText = $homeCarousel.find(".carousel-cell__text")

    // // get transform property
    // var docStyle = document.documentElement.style
    // var transformProp =
    // 	typeof docStyle.transform == "string" ? "transform" : "WebkitTransform"
    // // get Flickity instance
    // var flkty = $homeCarousel.data("flickity")

    // $homeCarousel.on("scroll.flickity", function () {
    // 	flkty.slides.forEach(function (slide, i) {
    // 		var img = $slideImages[i]
    // 		var text = $slideText[i]
    // 		var x = ((slide.target + flkty.x) * -1) / 3
    // 		img.style[transformProp] = "translateX(" + x + "px)"
    // 		text.style[transformProp] = "translateX(" + x + "px)"
    // 	})
    // })

    // Blog Slider

    var $blogCarousel = $(".blog-carousel").flickity({
        pageDots: false,
        prevNextButtons: false,
        freeScroll: true,
        contain: true,
    });
});
