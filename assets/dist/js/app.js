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
    window.location.href = "/shop";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsSUFBSSxHQUFHLE9BQU87RUFDbEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUM1WUY7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz9jMGUzIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBOYXZiYXJcbiAgICAgKi9cbiAgICAvLyBOYXZiYXIgTWVudVxuXG4gICAgJChcIi5uYXZiYXItaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmUud2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiaXNGaXhlZFwiKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIHRhcmdldCBlbGVtZW50IGFuZCB0aGUgY2xhc3MgbmFtZSB0byB0b2dnbGVcbiAgICB2YXIgbmF2YmFyID0gJChcIi5uYXZiYXJcIik7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFwic2Nyb2xsZWQtc2NyZWVuXCI7XG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSAxMCkge1xuICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBjbGFzcyBvbiB0aGUgbmF2YmFyIHdpdGggYW5pbWF0aW9uXG4gICAgICAgICAgICBuYXZiYXJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjhcIiB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9nZ2xlIHRoZSBjbGFzcyBvbiB0aGUgbmF2YmFyIHdpdGggYW5pbWF0aW9uXG4gICAgICAgICAgICBuYXZiYXJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzY3JvbGwgPSAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHNjcm9sbCA+IDEwICYmICEkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpIHx8XG4gICAgICAgICAgICAoc2Nyb2xsID09PSAwICYmICQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFwiLmFjdGl2ZVwiKS50b2dnbGVDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEhvbWUgUGFnZVxuICAgICAqL1xuXG4gICAgLy8gSG9tZSBTbGlkZXJcblxuICAgIGxldCAkaG9tZUNhcm91c2VsID0gJChcIi5ob21lLWNhcm91c2VsXCIpO1xuXG4gICAgJGhvbWVDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQmxvZyBTbGlkZXJcblxuICAgIGxldCAkYmxvZ0Nhcm91c2VsID0gJChcIi5ibG9nLWNhcm91c2VsXCIpO1xuXG4gICAgJGJsb2dDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIGNlbGxBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqL1xuICAgICQoXCIud29vY29tbWVyY2UtUmV2aWV3cyAuY29tbWVudGxpc3RcIikuZmxpY2tpdHkoe1xuICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgfSk7XG5cbiAgICAvLyBHYWxsZXJ5IFNsaWRlclxuXG4gICAgbGV0ICRnYWxsZXJ5Q2Fyb3VzZWwgPSAkKFwiLnNob3AtZ2FsbGVyeVwiKTtcblxuICAgICRnYWxsZXJ5Q2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKiovXG5cbiAgICAvLyBUb2dnbGUgUmV2aWV3IEZvcm1cbiAgICAkKFwiI3Jldmlld19mb3JtIC5jb21tZW50LXJlcGx5LXRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZSAjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtZm9ybVwiKS50b2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSB0aGUgUmV2aWV3IFRpdGxlIHRleHRcbiAgICBjb25zdCBlbGVtZW50ID0gJChcIiNyZXBseS10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUZXh0ID0gXCJzZW5kIHlvdXIgcmV2aWV3XCI7XG4gICAgZWxlbWVudC50ZXh0KG5ld1RleHQpO1xuXG4gICAgLy8gQWRkIGRvdWJsZSBxb3V0ZXMgdG8gUmV2aWV3c1xuICAgIGNvbnN0IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlc2NyaXB0aW9uIHBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsVGV4dCA9IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBxdW90ZWRUZXh0ID0gYFwiJHtvcmlnaW5hbFRleHR9XCJgO1xuICAgICAgICByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gcXVvdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBIaWRlIFdvb0NvbW1lcmNlIG5vdGljZXMgYWZ0ZXIgNSBzZWNvbmRzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2Utbm90aWNlcy13cmFwcGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgLy8gUmVtb3ZlIFdvb0NvbW1lcmNlIG5vdGljZXMgd2hlbiBjbGlja2VkXG4gICAgJChkb2N1bWVudCkub24oXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgXCIud29vY29tbWVyY2UtbWVzc2FnZSwgLndvb2NvbW1lcmNlLWVycm9yLCAud29vY29tbWVyY2UtaW5mb1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2FydCBxdWFudGl0eSBidSBjbGljbGluZyBwbHVzL21pbnVzIG9uIENhcnQgcGFnZVxuICAgICQoXCIucXVhbnRpdHlcIikub24oXCJjbGlja1wiLCBcIi5wbHVzLCAubWludXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5wdXQgZmllbGQgYW5kIGN1cnJlbnQgcXVhbnRpdHkgdmFsdWUgZm9yIHRoaXMgY2FydCBpdGVtXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucXVhbnRpdHlcIikuZmluZChcImlucHV0LnF0eVwiKSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWwgPSBwYXJzZUludCgkaW5wdXQudmFsKCkpO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgbmV3IHF1YW50aXR5IHZhbHVlIGJhc2VkIG9uIHRoZSBidXR0b24gY2xpY2tlZFxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInBsdXNcIikpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsID4gMSA/IGN1cnJlbnRWYWwgLSAxIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgdmFsdWUgYW5kIHRyaWdnZXIgdGhlIFwiY2hhbmdlXCIgZXZlbnQgdG8gdXBkYXRlIHRoZSBjYXJ0XG4gICAgICAgICRpbnB1dC52YWwobmV3VmFsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVwbGFjZSBwbGFjZWhvbGRlciBuYW1lIG9mIGNvdXBvbiBpbnB1dFxuICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY291cG9uIC5pbnB1dC10ZXh0XCIpLmF0dHIoXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgXCJlbnRlciBjb3Vwb24gY29kZVwiXG4gICAgKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGxhYmVscyB0byB0aGVpciByZXNwZWN0aXZlIHBsYWNlaG9sZGVyc1xuXG4gICAgbGV0IGlucHV0RWxlbWVudHNPbkNoZWNrb3V0ID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWwsIC53b29jb21tZXJjZS1zaGlwcGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblNpZ25JbiA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tcm93IGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWRkcmVzcy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblJlZ2lzdGVyID0gJChcIi5jdXN0b20tcmVnaXN0cmF0aW9uIGxhYmVsXCIpO1xuXG4gICAgY29uc3QgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgICBpbnB1dEVsZW1lbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxWYWwgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKHRoaXMpLmF0dHIoXCJmb3JcIik7XG4gICAgICAgICAgICBsZXQgaW5wdXRQbGFjZWhvbGRlciA9ICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICAgIGlmIChsYWJlbFZhbCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dChpbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgbGFiZWxWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25DaGVja291dCk7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblNpZ25Jbik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblJlZ2lzdGVyKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyk7XG5cbiAgICAvLyBhZGRlZCBTaGlwbWVudCB0ZXh0IG9uIGNoZWNrb3V0IHBhZ2VcbiAgICBjb25zdCBjb250YWluZXIgPSAkKFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSAkKFxuICAgICAgICBcIjxwIGlkPSdzaGlwbWVudC10ZXh0Jz5lbnRlciB5b3VyIDxicj48c3Bhbj5zaGlwcGluZyBkZXRhaWxzPC9zcGFuPjwvcD5cIlxuICAgICk7XG4gICAgY29udGFpbmVyLmZpbmQoXCI+Om50aC1jaGlsZCgzKVwiKS5hZnRlcihuZXdFbGVtZW50KTtcblxuICAgIC8vIEFkZGVkIGltYWdlIG9uIGFjY291bnQgcGFnZVxuICAgIGNvbnN0IGFjY291bnRQYWdlRWxlbWVudCA9ICQoXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZVwiKTtcbiAgICBjb25zdCBuZXdBY2NvdW50UGFnZUVsZW1lbnQgPSAkKFxuICAgICAgICAnPGltZyBjbGFzcz1cImFjY291bnQtYmFubmVyLWltYWdlXCIgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL2tpcmdvLXRoZW1lL2Fzc2V0cy9pbWFnZXMvYWNjb3VudC9zaWduLWluLWJhbm5lci5wbmdcIiBhbHQ9XCJCYW5uZXIgSW1hZ2VcIiAvPidcbiAgICApO1xuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtcGFnZVwiKS5oYXNDbGFzcyhcImxvZ2dlZC1pblwiKSkge1xuICAgICAgICAvLyBSZW1vdmUgYmFubmVyIGltYWdlIHdoZW4gbG9nZ2VkIGluXG4gICAgICAgIGFjY291bnRQYWdlRWxlbWVudC5maW5kKFwiPjpudGgtY2hpbGQoMSlcIikuYWZ0ZXIobmV3QWNjb3VudFBhZ2VFbGVtZW50KTtcblxuICAgICAgICAvLyBLZWVwIGZ1bGwgaGVpZ2h0IHdoZW4gbG9nZ2VkIGluXG4gICAgICAgICQoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZSwgLnBhZ2UtaWQtMjM3IC5jdXN0b20tcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgKS5jc3MoXCJoZWlnaHRcIiwgXCJjYWxjKDEwMHZoIC0gMjUwcHgpXCIpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0XG4gICAgaWYgKCEkKFwiYm9keS53b29jb21tZXJjZS1hY2NvdW50LmxvZ2dlZC1pblwiKSkge1xuICAgICAgICBjb25zdCBzaWduSW5UZXh0RWxlbWVudCA9ICQoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50ICNwYWdlIC53b29jb21tZXJjZSBoMlwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25Jbk5ld1RleHQgPSBcInNpZ24gaW5cIjtcbiAgICAgICAgc2lnbkluVGV4dEVsZW1lbnQudGV4dChzaWduSW5OZXdUZXh0KTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gVGl0bGUgdGV4dCBvbiBSZWdpc3RlclxuICAgIGNvbnN0IHJlZ2lzdGVyVGV4dEVsZW1lbnQgPSAkKFwiLnBhZ2UtaWQtMjM3IC5jdXN0b20tcmVnaXN0cmF0aW9uIGgyXCIpO1xuICAgIGNvbnN0IHJlZ2lzdGVyTmV3VGV4dCA9IFwiY3JlYXRlIGFuIGFjY291bnRcIjtcbiAgICByZWdpc3RlclRleHRFbGVtZW50LnRleHQocmVnaXN0ZXJOZXdUZXh0KTtcblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBCdXR0b24gVGl0bGUgdGV4dFxuICAgIGNvbnN0IHNpZ25JblRleHRCdXR0b25FbGVtZW50ID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UtZm9ybS1sb2dpbiAud29vY29tbWVyY2UtZm9ybS1sb2dpbl9fc3VibWl0XCJcbiAgICApO1xuICAgIGNvbnN0IHNpZ25JbkJ1dHRvbk5ld1RleHQgPSBcInNpZ24gaW5cIjtcbiAgICBzaWduSW5UZXh0QnV0dG9uRWxlbWVudC50ZXh0KHNpZ25JbkJ1dHRvbk5ld1RleHQpO1xuXG4gICAgLy8gSGlkZSBmb290ZXIgd2hlbiB1c2VyIGxvZ291dCBhbmQgc2hvdyB3aGVuIGxvZ2luIGluXG4gICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtYWNjb3VudFwiKSkge1xuICAgICAgICAkKFwiLmZvb3Rlci1zZWN0aW9uXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBpZiAoJChcImJvZHkud29vY29tbWVyY2UtYWNjb3VudFwiKS5oYXNDbGFzcyhcImxvZ2dlZC1pblwiKSkge1xuICAgICAgICAvLyAgICAgJChcImZvb3Rlci1zZWN0aW9uXCIpLnNob3coKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICQoXCIuZm9vdGVyLXNlY3Rpb25cIikuaGlkZSgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBjbGFzcyBuYW1lIFwid29vdnItdmFyaWF0aW9uLW5hbWVcIlxuICAgICQoXCIud29vdnItdmFyaWF0aW9uLW5hbWVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3b3JkcyA9ICQodGhpcykudGV4dCgpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IGxhc3RXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmaXJzdENoYXIgPSBsYXN0V29yZC5jaGFyQXQoMCk7XG4gICAgICAgICQodGhpcykudGV4dChmaXJzdENoYXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgICAkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpICYmXG4gICAgICAgICEkKFwiYm9keS53b29jb21tZXJjZS1jaGVja291dFwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLW9yZGVyLXJlY2VpdmVkXCIpXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXRcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGVja291dE5lc3RlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Vfb3JkZXJcIik7XG4gICAgICAgIGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IuYXBwZW5kQ2hpbGQoY2hlY2tvdXROZXN0ZWRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXRGaWVsZHMgPSAkKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzIC52YWxpZGF0ZS1yZXF1aXJlZCBpbnB1dFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgY29uc3QgY2FydEJ1dHRvbkFuY2VzdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNhcnQgLndvb2NvbW1lcmNlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FydE5lc3RlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b25cIlxuICAgICAgICApO1xuICAgICAgICBjYXJ0QnV0dG9uQW5jZXN0b3IuYXBwZW5kQ2hpbGQoY2FydE5lc3RlZEJ1dHRvbik7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIvY2FydC9cIikgPiAtMSkge1xuICAgICAgICAkKFwiYS5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiYS5uYXZiYXItY2FydFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgICQoXCIuZHVwbGljYXRlLWVsZW1lbnRzXCIpLmFwcGVuZFRvKFxuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLXByb2R1Y3QtZGV0YWlsc19fc2hvcnQtZGVzY3JpcHRpb25cIikucGFyZW50KCkucGFyZW50KClcbiAgICApO1xuXG4gICAgY29uc3Qgd293ID0gbmV3IFdPVygpO1xuICAgIHdvdy5pbml0KCk7XG5cbiAgICAkKFxuICAgICAgICBcImJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgLnN1bW1hcnkuZW50cnktc3VtbWFyeSwgYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAud29vY29tbWVyY2UtVGFicy1wYW5lbCwgYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAjcmV2aWV3c1wiXG4gICAgKS5hZGRDbGFzcyhcIndvdyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5VcFwiKTtcblxuICAgIC8vIERpc2FibGUgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBjYXJ0IGljb25cbiAgICAkKFwiLm5hdmJhci1jYXJ0LCAueG9vLXdzYy1zYy1jb250XCIpLm9mZihcImNsaWNrXCIpO1xuXG4gICAgaWYgKCEkKFwiYm9keVwiKS5oYXNDbGFzcyhcIi53b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgIC8vIFJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBjYXJ0IHBhZ2Ugd2hlbiB0aGV5IGNsaWNrIG9uIHRoZSBjYXJ0IGljb25cbiAgICAgICAgJChcIi5uYXZiYXItY2FydCwgLnhvby13c2Mtc2MtY29udFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXJ0XCI7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIubmF2YmFyLWNhcnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhcnQgcGFnZSB3aGVuIHRoZXkgY2xpY2sgb24gdGhlIGNhcnQgaWNvblxuXG4gICAgJChcImJvZHkuc2luZ2xlLXByb2R1Y3QgLndwY2JuLWJ0bi1zaW5nbGUuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS5jbGljayhcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jaGVja291dFwiO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikudGV4dChcbiAgICAgICAgXCJBZGQgdG8gQ2hlY2tvdXRcIlxuICAgICk7XG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikuY2xpY2soXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLXNob3AgbGkucHJvZHVjdCAucHJvZHVjdC1jYXJkLWRldGFpbHMgLnNob3AtYWRkLXRvLWNhcnQtbW9kYWwgLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b24ud3AtZWxlbWVudC1idXR0b25cIlxuICAgICkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLnNob3AtYWRkLXRvLWNhcnQtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgJChcIi5wcm9kdWN0IC5wc2Z3LXNvY2lhbC13cmFwXCIpLmFwcGVuZFRvKFxuICAgICAgICBcIiNwcm9kdWN0U2hhcmVJY29ucyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keVwiXG4gICAgKTtcblxuICAgICQoXCIubmF2YmFyLWFkbWluLWRlc2t0b3Agc3ZnXCIpLmFwcGVuZFRvKFwiLm5hdmJhci1hZG1pbiAueG9vLWVsLWFjdGlvbi1zY1wiKTtcblxuICAgIC8vIFNoaWZ0IGNoZWNrb3V0IGJ1dHRvbiBpbiByaWdodCBjb2xvdW0gb2YgZGVza3RvcFxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTAwMCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNoZWNrb3V0LWJ1dHRvbi5idXR0b25cIikuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi5jYXJ0LWNvbGxhdGVyYWxzXCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAuYWx0ZXJuYXRlLWNhcnQtcHJvZHVjdHNcIikuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3XCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAjcGxhY2Vfb3JkZXJcIikuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3XCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdfaGVhZGluZ1wiKVxuICAgICAgICApO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ3b29jb21tZXJjZS1kZXNrdG9wLWNvbC1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29vY29tbWVyY2UtZGVza3RvcC1jb2wtcmlnaHRcIj48L2Rpdj5gXG4gICAgICAgICkuYXBwZW5kVG8oXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyXCIpO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgcC53b29jb21tZXJjZS1ub3RpY2UsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgdWwud29vY29tbWVyY2Utb3JkZXItb3ZlcnZpZXcsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgPiBwYFxuICAgICAgICApLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1kZXNrdG9wLWNvbC1sZWZ0XCJcbiAgICAgICAgKTtcbiAgICAgICAgJChcbiAgICAgICAgICAgIGAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1jdXN0b21lci1kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1vcmRlci1kZXRhaWxzYFxuICAgICAgICApLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIC53b29jb21tZXJjZS1kZXNrdG9wLWNvbC1yaWdodFwiXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgJChcIi53b29jb21tZXJjZS1zaG9wIC5wcm9kdWN0IGEud29vY29tbWVyY2UtTG9vcFByb2R1Y3QtbGlua1wiKVxuICAgICAgICAuY29udGVudHMoKVxuICAgICAgICAudW53cmFwKClcbiAgICAgICAgLndyYXAoXCI8ZGl2PjwvZGl2PlwiKTtcblxuICAgICQoXCIuY2xhc3NpYy1zZWN0aW9uIC5wcmltYXJ5LWxpbmtcIikuY2xpY2soKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Nob3BcIjtcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9kaXN0L2pzL2FwcFwiOiAwLFxuXHRcInN0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwibmF2YmFyIiwiY2xhc3NOYW1lIiwid2luZG93Iiwib24iLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvcCIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY3JvbGwiLCJoYXNDbGFzcyIsIiRob21lQ2Fyb3VzZWwiLCJmbGlja2l0eSIsIndyYXBBcm91bmQiLCJhdXRvUGxheSIsIiRibG9nQ2Fyb3VzZWwiLCJwcmV2TmV4dEJ1dHRvbnMiLCJmcmVlU2Nyb2xsIiwiY29udGFpbiIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwiJGdhbGxlcnlDYXJvdXNlbCIsInRvZ2dsZSIsImVsZW1lbnQiLCJuZXdUZXh0IiwidGV4dCIsInJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm9yaWdpbmFsVGV4dCIsInRleHRDb250ZW50IiwicXVvdGVkVGV4dCIsImNvbmNhdCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiJGlucHV0IiwiY2xvc2VzdCIsImZpbmQiLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJuZXdWYWwiLCJ0cmlnZ2VyIiwiYXR0ciIsImlucHV0RWxlbWVudHNPbkNoZWNrb3V0IiwiaW5wdXRFbGVtZW50c09uU2lnbkluIiwiaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyIsImlucHV0RWxlbWVudHNPblJlZ2lzdGVyIiwicmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsIiwiaW5wdXRFbGVtZW50IiwiZWFjaCIsImxhYmVsVmFsIiwiaW5wdXROYW1lIiwiaW5wdXRQbGFjZWhvbGRlciIsImNvbnRhaW5lciIsIm5ld0VsZW1lbnQiLCJhZnRlciIsImFjY291bnRQYWdlRWxlbWVudCIsIm5ld0FjY291bnRQYWdlRWxlbWVudCIsImNzcyIsInNpZ25JblRleHRFbGVtZW50Iiwic2lnbkluTmV3VGV4dCIsInJlZ2lzdGVyVGV4dEVsZW1lbnQiLCJyZWdpc3Rlck5ld1RleHQiLCJzaWduSW5UZXh0QnV0dG9uRWxlbWVudCIsInNpZ25JbkJ1dHRvbk5ld1RleHQiLCJoaWRlIiwid29yZHMiLCJzcGxpdCIsImxhc3RXb3JkIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsImFsbFZhbGlkIiwicmVxdWlyZWRJbnB1dEZpZWxkcyIsImlucHV0VmFsIiwidHJpbSIsImJ1dHRvbiIsInByb3AiLCJjaGVja291dEJ1dHRvbkFuY2VzdG9yIiwicXVlcnlTZWxlY3RvciIsImNoZWNrb3V0TmVzdGVkQnV0dG9uIiwiYXBwZW5kQ2hpbGQiLCJjYXJ0QnV0dG9uQW5jZXN0b3IiLCJjYXJ0TmVzdGVkQnV0dG9uIiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiIsImV2ZW50IiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsInBhcmVudCIsIndvdyIsIldPVyIsImluaXQiLCJvZmYiLCJtb2RhbCIsInNjcmVlbiIsIndpZHRoIiwicHJlcGVuZCIsImNvbnRlbnRzIiwidW53cmFwIiwid3JhcCJdLCJzb3VyY2VSb290IjoiIn0=