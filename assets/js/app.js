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
    const reviewDescriptionElements =
        document.querySelectorAll(".description p");

    for (let i = 0; i < reviewDescriptionElements.length; i++) {
        let originalText = reviewDescriptionElements[i].textContent;
        let quotedText = `"${originalText}"`;
        reviewDescriptionElements[i].textContent = quotedText;
    }

    // Remove WooCommerce messages after 5 seconds
    const wooCommerceMessage = $(".woocommerce-message");

    if (wooCommerceMessage) {
        setTimeout(() => {
            wooCommerceMessage.slideUp(100, function () {
                $(this).remove();
            });
        }, 5000);
    }

    // Update the cart quantity bu clicling plus/minus on Cart page
    $(".quantity").on("click", ".plus, .minus", function (e) {
        e.preventDefault();

        // Get the input field and current quantity value for this cart item
        var $input = $(this).closest(".quantity").find("input.qty"),
            currentVal = parseInt($input.val());

        // Determine the new quantity value based on the button clicked
        if ($(this).hasClass("plus")) {
            var newVal = currentVal + 1;
        } else {
            var newVal = currentVal > 1 ? currentVal - 1 : 1;
        }

        // Update the input field value and trigger the "change" event to update the cart
        $input.val(newVal).trigger("change");
    });

    // Replace placeholder name of coupon input
    $(".woocommerce-cart .coupon .input-text").attr(
        "placeholder",
        "enter coupon code"
    );

    // Replace the labels to thier respective placeholders
    $(".woocommerce-billing-fields__field-wrapper label").each(function () {
        var labelVal = $(this).text();
        var inputName = $(this).attr("for");
        var inputPlaceholder = $("#" + inputName).attr("placeholder");
        if (labelVal !== "") {
            $(this).text(inputPlaceholder);
            $("#" + inputName).attr("placeholder", labelVal);
        }
    });
});
