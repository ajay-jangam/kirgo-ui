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

  // Move disabled size variants from their staging div into the .woovr-variations
  // flex container, then sort all size buttons in the canonical order.
  var sizeOrder = ["XS", "S", "M", "L", "XL"];
  $(".kirgo-disabled-staging").each(function () {
    var $staging = $(this);
    // .woovr-variations is the immediately preceding sibling of the staging div
    var $container = $staging.prev(".woovr-variations");
    if (!$container.length) {
      // Fallback: look for it in the nearest common ancestor
      $container = $staging.closest(".cart, .variations_form").find(".woovr-variations").first();
    }
    if (!$container.length) return;

    // Move disabled buttons into the flex container
    $staging.find(".woovr-variation-disabled").appendTo($container);
    $staging.remove();

    // Sort all variation buttons (enabled + disabled) by canonical size order
    var $items = $container.find(".woovr-variation[data-id]");
    var sorted = $items.toArray().sort(function (a, b) {
      var aName = $(a).find(".woovr-variation-name").text().trim();
      var bName = $(b).find(".woovr-variation-name").text().trim();
      var aIdx = sizeOrder.indexOf(aName);
      var bIdx = sizeOrder.indexOf(bName);
      if (aIdx === -1) aIdx = 999;
      if (bIdx === -1) bIdx = 999;
      return aIdx - bIdx;
    });
    $(sorted).appendTo($container);
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
    }, 2000);
  });
  $(".cart-product-size-modal .wpcbn-btn.single_add_to_cart_button").text("Add to Checkout");

  // Track if we should refresh after modal close
  var shouldRefreshCart = false;

  // Close modal after add to cart is completed
  $(document.body).on("added_to_cart", function (event, fragments, cart_hash, button) {
    // Check if the button that triggered the add to cart is inside our modal
    if ($(button).closest(".cart-product-size-modal").length) {
      $(".cart-product-size-modal").modal("hide");

      // Set flag to refresh cart page if user is on cart page
      if ($("body").hasClass("woocommerce-cart")) {
        shouldRefreshCart = true;
      }
    }
  });

  // Handle modal close event to refresh cart page
  $(document).on("hidden.bs.modal", ".cart-product-size-modal", function () {
    if (shouldRefreshCart && $("body").hasClass("woocommerce-cart")) {
      setTimeout(function () {
        window.location.reload();
      }, 100);
      shouldRefreshCart = false; // Reset flag
    }
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

  // Load cart count on page load via AJAX (works with Cloudflare caching)
  function updateCartCount() {
    // Try WooCommerce fragments first
    if (typeof wc_add_to_cart_params !== 'undefined' && wc_add_to_cart_params.wc_ajax_url) {
      $.ajax({
        url: wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%', 'get_refreshed_fragments'),
        type: 'POST',
        success: function success(data) {
          if (data && data.fragments) {
            $.each(data.fragments, function (key, value) {
              $(key).replaceWith(value);
            });
          }
        },
        error: function error(xhr, status, _error) {
          // Fallback to REST API if fragments fail
          loadCartCountViaREST();
        }
      });
    } else {
      // Use REST API if WooCommerce params not available
      loadCartCountViaREST();
    }
  }

  // Fallback function using REST API
  function loadCartCountViaREST() {
    $.ajax({
      url: '/wp-json/kirgo/v1/cart-count',
      type: 'GET',
      success: function success(response) {
        // Trigger WooCommerce fragment refresh with the count data
        $(document.body).trigger('wc_fragment_refresh');
      },
      error: function error(xhr, status, _error2) {}
    });
  }

  // Update cart count on page load
  updateCartCount();

  // Update cart count dynamically when items are added/removed
  $(document.body).on('added_to_cart removed_from_cart updated_cart_totals wc_fragments_refreshed', function () {
    updateCartCount();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0YsUUFBUSxDQUFDdUgsSUFBSSxDQUFDLENBQUM3RyxFQUFFLENBQUMsNEVBQTRFLEVBQUUsWUFBVztJQUN6RzJILGVBQWUsQ0FBQyxDQUFDO0VBQ3JCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL2dCRjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovL2FwcC8uL2Fzc2V0cy9zYXNzL2FwcC5zY3NzP2MwZTMiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIE5hdmJhclxuICAgICAqL1xuICAgIC8vIE5hdmJhciBNZW51XG5cbiAgICAkKFwiLm5hdmJhci1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZS53aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJpc0ZpeGVkXCIpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIHRoZSBjbGFzcyBuYW1lIHRvIHRvZ2dsZVxuICAgIHZhciBuYXZiYXIgPSAkKFwiLm5hdmJhclwiKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gXCJzY3JvbGxlZC1zY3JlZW5cIjtcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDEwKSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNjcm9sbCA9ICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc2Nyb2xsID4gMTAgJiYgISQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSkgfHxcbiAgICAgICAgICAgIChzY3JvbGwgPT09IDAgJiYgJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgICQoXCIuYWN0aXZlXCIpLnRvZ2dsZUNsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSG9tZSBQYWdlXG4gICAgICovXG5cbiAgICAvLyBIb21lIFNsaWRlclxuXG4gICAgbGV0ICRob21lQ2Fyb3VzZWwgPSAkKFwiLmhvbWUtY2Fyb3VzZWxcIik7XG5cbiAgICAkaG9tZUNhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgYXV0b1BsYXk6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBCbG9nIFNsaWRlclxuXG4gICAgbGV0ICRibG9nQ2Fyb3VzZWwgPSAkKFwiLmJsb2ctY2Fyb3VzZWxcIik7XG5cbiAgICAkYmxvZ0Nhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgICAgY2VsbEFsaWduOiBcImNlbnRlclwiLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBQYWdlXG4gICAgICovXG4gICAgJChcIi53b29jb21tZXJjZS1SZXZpZXdzIC5jb21tZW50bGlzdFwiKS5mbGlja2l0eSh7XG4gICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICB9KTtcblxuICAgIC8vIEdhbGxlcnkgU2xpZGVyXG5cbiAgICBsZXQgJGdhbGxlcnlDYXJvdXNlbCA9ICQoXCIuc2hvcC1nYWxsZXJ5XCIpO1xuXG4gICAgJGdhbGxlcnlDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqKi9cblxuICAgIC8vIFRvZ2dsZSBSZXZpZXcgRm9ybVxuICAgICQoXCIjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtcmVwbHktdGl0bGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlICNyZXZpZXdfZm9ybSAuY29tbWVudC1mb3JtXCIpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBSZXZpZXcgVGl0bGUgdGV4dFxuICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3JlcGx5LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1RleHQgPSBcInNlbmQgeW91ciByZXZpZXdcIjtcbiAgICBlbGVtZW50LnRleHQobmV3VGV4dCk7XG5cbiAgICAvLyBBZGQgZG91YmxlIHFvdXRlcyB0byBSZXZpZXdzXG4gICAgY29uc3QgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVzY3JpcHRpb24gcFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50c1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHF1b3RlZFRleHQgPSBgXCIke29yaWdpbmFsVGV4dH1cImA7XG4gICAgICAgIHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBxdW90ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIEhpZGUgV29vQ29tbWVyY2Ugbm90aWNlcyBhZnRlciA1IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1ub3RpY2VzLXdyYXBwZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgfSwgNTAwMCk7XG5cbiAgICAvLyBSZW1vdmUgV29vQ29tbWVyY2Ugbm90aWNlcyB3aGVuIGNsaWNrZWRcbiAgICAkKGRvY3VtZW50KS5vbihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBcIi53b29jb21tZXJjZS1tZXNzYWdlLCAud29vY29tbWVyY2UtZXJyb3IsIC53b29jb21tZXJjZS1pbmZvXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYXJ0IHF1YW50aXR5IGJ1IGNsaWNsaW5nIHBsdXMvbWludXMgb24gQ2FydCBwYWdlXG4gICAgJChcIi5xdWFudGl0eVwiKS5vbihcImNsaWNrXCIsIFwiLnBsdXMsIC5taW51c1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbnB1dCBmaWVsZCBhbmQgY3VycmVudCBxdWFudGl0eSB2YWx1ZSBmb3IgdGhpcyBjYXJ0IGl0ZW1cbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcykuY2xvc2VzdChcIi5xdWFudGl0eVwiKS5maW5kKFwiaW5wdXQucXR5XCIpLFxuICAgICAgICAgICAgY3VycmVudFZhbCA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSk7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBuZXcgcXVhbnRpdHkgdmFsdWUgYmFzZWQgb24gdGhlIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwicGx1c1wiKSkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGN1cnJlbnRWYWwgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGN1cnJlbnRWYWwgPiAxID8gY3VycmVudFZhbCAtIDEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBpbnB1dCBmaWVsZCB2YWx1ZSBhbmQgdHJpZ2dlciB0aGUgXCJjaGFuZ2VcIiBldmVudCB0byB1cGRhdGUgdGhlIGNhcnRcbiAgICAgICAgJGlucHV0LnZhbChuZXdWYWwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgfSk7XG5cbiAgICAvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIG5hbWUgb2YgY291cG9uIGlucHV0XG4gICAgJChcIi53b29jb21tZXJjZS1jYXJ0IC5jb3Vwb24gLmlucHV0LXRleHRcIikuYXR0cihcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICBcImVudGVyIGNvdXBvbiBjb2RlXCJcbiAgICApO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgbGFiZWxzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGxhY2Vob2xkZXJzXG5cbiAgICBsZXQgaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbCwgLndvb2NvbW1lcmNlLXNoaXBwaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c09uU2lnbkluID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UtZm9ybS1yb3cgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hZGRyZXNzLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIgPSAkKFwiLmN1c3RvbS1yZWdpc3RyYXRpb24gbGFiZWxcIik7XG5cbiAgICBjb25zdCByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlucHV0RWxlbWVudC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbFZhbCA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgbGV0IGlucHV0TmFtZSA9ICQodGhpcykuYXR0cihcImZvclwiKTtcbiAgICAgICAgICAgIGxldCBpbnB1dFBsYWNlaG9sZGVyID0gJChcIiNcIiArIGlucHV0TmFtZSkuYXR0cihcInBsYWNlaG9sZGVyXCIpO1xuICAgICAgICAgICAgaWYgKGxhYmVsVmFsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KGlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBsYWJlbFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPbkNoZWNrb3V0KTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uU2lnbkluKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIpO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzKTtcblxuICAgIC8vIGFkZGVkIFNoaXBtZW50IHRleHQgb24gY2hlY2tvdXQgcGFnZVxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXJcIik7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9ICQoXG4gICAgICAgIFwiPHAgaWQ9J3NoaXBtZW50LXRleHQnPmVudGVyIHlvdXIgPGJyPjxzcGFuPnNoaXBwaW5nIGRldGFpbHM8L3NwYW4+PC9wPlwiXG4gICAgKTtcbiAgICBjb250YWluZXIuZmluZChcIj46bnRoLWNoaWxkKDMpXCIpLmFmdGVyKG5ld0VsZW1lbnQpO1xuXG4gICAgLy8gQWRkZWQgaW1hZ2Ugb24gYWNjb3VudCBwYWdlXG4gICAgY29uc3QgYWNjb3VudFBhZ2VFbGVtZW50ID0gJChcIi53b29jb21tZXJjZS1hY2NvdW50ICNwYWdlXCIpO1xuICAgIGNvbnN0IG5ld0FjY291bnRQYWdlRWxlbWVudCA9ICQoXG4gICAgICAgICc8aW1nIGNsYXNzPVwiYWNjb3VudC1iYW5uZXItaW1hZ2VcIiBzcmM9XCIvd3AtY29udGVudC90aGVtZXMva2lyZ28tdGhlbWUvYXNzZXRzL2ltYWdlcy9hY2NvdW50L3NpZ24taW4tYmFubmVyLmpwZ1wiIGFsdD1cIkJhbm5lciBJbWFnZVwiIC8+J1xuICAgICk7XG4gICAgaWYgKCEkKFwiYm9keS53b29jb21tZXJjZS1wYWdlXCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBiYW5uZXIgaW1hZ2Ugd2hlbiBsb2dnZWQgaW5cbiAgICAgICAgYWNjb3VudFBhZ2VFbGVtZW50LmZpbmQoXCI+Om50aC1jaGlsZCgxKVwiKS5hZnRlcihuZXdBY2NvdW50UGFnZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vIEtlZXAgZnVsbCBoZWlnaHQgd2hlbiBsb2dnZWQgaW5cbiAgICAgICAgJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLCAucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb25cIlxuICAgICAgICApLmNzcyhcImhlaWdodFwiLCBcImNhbGMoMTAwdmggLSAyNTBweClcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHRcbiAgICBpZiAoISQoXCJib2R5Lndvb2NvbW1lcmNlLWFjY291bnQubG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIGNvbnN0IHNpZ25JblRleHRFbGVtZW50ID0gJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2UgLndvb2NvbW1lcmNlIGgyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2lnbkluTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgICAgICBzaWduSW5UZXh0RWxlbWVudC50ZXh0KHNpZ25Jbk5ld1RleHQpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0IG9uIFJlZ2lzdGVyXG4gICAgY29uc3QgcmVnaXN0ZXJUZXh0RWxlbWVudCA9ICQoXCIucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb24gaDJcIik7XG4gICAgY29uc3QgcmVnaXN0ZXJOZXdUZXh0ID0gXCJjcmVhdGUgYW4gYWNjb3VudFwiO1xuICAgIHJlZ2lzdGVyVGV4dEVsZW1lbnQudGV4dChyZWdpc3Rlck5ld1RleHQpO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIEJ1dHRvbiBUaXRsZSB0ZXh0XG4gICAgY29uc3Qgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLWxvZ2luIC53b29jb21tZXJjZS1mb3JtLWxvZ2luX19zdWJtaXRcIlxuICAgICk7XG4gICAgY29uc3Qgc2lnbkluQnV0dG9uTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgIHNpZ25JblRleHRCdXR0b25FbGVtZW50LnRleHQoc2lnbkluQnV0dG9uTmV3VGV4dCk7XG5cbiAgICAvLyBIaWRlIGZvb3RlciB3aGVuIHVzZXIgbG9nb3V0IGFuZCBzaG93IHdoZW4gbG9naW4gaW5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1hY2NvdW50XCIpKSB7XG4gICAgICAgICQoXCIuZm9vdGVyLXNlY3Rpb25cIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIGlmICgkKFwiYm9keS53b29jb21tZXJjZS1hY2NvdW50XCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vICAgICAkKFwiZm9vdGVyLXNlY3Rpb25cIikuc2hvdygpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyBsb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzIG5hbWUgXCJ3b292ci12YXJpYXRpb24tbmFtZVwiXG4gICAgJChcIi53b292ci12YXJpYXRpb24tbmFtZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdvcmRzID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IG5ld1RleHQgPSBcIlwiO1xuXG4gICAgICAgIGlmICh3b3Jkcy5pbmNsdWRlcyhcIkV4dHJhXCIpKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIG5ld1RleHQgPSBcIlhcIiArIGxhc3RXb3JkLmNoYXJBdCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbmV3VGV4dCA9IGxhc3RXb3JkLmNoYXJBdCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykudGV4dChuZXdUZXh0LnRvVXBwZXJDYXNlKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gTW92ZSBkaXNhYmxlZCBzaXplIHZhcmlhbnRzIGZyb20gdGhlaXIgc3RhZ2luZyBkaXYgaW50byB0aGUgLndvb3ZyLXZhcmlhdGlvbnNcbiAgICAvLyBmbGV4IGNvbnRhaW5lciwgdGhlbiBzb3J0IGFsbCBzaXplIGJ1dHRvbnMgaW4gdGhlIGNhbm9uaWNhbCBvcmRlci5cbiAgICB2YXIgc2l6ZU9yZGVyID0gW1wiWFNcIiwgXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiXTtcblxuICAgICQoXCIua2lyZ28tZGlzYWJsZWQtc3RhZ2luZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRzdGFnaW5nID0gJCh0aGlzKTtcbiAgICAgICAgLy8gLndvb3ZyLXZhcmlhdGlvbnMgaXMgdGhlIGltbWVkaWF0ZWx5IHByZWNlZGluZyBzaWJsaW5nIG9mIHRoZSBzdGFnaW5nIGRpdlxuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICRzdGFnaW5nLnByZXYoXCIud29vdnItdmFyaWF0aW9uc1wiKTtcbiAgICAgICAgaWYgKCEkY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2s6IGxvb2sgZm9yIGl0IGluIHRoZSBuZWFyZXN0IGNvbW1vbiBhbmNlc3RvclxuICAgICAgICAgICAgJGNvbnRhaW5lciA9ICRzdGFnaW5nLmNsb3Nlc3QoXCIuY2FydCwgLnZhcmlhdGlvbnNfZm9ybVwiKS5maW5kKFwiLndvb3ZyLXZhcmlhdGlvbnNcIikuZmlyc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISRjb250YWluZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgLy8gTW92ZSBkaXNhYmxlZCBidXR0b25zIGludG8gdGhlIGZsZXggY29udGFpbmVyXG4gICAgICAgICRzdGFnaW5nLmZpbmQoXCIud29vdnItdmFyaWF0aW9uLWRpc2FibGVkXCIpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuICAgICAgICAkc3RhZ2luZy5yZW1vdmUoKTtcblxuICAgICAgICAvLyBTb3J0IGFsbCB2YXJpYXRpb24gYnV0dG9ucyAoZW5hYmxlZCArIGRpc2FibGVkKSBieSBjYW5vbmljYWwgc2l6ZSBvcmRlclxuICAgICAgICB2YXIgJGl0ZW1zID0gJGNvbnRhaW5lci5maW5kKFwiLndvb3ZyLXZhcmlhdGlvbltkYXRhLWlkXVwiKTtcbiAgICAgICAgdmFyIHNvcnRlZCA9ICRpdGVtcy50b0FycmF5KCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGFOYW1lID0gJChhKS5maW5kKFwiLndvb3ZyLXZhcmlhdGlvbi1uYW1lXCIpLnRleHQoKS50cmltKCk7XG4gICAgICAgICAgICB2YXIgYk5hbWUgPSAkKGIpLmZpbmQoXCIud29vdnItdmFyaWF0aW9uLW5hbWVcIikudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBhSWR4ID0gc2l6ZU9yZGVyLmluZGV4T2YoYU5hbWUpO1xuICAgICAgICAgICAgdmFyIGJJZHggPSBzaXplT3JkZXIuaW5kZXhPZihiTmFtZSk7XG4gICAgICAgICAgICBpZiAoYUlkeCA9PT0gLTEpIGFJZHggPSA5OTk7XG4gICAgICAgICAgICBpZiAoYklkeCA9PT0gLTEpIGJJZHggPSA5OTk7XG4gICAgICAgICAgICByZXR1cm4gYUlkeCAtIGJJZHg7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHNvcnRlZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICAgICQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2hlY2tvdXRcIikgJiZcbiAgICAgICAgISQoXCJib2R5Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2Utb3JkZXItcmVjZWl2ZWRcIilcbiAgICApIHtcbiAgICAgICAgY29uc3QgJGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IgPSAkKFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpO1xuICAgICAgICBjb25zdCAkY2hlY2tvdXROZXN0ZWRCdXR0b24gPSAkKFwiI3BsYWNlX29yZGVyXCIpO1xuXG4gICAgICAgIGlmICgkY2hlY2tvdXRCdXR0b25BbmNlc3Rvci5sZW5ndGggJiYgJGNoZWNrb3V0TmVzdGVkQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNoZWNrb3V0TmVzdGVkQnV0dG9uLmFwcGVuZFRvKCRjaGVja291dEJ1dHRvbkFuY2VzdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXRGaWVsZHMgPSAkKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzIC52YWxpZGF0ZS1yZXF1aXJlZCBpbnB1dFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgY29uc3QgJGNhcnRCdXR0b25BbmNlc3RvciA9ICQoXCIud29vY29tbWVyY2UtY2FydCAud29vY29tbWVyY2VcIik7XG4gICAgICAgIGNvbnN0ICRjYXJ0TmVzdGVkQnV0dG9uID0gJChcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b25cIik7XG5cbiAgICAgICAgaWYgKCRjYXJ0QnV0dG9uQW5jZXN0b3IubGVuZ3RoICYmICRjYXJ0TmVzdGVkQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNhcnROZXN0ZWRCdXR0b24uYXBwZW5kVG8oJGNhcnRCdXR0b25BbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIi9jYXJ0L1wiKSA+IC0xKSB7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgJChcIi5kdXBsaWNhdGUtZWxlbWVudHNcIikuYXBwZW5kVG8oXG4gICAgICAgICQoXCIud29vY29tbWVyY2UtcHJvZHVjdC1kZXRhaWxzX19zaG9ydC1kZXNjcmlwdGlvblwiKS5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICk7XG5cbiAgICBjb25zdCB3b3cgPSBuZXcgV09XKCk7XG4gICAgd293LmluaXQoKTtcblxuICAgICQoXG4gICAgICAgIFwiYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAuc3VtbWFyeS5lbnRyeS1zdW1tYXJ5LCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC53b29jb21tZXJjZS1UYWJzLXBhbmVsLCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0ICNyZXZpZXdzXCJcbiAgICApLmFkZENsYXNzKFwid293IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCIpO1xuXG4gICAgLy8gRGlzYWJsZSB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGNhcnQgaWNvblxuICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikub2ZmKFwiY2xpY2tcIik7XG5cbiAgICBpZiAoISQoXCJib2R5XCIpLmhhc0NsYXNzKFwiLndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhcnQgcGFnZSB3aGVuIHRoZXkgY2xpY2sgb24gdGhlIGNhcnQgaWNvblxuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0LCAueG9vLXdzYy1zYy1jb250XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhcnRcIjtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWRkIHRvIGNhcnQgYnV0dG9uIG92ZXJyaWRlcyB0byBsZXQgbm9ybWFsIFdvb0NvbW1lcmNlIGJlaGF2aW9yIHdvcmtcbiAgICAvLyAkKFwiYm9keS5zaW5nbGUtcHJvZHVjdCAud3BjYm4tYnRuLXNpbmdsZS5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLm9mZihcbiAgICAvLyAgICAgXCJjbGlja1wiXG4gICAgLy8gKTtcblxuICAgIC8vICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIFwiLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIik7XG5cbiAgICAkKFwiYm9keS5zaW5nbGUtcHJvZHVjdCAuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXJ0XCI7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH0pO1xuXG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikudGV4dChcbiAgICAgICAgXCJBZGQgdG8gQ2hlY2tvdXRcIlxuICAgICk7XG5cbiAgICAvLyBUcmFjayBpZiB3ZSBzaG91bGQgcmVmcmVzaCBhZnRlciBtb2RhbCBjbG9zZVxuICAgIGxldCBzaG91bGRSZWZyZXNoQ2FydCA9IGZhbHNlO1xuXG4gICAgLy8gQ2xvc2UgbW9kYWwgYWZ0ZXIgYWRkIHRvIGNhcnQgaXMgY29tcGxldGVkXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbihcbiAgICAgICAgXCJhZGRlZF90b19jYXJ0XCIsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCwgZnJhZ21lbnRzLCBjYXJ0X2hhc2gsIGJ1dHRvbikge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJ1dHRvbiB0aGF0IHRyaWdnZXJlZCB0aGUgYWRkIHRvIGNhcnQgaXMgaW5zaWRlIG91ciBtb2RhbFxuICAgICAgICAgICAgaWYgKCQoYnV0dG9uKS5jbG9zZXN0KFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGZsYWcgdG8gcmVmcmVzaCBjYXJ0IHBhZ2UgaWYgdXNlciBpcyBvbiBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJlZnJlc2hDYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gSGFuZGxlIG1vZGFsIGNsb3NlIGV2ZW50IHRvIHJlZnJlc2ggY2FydCBwYWdlXG4gICAgJChkb2N1bWVudCkub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkUmVmcmVzaENhcnQgJiYgJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgc2hvdWxkUmVmcmVzaENhcnQgPSBmYWxzZTsgLy8gUmVzZXQgZmxhZ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1zaG9wIGxpLnByb2R1Y3QgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIC5zaG9wLWFkZC10by1jYXJ0LW1vZGFsIC5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uLndwLWVsZW1lbnQtYnV0dG9uXCJcbiAgICApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5zaG9wLWFkZC10by1jYXJ0LW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICB9KTtcblxuICAgICQoXCIucHJvZHVjdCAucHNmdy1zb2NpYWwtd3JhcFwiKS5hcHBlbmRUbyhcbiAgICAgICAgXCIjcHJvZHVjdFNoYXJlSWNvbnMgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHlcIlxuICAgICk7XG5cbiAgICAkKFwiLm5hdmJhci1hZG1pbi1kZXNrdG9wIHN2Z1wiKS5hcHBlbmRUbyhcIi5uYXZiYXItYWRtaW4gLnhvby1lbC1hY3Rpb24tc2NcIik7XG5cbiAgICAvLyBTaGlmdCBjaGVja291dCBidXR0b24gaW4gcmlnaHQgY29sb3VtIG9mIGRlc2t0b3BcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDEwMDApIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b24uYnV0dG9uXCIpLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIuY2FydC1jb2xsYXRlcmFsc1wiXG4gICAgICAgICk7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLmFsdGVybmF0ZS1jYXJ0LXByb2R1Y3RzXCIpLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld1wiXG4gICAgICAgICk7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI3BsYWNlX29yZGVyXCIpLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld1wiXG4gICAgICAgICk7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld1wiKS5wcmVwZW5kKFxuICAgICAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3X2hlYWRpbmdcIilcbiAgICAgICAgKTtcbiAgICAgICAgJChcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwid29vY29tbWVyY2UtZGVza3RvcC1jb2wtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLXJpZ2h0XCI+PC9kaXY+YFxuICAgICAgICApLmFwcGVuZFRvKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlclwiKTtcbiAgICAgICAgJChcbiAgICAgICAgICAgIGAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIHAud29vY29tbWVyY2Utbm90aWNlLFxuICAgICAgICAgICAgICAgICAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIHVsLndvb2NvbW1lcmNlLW9yZGVyLW92ZXJ2aWV3LFxuICAgICAgICAgICAgICAgICAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyID4gcGBcbiAgICAgICAgKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2UtZGVza3RvcC1jb2wtbGVmdFwiXG4gICAgICAgICk7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2UtY3VzdG9tZXItZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2Utb3JkZXItZGV0YWlsc2BcbiAgICAgICAgKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2UtZGVza3RvcC1jb2wtcmlnaHRcIlxuICAgICAgICApO1xuICAgIH1cblxuICAgICQoXCIud29vY29tbWVyY2Utc2hvcCAucHJvZHVjdCBhLndvb2NvbW1lcmNlLUxvb3BQcm9kdWN0LWxpbmtcIilcbiAgICAgICAgLmNvbnRlbnRzKClcbiAgICAgICAgLnVud3JhcCgpXG4gICAgICAgIC53cmFwKFwiPGRpdj48L2Rpdj5cIik7XG5cblxuXG4gICAgJChcIi5uYXYtcHJvZHVjdC1jYXJvdXNlbFwiKS5mbGlja2l0eSh7XG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCAkcHJvZHVjdCA9ICQoXCIud29vY29tbWVyY2Utc2hvcCAucHJvZHVjdC50eXBlLXByb2R1Y3QucG9zdC0xNDA2XCIpO1xuICAgIC8vIGlmICgkcHJvZHVjdC5sZW5ndGgpIHtcbiAgICAvLyAgICAgJHByb2R1Y3QuYXR0cihcImlkXCIsIFwic3VtbWVyQ29sbGVjdGlvbklkXCIpO1xuICAgIC8vIH1cblxuICAgICQoXCIuaG9tZS1hcnJvd1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBjYXJ0IGNvdW50IG9uIHBhZ2UgbG9hZCB2aWEgQUpBWCAod29ya3Mgd2l0aCBDbG91ZGZsYXJlIGNhY2hpbmcpXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FydENvdW50KCkge1xuXG4gICAgICAgIC8vIFRyeSBXb29Db21tZXJjZSBmcmFnbWVudHMgZmlyc3RcbiAgICAgICAgaWYgKHR5cGVvZiB3Y19hZGRfdG9fY2FydF9wYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHdjX2FkZF90b19jYXJ0X3BhcmFtcy53Y19hamF4X3VybCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHdjX2FkZF90b19jYXJ0X3BhcmFtcy53Y19hamF4X3VybC50b1N0cmluZygpLnJlcGxhY2UoJyUlZW5kcG9pbnQlJScsICdnZXRfcmVmcmVzaGVkX2ZyYWdtZW50cycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZnJhZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5mcmFnbWVudHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtleSkucmVwbGFjZVdpdGgodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgdG8gUkVTVCBBUEkgaWYgZnJhZ21lbnRzIGZhaWxcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRDb3VudFZpYVJFU1QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVzZSBSRVNUIEFQSSBpZiBXb29Db21tZXJjZSBwYXJhbXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgbG9hZENhcnRDb3VudFZpYVJFU1QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZ1bmN0aW9uIHVzaW5nIFJFU1QgQVBJXG4gICAgZnVuY3Rpb24gbG9hZENhcnRDb3VudFZpYVJFU1QoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvd3AtanNvbi9raXJnby92MS9jYXJ0LWNvdW50JyxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIFdvb0NvbW1lcmNlIGZyYWdtZW50IHJlZnJlc2ggd2l0aCB0aGUgY291bnQgZGF0YVxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkudHJpZ2dlcignd2NfZnJhZ21lbnRfcmVmcmVzaCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNhcnQgY291bnQgb24gcGFnZSBsb2FkXG4gICAgdXBkYXRlQ2FydENvdW50KCk7XG5cbiAgICAvLyBVcGRhdGUgY2FydCBjb3VudCBkeW5hbWljYWxseSB3aGVuIGl0ZW1zIGFyZSBhZGRlZC9yZW1vdmVkXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignYWRkZWRfdG9fY2FydCByZW1vdmVkX2Zyb21fY2FydCB1cGRhdGVkX2NhcnRfdG90YWxzIHdjX2ZyYWdtZW50c19yZWZyZXNoZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlQ2FydENvdW50KCk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvZGlzdC9qcy9hcHBcIjogMCxcblx0XCJzdHlsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIm5hdmJhciIsImNsYXNzTmFtZSIsIndpbmRvdyIsIm9uIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwic2Nyb2xsIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwiYXV0b1BsYXkiLCIkYmxvZ0Nhcm91c2VsIiwicHJldk5leHRCdXR0b25zIiwiZnJlZVNjcm9sbCIsImNvbnRhaW4iLCJjZWxsQWxpZ24iLCJwYWdlRG90cyIsIiRnYWxsZXJ5Q2Fyb3VzZWwiLCJ0b2dnbGUiLCJlbGVtZW50IiwibmV3VGV4dCIsInRleHQiLCJyZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJvcmlnaW5hbFRleHQiLCJ0ZXh0Q29udGVudCIsInF1b3RlZFRleHQiLCJjb25jYXQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsIiRpbnB1dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3VycmVudFZhbCIsInBhcnNlSW50IiwidmFsIiwibmV3VmFsIiwidHJpZ2dlciIsImF0dHIiLCJpbnB1dEVsZW1lbnRzT25DaGVja291dCIsImlucHV0RWxlbWVudHNPblNpZ25JbiIsImlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MiLCJpbnB1dEVsZW1lbnRzT25SZWdpc3RlciIsInJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCIsImlucHV0RWxlbWVudCIsImVhY2giLCJsYWJlbFZhbCIsImlucHV0TmFtZSIsImlucHV0UGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJuZXdFbGVtZW50IiwiYWZ0ZXIiLCJhY2NvdW50UGFnZUVsZW1lbnQiLCJuZXdBY2NvdW50UGFnZUVsZW1lbnQiLCJjc3MiLCJzaWduSW5UZXh0RWxlbWVudCIsInNpZ25Jbk5ld1RleHQiLCJyZWdpc3RlclRleHRFbGVtZW50IiwicmVnaXN0ZXJOZXdUZXh0Iiwic2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQiLCJzaWduSW5CdXR0b25OZXdUZXh0IiwiaGlkZSIsIndvcmRzIiwidHJpbSIsInNwbGl0IiwiaW5jbHVkZXMiLCJsYXN0V29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2l6ZU9yZGVyIiwiJHN0YWdpbmciLCIkY29udGFpbmVyIiwicHJldiIsImZpcnN0IiwiYXBwZW5kVG8iLCJyZW1vdmUiLCIkaXRlbXMiLCJzb3J0ZWQiLCJ0b0FycmF5Iiwic29ydCIsImEiLCJiIiwiYU5hbWUiLCJiTmFtZSIsImFJZHgiLCJpbmRleE9mIiwiYklkeCIsImNoZWNrUmVxdWlyZWRGaWVsZHMiLCJhbGxWYWxpZCIsInJlcXVpcmVkSW5wdXRGaWVsZHMiLCJpbnB1dFZhbCIsImJ1dHRvbiIsInByb3AiLCIkY2hlY2tvdXRCdXR0b25BbmNlc3RvciIsIiRjaGVja291dE5lc3RlZEJ1dHRvbiIsIiRjYXJ0QnV0dG9uQW5jZXN0b3IiLCIkY2FydE5lc3RlZEJ1dHRvbiIsImxvY2F0aW9uIiwiaHJlZiIsImV2ZW50IiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJ3b3ciLCJXT1ciLCJpbml0Iiwib2ZmIiwic2hvdWxkUmVmcmVzaENhcnQiLCJib2R5IiwiZnJhZ21lbnRzIiwiY2FydF9oYXNoIiwibW9kYWwiLCJyZWxvYWQiLCJzY3JlZW4iLCJ3aWR0aCIsInByZXBlbmQiLCJjb250ZW50cyIsInVud3JhcCIsIndyYXAiLCJhZGFwdGl2ZUhlaWdodCIsImhpc3RvcnkiLCJiYWNrIiwidXBkYXRlQ2FydENvdW50Iiwid2NfYWRkX3RvX2NhcnRfcGFyYW1zIiwid2NfYWpheF91cmwiLCJhamF4IiwidXJsIiwidG9TdHJpbmciLCJyZXBsYWNlIiwidHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwia2V5IiwidmFsdWUiLCJyZXBsYWNlV2l0aCIsImVycm9yIiwieGhyIiwic3RhdHVzIiwibG9hZENhcnRDb3VudFZpYVJFU1QiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=