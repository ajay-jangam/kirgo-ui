/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

/**
 * Skip the side cart's page-load refresh when the bag is empty.
 *
 * WooCommerce sets the woocommerce_items_in_cart cookie when the first item
 * goes in and removes it when the bag empties, so without it the refresh can
 * only answer "0", which the cached page already shows. Registered at top
 * level because the side cart sends its refresh 200 ms after DOM ready.
 */
jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (String(options.url).indexOf("wc-ajax=xoo_wsc_refresh_fragments") > -1 && document.cookie.indexOf("woocommerce_items_in_cart=") === -1) {
    jqXHR.abort();
  }
});
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

  // Go to the cart only once the item is saved. The side cart fires
  // added_to_cart after its add-to-cart request succeeds; a fixed timer
  // here used to navigate away mid-request, so a first-time shopper lost
  // the session cookie and landed on an empty cart.
  $(document.body).on("added_to_cart", function (event, fragments, cart_hash, button) {
    if ($("body").hasClass("single-product") && $(button).hasClass("single_add_to_cart_button")) {
      window.location.href = window.wc_add_to_cart_params && wc_add_to_cart_params.cart_url || "/cart/";
    }
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

  // No page-load call here: the side cart's own page-load refresh returns
  // the same fragments (span.cart-count included). Listening to
  // wc_fragments_refreshed is also gone, because the side cart fires it
  // after that refresh and re-asking made a third identical request.
  // added_to_cart is not listened to either: the side cart already applies
  // the fragments from its add-to-cart response, and on product pages the
  // re-ask was cut off by the redirect to the cart.
  // wc_cart_emptied covers removing the last item on the cart page, where
  // WooCommerce skips updated_cart_totals and the header kept the old count.
  $(document.body).on('removed_from_cart updated_cart_totals wc_cart_emptied', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL3Nhc3MvYXBwLnNjc3M/YzBlMyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNraXAgdGhlIHNpZGUgY2FydCdzIHBhZ2UtbG9hZCByZWZyZXNoIHdoZW4gdGhlIGJhZyBpcyBlbXB0eS5cbiAqXG4gKiBXb29Db21tZXJjZSBzZXRzIHRoZSB3b29jb21tZXJjZV9pdGVtc19pbl9jYXJ0IGNvb2tpZSB3aGVuIHRoZSBmaXJzdCBpdGVtXG4gKiBnb2VzIGluIGFuZCByZW1vdmVzIGl0IHdoZW4gdGhlIGJhZyBlbXB0aWVzLCBzbyB3aXRob3V0IGl0IHRoZSByZWZyZXNoIGNhblxuICogb25seSBhbnN3ZXIgXCIwXCIsIHdoaWNoIHRoZSBjYWNoZWQgcGFnZSBhbHJlYWR5IHNob3dzLiBSZWdpc3RlcmVkIGF0IHRvcFxuICogbGV2ZWwgYmVjYXVzZSB0aGUgc2lkZSBjYXJ0IHNlbmRzIGl0cyByZWZyZXNoIDIwMCBtcyBhZnRlciBET00gcmVhZHkuXG4gKi9cbmpRdWVyeS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uIChvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKSB7XG4gICAgaWYgKFxuICAgICAgICBTdHJpbmcob3B0aW9ucy51cmwpLmluZGV4T2YoXCJ3Yy1hamF4PXhvb193c2NfcmVmcmVzaF9mcmFnbWVudHNcIikgPiAtMSAmJlxuICAgICAgICBkb2N1bWVudC5jb29raWUuaW5kZXhPZihcIndvb2NvbW1lcmNlX2l0ZW1zX2luX2NhcnQ9XCIpID09PSAtMVxuICAgICkge1xuICAgICAgICBqcVhIUi5hYm9ydCgpO1xuICAgIH1cbn0pO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogTmF2YmFyXG4gICAgICovXG4gICAgLy8gTmF2YmFyIE1lbnVcblxuICAgICQoXCIubmF2YmFyLWhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlLndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzRml4ZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgdGhlIGNsYXNzIG5hbWUgdG8gdG9nZ2xlXG4gICAgdmFyIG5hdmJhciA9ICQoXCIubmF2YmFyXCIpO1xuICAgIHZhciBjbGFzc05hbWUgPSBcInNjcm9sbGVkLXNjcmVlblwiO1xuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhclxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gMTApIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGY4XCIgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSB0aGUgY2xhc3Mgb24gdGhlIG5hdmJhciB3aXRoIGFuaW1hdGlvblxuICAgICAgICAgICAgbmF2YmFyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2Nyb2xsID0gJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChzY3JvbGwgPiAxMCAmJiAhJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKSB8fFxuICAgICAgICAgICAgKHNjcm9sbCA9PT0gMCAmJiAkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcIi5hY3RpdmVcIikudG9nZ2xlQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBIb21lIFBhZ2VcbiAgICAgKi9cblxuICAgIC8vIEhvbWUgU2xpZGVyXG5cbiAgICBsZXQgJGhvbWVDYXJvdXNlbCA9ICQoXCIuaG9tZS1jYXJvdXNlbFwiKTtcblxuICAgICRob21lQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBhdXRvUGxheTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIEJsb2cgU2xpZGVyXG5cbiAgICBsZXQgJGJsb2dDYXJvdXNlbCA9ICQoXCIuYmxvZy1jYXJvdXNlbFwiKTtcblxuICAgICRibG9nQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBmcmVlU2Nyb2xsOiB0cnVlLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgICAgICBjZWxsQWxpZ246IFwiY2VudGVyXCIsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBQcm9kdWN0IFBhZ2VcbiAgICAgKi9cbiAgICAkKFwiLndvb2NvbW1lcmNlLVJldmlld3MgLmNvbW1lbnRsaXN0XCIpLmZsaWNraXR5KHtcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBjZWxsQWxpZ246IFwibGVmdFwiLFxuICAgIH0pO1xuXG4gICAgLy8gR2FsbGVyeSBTbGlkZXJcblxuICAgIGxldCAkZ2FsbGVyeUNhcm91c2VsID0gJChcIi5zaG9wLWdhbGxlcnlcIik7XG5cbiAgICAkZ2FsbGVyeUNhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBQYWdlXG4gICAgICoqL1xuXG4gICAgLy8gVG9nZ2xlIFJldmlldyBGb3JtXG4gICAgJChcIiNyZXZpZXdfZm9ybSAuY29tbWVudC1yZXBseS10aXRsZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UgI3Jldmlld19mb3JtIC5jb21tZW50LWZvcm1cIikudG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFJldmlldyBUaXRsZSB0ZXh0XG4gICAgY29uc3QgZWxlbWVudCA9ICQoXCIjcmVwbHktdGl0bGVcIik7XG4gICAgY29uc3QgbmV3VGV4dCA9IFwic2VuZCB5b3VyIHJldmlld1wiO1xuICAgIGVsZW1lbnQudGV4dChuZXdUZXh0KTtcblxuICAgIC8vIEFkZCBkb3VibGUgcW91dGVzIHRvIFJldmlld3NcbiAgICBjb25zdCByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXNjcmlwdGlvbiBwXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQgPSByZXZpZXdEZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgcXVvdGVkVGV4dCA9IGBcIiR7b3JpZ2luYWxUZXh0fVwiYDtcbiAgICAgICAgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IHF1b3RlZFRleHQ7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBXb29Db21tZXJjZSBub3RpY2VzIGFmdGVyIDUgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLW5vdGljZXMtd3JhcHBlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICB9LCA1MDAwKTtcblxuICAgIC8vIFJlbW92ZSBXb29Db21tZXJjZSBub3RpY2VzIHdoZW4gY2xpY2tlZFxuICAgICQoZG9jdW1lbnQpLm9uKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLW1lc3NhZ2UsIC53b29jb21tZXJjZS1lcnJvciwgLndvb2NvbW1lcmNlLWluZm9cIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNhcnQgcXVhbnRpdHkgYnUgY2xpY2xpbmcgcGx1cy9taW51cyBvbiBDYXJ0IHBhZ2VcbiAgICAkKFwiLnF1YW50aXR5XCIpLm9uKFwiY2xpY2tcIiwgXCIucGx1cywgLm1pbnVzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGlucHV0IGZpZWxkIGFuZCBjdXJyZW50IHF1YW50aXR5IHZhbHVlIGZvciB0aGlzIGNhcnQgaXRlbVxuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5jbG9zZXN0KFwiLnF1YW50aXR5XCIpLmZpbmQoXCJpbnB1dC5xdHlcIiksXG4gICAgICAgICAgICBjdXJyZW50VmFsID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpKTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIG5ldyBxdWFudGl0eSB2YWx1ZSBiYXNlZCBvbiB0aGUgYnV0dG9uIGNsaWNrZWRcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJwbHVzXCIpKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gY3VycmVudFZhbCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gY3VycmVudFZhbCA+IDEgPyBjdXJyZW50VmFsIC0gMSA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IGZpZWxkIHZhbHVlIGFuZCB0cmlnZ2VyIHRoZSBcImNoYW5nZVwiIGV2ZW50IHRvIHVwZGF0ZSB0aGUgY2FydFxuICAgICAgICAkaW5wdXQudmFsKG5ld1ZhbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFJlcGxhY2UgcGxhY2Vob2xkZXIgbmFtZSBvZiBjb3Vwb24gaW5wdXRcbiAgICAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNvdXBvbiAuaW5wdXQtdGV4dFwiKS5hdHRyKFxuICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgIFwiZW50ZXIgY291cG9uIGNvZGVcIlxuICAgICk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBsYWJlbHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwbGFjZWhvbGRlcnNcblxuICAgIGxldCBpbnB1dEVsZW1lbnRzT25DaGVja291dCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsLCAud29vY29tbWVyY2Utc2hpcHBpbmctZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzT25TaWduSW4gPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLXJvdyBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFkZHJlc3MtZmllbGRzX19maWVsZC13cmFwcGVyIGxhYmVsXCJcbiAgICApO1xuICAgIGxldCBpbnB1dEVsZW1lbnRzT25SZWdpc3RlciA9ICQoXCIuY3VzdG9tLXJlZ2lzdHJhdGlvbiBsYWJlbFwiKTtcblxuICAgIGNvbnN0IHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGxhYmVsVmFsID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICBsZXQgaW5wdXROYW1lID0gJCh0aGlzKS5hdHRyKFwiZm9yXCIpO1xuICAgICAgICAgICAgbGV0IGlucHV0UGxhY2Vob2xkZXIgPSAkKFwiI1wiICsgaW5wdXROYW1lKS5hdHRyKFwicGxhY2Vob2xkZXJcIik7XG4gICAgICAgICAgICBpZiAobGFiZWxWYWwgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIGlucHV0TmFtZSkuYXR0cihcInBsYWNlaG9sZGVyXCIsIGxhYmVsVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQpO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25TaWduSW4pO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzT25SZWdpc3Rlcik7XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MpO1xuXG4gICAgLy8gYWRkZWQgU2hpcG1lbnQgdGV4dCBvbiBjaGVja291dCBwYWdlXG4gICAgY29uc3QgY29udGFpbmVyID0gJChcIi53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gJChcbiAgICAgICAgXCI8cCBpZD0nc2hpcG1lbnQtdGV4dCc+ZW50ZXIgeW91ciA8YnI+PHNwYW4+c2hpcHBpbmcgZGV0YWlsczwvc3Bhbj48L3A+XCJcbiAgICApO1xuICAgIGNvbnRhaW5lci5maW5kKFwiPjpudGgtY2hpbGQoMylcIikuYWZ0ZXIobmV3RWxlbWVudCk7XG5cbiAgICAvLyBBZGRlZCBpbWFnZSBvbiBhY2NvdW50IHBhZ2VcbiAgICBjb25zdCBhY2NvdW50UGFnZUVsZW1lbnQgPSAkKFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2VcIik7XG4gICAgY29uc3QgbmV3QWNjb3VudFBhZ2VFbGVtZW50ID0gJChcbiAgICAgICAgJzxpbWcgY2xhc3M9XCJhY2NvdW50LWJhbm5lci1pbWFnZVwiIHNyYz1cIi93cC1jb250ZW50L3RoZW1lcy9raXJnby10aGVtZS9hc3NldHMvaW1hZ2VzL2FjY291bnQvc2lnbi1pbi1iYW5uZXIuanBnXCIgYWx0PVwiQmFubmVyIEltYWdlXCIgLz4nXG4gICAgKTtcbiAgICBpZiAoISQoXCJib2R5Lndvb2NvbW1lcmNlLXBhZ2VcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGJhbm5lciBpbWFnZSB3aGVuIGxvZ2dlZCBpblxuICAgICAgICBhY2NvdW50UGFnZUVsZW1lbnQuZmluZChcIj46bnRoLWNoaWxkKDEpXCIpLmFmdGVyKG5ld0FjY291bnRQYWdlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gS2VlcCBmdWxsIGhlaWdodCB3aGVuIGxvZ2dlZCBpblxuICAgICAgICAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UsIC5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvblwiXG4gICAgICAgICkuY3NzKFwiaGVpZ2h0XCIsIFwiY2FsYygxMDB2aCAtIDI1MHB4KVwiKTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gVGl0bGUgdGV4dFxuICAgIGlmICghJChcImJvZHkud29vY29tbWVyY2UtYWNjb3VudC5sb2dnZWQtaW5cIikpIHtcbiAgICAgICAgY29uc3Qgc2lnbkluVGV4dEVsZW1lbnQgPSAkKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAjcGFnZSAud29vY29tbWVyY2UgaDJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaWduSW5OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgICAgIHNpZ25JblRleHRFbGVtZW50LnRleHQoc2lnbkluTmV3VGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHQgb24gUmVnaXN0ZXJcbiAgICBjb25zdCByZWdpc3RlclRleHRFbGVtZW50ID0gJChcIi5wYWdlLWlkLTIzNyAuY3VzdG9tLXJlZ2lzdHJhdGlvbiBoMlwiKTtcbiAgICBjb25zdCByZWdpc3Rlck5ld1RleHQgPSBcImNyZWF0ZSBhbiBhY2NvdW50XCI7XG4gICAgcmVnaXN0ZXJUZXh0RWxlbWVudC50ZXh0KHJlZ2lzdGVyTmV3VGV4dCk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIFNpZ24gSW4gQnV0dG9uIFRpdGxlIHRleHRcbiAgICBjb25zdCBzaWduSW5UZXh0QnV0dG9uRWxlbWVudCA9ICQoXG4gICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLWZvcm0tbG9naW4gLndvb2NvbW1lcmNlLWZvcm0tbG9naW5fX3N1Ym1pdFwiXG4gICAgKTtcbiAgICBjb25zdCBzaWduSW5CdXR0b25OZXdUZXh0ID0gXCJzaWduIGluXCI7XG4gICAgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQudGV4dChzaWduSW5CdXR0b25OZXdUZXh0KTtcblxuICAgIC8vIEhpZGUgZm9vdGVyIHdoZW4gdXNlciBsb2dvdXQgYW5kIHNob3cgd2hlbiBsb2dpbiBpblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWFjY291bnRcIikpIHtcbiAgICAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG5cbiAgICAgICAgLy8gaWYgKCQoXCJib2R5Lndvb2NvbW1lcmNlLWFjY291bnRcIikuaGFzQ2xhc3MoXCJsb2dnZWQtaW5cIikpIHtcbiAgICAgICAgLy8gICAgICQoXCJmb290ZXItc2VjdGlvblwiKS5zaG93KCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAkKFwiLmZvb3Rlci1zZWN0aW9uXCIpLmhpZGUoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgbmFtZSBcIndvb3ZyLXZhcmlhdGlvbi1uYW1lXCJcbiAgICAkKFwiLndvb3ZyLXZhcmlhdGlvbi1uYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd29yZHMgPSAkKHRoaXMpLnRleHQoKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgbmV3VGV4dCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHdvcmRzLmluY2x1ZGVzKFwiRXh0cmFcIikpIHtcbiAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbmV3VGV4dCA9IFwiWFwiICsgbGFzdFdvcmQuY2hhckF0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxhc3RXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBuZXdUZXh0ID0gbGFzdFdvcmQuY2hhckF0KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS50ZXh0KG5ld1RleHQudG9VcHBlckNhc2UoKSk7XG4gICAgfSk7XG5cbiAgICAvLyBNb3ZlIGRpc2FibGVkIHNpemUgdmFyaWFudHMgZnJvbSB0aGVpciBzdGFnaW5nIGRpdiBpbnRvIHRoZSAud29vdnItdmFyaWF0aW9uc1xuICAgIC8vIGZsZXggY29udGFpbmVyLCB0aGVuIHNvcnQgYWxsIHNpemUgYnV0dG9ucyBpbiB0aGUgY2Fub25pY2FsIG9yZGVyLlxuICAgIHZhciBzaXplT3JkZXIgPSBbXCJYU1wiLCBcIlNcIiwgXCJNXCIsIFwiTFwiLCBcIlhMXCJdO1xuXG4gICAgJChcIi5raXJnby1kaXNhYmxlZC1zdGFnaW5nXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHN0YWdpbmcgPSAkKHRoaXMpO1xuICAgICAgICAvLyAud29vdnItdmFyaWF0aW9ucyBpcyB0aGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHNpYmxpbmcgb2YgdGhlIHN0YWdpbmcgZGl2XG4gICAgICAgIHZhciAkY29udGFpbmVyID0gJHN0YWdpbmcucHJldihcIi53b292ci12YXJpYXRpb25zXCIpO1xuICAgICAgICBpZiAoISRjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjazogbG9vayBmb3IgaXQgaW4gdGhlIG5lYXJlc3QgY29tbW9uIGFuY2VzdG9yXG4gICAgICAgICAgICAkY29udGFpbmVyID0gJHN0YWdpbmcuY2xvc2VzdChcIi5jYXJ0LCAudmFyaWF0aW9uc19mb3JtXCIpLmZpbmQoXCIud29vdnItdmFyaWF0aW9uc1wiKS5maXJzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghJGNvbnRhaW5lci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAvLyBNb3ZlIGRpc2FibGVkIGJ1dHRvbnMgaW50byB0aGUgZmxleCBjb250YWluZXJcbiAgICAgICAgJHN0YWdpbmcuZmluZChcIi53b292ci12YXJpYXRpb24tZGlzYWJsZWRcIikuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG4gICAgICAgICRzdGFnaW5nLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIFNvcnQgYWxsIHZhcmlhdGlvbiBidXR0b25zIChlbmFibGVkICsgZGlzYWJsZWQpIGJ5IGNhbm9uaWNhbCBzaXplIG9yZGVyXG4gICAgICAgIHZhciAkaXRlbXMgPSAkY29udGFpbmVyLmZpbmQoXCIud29vdnItdmFyaWF0aW9uW2RhdGEtaWRdXCIpO1xuICAgICAgICB2YXIgc29ydGVkID0gJGl0ZW1zLnRvQXJyYXkoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgYU5hbWUgPSAkKGEpLmZpbmQoXCIud29vdnItdmFyaWF0aW9uLW5hbWVcIikudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBiTmFtZSA9ICQoYikuZmluZChcIi53b292ci12YXJpYXRpb24tbmFtZVwiKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgdmFyIGFJZHggPSBzaXplT3JkZXIuaW5kZXhPZihhTmFtZSk7XG4gICAgICAgICAgICB2YXIgYklkeCA9IHNpemVPcmRlci5pbmRleE9mKGJOYW1lKTtcbiAgICAgICAgICAgIGlmIChhSWR4ID09PSAtMSkgYUlkeCA9IDk5OTtcbiAgICAgICAgICAgIGlmIChiSWR4ID09PSAtMSkgYklkeCA9IDk5OTtcbiAgICAgICAgICAgIHJldHVybiBhSWR4IC0gYklkeDtcbiAgICAgICAgfSk7XG4gICAgICAgICQoc29ydGVkKS5hcHBlbmRUbygkY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgICAgJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jaGVja291dFwiKSAmJlxuICAgICAgICAhJChcImJvZHkud29vY29tbWVyY2UtY2hlY2tvdXRcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1vcmRlci1yZWNlaXZlZFwiKVxuICAgICkge1xuICAgICAgICBjb25zdCAkY2hlY2tvdXRCdXR0b25BbmNlc3RvciA9ICQoXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXRcIik7XG4gICAgICAgIGNvbnN0ICRjaGVja291dE5lc3RlZEJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgaWYgKCRjaGVja291dEJ1dHRvbkFuY2VzdG9yLmxlbmd0aCAmJiAkY2hlY2tvdXROZXN0ZWRCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkY2hlY2tvdXROZXN0ZWRCdXR0b24uYXBwZW5kVG8oJGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWlyZWRJbnB1dEZpZWxkcyA9ICQoXG4gICAgICAgICAgICBcIi5jaGVja291dC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHMgLnZhbGlkYXRlLXJlcXVpcmVkIGlucHV0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gJChcIiNwbGFjZV9vcmRlclwiKTtcblxuICAgICAgICBjaGVja1JlcXVpcmVkRmllbGRzKCk7XG4gICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja1JlcXVpcmVkRmllbGRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUmVxdWlyZWRGaWVsZHMoKSB7XG4gICAgICAgICAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWlyZWRJbnB1dEZpZWxkcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRWYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXRWYWwgfHwgaW5wdXRWYWwudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhbGxWYWxpZCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICBjb25zdCAkY2FydEJ1dHRvbkFuY2VzdG9yID0gJChcIi53b29jb21tZXJjZS1jYXJ0IC53b29jb21tZXJjZVwiKTtcbiAgICAgICAgY29uc3QgJGNhcnROZXN0ZWRCdXR0b24gPSAkKFwiLndvb2NvbW1lcmNlLWNhcnQgLmNoZWNrb3V0LWJ1dHRvblwiKTtcblxuICAgICAgICBpZiAoJGNhcnRCdXR0b25BbmNlc3Rvci5sZW5ndGggJiYgJGNhcnROZXN0ZWRCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkY2FydE5lc3RlZEJ1dHRvbi5hcHBlbmRUbygkY2FydEJ1dHRvbkFuY2VzdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiL2NhcnQvXCIpID4gLTEpIHtcbiAgICAgICAgJChcImEubmF2YmFyLWNhcnRcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcImEubmF2YmFyLWNhcnRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAkKFwiLmR1cGxpY2F0ZS1lbGVtZW50c1wiKS5hcHBlbmRUbyhcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1wcm9kdWN0LWRldGFpbHNfX3Nob3J0LWRlc2NyaXB0aW9uXCIpLnBhcmVudCgpLnBhcmVudCgpXG4gICAgKTtcblxuICAgIGNvbnN0IHdvdyA9IG5ldyBXT1coKTtcbiAgICB3b3cuaW5pdCgpO1xuXG4gICAgJChcbiAgICAgICAgXCJib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC5zdW1tYXJ5LmVudHJ5LXN1bW1hcnksIGJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgLndvb2NvbW1lcmNlLVRhYnMtcGFuZWwsIGJvZHkuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QgI3Jldmlld3NcIlxuICAgICkuYWRkQ2xhc3MoXCJ3b3cgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXBcIik7XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBjbGljayBldmVudCBvbiB0aGUgY2FydCBpY29uXG4gICAgJChcIi5uYXZiYXItY2FydCwgLnhvby13c2Mtc2MtY29udFwiKS5vZmYoXCJjbGlja1wiKTtcblxuICAgIGlmICghJChcImJvZHlcIikuaGFzQ2xhc3MoXCIud29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICAvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgY2FydCBwYWdlIHdoZW4gdGhleSBjbGljayBvbiB0aGUgY2FydCBpY29uXG4gICAgICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY2FydFwiO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhZGQgdG8gY2FydCBidXR0b24gb3ZlcnJpZGVzIHRvIGxldCBub3JtYWwgV29vQ29tbWVyY2UgYmVoYXZpb3Igd29ya1xuICAgIC8vICQoXCJib2R5LnNpbmdsZS1wcm9kdWN0IC53cGNibi1idG4tc2luZ2xlLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikub2ZmKFxuICAgIC8vICAgICBcImNsaWNrXCJcbiAgICAvLyApO1xuXG4gICAgLy8gJChkb2N1bWVudCkub2ZmKFwiY2xpY2tcIiwgXCIuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKTtcblxuICAgIC8vIEdvIHRvIHRoZSBjYXJ0IG9ubHkgb25jZSB0aGUgaXRlbSBpcyBzYXZlZC4gVGhlIHNpZGUgY2FydCBmaXJlc1xuICAgIC8vIGFkZGVkX3RvX2NhcnQgYWZ0ZXIgaXRzIGFkZC10by1jYXJ0IHJlcXVlc3Qgc3VjY2VlZHM7IGEgZml4ZWQgdGltZXJcbiAgICAvLyBoZXJlIHVzZWQgdG8gbmF2aWdhdGUgYXdheSBtaWQtcmVxdWVzdCwgc28gYSBmaXJzdC10aW1lIHNob3BwZXIgbG9zdFxuICAgIC8vIHRoZSBzZXNzaW9uIGNvb2tpZSBhbmQgbGFuZGVkIG9uIGFuIGVtcHR5IGNhcnQuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbihcbiAgICAgICAgXCJhZGRlZF90b19jYXJ0XCIsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCwgZnJhZ21lbnRzLCBjYXJ0X2hhc2gsIGJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLmhhc0NsYXNzKFwic2luZ2xlLXByb2R1Y3RcIikgJiZcbiAgICAgICAgICAgICAgICAkKGJ1dHRvbikuaGFzQ2xhc3MoXCJzaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XG4gICAgICAgICAgICAgICAgICAgICh3aW5kb3cud2NfYWRkX3RvX2NhcnRfcGFyYW1zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3Y19hZGRfdG9fY2FydF9wYXJhbXMuY2FydF91cmwpIHx8XG4gICAgICAgICAgICAgICAgICAgIFwiL2NhcnQvXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgJChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbCAud3BjYm4tYnRuLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIikudGV4dChcbiAgICAgICAgXCJBZGQgdG8gQ2hlY2tvdXRcIlxuICAgICk7XG5cbiAgICAvLyBUcmFjayBpZiB3ZSBzaG91bGQgcmVmcmVzaCBhZnRlciBtb2RhbCBjbG9zZVxuICAgIGxldCBzaG91bGRSZWZyZXNoQ2FydCA9IGZhbHNlO1xuXG4gICAgLy8gQ2xvc2UgbW9kYWwgYWZ0ZXIgYWRkIHRvIGNhcnQgaXMgY29tcGxldGVkXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbihcbiAgICAgICAgXCJhZGRlZF90b19jYXJ0XCIsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCwgZnJhZ21lbnRzLCBjYXJ0X2hhc2gsIGJ1dHRvbikge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJ1dHRvbiB0aGF0IHRyaWdnZXJlZCB0aGUgYWRkIHRvIGNhcnQgaXMgaW5zaWRlIG91ciBtb2RhbFxuICAgICAgICAgICAgaWYgKCQoYnV0dG9uKS5jbG9zZXN0KFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGZsYWcgdG8gcmVmcmVzaCBjYXJ0IHBhZ2UgaWYgdXNlciBpcyBvbiBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJlZnJlc2hDYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gSGFuZGxlIG1vZGFsIGNsb3NlIGV2ZW50IHRvIHJlZnJlc2ggY2FydCBwYWdlXG4gICAgJChkb2N1bWVudCkub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkUmVmcmVzaENhcnQgJiYgJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1jYXJ0XCIpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgc2hvdWxkUmVmcmVzaENhcnQgPSBmYWxzZTsgLy8gUmVzZXQgZmxhZ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1zaG9wIGxpLnByb2R1Y3QgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIC5zaG9wLWFkZC10by1jYXJ0LW1vZGFsIC5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uLndwLWVsZW1lbnQtYnV0dG9uXCJcbiAgICApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5zaG9wLWFkZC10by1jYXJ0LW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICB9KTtcblxuICAgICQoXCIucHJvZHVjdCAucHNmdy1zb2NpYWwtd3JhcFwiKS5hcHBlbmRUbyhcbiAgICAgICAgXCIjcHJvZHVjdFNoYXJlSWNvbnMgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHlcIlxuICAgICk7XG5cbiAgICAkKFwiLm5hdmJhci1hZG1pbi1kZXNrdG9wIHN2Z1wiKS5hcHBlbmRUbyhcIi5uYXZiYXItYWRtaW4gLnhvby1lbC1hY3Rpb24tc2NcIik7XG5cbiAgICAvLyBTaGlmdCBjaGVja291dCBidXR0b24gaW4gcmlnaHQgY29sb3VtIG9mIGRlc2t0b3BcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDEwMDApIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b24uYnV0dG9uXCIpLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIuY2FydC1jb2xsYXRlcmFsc1wiXG4gICAgICAgICk7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgLmFsdGVybmF0ZS1jYXJ0LXByb2R1Y3RzXCIpLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld1wiXG4gICAgICAgICk7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI3BsYWNlX29yZGVyXCIpLmFwcGVuZFRvKFxuICAgICAgICAgICAgXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld1wiXG4gICAgICAgICk7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld1wiKS5wcmVwZW5kKFxuICAgICAgICAgICAgJChcIi53b29jb21tZXJjZS1jaGVja291dCAjb3JkZXJfcmV2aWV3X2hlYWRpbmdcIilcbiAgICAgICAgKTtcbiAgICAgICAgJChcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwid29vY29tbWVyY2UtZGVza3RvcC1jb2wtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLXJpZ2h0XCI+PC9kaXY+YFxuICAgICAgICApLmFwcGVuZFRvKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlclwiKTtcbiAgICAgICAgJChcbiAgICAgICAgICAgIGAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIHAud29vY29tbWVyY2Utbm90aWNlLFxuICAgICAgICAgICAgICAgICAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyIHVsLndvb2NvbW1lcmNlLW9yZGVyLW92ZXJ2aWV3LFxuICAgICAgICAgICAgICAgICAud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLW9yZGVyID4gcGBcbiAgICAgICAgKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2UtZGVza3RvcC1jb2wtbGVmdFwiXG4gICAgICAgICk7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2UtY3VzdG9tZXItZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2Utb3JkZXItZGV0YWlsc2BcbiAgICAgICAgKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciAud29vY29tbWVyY2UtZGVza3RvcC1jb2wtcmlnaHRcIlxuICAgICAgICApO1xuICAgIH1cblxuICAgICQoXCIud29vY29tbWVyY2Utc2hvcCAucHJvZHVjdCBhLndvb2NvbW1lcmNlLUxvb3BQcm9kdWN0LWxpbmtcIilcbiAgICAgICAgLmNvbnRlbnRzKClcbiAgICAgICAgLnVud3JhcCgpXG4gICAgICAgIC53cmFwKFwiPGRpdj48L2Rpdj5cIik7XG5cblxuXG4gICAgJChcIi5uYXYtcHJvZHVjdC1jYXJvdXNlbFwiKS5mbGlja2l0eSh7XG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCAkcHJvZHVjdCA9ICQoXCIud29vY29tbWVyY2Utc2hvcCAucHJvZHVjdC50eXBlLXByb2R1Y3QucG9zdC0xNDA2XCIpO1xuICAgIC8vIGlmICgkcHJvZHVjdC5sZW5ndGgpIHtcbiAgICAvLyAgICAgJHByb2R1Y3QuYXR0cihcImlkXCIsIFwic3VtbWVyQ29sbGVjdGlvbklkXCIpO1xuICAgIC8vIH1cblxuICAgICQoXCIuaG9tZS1hcnJvd1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBjYXJ0IGNvdW50IG9uIHBhZ2UgbG9hZCB2aWEgQUpBWCAod29ya3Mgd2l0aCBDbG91ZGZsYXJlIGNhY2hpbmcpXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FydENvdW50KCkge1xuXG4gICAgICAgIC8vIFRyeSBXb29Db21tZXJjZSBmcmFnbWVudHMgZmlyc3RcbiAgICAgICAgaWYgKHR5cGVvZiB3Y19hZGRfdG9fY2FydF9wYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHdjX2FkZF90b19jYXJ0X3BhcmFtcy53Y19hamF4X3VybCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHdjX2FkZF90b19jYXJ0X3BhcmFtcy53Y19hamF4X3VybC50b1N0cmluZygpLnJlcGxhY2UoJyUlZW5kcG9pbnQlJScsICdnZXRfcmVmcmVzaGVkX2ZyYWdtZW50cycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZnJhZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5mcmFnbWVudHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGtleSkucmVwbGFjZVdpdGgodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgdG8gUkVTVCBBUEkgaWYgZnJhZ21lbnRzIGZhaWxcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhcnRDb3VudFZpYVJFU1QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVzZSBSRVNUIEFQSSBpZiBXb29Db21tZXJjZSBwYXJhbXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgbG9hZENhcnRDb3VudFZpYVJFU1QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZ1bmN0aW9uIHVzaW5nIFJFU1QgQVBJXG4gICAgZnVuY3Rpb24gbG9hZENhcnRDb3VudFZpYVJFU1QoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvd3AtanNvbi9raXJnby92MS9jYXJ0LWNvdW50JyxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIFdvb0NvbW1lcmNlIGZyYWdtZW50IHJlZnJlc2ggd2l0aCB0aGUgY291bnQgZGF0YVxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkudHJpZ2dlcignd2NfZnJhZ21lbnRfcmVmcmVzaCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTm8gcGFnZS1sb2FkIGNhbGwgaGVyZTogdGhlIHNpZGUgY2FydCdzIG93biBwYWdlLWxvYWQgcmVmcmVzaCByZXR1cm5zXG4gICAgLy8gdGhlIHNhbWUgZnJhZ21lbnRzIChzcGFuLmNhcnQtY291bnQgaW5jbHVkZWQpLiBMaXN0ZW5pbmcgdG9cbiAgICAvLyB3Y19mcmFnbWVudHNfcmVmcmVzaGVkIGlzIGFsc28gZ29uZSwgYmVjYXVzZSB0aGUgc2lkZSBjYXJ0IGZpcmVzIGl0XG4gICAgLy8gYWZ0ZXIgdGhhdCByZWZyZXNoIGFuZCByZS1hc2tpbmcgbWFkZSBhIHRoaXJkIGlkZW50aWNhbCByZXF1ZXN0LlxuICAgIC8vIGFkZGVkX3RvX2NhcnQgaXMgbm90IGxpc3RlbmVkIHRvIGVpdGhlcjogdGhlIHNpZGUgY2FydCBhbHJlYWR5IGFwcGxpZXNcbiAgICAvLyB0aGUgZnJhZ21lbnRzIGZyb20gaXRzIGFkZC10by1jYXJ0IHJlc3BvbnNlLCBhbmQgb24gcHJvZHVjdCBwYWdlcyB0aGVcbiAgICAvLyByZS1hc2sgd2FzIGN1dCBvZmYgYnkgdGhlIHJlZGlyZWN0IHRvIHRoZSBjYXJ0LlxuICAgIC8vIHdjX2NhcnRfZW1wdGllZCBjb3ZlcnMgcmVtb3ZpbmcgdGhlIGxhc3QgaXRlbSBvbiB0aGUgY2FydCBwYWdlLCB3aGVyZVxuICAgIC8vIFdvb0NvbW1lcmNlIHNraXBzIHVwZGF0ZWRfY2FydF90b3RhbHMgYW5kIHRoZSBoZWFkZXIga2VwdCB0aGUgb2xkIGNvdW50LlxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ3JlbW92ZWRfZnJvbV9jYXJ0IHVwZGF0ZWRfY2FydF90b3RhbHMgd2NfY2FydF9lbXB0aWVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUNhcnRDb3VudCgpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvYXNzZXRzL2Rpc3QvanMvYXBwXCI6IDAsXG5cdFwic3R5bGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2FwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3Nhc3MvYXBwLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJhamF4UHJlZmlsdGVyIiwib3B0aW9ucyIsIm9yaWdpbmFsT3B0aW9ucyIsImpxWEhSIiwiU3RyaW5nIiwidXJsIiwiaW5kZXhPZiIsImRvY3VtZW50IiwiY29va2llIiwiYWJvcnQiLCJyZWFkeSIsIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwibmF2YmFyIiwiY2xhc3NOYW1lIiwid2luZG93Iiwib24iLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvcCIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY3JvbGwiLCJoYXNDbGFzcyIsIiRob21lQ2Fyb3VzZWwiLCJmbGlja2l0eSIsIndyYXBBcm91bmQiLCJhdXRvUGxheSIsIiRibG9nQ2Fyb3VzZWwiLCJwcmV2TmV4dEJ1dHRvbnMiLCJmcmVlU2Nyb2xsIiwiY29udGFpbiIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwiJGdhbGxlcnlDYXJvdXNlbCIsInRvZ2dsZSIsImVsZW1lbnQiLCJuZXdUZXh0IiwidGV4dCIsInJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm9yaWdpbmFsVGV4dCIsInRleHRDb250ZW50IiwicXVvdGVkVGV4dCIsImNvbmNhdCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiJGlucHV0IiwiY2xvc2VzdCIsImZpbmQiLCJjdXJyZW50VmFsIiwicGFyc2VJbnQiLCJ2YWwiLCJuZXdWYWwiLCJ0cmlnZ2VyIiwiYXR0ciIsImlucHV0RWxlbWVudHNPbkNoZWNrb3V0IiwiaW5wdXRFbGVtZW50c09uU2lnbkluIiwiaW5wdXRFbGVtZW50c0ZvclNoaXBwaW5nQWRkcmVzcyIsImlucHV0RWxlbWVudHNPblJlZ2lzdGVyIiwicmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsIiwiaW5wdXRFbGVtZW50IiwiZWFjaCIsImxhYmVsVmFsIiwiaW5wdXROYW1lIiwiaW5wdXRQbGFjZWhvbGRlciIsImNvbnRhaW5lciIsIm5ld0VsZW1lbnQiLCJhZnRlciIsImFjY291bnRQYWdlRWxlbWVudCIsIm5ld0FjY291bnRQYWdlRWxlbWVudCIsImNzcyIsInNpZ25JblRleHRFbGVtZW50Iiwic2lnbkluTmV3VGV4dCIsInJlZ2lzdGVyVGV4dEVsZW1lbnQiLCJyZWdpc3Rlck5ld1RleHQiLCJzaWduSW5UZXh0QnV0dG9uRWxlbWVudCIsInNpZ25JbkJ1dHRvbk5ld1RleHQiLCJoaWRlIiwid29yZHMiLCJ0cmltIiwic3BsaXQiLCJpbmNsdWRlcyIsImxhc3RXb3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzaXplT3JkZXIiLCIkc3RhZ2luZyIsIiRjb250YWluZXIiLCJwcmV2IiwiZmlyc3QiLCJhcHBlbmRUbyIsInJlbW92ZSIsIiRpdGVtcyIsInNvcnRlZCIsInRvQXJyYXkiLCJzb3J0IiwiYSIsImIiLCJhTmFtZSIsImJOYW1lIiwiYUlkeCIsImJJZHgiLCJjaGVja1JlcXVpcmVkRmllbGRzIiwiYWxsVmFsaWQiLCJyZXF1aXJlZElucHV0RmllbGRzIiwiaW5wdXRWYWwiLCJidXR0b24iLCJwcm9wIiwiJGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IiLCIkY2hlY2tvdXROZXN0ZWRCdXR0b24iLCIkY2FydEJ1dHRvbkFuY2VzdG9yIiwiJGNhcnROZXN0ZWRCdXR0b24iLCJsb2NhdGlvbiIsImhyZWYiLCJldmVudCIsImFkZENsYXNzIiwicGFyZW50Iiwid293IiwiV09XIiwiaW5pdCIsIm9mZiIsImJvZHkiLCJmcmFnbWVudHMiLCJjYXJ0X2hhc2giLCJ3Y19hZGRfdG9fY2FydF9wYXJhbXMiLCJjYXJ0X3VybCIsInNob3VsZFJlZnJlc2hDYXJ0IiwibW9kYWwiLCJyZWxvYWQiLCJzY3JlZW4iLCJ3aWR0aCIsInByZXBlbmQiLCJjb250ZW50cyIsInVud3JhcCIsIndyYXAiLCJhZGFwdGl2ZUhlaWdodCIsImhpc3RvcnkiLCJiYWNrIiwidXBkYXRlQ2FydENvdW50Iiwid2NfYWpheF91cmwiLCJhamF4IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwia2V5IiwidmFsdWUiLCJyZXBsYWNlV2l0aCIsImVycm9yIiwieGhyIiwic3RhdHVzIiwibG9hZENhcnRDb3VudFZpYVJFU1QiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=