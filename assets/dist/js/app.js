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

eval("$(document).ready(function () {\n  // Navbar Menu\n\n  $(\".navbar-hamburger\").click(function (e) {\n    e.preventDefault();\n    $(\".navbar\").toggleClass(\"active\");\n    return false;\n  });\n  // Home Slider\n\n  // var $carousel = $(\".carousel\").flickity({\n  //     imagesLoaded: true,\n  //     percentPosition: false,\n  // })\n\n  // var $slideImages = $carousel.find(\".slider-image\")\n  // var $slideText = $carousel.find(\".carousel-cell__text\")\n\n  // // get transform property\n  // var docStyle = document.documentElement.style\n  // var transformProp =\n  //     typeof docStyle.transform == \"string\" ? \"transform\" : \"WebkitTransform\"\n  // // get Flickity instance\n  // var flkty = $carousel.data(\"flickity\")\n\n  // $carousel.on(\"scroll.flickity\", function () {\n  //     flkty.slides.forEach(function (slide, i) {\n  //         var img = $slideImages[i]\n  //         var text = $slideText[i]\n  //         var x = ((slide.target + flkty.x) * -1) / 3\n  //         img.style[transformProp] = \"translateX(\" + x + \"px)\"\n  //         text.style[transformProp] = \"translateX(\" + x + \"px)\"\n  //     })\n  // })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzPzI1ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vIE5hdmJhciBNZW51XG5cbiAgICAkKFwiLm5hdmJhci1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICQoXCIubmF2YmFyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgLy8gSG9tZSBTbGlkZXJcblxuICAgIC8vIHZhciAkY2Fyb3VzZWwgPSAkKFwiLmNhcm91c2VsXCIpLmZsaWNraXR5KHtcbiAgICAvLyAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxuICAgIC8vICAgICBwZXJjZW50UG9zaXRpb246IGZhbHNlLFxuICAgIC8vIH0pXG5cbiAgICAvLyB2YXIgJHNsaWRlSW1hZ2VzID0gJGNhcm91c2VsLmZpbmQoXCIuc2xpZGVyLWltYWdlXCIpXG4gICAgLy8gdmFyICRzbGlkZVRleHQgPSAkY2Fyb3VzZWwuZmluZChcIi5jYXJvdXNlbC1jZWxsX190ZXh0XCIpXG5cbiAgICAvLyAvLyBnZXQgdHJhbnNmb3JtIHByb3BlcnR5XG4gICAgLy8gdmFyIGRvY1N0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlXG4gICAgLy8gdmFyIHRyYW5zZm9ybVByb3AgPVxuICAgIC8vICAgICB0eXBlb2YgZG9jU3R5bGUudHJhbnNmb3JtID09IFwic3RyaW5nXCIgPyBcInRyYW5zZm9ybVwiIDogXCJXZWJraXRUcmFuc2Zvcm1cIlxuICAgIC8vIC8vIGdldCBGbGlja2l0eSBpbnN0YW5jZVxuICAgIC8vIHZhciBmbGt0eSA9ICRjYXJvdXNlbC5kYXRhKFwiZmxpY2tpdHlcIilcblxuICAgIC8vICRjYXJvdXNlbC5vbihcInNjcm9sbC5mbGlja2l0eVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGZsa3R5LnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaSkge1xuICAgIC8vICAgICAgICAgdmFyIGltZyA9ICRzbGlkZUltYWdlc1tpXVxuICAgIC8vICAgICAgICAgdmFyIHRleHQgPSAkc2xpZGVUZXh0W2ldXG4gICAgLy8gICAgICAgICB2YXIgeCA9ICgoc2xpZGUudGFyZ2V0ICsgZmxrdHkueCkgKiAtMSkgLyAzXG4gICAgLy8gICAgICAgICBpbWcuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBcInRyYW5zbGF0ZVgoXCIgKyB4ICsgXCJweClcIlxuICAgIC8vICAgICAgICAgdGV4dC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IFwidHJhbnNsYXRlWChcIiArIHggKyBcInB4KVwiXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfSlcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUMxQjs7RUFFQUYsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNHLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDdENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNNLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDbEMsT0FBTyxLQUFLO0VBQ2hCLENBQUMsQ0FBQztFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNKLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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