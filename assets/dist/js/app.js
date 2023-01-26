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

eval("$(document).ready(function () {\n  // Navbar Menu\n\n  $(\".navbar-hamburger\").click(function (e) {\n    e.preventDefault();\n    $(\".navbar\").toggleClass(\"active.white-background\");\n    $(\".navbar\").toggleClass(\"active\");\n    $(\"body\").toggleClass(\"isFixed\");\n    return false;\n  });\n  $(\".navbar-links\").scroll(function () {\n    var scroll = $(\".navbar-links\").scrollTop();\n    if (scroll > 10 && !$(\".active\").hasClass(\"white-background\") || scroll === 0 && $(\".active\").hasClass(\"white-background\")) {\n      $(\".active\").toggleClass(\"white-background\");\n    }\n  });\n  // Home Slider\n\n  var $homeCarousel = $(\".home-carousel\").flickity({\n    // imagesLoaded: true,\n    // percentPosition: false,\n    wrapAround: true,\n    pageDots: false,\n    autoPlay: true\n  });\n\n  // Parallax effect\n  // var $slideImages = $homeCarousel.find(\".slider-image\")\n  // var $slideText = $homeCarousel.find(\".carousel-cell__text\")\n\n  // // get transform property\n  // var docStyle = document.documentElement.style\n  // var transformProp =\n  // \ttypeof docStyle.transform == \"string\" ? \"transform\" : \"WebkitTransform\"\n  // // get Flickity instance\n  // var flkty = $homeCarousel.data(\"flickity\")\n\n  // $homeCarousel.on(\"scroll.flickity\", function () {\n  // \tflkty.slides.forEach(function (slide, i) {\n  // \t\tvar img = $slideImages[i]\n  // \t\tvar text = $slideText[i]\n  // \t\tvar x = ((slide.target + flkty.x) * -1) / 3\n  // \t\timg.style[transformProp] = \"translateX(\" + x + \"px)\"\n  // \t\ttext.style[transformProp] = \"translateX(\" + x + \"px)\"\n  // \t})\n  // })\n\n  // Blog Slider\n\n  var $blogCarousel = $(\".blog-carousel\").flickity({\n    pageDots: false,\n    prevNextButtons: false,\n    freeScroll: true,\n    contain: true\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwicGFnZURvdHMiLCJhdXRvUGxheSIsIiRibG9nQ2Fyb3VzZWwiLCJwcmV2TmV4dEJ1dHRvbnMiLCJmcmVlU2Nyb2xsIiwiY29udGFpbiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcz8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0Ly8gTmF2YmFyIE1lbnVcblxuXHQkKFwiLm5hdmJhci1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHQkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZS53aGl0ZS1iYWNrZ3JvdW5kXCIpXG5cdFx0JChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIilcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzRml4ZWRcIilcblxuXHRcdHJldHVybiBmYWxzZVxuXHR9KVxuXG5cdCQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHNjcm9sbCA9ICQoXCIubmF2YmFyLWxpbmtzXCIpLnNjcm9sbFRvcCgpXG5cdFx0aWYgKFxuXHRcdFx0KHNjcm9sbCA+IDEwICYmICEkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpIHx8XG5cdFx0XHQoc2Nyb2xsID09PSAwICYmICQoXCIuYWN0aXZlXCIpLmhhc0NsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKSlcblx0XHQpIHtcblx0XHRcdCQoXCIuYWN0aXZlXCIpLnRvZ2dsZUNsYXNzKFwid2hpdGUtYmFja2dyb3VuZFwiKVxuXHRcdH1cblx0fSlcblx0Ly8gSG9tZSBTbGlkZXJcblxuXHR2YXIgJGhvbWVDYXJvdXNlbCA9ICQoXCIuaG9tZS1jYXJvdXNlbFwiKS5mbGlja2l0eSh7XG5cdFx0Ly8gaW1hZ2VzTG9hZGVkOiB0cnVlLFxuXHRcdC8vIHBlcmNlbnRQb3NpdGlvbjogZmFsc2UsXG5cdFx0d3JhcEFyb3VuZDogdHJ1ZSxcblx0XHRwYWdlRG90czogZmFsc2UsXG5cdFx0YXV0b1BsYXk6IHRydWUsXG5cdH0pXG5cblx0Ly8gUGFyYWxsYXggZWZmZWN0XG5cdC8vIHZhciAkc2xpZGVJbWFnZXMgPSAkaG9tZUNhcm91c2VsLmZpbmQoXCIuc2xpZGVyLWltYWdlXCIpXG5cdC8vIHZhciAkc2xpZGVUZXh0ID0gJGhvbWVDYXJvdXNlbC5maW5kKFwiLmNhcm91c2VsLWNlbGxfX3RleHRcIilcblxuXHQvLyAvLyBnZXQgdHJhbnNmb3JtIHByb3BlcnR5XG5cdC8vIHZhciBkb2NTdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuXHQvLyB2YXIgdHJhbnNmb3JtUHJvcCA9XG5cdC8vIFx0dHlwZW9mIGRvY1N0eWxlLnRyYW5zZm9ybSA9PSBcInN0cmluZ1wiID8gXCJ0cmFuc2Zvcm1cIiA6IFwiV2Via2l0VHJhbnNmb3JtXCJcblx0Ly8gLy8gZ2V0IEZsaWNraXR5IGluc3RhbmNlXG5cdC8vIHZhciBmbGt0eSA9ICRob21lQ2Fyb3VzZWwuZGF0YShcImZsaWNraXR5XCIpXG5cblx0Ly8gJGhvbWVDYXJvdXNlbC5vbihcInNjcm9sbC5mbGlja2l0eVwiLCBmdW5jdGlvbiAoKSB7XG5cdC8vIFx0ZmxrdHkuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpKSB7XG5cdC8vIFx0XHR2YXIgaW1nID0gJHNsaWRlSW1hZ2VzW2ldXG5cdC8vIFx0XHR2YXIgdGV4dCA9ICRzbGlkZVRleHRbaV1cblx0Ly8gXHRcdHZhciB4ID0gKChzbGlkZS50YXJnZXQgKyBmbGt0eS54KSAqIC0xKSAvIDNcblx0Ly8gXHRcdGltZy5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IFwidHJhbnNsYXRlWChcIiArIHggKyBcInB4KVwiXG5cdC8vIFx0XHR0ZXh0LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gXCJ0cmFuc2xhdGVYKFwiICsgeCArIFwicHgpXCJcblx0Ly8gXHR9KVxuXHQvLyB9KVxuXG5cdC8vIEJsb2cgU2xpZGVyXG5cblx0dmFyICRibG9nQ2Fyb3VzZWwgPSAkKFwiLmJsb2ctY2Fyb3VzZWxcIikuZmxpY2tpdHkoe1xuXHRcdHBhZ2VEb3RzOiBmYWxzZSxcblx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdGZyZWVTY3JvbGw6IHRydWUsXG5cdFx0Y29udGFpbjogdHJ1ZSxcblx0fSlcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUM3Qjs7RUFFQUYsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNHLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDekNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNNLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztJQUNuRE4sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDTSxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ2xDTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNNLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsT0FBTyxLQUFLO0VBQ2IsQ0FBQyxDQUFDO0VBRUZOLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ08sTUFBTSxDQUFDLFlBQVk7SUFDckMsSUFBSUEsTUFBTSxHQUFHUCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNRLFNBQVMsRUFBRTtJQUMzQyxJQUNFRCxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUNQLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQ3pERixNQUFNLEtBQUssQ0FBQyxJQUFJUCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNTLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBRSxFQUMxRDtNQUNEVCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNNLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztJQUM3QztFQUNELENBQUMsQ0FBQztFQUNGOztFQUVBLElBQUlJLGFBQWEsR0FBR1YsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNXLFFBQVEsQ0FBQztJQUNoRDtJQUNBO0lBQ0FDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxRQUFRLEVBQUUsS0FBSztJQUNmQyxRQUFRLEVBQUU7RUFDWCxDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUEsSUFBSUMsYUFBYSxHQUFHZixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1csUUFBUSxDQUFDO0lBQ2hERSxRQUFRLEVBQUUsS0FBSztJQUNmRyxlQUFlLEVBQUUsS0FBSztJQUN0QkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLE9BQU8sRUFBRTtFQUNWLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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
/******/ 			"assets/dist/css/app": 0
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
/******/ 	__webpack_require__.O(undefined, ["assets/dist/css/app"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/dist/css/app"], () => (__webpack_require__("./assets/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;