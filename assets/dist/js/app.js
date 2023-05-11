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
  $("#subscribe").popover({
    title: "<h4>Newsletter Subscription</h4>",
    container: "body",
    placement: "bottom",
    html: true,
    content: function content() {
      return $("#popover-form").html();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovL2FwcC8uL2Fzc2V0cy9zYXNzL2FwcC5zY3NzP2MwZTMiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIE5hdmJhclxuICAgICAqL1xuICAgIC8vIE5hdmJhciBNZW51XG5cbiAgICAkKFwiLm5hdmJhci1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZS53aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJpc0ZpeGVkXCIpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIHRoZSBjbGFzcyBuYW1lIHRvIHRvZ2dsZVxuICAgIHZhciBuYXZiYXIgPSAkKFwiLm5hdmJhclwiKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gXCJzY3JvbGxlZC1zY3JlZW5cIjtcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IG5hdmJhci5vdXRlckhlaWdodCgpKSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlamhzZ2JcIik7XG4gICAgICAgIGxldCBzY3JvbGwgPSAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHNjcm9sbCA+IDEwICYmICEkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpIHx8XG4gICAgICAgICAgICAoc2Nyb2xsID09PSAwICYmICQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFwiLmFjdGl2ZVwiKS50b2dnbGVDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEhvbWUgUGFnZVxuICAgICAqL1xuXG4gICAgLy8gSG9tZSBTbGlkZXJcblxuICAgIGxldCAkaG9tZUNhcm91c2VsID0gJChcIi5ob21lLWNhcm91c2VsXCIpO1xuXG4gICAgJGhvbWVDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQmxvZyBTbGlkZXJcblxuICAgIGxldCAkYmxvZ0Nhcm91c2VsID0gJChcIi5ibG9nLWNhcm91c2VsXCIpO1xuXG4gICAgJGJsb2dDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIGNlbGxBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqL1xuICAgICQoXCIud29vY29tbWVyY2UtUmV2aWV3cyAuY29tbWVudGxpc3RcIikuZmxpY2tpdHkoe1xuICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgfSk7XG5cbiAgICAvLyBHYWxsZXJ5IFNsaWRlclxuXG4gICAgbGV0ICRnYWxsZXJ5Q2Fyb3VzZWwgPSAkKFwiLnNob3AtZ2FsbGVyeVwiKTtcblxuICAgICRnYWxsZXJ5Q2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKiovXG5cbiAgICAvLyBUb2dnbGUgUmV2aWV3IEZvcm1cbiAgICAkKFwiI3Jldmlld19mb3JtIC5jb21tZW50LXJlcGx5LXRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZSAjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtZm9ybVwiKS50b2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSB0aGUgUmV2aWV3IFRpdGxlIHRleHRcbiAgICBjb25zdCBlbGVtZW50ID0gJChcIiNyZXBseS10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUZXh0ID0gXCJzZW5kIHlvdXIgcmV2aWV3XCI7XG4gICAgZWxlbWVudC50ZXh0KG5ld1RleHQpO1xuXG4gICAgLy8gQWRkIGRvdWJsZSBxb3V0ZXMgdG8gUmV2aWV3c1xuICAgIGNvbnN0IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlc2NyaXB0aW9uIHBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsVGV4dCA9IHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBxdW90ZWRUZXh0ID0gYFwiJHtvcmlnaW5hbFRleHR9XCJgO1xuICAgICAgICByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gcXVvdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBIaWRlIFdvb0NvbW1lcmNlIG5vdGljZXMgYWZ0ZXIgNSBzZWNvbmRzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2Utbm90aWNlcy13cmFwcGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgLy8gUmVtb3ZlIFdvb0NvbW1lcmNlIG5vdGljZXMgd2hlbiBjbGlja2VkXG4gICAgJChkb2N1bWVudCkub24oXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgXCIud29vY29tbWVyY2UtbWVzc2FnZSwgLndvb2NvbW1lcmNlLWVycm9yLCAud29vY29tbWVyY2UtaW5mb1wiLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2FydCBxdWFudGl0eSBidSBjbGljbGluZyBwbHVzL21pbnVzIG9uIENhcnQgcGFnZVxuICAgICQoXCIucXVhbnRpdHlcIikub24oXCJjbGlja1wiLCBcIi5wbHVzLCAubWludXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXdqc2diXCIpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5wdXQgZmllbGQgYW5kIGN1cnJlbnQgcXVhbnRpdHkgdmFsdWUgZm9yIHRoaXMgY2FydCBpdGVtXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucXVhbnRpdHlcIikuZmluZChcImlucHV0LnF0eVwiKSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWwgPSBwYXJzZUludCgkaW5wdXQudmFsKCkpO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgbmV3IHF1YW50aXR5IHZhbHVlIGJhc2VkIG9uIHRoZSBidXR0b24gY2xpY2tlZFxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInBsdXNcIikpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBjdXJyZW50VmFsID4gMSA/IGN1cnJlbnRWYWwgLSAxIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgdmFsdWUgYW5kIHRyaWdnZXIgdGhlIFwiY2hhbmdlXCIgZXZlbnQgdG8gdXBkYXRlIHRoZSBjYXJ0XG4gICAgICAgICRpbnB1dC52YWwobmV3VmFsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVwbGFjZSBwbGFjZWhvbGRlciBuYW1lIG9mIGNvdXBvbiBpbnB1dFxuICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY291cG9uIC5pbnB1dC10ZXh0XCIpLmF0dHIoXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgXCJlbnRlciBjb3Vwb24gY29kZVwiXG4gICAgKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGxhYmVscyB0byB0aGVpciByZXNwZWN0aXZlIHBsYWNlaG9sZGVyc1xuXG4gICAgbGV0IGlucHV0RWxlbWVudHNPbkNoZWNrb3V0ID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblNpZ25JbiA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tcm93IGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWRkcmVzcy1maWVsZHNfX2ZpZWxkLXdyYXBwZXIgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNPblJlZ2lzdGVyID0gJChcIi5jdXN0b20tcmVnaXN0cmF0aW9uIGxhYmVsXCIpO1xuXG4gICAgY29uc3QgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgICBpbnB1dEVsZW1lbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxWYWwgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgIGxldCBpbnB1dE5hbWUgPSAkKHRoaXMpLmF0dHIoXCJmb3JcIik7XG4gICAgICAgICAgICBsZXQgaW5wdXRQbGFjZWhvbGRlciA9ICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICAgIGlmIChsYWJlbFZhbCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dChpbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgbGFiZWxWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25DaGVja291dCk7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblNpZ25Jbik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPblJlZ2lzdGVyKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyk7XG5cbiAgICAvLyBhZGRlZCBTaGlwbWVudCB0ZXh0IG9uIGNoZWNrb3V0IHBhZ2VcbiAgICBjb25zdCBjb250YWluZXIgPSAkKFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSAkKFxuICAgICAgICBcIjxwIGlkPSdzaGlwbWVudC10ZXh0Jz5lbnRlciB5b3VyIDxicj48c3Bhbj5zaGlwcGluZyBkZXRhaWxzPC9zcGFuPjwvcD5cIlxuICAgICk7XG4gICAgY29udGFpbmVyLmZpbmQoXCI+Om50aC1jaGlsZCgzKVwiKS5hZnRlcihuZXdFbGVtZW50KTtcblxuICAgIC8vIEFkZGVkIGltYWdlIG9uIGFjY291bnQgcGFnZVxuICAgIGNvbnN0IGFjY291bnRQYWdlRWxlbWVudCA9ICQoXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZVwiKTtcbiAgICBjb25zdCBuZXdBY2NvdW50UGFnZUVsZW1lbnQgPSAkKFxuICAgICAgICAnPGltZyBjbGFzcz1cImFjY291bnQtYmFubmVyLWltYWdlXCIgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL2tpcmdvLXRoZW1lL2Fzc2V0cy9pbWFnZXMvYWNjb3VudC9zaWduLWluLWJhbm5lci5wbmdcIiBhbHQ9XCJCYW5uZXIgSW1hZ2VcIiAvPidcbiAgICApO1xuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtcGFnZVwiKS5oYXNDbGFzcyhcImxvZ2dlZC1pblwiKSkge1xuICAgICAgICAvLyBSZW1vdmUgYmFubmVyIGltYWdlIHdoZW4gbG9nZ2VkIGluXG4gICAgICAgIGFjY291bnRQYWdlRWxlbWVudC5maW5kKFwiPjpudGgtY2hpbGQoMSlcIikuYWZ0ZXIobmV3QWNjb3VudFBhZ2VFbGVtZW50KTtcblxuICAgICAgICAvLyBLZWVwIGZ1bGwgaGVpZ2h0IHdoZW4gbG9nZ2VkIGluXG4gICAgICAgICQoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZSwgLnBhZ2UtaWQtMjM3IC5jdXN0b20tcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgKS5jc3MoXCJoZWlnaHRcIiwgXCJjYWxjKDEwMHZoIC0gMjUwcHgpXCIpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0XG4gICAgaWYgKCQoXCJib2R5XCIpLm5vdChcIndvb2NvbW1lcmNlLWFjY291bnQubG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIGNvbnN0IHNpZ25JblRleHRFbGVtZW50ID0gJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2UgLndvb2NvbW1lcmNlIGgyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2lnbkluTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgICAgICBzaWduSW5UZXh0RWxlbWVudC50ZXh0KHNpZ25Jbk5ld1RleHQpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0IG9uIFJlZ2lzdGVyXG4gICAgY29uc3QgcmVnaXN0ZXJUZXh0RWxlbWVudCA9ICQoXCIucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb24gaDJcIik7XG4gICAgY29uc3QgcmVnaXN0ZXJOZXdUZXh0ID0gXCJjcmVhdGUgYW4gYWNjb3VudFwiO1xuICAgIHJlZ2lzdGVyVGV4dEVsZW1lbnQudGV4dChyZWdpc3Rlck5ld1RleHQpO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIEJ1dHRvbiBUaXRsZSB0ZXh0XG4gICAgY29uc3Qgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLWxvZ2luIC53b29jb21tZXJjZS1mb3JtLWxvZ2luX19zdWJtaXRcIlxuICAgICk7XG4gICAgY29uc3Qgc2lnbkluQnV0dG9uTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgIHNpZ25JblRleHRCdXR0b25FbGVtZW50LnRleHQoc2lnbkluQnV0dG9uTmV3VGV4dCk7XG5cbiAgICAvLyBIaWRlIGZvb3RlciB3aGVuIHVzZXIgbG9nb3V0IGFuZCBzaG93IHdoZW4gbG9naW4gaW5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1hY2NvdW50XCIpKSB7XG4gICAgICAgICQoXCIuZm9vdGVyLXNlY3Rpb25cIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIGlmICgkKFwiYm9keS53b29jb21tZXJjZS1hY2NvdW50XCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vICAgICAkKFwiZm9vdGVyLXNlY3Rpb25cIikuc2hvdygpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyBsb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzIG5hbWUgXCJ3b292ci12YXJpYXRpb24tbmFtZVwiXG4gICAgJChcIi53b292ci12YXJpYXRpb24tbmFtZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdvcmRzID0gJCh0aGlzKS50ZXh0KCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgbGFzdFdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGZpcnN0Q2hhciA9IGxhc3RXb3JkLmNoYXJBdCgwKTtcbiAgICAgICAgJCh0aGlzKS50ZXh0KGZpcnN0Q2hhcik7XG4gICAgfSk7XG5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jaGVja291dFwiKSkge1xuICAgICAgICBjb25zdCBjaGVja291dEJ1dHRvbkFuY2VzdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tvdXROZXN0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlX29yZGVyXCIpO1xuICAgICAgICBjaGVja291dEJ1dHRvbkFuY2VzdG9yLmFwcGVuZENoaWxkKGNoZWNrb3V0TmVzdGVkQnV0dG9uKTtcblxuICAgICAgICBjb25zdCByZXF1aXJlZElucHV0RmllbGRzID0gJChcbiAgICAgICAgICAgIFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0IC52YWxpZGF0ZS1yZXF1aXJlZCBpbnB1dFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgY29uc3QgY2FydEJ1dHRvbkFuY2VzdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNhcnQgLndvb2NvbW1lcmNlXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FydE5lc3RlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b25cIlxuICAgICAgICApO1xuICAgICAgICBjYXJ0QnV0dG9uQW5jZXN0b3IuYXBwZW5kQ2hpbGQoY2FydE5lc3RlZEJ1dHRvbik7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIvY2FydC9cIikgPiAtMSkge1xuICAgICAgICAkKFwiYS5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiYS5uYXZiYXItY2FydFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgICQoXCIuZHVwbGljYXRlLWVsZW1lbnRzXCIpLmFwcGVuZFRvKFxuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLXByb2R1Y3QtZGV0YWlsc19fc2hvcnQtZGVzY3JpcHRpb25cIikucGFyZW50KCkucGFyZW50KClcbiAgICApO1xuXG4gICAgJChcIiNzdWJzY3JpYmVcIikucG9wb3Zlcih7XG4gICAgICAgIHRpdGxlOiBcIjxoND5OZXdzbGV0dGVyIFN1YnNjcmlwdGlvbjwvaDQ+XCIsXG4gICAgICAgIGNvbnRhaW5lcjogXCJib2R5XCIsXG4gICAgICAgIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQoXCIjcG9wb3Zlci1mb3JtXCIpLmh0bWwoKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9kaXN0L2pzL2FwcFwiOiAwLFxuXHRcInN0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwibmF2YmFyIiwiY2xhc3NOYW1lIiwid2luZG93Iiwib24iLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvcCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsInNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJoYXNDbGFzcyIsIiRob21lQ2Fyb3VzZWwiLCJmbGlja2l0eSIsIndyYXBBcm91bmQiLCJhdXRvUGxheSIsIiRibG9nQ2Fyb3VzZWwiLCJwcmV2TmV4dEJ1dHRvbnMiLCJmcmVlU2Nyb2xsIiwiY29udGFpbiIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwiJGdhbGxlcnlDYXJvdXNlbCIsInRvZ2dsZSIsImVsZW1lbnQiLCJuZXdUZXh0IiwidGV4dCIsInJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm9yaWdpbmFsVGV4dCIsInRleHRDb250ZW50IiwicXVvdGVkVGV4dCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiJGlucHV0IiwiY2xvc2VzdCIsImZpbmQiLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJuZXdWYWwiLCJ0cmlnZ2VyIiwiYXR0ciIsImlucHV0RWxlbWVudHNPbkNoZWNrb3V0IiwiaW5wdXRFbGVtZW50c09uU2lnbkluIiwiaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyIsImlucHV0RWxlbWVudHNPblJlZ2lzdGVyIiwicmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsIiwiaW5wdXRFbGVtZW50IiwiZWFjaCIsImxhYmVsVmFsIiwiaW5wdXROYW1lIiwiaW5wdXRQbGFjZWhvbGRlciIsImNvbnRhaW5lciIsIm5ld0VsZW1lbnQiLCJhZnRlciIsImFjY291bnRQYWdlRWxlbWVudCIsIm5ld0FjY291bnRQYWdlRWxlbWVudCIsImNzcyIsIm5vdCIsInNpZ25JblRleHRFbGVtZW50Iiwic2lnbkluTmV3VGV4dCIsInJlZ2lzdGVyVGV4dEVsZW1lbnQiLCJyZWdpc3Rlck5ld1RleHQiLCJzaWduSW5UZXh0QnV0dG9uRWxlbWVudCIsInNpZ25JbkJ1dHRvbk5ld1RleHQiLCJoaWRlIiwid29yZHMiLCJzcGxpdCIsImxhc3RXb3JkIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsImFsbFZhbGlkIiwicmVxdWlyZWRJbnB1dEZpZWxkcyIsImlucHV0VmFsIiwidHJpbSIsImJ1dHRvbiIsInByb3AiLCJjaGVja291dEJ1dHRvbkFuY2VzdG9yIiwicXVlcnlTZWxlY3RvciIsImNoZWNrb3V0TmVzdGVkQnV0dG9uIiwiYXBwZW5kQ2hpbGQiLCJjYXJ0QnV0dG9uQW5jZXN0b3IiLCJjYXJ0TmVzdGVkQnV0dG9uIiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiIsImV2ZW50IiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsInBhcmVudCIsInBvcG92ZXIiLCJ0aXRsZSIsInBsYWNlbWVudCIsImh0bWwiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==