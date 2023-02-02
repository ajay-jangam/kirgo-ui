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

eval("jQuery(document).ready(function ($) {\n  // Navbar Menu\n\n  $(\".navbar-hamburger\").click(function (e) {\n    e.preventDefault();\n    $(\".navbar\").toggleClass(\"active.white-background\");\n    $(\".navbar\").toggleClass(\"active\");\n    $(\"body\").toggleClass(\"isFixed\");\n    return false;\n  });\n  $(\".navbar-links\").scroll(function () {\n    var scroll = $(\".navbar-links\").scrollTop();\n    if (scroll > 10 && !$(\".active\").hasClass(\"white-background\") || scroll === 0 && $(\".active\").hasClass(\"white-background\")) {\n      $(\".active\").toggleClass(\"white-background\");\n    }\n  });\n  // Home Slider\n\n  var $homeCarousel = $(\".home-carousel\").flickity({\n    // imagesLoaded: true,\n    // percentPosition: false,\n    wrapAround: true,\n    pageDots: false,\n    autoPlay: true\n  });\n\n  // Parallax effect\n  // var $slideImages = $homeCarousel.find(\".slider-image\")\n  // var $slideText = $homeCarousel.find(\".carousel-cell__text\")\n\n  // // get transform property\n  // var docStyle = document.documentElement.style\n  // var transformProp =\n  // \ttypeof docStyle.transform == \"string\" ? \"transform\" : \"WebkitTransform\"\n  // // get Flickity instance\n  // var flkty = $homeCarousel.data(\"flickity\")\n\n  // $homeCarousel.on(\"scroll.flickity\", function () {\n  // \tflkty.slides.forEach(function (slide, i) {\n  // \t\tvar img = $slideImages[i]\n  // \t\tvar text = $slideText[i]\n  // \t\tvar x = ((slide.target + flkty.x) * -1) / 3\n  // \t\timg.style[transformProp] = \"translateX(\" + x + \"px)\"\n  // \t\ttext.style[transformProp] = \"translateX(\" + x + \"px)\"\n  // \t})\n  // })\n\n  // Blog Slider\n\n  var $blogCarousel = $(\".blog-carousel\").flickity({\n    pageDots: false,\n    prevNextButtons: false,\n    freeScroll: true,\n    contain: true\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaGFzQ2xhc3MiLCIkaG9tZUNhcm91c2VsIiwiZmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwicGFnZURvdHMiLCJhdXRvUGxheSIsIiRibG9nQ2Fyb3VzZWwiLCJwcmV2TmV4dEJ1dHRvbnMiLCJmcmVlU2Nyb2xsIiwiY29udGFpbiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcz8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICAvLyBOYXZiYXIgTWVudVxuXG4gICAgJChcIi5uYXZiYXItaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmUud2hpdGUtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiaXNGaXhlZFwiKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKFwiLm5hdmJhci1saW5rc1wiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJChcIi5uYXZiYXItbGlua3NcIikuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChzY3JvbGwgPiAxMCAmJiAhJChcIi5hY3RpdmVcIikuaGFzQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpKSB8fFxuICAgICAgICAgICAgKHNjcm9sbCA9PT0gMCAmJiAkKFwiLmFjdGl2ZVwiKS5oYXNDbGFzcyhcIndoaXRlLWJhY2tncm91bmRcIikpXG4gICAgICAgICkge1xuICAgICAgICAgICAgJChcIi5hY3RpdmVcIikudG9nZ2xlQ2xhc3MoXCJ3aGl0ZS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gSG9tZSBTbGlkZXJcblxuICAgIHZhciAkaG9tZUNhcm91c2VsID0gJChcIi5ob21lLWNhcm91c2VsXCIpLmZsaWNraXR5KHtcbiAgICAgICAgLy8gaW1hZ2VzTG9hZGVkOiB0cnVlLFxuICAgICAgICAvLyBwZXJjZW50UG9zaXRpb246IGZhbHNlLFxuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gUGFyYWxsYXggZWZmZWN0XG4gICAgLy8gdmFyICRzbGlkZUltYWdlcyA9ICRob21lQ2Fyb3VzZWwuZmluZChcIi5zbGlkZXItaW1hZ2VcIilcbiAgICAvLyB2YXIgJHNsaWRlVGV4dCA9ICRob21lQ2Fyb3VzZWwuZmluZChcIi5jYXJvdXNlbC1jZWxsX190ZXh0XCIpXG5cbiAgICAvLyAvLyBnZXQgdHJhbnNmb3JtIHByb3BlcnR5XG4gICAgLy8gdmFyIGRvY1N0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlXG4gICAgLy8gdmFyIHRyYW5zZm9ybVByb3AgPVxuICAgIC8vIFx0dHlwZW9mIGRvY1N0eWxlLnRyYW5zZm9ybSA9PSBcInN0cmluZ1wiID8gXCJ0cmFuc2Zvcm1cIiA6IFwiV2Via2l0VHJhbnNmb3JtXCJcbiAgICAvLyAvLyBnZXQgRmxpY2tpdHkgaW5zdGFuY2VcbiAgICAvLyB2YXIgZmxrdHkgPSAkaG9tZUNhcm91c2VsLmRhdGEoXCJmbGlja2l0eVwiKVxuXG4gICAgLy8gJGhvbWVDYXJvdXNlbC5vbihcInNjcm9sbC5mbGlja2l0eVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gXHRmbGt0eS5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGkpIHtcbiAgICAvLyBcdFx0dmFyIGltZyA9ICRzbGlkZUltYWdlc1tpXVxuICAgIC8vIFx0XHR2YXIgdGV4dCA9ICRzbGlkZVRleHRbaV1cbiAgICAvLyBcdFx0dmFyIHggPSAoKHNsaWRlLnRhcmdldCArIGZsa3R5LngpICogLTEpIC8gM1xuICAgIC8vIFx0XHRpbWcuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBcInRyYW5zbGF0ZVgoXCIgKyB4ICsgXCJweClcIlxuICAgIC8vIFx0XHR0ZXh0LnN0eWxlW3RyYW5zZm9ybVByb3BdID0gXCJ0cmFuc2xhdGVYKFwiICsgeCArIFwicHgpXCJcbiAgICAvLyBcdH0pXG4gICAgLy8gfSlcblxuICAgIC8vIEJsb2cgU2xpZGVyXG5cbiAgICB2YXIgJGJsb2dDYXJvdXNlbCA9ICQoXCIuYmxvZy1jYXJvdXNlbFwiKS5mbGlja2l0eSh7XG4gICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFVBQVVDLENBQUMsRUFBRTtFQUNoQzs7RUFFQUEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDdENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCSCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztJQUNuREosQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ2xDSixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNJLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsT0FBTyxLQUFLO0VBQ2hCLENBQUMsQ0FBQztFQUVGSixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNLLE1BQU0sQ0FBQyxZQUFZO0lBQ2xDLElBQUlBLE1BQU0sR0FBR0wsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDTSxTQUFTLEVBQUU7SUFDM0MsSUFDS0QsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNPLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUN6REYsTUFBTSxLQUFLLENBQUMsSUFBSUwsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDTyxRQUFRLENBQUMsa0JBQWtCLENBQUUsRUFDN0Q7TUFDRVAsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDSSxXQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDaEQ7RUFDSixDQUFDLENBQUM7RUFDRjs7RUFFQSxJQUFJSSxhQUFhLEdBQUdSLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUyxRQUFRLENBQUM7SUFDN0M7SUFDQTtJQUNBQyxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBLElBQUlDLGFBQWEsR0FBR2IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNTLFFBQVEsQ0FBQztJQUM3Q0UsUUFBUSxFQUFFLEtBQUs7SUFDZkcsZUFBZSxFQUFFLEtBQUs7SUFDdEJDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxPQUFPLEVBQUU7RUFDYixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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