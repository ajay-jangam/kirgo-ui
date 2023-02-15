/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  // Navbar Menu\n\n  $(\".navbar-hamburger\").click(function (e) {\n    e.preventDefault();\n    $(\".navbar\").toggleClass(\"active.white-background\");\n    $(\".navbar\").toggleClass(\"active\");\n    $(\"body\").toggleClass(\"isFixed\");\n    return false;\n  });\n  $(\".navbar-links\").scroll(function () {\n    var scroll = $(\".navbar-links\").scrollTop();\n    if (scroll > 10 && !$(\".active\").hasClass(\"white-background\") || scroll === 0 && $(\".active\").hasClass(\"white-background\")) {\n      $(\".active\").toggleClass(\"white-background\");\n    }\n  });\n  // Home Slider\n\n  var $homeCarousel = $(\".home-carousel\").flickity({\n    // imagesLoaded: true,\n    // percentPosition: false,\n    wrapAround: true,\n    pageDots: false,\n    autoPlay: true\n  });\n\n  // Parallax effect\n  // var $slideImages = $homeCarousel.find(\".slider-image\")\n  // var $slideText = $homeCarousel.find(\".carousel-cell__text\")\n\n  // // get transform property\n  // var docStyle = document.documentElement.style\n  // var transformProp =\n  // \ttypeof docStyle.transform == \"string\" ? \"transform\" : \"WebkitTransform\"\n  // // get Flickity instance\n  // var flkty = $homeCarousel.data(\"flickity\")\n\n  // $homeCarousel.on(\"scroll.flickity\", function () {\n  // \tflkty.slides.forEach(function (slide, i) {\n  // \t\tvar img = $slideImages[i]\n  // \t\tvar text = $slideText[i]\n  // \t\tvar x = ((slide.target + flkty.x) * -1) / 3\n  // \t\timg.style[transformProp] = \"translateX(\" + x + \"px)\"\n  // \t\ttext.style[transformProp] = \"translateX(\" + x + \"px)\"\n  // \t})\n  // })\n\n  // Blog Slider\n\n  var $blogCarousel = $(\".blog-carousel\");\n\n  // $blogCarousel.on(\"scroll.flickity\", function () {\n  //     console.log(\"Flickity ready\");\n  // });\n\n  $blogCarousel.flickity({\n    // pageDots: false,\n    wrapAround: true,\n    prevNextButtons: false,\n    freeScroll: true,\n    contain: true,\n    cellAlign: \"left\"\n  });\n\n  // $blogCarousel.flickity();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJoYXNDbGFzcyIsIiRob21lQ2Fyb3VzZWwiLCJmbGlja2l0eSIsIndyYXBBcm91bmQiLCJwYWdlRG90cyIsImF1dG9QbGF5IiwiJGJsb2dDYXJvdXNlbCIsInByZXZOZXh0QnV0dG9ucyIsImZyZWVTY3JvbGwiLCJjb250YWluIiwiY2VsbEFsaWduIl0sInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2Fzc2V0cy9qcy9hcHAuanM/MjVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgLy8gTmF2YmFyIE1lbnVcblxuICAgICQoXCIubmF2YmFyLWhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlLndoaXRlLWJhY2tncm91bmRcIik7XG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzRml4ZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc2Nyb2xsID4gMTAgJiYgISQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSkgfHxcbiAgICAgICAgICAgIChzY3JvbGwgPT09IDAgJiYgJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgICQoXCIuYWN0aXZlXCIpLnRvZ2dsZUNsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEhvbWUgU2xpZGVyXG5cbiAgICB2YXIgJGhvbWVDYXJvdXNlbCA9ICQoXCIuaG9tZS1jYXJvdXNlbFwiKS5mbGlja2l0eSh7XG4gICAgICAgIC8vIGltYWdlc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgLy8gcGVyY2VudFBvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBhdXRvUGxheTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIFBhcmFsbGF4IGVmZmVjdFxuICAgIC8vIHZhciAkc2xpZGVJbWFnZXMgPSAkaG9tZUNhcm91c2VsLmZpbmQoXCIuc2xpZGVyLWltYWdlXCIpXG4gICAgLy8gdmFyICRzbGlkZVRleHQgPSAkaG9tZUNhcm91c2VsLmZpbmQoXCIuY2Fyb3VzZWwtY2VsbF9fdGV4dFwiKVxuXG4gICAgLy8gLy8gZ2V0IHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgIC8vIHZhciBkb2NTdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuICAgIC8vIHZhciB0cmFuc2Zvcm1Qcm9wID1cbiAgICAvLyBcdHR5cGVvZiBkb2NTdHlsZS50cmFuc2Zvcm0gPT0gXCJzdHJpbmdcIiA/IFwidHJhbnNmb3JtXCIgOiBcIldlYmtpdFRyYW5zZm9ybVwiXG4gICAgLy8gLy8gZ2V0IEZsaWNraXR5IGluc3RhbmNlXG4gICAgLy8gdmFyIGZsa3R5ID0gJGhvbWVDYXJvdXNlbC5kYXRhKFwiZmxpY2tpdHlcIilcblxuICAgIC8vICRob21lQ2Fyb3VzZWwub24oXCJzY3JvbGwuZmxpY2tpdHlcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFx0ZmxrdHkuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpKSB7XG4gICAgLy8gXHRcdHZhciBpbWcgPSAkc2xpZGVJbWFnZXNbaV1cbiAgICAvLyBcdFx0dmFyIHRleHQgPSAkc2xpZGVUZXh0W2ldXG4gICAgLy8gXHRcdHZhciB4ID0gKChzbGlkZS50YXJnZXQgKyBmbGt0eS54KSAqIC0xKSAvIDNcbiAgICAvLyBcdFx0aW1nLnN0eWxlW3RyYW5zZm9ybVByb3BdID0gXCJ0cmFuc2xhdGVYKFwiICsgeCArIFwicHgpXCJcbiAgICAvLyBcdFx0dGV4dC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IFwidHJhbnNsYXRlWChcIiArIHggKyBcInB4KVwiXG4gICAgLy8gXHR9KVxuICAgIC8vIH0pXG5cbiAgICAvLyBCbG9nIFNsaWRlclxuXG4gICAgdmFyICRibG9nQ2Fyb3VzZWwgPSAkKFwiLmJsb2ctY2Fyb3VzZWxcIik7XG5cbiAgICAvLyAkYmxvZ0Nhcm91c2VsLm9uKFwic2Nyb2xsLmZsaWNraXR5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJGbGlja2l0eSByZWFkeVwiKTtcbiAgICAvLyB9KTtcblxuICAgICRibG9nQ2Fyb3VzZWwuZmxpY2tpdHkoe1xuICAgICAgICAvLyBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXG4gICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgfSk7XG5cbiAgICAvLyAkYmxvZ0Nhcm91c2VsLmZsaWNraXR5KCk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7RUFDaEM7O0VBRUFBLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBVUMsQ0FBQyxFQUFFO0lBQ3RDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkgsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxXQUFXLENBQUMseUJBQXlCLENBQUM7SUFDbkRKLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNsQ0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDSSxXQUFXLENBQUMsU0FBUyxDQUFDO0lBRWhDLE9BQU8sS0FBSztFQUNoQixDQUFDLENBQUM7RUFFRkosQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDSyxNQUFNLENBQUMsWUFBWTtJQUNsQyxJQUFJQSxNQUFNLEdBQUdMLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ00sU0FBUyxFQUFFO0lBQzNDLElBQ0tELE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDTyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFDekRGLE1BQU0sS0FBSyxDQUFDLElBQUlMLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ08sUUFBUSxDQUFDLGtCQUFrQixDQUFFLEVBQzdEO01BQ0VQLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0ksV0FBVyxDQUFDLGtCQUFrQixDQUFDO0lBQ2hEO0VBQ0osQ0FBQyxDQUFDO0VBQ0Y7O0VBRUEsSUFBSUksYUFBYSxHQUFHUixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1MsUUFBUSxDQUFDO0lBQzdDO0lBQ0E7SUFDQUMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFFBQVEsRUFBRSxLQUFLO0lBQ2ZDLFFBQVEsRUFBRTtFQUNkLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQSxJQUFJQyxhQUFhLEdBQUdiLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQzs7RUFFdkM7RUFDQTtFQUNBOztFQUVBYSxhQUFhLENBQUNKLFFBQVEsQ0FBQztJQUNuQjtJQUNBQyxVQUFVLEVBQUUsSUFBSTtJQUNoQkksZUFBZSxFQUFFLEtBQUs7SUFDdEJDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxPQUFPLEVBQUUsSUFBSTtJQUNiQyxTQUFTLEVBQUU7RUFDZixDQUFDLENBQUM7O0VBRUY7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz9jMGUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/sass/app.scss\n");

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