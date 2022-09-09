/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function() {

var burger_btn = document.querySelector('.burger__btn');
var close_main_menu_btn;
var menu = document.querySelector('.main-menu');
var menu_close_btn = document.querySelector('.main-menu__btn-close');
burger_btn.addEventListener('click', function (e) {
  if (!menu.classList.contains('main-menu__js-is-active')) menu.classList.add('main-menu__js-is-active');
});
menu_close_btn.addEventListener('click', function (e) {
  if (menu.classList.contains('main-menu__js-is-active')) menu.classList.remove('main-menu__js-is-active');
});

/***/ }),

/***/ "./src/blocks/components/items-box/items-box.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/items-box/items-box.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakpointChecker": function() { return /* binding */ breakpointChecker; },
/* harmony export */   "enableSwiper": function() { return /* binding */ enableSwiper; },
/* harmony export */   "items_box_shower": function() { return /* binding */ items_box_shower; }
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



(function () {
  var throttle = function throttle(type, name, obj) {
    obj = obj || window;
    var running = false;

    var func = function func() {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };
  /* init - you can init any event */


  throttle('resize', 'optimizedResize');
})();

var items_box_shower = function items_box_shower(items_container, btn_shower) {
  if (!items_container.classList.contains('items-box__wrapper--expanded')) {
    items_container.classList.add('items-box__wrapper--expanded');
    btn_shower.innerText = 'Свернуть';
    btn_shower.classList.add('link-more--expanded');
  } else {
    items_container.classList.remove('items-box__wrapper--expanded');
    items_container.classList.add('items-box__wrapper');
    btn_shower.classList.remove('link-more--expanded');
    btn_shower.innerText = 'Показать все';
  }
};

var swiper;

var breakpointChecker = function breakpointChecker(swiper_container, breakpoint) {
  console.log(breakpoint.matches); //let swiper;

  if (breakpoint.matches === true) {
    console.log(swiper);
    if (swiper !== undefined) swiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    // fire small viewport version of swiper
    console.log('breakpoint false' + ' swiper enable ');
    swiper = enableSwiper(swiper_container);
  } //console.log(swiper);

};

var enableSwiper = function enableSwiper(container) {
  var _Swiper;

  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](container, (_Swiper = {
    slidesPerView: 1
  }, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "spaceBetween", 15), _defineProperty(_Swiper, "autoplay", true), _defineProperty(_Swiper, "pagination", {
    el: '.swiper-pagination',
    clickable: true
  }), _Swiper));
  return swiper;
};



/***/ }),

/***/ "./src/blocks/modules/brands/brands.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/brands/brands.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/items-box/items-box */ "./src/blocks/components/items-box/items-box.js");


var brands_container = document.querySelector('.brands__wrapper');
var brands__swiper = undefined;
var brands__swiper_container = document.querySelector('.brands__swiper');
var brands__btn = document.querySelector('.brands__js-btn-shower');
var breakpoint = window.matchMedia('(min-width: 768px)');
brands__btn.addEventListener('click', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.items_box_shower)(brands_container, brands__btn);
}); // const enableSwiper = function () {
// 	let swiper;
// 	swiper = new Swiper('.brands__swiper', {
// 		slidesPerView: 1,
// 		slidesPerView: 'auto',
// 		spaceBetween: 15,
// 		autoplay: true,
// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true,
// 		},
// 	});
// 	return swiper;
// 	console.log('onn 1');
// };
// const breakpointChecker = function () {
// 	console.log(breakpoint.matches);
// 	if (breakpoint.matches === true) {
// 		if (swiper !== undefined) swiper.destroy(true, true);
// 		return;
// 	} else if (breakpoint.matches === false) {
// 		// fire small viewport version of swiper
// 		console.log('onn ');
// 		enableSwiper();
// 	}
// };

(0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(brands__swiper_container, breakpoint);
window.addEventListener('optimizedResize', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(brands__swiper_container, breakpoint);
});

/***/ }),

/***/ "./src/blocks/modules/price/price.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/price/price.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/items-box/items-box */ "./src/blocks/components/items-box/items-box.js");


var price_container = document.querySelector('.price__wrapper');
var price__btn = document.querySelector('.price__js-btn-shower');
var price__swiper_container = document.querySelector('.price__swiper');
var price__swiper = undefined;
var breakpoint = window.matchMedia('(min-width: 768px)');
price__btn.addEventListener('click', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.items_box_shower)(price_container, price__btn);
});
(0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(price__swiper_container, breakpoint);
window.addEventListener('optimizedResize', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(price__swiper_container, breakpoint);
});

/***/ }),

/***/ "./src/blocks/modules/repair/repair.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/repair/repair.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/items-box/items-box */ "./src/blocks/components/items-box/items-box.js");


var repair_container = document.querySelector('.repair__wrapper');
var repair__btn = document.querySelector('.repair__js-btn-shower');
var repair__swiper_container = document.querySelector('.repair__swiper');
var repair__swiper = undefined;
var breakpoint = window.matchMedia('(min-width: 768px)');
repair__btn.addEventListener('click', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.items_box_shower)(repair_container, repair__btn);
});
(0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(repair__swiper_container, breakpoint);
window.addEventListener('optimizedResize', function () {
  console.log(123);
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(repair__swiper_container, breakpoint);
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/brands/brands */ "./src/blocks/modules/brands/brands.js");
/* harmony import */ var _modules_repair_repair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/repair/repair */ "./src/blocks/modules/repair/repair.js");
/* harmony import */ var _modules_price_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/price/price */ "./src/blocks/modules/price/price.js");




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map