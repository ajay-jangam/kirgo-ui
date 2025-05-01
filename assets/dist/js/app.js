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

  $("body.single-product .single_add_to_cart_button").click(function () {
    setTimeout(function () {
      window.location.href = "/cart";
    }, 1000);
  });
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
  $(".classic-section .primary-link").click(function () {
    window.location.href = "/shop/?orderby=date&order=desc";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogTmF2YmFyXG4gICAgICovXG4gICAgLy8gTmF2YmFyIE1lbnVcblxuICAgICQoXCIubmF2YmFyLWhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlLndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzRml4ZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgdGhlIGNsYXNzIG5hbWUgdG8gdG9nZ2xlXG4gICAgdmFyIG5hdmJhciA9ICQoXCIubmF2YmFyXCIpO1xuICAgIHZhciBjbGFzc05hbWUgPSBcInNjcm9sbGVkLXNjcmVlblwiO1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhclxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gMTApIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGY4XCIgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2Nyb2xsID0gJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChzY3JvbGwgPiAxMCAmJiAhJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKSB8fFxuICAgICAgICAgICAgKHNjcm9sbCA9PT0gMCAmJiAkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcIi5hY3RpdmVcIikudG9nZ2xlQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBIb21lIFBhZ2VcbiAgICAgKi9cblxuICAgIC8vIEhvbWUgU2xpZGVyXG5cbiAgICBsZXQgJGhvbWVDYXJvdXNlbCA9ICQoXCIuaG9tZS1jYXJvdXNlbFwiKTtcblxuICAgICRob21lQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBhdXRvUGxheTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIEJsb2cgU2xpZGVyXG5cbiAgICBsZXQgJGJsb2dDYXJvdXNlbCA9ICQoXCIuYmxvZy1jYXJvdXNlbFwiKTtcblxuICAgICRibG9nQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBmcmVlU2Nyb2xsOiB0cnVlLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgICAgICBjZWxsQWxpZ246IFwiY2VudGVyXCIsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKi9cbiAgICAkKFwiLndvb2NvbW1lcmNlLVJldmlld3MgLmNvbW1lbnRsaXN0XCIpLmZsaWNraXR5KHtcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBjZWxsQWxpZ246IFwibGVmdFwiLFxuICAgIH0pO1xuXG4gICAgLy8gR2FsbGVyeSBTbGlkZXJcblxuICAgIGxldCAkZ2FsbGVyeUNhcm91c2VsID0gJChcIi5zaG9wLWdhbGxlcnlcIik7XG5cbiAgICAkZ2FsbGVyeUNhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBQYWdlXG4gICAgICoqL1xuXG4gICAgLy8gVG9nZ2xlIFJldmlldyBGb3JtXG4gICAgJChcIiNyZXZpZXdfZm9ybSAuY29tbWVudC1yZXBseS10aXRsZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UgI3Jldmlld19mb3JtIC5jb21tZW50LWZvcm1cIikudG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFJldmlldyBUaXRsZSB0ZXh0XG4gICAgY29uc3QgZWxlbWVudCA9ICQoXCIjcmVwbHktdGl0bGVcIik7XG4gICAgY29uc3QgbmV3VGV4dCA9IFwic2VuZCB5b3VyIHJldmlld1wiO1xuICAgIGVsZW1lbnQudGV4dChuZXdUZXh0KTtcblxuICAgIC8vIEFkZCBkb3VibGUgcW91dGVzIHRvIFJldmlld3NcbiAgICBjb25zdCByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXNjcmlwdGlvbiBwXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQgPSByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgcXVvdGVkVGV4dCA9IGBcIiR7b3JpZ2luYWxUZXh0fVwiYDtcbiAgICAgICAgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IHF1b3RlZFRleHQ7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBXb29Db21tZXJjZSBub3RpY2VzIGFmdGVyIDUgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLW5vdGljZXMtd3JhcHBlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICB9LCA1MDAwKTtcblxuICAgIC8vIFJlbW92ZSBXb29Db21tZXJjZSBub3RpY2VzIHdoZW4gY2xpY2tlZFxuICAgICQoZG9jdW1lbnQpLm9uKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLW1lc3NhZ2UsIC53b29jb21tZXJjZS1lcnJvciwgLndvb2NvbW1lcmNlLWluZm9cIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNhcnQgcXVhbnRpdHkgYnUgY2xpY2xpbmcgcGx1cy9taW51cyBvbiBDYXJ0IHBhZ2VcbiAgICAkKFwiLnF1YW50aXR5XCIpLm9uKFwiY2xpY2tcIiwgXCIucGx1cywgLm1pbnVzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGlucHV0IGZpZWxkIGFuZCBjdXJyZW50IHF1YW50aXR5IHZhbHVlIGZvciB0aGlzIGNhcnQgaXRlbVxuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnF1YW50aXR5XCIpLmZpbmQoXCJpbnB1dC5xdHlcIiksXG4gICAgICAgICAgICBjdXJyZW50VmFsID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpKTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIG5ldyBxdWFudGl0eSB2YWx1ZSBiYXNlZCBvbiB0aGUgYnV0dG9uIGNsaWNrZWRcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJwbHVzXCIpKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gY3VycmVudFZhbCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gY3VycmVudFZhbCA+IDEgPyBjdXJyZW50VmFsIC0gMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IGZpZWxkIHZhbHVlIGFuZCB0cmlnZ2VyIHRoZSBcImNoYW5nZVwiIGV2ZW50IHRvIHVwZGF0ZSB0aGUgY2FydFxuICAgICAgICAkaW5wdXQudmFsKG5ld1ZhbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFJlcGxhY2UgcGxhY2Vob2xkZXIgbmFtZSBvZiBjb3Vwb24gaW5wdXRcbiAgICAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNvdXBvbiAuaW5wdXQtdGV4dFwiKS5hdHRyKFxuICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgIFwiZW50ZXIgY291cG9uIGNvZGVcIlxuICAgICk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBsYWJlbHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwbGFjZWhvbGRlcnNcblxuICAgIGxldCBpbnB1dEVsZW1lbnRzT25DaGVja291dCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsLCAud29vY29tbWVyY2Utc2hpcHBpbmctZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzT25TaWduSW4gPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLXJvdyBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFkZHJlc3MtZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzT25SZWdpc3RlciA9ICQoXCIuY3VzdG9tLXJlZ2lzdHJhdGlvbiBsYWJlbFwiKTtcblxuICAgIGNvbnN0IHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxhYmVsVmFsID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICBsZXQgaW5wdXROYW1lID0gJCh0aGlzKS5hdHRyKFwiZm9yXCIpO1xuICAgICAgICAgICAgbGV0IGlucHV0UGxhY2Vob2xkZXIgPSAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIik7XG4gICAgICAgICAgICBpZiAobGFiZWxWYWwgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIGlucHV0TmFtZSkuYXR0cihcInBsYWNlaG9sZGVyXCIsIGxhYmVsVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQpO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25TaWduSW4pO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25SZWdpc3Rlcik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MpO1xuXG4gICAgLy8gYWRkZWQgU2hpcG1lbnQgdGV4dCBvbiBjaGVja291dCBwYWdlXG4gICAgY29uc3QgY29udGFpbmVyID0gJChcIi53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gJChcbiAgICAgICAgXCI8cCBpZD0nc2hpcG1lbnQtdGV4dCc+ZW50ZXIgeW91ciA8YnI+PHNwYW4+c2hpcHBpbmcgZGV0YWlsczwvc3Bhbj48L3A+XCJcbiAgICApO1xuICAgIGNvbnRhaW5lci5maW5kKFwiPjpudGgtY2hpbGQoMylcIikuYWZ0ZXIobmV3RWxlbWVudCk7XG5cbiAgICAvLyBBZGRlZCBpbWFnZSBvbiBhY2NvdW50IHBhZ2VcbiAgICBjb25zdCBhY2NvdW50UGFnZUVsZW1lbnQgPSAkKFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2VcIik7XG4gICAgY29uc3QgbmV3QWNjb3VudFBhZ2VFbGVtZW50ID0gJChcbiAgICAgICAgJzxpbWcgY2xhc3M9XCJhY2NvdW50LWJhbm5lci1pbWFnZVwiIHNyYz1cIi93cC1jb250ZW50L3RoZW1lcy9raXJnby10aGVtZS9hc3NldHMvaW1hZ2VzL2FjY291bnQvc2lnbi1pbi1iYW5uZXIuanBnXCIgYWx0PVwiQmFubmVyIEltYWdlXCIgLz4nXG4gICAgKTtcbiAgICBpZiAoISQoXCJib2R5Lndvb2NvbW1lcmNlLXBhZ2VcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGJhbm5lciBpbWFnZSB3aGVuIGxvZ2dlZCBpblxuICAgICAgICBhY2NvdW50UGFnZUVsZW1lbnQuZmluZChcIj46bnRoLWNoaWxkKDEpXCIpLmFmdGVyKG5ld0FjY291bnRQYWdlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gS2VlcCBmdWxsIGhlaWdodCB3aGVuIGxvZ2dlZCBpblxuICAgICAgICAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UsIC5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvblwiXG4gICAgICAgICkuY3NzKFwiaGVpZ2h0XCIsIFwiY2FsYygxMDB2aCAtIDI1MHB4KVwiKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gVGl0bGUgdGV4dFxuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtYWNjb3VudC5sb2dnZWQtaW5cIikpIHtcbiAgICAgICAgY29uc3Qgc2lnbkluVGV4dEVsZW1lbnQgPSAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZSAud29vY29tbWVyY2UgaDJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduSW5OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgICAgIHNpZ25JblRleHRFbGVtZW50LnRleHQoc2lnbkluTmV3VGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHQgb24gUmVnaXN0ZXJcbiAgICBjb25zdCByZWdpc3RlclRleHRFbGVtZW50ID0gJChcIi5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvbiBoMlwiKTtcbiAgICBjb25zdCByZWdpc3Rlck5ld1RleHQgPSBcImNyZWF0ZSBhbiBhY2NvdW50XCI7XG4gICAgcmVnaXN0ZXJUZXh0RWxlbWVudC50ZXh0KHJlZ2lzdGVyTmV3VGV4dCk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gQnV0dG9uIFRpdGxlIHRleHRcbiAgICBjb25zdCBzaWduSW5UZXh0QnV0dG9uRWxlbWVudCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tbG9naW4gLndvb2NvbW1lcmNlLWZvcm0tbG9naW5fX3N1Ym1pdFwiXG4gICAgKTtcbiAgICBjb25zdCBzaWduSW5CdXR0b25OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQudGV4dChzaWduSW5CdXR0b25OZXdUZXh0KTtcblxuICAgIC8vIEhpZGUgZm9vdGVyIHdoZW4gdXNlciBsb2dvdXQgYW5kIHNob3cgd2hlbiBsb2dpbiBpblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWFjY291bnRcIikpIHtcbiAgICAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG5cbiAgICAgICAgLy8gaWYgKCQoXCJib2R5Lndvb2NvbW1lcmNlLWFjY291bnRcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gICAgICQoXCJmb290ZXItc2VjdGlvblwiKS5zaG93KCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAkKFwiLmZvb3Rlci1zZWN0aW9uXCIpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgbmFtZSBcIndvb3ZyLXZhcmlhdGlvbi1uYW1lXCJcbiAgICAkKFwiLndvb3ZyLXZhcmlhdGlvbi1uYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd29yZHMgPSAkKHRoaXMpLnRleHQoKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgbmV3VGV4dCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHdvcmRzLmluY2x1ZGVzKFwiRXh0cmFcIikpIHtcbiAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbmV3VGV4dCA9IFwiWFwiICsgbGFzdFdvcmQuY2hhckF0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBuZXdUZXh0ID0gbGFzdFdvcmQuY2hhckF0KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS50ZXh0KG5ld1RleHQudG9VcHBlckNhc2UoKSk7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICAgICQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2hlY2tvdXRcIikgJiZcbiAgICAgICAgISQoXCJib2R5Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2Utb3JkZXItcmVjZWl2ZWRcIilcbiAgICApIHtcbiAgICAgICAgY29uc3QgJGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IgPSAkKFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpO1xuICAgICAgICBjb25zdCAkY2hlY2tvdXROZXN0ZWRCdXR0b24gPSAkKFwiI3BsYWNlX29yZGVyXCIpO1xuXG4gICAgICAgIGlmICgkY2hlY2tvdXRCdXR0b25BbmNlc3Rvci5sZW5ndGggJiYgJGNoZWNrb3V0TmVzdGVkQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNoZWNrb3V0TmVzdGVkQnV0dG9uLmFwcGVuZFRvKCRjaGVja291dEJ1dHRvbkFuY2VzdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXRGaWVsZHMgPSAkKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzIC52YWxpZGF0ZS1yZXF1aXJlZCBpbnB1dFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgY29uc3QgJGNhcnRCdXR0b25BbmNlc3RvciA9ICQoXCIud29vY29tbWVyY2UtY2FydCAud29vY29tbWVyY2VcIik7XG4gICAgICAgIGNvbnN0ICRjYXJ0TmVzdGVkQnV0dG9uID0gJChcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b25cIik7XG5cbiAgICAgICAgaWYgKCRjYXJ0QnV0dG9uQW5jZXN0b3IubGVuZ3RoICYmICRjYXJ0TmVzdGVkQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNhcnROZXN0ZWRCdXR0b24uYXBwZW5kVG8oJGNhcnRCdXR0b25BbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIi9jYXJ0L1wiKSA+IC0xKSB7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgJChcIi5kdXBsaWNhdGUtZWxlbWVudHNcIikuYXBwZW5kVG8oXG4gICAgICAgICQoXCIud29vY29tbWVyY2UtcHJvZHVjdC1kZXRhaWxzX19zaG9ydC1kZXNjcmlwdGlvblwiKS5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICk7XG5cbiAgICBjb25zdCB3b3cgPSBuZXcgV09XKCk7XG4gICAgd293LmluaXQoKTtcblxuICAgICQoXG4gICAgICAgIFwiYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAuc3VtbWFyeS5lbnRyeS1zdW1tYXJ5LCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC53b29jb21tZXJjZS1UYWJzLXBhbmVsLCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0ICNyZXZpZXdzXCJcbiAgICApLmFkZENsYXNzKFwid293IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCIpO1xuXG4gICAgLy8gRGlzYWJsZSB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGNhcnQgaWNvblxuICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikub2ZmKFwiY2xpY2tcIik7XG5cbiAgICBpZiAoISQoXCJib2R5XCIpLmhhc0NsYXNzKFwiLndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhcnQgcGFnZSB3aGVuIHRoZXkgY2xpY2sgb24gdGhlIGNhcnQgaWNvblxuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0LCAueG9vLXdzYy1zYy1jb250XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhcnRcIjtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWRkIHRvIGNhcnQgYnV0dG9uIG92ZXJyaWRlcyB0byBsZXQgbm9ybWFsIFdvb0NvbW1lcmNlIGJlaGF2aW9yIHdvcmtcbiAgICAvLyAkKFwiYm9keS5zaW5nbGUtcHJvZHVjdCAud3BjYm4tYnRuLXNpbmdsZS5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLm9mZihcbiAgICAvLyAgICAgXCJjbGlja1wiXG4gICAgLy8gKTtcblxuICAgIC8vICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIFwiLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIik7XG5cbiAgICAkKFwiYm9keS5zaW5nbGUtcHJvZHVjdCAuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXJ0XCI7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikudGV4dChcbiAgICAgICAgXCJBZGQgdG8gQ2hlY2tvdXRcIlxuICAgICk7XG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikuY2xpY2soXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLXNob3AgbGkucHJvZHVjdCAucHJvZHVjdC1jYXJkLWRldGFpbHMgLnNob3AtYWRkLXRvLWNhcnQtbW9kYWwgLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b24ud3AtZWxlbWVudC1idXR0b25cIlxuICAgICkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnNob3AtYWRkLXRvLWNhcnQtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgJChcIi5wcm9kdWN0IC5wc2Z3LXNvY2lhbC13cmFwXCIpLmFwcGVuZFRvKFxuICAgICAgICBcIiNwcm9kdWN0U2hhcmVJY29ucyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keVwiXG4gICAgKTtcblxuICAgICQoXCIubmF2YmFyLWFkbWluLWRlc2t0b3Agc3ZnXCIpLmFwcGVuZFRvKFwiLm5hdmJhci1hZG1pbiAueG9vLWVsLWFjdGlvbi1zY1wiKTtcblxuICAgIC8vIFNoaWZ0IGNoZWNrb3V0IGJ1dHRvbiBpbiByaWdodCBjb2xvdW0gb2YgZGVza3RvcFxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTAwMCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNoZWNrb3V0LWJ1dHRvbi5idXR0b25cIikuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi5jYXJ0LWNvbGxhdGVyYWxzXCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAuYWx0ZXJuYXRlLWNhcnQtcHJvZHVjdHNcIikuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3XCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAjcGxhY2Vfb3JkZXJcIikuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3XCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdfaGVhZGluZ1wiKVxuICAgICAgICApO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ3b29jb21tZXJjZS1kZXNrdG9wLWNvbC1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29vY29tbWVyY2UtZGVza3RvcC1jb2wtcmlnaHRcIj48L2Rpdj5gXG4gICAgICAgICkuYXBwZW5kVG8oXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyXCIpO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgcC53b29jb21tZXJjZS1ub3RpY2UsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgdWwud29vY29tbWVyY2Utb3JkZXItb3ZlcnZpZXcsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgPiBwYFxuICAgICAgICApLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1kZXNrdG9wLWNvbC1sZWZ0XCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcbiAgICAgICAgICAgIGAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1jdXN0b21lci1kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1vcmRlci1kZXRhaWxzYFxuICAgICAgICApLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1kZXNrdG9wLWNvbC1yaWdodFwiXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgJChcIi53b29jb21tZXJjZS1zaG9wIC5wcm9kdWN0IGEud29vY29tbWVyY2UtTG9vcFByb2R1Y3QtbGlua1wiKVxuICAgICAgICAuY29udGVudHMoKVxuICAgICAgICAudW53cmFwKClcbiAgICAgICAgLndyYXAoXCI8ZGl2PjwvZGl2PlwiKTtcblxuICAgICQoXCIuY2xhc3NpYy1zZWN0aW9uIC5wcmltYXJ5LWxpbmtcIikuY2xpY2soKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Nob3AvP29yZGVyYnk9ZGF0ZSZvcmRlcj1kZXNjXCI7XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdi1wcm9kdWN0LWNhcm91c2VsXCIpLmZsaWNraXR5KHtcbiAgICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0ICRwcm9kdWN0ID0gJChcIi53b29jb21tZXJjZS1zaG9wIC5wcm9kdWN0LnR5cGUtcHJvZHVjdC5wb3N0LTE0MDZcIik7XG4gICAgLy8gaWYgKCRwcm9kdWN0Lmxlbmd0aCkge1xuICAgIC8vICAgICAkcHJvZHVjdC5hdHRyKFwiaWRcIiwgXCJzdW1tZXJDb2xsZWN0aW9uSWRcIik7XG4gICAgLy8gfVxuXG4gICAgJChcIi5ob21lLWFycm93XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvZGlzdC9qcy9hcHBcIjogMCxcblx0XCJzdHlsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIm5hdmJhciIsImNsYXNzTmFtZSIsIndpbmRvdyIsIm9uIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwic2Nyb2xsIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwiYXV0b1BsYXkiLCIkYmxvZ0Nhcm91c2VsIiwicHJldk5leHRCdXR0b25zIiwiZnJlZVNjcm9sbCIsImNvbnRhaW4iLCJjZWxsQWxpZ24iLCJwYWdlRG90cyIsIiRnYWxsZXJ5Q2Fyb3VzZWwiLCJ0b2dnbGUiLCJlbGVtZW50IiwibmV3VGV4dCIsInRleHQiLCJyZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJvcmlnaW5hbFRleHQiLCJ0ZXh0Q29udGVudCIsInF1b3RlZFRleHQiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIiRpbnB1dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3VycmVudFZhbCIsInBhcnNlSW50IiwidmFsIiwibmV3VmFsIiwidHJpZ2dlciIsImF0dHIiLCJpbnB1dEVsZW1lbnRzT25DaGVja291dCIsImlucHV0RWxlbWVudHNPblNpZ25JbiIsImlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MiLCJpbnB1dEVsZW1lbnRzT25SZWdpc3RlciIsInJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCIsImlucHV0RWxlbWVudCIsImVhY2giLCJsYWJlbFZhbCIsImlucHV0TmFtZSIsImlucHV0UGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJuZXdFbGVtZW50IiwiYWZ0ZXIiLCJhY2NvdW50UGFnZUVsZW1lbnQiLCJuZXdBY2NvdW50UGFnZUVsZW1lbnQiLCJjc3MiLCJzaWduSW5UZXh0RWxlbWVudCIsInNpZ25Jbk5ld1RleHQiLCJyZWdpc3RlclRleHRFbGVtZW50IiwicmVnaXN0ZXJOZXdUZXh0Iiwic2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQiLCJzaWduSW5CdXR0b25OZXdUZXh0IiwiaGlkZSIsIndvcmRzIiwidHJpbSIsInNwbGl0IiwiaW5jbHVkZXMiLCJsYXN0V29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsImFsbFZhbGlkIiwicmVxdWlyZWRJbnB1dEZpZWxkcyIsImlucHV0VmFsIiwiYnV0dG9uIiwicHJvcCIsIiRjaGVja291dEJ1dHRvbkFuY2VzdG9yIiwiJGNoZWNrb3V0TmVzdGVkQnV0dG9uIiwiYXBwZW5kVG8iLCIkY2FydEJ1dHRvbkFuY2VzdG9yIiwiJGNhcnROZXN0ZWRCdXR0b24iLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwiZXZlbnQiLCJhZGRDbGFzcyIsInBhcmVudCIsIndvdyIsIldPVyIsImluaXQiLCJvZmYiLCJtb2RhbCIsInNjcmVlbiIsIndpZHRoIiwicHJlcGVuZCIsImNvbnRlbnRzIiwidW53cmFwIiwid3JhcCIsImFkYXB0aXZlSGVpZ2h0IiwiaGlzdG9yeSIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9