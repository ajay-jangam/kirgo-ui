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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDRkQsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUN3RyxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQy9DLENBQUMsQ0FDSjtBQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeFZGOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL3Nhc3MvYXBwLnNjc3M/YzBlMyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogTmF2YmFyXG4gICAgICovXG4gICAgLy8gTmF2YmFyIE1lbnVcblxuICAgICQoXCIubmF2YmFyLWhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlLndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzRml4ZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgdGhlIGNsYXNzIG5hbWUgdG8gdG9nZ2xlXG4gICAgdmFyIG5hdmJhciA9ICQoXCIubmF2YmFyXCIpO1xuICAgIHZhciBjbGFzc05hbWUgPSBcInNjcm9sbGVkLXNjcmVlblwiO1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhclxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gbmF2YmFyLm91dGVySGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGY4XCIgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVqaHNnYlwiKTtcbiAgICAgICAgbGV0IHNjcm9sbCA9ICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc2Nyb2xsID4gMTAgJiYgISQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSkgfHxcbiAgICAgICAgICAgIChzY3JvbGwgPT09IDAgJiYgJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgICQoXCIuYWN0aXZlXCIpLnRvZ2dsZUNsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSG9tZSBQYWdlXG4gICAgICovXG5cbiAgICAvLyBIb21lIFNsaWRlclxuXG4gICAgbGV0ICRob21lQ2Fyb3VzZWwgPSAkKFwiLmhvbWUtY2Fyb3VzZWxcIik7XG5cbiAgICAkaG9tZUNhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgYXV0b1BsYXk6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBCbG9nIFNsaWRlclxuXG4gICAgbGV0ICRibG9nQ2Fyb3VzZWwgPSAkKFwiLmJsb2ctY2Fyb3VzZWxcIik7XG5cbiAgICAkYmxvZ0Nhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgICAgY2VsbEFsaWduOiBcImNlbnRlclwiLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBQYWdlXG4gICAgICovXG4gICAgJChcIi53b29jb21tZXJjZS1SZXZpZXdzIC5jb21tZW50bGlzdFwiKS5mbGlja2l0eSh7XG4gICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICB9KTtcblxuICAgIC8vIEdhbGxlcnkgU2xpZGVyXG5cbiAgICBsZXQgJGdhbGxlcnlDYXJvdXNlbCA9ICQoXCIuc2hvcC1nYWxsZXJ5XCIpO1xuXG4gICAgJGdhbGxlcnlDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqKi9cblxuICAgIC8vIFRvZ2dsZSBSZXZpZXcgRm9ybVxuICAgICQoXCIjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtcmVwbHktdGl0bGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlICNyZXZpZXdfZm9ybSAuY29tbWVudC1mb3JtXCIpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBSZXZpZXcgVGl0bGUgdGV4dFxuICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3JlcGx5LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1RleHQgPSBcInNlbmQgeW91ciByZXZpZXdcIjtcbiAgICBlbGVtZW50LnRleHQobmV3VGV4dCk7XG5cbiAgICAvLyBBZGQgZG91YmxlIHFvdXRlcyB0byBSZXZpZXdzXG4gICAgY29uc3QgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVzY3JpcHRpb24gcFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50c1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHF1b3RlZFRleHQgPSBgXCIke29yaWdpbmFsVGV4dH1cImA7XG4gICAgICAgIHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBxdW90ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIEhpZGUgV29vQ29tbWVyY2Ugbm90aWNlcyBhZnRlciA1IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1ub3RpY2VzLXdyYXBwZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgfSwgNTAwMCk7XG5cbiAgICAvLyBSZW1vdmUgV29vQ29tbWVyY2Ugbm90aWNlcyB3aGVuIGNsaWNrZWRcbiAgICAkKGRvY3VtZW50KS5vbihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBcIi53b29jb21tZXJjZS1tZXNzYWdlLCAud29vY29tbWVyY2UtZXJyb3IsIC53b29jb21tZXJjZS1pbmZvXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYXJ0IHF1YW50aXR5IGJ1IGNsaWNsaW5nIHBsdXMvbWludXMgb24gQ2FydCBwYWdlXG4gICAgJChcIi5xdWFudGl0eVwiKS5vbihcImNsaWNrXCIsIFwiLnBsdXMsIC5taW51c1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJld2pzZ2JcIik7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbnB1dCBmaWVsZCBhbmQgY3VycmVudCBxdWFudGl0eSB2YWx1ZSBmb3IgdGhpcyBjYXJ0IGl0ZW1cbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcykuY2xvc2VzdChcIi5xdWFudGl0eVwiKS5maW5kKFwiaW5wdXQucXR5XCIpLFxuICAgICAgICAgICAgY3VycmVudFZhbCA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSk7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBuZXcgcXVhbnRpdHkgdmFsdWUgYmFzZWQgb24gdGhlIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwicGx1c1wiKSkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGN1cnJlbnRWYWwgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGN1cnJlbnRWYWwgPiAxID8gY3VycmVudFZhbCAtIDEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBpbnB1dCBmaWVsZCB2YWx1ZSBhbmQgdHJpZ2dlciB0aGUgXCJjaGFuZ2VcIiBldmVudCB0byB1cGRhdGUgdGhlIGNhcnRcbiAgICAgICAgJGlucHV0LnZhbChuZXdWYWwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgfSk7XG5cbiAgICAvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIG5hbWUgb2YgY291cG9uIGlucHV0XG4gICAgJChcIi53b29jb21tZXJjZS1jYXJ0IC5jb3Vwb24gLmlucHV0LXRleHRcIikuYXR0cihcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICBcImVudGVyIGNvdXBvbiBjb2RlXCJcbiAgICApO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgbGFiZWxzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGxhY2Vob2xkZXJzXG5cbiAgICBsZXQgaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c09uU2lnbkluID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UtZm9ybS1yb3cgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hZGRyZXNzLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIgPSAkKFwiLmN1c3RvbS1yZWdpc3RyYXRpb24gbGFiZWxcIik7XG5cbiAgICBjb25zdCByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlucHV0RWxlbWVudC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbFZhbCA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgbGV0IGlucHV0TmFtZSA9ICQodGhpcykuYXR0cihcImZvclwiKTtcbiAgICAgICAgICAgIGxldCBpbnB1dFBsYWNlaG9sZGVyID0gJChcIiNcIiArIGlucHV0TmFtZSkuYXR0cihcInBsYWNlaG9sZGVyXCIpO1xuICAgICAgICAgICAgaWYgKGxhYmVsVmFsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KGlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBsYWJlbFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPbkNoZWNrb3V0KTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uU2lnbkluKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIpO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzKTtcblxuICAgIC8vIGFkZGVkIFNoaXBtZW50IHRleHQgb24gY2hlY2tvdXQgcGFnZVxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXJcIik7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9ICQoXG4gICAgICAgIFwiPHAgaWQ9J3NoaXBtZW50LXRleHQnPmVudGVyIHlvdXIgPGJyPjxzcGFuPnNoaXBwaW5nIGRldGFpbHM8L3NwYW4+PC9wPlwiXG4gICAgKTtcbiAgICBjb250YWluZXIuZmluZChcIj46bnRoLWNoaWxkKDMpXCIpLmFmdGVyKG5ld0VsZW1lbnQpO1xuXG4gICAgLy8gQWRkZWQgaW1hZ2Ugb24gYWNjb3VudCBwYWdlXG4gICAgY29uc3QgYWNjb3VudFBhZ2VFbGVtZW50ID0gJChcIi53b29jb21tZXJjZS1hY2NvdW50ICNwYWdlXCIpO1xuICAgIGNvbnN0IG5ld0FjY291bnRQYWdlRWxlbWVudCA9ICQoXG4gICAgICAgICc8aW1nIGNsYXNzPVwiYWNjb3VudC1iYW5uZXItaW1hZ2VcIiBzcmM9XCIvd3AtY29udGVudC90aGVtZXMva2lyZ28tdGhlbWUvYXNzZXRzL2ltYWdlcy9hY2NvdW50L3NpZ24taW4tYmFubmVyLnBuZ1wiIGFsdD1cIkJhbm5lciBJbWFnZVwiIC8+J1xuICAgICk7XG4gICAgaWYgKCEkKFwiYm9keS53b29jb21tZXJjZS1wYWdlXCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBiYW5uZXIgaW1hZ2Ugd2hlbiBsb2dnZWQgaW5cbiAgICAgICAgYWNjb3VudFBhZ2VFbGVtZW50LmZpbmQoXCI+Om50aC1jaGlsZCgxKVwiKS5hZnRlcihuZXdBY2NvdW50UGFnZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vIEtlZXAgZnVsbCBoZWlnaHQgd2hlbiBsb2dnZWQgaW5cbiAgICAgICAgJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLCAucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb25cIlxuICAgICAgICApLmNzcyhcImhlaWdodFwiLCBcImNhbGMoMTAwdmggLSAyNTBweClcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHRcbiAgICBpZiAoJChcImJvZHlcIikubm90KFwid29vY29tbWVyY2UtYWNjb3VudC5sb2dnZWQtaW5cIikpIHtcbiAgICAgICAgY29uc3Qgc2lnbkluVGV4dEVsZW1lbnQgPSAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZSAud29vY29tbWVyY2UgaDJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduSW5OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgICAgIHNpZ25JblRleHRFbGVtZW50LnRleHQoc2lnbkluTmV3VGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHQgb24gUmVnaXN0ZXJcbiAgICBjb25zdCByZWdpc3RlclRleHRFbGVtZW50ID0gJChcIi5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvbiBoMlwiKTtcbiAgICBjb25zdCByZWdpc3Rlck5ld1RleHQgPSBcImNyZWF0ZSBhbiBhY2NvdW50XCI7XG4gICAgcmVnaXN0ZXJUZXh0RWxlbWVudC50ZXh0KHJlZ2lzdGVyTmV3VGV4dCk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gQnV0dG9uIFRpdGxlIHRleHRcbiAgICBjb25zdCBzaWduSW5UZXh0QnV0dG9uRWxlbWVudCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tbG9naW4gLndvb2NvbW1lcmNlLWZvcm0tbG9naW5fX3N1Ym1pdFwiXG4gICAgKTtcbiAgICBjb25zdCBzaWduSW5CdXR0b25OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQudGV4dChzaWduSW5CdXR0b25OZXdUZXh0KTtcblxuICAgIC8vIEhpZGUgZm9vdGVyIHdoZW4gdXNlciBsb2dvdXQgYW5kIHNob3cgd2hlbiBsb2dpbiBpblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWFjY291bnRcIikpIHtcbiAgICAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG5cbiAgICAgICAgLy8gaWYgKCQoXCJib2R5Lndvb2NvbW1lcmNlLWFjY291bnRcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gICAgICQoXCJmb290ZXItc2VjdGlvblwiKS5zaG93KCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAkKFwiLmZvb3Rlci1zZWN0aW9uXCIpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgbmFtZSBcIndvb3ZyLXZhcmlhdGlvbi1uYW1lXCJcbiAgICAkKFwiLndvb3ZyLXZhcmlhdGlvbi1uYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd29yZHMgPSAkKHRoaXMpLnRleHQoKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBsYXN0V29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgZmlyc3RDaGFyID0gbGFzdFdvcmQuY2hhckF0KDApO1xuICAgICAgICAkKHRoaXMpLnRleHQoZmlyc3RDaGFyKTtcbiAgICB9KTtcblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXRcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGVja291dE5lc3RlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Vfb3JkZXJcIik7XG4gICAgICAgIGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IuYXBwZW5kQ2hpbGQoY2hlY2tvdXROZXN0ZWRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXRGaWVsZHMgPSAkKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXQgLnZhbGlkYXRlLXJlcXVpcmVkIGlucHV0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gJChcIiNwbGFjZV9vcmRlclwiKTtcblxuICAgICAgICBjaGVja1JlcXVpcmVkRmllbGRzKCk7XG4gICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja1JlcXVpcmVkRmllbGRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUmVxdWlyZWRGaWVsZHMoKSB7XG4gICAgICAgICAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWlyZWRJbnB1dEZpZWxkcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRWYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXRWYWwgfHwgaW5wdXRWYWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhbGxWYWxpZCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICBjb25zdCBjYXJ0QnV0dG9uQW5jZXN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2FydCAud29vY29tbWVyY2VcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjYXJ0TmVzdGVkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNhcnQgLmNoZWNrb3V0LWJ1dHRvblwiXG4gICAgICAgICk7XG4gICAgICAgIGNhcnRCdXR0b25BbmNlc3Rvci5hcHBlbmRDaGlsZChjYXJ0TmVzdGVkQnV0dG9uKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIi9jYXJ0L1wiKSA+IC0xKSB7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgJChcIi5kdXBsaWNhdGUtZWxlbWVudHNcIikuYXBwZW5kVG8oXG4gICAgICAgICQoXCIud29vY29tbWVyY2UtcHJvZHVjdC1kZXRhaWxzX19zaG9ydC1kZXNjcmlwdGlvblwiKS5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICk7XG5cbiAgICBjb25zdCB3b3cgPSBuZXcgV09XKCk7XG4gICAgd293LmluaXQoKTtcblxuICAgICQoXG4gICAgICAgIFwiYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAuc3VtbWFyeS5lbnRyeS1zdW1tYXJ5LCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC53b29jb21tZXJjZS1UYWJzLXBhbmVsLCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0ICNyZXZpZXdzXCJcbiAgICApLmFkZENsYXNzKFwid293IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCIpO1xuXG4gICAgLy8gRGlzYWJsZSB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGNhcnQgaWNvblxuICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikub2ZmKFwiY2xpY2tcIik7XG5cbiAgICBpZiAoISQoXCJib2R5XCIpLmhhc0NsYXNzKFwiLndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhcnQgcGFnZSB3aGVuIHRoZXkgY2xpY2sgb24gdGhlIGNhcnQgaWNvblxuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0LCAueG9vLXdzYy1zYy1jb250XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhcnRcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IGNhcnQgcGFnZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhcnQgcGFnZVwiKTtcbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgY2FydCBwYWdlIHdoZW4gdGhleSBjbGljayBvbiB0aGUgY2FydCBpY29uXG5cbiAgICAkKFwiYm9keS5zaW5nbGUtcHJvZHVjdCAud3BjYm4tYnRuLXNpbmdsZS5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLmNsaWNrKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NoZWNrb3V0XCI7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAkKFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsIC53cGNibi1idG4uc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS50ZXh0KFxuICAgICAgICBcIkFkZCB0byBDaGVja291dFwiXG4gICAgKTtcbiAgICAkKFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsIC53cGNibi1idG4uc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS5jbGljayhcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICApO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvYXNzZXRzL2Rpc3QvanMvYXBwXCI6IDAsXG5cdFwic3R5bGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3Nhc3MvYXBwLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJuYXZiYXIiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJvbiIsInNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG9wIiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwic2Nyb2xsIiwiY29uc29sZSIsImxvZyIsImhhc0NsYXNzIiwiJGhvbWVDYXJvdXNlbCIsImZsaWNraXR5Iiwid3JhcEFyb3VuZCIsImF1dG9QbGF5IiwiJGJsb2dDYXJvdXNlbCIsInByZXZOZXh0QnV0dG9ucyIsImZyZWVTY3JvbGwiLCJjb250YWluIiwiY2VsbEFsaWduIiwicGFnZURvdHMiLCIkZ2FsbGVyeUNhcm91c2VsIiwidG9nZ2xlIiwiZWxlbWVudCIsIm5ld1RleHQiLCJ0ZXh0IiwicmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwib3JpZ2luYWxUZXh0IiwidGV4dENvbnRlbnQiLCJxdW90ZWRUZXh0Iiwic2V0VGltZW91dCIsImZhZGVPdXQiLCIkaW5wdXQiLCJjbG9zZXN0IiwiZmluZCIsImN1cnJlbnRWYWwiLCJwYXJzZUludCIsInZhbCIsIm5ld1ZhbCIsInRyaWdnZXIiLCJhdHRyIiwiaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQiLCJpbnB1dEVsZW1lbnRzT25TaWduSW4iLCJpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzIiwiaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIiLCJyZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwiLCJpbnB1dEVsZW1lbnQiLCJlYWNoIiwibGFiZWxWYWwiLCJpbnB1dE5hbWUiLCJpbnB1dFBsYWNlaG9sZGVyIiwiY29udGFpbmVyIiwibmV3RWxlbWVudCIsImFmdGVyIiwiYWNjb3VudFBhZ2VFbGVtZW50IiwibmV3QWNjb3VudFBhZ2VFbGVtZW50IiwiY3NzIiwibm90Iiwic2lnbkluVGV4dEVsZW1lbnQiLCJzaWduSW5OZXdUZXh0IiwicmVnaXN0ZXJUZXh0RWxlbWVudCIsInJlZ2lzdGVyTmV3VGV4dCIsInNpZ25JblRleHRCdXR0b25FbGVtZW50Iiwic2lnbkluQnV0dG9uTmV3VGV4dCIsImhpZGUiLCJ3b3JkcyIsInNwbGl0IiwibGFzdFdvcmQiLCJmaXJzdENoYXIiLCJjaGFyQXQiLCJjaGVja1JlcXVpcmVkRmllbGRzIiwiYWxsVmFsaWQiLCJyZXF1aXJlZElucHV0RmllbGRzIiwiaW5wdXRWYWwiLCJ0cmltIiwiYnV0dG9uIiwicHJvcCIsImNoZWNrb3V0QnV0dG9uQW5jZXN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tvdXROZXN0ZWRCdXR0b24iLCJhcHBlbmRDaGlsZCIsImNhcnRCdXR0b25BbmNlc3RvciIsImNhcnROZXN0ZWRCdXR0b24iLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwiZXZlbnQiLCJhZGRDbGFzcyIsImFwcGVuZFRvIiwicGFyZW50Iiwid293IiwiV09XIiwiaW5pdCIsIm9mZiIsIm1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==