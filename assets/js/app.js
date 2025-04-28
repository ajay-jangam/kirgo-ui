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

    // set the target element and the class name to toggle
    var navbar = $(".navbar");
    var className = "scrolled-screen";
    $(window).on("scroll", function () {
        // get the current scroll position
        var scrollPosition = $(window).scrollTop();

        // check if the scroll position is greater than or equal to the height of the navbar
        if (scrollPosition >= 10) {
            // toggle the class on the navbar with animation
            navbar
                .toggleClass(className, true)
                .animate({ backgroundColor: "#f8f8f8" }, 500);
        } else {
            // toggle the class on the navbar with animation
            navbar
                .toggleClass(className, false)
                .animate({ backgroundColor: "transparent" }, 500);
        }
    });

    $(".navbar-links").scroll(function () {
        let scroll = $(".navbar-links").scrollTop();
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

    let $homeCarousel = $(".home-carousel");

    $homeCarousel.flickity({
        wrapAround: true,
        autoPlay: true,
    });

    // Blog Slider

    let $blogCarousel = $(".blog-carousel");

    $blogCarousel.flickity({
        wrapAround: true,
        prevNextButtons: false,
        freeScroll: true,
        contain: true,
        cellAlign: "center",
    });

    /**
     * Product Page
     */
    $(".woocommerce-Reviews .commentlist").flickity({
        pageDots: false,
        prevNextButtons: false,
        cellAlign: "left",
    });

    // Gallery Slider

    let $galleryCarousel = $(".shop-gallery");

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

    // Hide WooCommerce notices after 5 seconds
    setTimeout(function () {
        $(".woocommerce-notices-wrapper").fadeOut("slow");
    }, 5000);

    // Remove WooCommerce notices when clicked
    $(document).on(
        "click",
        ".woocommerce-message, .woocommerce-error, .woocommerce-info",
        function () {
            $(this).fadeOut("slow");
        }
    );

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

    // Replace the labels to their respective placeholders

    let inputElementsOnCheckout = $(
        ".woocommerce-billing-fields__field-wrapper label, .woocommerce-shipping-fields__field-wrapper label"
    );
    let inputElementsOnSignIn = $(
        ".woocommerce-account .woocommerce-form-row label"
    );
    let inputElementsForShippingAddress = $(
        ".woocommerce-address-fields__field-wrapper label"
    );
    let inputElementsOnRegister = $(".custom-registration label");

    const replacePlaceholderWithLabel = (inputElement) => {
        inputElement.each(function () {
            let labelVal = $(this).text();
            let inputName = $(this).attr("for");
            let inputPlaceholder = $("#" + inputName).attr("placeholder");
            if (labelVal !== "") {
                $(this).text(inputPlaceholder);
                $("#" + inputName).attr("placeholder", labelVal);
            }
        });
    };
    replacePlaceholderWithLabel(inputElementsOnCheckout);
    replacePlaceholderWithLabel(inputElementsOnSignIn);
    replacePlaceholderWithLabel(inputElementsOnRegister);
    replacePlaceholderWithLabel(inputElementsForShippingAddress);

    // added Shipment text on checkout page
    const container = $(".woocommerce-billing-fields__field-wrapper");
    const newElement = $(
        "<p id='shipment-text'>enter your <br><span>shipping details</span></p>"
    );
    container.find(">:nth-child(3)").after(newElement);

    // Added image on account page
    const accountPageElement = $(".woocommerce-account #page");
    const newAccountPageElement = $(
        '<img class="account-banner-image" src="/wp-content/themes/kirgo-theme/assets/images/account/sign-in-banner.jpg" alt="Banner Image" />'
    );
    if (!$("body.woocommerce-page").hasClass("logged-in")) {
        // Remove banner image when logged in
        accountPageElement.find(">:nth-child(1)").after(newAccountPageElement);

        // Keep full height when logged in
        $(
            ".woocommerce-account .woocommerce, .page-id-237 .custom-registration"
        ).css("height", "calc(100vh - 250px)");
    }

    // Change the Sign In Title text
    if (!$("body.woocommerce-account.logged-in")) {
        const signInTextElement = $(
            ".woocommerce-account #page .woocommerce h2"
        );
        const signInNewText = "sign in";
        signInTextElement.text(signInNewText);
    }

    // Change the Sign In Title text on Register
    const registerTextElement = $(".page-id-237 .custom-registration h2");
    const registerNewText = "create an account";
    registerTextElement.text(registerNewText);

    // Change the Sign In Button Title text
    const signInTextButtonElement = $(
        ".woocommerce-account .woocommerce-form-login .woocommerce-form-login__submit"
    );
    const signInButtonNewText = "sign in";
    signInTextButtonElement.text(signInButtonNewText);

    // Hide footer when user logout and show when login in
    if ($("body").hasClass("woocommerce-account")) {
        $(".footer-section").hide();

        // if ($("body.woocommerce-account").hasClass("logged-in")) {
        //     $("footer-section").show();
        // } else {
        //     $(".footer-section").hide();
        // }
    }

    // loop through all elements with the class name "woovr-variation-name"
    $(".woovr-variation-name").each(function () {
        let words = $(this).text().trim().split(" ");
        let newText = "";

        if (words.includes("Extra")) {
            let lastWord = words[words.length - 1];
            newText = "X" + lastWord.charAt(0);
        } else {
            let lastWord = words[words.length - 1];
            newText = lastWord.charAt(0);
        }

        $(this).text(newText.toUpperCase());
    });

    if (
        $("body").hasClass("woocommerce-checkout") &&
        !$("body.woocommerce-checkout").hasClass("woocommerce-order-received")
    ) {
        const $checkoutButtonAncestor = $(".checkout.woocommerce-checkout");
        const $checkoutNestedButton = $("#place_order");

        if ($checkoutButtonAncestor.length && $checkoutNestedButton.length) {
            $checkoutNestedButton.appendTo($checkoutButtonAncestor);
        }

        const requiredInputFields = $(
            ".checkout.woocommerce-checkout .woocommerce-billing-fields .validate-required input"
        );
        const button = $("#place_order");

        checkRequiredFields();
        requiredInputFields.on("input", function () {
            checkRequiredFields();
        });

        function checkRequiredFields() {
            let allValid = true;
            requiredInputFields.each(function () {
                let inputVal = $(this).val();
                if (!inputVal || inputVal.trim() === "") {
                    allValid = false;
                }
            });

            if (allValid) {
                button.prop("disabled", false);
            } else {
                button.prop("disabled", true);
            }
        }
    }

    if ($("body").hasClass("woocommerce-cart")) {
        const $cartButtonAncestor = $(".woocommerce-cart .woocommerce");
        const $cartNestedButton = $(".woocommerce-cart .checkout-button");

        if ($cartButtonAncestor.length && $cartNestedButton.length) {
            $cartNestedButton.appendTo($cartButtonAncestor);
        }
    }

    if (window.location.href.indexOf("/cart/") > -1) {
        $("a.navbar-cart").click(function (event) {
            event.preventDefault();
        });
        $("a.navbar-cart").addClass("disabled");
    }

    $(".duplicate-elements").appendTo(
        $(".woocommerce-product-details__short-description").parent().parent()
    );

    const wow = new WOW();
    wow.init();

    $(
        "body.single-product .product .summary.entry-summary, body.single-product .product .woocommerce-Tabs-panel, body.single-product .product #reviews"
    ).addClass("wow animate__animated animate__fadeInUp");

    // Disable the click event on the cart icon
    $(".navbar-cart, .xoo-wsc-sc-cont").off("click");

    if (!$("body").hasClass(".woocommerce-cart")) {
        // Redirect the user to the cart page when they click on the cart icon
        $(".navbar-cart, .xoo-wsc-sc-cont").click(function (e) {
            e.preventDefault();
            window.location.href = "/cart";
        });
    } else {
        $(".navbar-cart").click(function (e) {
            e.preventDefault();
        });
    }

    // Redirect the user to the cart page when they click on the cart icon

    $("body.single-product .wpcbn-btn-single.single_add_to_cart_button").click(
        function () {
            setTimeout(() => {
                window.location.href = "/checkout";
            }, 1000);
        }
    );

    $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").text(
        "Add to Checkout"
    );
    $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").click(
        () => {
            $(".cart-product-size-modal").modal("hide");
        }
    );

    $(
        ".woocommerce-shop li.product .product-card-details .shop-add-to-cart-modal .single_add_to_cart_button.wp-element-button"
    ).click(function () {
        $(".shop-add-to-cart-modal").modal("hide");
    });

    $(".product .psfw-social-wrap").appendTo(
        "#productShareIcons .modal-content .modal-body"
    );

    $(".navbar-admin-desktop svg").appendTo(".navbar-admin .xoo-el-action-sc");

    // Shift checkout button in right coloum of desktop
    if (window.screen.width > 1000) {
        $(".woocommerce-cart .checkout-button.button").appendTo(
            ".cart-collaterals"
        );
        $(".woocommerce-checkout .alternate-cart-products").appendTo(
            ".woocommerce-checkout #order_review"
        );
        $(".woocommerce-checkout #place_order").appendTo(
            ".woocommerce-checkout #order_review"
        );
        $(".woocommerce-checkout #order_review").prepend(
            $(".woocommerce-checkout #order_review_heading")
        );
        $(
            `<div class="woocommerce-desktop-col-left"></div>
            <div class="woocommerce-desktop-col-right"></div>`
        ).appendTo(".woocommerce-checkout .woocommerce-order");
        $(
            `.woocommerce-checkout .woocommerce-order p.woocommerce-notice,
                 .woocommerce-checkout .woocommerce-order ul.woocommerce-order-overview,
                 .woocommerce-checkout .woocommerce-order > p`
        ).appendTo(
            ".woocommerce-checkout .woocommerce-order .woocommerce-desktop-col-left"
        );
        $(
            `.woocommerce-checkout .woocommerce-order .woocommerce-customer-details,
                 .woocommerce-checkout .woocommerce-order .woocommerce-order-details`
        ).appendTo(
            ".woocommerce-checkout .woocommerce-order .woocommerce-desktop-col-right"
        );
    }

    $(".woocommerce-shop .product a.woocommerce-LoopProduct-link")
        .contents()
        .unwrap()
        .wrap("<div></div>");

    $(".classic-section .primary-link").click(() => {
        window.location.href = "/shop";
    });

    $(".nav-product-carousel").flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        adaptiveHeight: true,
    });

    $(document).on("click", ".single_add_to_cart_button", function () {
        setTimeout(function () {
            window.location.href = "/cart";
        }, 500);
    });

    const $product = $(".woocommerce-shop .product.type-product.post-1406");
    if ($product.length) {
        $product.attr("id", "summerCollectionId");
    }

    $(".home-arrow").on("click", function (e) {
        e.preventDefault();
        window.history.back();
    });
});
