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
    if (scrollPosition >= navbar.outerHeight()) {
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
    $(".woocommerce #review_form .comment-form").toggle("display", "flex");
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
  var newAccountPageElement = $('<img class="account-banner-image" src="/wp-content/themes/kirgo-theme/assets/images/account/sign-in-banner.png" alt="Banner Image" />');
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
    var words = $(this).text().split(" ");
    var lastWord = words[words.length - 1];
    var firstChar = lastWord.charAt(0);
    $(this).text(firstChar);
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
    var checkoutButtonAncestor = document.querySelector(".checkout.woocommerce-checkout");
    var checkoutNestedButton = document.querySelector("#place_order");
    checkoutButtonAncestor.appendChild(checkoutNestedButton);
    var requiredInputFields = $(".checkout.woocommerce-checkout .woocommerce-billing-fields .validate-required input");
    var button = $("#place_order");
    checkRequiredFields();
    requiredInputFields.on("input", function () {
      checkRequiredFields();
    });
  }
  if ($("body").hasClass("woocommerce-cart")) {
    var cartButtonAncestor = document.querySelector(".woocommerce-cart .woocommerce");
    var cartNestedButton = document.querySelector(".woocommerce-cart .checkout-button");
    cartButtonAncestor.appendChild(cartNestedButton);
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

  // Redirect the user to the cart page when they click on the cart icon

  $("body.single-product .wpcbn-btn-single.single_add_to_cart_button").click(function () {
    setTimeout(function () {
      window.location.href = "/checkout";
    }, 1000);
  });
  $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").text("Add to Checkout");
  $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").click(function () {
    $(".cart-product-size-modal").modal("hide");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDM0JBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogTmF2YmFyXG4gICAgICovXG4gICAgLy8gTmF2YmFyIE1lbnVcblxuICAgICQoXCIubmF2YmFyLWhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlLndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzRml4ZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgdGhlIGNsYXNzIG5hbWUgdG8gdG9nZ2xlXG4gICAgdmFyIG5hdmJhciA9ICQoXCIubmF2YmFyXCIpO1xuICAgIHZhciBjbGFzc05hbWUgPSBcInNjcm9sbGVkLXNjcmVlblwiO1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhclxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gbmF2YmFyLm91dGVySGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGY4XCIgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2Nyb2xsID0gJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChzY3JvbGwgPiAxMCAmJiAhJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKSB8fFxuICAgICAgICAgICAgKHNjcm9sbCA9PT0gMCAmJiAkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcIi5hY3RpdmVcIikudG9nZ2xlQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBIb21lIFBhZ2VcbiAgICAgKi9cblxuICAgIC8vIEhvbWUgU2xpZGVyXG5cbiAgICBsZXQgJGhvbWVDYXJvdXNlbCA9ICQoXCIuaG9tZS1jYXJvdXNlbFwiKTtcblxuICAgICRob21lQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBhdXRvUGxheTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIEJsb2cgU2xpZGVyXG5cbiAgICBsZXQgJGJsb2dDYXJvdXNlbCA9ICQoXCIuYmxvZy1jYXJvdXNlbFwiKTtcblxuICAgICRibG9nQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBmcmVlU2Nyb2xsOiB0cnVlLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgICAgICBjZWxsQWxpZ246IFwiY2VudGVyXCIsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKi9cbiAgICAkKFwiLndvb2NvbW1lcmNlLVJldmlld3MgLmNvbW1lbnRsaXN0XCIpLmZsaWNraXR5KHtcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBjZWxsQWxpZ246IFwibGVmdFwiLFxuICAgIH0pO1xuXG4gICAgLy8gR2FsbGVyeSBTbGlkZXJcblxuICAgIGxldCAkZ2FsbGVyeUNhcm91c2VsID0gJChcIi5zaG9wLWdhbGxlcnlcIik7XG5cbiAgICAkZ2FsbGVyeUNhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBQYWdlXG4gICAgICoqL1xuXG4gICAgLy8gVG9nZ2xlIFJldmlldyBGb3JtXG4gICAgJChcIiNyZXZpZXdfZm9ybSAuY29tbWVudC1yZXBseS10aXRsZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UgI3Jldmlld19mb3JtIC5jb21tZW50LWZvcm1cIikudG9nZ2xlKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFJldmlldyBUaXRsZSB0ZXh0XG4gICAgY29uc3QgZWxlbWVudCA9ICQoXCIjcmVwbHktdGl0bGVcIik7XG4gICAgY29uc3QgbmV3VGV4dCA9IFwic2VuZCB5b3VyIHJldmlld1wiO1xuICAgIGVsZW1lbnQudGV4dChuZXdUZXh0KTtcblxuICAgIC8vIEFkZCBkb3VibGUgcW91dGVzIHRvIFJldmlld3NcbiAgICBjb25zdCByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXNjcmlwdGlvbiBwXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQgPSByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgcXVvdGVkVGV4dCA9IGBcIiR7b3JpZ2luYWxUZXh0fVwiYDtcbiAgICAgICAgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IHF1b3RlZFRleHQ7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBXb29Db21tZXJjZSBub3RpY2VzIGFmdGVyIDUgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLW5vdGljZXMtd3JhcHBlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICB9LCA1MDAwKTtcblxuICAgIC8vIFJlbW92ZSBXb29Db21tZXJjZSBub3RpY2VzIHdoZW4gY2xpY2tlZFxuICAgICQoZG9jdW1lbnQpLm9uKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLW1lc3NhZ2UsIC53b29jb21tZXJjZS1lcnJvciwgLndvb2NvbW1lcmNlLWluZm9cIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNhcnQgcXVhbnRpdHkgYnUgY2xpY2xpbmcgcGx1cy9taW51cyBvbiBDYXJ0IHBhZ2VcbiAgICAkKFwiLnF1YW50aXR5XCIpLm9uKFwiY2xpY2tcIiwgXCIucGx1cywgLm1pbnVzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGlucHV0IGZpZWxkIGFuZCBjdXJyZW50IHF1YW50aXR5IHZhbHVlIGZvciB0aGlzIGNhcnQgaXRlbVxuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnF1YW50aXR5XCIpLmZpbmQoXCJpbnB1dC5xdHlcIiksXG4gICAgICAgICAgICBjdXJyZW50VmFsID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpKTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIG5ldyBxdWFudGl0eSB2YWx1ZSBiYXNlZCBvbiB0aGUgYnV0dG9uIGNsaWNrZWRcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJwbHVzXCIpKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gY3VycmVudFZhbCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gY3VycmVudFZhbCA+IDEgPyBjdXJyZW50VmFsIC0gMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IGZpZWxkIHZhbHVlIGFuZCB0cmlnZ2VyIHRoZSBcImNoYW5nZVwiIGV2ZW50IHRvIHVwZGF0ZSB0aGUgY2FydFxuICAgICAgICAkaW5wdXQudmFsKG5ld1ZhbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFJlcGxhY2UgcGxhY2Vob2xkZXIgbmFtZSBvZiBjb3Vwb24gaW5wdXRcbiAgICAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNvdXBvbiAuaW5wdXQtdGV4dFwiKS5hdHRyKFxuICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgIFwiZW50ZXIgY291cG9uIGNvZGVcIlxuICAgICk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBsYWJlbHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwbGFjZWhvbGRlcnNcblxuICAgIGxldCBpbnB1dEVsZW1lbnRzT25DaGVja291dCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsLCAud29vY29tbWVyY2Utc2hpcHBpbmctZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzT25TaWduSW4gPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLXJvdyBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFkZHJlc3MtZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzT25SZWdpc3RlciA9ICQoXCIuY3VzdG9tLXJlZ2lzdHJhdGlvbiBsYWJlbFwiKTtcblxuICAgIGNvbnN0IHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxhYmVsVmFsID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICBsZXQgaW5wdXROYW1lID0gJCh0aGlzKS5hdHRyKFwiZm9yXCIpO1xuICAgICAgICAgICAgbGV0IGlucHV0UGxhY2Vob2xkZXIgPSAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIik7XG4gICAgICAgICAgICBpZiAobGFiZWxWYWwgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIGlucHV0TmFtZSkuYXR0cihcInBsYWNlaG9sZGVyXCIsIGxhYmVsVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQpO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25TaWduSW4pO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25SZWdpc3Rlcik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MpO1xuXG4gICAgLy8gYWRkZWQgU2hpcG1lbnQgdGV4dCBvbiBjaGVja291dCBwYWdlXG4gICAgY29uc3QgY29udGFpbmVyID0gJChcIi53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gJChcbiAgICAgICAgXCI8cCBpZD0nc2hpcG1lbnQtdGV4dCc+ZW50ZXIgeW91ciA8YnI+PHNwYW4+c2hpcHBpbmcgZGV0YWlsczwvc3Bhbj48L3A+XCJcbiAgICApO1xuICAgIGNvbnRhaW5lci5maW5kKFwiPjpudGgtY2hpbGQoMylcIikuYWZ0ZXIobmV3RWxlbWVudCk7XG5cbiAgICAvLyBBZGRlZCBpbWFnZSBvbiBhY2NvdW50IHBhZ2VcbiAgICBjb25zdCBhY2NvdW50UGFnZUVsZW1lbnQgPSAkKFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2VcIik7XG4gICAgY29uc3QgbmV3QWNjb3VudFBhZ2VFbGVtZW50ID0gJChcbiAgICAgICAgJzxpbWcgY2xhc3M9XCJhY2NvdW50LWJhbm5lci1pbWFnZVwiIHNyYz1cIi93cC1jb250ZW50L3RoZW1lcy9raXJnby10aGVtZS9hc3NldHMvaW1hZ2VzL2FjY291bnQvc2lnbi1pbi1iYW5uZXIucG5nXCIgYWx0PVwiQmFubmVyIEltYWdlXCIgLz4nXG4gICAgKTtcbiAgICBpZiAoISQoXCJib2R5Lndvb2NvbW1lcmNlLXBhZ2VcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGJhbm5lciBpbWFnZSB3aGVuIGxvZ2dlZCBpblxuICAgICAgICBhY2NvdW50UGFnZUVsZW1lbnQuZmluZChcIj46bnRoLWNoaWxkKDEpXCIpLmFmdGVyKG5ld0FjY291bnRQYWdlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gS2VlcCBmdWxsIGhlaWdodCB3aGVuIGxvZ2dlZCBpblxuICAgICAgICAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UsIC5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvblwiXG4gICAgICAgICkuY3NzKFwiaGVpZ2h0XCIsIFwiY2FsYygxMDB2aCAtIDI1MHB4KVwiKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gVGl0bGUgdGV4dFxuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtYWNjb3VudC5sb2dnZWQtaW5cIikpIHtcbiAgICAgICAgY29uc3Qgc2lnbkluVGV4dEVsZW1lbnQgPSAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZSAud29vY29tbWVyY2UgaDJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduSW5OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgICAgIHNpZ25JblRleHRFbGVtZW50LnRleHQoc2lnbkluTmV3VGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHQgb24gUmVnaXN0ZXJcbiAgICBjb25zdCByZWdpc3RlclRleHRFbGVtZW50ID0gJChcIi5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvbiBoMlwiKTtcbiAgICBjb25zdCByZWdpc3Rlck5ld1RleHQgPSBcImNyZWF0ZSBhbiBhY2NvdW50XCI7XG4gICAgcmVnaXN0ZXJUZXh0RWxlbWVudC50ZXh0KHJlZ2lzdGVyTmV3VGV4dCk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gQnV0dG9uIFRpdGxlIHRleHRcbiAgICBjb25zdCBzaWduSW5UZXh0QnV0dG9uRWxlbWVudCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tbG9naW4gLndvb2NvbW1lcmNlLWZvcm0tbG9naW5fX3N1Ym1pdFwiXG4gICAgKTtcbiAgICBjb25zdCBzaWduSW5CdXR0b25OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQudGV4dChzaWduSW5CdXR0b25OZXdUZXh0KTtcblxuICAgIC8vIEhpZGUgZm9vdGVyIHdoZW4gdXNlciBsb2dvdXQgYW5kIHNob3cgd2hlbiBsb2dpbiBpblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWFjY291bnRcIikpIHtcbiAgICAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG5cbiAgICAgICAgLy8gaWYgKCQoXCJib2R5Lndvb2NvbW1lcmNlLWFjY291bnRcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gICAgICQoXCJmb290ZXItc2VjdGlvblwiKS5zaG93KCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAkKFwiLmZvb3Rlci1zZWN0aW9uXCIpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgbmFtZSBcIndvb3ZyLXZhcmlhdGlvbi1uYW1lXCJcbiAgICAkKFwiLndvb3ZyLXZhcmlhdGlvbi1uYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd29yZHMgPSAkKHRoaXMpLnRleHQoKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBsYXN0V29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgZmlyc3RDaGFyID0gbGFzdFdvcmQuY2hhckF0KDApO1xuICAgICAgICAkKHRoaXMpLnRleHQoZmlyc3RDaGFyKTtcbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgICAgJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jaGVja291dFwiKSAmJlxuICAgICAgICAhJChcImJvZHkud29vY29tbWVyY2UtY2hlY2tvdXRcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1vcmRlci1yZWNlaXZlZFwiKVxuICAgICkge1xuICAgICAgICBjb25zdCBjaGVja291dEJ1dHRvbkFuY2VzdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tvdXROZXN0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpO1xuICAgICAgICBjaGVja291dEJ1dHRvbkFuY2VzdG9yLmFwcGVuZENoaWxkKGNoZWNrb3V0TmVzdGVkQnV0dG9uKTtcblxuICAgICAgICBjb25zdCByZXF1aXJlZElucHV0RmllbGRzID0gJChcbiAgICAgICAgICAgIFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkcyAudmFsaWRhdGUtcmVxdWlyZWQgaW5wdXRcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBidXR0b24gPSAkKFwiI3BsYWNlX29yZGVyXCIpO1xuXG4gICAgICAgIGNoZWNrUmVxdWlyZWRGaWVsZHMoKTtcbiAgICAgICAgcmVxdWlyZWRJbnB1dEZpZWxkcy5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrUmVxdWlyZWRGaWVsZHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tSZXF1aXJlZEZpZWxkcygpIHtcbiAgICAgICAgICAgIGxldCBhbGxWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFZhbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dFZhbCB8fCBpbnB1dFZhbC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGFsbFZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgIGNvbnN0IGNhcnRCdXR0b25BbmNlc3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jYXJ0IC53b29jb21tZXJjZVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNhcnROZXN0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2FydCAuY2hlY2tvdXQtYnV0dG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgY2FydEJ1dHRvbkFuY2VzdG9yLmFwcGVuZENoaWxkKGNhcnROZXN0ZWRCdXR0b24pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiL2NhcnQvXCIpID4gLTEpIHtcbiAgICAgICAgJChcImEubmF2YmFyLWNhcnRcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcImEubmF2YmFyLWNhcnRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAkKFwiLmR1cGxpY2F0ZS1lbGVtZW50c1wiKS5hcHBlbmRUbyhcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1wcm9kdWN0LWRldGFpbHNfX3Nob3J0LWRlc2NyaXB0aW9uXCIpLnBhcmVudCgpLnBhcmVudCgpXG4gICAgKTtcblxuICAgIGNvbnN0IHdvdyA9IG5ldyBXT1coKTtcbiAgICB3b3cuaW5pdCgpO1xuXG4gICAgJChcbiAgICAgICAgXCJib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC5zdW1tYXJ5LmVudHJ5LXN1bW1hcnksIGJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgLndvb2NvbW1lcmNlLVRhYnMtcGFuZWwsIGJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgI3Jldmlld3NcIlxuICAgICkuYWRkQ2xhc3MoXCJ3b3cgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXBcIik7XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBjbGljayBldmVudCBvbiB0aGUgY2FydCBpY29uXG4gICAgJChcIi5uYXZiYXItY2FydCwgLnhvby13c2Mtc2MtY29udFwiKS5vZmYoXCJjbGlja1wiKTtcblxuICAgIGlmICghJChcImJvZHlcIikuaGFzQ2xhc3MoXCIud29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICAvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgY2FydCBwYWdlIHdoZW4gdGhleSBjbGljayBvbiB0aGUgY2FydCBpY29uXG4gICAgICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY2FydFwiO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBjYXJ0IHBhZ2Ugd2hlbiB0aGV5IGNsaWNrIG9uIHRoZSBjYXJ0IGljb25cblxuICAgICQoXCJib2R5LnNpbmdsZS1wcm9kdWN0IC53cGNibi1idG4tc2luZ2xlLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikuY2xpY2soXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY2hlY2tvdXRcIjtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWwgLndwY2JuLWJ0bi5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLnRleHQoXG4gICAgICAgIFwiQWRkIHRvIENoZWNrb3V0XCJcbiAgICApO1xuICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWwgLndwY2JuLWJ0bi5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLmNsaWNrKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAkKFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAkKFwiLnByb2R1Y3QgLnBzZnctc29jaWFsLXdyYXBcIikuYXBwZW5kVG8oXG4gICAgICAgIFwiI3Byb2R1Y3RTaGFyZUljb25zIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5XCJcbiAgICApO1xuXG4gICAgJChcIi5uYXZiYXItYWRtaW4tZGVza3RvcCBzdmdcIikuYXBwZW5kVG8oXCIubmF2YmFyLWFkbWluIC54b28tZWwtYWN0aW9uLXNjXCIpO1xuXG4gICAgLy8gU2hpZnQgY2hlY2tvdXQgYnV0dG9uIGluIHJpZ2h0IGNvbG91bSBvZiBkZXNrdG9wXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMDAwKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY2hlY2tvdXQtYnV0dG9uLmJ1dHRvblwiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLmNhcnQtY29sbGF0ZXJhbHNcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC5hbHRlcm5hdGUtY2FydC1wcm9kdWN0c1wiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNwbGFjZV9vcmRlclwiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIikucHJlcGVuZChcbiAgICAgICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld19oZWFkaW5nXCIpXG4gICAgICAgICk7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b29jb21tZXJjZS1kZXNrdG9wLWNvbC1yaWdodFwiPjwvZGl2PmBcbiAgICAgICAgKS5hcHBlbmRUbyhcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXJcIik7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciBwLndvb2NvbW1lcmNlLW5vdGljZSxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciB1bC53b29jb21tZXJjZS1vcmRlci1vdmVydmlldyxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciA+IHBgXG4gICAgICAgICkuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLWxlZnRcIlxuICAgICAgICApO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWN1c3RvbWVyLWRldGFpbHMsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLW9yZGVyLWRldGFpbHNgXG4gICAgICAgICkuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLXJpZ2h0XCJcbiAgICAgICAgKTtcbiAgICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvZGlzdC9qcy9hcHBcIjogMCxcblx0XCJzdHlsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIm5hdmJhciIsImNsYXNzTmFtZSIsIndpbmRvdyIsIm9uIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY3JvbGwiLCJoYXNDbGFzcyIsIiRob21lQ2Fyb3VzZWwiLCJmbGlja2l0eSIsIndyYXBBcm91bmQiLCJhdXRvUGxheSIsIiRibG9nQ2Fyb3VzZWwiLCJwcmV2TmV4dEJ1dHRvbnMiLCJmcmVlU2Nyb2xsIiwiY29udGFpbiIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwiJGdhbGxlcnlDYXJvdXNlbCIsInRvZ2dsZSIsImVsZW1lbnQiLCJuZXdUZXh0IiwidGV4dCIsInJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm9yaWdpbmFsVGV4dCIsInRleHRDb250ZW50IiwicXVvdGVkVGV4dCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiJGlucHV0IiwiY2xvc2VzdCIsImZpbmQiLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJuZXdWYWwiLCJ0cmlnZ2VyIiwiYXR0ciIsImlucHV0RWxlbWVudHNPbkNoZWNrb3V0IiwiaW5wdXRFbGVtZW50c09uU2lnbkluIiwiaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyIsImlucHV0RWxlbWVudHNPblJlZ2lzdGVyIiwicmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsIiwiaW5wdXRFbGVtZW50IiwiZWFjaCIsImxhYmVsVmFsIiwiaW5wdXROYW1lIiwiaW5wdXRQbGFjZWhvbGRlciIsImNvbnRhaW5lciIsIm5ld0VsZW1lbnQiLCJhZnRlciIsImFjY291bnRQYWdlRWxlbWVudCIsIm5ld0FjY291bnRQYWdlRWxlbWVudCIsImNzcyIsInNpZ25JblRleHRFbGVtZW50Iiwic2lnbkluTmV3VGV4dCIsInJlZ2lzdGVyVGV4dEVsZW1lbnQiLCJyZWdpc3Rlck5ld1RleHQiLCJzaWduSW5UZXh0QnV0dG9uRWxlbWVudCIsInNpZ25JbkJ1dHRvbk5ld1RleHQiLCJoaWRlIiwid29yZHMiLCJzcGxpdCIsImxhc3RXb3JkIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsImFsbFZhbGlkIiwicmVxdWlyZWRJbnB1dEZpZWxkcyIsImlucHV0VmFsIiwidHJpbSIsImJ1dHRvbiIsInByb3AiLCJjaGVja291dEJ1dHRvbkFuY2VzdG9yIiwicXVlcnlTZWxlY3RvciIsImNoZWNrb3V0TmVzdGVkQnV0dG9uIiwiYXBwZW5kQ2hpbGQiLCJjYXJ0QnV0dG9uQW5jZXN0b3IiLCJjYXJ0TmVzdGVkQnV0dG9uIiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiIsImV2ZW50IiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsInBhcmVudCIsIndvdyIsIldPVyIsImluaXQiLCJvZmYiLCJtb2RhbCIsInNjcmVlbiIsIndpZHRoIiwicHJlcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=