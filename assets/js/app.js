jQuery(document).ready(function ($) {
    /**
     * Navbar
     */
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

    /**
     * Home Page
     */

    // Home Slider

    var $homeCarousel = $(".home-carousel").flickity({
        wrapAround: true,
        autoPlay: false,
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

    var $blogCarousel = $(".blog-carousel");

    // $blogCarousel.on("scroll.flickity", function () {
    //     console.log("Flickity ready");
    // });

    $blogCarousel.flickity({
        wrapAround: true,
        prevNextButtons: false,
        freeScroll: true,
        contain: true,
        cellAlign: "center",
    });

    // $blogCarousel.flickity();

    /**
     * Product Page
     */
    $(".woocommerce-Reviews .commentlist").flickity({
        pageDots: false,
        prevNextButtons: false,
        cellAlign: "left",
    });

    // Gallery Slider

    var $galleryCarousel = $(".shop-gallery");

    $galleryCarousel.flickity({
        wrapAround: true,
        prevNextButtons: true,
        contain: true,
    });

    /**
     * Product Page
     **/

    // Toggle Review Form
    $("#review_form .comment-reply-title").click(function () {
        $(".woocommerce #review_form .comment-form").toggle();
    });

    // Change the Review Title text
    const element = $("#reply-title");
    const newText = "send your review";
    element.text(newText);

    // Add double qoutes to Reviews
    // const reviewDescriptionElement = document.querySelector(".description p");
    // const reviewDescriptionText = reviewDescriptionElement.innerText;
    // console.log("reviewDescriptionText", reviewDescriptionText);

    // const reviewDescriptionElement = document.querySelector(
    //     ".review .description p"
    // );

    // console.log("reviewDescriptionElement", reviewDescriptionElement);

    // reviewDescriptionElement.forEach(function (el) {
    //     el.innerHTML = '"' + reviewDescriptionElement + '"';
    // });

    // reviewDescriptionElement.replaceWith('"' + reviewDescriptionText + '"');
});
