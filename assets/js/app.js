$(document).ready(function () {
    // Navbar Menu

    $(".navbar-hamburger").click(function (e) {
        e.preventDefault()
        $(".navbar").toggleClass("active")
        return false
    })
    // Home Slider

    // var $carousel = $(".carousel").flickity({
    //     imagesLoaded: true,
    //     percentPosition: false,
    // })

    // var $slideImages = $carousel.find(".slider-image")
    // var $slideText = $carousel.find(".carousel-cell__text")

    // // get transform property
    // var docStyle = document.documentElement.style
    // var transformProp =
    //     typeof docStyle.transform == "string" ? "transform" : "WebkitTransform"
    // // get Flickity instance
    // var flkty = $carousel.data("flickity")

    // $carousel.on("scroll.flickity", function () {
    //     flkty.slides.forEach(function (slide, i) {
    //         var img = $slideImages[i]
    //         var text = $slideText[i]
    //         var x = ((slide.target + flkty.x) * -1) / 3
    //         img.style[transformProp] = "translateX(" + x + "px)"
    //         text.style[transformProp] = "translateX(" + x + "px)"
    //     })
    // })
})
