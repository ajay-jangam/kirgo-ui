/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

/**
 * Bag count from the kirgo_bag_count cookie (set by inc/bag-cache.php).
 *
 * Returns null when the count is unknown: WooCommerce says the bag has items
 * but the count cookie is missing, as for a bag filled before that cookie
 * existed. The side cart's refresh then runs once and sets the cookie.
 */
function kirgoBagCount() {
  var match = document.cookie.match(/(?:^|;\s*)kirgo_bag_count=(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return document.cookie.indexOf("woocommerce_items_in_cart=") === -1 ? 0 : null;
}
function kirgoShowBagCount() {
  var count = kirgoBagCount();
  if (count !== null) {
    jQuery(".navbar-cart .cart-count, .navbar-cart .xoo-wsc-sc-count").text(count);
  }
}

/**
 * Skip the side cart's refresh when the cookies already give the count.
 *
 * Browse pages are cached and built without the bag, and the side cart
 * panel never opens on this site (its icon links to /cart), so on those
 * pages the refresh would only fetch the count. It still runs on the cart
 * and checkout pages, and when the count is unknown. Registered at top
 * level because the side cart sends its refresh 200 ms after DOM ready.
 */
jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (String(options.url).indexOf("wc-ajax=xoo_wsc_refresh_fragments") === -1) {
    return;
  }
  var onCartOrCheckout = typeof xoo_wsc_params !== "undefined" && (xoo_wsc_params.isCart == "1" || xoo_wsc_params.isCheckout == "1");
  var count = kirgoBagCount();
  if (count === 0 || count !== null && !onCartOrCheckout) {
    jqXHR.abort();
  }
});

// A page restored by the back button keeps the count it had when the
// shopper left it, so read the cookie again.
jQuery(window).on("pageshow", function (e) {
  if (e.originalEvent && e.originalEvent.persisted) {
    kirgoShowBagCount();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovL2FwcC8uL2Fzc2V0cy9zYXNzL2FwcC5zY3NzP2MwZTMiLCJ3ZWJwYWNrOi8vYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCYWcgY291bnQgZnJvbSB0aGUga2lyZ29fYmFnX2NvdW50IGNvb2tpZSAoc2V0IGJ5IGluYy9iYWctY2FjaGUucGhwKS5cbiAqXG4gKiBSZXR1cm5zIG51bGwgd2hlbiB0aGUgY291bnQgaXMgdW5rbm93bjogV29vQ29tbWVyY2Ugc2F5cyB0aGUgYmFnIGhhcyBpdGVtc1xuICogYnV0IHRoZSBjb3VudCBjb29raWUgaXMgbWlzc2luZywgYXMgZm9yIGEgYmFnIGZpbGxlZCBiZWZvcmUgdGhhdCBjb29raWVcbiAqIGV4aXN0ZWQuIFRoZSBzaWRlIGNhcnQncyByZWZyZXNoIHRoZW4gcnVucyBvbmNlIGFuZCBzZXRzIHRoZSBjb29raWUuXG4gKi9cbmZ1bmN0aW9uIGtpcmdvQmFnQ291bnQoKSB7XG4gICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKC8oPzpefDtcXHMqKWtpcmdvX2JhZ19jb3VudD0oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgfVxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUuaW5kZXhPZihcIndvb2NvbW1lcmNlX2l0ZW1zX2luX2NhcnQ9XCIpID09PSAtMSA/IDAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBraXJnb1Nob3dCYWdDb3VudCgpIHtcbiAgICB2YXIgY291bnQgPSBraXJnb0JhZ0NvdW50KCk7XG4gICAgaWYgKGNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgIGpRdWVyeShcIi5uYXZiYXItY2FydCAuY2FydC1jb3VudCwgLm5hdmJhci1jYXJ0IC54b28td3NjLXNjLWNvdW50XCIpLnRleHQoY291bnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBTa2lwIHRoZSBzaWRlIGNhcnQncyByZWZyZXNoIHdoZW4gdGhlIGNvb2tpZXMgYWxyZWFkeSBnaXZlIHRoZSBjb3VudC5cbiAqXG4gKiBCcm93c2UgcGFnZXMgYXJlIGNhY2hlZCBhbmQgYnVpbHQgd2l0aG91dCB0aGUgYmFnLCBhbmQgdGhlIHNpZGUgY2FydFxuICogcGFuZWwgbmV2ZXIgb3BlbnMgb24gdGhpcyBzaXRlIChpdHMgaWNvbiBsaW5rcyB0byAvY2FydCksIHNvIG9uIHRob3NlXG4gKiBwYWdlcyB0aGUgcmVmcmVzaCB3b3VsZCBvbmx5IGZldGNoIHRoZSBjb3VudC4gSXQgc3RpbGwgcnVucyBvbiB0aGUgY2FydFxuICogYW5kIGNoZWNrb3V0IHBhZ2VzLCBhbmQgd2hlbiB0aGUgY291bnQgaXMgdW5rbm93bi4gUmVnaXN0ZXJlZCBhdCB0b3BcbiAqIGxldmVsIGJlY2F1c2UgdGhlIHNpZGUgY2FydCBzZW5kcyBpdHMgcmVmcmVzaCAyMDAgbXMgYWZ0ZXIgRE9NIHJlYWR5LlxuICovXG5qUXVlcnkuYWpheFByZWZpbHRlcihmdW5jdGlvbiAob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUikge1xuICAgIGlmIChTdHJpbmcob3B0aW9ucy51cmwpLmluZGV4T2YoXCJ3Yy1hamF4PXhvb193c2NfcmVmcmVzaF9mcmFnbWVudHNcIikgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9uQ2FydE9yQ2hlY2tvdXQgPVxuICAgICAgICB0eXBlb2YgeG9vX3dzY19wYXJhbXMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgKHhvb193c2NfcGFyYW1zLmlzQ2FydCA9PSBcIjFcIiB8fCB4b29fd3NjX3BhcmFtcy5pc0NoZWNrb3V0ID09IFwiMVwiKTtcbiAgICB2YXIgY291bnQgPSBraXJnb0JhZ0NvdW50KCk7XG4gICAgaWYgKGNvdW50ID09PSAwIHx8IChjb3VudCAhPT0gbnVsbCAmJiAhb25DYXJ0T3JDaGVja291dCkpIHtcbiAgICAgICAganFYSFIuYWJvcnQoKTtcbiAgICB9XG59KTtcblxuLy8gQSBwYWdlIHJlc3RvcmVkIGJ5IHRoZSBiYWNrIGJ1dHRvbiBrZWVwcyB0aGUgY291bnQgaXQgaGFkIHdoZW4gdGhlXG4vLyBzaG9wcGVyIGxlZnQgaXQsIHNvIHJlYWQgdGhlIGNvb2tpZSBhZ2Fpbi5cbmpRdWVyeSh3aW5kb3cpLm9uKFwicGFnZXNob3dcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5wZXJzaXN0ZWQpIHtcbiAgICAgICAga2lyZ29TaG93QmFnQ291bnQoKTtcbiAgICB9XG59KTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIE5hdmJhclxuICAgICAqL1xuICAgIC8vIE5hdmJhciBNZW51XG5cbiAgICAkKFwiLm5hdmJhci1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZS53aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJpc0ZpeGVkXCIpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIHRoZSBjbGFzcyBuYW1lIHRvIHRvZ2dsZVxuICAgIHZhciBuYXZiYXIgPSAkKFwiLm5hdmJhclwiKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gXCJzY3JvbGxlZC1zY3JlZW5cIjtcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDEwKSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjhmOFwiIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2dnbGUgdGhlIGNsYXNzIG9uIHRoZSBuYXZiYXIgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgIG5hdmJhclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNjcm9sbCA9ICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc2Nyb2xsID4gMTAgJiYgISQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSkgfHxcbiAgICAgICAgICAgIChzY3JvbGwgPT09IDAgJiYgJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgICQoXCIuYWN0aXZlXCIpLnRvZ2dsZUNsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSG9tZSBQYWdlXG4gICAgICovXG5cbiAgICAvLyBIb21lIFNsaWRlclxuXG4gICAgbGV0ICRob21lQ2Fyb3VzZWwgPSAkKFwiLmhvbWUtY2Fyb3VzZWxcIik7XG5cbiAgICAkaG9tZUNhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgYXV0b1BsYXk6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBCbG9nIFNsaWRlclxuXG4gICAgbGV0ICRibG9nQ2Fyb3VzZWwgPSAkKFwiLmJsb2ctY2Fyb3VzZWxcIik7XG5cbiAgICAkYmxvZ0Nhcm91c2VsLmZsaWNraXR5KHtcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgICAgY2VsbEFsaWduOiBcImNlbnRlclwiLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJvZHVjdCBQYWdlXG4gICAgICovXG4gICAgJChcIi53b29jb21tZXJjZS1SZXZpZXdzIC5jb21tZW50bGlzdFwiKS5mbGlja2l0eSh7XG4gICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICB9KTtcblxuICAgIC8vIEdhbGxlcnkgU2xpZGVyXG5cbiAgICBsZXQgJGdhbGxlcnlDYXJvdXNlbCA9ICQoXCIuc2hvcC1nYWxsZXJ5XCIpO1xuXG4gICAgJGdhbGxlcnlDYXJvdXNlbC5mbGlja2l0eSh7XG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgUGFnZVxuICAgICAqKi9cblxuICAgIC8vIFRvZ2dsZSBSZXZpZXcgRm9ybVxuICAgICQoXCIjcmV2aWV3X2Zvcm0gLmNvbW1lbnQtcmVwbHktdGl0bGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlICNyZXZpZXdfZm9ybSAuY29tbWVudC1mb3JtXCIpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBSZXZpZXcgVGl0bGUgdGV4dFxuICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiI3JlcGx5LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1RleHQgPSBcInNlbmQgeW91ciByZXZpZXdcIjtcbiAgICBlbGVtZW50LnRleHQobmV3VGV4dCk7XG5cbiAgICAvLyBBZGQgZG91YmxlIHFvdXRlcyB0byBSZXZpZXdzXG4gICAgY29uc3QgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVzY3JpcHRpb24gcFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0ID0gcmV2aWV3RGVzY3JpcHRpb25FbGVtZW50c1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHF1b3RlZFRleHQgPSBgXCIke29yaWdpbmFsVGV4dH1cImA7XG4gICAgICAgIHJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBxdW90ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIEhpZGUgV29vQ29tbWVyY2Ugbm90aWNlcyBhZnRlciA1IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi53b29jb21tZXJjZS1ub3RpY2VzLXdyYXBwZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgfSwgNTAwMCk7XG5cbiAgICAvLyBSZW1vdmUgV29vQ29tbWVyY2Ugbm90aWNlcyB3aGVuIGNsaWNrZWRcbiAgICAkKGRvY3VtZW50KS5vbihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBcIi53b29jb21tZXJjZS1tZXNzYWdlLCAud29vY29tbWVyY2UtZXJyb3IsIC53b29jb21tZXJjZS1pbmZvXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYXJ0IHF1YW50aXR5IGJ1IGNsaWNsaW5nIHBsdXMvbWludXMgb24gQ2FydCBwYWdlXG4gICAgJChcIi5xdWFudGl0eVwiKS5vbihcImNsaWNrXCIsIFwiLnBsdXMsIC5taW51c1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbnB1dCBmaWVsZCBhbmQgY3VycmVudCBxdWFudGl0eSB2YWx1ZSBmb3IgdGhpcyBjYXJ0IGl0ZW1cbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcykuY2xvc2VzdChcIi5xdWFudGl0eVwiKS5maW5kKFwiaW5wdXQucXR5XCIpLFxuICAgICAgICAgICAgY3VycmVudFZhbCA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSk7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBuZXcgcXVhbnRpdHkgdmFsdWUgYmFzZWQgb24gdGhlIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwicGx1c1wiKSkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGN1cnJlbnRWYWwgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGN1cnJlbnRWYWwgPiAxID8gY3VycmVudFZhbCAtIDEgOiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBpbnB1dCBmaWVsZCB2YWx1ZSBhbmQgdHJpZ2dlciB0aGUgXCJjaGFuZ2VcIiBldmVudCB0byB1cGRhdGUgdGhlIGNhcnRcbiAgICAgICAgJGlucHV0LnZhbChuZXdWYWwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgfSk7XG5cbiAgICAvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIG5hbWUgb2YgY291cG9uIGlucHV0XG4gICAgJChcIi53b29jb21tZXJjZS1jYXJ0IC5jb3Vwb24gLmlucHV0LXRleHRcIikuYXR0cihcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICBcImVudGVyIGNvdXBvbiBjb2RlXCJcbiAgICApO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgbGFiZWxzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGxhY2Vob2xkZXJzXG5cbiAgICBsZXQgaW5wdXRFbGVtZW50c09uQ2hlY2tvdXQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1iaWxsaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbCwgLndvb2NvbW1lcmNlLXNoaXBwaW5nLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c09uU2lnbkluID0gJChcbiAgICAgICAgXCIud29vY29tbWVyY2UtYWNjb3VudCAud29vY29tbWVyY2UtZm9ybS1yb3cgbGFiZWxcIlxuICAgICk7XG4gICAgbGV0IGlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hZGRyZXNzLWZpZWxkc19fZmllbGQtd3JhcHBlciBsYWJlbFwiXG4gICAgKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIgPSAkKFwiLmN1c3RvbS1yZWdpc3RyYXRpb24gbGFiZWxcIik7XG5cbiAgICBjb25zdCByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlucHV0RWxlbWVudC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbFZhbCA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgbGV0IGlucHV0TmFtZSA9ICQodGhpcykuYXR0cihcImZvclwiKTtcbiAgICAgICAgICAgIGxldCBpbnB1dFBsYWNlaG9sZGVyID0gJChcIiNcIiArIGlucHV0TmFtZSkuYXR0cihcInBsYWNlaG9sZGVyXCIpO1xuICAgICAgICAgICAgaWYgKGxhYmVsVmFsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KGlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpbnB1dE5hbWUpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBsYWJlbFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyV2l0aExhYmVsKGlucHV0RWxlbWVudHNPbkNoZWNrb3V0KTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uU2lnbkluKTtcbiAgICByZXBsYWNlUGxhY2Vob2xkZXJXaXRoTGFiZWwoaW5wdXRFbGVtZW50c09uUmVnaXN0ZXIpO1xuICAgIHJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbChpbnB1dEVsZW1lbnRzRm9yU2hpcHBpbmdBZGRyZXNzKTtcblxuICAgIC8vIGFkZGVkIFNoaXBtZW50IHRleHQgb24gY2hlY2tvdXQgcGFnZVxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoXCIud29vY29tbWVyY2UtYmlsbGluZy1maWVsZHNfX2ZpZWxkLXdyYXBwZXJcIik7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9ICQoXG4gICAgICAgIFwiPHAgaWQ9J3NoaXBtZW50LXRleHQnPmVudGVyIHlvdXIgPGJyPjxzcGFuPnNoaXBwaW5nIGRldGFpbHM8L3NwYW4+PC9wPlwiXG4gICAgKTtcbiAgICBjb250YWluZXIuZmluZChcIj46bnRoLWNoaWxkKDMpXCIpLmFmdGVyKG5ld0VsZW1lbnQpO1xuXG4gICAgLy8gQWRkZWQgaW1hZ2Ugb24gYWNjb3VudCBwYWdlXG4gICAgY29uc3QgYWNjb3VudFBhZ2VFbGVtZW50ID0gJChcIi53b29jb21tZXJjZS1hY2NvdW50ICNwYWdlXCIpO1xuICAgIGNvbnN0IG5ld0FjY291bnRQYWdlRWxlbWVudCA9ICQoXG4gICAgICAgICc8aW1nIGNsYXNzPVwiYWNjb3VudC1iYW5uZXItaW1hZ2VcIiBzcmM9XCIvd3AtY29udGVudC90aGVtZXMva2lyZ28tdGhlbWUvYXNzZXRzL2ltYWdlcy9hY2NvdW50L3NpZ24taW4tYmFubmVyLmpwZ1wiIGFsdD1cIkJhbm5lciBJbWFnZVwiIC8+J1xuICAgICk7XG4gICAgaWYgKCEkKFwiYm9keS53b29jb21tZXJjZS1wYWdlXCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBiYW5uZXIgaW1hZ2Ugd2hlbiBsb2dnZWQgaW5cbiAgICAgICAgYWNjb3VudFBhZ2VFbGVtZW50LmZpbmQoXCI+Om50aC1jaGlsZCgxKVwiKS5hZnRlcihuZXdBY2NvdW50UGFnZUVsZW1lbnQpO1xuXG4gICAgICAgIC8vIEtlZXAgZnVsbCBoZWlnaHQgd2hlbiBsb2dnZWQgaW5cbiAgICAgICAgJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgLndvb2NvbW1lcmNlLCAucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb25cIlxuICAgICAgICApLmNzcyhcImhlaWdodFwiLCBcImNhbGMoMTAwdmggLSAyNTBweClcIik7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIFRpdGxlIHRleHRcbiAgICBpZiAoISQoXCJib2R5Lndvb2NvbW1lcmNlLWFjY291bnQubG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIGNvbnN0IHNpZ25JblRleHRFbGVtZW50ID0gJChcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWFjY291bnQgI3BhZ2UgLndvb2NvbW1lcmNlIGgyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2lnbkluTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgICAgICBzaWduSW5UZXh0RWxlbWVudC50ZXh0KHNpZ25Jbk5ld1RleHQpO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgU2lnbiBJbiBUaXRsZSB0ZXh0IG9uIFJlZ2lzdGVyXG4gICAgY29uc3QgcmVnaXN0ZXJUZXh0RWxlbWVudCA9ICQoXCIucGFnZS1pZC0yMzcgLmN1c3RvbS1yZWdpc3RyYXRpb24gaDJcIik7XG4gICAgY29uc3QgcmVnaXN0ZXJOZXdUZXh0ID0gXCJjcmVhdGUgYW4gYWNjb3VudFwiO1xuICAgIHJlZ2lzdGVyVGV4dEVsZW1lbnQudGV4dChyZWdpc3Rlck5ld1RleHQpO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBTaWduIEluIEJ1dHRvbiBUaXRsZSB0ZXh0XG4gICAgY29uc3Qgc2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQgPSAkKFxuICAgICAgICBcIi53b29jb21tZXJjZS1hY2NvdW50IC53b29jb21tZXJjZS1mb3JtLWxvZ2luIC53b29jb21tZXJjZS1mb3JtLWxvZ2luX19zdWJtaXRcIlxuICAgICk7XG4gICAgY29uc3Qgc2lnbkluQnV0dG9uTmV3VGV4dCA9IFwic2lnbiBpblwiO1xuICAgIHNpZ25JblRleHRCdXR0b25FbGVtZW50LnRleHQoc2lnbkluQnV0dG9uTmV3VGV4dCk7XG5cbiAgICAvLyBIaWRlIGZvb3RlciB3aGVuIHVzZXIgbG9nb3V0IGFuZCBzaG93IHdoZW4gbG9naW4gaW5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJ3b29jb21tZXJjZS1hY2NvdW50XCIpKSB7XG4gICAgICAgICQoXCIuZm9vdGVyLXNlY3Rpb25cIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIGlmICgkKFwiYm9keS53b29jb21tZXJjZS1hY2NvdW50XCIpLmhhc0NsYXNzKFwibG9nZ2VkLWluXCIpKSB7XG4gICAgICAgIC8vICAgICAkKFwiZm9vdGVyLXNlY3Rpb25cIikuc2hvdygpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgJChcIi5mb290ZXItc2VjdGlvblwiKS5oaWRlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyBsb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzIG5hbWUgXCJ3b292ci12YXJpYXRpb24tbmFtZVwiXG4gICAgJChcIi53b292ci12YXJpYXRpb24tbmFtZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdvcmRzID0gJCh0aGlzKS50ZXh0KCkudHJpbSgpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IG5ld1RleHQgPSBcIlwiO1xuXG4gICAgICAgIGlmICh3b3Jkcy5pbmNsdWRlcyhcIkV4dHJhXCIpKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIG5ld1RleHQgPSBcIlhcIiArIGxhc3RXb3JkLmNoYXJBdCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsYXN0V29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbmV3VGV4dCA9IGxhc3RXb3JkLmNoYXJBdCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykudGV4dChuZXdUZXh0LnRvVXBwZXJDYXNlKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gTW92ZSBkaXNhYmxlZCBzaXplIHZhcmlhbnRzIGZyb20gdGhlaXIgc3RhZ2luZyBkaXYgaW50byB0aGUgLndvb3ZyLXZhcmlhdGlvbnNcbiAgICAvLyBmbGV4IGNvbnRhaW5lciwgdGhlbiBzb3J0IGFsbCBzaXplIGJ1dHRvbnMgaW4gdGhlIGNhbm9uaWNhbCBvcmRlci5cbiAgICB2YXIgc2l6ZU9yZGVyID0gW1wiWFNcIiwgXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiXTtcblxuICAgICQoXCIua2lyZ28tZGlzYWJsZWQtc3RhZ2luZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRzdGFnaW5nID0gJCh0aGlzKTtcbiAgICAgICAgLy8gLndvb3ZyLXZhcmlhdGlvbnMgaXMgdGhlIGltbWVkaWF0ZWx5IHByZWNlZGluZyBzaWJsaW5nIG9mIHRoZSBzdGFnaW5nIGRpdlxuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICRzdGFnaW5nLnByZXYoXCIud29vdnItdmFyaWF0aW9uc1wiKTtcbiAgICAgICAgaWYgKCEkY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2s6IGxvb2sgZm9yIGl0IGluIHRoZSBuZWFyZXN0IGNvbW1vbiBhbmNlc3RvclxuICAgICAgICAgICAgJGNvbnRhaW5lciA9ICRzdGFnaW5nLmNsb3Nlc3QoXCIuY2FydCwgLnZhcmlhdGlvbnNfZm9ybVwiKS5maW5kKFwiLndvb3ZyLXZhcmlhdGlvbnNcIikuZmlyc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISRjb250YWluZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgLy8gTW92ZSBkaXNhYmxlZCBidXR0b25zIGludG8gdGhlIGZsZXggY29udGFpbmVyXG4gICAgICAgICRzdGFnaW5nLmZpbmQoXCIud29vdnItdmFyaWF0aW9uLWRpc2FibGVkXCIpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuICAgICAgICAkc3RhZ2luZy5yZW1vdmUoKTtcblxuICAgICAgICAvLyBTb3J0IGFsbCB2YXJpYXRpb24gYnV0dG9ucyAoZW5hYmxlZCArIGRpc2FibGVkKSBieSBjYW5vbmljYWwgc2l6ZSBvcmRlclxuICAgICAgICB2YXIgJGl0ZW1zID0gJGNvbnRhaW5lci5maW5kKFwiLndvb3ZyLXZhcmlhdGlvbltkYXRhLWlkXVwiKTtcbiAgICAgICAgdmFyIHNvcnRlZCA9ICRpdGVtcy50b0FycmF5KCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGFOYW1lID0gJChhKS5maW5kKFwiLndvb3ZyLXZhcmlhdGlvbi1uYW1lXCIpLnRleHQoKS50cmltKCk7XG4gICAgICAgICAgICB2YXIgYk5hbWUgPSAkKGIpLmZpbmQoXCIud29vdnItdmFyaWF0aW9uLW5hbWVcIikudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBhSWR4ID0gc2l6ZU9yZGVyLmluZGV4T2YoYU5hbWUpO1xuICAgICAgICAgICAgdmFyIGJJZHggPSBzaXplT3JkZXIuaW5kZXhPZihiTmFtZSk7XG4gICAgICAgICAgICBpZiAoYUlkeCA9PT0gLTEpIGFJZHggPSA5OTk7XG4gICAgICAgICAgICBpZiAoYklkeCA9PT0gLTEpIGJJZHggPSA5OTk7XG4gICAgICAgICAgICByZXR1cm4gYUlkeCAtIGJJZHg7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHNvcnRlZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICAgICQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2hlY2tvdXRcIikgJiZcbiAgICAgICAgISQoXCJib2R5Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2Utb3JkZXItcmVjZWl2ZWRcIilcbiAgICApIHtcbiAgICAgICAgY29uc3QgJGNoZWNrb3V0QnV0dG9uQW5jZXN0b3IgPSAkKFwiLmNoZWNrb3V0Lndvb2NvbW1lcmNlLWNoZWNrb3V0XCIpO1xuICAgICAgICBjb25zdCAkY2hlY2tvdXROZXN0ZWRCdXR0b24gPSAkKFwiI3BsYWNlX29yZGVyXCIpO1xuXG4gICAgICAgIGlmICgkY2hlY2tvdXRCdXR0b25BbmNlc3Rvci5sZW5ndGggJiYgJGNoZWNrb3V0TmVzdGVkQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNoZWNrb3V0TmVzdGVkQnV0dG9uLmFwcGVuZFRvKCRjaGVja291dEJ1dHRvbkFuY2VzdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXRGaWVsZHMgPSAkKFxuICAgICAgICAgICAgXCIuY2hlY2tvdXQud29vY29tbWVyY2UtY2hlY2tvdXQgLndvb2NvbW1lcmNlLWJpbGxpbmctZmllbGRzIC52YWxpZGF0ZS1yZXF1aXJlZCBpbnB1dFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCIjcGxhY2Vfb3JkZXJcIik7XG5cbiAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICByZXF1aXJlZElucHV0RmllbGRzLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZEZpZWxkcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKCkge1xuICAgICAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXRGaWVsZHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0VmFsIHx8IGlucHV0VmFsLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcIndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgY29uc3QgJGNhcnRCdXR0b25BbmNlc3RvciA9ICQoXCIud29vY29tbWVyY2UtY2FydCAud29vY29tbWVyY2VcIik7XG4gICAgICAgIGNvbnN0ICRjYXJ0TmVzdGVkQnV0dG9uID0gJChcIi53b29jb21tZXJjZS1jYXJ0IC5jaGVja291dC1idXR0b25cIik7XG5cbiAgICAgICAgaWYgKCRjYXJ0QnV0dG9uQW5jZXN0b3IubGVuZ3RoICYmICRjYXJ0TmVzdGVkQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNhcnROZXN0ZWRCdXR0b24uYXBwZW5kVG8oJGNhcnRCdXR0b25BbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIi9jYXJ0L1wiKSA+IC0xKSB7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCJhLm5hdmJhci1jYXJ0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgJChcIi5kdXBsaWNhdGUtZWxlbWVudHNcIikuYXBwZW5kVG8oXG4gICAgICAgICQoXCIud29vY29tbWVyY2UtcHJvZHVjdC1kZXRhaWxzX19zaG9ydC1kZXNjcmlwdGlvblwiKS5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICk7XG5cbiAgICBjb25zdCB3b3cgPSBuZXcgV09XKCk7XG4gICAgd293LmluaXQoKTtcblxuICAgICQoXG4gICAgICAgIFwiYm9keS5zaW5nbGUtcHJvZHVjdCAucHJvZHVjdCAuc3VtbWFyeS5lbnRyeS1zdW1tYXJ5LCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0IC53b29jb21tZXJjZS1UYWJzLXBhbmVsLCBib2R5LnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0ICNyZXZpZXdzXCJcbiAgICApLmFkZENsYXNzKFwid293IGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblVwXCIpO1xuXG4gICAgLy8gRGlzYWJsZSB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGNhcnQgaWNvblxuICAgICQoXCIubmF2YmFyLWNhcnQsIC54b28td3NjLXNjLWNvbnRcIikub2ZmKFwiY2xpY2tcIik7XG5cbiAgICBpZiAoISQoXCJib2R5XCIpLmhhc0NsYXNzKFwiLndvb2NvbW1lcmNlLWNhcnRcIikpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGNhcnQgcGFnZSB3aGVuIHRoZXkgY2xpY2sgb24gdGhlIGNhcnQgaWNvblxuICAgICAgICAkKFwiLm5hdmJhci1jYXJ0LCAueG9vLXdzYy1zYy1jb250XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhcnRcIjtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5uYXZiYXItY2FydFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWRkIHRvIGNhcnQgYnV0dG9uIG92ZXJyaWRlcyB0byBsZXQgbm9ybWFsIFdvb0NvbW1lcmNlIGJlaGF2aW9yIHdvcmtcbiAgICAvLyAkKFwiYm9keS5zaW5nbGUtcHJvZHVjdCAud3BjYm4tYnRuLXNpbmdsZS5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLm9mZihcbiAgICAvLyAgICAgXCJjbGlja1wiXG4gICAgLy8gKTtcblxuICAgIC8vICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIFwiLnNpbmdsZV9hZGRfdG9fY2FydF9idXR0b25cIik7XG5cbiAgICAvLyBHbyB0byB0aGUgY2FydCBvbmx5IG9uY2UgdGhlIGl0ZW0gaXMgc2F2ZWQuIFRoZSBzaWRlIGNhcnQgZmlyZXNcbiAgICAvLyBhZGRlZF90b19jYXJ0IGFmdGVyIGl0cyBhZGQtdG8tY2FydCByZXF1ZXN0IHN1Y2NlZWRzOyBhIGZpeGVkIHRpbWVyXG4gICAgLy8gaGVyZSB1c2VkIHRvIG5hdmlnYXRlIGF3YXkgbWlkLXJlcXVlc3QsIHNvIGEgZmlyc3QtdGltZSBzaG9wcGVyIGxvc3RcbiAgICAvLyB0aGUgc2Vzc2lvbiBjb29raWUgYW5kIGxhbmRlZCBvbiBhbiBlbXB0eSBjYXJ0LlxuICAgICQoZG9jdW1lbnQuYm9keSkub24oXG4gICAgICAgIFwiYWRkZWRfdG9fY2FydFwiLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQsIGZyYWdtZW50cywgY2FydF9oYXNoLCBidXR0b24pIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5oYXNDbGFzcyhcInNpbmdsZS1wcm9kdWN0XCIpICYmXG4gICAgICAgICAgICAgICAgJChidXR0b24pLmhhc0NsYXNzKFwic2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvblwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAgICAgICAgICAgICAod2luZG93LndjX2FkZF90b19jYXJ0X3BhcmFtcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgd2NfYWRkX3RvX2NhcnRfcGFyYW1zLmNhcnRfdXJsKSB8fFxuICAgICAgICAgICAgICAgICAgICBcIi9jYXJ0L1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgICQoXCIuY2FydC1wcm9kdWN0LXNpemUtbW9kYWwgLndwY2JuLWJ0bi5zaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uXCIpLnRleHQoXG4gICAgICAgIFwiQWRkIHRvIENoZWNrb3V0XCJcbiAgICApO1xuXG4gICAgLy8gVHJhY2sgaWYgd2Ugc2hvdWxkIHJlZnJlc2ggYWZ0ZXIgbW9kYWwgY2xvc2VcbiAgICBsZXQgc2hvdWxkUmVmcmVzaENhcnQgPSBmYWxzZTtcblxuICAgIC8vIENsb3NlIG1vZGFsIGFmdGVyIGFkZCB0byBjYXJ0IGlzIGNvbXBsZXRlZFxuICAgICQoZG9jdW1lbnQuYm9keSkub24oXG4gICAgICAgIFwiYWRkZWRfdG9fY2FydFwiLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQsIGZyYWdtZW50cywgY2FydF9oYXNoLCBidXR0b24pIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBidXR0b24gdGhhdCB0cmlnZ2VyZWQgdGhlIGFkZCB0byBjYXJ0IGlzIGluc2lkZSBvdXIgbW9kYWxcbiAgICAgICAgICAgIGlmICgkKGJ1dHRvbikuY2xvc2VzdChcIi5jYXJ0LXByb2R1Y3Qtc2l6ZS1tb2RhbFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIFNldCBmbGFnIHRvIHJlZnJlc2ggY2FydCBwYWdlIGlmIHVzZXIgaXMgb24gY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRSZWZyZXNoQ2FydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIEhhbmRsZSBtb2RhbCBjbG9zZSBldmVudCB0byByZWZyZXNoIGNhcnQgcGFnZVxuICAgICQoZG9jdW1lbnQpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIFwiLmNhcnQtcHJvZHVjdC1zaXplLW1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNob3VsZFJlZnJlc2hDYXJ0ICYmICQoXCJib2R5XCIpLmhhc0NsYXNzKFwid29vY29tbWVyY2UtY2FydFwiKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIHNob3VsZFJlZnJlc2hDYXJ0ID0gZmFsc2U7IC8vIFJlc2V0IGZsYWdcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcbiAgICAgICAgXCIud29vY29tbWVyY2Utc2hvcCBsaS5wcm9kdWN0IC5wcm9kdWN0LWNhcmQtZGV0YWlscyAuc2hvcC1hZGQtdG8tY2FydC1tb2RhbCAuc2luZ2xlX2FkZF90b19jYXJ0X2J1dHRvbi53cC1lbGVtZW50LWJ1dHRvblwiXG4gICAgKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuc2hvcC1hZGQtdG8tY2FydC1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICAkKFwiLnByb2R1Y3QgLnBzZnctc29jaWFsLXdyYXBcIikuYXBwZW5kVG8oXG4gICAgICAgIFwiI3Byb2R1Y3RTaGFyZUljb25zIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5XCJcbiAgICApO1xuXG4gICAgJChcIi5uYXZiYXItYWRtaW4tZGVza3RvcCBzdmdcIikuYXBwZW5kVG8oXCIubmF2YmFyLWFkbWluIC54b28tZWwtYWN0aW9uLXNjXCIpO1xuXG4gICAgLy8gU2hpZnQgY2hlY2tvdXQgYnV0dG9uIGluIHJpZ2h0IGNvbG91bSBvZiBkZXNrdG9wXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMDAwKSB7XG4gICAgICAgICQoXCIud29vY29tbWVyY2UtY2FydCAuY2hlY2tvdXQtYnV0dG9uLmJ1dHRvblwiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLmNhcnQtY29sbGF0ZXJhbHNcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0IC5hbHRlcm5hdGUtY2FydC1wcm9kdWN0c1wiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNwbGFjZV9vcmRlclwiKS5hcHBlbmRUbyhcbiAgICAgICAgICAgIFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIlxuICAgICAgICApO1xuICAgICAgICAkKFwiLndvb2NvbW1lcmNlLWNoZWNrb3V0ICNvcmRlcl9yZXZpZXdcIikucHJlcGVuZChcbiAgICAgICAgICAgICQoXCIud29vY29tbWVyY2UtY2hlY2tvdXQgI29yZGVyX3Jldmlld19oZWFkaW5nXCIpXG4gICAgICAgICk7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cIndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b29jb21tZXJjZS1kZXNrdG9wLWNvbC1yaWdodFwiPjwvZGl2PmBcbiAgICAgICAgKS5hcHBlbmRUbyhcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXJcIik7XG4gICAgICAgICQoXG4gICAgICAgICAgICBgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciBwLndvb2NvbW1lcmNlLW5vdGljZSxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciB1bC53b29jb21tZXJjZS1vcmRlci1vdmVydmlldyxcbiAgICAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLWNoZWNrb3V0IC53b29jb21tZXJjZS1vcmRlciA+IHBgXG4gICAgICAgICkuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLWxlZnRcIlxuICAgICAgICApO1xuICAgICAgICAkKFxuICAgICAgICAgICAgYC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWN1c3RvbWVyLWRldGFpbHMsXG4gICAgICAgICAgICAgICAgIC53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLW9yZGVyLWRldGFpbHNgXG4gICAgICAgICkuYXBwZW5kVG8oXG4gICAgICAgICAgICBcIi53b29jb21tZXJjZS1jaGVja291dCAud29vY29tbWVyY2Utb3JkZXIgLndvb2NvbW1lcmNlLWRlc2t0b3AtY29sLXJpZ2h0XCJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAkKFwiLndvb2NvbW1lcmNlLXNob3AgLnByb2R1Y3QgYS53b29jb21tZXJjZS1Mb29wUHJvZHVjdC1saW5rXCIpXG4gICAgICAgIC5jb250ZW50cygpXG4gICAgICAgIC51bndyYXAoKVxuICAgICAgICAud3JhcChcIjxkaXY+PC9kaXY+XCIpO1xuXG5cblxuICAgICQoXCIubmF2LXByb2R1Y3QtY2Fyb3VzZWxcIikuZmxpY2tpdHkoe1xuICAgICAgICBjZWxsQWxpZ246IFwibGVmdFwiLFxuICAgICAgICBjb250YWluOiB0cnVlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgJHByb2R1Y3QgPSAkKFwiLndvb2NvbW1lcmNlLXNob3AgLnByb2R1Y3QudHlwZS1wcm9kdWN0LnBvc3QtMTQwNlwiKTtcbiAgICAvLyBpZiAoJHByb2R1Y3QubGVuZ3RoKSB7XG4gICAgLy8gICAgICRwcm9kdWN0LmF0dHIoXCJpZFwiLCBcInN1bW1lckNvbGxlY3Rpb25JZFwiKTtcbiAgICAvLyB9XG5cbiAgICAkKFwiLmhvbWUtYXJyb3dcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9KTtcblxuICAgIC8vIExvYWQgY2FydCBjb3VudCBvbiBwYWdlIGxvYWQgdmlhIEFKQVggKHdvcmtzIHdpdGggQ2xvdWRmbGFyZSBjYWNoaW5nKVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRDb3VudCgpIHtcblxuICAgICAgICAvLyBUcnkgV29vQ29tbWVyY2UgZnJhZ21lbnRzIGZpcnN0XG4gICAgICAgIGlmICh0eXBlb2Ygd2NfYWRkX3RvX2NhcnRfcGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB3Y19hZGRfdG9fY2FydF9wYXJhbXMud2NfYWpheF91cmwpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiB3Y19hZGRfdG9fY2FydF9wYXJhbXMud2NfYWpheF91cmwudG9TdHJpbmcoKS5yZXBsYWNlKCclJWVuZHBvaW50JSUnLCAnZ2V0X3JlZnJlc2hlZF9mcmFnbWVudHMnKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmZyYWdtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEuZnJhZ21lbnRzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChrZXkpLnJlcGxhY2VXaXRoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIFJFU1QgQVBJIGlmIGZyYWdtZW50cyBmYWlsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXJ0Q291bnRWaWFSRVNUKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVc2UgUkVTVCBBUEkgaWYgV29vQ29tbWVyY2UgcGFyYW1zIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgIGxvYWRDYXJ0Q291bnRWaWFSRVNUKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmdW5jdGlvbiB1c2luZyBSRVNUIEFQSVxuICAgIGZ1bmN0aW9uIGxvYWRDYXJ0Q291bnRWaWFSRVNUKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3dwLWpzb24va2lyZ28vdjEvY2FydC1jb3VudCcsXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBXb29Db21tZXJjZSBmcmFnbWVudCByZWZyZXNoIHdpdGggdGhlIGNvdW50IGRhdGFcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLnRyaWdnZXIoJ3djX2ZyYWdtZW50X3JlZnJlc2gnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vIHBhZ2UtbG9hZCBjYWxsIGhlcmU6IHRoZSBzaWRlIGNhcnQncyBvd24gcGFnZS1sb2FkIHJlZnJlc2ggcmV0dXJuc1xuICAgIC8vIHRoZSBzYW1lIGZyYWdtZW50cyAoc3Bhbi5jYXJ0LWNvdW50IGluY2x1ZGVkKS4gTGlzdGVuaW5nIHRvXG4gICAgLy8gd2NfZnJhZ21lbnRzX3JlZnJlc2hlZCBpcyBhbHNvIGdvbmUsIGJlY2F1c2UgdGhlIHNpZGUgY2FydCBmaXJlcyBpdFxuICAgIC8vIGFmdGVyIHRoYXQgcmVmcmVzaCBhbmQgcmUtYXNraW5nIG1hZGUgYSB0aGlyZCBpZGVudGljYWwgcmVxdWVzdC5cbiAgICAvLyBhZGRlZF90b19jYXJ0IGlzIG5vdCBsaXN0ZW5lZCB0byBlaXRoZXI6IHRoZSBzaWRlIGNhcnQgYWxyZWFkeSBhcHBsaWVzXG4gICAgLy8gdGhlIGZyYWdtZW50cyBmcm9tIGl0cyBhZGQtdG8tY2FydCByZXNwb25zZSwgYW5kIG9uIHByb2R1Y3QgcGFnZXMgdGhlXG4gICAgLy8gcmUtYXNrIHdhcyBjdXQgb2ZmIGJ5IHRoZSByZWRpcmVjdCB0byB0aGUgY2FydC5cbiAgICAvLyB3Y19jYXJ0X2VtcHRpZWQgY292ZXJzIHJlbW92aW5nIHRoZSBsYXN0IGl0ZW0gb24gdGhlIGNhcnQgcGFnZSwgd2hlcmVcbiAgICAvLyBXb29Db21tZXJjZSBza2lwcyB1cGRhdGVkX2NhcnRfdG90YWxzIGFuZCB0aGUgaGVhZGVyIGtlcHQgdGhlIG9sZCBjb3VudC5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdyZW1vdmVkX2Zyb21fY2FydCB1cGRhdGVkX2NhcnRfdG90YWxzIHdjX2NhcnRfZW1wdGllZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVDYXJ0Q291bnQoKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Fzc2V0cy9kaXN0L2pzL2FwcFwiOiAwLFxuXHRcInN0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2FwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsia2lyZ29CYWdDb3VudCIsIm1hdGNoIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJzZUludCIsImluZGV4T2YiLCJraXJnb1Nob3dCYWdDb3VudCIsImNvdW50IiwialF1ZXJ5IiwidGV4dCIsImFqYXhQcmVmaWx0ZXIiLCJvcHRpb25zIiwib3JpZ2luYWxPcHRpb25zIiwianFYSFIiLCJTdHJpbmciLCJ1cmwiLCJvbkNhcnRPckNoZWNrb3V0IiwieG9vX3dzY19wYXJhbXMiLCJpc0NhcnQiLCJpc0NoZWNrb3V0IiwiYWJvcnQiLCJ3aW5kb3ciLCJvbiIsImUiLCJvcmlnaW5hbEV2ZW50IiwicGVyc2lzdGVkIiwicmVhZHkiLCIkIiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwibmF2YmFyIiwiY2xhc3NOYW1lIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwic2Nyb2xsIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwiYXV0b1BsYXkiLCIkYmxvZ0Nhcm91c2VsIiwicHJldk5leHRCdXR0b25zIiwiZnJlZVNjcm9sbCIsImNvbnRhaW4iLCJjZWxsQWxpZ24iLCJwYWdlRG90cyIsIiRnYWxsZXJ5Q2Fyb3VzZWwiLCJ0b2dnbGUiLCJlbGVtZW50IiwibmV3VGV4dCIsInJldmlld0Rlc2NyaXB0aW9uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm9yaWdpbmFsVGV4dCIsInRleHRDb250ZW50IiwicXVvdGVkVGV4dCIsImNvbmNhdCIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwiJGlucHV0IiwiY2xvc2VzdCIsImZpbmQiLCJjdXJyZW50VmFsIiwidmFsIiwibmV3VmFsIiwidHJpZ2dlciIsImF0dHIiLCJpbnB1dEVsZW1lbnRzT25DaGVja291dCIsImlucHV0RWxlbWVudHNPblNpZ25JbiIsImlucHV0RWxlbWVudHNGb3JTaGlwcGluZ0FkZHJlc3MiLCJpbnB1dEVsZW1lbnRzT25SZWdpc3RlciIsInJlcGxhY2VQbGFjZWhvbGRlcldpdGhMYWJlbCIsImlucHV0RWxlbWVudCIsImVhY2giLCJsYWJlbFZhbCIsImlucHV0TmFtZSIsImlucHV0UGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJuZXdFbGVtZW50IiwiYWZ0ZXIiLCJhY2NvdW50UGFnZUVsZW1lbnQiLCJuZXdBY2NvdW50UGFnZUVsZW1lbnQiLCJjc3MiLCJzaWduSW5UZXh0RWxlbWVudCIsInNpZ25Jbk5ld1RleHQiLCJyZWdpc3RlclRleHRFbGVtZW50IiwicmVnaXN0ZXJOZXdUZXh0Iiwic2lnbkluVGV4dEJ1dHRvbkVsZW1lbnQiLCJzaWduSW5CdXR0b25OZXdUZXh0IiwiaGlkZSIsIndvcmRzIiwidHJpbSIsInNwbGl0IiwiaW5jbHVkZXMiLCJsYXN0V29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2l6ZU9yZGVyIiwiJHN0YWdpbmciLCIkY29udGFpbmVyIiwicHJldiIsImZpcnN0IiwiYXBwZW5kVG8iLCJyZW1vdmUiLCIkaXRlbXMiLCJzb3J0ZWQiLCJ0b0FycmF5Iiwic29ydCIsImEiLCJiIiwiYU5hbWUiLCJiTmFtZSIsImFJZHgiLCJiSWR4IiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsImFsbFZhbGlkIiwicmVxdWlyZWRJbnB1dEZpZWxkcyIsImlucHV0VmFsIiwiYnV0dG9uIiwicHJvcCIsIiRjaGVja291dEJ1dHRvbkFuY2VzdG9yIiwiJGNoZWNrb3V0TmVzdGVkQnV0dG9uIiwiJGNhcnRCdXR0b25BbmNlc3RvciIsIiRjYXJ0TmVzdGVkQnV0dG9uIiwibG9jYXRpb24iLCJocmVmIiwiZXZlbnQiLCJhZGRDbGFzcyIsInBhcmVudCIsIndvdyIsIldPVyIsImluaXQiLCJvZmYiLCJib2R5IiwiZnJhZ21lbnRzIiwiY2FydF9oYXNoIiwid2NfYWRkX3RvX2NhcnRfcGFyYW1zIiwiY2FydF91cmwiLCJzaG91bGRSZWZyZXNoQ2FydCIsIm1vZGFsIiwicmVsb2FkIiwic2NyZWVuIiwid2lkdGgiLCJwcmVwZW5kIiwiY29udGVudHMiLCJ1bndyYXAiLCJ3cmFwIiwiYWRhcHRpdmVIZWlnaHQiLCJoaXN0b3J5IiwiYmFjayIsInVwZGF0ZUNhcnRDb3VudCIsIndjX2FqYXhfdXJsIiwiYWpheCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImtleSIsInZhbHVlIiwicmVwbGFjZVdpdGgiLCJlcnJvciIsInhociIsInN0YXR1cyIsImxvYWRDYXJ0Q291bnRWaWFSRVNUIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9