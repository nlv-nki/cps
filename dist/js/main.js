/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_menu_main_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-menu/main-menu */ "./src/blocks/components/main-menu/main-menu.js");

var burger_btn = document.querySelector('.burger__btn');
var overlay = document.querySelector('.overlay-cat');
burger_btn.addEventListener('click', function (e) {
  overlay.classList.add('active');
  if (!_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_0__.menu.classList.contains('main-menu__js-is-active')) _main_menu_main_menu__WEBPACK_IMPORTED_MODULE_0__.menu.classList.add('main-menu__js-is-active');
});

/***/ }),

/***/ "./src/blocks/components/header-menu/header-menu.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/header-menu/header-menu.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalW_modalW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modalW/modalW */ "./src/blocks/components/modalW/modalW.js");

var header_menu_userlist = document.querySelector('.header-menu__user-list');
var header_menu_services = document.querySelector('.header-menu__services');
header_menu_userlist.addEventListener('click', function (e) {
  var target = e.target.closest('BUTTON');

  if (target.classList.contains('header-menu__btn-feedback')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_0__.modalW_control)('.modal-feedback');
  }

  if (target.classList.contains('header-menu__btn-call')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_0__.modalW_control)('.modal-call');
  }

  if (target.classList.contains('header-menu__btn-profile')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_0__.modalW_control)('.modal-profile');
  }
});
header_menu_services.addEventListener('click', function (e) {
  var target = e.target.closest('A');

  if (target.hash.includes('request')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_0__.modalW_control)('.modal-request');
  }

  if (target.hash.includes('checkstatus')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_0__.modalW_control)('.modal-status');
  }
});

/***/ }),

/***/ "./src/blocks/components/items-box/items-box.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/items-box/items-box.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakpointChecker": function() { return /* binding */ breakpointChecker; },
/* harmony export */   "items_box_shower": function() { return /* binding */ items_box_shower; }
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
var _swiper_params;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var instances = {};
var swiper_params = (_swiper_params = {
  slidesPerView: 1
}, _defineProperty(_swiper_params, "slidesPerView", 'auto'), _defineProperty(_swiper_params, "spaceBetween", 15), _defineProperty(_swiper_params, "autoplay", true), _defineProperty(_swiper_params, "pagination", {
  el: '.swiper-pagination',
  clickable: true
}), _defineProperty(_swiper_params, "Observer", true), _defineProperty(_swiper_params, "Parents", true), _defineProperty(_swiper_params, "onSlideChangeEnd", function onSlideChangeEnd(swiper) {
  swiper.update();
  с;
  mySwiper.startAutoplay();
  mySwiper.reLoop();
}), _swiper_params);

var items_box_shower = function items_box_shower(items_container, btn_shower) {
  var btn_shower_values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    expanded: 'Показать все',
    collapsed: 'Свернуть'
  };

  if (!items_container.classList.contains('items-box__wrapper--expanded')) {
    items_container.classList.add('items-box__wrapper--expanded');
    btn_shower.innerText = btn_shower_values.collapsed;
    btn_shower.classList.add('link-more--expanded');
  } else {
    items_container.classList.remove('items-box__wrapper--expanded');
    items_container.classList.add('items-box__wrapper');
    btn_shower.classList.remove('link-more--expanded');
    btn_shower.innerText = btn_shower_values.expanded;
  }
};

var breakpointChecker = function breakpointChecker(swiper_container, breakpoint) {
  var swiper_instance_name = swiper_container.classList[1];

  if (breakpoint.matches === true) {
    if (instances.hasOwnProperty(swiper_instance_name) === true) {
      swiper_container.firstElementChild.setAttribute('style', '');
      instances[swiper_instance_name].destroy(true, true);
      delete instances[swiper_instance_name];
      return false;
    }
  }

  if (breakpoint.matches === false) {
    if (instances.hasOwnProperty(swiper_instance_name) === false) {
      instances[swiper_instance_name] = enableSwiper(swiper_container);
      return instances[swiper_instance_name];
    }
  }
};

function enableSwiper(container) {
  return new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](container, swiper_params);
}



/***/ }),

/***/ "./src/blocks/components/main-menu/main-menu.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/main-menu/main-menu.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": function() { return /* binding */ menu; }
/* harmony export */ });
/* harmony import */ var _overlay_cat_overlay_cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../overlay-cat/overlay-cat */ "./src/blocks/components/overlay-cat/overlay-cat.js");
/* harmony import */ var _modalW_modalW__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modalW/modalW */ "./src/blocks/components/modalW/modalW.js");


var menu = document.querySelector('.main-menu');
var menu__header = document.querySelector('.main-menu__header');
var menu_close_btn = document.querySelector('.main-menu__btn-close');
var main_menu_userlist = document.querySelector('.main-menu__user-list');
var menu_search_btn = document.querySelector('.main-menu__btn-search');

var close_menu = function close_menu() {
  if (menu.classList.contains('main-menu__js-is-active')) menu.classList.remove('main-menu__js-is-active');
  _overlay_cat_overlay_cat__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.remove('active');
};

menu_close_btn.addEventListener('click', close_menu);
document.addEventListener('overlay_click', close_menu);
menu_search_btn.addEventListener('click', function (e) {
  if (!menu__header.classList.contains('main-menu__search-active')) {
    menu__header.classList.add('main-menu__search-active');
  } else menu__header.classList.remove('main-menu__search-active');
});
main_menu_userlist.addEventListener('click', function (e) {
  var target = e.target.closest('BUTTON');

  if (target.classList.contains('main-menu__btn-feedback')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_1__.modalW_control)('.modal-feedback');
  }

  if (target.classList.contains('main-menu__btn-call')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_1__.modalW_control)('.modal-call');
  }

  if (target.classList.contains('main-menu__btn-profile')) {
    (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_1__.modalW_control)('.modal-profile');
  }
});


/***/ }),

/***/ "./src/blocks/components/modalW/modalW.js":
/*!************************************************!*\
  !*** ./src/blocks/components/modalW/modalW.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "close_modalW": function() { return /* binding */ close_modalW; },
/* harmony export */   "modalW_control": function() { return /* binding */ modalW_control; }
/* harmony export */ });
/* harmony import */ var _overlay_cat_overlay_cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../overlay-cat/overlay-cat */ "./src/blocks/components/overlay-cat/overlay-cat.js");

var modal = undefined;
var modalW_close_btn = undefined;
var is_open = false;

var close_modalW = function close_modalW(modal) {
  if (typeof modal !== 'string') {
    var modal_name = Array.from(modal.classList).filter(function (index) {
      return index.includes('modal-');
    }).join(' ');
    modal = document.querySelector(".".concat(modal_name));
  }

  modal.classList.remove('modalW__js-is-active');
  _overlay_cat_overlay_cat__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.remove('active');
  is_open = false;
};

var open_modalW = function open_modalW(modal) {
  if (!modal.classList.contains('modalW__js-is-active')) {
    modal.classList.add('modalW__js-is-active');
    _overlay_cat_overlay_cat__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.add('active');
    is_open = true;
  }
};

var modalW_control = function modalW_control(modal_name) {
  if (!is_open) {
    modal = document.querySelector(modal_name);
    modalW_close_btn = modal.querySelector('.modalW__btn-close');
  }

  if (!modal.classList.contains('modalW__js-is-active')) {
    open_modalW(modal);
  }

  modalW_close_btn.addEventListener('click', function () {
    close_modalW(modal);
  });
};



/***/ }),

/***/ "./src/blocks/components/overlay-cat/overlay-cat.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/overlay-cat/overlay-cat.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overlay": function() { return /* binding */ overlay; }
/* harmony export */ });
/* harmony import */ var _modalW_modalW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modalW/modalW */ "./src/blocks/components/modalW/modalW.js");

var overlay = document.querySelector('.overlay-cat');
var modal = undefined;
var overlay_click = new Event('overlay_click', {
  bubbles: true,
  cancelable: true,
  composed: false
});
overlay.addEventListener('click', function (e) {
  overlay.dispatchEvent(overlay_click);
});
document.addEventListener('overlay_click', function () {
  modal = document.querySelector('.modalW__js-is-active');
  if (modal) close_modal_overlay(modal);
});

var close_modal_overlay = function close_modal_overlay(modal) {
  overlay.classList.remove('active');
  (0,_modalW_modalW__WEBPACK_IMPORTED_MODULE_0__.close_modalW)(modal);
};



/***/ }),

/***/ "./src/blocks/modules/brands/brands.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/brands/brands.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/items-box/items-box */ "./src/blocks/components/items-box/items-box.js");


var brands_container = document.querySelector('.brands__wrapper');
var brands__swiper;
var brands__swiper_container = document.querySelector('.brands__swiper');
var brands__btn = document.querySelector('.brands__js-btn-shower');
var breakpoint = window.matchMedia('(min-width: 768px)');
brands__btn.addEventListener('click', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.items_box_shower)(brands_container, brands__btn);
});
brands__swiper = (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(brands__swiper_container, breakpoint);
window.addEventListener('resize', function (e) {
  brands__swiper = (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(brands__swiper_container, breakpoint);
});

/***/ }),

/***/ "./src/blocks/modules/price/price.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/price/price.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
price__swiper = (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(price__swiper_container, breakpoint, price__swiper);
window.addEventListener('resize', function () {
  price__swiper = (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_1__.breakpointChecker)(price__swiper_container, breakpoint, price__swiper);
});

/***/ }),

/***/ "./src/blocks/modules/repair/repair.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/repair/repair.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_items_box_items_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/items-box/items-box */ "./src/blocks/components/items-box/items-box.js");

var repair_container = document.querySelector('.repair__wrapper');
var repair__btn = document.querySelector('.repair__js-btn-shower');
var repair__swiper_container = document.querySelector('.repair__swiper');
var repair__swiper = undefined;
var breakpoint = window.matchMedia('(min-width: 768px)');
repair__btn.addEventListener('click', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_0__.items_box_shower)(repair_container, repair__btn);
});
repair__swiper = (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_0__.breakpointChecker)(repair__swiper_container, breakpoint);
window.addEventListener('resize', function () {
  repair__swiper = (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_0__.breakpointChecker)(repair__swiper_container, breakpoint, repair__swiper);
});

/***/ }),

/***/ "./src/blocks/modules/services/services.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/services/services.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_items_box_items_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/items-box/items-box */ "./src/blocks/components/items-box/items-box.js");

var services_container = document.querySelector('.content__description-wrapper');
var services__btn = document.querySelector('.services__js-btn-shower');
var services_btn_shower_values = {
  expanded: 'Читать далее',
  collapsed: 'Свернуть'
};
services__btn.addEventListener('click', function () {
  (0,_components_items_box_items_box__WEBPACK_IMPORTED_MODULE_0__.items_box_shower)(services_container, services__btn, services_btn_shower_values);
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_header_menu_header_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/header-menu/header-menu */ "./src/blocks/components/header-menu/header-menu.js");
/* harmony import */ var _components_overlay_cat_overlay_cat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/overlay-cat/overlay-cat */ "./src/blocks/components/overlay-cat/overlay-cat.js");
/* harmony import */ var _components_modalW_modalW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/modalW/modalW */ "./src/blocks/components/modalW/modalW.js");





/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/brands/brands */ "./src/blocks/modules/brands/brands.js");
/* harmony import */ var _modules_repair_repair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/repair/repair */ "./src/blocks/modules/repair/repair.js");
/* harmony import */ var _modules_price_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/price/price */ "./src/blocks/modules/price/price.js");





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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