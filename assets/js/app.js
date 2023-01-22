// Navbar Menu

$(".navbar").click(function (e) {
    e.preventDefault()
    $(this).toggleClass("active")
    return false
})
