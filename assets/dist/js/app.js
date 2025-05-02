/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

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
      navbar.toggleClass(className, true).animate({
        backgroundColor: "#f8f8f8"
      }, 500);
    } else {
      // toggle the class on the navbar with animation
      navbar.toggleClass(className, false).animate({
        backgroundColor: "transparent"
      }, 500);
    }
  });
  $(".navbar-links").scroll(function () {
    var scroll = $(".navbar-links").scrollTop();
    if (scroll > 10 && !$(".active").hasClass("white-background") || scroll === 0 && $(".active").hasClass("white-background")) {
      $(".active").toggleClass("white-background");
    }
  });

  /**
   * Home Page
   */

  // Home Slider

  var $homeCarousel = $(".home-carousel");
  $homeCarousel.flickity({
    wrapAround: true,
    autoPlay: true
  });

  // Blog Slider

  var $blogCarousel = $(".blog-carousel");
  $blogCarousel.flickity({
    wrapAround: true,
    prevNextButtons: false,
    freeScroll: true,
    contain: true,
    cellAlign: "center"
  });

  /**
   * Product Page
   */
  $(".woocommerce-Reviews .commentlist").flickity({
    pageDots: false,
    prevNextButtons: false,
    cellAlign: "left"
  });

  // Gallery Slider

  var $galleryCarousel = $(".shop-gallery");
  $galleryCarousel.flickity({
    wrapAround: true,
    prevNextButtons: true,
    contain: true
  });

  /**
   * Product Page
   **/

  // Toggle Review Form
  $("#review_form .comment-reply-title").click(function () {
    $(".woocommerce #review_form .comment-form").toggle();
  });

  // Change the Review Title text
  var element = $("#reply-title");
  var newText = "send your review";
  element.text(newText);

  // Add double qoutes to Reviews
  var reviewDescriptionElements = document.querySelectorAll(".description p");
  for (var i = 0; i < reviewDescriptionElements.length; i++) {
    var originalText = reviewDescriptionElements[i].textContent;
    var quotedText = "\"".concat(originalText, "\"");
    reviewDescriptionElements[i].textContent = quotedText;
  }

  // Hide WooCommerce notices after 5 seconds
  setTimeout(function () {
    $(".woocommerce-notices-wrapper").fadeOut("slow");
  }, 5000);

  // Remove WooCommerce notices when clicked
  $(document).on("click", ".woocommerce-message, .woocommerce-error, .woocommerce-info", function () {
    $(this).fadeOut("slow");
  });

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
  $(".woocommerce-cart .coupon .input-text").attr("placeholder", "enter coupon code");

  // Replace the labels to their respective placeholders

  var inputElementsOnCheckout = $(".woocommerce-billing-fields__field-wrapper label, .woocommerce-shipping-fields__field-wrapper label");
  var inputElementsOnSignIn = $(".woocommerce-account .woocommerce-form-row label");
  var inputElementsForShippingAddress = $(".woocommerce-address-fields__field-wrapper label");
  var inputElementsOnRegister = $(".custom-registration label");
  var replacePlaceholderWithLabel = function replacePlaceholderWithLabel(inputElement) {
    inputElement.each(function () {
      var labelVal = $(this).text();
      var inputName = $(this).attr("for");
      var inputPlaceholder = $("#" + inputName).attr("placeholder");
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
  var container = $(".woocommerce-billing-fields__field-wrapper");
  var newElement = $("<p id='shipment-text'>enter your <br><span>shipping details</span></p>");
  container.find(">:nth-child(3)").after(newElement);

  // Added image on account page
  var accountPageElement = $(".woocommerce-account #page");
  var newAccountPageElement = $('<img class="account-banner-image" src="/wp-content/themes/kirgo-theme/assets/images/account/sign-in-banner.jpg" alt="Banner Image" />');
  if (!$("body.woocommerce-page").hasClass("logged-in")) {
    // Remove banner image when logged in
    accountPageElement.find(">:nth-child(1)").after(newAccountPageElement);

    // Keep full height when logged in
    $(".woocommerce-account .woocommerce, .page-id-237 .custom-registration").css("height", "calc(100vh - 250px)");
  }

  // Change the Sign In Title text
  if (!$("body.woocommerce-account.logged-in")) {
    var signInTextElement = $(".woocommerce-account #page .woocommerce h2");
    var signInNewText = "sign in";
    signInTextElement.text(signInNewText);
  }

  // Change the Sign In Title text on Register
  var registerTextElement = $(".page-id-237 .custom-registration h2");
  var registerNewText = "create an account";
  registerTextElement.text(registerNewText);

  // Change the Sign In Button Title text
  var signInTextButtonElement = $(".woocommerce-account .woocommerce-form-login .woocommerce-form-login__submit");
  var signInButtonNewText = "sign in";
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
    var words = $(this).text().trim().split(" ");
    var newText = "";
    if (words.includes("Extra")) {
      var lastWord = words[words.length - 1];
      newText = "X" + lastWord.charAt(0);
    } else {
      var _lastWord = words[words.length - 1];
      newText = _lastWord.charAt(0);
    }
    $(this).text(newText.toUpperCase());
  });
  if ($("body").hasClass("woocommerce-checkout") && !$("body.woocommerce-checkout").hasClass("woocommerce-order-received")) {
    var checkRequiredFields = function checkRequiredFields() {
      var allValid = true;
      requiredInputFields.each(function () {
        var inputVal = $(this).val();
        if (!inputVal || inputVal.trim() === "") {
          allValid = false;
        }
      });
      if (allValid) {
        button.prop("disabled", false);
      } else {
        button.prop("disabled", true);
      }
    };
    var $checkoutButtonAncestor = $(".checkout.woocommerce-checkout");
    var $checkoutNestedButton = $("#place_order");
    if ($checkoutButtonAncestor.length && $checkoutNestedButton.length) {
      $checkoutNestedButton.appendTo($checkoutButtonAncestor);
    }
    var requiredInputFields = $(".checkout.woocommerce-checkout .woocommerce-billing-fields .validate-required input");
    var button = $("#place_order");
    checkRequiredFields();
    requiredInputFields.on("input", function () {
      checkRequiredFields();
    });
  }
  if ($("body").hasClass("woocommerce-cart")) {
    var $cartButtonAncestor = $(".woocommerce-cart .woocommerce");
    var $cartNestedButton = $(".woocommerce-cart .checkout-button");
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
  $(".duplicate-elements").appendTo($(".woocommerce-product-details__short-description").parent().parent());
  var wow = new WOW();
  wow.init();
  $("body.single-product .product .summary.entry-summary, body.single-product .product .woocommerce-Tabs-panel, body.single-product .product #reviews").addClass("wow animate__animated animate__fadeInUp");

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

  // Remove add to cart button overrides to let normal WooCommerce behavior work
  // $("body.single-product .wpcbn-btn-single.single_add_to_cart_button").off(
  //     "click"
  // );

  // $(document).off("click", ".single_add_to_cart_button");

  // $("body.single-product .single_add_to_cart_button").click(function () {
  //     setTimeout(() => {
  //         window.location.href = "/cart";
  //     }, 1000);
  // });

  $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").text("Add to Checkout");
  $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").click(function () {
    $(".cart-product-size-modal").modal("hide");
  });
  $(".woocommerce-shop li.product .product-card-details .shop-add-to-cart-modal .single_add_to_cart_button.wp-element-button").click(function () {
    $(".shop-add-to-cart-modal").modal("hide");
  });
  $(".product .psfw-social-wrap").appendTo("#productShareIcons .modal-content .modal-body");
  $(".navbar-admin-desktop svg").appendTo(".navbar-admin .xoo-el-action-sc");

  // Shift checkout button in right coloum of desktop
  if (window.screen.width > 1000) {
    $(".woocommerce-cart .checkout-button.button").appendTo(".cart-collaterals");
    $(".woocommerce-checkout .alternate-cart-products").appendTo(".woocommerce-checkout #order_review");
    $(".woocommerce-checkout #place_order").appendTo(".woocommerce-checkout #order_review");
    $(".woocommerce-checkout #order_review").prepend($(".woocommerce-checkout #order_review_heading"));
    $("<div class=\"woocommerce-desktop-col-left\"></div>\n            <div class=\"woocommerce-desktop-col-right\"></div>").appendTo(".woocommerce-checkout .woocommerce-order");
    $(".woocommerce-checkout .woocommerce-order p.woocommerce-notice,\n                 .woocommerce-checkout .woocommerce-order ul.woocommerce-order-overview,\n                 .woocommerce-checkout .woocommerce-order > p").appendTo(".woocommerce-checkout .woocommerce-order .woocommerce-desktop-col-left");
    $(".woocommerce-checkout .woocommerce-order .woocommerce-customer-details,\n                 .woocommerce-checkout .woocommerce-order .woocommerce-order-details").appendTo(".woocommerce-checkout .woocommerce-order .woocommerce-desktop-col-right");
  }
  $(".woocommerce-shop .product a.woocommerce-LoopProduct-link").contents().unwrap().wrap("<div></div>");
  $(".hero-sectionSummer .primary-link").click(function () {
    window.location.href = "/shop/?orderby=date&order=desc";
  });
  $(".hero-classicSection .primary-link").click(function () {
    window.location.href = "/shop";
  });
  $(".nav-product-carousel").flickity({
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    adaptiveHeight: true
  });

  // const $product = $(".woocommerce-shop .product.type-product.post-1406");
  // if ($product.length) {
  //     $product.attr("id", "summerCollectionId");
  // }

  $(".home-arrow").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });
});

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/dist/js/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovL2FwcC8uL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBOYXZiYXJcbiAgICAgKi9cbiAgICAvLyBOYXZiYXIgTWVudVxuXG4gICAgJChcIi5uYXZiYXItaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmUud2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiaXNGaXhlZFwiKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIHRhcmdldCBlbGVtZW50IGFuZCB0aGUgY2xhc3MgbmFtZSB0byB0b2dnbGVcbiAgICB2YXIgbmF2YmFyID0gJChcIi5uYXZiYXJcIik7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFwic2Nyb2xsZWQtc2NyZWVuXCI7XG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSAxMCkge1xuICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBjbGFzcyBvbiB0aGUgbmF2YmFyIHdpdGggYW5pbWF0aW9uXG4gICAgICAgICAgICBuYXZiYXJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjhcIiB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBjbGFzcyBvbiB0aGUgbmF2YmFyIHdpdGggYW5pbWF0aW9uXG4gICAgICAgICAgICBuYXZiYXJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzY3JvbGwgPSAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHNjcm9sbCA+IDEwICYmICEkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpIHx8XG4gICAgICAgICAgICAoc2Nyb2xsID09PSAwICYmICQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFwiLmFjdGl2ZVwiKS50b2dnbGVDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEhvbWUgUGFnZVxuICAgICAqL1xuXG4gICAgLy8gSG9tZSBTbGlkZXJcblxuICAgIGxldCAkaG9tZUNhcm91c2VsID0gJChcIi5ob21lLWNhcm91c2VsXCIpO1xuXG4gICAgJGhvbWVDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQmxvZyBTbGlkZXJcblxuICAgIGxldCAkYmxvZ0Nhcm91c2VsID0gJChcIi5ibG9nLWNhcm91c2VsXCIpO1xuXG4gICAgJGJsb2dDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIGNlbGxBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqL1xuICAgICQoXCIud29vY29tbWVyY2UtUmV2aWV3cyAuY29tbWVudGxpc3RcIikuZmxpY2tpdHkoe1xuICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgfSk7XG5cbiAgICAvLyBHYWxsZXJ5IFNsaWRlclxuXG4gICAgbGV0ICRnYWxsZXJ5Q2Fyb3VzZWwgPSAkKFwiLnNob3AtZ2FsbGVyeVwiKTtcblxuICAgICRnYWxsZXJ5Q2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKiovXG5cbiAgICAvLyBUb2dnbGUgUmV2aWV3IEZvcm1cbiAgICAkKFwiI3Jldmlld19mb3JtIC5jb21tZW50LXJlcGx5LXRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZSAjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtZm9ybVwiKS50b2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSB0aGUgUmV2aWV3IFRpdGxlIHRleHRcbiAgICBjb25zdCBlbGVtZW50ID0gJChcIiNyZXBseS10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUZXh0ID0gXCJzZW5kIHlvdXIgcmV2aWV3XCI7XG4gICAgZWxlbWVudC50ZXh0KG5ld1RleHQpO1xuXG4gICAgLy8gQWRkIGRvdWJsZSBxb3V0ZXMgdG8gUmV2aWV3c1xuICAgIGNvbnN0IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlc2NyaXB0aW9uIHBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsVGV4dCA9IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBxdW90ZWRUZXh0ID0gYFwiJHtvcmlnaW5hbFRleHR9XCJgO1xuICAgICAgICByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gcXVvdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBIaWRlIFdvb0NvbW1lcmNlIG5vdGljZXMgYWZ0ZXIgNSBzZWNvbmRzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2Utbm90aWNlcy13cmFwcGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgLy8gUmVtb3ZlIFdvb0NvbW1lcmNlIG5vdGljZXMgd2hlbiBjbGlja2VkXG4gICAgJChkb2N1bWVudCkub24oXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgXCIud29vY29tbWVyY2UtbWVzc2FnZSwgLndvb2NvbW1lcmNlLWVycm9yLCAud29vY29tbWVyY2UtaW5mb1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2FydCBxdWFudGl0eSBidSBjbGljbGluZyBwbHVzL21pbnVzIG9uIENhcnQgcGFnZVxuICAgICQoXCIucXVhbnRpdHlcIikub24oXCJjbGlja1wiLCBcIi5wbHVzLCAubWludXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5wdXQgZmllbGQgYW5kIGN1cnJlbnQgcXVhbnRpdHkgdmFsdWUgZm9yIHRoaXMgY2FydCBpdGVtXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucXVhbnRpdHlcIikuZmluZChcImlucHV0LnF0eVwiKSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWwgPSBwYXJzZUludCgkaW5wdXQudmFsKCkpO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgbmV3IHF1YW50aXR5IHZhbHVlIGJhc2VkIG9uIHRoZSBidXR0b24gY2xpY2tlZFxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInBsdXNcIikpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsID4gMSA/IGN1cnJlbnRWYWwgLSAxIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgdmFsdWUgYW5kIHRyaWdnZXIgdGhlIFwiY2hhbmdlXCIgZXZlbnQgdG8gdXBkYXRlIHRoZSBjYXJ0XG4gICAgICAgICRpbnB1dC52YWwobmV3VmFsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVwbGFjZSBwbGFjZWhvbGRlciBuYW1lIG9mIGNvdXBvbiBpbnB1dFxuICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY291cG9uIC5pbnB1dC10ZXh0XCIpLmF0dHIoXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgXCJlbnRlciBjb3Vwb24gY29kZVwiXG4gICAgKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGxhYmVscyB0byB0aGVpciByZXNwZWN0aXZlIHBsYWNlaG9sZGVyc1xuXG4gICAgbGV0IGlucHV0RWxlbWVudHNPbkNoZWNrb3V0ID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWwsIC53b29jb21tZXJjZS1zaGlwcGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblNpZ25JbiA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tcm93IGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWRkcmVzcy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblJlZ2lzdGVyID0gJChcIi5jdXN0b20tcmVnaXN0cmF0aW9uIGxhYmVsXCIpO1xuXG4gICAgY29uc3QgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgICBpbnB1dEVsZW1lbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxWYWwgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKHRoaXMpLmF0dHIoXCJmb3JcIik7XG4gICAgICAgICAgICBsZXQgaW5wdXRQbGFjZWhvbGRlciA9ICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICAgIGlmIChsYWJlbFZhbCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dChpbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgbGFiZWxWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25DaGVja291dCk7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblNpZ25Jbik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblJlZ2lzdGVyKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyk7XG5cbiAgICAvLyBhZGRlZCBTaGlwbWVudCB0ZXh0IG9uIGNoZWNrb3V0IHBhZ2VcbiAgICBjb25zdCBjb250YWluZXIgPSAkKFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSAkKFxuICAgICAgICBcIjxwIGlkPSdzaGlwbWVudC10ZXh0Jz5lbnRlciB5b3VyIDxicj48c3Bhbj5zaGlwcGluZyBkZXRhaWxzPC9zcGFuPjwvcD5cIlxuICAgICk7XG4gICAgY29udGFpbmVyLmZpbmQoXCI+Om50aC1jaGlsZCgzKVwiKS5hZnRlcihuZXdFbGVtZW50KTtcblxuICAgIC8vIEFkZGVkIGltYWdlIG9uIGFjY291bnQgcGFnZVxuICAgIGNvbnN0IGFjY291bnRQYWdlRWxlbWVudCA9ICQoXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZVwiKTtcbiAgICBjb25zdCBuZXdBY2NvdW50UGFnZUVsZW1lbnQgPSAkKFxuICAgICAgICAnPGltZyBjbGFzcz1cImFjY291bnQtYmFubmVyLWltYWdlXCIgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL2tpcmdvLXRoZW1lL2Fzc2V0cy9pbWFnZXMvYWNjb3VudC9zaWduLWluLWJhbm5lci5qcGdcIiBhbHQ9XCJCYW5uZXIgSW1hZ2VcIiAvPidcbiAgICApO1xuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtcGFnZVwiKS5oYXNDbGFzcyhcImxvZ2dlZC1pblwiKSkge1xuICAgICAgICAvLyBSZW1vdmUgYmFubmVyIGltYWdlIHdoZW4gbG9nZ2VkIGluXG4gICAgICAgIGFjY291bnRQYWdlRWxlbWVudC5maW5kKFwiPjpudGgtY2hpbGQoMSlcIikuYWZ0ZXIobmV3QWNjb3VudFBhZ2VFbGVtZW50KTtcblxuICAgICAgICAvLyBLZWVwIGZ1bGwgaGVpZ2h0IHdoZW4gbG9nZ2VkIGluXG4gICAgICAgICQoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZSwgLnBhZ2UtaWQtMjM3IC5jdXN0b20tcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgKS5jc3MoXCJoZWlnaHRcIiwgXCJjYWxjKDEwMHZoIC0gMjUwcHgpXCIpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0XG4gICAgaWYgKCEkKFwiYm9keS53b29jb21tZXJjZS1hY2NvdW50LmxvZ2dlZC1pblwiKSkge1xuICAgICAgICBjb25zdCBzaWduSW5UZXh0RWxlbWVudCA9ICQoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50ICNwYWdlIC53b29jb21tZXJjZSBoMlwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25Jbk5ld1RleHQgPSBcInNpZ24gaW5cIjtcbiAgICAgICAgc2lnbkluVGV4dEVsZW1lbnQudGV4dChzaWduSW5OZXdUZXh0KTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gVGl0bGUgdGV4dCBvbiBSZWdpc3RlclxuICAgIGNvbnN0IHJlZ2lzdGVyVGV4dEVsZW1lbnQgPSAkKFwiLnBhZ2UtaWQtMjM3IC5jdXN0b20tcmVnaXN0cmF0aW9uIGgyXCIpO1xuICAgIGNvbnN0IHJlZ2lzdGVyTmV3VGV4dCA9IFwiY3JlYXRlIGFuIGFjY291bnRcIjtcbiAgICByZWdpc3RlclRleHRFbGVtZW50LnRleHQocmVnaXN0ZXJOZXdUZXh0KTtcblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBCdXR0b24gVGl0bGUgdGV4dFxuICAgIGNvbnN0IHNpZ25JblRleHRCdXR0b25FbGVtZW50ID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UtZm9ybS1sb2dpbiAud29vY29tbWVyY2UtZm9ybS1sb2dpbl9fc3VibWl0XCJcbiAgICApO1xuICAgIGNvbnN0IHNpZ25JbkJ1dHRvbk5ld1RleHQgPSBcInNpZ24gaW5cIjtcbiAgICBzaWduSW5UZXh0QnV0dG9uRWxlbWVudC50ZXh0KHNpZ25JbkJ1dHRvbk5ld1RleHQpO1xuXG4gICAgLy8gSGlkZSBmb290ZXIgd2hlbiB1c2VyIGxvZ291dCBhbmQgc2hvdyB3aGVuIGxvZ2luIGluXG4gICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtYWNjb3VudFwiKSkge1xuICAgICAgICAkKFwiLmZvb3Rlci1zZWN0aW9uXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBpZiAoJChcImJvZHkud29vY29tbWVyY2UtYWNjb3VudFwiKS5oYXNDbGFzcyhcImxvZ2dlZC1pblwiKSkge1xuICAgICAgICAvLyAgICAgJChcImZvb3Rlci1zZWN0aW9uXCIpLnNob3coKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICQoXCIuZm9vdGVyLXNlY3Rpb25cIikuaGlkZSgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBjbGFzcyBuYW1lIFwid29vdnItdmFyaWF0aW9uLW5hbWVcIlxuICAgICQoXCIud29vdnItdmFyaWF0aW9uLW5hbWVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3b3JkcyA9ICQodGhpcykudGV4dCgpLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBuZXdUZXh0ID0gXCJcIjtcblxuICAgICAgICBpZiAod29yZHMuaW5jbHVkZXMoXCJFeHRyYVwiKSkge1xuICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBuZXdUZXh0ID0gXCJYXCIgKyBsYXN0V29yZC5jaGFyQXQoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGFzdFdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIG5ld1RleHQgPSBsYXN0V29yZC5jaGFyQXQoMCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLnRleHQobmV3VGV4dC50b1VwcGVyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgICAgJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jaGVja291dFwiKSAmJlxuICAgICAgICAhJChcImJvZHkud29vY29tbWVyY2UtY2hlY2tvdXRcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1vcmRlci1yZWNlaXZlZFwiKVxuICAgICkge1xuICAgICAgICBjb25zdCAkY2hlY2tvdXRCdXR0b25BbmNlc3RvciA9ICQoXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXRcIik7XG4gICAgICAgIGNvbnN0ICRjaGVja291dE5lc3RlZEJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgaWYgKCRjaGVja291dEJ1dHRvbkFuY2VzdG9yLmxlbmd0aCAmJiAkY2hlY2tvdXROZXN0ZWRCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkY2hlY2tvdXROZXN0ZWRCdXR0b24uYXBwZW5kVG8oJGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWlyZWRJbnB1dEZpZWxkcyA9ICQoXG4gICAgICAgICAgICBcIi5jaGVja291dC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHMgLnZhbGlkYXRlLXJlcXVpcmVkIGlucHV0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gJChcIiNwbGFjZV9vcmRlclwiKTtcblxuICAgICAgICBjaGVja1JlcXVpcmVkRmllbGRzKCk7XG4gICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja1JlcXVpcmVkRmllbGRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUmVxdWlyZWRGaWVsZHMoKSB7XG4gICAgICAgICAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWlyZWRJbnB1dEZpZWxkcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRWYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXRWYWwgfHwgaW5wdXRWYWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhbGxWYWxpZCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICBjb25zdCAkY2FydEJ1dHRvbkFuY2VzdG9yID0gJChcIi53b29jb21tZXJjZS1jYXJ0IC53b29jb21tZXJjZVwiKTtcbiAgICAgICAgY29uc3QgJGNhcnROZXN0ZWRCdXR0b24gPSAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNoZWNrb3V0LWJ1dHRvblwiKTtcblxuICAgICAgICBpZiAoJGNhcnRCdXR0b25BbmNlc3Rvci5sZW5ndGggJiYgJGNhcnROZXN0ZWRCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkY2FydE5lc3RlZEJ1dHRvbi5hcHBlbmRUbygkY2FydEJ1dHRvbkFuY2VzdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiL2NhcnQvXCIpID4gLTEpIHtcbiAgICAgICAgJChcImEubmF2YmFyLWNhcnRcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcImEubmF2YmFyLWNhcnRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAkKFwiLmR1cGxpY2F0ZS1lbGVtZW50c1wiKS5hcHBlbmRUbyhcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1wcm9kdWN0LWRldGFpbHNfX3Nob3J0LWRlc2NyaXB0aW9uXCIpLnBhcmVudCgpLnBhcmVudCgpXG4gICAgKTtcblxuICAgIGNvbnN0IHdvdyA9IG5ldyBXT1coKTtcbiAgICB3b3cuaW5pdCgpO1xuXG4gICAgJChcbiAgICAgICAgXCJib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC5zdW1tYXJ5LmVudHJ5LXN1bW1hcnksIGJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgLndvb2NvbW1lcmNlLVRhYnMtcGFuZWwsIGJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgI3Jldmlld3NcIlxuICAgICkuYWRkQ2xhc3MoXCJ3b3cgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXBcIik7XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBjbGljayBldmVudCBvbiB0aGUgY2FydCBpY29uXG4gICAgJChcIi5uYXZiYXItY2FydCwgLnhvby13c2Mtc2MtY29udFwiKS5vZmYoXCJjbGlja1wiKTtcblxuICAgIGlmICghJChcImJvZHlcIikuaGFzQ2xhc3MoXCIud29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICAvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgY2FydCBwYWdlIHdoZW4gdGhleSBjbGljayBvbiB0aGUgY2FydCBpY29uXG4gICAgICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY2FydFwiO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhZGQgdG8gY2FydCBidXR0b24gb3ZlcnJpZGVzIHRvIGxldCBub3JtYWwgV29vQ29tbWVyY2UgYmVoYXZpb3Igd29ya1xuICAgIC8vICQoXCJib2R5LnNpbmdsZS1wcm9kdWN0IC53cGNibi1idG4tc2luZ2xlLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikub2ZmKFxuICAgIC8vICAgICBcImNsaWNrXCJcbiAgICAvLyApO1xuXG4gICAgLy8gJChkb2N1bWVudCkub2ZmKFwiY2xpY2tcIiwgXCIuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKTtcblxuICAgIC8vICQoXCJib2R5LnNpbmdsZS1wcm9kdWN0IC5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhcnRcIjtcbiAgICAvLyAgICAgfSwgMTAwMCk7XG4gICAgLy8gfSk7XG5cbiAgICAkKFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsIC53cGNibi1idG4uc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS50ZXh0KFxuICAgICAgICBcIkFkZCB0byBDaGVja291dFwiXG4gICAgKTtcbiAgICAkKFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsIC53cGNibi1idG4uc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS5jbGljayhcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgJChcbiAgICAgICAgXCIud29vY29tbWVyY2Utc2hvcCBsaS5wcm9kdWN0IC5wcm9kdWN0LWNhcmQtZGV0YWlscyAuc2hvcC1hZGQtdG8tY2FydC1tb2RhbCAuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvbi53cC1lbGVtZW50LWJ1dHRvblwiXG4gICAgKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuc2hvcC1hZGQtdG8tY2FydC1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICAkKFwiLnByb2R1Y3QgLnBzZnctc29jaWFsLXdyYXBcIikuYXBwZW5kVG8oXG4gICAgICAgIFwiI3Byb2R1Y3RTaGFyZUljb25zIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5XCJcbiAgICApO1xuXG4gICAgJChcIi5uYXZiYXItYWRtaW4tZGVza3RvcCBzdmdcIikuYXBwZW5kVG8oXCIubmF2YmFyLWFkbWluIC54b28tZWwtYWN0aW9uLXNjXCIpO1xuXG4gICAgLy8gU2hpZnQgY2hlY2tvdXQgYnV0dG9uIGluIHJpZ2h0IGNvbG91bSBvZiBkZXNrdG9wXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMDAwKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY2hlY2tvdXQtYnV0dG9uLmJ1dHRvblwiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLmNhcnQtY29sbGF0ZXJhbHNcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC5hbHRlcm5hdGUtY2FydC1wcm9kdWN0c1wiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNwbGFjZV9vcmRlclwiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIikucHJlcGVuZChcbiAgICAgICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld19oZWFkaW5nXCIpXG4gICAgICAgICk7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b29jb21tZXJjZS1kZXNrdG9wLWNvbC1yaWdodFwiPjwvZGl2PmBcbiAgICAgICAgKS5hcHBlbmRUbyhcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXJcIik7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciBwLndvb2NvbW1lcmNlLW5vdGljZSxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciB1bC53b29jb21tZXJjZS1vcmRlci1vdmVydmlldyxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciA+IHBgXG4gICAgICAgICkuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLWxlZnRcIlxuICAgICAgICApO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWN1c3RvbWVyLWRldGFpbHMsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLW9yZGVyLWRldGFpbHNgXG4gICAgICAgICkuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLXJpZ2h0XCJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAkKFwiLndvb2NvbW1lcmNlLXNob3AgLnByb2R1Y3QgYS53b29jb21tZXJjZS1Mb29wUHJvZHVjdC1saW5rXCIpXG4gICAgICAgIC5jb250ZW50cygpXG4gICAgICAgIC51bndyYXAoKVxuICAgICAgICAud3JhcChcIjxkaXY+PC9kaXY+XCIpO1xuXG4gICAgJChcIi5oZXJvLXNlY3Rpb25TdW1tZXIgLnByaW1hcnktbGlua1wiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc2hvcC8/b3JkZXJieT1kYXRlJm9yZGVyPWRlc2NcIjtcbiAgICB9KTtcblxuICAgICQoXCIuaGVyby1jbGFzc2ljU2VjdGlvbiAucHJpbWFyeS1saW5rXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zaG9wXCI7XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdi1wcm9kdWN0LWNhcm91c2VsXCIpLmZsaWNraXR5KHtcbiAgICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0ICRwcm9kdWN0ID0gJChcIi53b29jb21tZXJjZS1zaG9wIC5wcm9kdWN0LnR5cGUtcHJvZHVjdC5wb3N0LTE0MDZcIik7XG4gICAgLy8gaWYgKCRwcm9kdWN0Lmxlbmd0aCkge1xuICAgIC8vICAgICAkcHJvZHVjdC5hdHRyKFwiaWRcIiwgXCJzdW1tZXJDb2xsZWN0aW9uSWRcIik7XG4gICAgLy8gfVxuXG4gICAgJChcIi5ob21lLWFycm93XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvZGlzdC9qcy9hcHBcIjogMCxcblx0XCJzdHlsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIm5hdmJhciIsImNsYXNzTmFtZSIsIndpbmRvdyIsIm9uIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwic2Nyb2xsIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwiYXV0b1BsYXkiLCIkYmxvZ0Nhcm91c2VsIiwicHJldk5leHRCdXR0b25zIiwiZnJlZVNjcm9sbCIsImNvbnRhaW4iLCJjZWxsQWxpZ24iLCJwYWdlRG90cyIsIiRnYWxsZXJ5Q2Fyb3VzZWwiLCJ0b2dnbGUiLCJlbGVtZW50IiwibmV3VGV4dCIsInRleHQiLCJyZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJvcmlnaW5hbFRleHQiLCJ0ZXh0Q29udGVudCIsInF1b3RlZFRleHQiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIiRpbnB1dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3VycmVudFZhbCIsInBhcnNlSW50IiwidmFsIiwibmV3VmFsIiwidHJpZ2dlciIsImF0dHIiLCJpbnB1dEVsZW1lbnRzT25DaGVja291dCIsImlucHV0RWxlbWVudHNPblNpZ25JbiIsImlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MiLCJpbnB1dEVsZW1lbnRzT25SZWdpc3RlciIsInJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCIsImlucHV0RWxlbWVudCIsImVhY2giLCJsYWJlbFZhbCIsImlucHV0TmFtZSIsImlucHV0UGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJuZXdFbGVtZW50IiwiYWZ0ZXIiLCJhY2NvdW50UGFnZUVsZW1lbnQiLCJuZXdBY2NvdW50UGFnZUVsZW1lbnQiLCJjc3MiLCJzaWduSW5UZXh0RWxlbWVudCIsInNpZ25Jbk5ld1RleHQiLCJyZWdpc3RlclRleHRFbGVtZW50IiwicmVnaXN0ZXJOZXdUZXh0Iiwic2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQiLCJzaWduSW5CdXR0b25OZXdUZXh0IiwiaGlkZSIsIndvcmRzIiwidHJpbSIsInNwbGl0IiwiaW5jbHVkZXMiLCJsYXN0V29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsImFsbFZhbGlkIiwicmVxdWlyZWRJbnB1dEZpZWxkcyIsImlucHV0VmFsIiwiYnV0dG9uIiwicHJvcCIsIiRjaGVja291dEJ1dHRvbkFuY2VzdG9yIiwiJGNoZWNrb3V0TmVzdGVkQnV0dG9uIiwiYXBwZW5kVG8iLCIkY2FydEJ1dHRvbkFuY2VzdG9yIiwiJGNhcnROZXN0ZWRCdXR0b24iLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwiZXZlbnQiLCJhZGRDbGFzcyIsInBhcmVudCIsIndvdyIsIldPVyIsImluaXQiLCJvZmYiLCJtb2RhbCIsInNjcmVlbiIsIndpZHRoIiwicHJlcGVuZCIsImNvbnRlbnRzIiwidW53cmFwIiwid3JhcCIsImFkYXB0aXZlSGVpZ2h0IiwiaGlzdG9yeSIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9