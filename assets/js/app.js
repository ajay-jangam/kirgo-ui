// Navbar Menu

$(".navbar-hamburger").click(function (e) {
    e.preventDefault()
    $(".navbar").toggleClass("active")
    return false
})
