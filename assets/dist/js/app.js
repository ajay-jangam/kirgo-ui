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
    console.log("ejhsgb");
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
    console.log("ewjsgb");

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

  var inputElementsOnCheckout = $(".woocommerce-billing-fields__field-wrapper label");
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
  if ($("body").not("woocommerce-account.logged-in")) {
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
  if ($("body").hasClass("woocommerce-checkout")) {
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
    var requiredInputFields = $(".checkout.woocommerce-checkout .validate-required input");
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
    console.log("not cart page");
  } else {
    $(".navbar-cart").click(function (e) {
      e.preventDefault();
    });
    console.log("cart page");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDRkQsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUN3RyxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQy9DLENBQUMsQ0FDSjtFQUVEeEcsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNrRyxRQUFRLENBQ3BDLCtDQUErQyxDQUNsRDtBQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNVZGOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL3Nhc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIE5hdmJhclxuICAgICAqL1xuICAgIC8vIE5hdmJhciBNZW51XG5cbiAgICAkKFwiLm5hdmJhci1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZS53aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJpc0ZpeGVkXCIpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIHRoZSBjbGFzcyBuYW1lIHRvIHRvZ2dsZVxuICAgIHZhciBuYXZiYXIgPSAkKFwiLm5hdmJhclwiKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gXCJzY3JvbGxlZC1zY3JlZW5cIjtcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IG5hdmJhci5vdXRlckhlaWdodCgpKSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlamhzZ2JcIik7XG4gICAgICAgIGxldCBzY3JvbGwgPSAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHNjcm9sbCA+IDEwICYmICEkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpIHx8XG4gICAgICAgICAgICAoc2Nyb2xsID09PSAwICYmICQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFwiLmFjdGl2ZVwiKS50b2dnbGVDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEhvbWUgUGFnZVxuICAgICAqL1xuXG4gICAgLy8gSG9tZSBTbGlkZXJcblxuICAgIGxldCAkaG9tZUNhcm91c2VsID0gJChcIi5ob21lLWNhcm91c2VsXCIpO1xuXG4gICAgJGhvbWVDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQmxvZyBTbGlkZXJcblxuICAgIGxldCAkYmxvZ0Nhcm91c2VsID0gJChcIi5ibG9nLWNhcm91c2VsXCIpO1xuXG4gICAgJGJsb2dDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIGNlbGxBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqL1xuICAgICQoXCIud29vY29tbWVyY2UtUmV2aWV3cyAuY29tbWVudGxpc3RcIikuZmxpY2tpdHkoe1xuICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgfSk7XG5cbiAgICAvLyBHYWxsZXJ5IFNsaWRlclxuXG4gICAgbGV0ICRnYWxsZXJ5Q2Fyb3VzZWwgPSAkKFwiLnNob3AtZ2FsbGVyeVwiKTtcblxuICAgICRnYWxsZXJ5Q2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKiovXG5cbiAgICAvLyBUb2dnbGUgUmV2aWV3IEZvcm1cbiAgICAkKFwiI3Jldmlld19mb3JtIC5jb21tZW50LXJlcGx5LXRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZSAjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtZm9ybVwiKS50b2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSB0aGUgUmV2aWV3IFRpdGxlIHRleHRcbiAgICBjb25zdCBlbGVtZW50ID0gJChcIiNyZXBseS10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUZXh0ID0gXCJzZW5kIHlvdXIgcmV2aWV3XCI7XG4gICAgZWxlbWVudC50ZXh0KG5ld1RleHQpO1xuXG4gICAgLy8gQWRkIGRvdWJsZSBxb3V0ZXMgdG8gUmV2aWV3c1xuICAgIGNvbnN0IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlc2NyaXB0aW9uIHBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsVGV4dCA9IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBxdW90ZWRUZXh0ID0gYFwiJHtvcmlnaW5hbFRleHR9XCJgO1xuICAgICAgICByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gcXVvdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBIaWRlIFdvb0NvbW1lcmNlIG5vdGljZXMgYWZ0ZXIgNSBzZWNvbmRzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2Utbm90aWNlcy13cmFwcGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgLy8gUmVtb3ZlIFdvb0NvbW1lcmNlIG5vdGljZXMgd2hlbiBjbGlja2VkXG4gICAgJChkb2N1bWVudCkub24oXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgXCIud29vY29tbWVyY2UtbWVzc2FnZSwgLndvb2NvbW1lcmNlLWVycm9yLCAud29vY29tbWVyY2UtaW5mb1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2FydCBxdWFudGl0eSBidSBjbGljbGluZyBwbHVzL21pbnVzIG9uIENhcnQgcGFnZVxuICAgICQoXCIucXVhbnRpdHlcIikub24oXCJjbGlja1wiLCBcIi5wbHVzLCAubWludXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXdqc2diXCIpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5wdXQgZmllbGQgYW5kIGN1cnJlbnQgcXVhbnRpdHkgdmFsdWUgZm9yIHRoaXMgY2FydCBpdGVtXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucXVhbnRpdHlcIikuZmluZChcImlucHV0LnF0eVwiKSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWwgPSBwYXJzZUludCgkaW5wdXQudmFsKCkpO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgbmV3IHF1YW50aXR5IHZhbHVlIGJhc2VkIG9uIHRoZSBidXR0b24gY2xpY2tlZFxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInBsdXNcIikpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsID4gMSA/IGN1cnJlbnRWYWwgLSAxIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgdmFsdWUgYW5kIHRyaWdnZXIgdGhlIFwiY2hhbmdlXCIgZXZlbnQgdG8gdXBkYXRlIHRoZSBjYXJ0XG4gICAgICAgICRpbnB1dC52YWwobmV3VmFsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVwbGFjZSBwbGFjZWhvbGRlciBuYW1lIG9mIGNvdXBvbiBpbnB1dFxuICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY291cG9uIC5pbnB1dC10ZXh0XCIpLmF0dHIoXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgXCJlbnRlciBjb3Vwb24gY29kZVwiXG4gICAgKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGxhYmVscyB0byB0aGVpciByZXNwZWN0aXZlIHBsYWNlaG9sZGVyc1xuXG4gICAgbGV0IGlucHV0RWxlbWVudHNPbkNoZWNrb3V0ID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblNpZ25JbiA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tcm93IGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWRkcmVzcy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblJlZ2lzdGVyID0gJChcIi5jdXN0b20tcmVnaXN0cmF0aW9uIGxhYmVsXCIpO1xuXG4gICAgY29uc3QgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgICBpbnB1dEVsZW1lbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxWYWwgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKHRoaXMpLmF0dHIoXCJmb3JcIik7XG4gICAgICAgICAgICBsZXQgaW5wdXRQbGFjZWhvbGRlciA9ICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICAgIGlmIChsYWJlbFZhbCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dChpbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgbGFiZWxWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25DaGVja291dCk7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblNpZ25Jbik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblJlZ2lzdGVyKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyk7XG5cbiAgICAvLyBhZGRlZCBTaGlwbWVudCB0ZXh0IG9uIGNoZWNrb3V0IHBhZ2VcbiAgICBjb25zdCBjb250YWluZXIgPSAkKFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSAkKFxuICAgICAgICBcIjxwIGlkPSdzaGlwbWVudC10ZXh0Jz5lbnRlciB5b3VyIDxicj48c3Bhbj5zaGlwcGluZyBkZXRhaWxzPC9zcGFuPjwvcD5cIlxuICAgICk7XG4gICAgY29udGFpbmVyLmZpbmQoXCI+Om50aC1jaGlsZCgzKVwiKS5hZnRlcihuZXdFbGVtZW50KTtcblxuICAgIC8vIEFkZGVkIGltYWdlIG9uIGFjY291bnQgcGFnZVxuICAgIGNvbnN0IGFjY291bnRQYWdlRWxlbWVudCA9ICQoXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZVwiKTtcbiAgICBjb25zdCBuZXdBY2NvdW50UGFnZUVsZW1lbnQgPSAkKFxuICAgICAgICAnPGltZyBjbGFzcz1cImFjY291bnQtYmFubmVyLWltYWdlXCIgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL2tpcmdvLXRoZW1lL2Fzc2V0cy9pbWFnZXMvYWNjb3VudC9zaWduLWluLWJhbm5lci5wbmdcIiBhbHQ9XCJCYW5uZXIgSW1hZ2VcIiAvPidcbiAgICApO1xuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtcGFnZVwiKS5oYXNDbGFzcyhcImxvZ2dlZC1pblwiKSkge1xuICAgICAgICAvLyBSZW1vdmUgYmFubmVyIGltYWdlIHdoZW4gbG9nZ2VkIGluXG4gICAgICAgIGFjY291bnRQYWdlRWxlbWVudC5maW5kKFwiPjpudGgtY2hpbGQoMSlcIikuYWZ0ZXIobmV3QWNjb3VudFBhZ2VFbGVtZW50KTtcblxuICAgICAgICAvLyBLZWVwIGZ1bGwgaGVpZ2h0IHdoZW4gbG9nZ2VkIGluXG4gICAgICAgICQoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZSwgLnBhZ2UtaWQtMjM3IC5jdXN0b20tcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgKS5jc3MoXCJoZWlnaHRcIiwgXCJjYWxjKDEwMHZoIC0gMjUwcHgpXCIpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0XG4gICAgaWYgKCQoXCJib2R5XCIpLm5vdChcIndvb2NvbW1lcmNlLWFjY291bnQubG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIGNvbnN0IHNpZ25JblRleHRFbGVtZW50ID0gJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2UgLndvb2NvbW1lcmNlIGgyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2lnbkluTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgICAgICBzaWduSW5UZXh0RWxlbWVudC50ZXh0KHNpZ25Jbk5ld1RleHQpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0IG9uIFJlZ2lzdGVyXG4gICAgY29uc3QgcmVnaXN0ZXJUZXh0RWxlbWVudCA9ICQoXCIucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb24gaDJcIik7XG4gICAgY29uc3QgcmVnaXN0ZXJOZXdUZXh0ID0gXCJjcmVhdGUgYW4gYWNjb3VudFwiO1xuICAgIHJlZ2lzdGVyVGV4dEVsZW1lbnQudGV4dChyZWdpc3Rlck5ld1RleHQpO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIEJ1dHRvbiBUaXRsZSB0ZXh0XG4gICAgY29uc3Qgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLWxvZ2luIC53b29jb21tZXJjZS1mb3JtLWxvZ2luX19zdWJtaXRcIlxuICAgICk7XG4gICAgY29uc3Qgc2lnbkluQnV0dG9uTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgIHNpZ25JblRleHRCdXR0b25FbGVtZW50LnRleHQoc2lnbkluQnV0dG9uTmV3VGV4dCk7XG5cbiAgICAvLyBIaWRlIGZvb3RlciB3aGVuIHVzZXIgbG9nb3V0IGFuZCBzaG93IHdoZW4gbG9naW4gaW5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1hY2NvdW50XCIpKSB7XG4gICAgICAgICQoXCIuZm9vdGVyLXNlY3Rpb25cIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIGlmICgkKFwiYm9keS53b29jb21tZXJjZS1hY2NvdW50XCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vICAgICAkKFwiZm9vdGVyLXNlY3Rpb25cIikuc2hvdygpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyBsb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzIG5hbWUgXCJ3b292ci12YXJpYXRpb24tbmFtZVwiXG4gICAgJChcIi53b292ci12YXJpYXRpb24tbmFtZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdvcmRzID0gJCh0aGlzKS50ZXh0KCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgbGFzdFdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGZpcnN0Q2hhciA9IGxhc3RXb3JkLmNoYXJBdCgwKTtcbiAgICAgICAgJCh0aGlzKS50ZXh0KGZpcnN0Q2hhcik7XG4gICAgfSk7XG5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jaGVja291dFwiKSkge1xuICAgICAgICBjb25zdCBjaGVja291dEJ1dHRvbkFuY2VzdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tvdXROZXN0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpO1xuICAgICAgICBjaGVja291dEJ1dHRvbkFuY2VzdG9yLmFwcGVuZENoaWxkKGNoZWNrb3V0TmVzdGVkQnV0dG9uKTtcblxuICAgICAgICBjb25zdCByZXF1aXJlZElucHV0RmllbGRzID0gJChcbiAgICAgICAgICAgIFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0IC52YWxpZGF0ZS1yZXF1aXJlZCBpbnB1dFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgY29uc3QgY2FydEJ1dHRvbkFuY2VzdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNhcnQgLndvb2NvbW1lcmNlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FydE5lc3RlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b25cIlxuICAgICAgICApO1xuICAgICAgICBjYXJ0QnV0dG9uQW5jZXN0b3IuYXBwZW5kQ2hpbGQoY2FydE5lc3RlZEJ1dHRvbik7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIvY2FydC9cIikgPiAtMSkge1xuICAgICAgICAkKFwiYS5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiYS5uYXZiYXItY2FydFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgICQoXCIuZHVwbGljYXRlLWVsZW1lbnRzXCIpLmFwcGVuZFRvKFxuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLXByb2R1Y3QtZGV0YWlsc19fc2hvcnQtZGVzY3JpcHRpb25cIikucGFyZW50KCkucGFyZW50KClcbiAgICApO1xuXG4gICAgY29uc3Qgd293ID0gbmV3IFdPVygpO1xuICAgIHdvdy5pbml0KCk7XG5cbiAgICAkKFxuICAgICAgICBcImJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgLnN1bW1hcnkuZW50cnktc3VtbWFyeSwgYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAud29vY29tbWVyY2UtVGFicy1wYW5lbCwgYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAjcmV2aWV3c1wiXG4gICAgKS5hZGRDbGFzcyhcIndvdyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5VcFwiKTtcblxuICAgIC8vIERpc2FibGUgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBjYXJ0IGljb25cbiAgICAkKFwiLm5hdmJhci1jYXJ0LCAueG9vLXdzYy1zYy1jb250XCIpLm9mZihcImNsaWNrXCIpO1xuXG4gICAgaWYgKCEkKFwiYm9keVwiKS5oYXNDbGFzcyhcIi53b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgIC8vIFJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBjYXJ0IHBhZ2Ugd2hlbiB0aGV5IGNsaWNrIG9uIHRoZSBjYXJ0IGljb25cbiAgICAgICAgJChcIi5uYXZiYXItY2FydCwgLnhvby13c2Mtc2MtY29udFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXJ0XCI7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBjYXJ0IHBhZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXJ0IHBhZ2VcIik7XG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhcnQgcGFnZSB3aGVuIHRoZXkgY2xpY2sgb24gdGhlIGNhcnQgaWNvblxuXG4gICAgJChcImJvZHkuc2luZ2xlLXByb2R1Y3QgLndwY2JuLWJ0bi1zaW5nbGUuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS5jbGljayhcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jaGVja291dFwiO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikudGV4dChcbiAgICAgICAgXCJBZGQgdG8gQ2hlY2tvdXRcIlxuICAgICk7XG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikuY2xpY2soXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgICQoXCIucHJvZHVjdCAucHNmdy1zb2NpYWwtd3JhcFwiKS5hcHBlbmRUbyhcbiAgICAgICAgXCIjcHJvZHVjdFNoYXJlSWNvbnMgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHlcIlxuICAgICk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvZGlzdC9qcy9hcHBcIjogMCxcblx0XCJzdHlsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIm5hdmJhciIsImNsYXNzTmFtZSIsIndpbmRvdyIsIm9uIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY3JvbGwiLCJjb25zb2xlIiwibG9nIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwiYXV0b1BsYXkiLCIkYmxvZ0Nhcm91c2VsIiwicHJldk5leHRCdXR0b25zIiwiZnJlZVNjcm9sbCIsImNvbnRhaW4iLCJjZWxsQWxpZ24iLCJwYWdlRG90cyIsIiRnYWxsZXJ5Q2Fyb3VzZWwiLCJ0b2dnbGUiLCJlbGVtZW50IiwibmV3VGV4dCIsInRleHQiLCJyZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJvcmlnaW5hbFRleHQiLCJ0ZXh0Q29udGVudCIsInF1b3RlZFRleHQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIiRpbnB1dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3VycmVudFZhbCIsInBhcnNlSW50IiwidmFsIiwibmV3VmFsIiwidHJpZ2dlciIsImF0dHIiLCJpbnB1dEVsZW1lbnRzT25DaGVja291dCIsImlucHV0RWxlbWVudHNPblNpZ25JbiIsImlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MiLCJpbnB1dEVsZW1lbnRzT25SZWdpc3RlciIsInJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCIsImlucHV0RWxlbWVudCIsImVhY2giLCJsYWJlbFZhbCIsImlucHV0TmFtZSIsImlucHV0UGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJuZXdFbGVtZW50IiwiYWZ0ZXIiLCJhY2NvdW50UGFnZUVsZW1lbnQiLCJuZXdBY2NvdW50UGFnZUVsZW1lbnQiLCJjc3MiLCJub3QiLCJzaWduSW5UZXh0RWxlbWVudCIsInNpZ25Jbk5ld1RleHQiLCJyZWdpc3RlclRleHRFbGVtZW50IiwicmVnaXN0ZXJOZXdUZXh0Iiwic2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQiLCJzaWduSW5CdXR0b25OZXdUZXh0IiwiaGlkZSIsIndvcmRzIiwic3BsaXQiLCJsYXN0V29yZCIsImZpcnN0Q2hhciIsImNoYXJBdCIsImNoZWNrUmVxdWlyZWRGaWVsZHMiLCJhbGxWYWxpZCIsInJlcXVpcmVkSW5wdXRGaWVsZHMiLCJpbnB1dFZhbCIsInRyaW0iLCJidXR0b24iLCJwcm9wIiwiY2hlY2tvdXRCdXR0b25BbmNlc3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja291dE5lc3RlZEJ1dHRvbiIsImFwcGVuZENoaWxkIiwiY2FydEJ1dHRvbkFuY2VzdG9yIiwiY2FydE5lc3RlZEJ1dHRvbiIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJldmVudCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJwYXJlbnQiLCJ3b3ciLCJXT1ciLCJpbml0Iiwib2ZmIiwibW9kYWwiXSwic291cmNlUm9vdCI6IiJ9