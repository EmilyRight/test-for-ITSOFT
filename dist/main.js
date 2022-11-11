/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/burger.js":
/*!**************************************!*\
  !*** ./src/assets/scripts/burger.js ***!
  \**************************************/
/***/ (() => {

eval("/* eslint-disable no-param-reassign */\nvar hiddenIcons = document.querySelectorAll('.icon_hidden');\nvar burger = document.querySelector('.burger');\nvar pseudoBurger = document.querySelector('.burger_pseudo');\nvar navBar = document.querySelector('.header__nav');\nfunction openBurgerNav() {\n  navBar.style.left = 0;\n  hiddenIcons.forEach(function (icon) {\n    icon.style.display = 'none';\n  });\n  burger.style.display = 'none';\n  pseudoBurger.style.display = 'block';\n}\nfunction closeBurgerNav() {\n  navBar.style.left = '-140%';\n  hiddenIcons.forEach(function (icon) {\n    icon.style.display = 'block';\n  });\n  burger.style.display = 'block';\n  pseudoBurger.style.display = 'none';\n}\nburger.addEventListener('click', openBurgerNav);\npseudoBurger.addEventListener('click', closeBurgerNav);\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/scripts/burger.js?");

/***/ }),

/***/ "./src/assets/scripts/description-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/description-slider.js ***!
  \**************************************************/
/***/ (() => {

eval("var sliderItems = document.querySelectorAll('.slider__item');\nvar sliderContainer = document.querySelector('.slider');\nvar sliderContainerInner = document.querySelector('.slider__inner');\nvar descriptionSliderBtnLeft = document.querySelector('.description__btn_left');\nvar descriptionSliderBtnRight = document.querySelector('.description__btn_right');\nvar slidersLength = sliderItems.length;\nvar clicks = 0;\nfunction inactiveBtn() {\n  if (Math.abs(clicks) === slidersLength - 1) {\n    descriptionSliderBtnRight.classList.add('btn_inactive');\n  } else {\n    descriptionSliderBtnRight.classList.remove('btn_inactive');\n  }\n  if (Math.abs(clicks) === 0) {\n    descriptionSliderBtnLeft.classList.add('btn_inactive');\n  } else {\n    descriptionSliderBtnLeft.classList.remove('btn_inactive');\n  }\n}\nfunction moveToLeft() {\n  var sliderWidth = sliderContainer.clientWidth;\n  if (Math.abs(clicks) !== 0) {\n    clicks += 1;\n    sliderContainerInner.style.left = \"calc(\".concat(clicks * sliderWidth, \"px - 1rem)\");\n    inactiveBtn();\n  } else {\n    sliderContainerInner.style.left = '0';\n  }\n}\nfunction moveToRight() {\n  var sliderWidth = sliderContainer.clientWidth;\n  if (Math.abs(clicks) !== slidersLength - 1) {\n    clicks -= 1;\n    sliderContainerInner.style.left = \"calc(\".concat(clicks * sliderWidth, \"px - 1rem)\");\n    inactiveBtn();\n  } else {\n    sliderContainerInner.style.left = \"calc(\".concat((-slidersLength + 1) * sliderWidth, \"px - 1rem)\");\n  }\n}\ndescriptionSliderBtnLeft.addEventListener('click', moveToLeft);\ndescriptionSliderBtnRight.addEventListener('click', moveToRight);\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/scripts/description-slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _assets_scripts_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/burger */ \"./src/assets/scripts/burger.js\");\n/* harmony import */ var _assets_scripts_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_burger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_scripts_description_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/description-slider */ \"./src/assets/scripts/description-slider.js\");\n/* harmony import */ var _assets_scripts_description_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_description_slider__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://test-for-itsoft/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/wave-descr.png */ \"./src/assets/images/wave-descr.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Test</title>\\n  </head>\\n  <body>\\n    <header class=\\\"header inner-container\\\">\\n      <div class=\\\"header__logo\\\"></div>\\n      <div class=\\\"header__icon-dash icon-dash\\\">\\n        <button\\n          type=\\\"button\\\"\\n          class=\\\"icon-dash__search-icon icon_hidden\\\"\\n        ></button>\\n        <button type=\\\"button\\\" class=\\\"icon-dash__map-icon icon_hidden\\\"></button>\\n        <div class=\\\"icon-dash__burger-icon burger-icon\\\">\\n          <button type=\\\"button\\\" class=\\\"burger\\\"></button>\\n          <button type=\\\"button\\\" class=\\\"burger_pseudo\\\"></button>\\n        </div>\\n      </div>\\n    </header>\\n    <nav class=\\\"header__nav\\\">\\n      <ul class=\\\"nav\\\">\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Где купить</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">О препарате</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">О варикозе</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Решение</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Специалистам</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Геморрой</a>\\n        </li>\\n      </ul>\\n    </nav>\\n    <main>\\n      <section class=\\\"animated-wave\\\">\\n        <img class=\\\"wave\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n      </section>\\n      <section class=\\\"description\\\">\\n        <div class=\\\"description-content inner-container\\\">\\n          <h1 class=\\\"description__title h1-title\\\">\\n            Надежный помощник в лечении варикоза\\n          </h1>\\n          <div class=\\\"instruction__item\\\">\\n            <div class=\\\"instruction__icon instruction__icon_1\\\"></div>\\n            <a href=\\\"\\\" class=\\\"instruction__link\\\">Схема приема</a>\\n          </div>\\n          <div class=\\\"instruction__item\\\">\\n            <div class=\\\"instruction__icon instruction__icon_2\\\"></div>\\n            <a href=\\\"\\\" class=\\\"instruction__link\\\">Инструкция</a>\\n          </div>\\n          <div class=\\\"instruction__item\\\">\\n            <div class=\\\"instruction__icon instruction__icon_3\\\"></div>\\n            <a href=\\\"\\\" class=\\\"instruction__link\\\">Где купить</a>\\n          </div>\\n          <div class=\\\"slider\\\">\\n            <div class=\\\"slider__inner\\\">\\n              <div class=\\\"slider__item slider__item_1\\\"></div>\\n              <div class=\\\"slider__item slider__item_2\\\"></div>\\n              <div class=\\\"slider__item slider__item_3\\\"></div>\\n            </div>\\n          </div>\\n          <div class=\\\"description__buttons\\\">\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"description__btn_left round-btn\\\"\\n            ></button>\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"description__btn_right round-btn\\\"\\n            ></button>\\n          </div>\\n          <button type=\\\"button\\\" class=\\\"ellipse-btn\\\">Где купить ></button>\\n        </div>\\n      </section>\\n      <section class=\\\"marquee-container\\\">\\n        <span class=\\\"marquee\\\"\\n          >Получить скидку 10% >>> Получить скидку 10% >>>\\n        </span>\\n      </section>\\n      <section class=\\\"advantages inner-container\\\">\\n        <div class=\\\"advantages__item\\\">\\n          <div class=\\\"advantages__icon advantages__icon_1\\\"></div>\\n          <div class=\\\"advantages__text\\\">Доказанная эффективность</div>\\n        </div>\\n        <div class=\\\"advantages__item\\\">\\n          <div class=\\\"advantages__icon advantages__icon_2\\\"></div>\\n          <div class=\\\"advantages__text\\\">\\n            Новая дозировка <br />\\n            100 мг + 900 мг\\n          </div>\\n        </div>\\n        <div class=\\\"advantages__item\\\">\\n          <div class=\\\"advantages__icon advantages__icon_3\\\"></div>\\n          <div class=\\\"advantages__text\\\">\\n            Удобный прием.<br />\\n            Одна таблетка в сутки*\\n          </div>\\n          <div class=\\\"advantages__info-icon advantages__pop-up\\\"></div>\\n        </div>\\n      </section>\\n      <section class=\\\"effects inner-container\\\">\\n        <div class=\\\"effects__description_main\\\">\\n          <h2 class=\\\"effects__title\\\">Комплексное действие</h2>\\n          <div class=\\\"effects__text section-text\\\">Венарус показан для терапии симптомов хронических заболеваний вен (устранения\\n            и облегчения симптомов).</div>\\n        </div>\\n        <div class=\\\"effects-container\\\">\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Помогает предотвратить судороги\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_1\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Способствует снижению тяжести в ногах\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_2\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Способствует снижению болевых ощущений\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_3\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">Помогает уменьшить отеки</div>\\n            <div class=\\\"effects__icon effects__icon_4\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Оказывает ангиопротекторное и венотонизурующее действие\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_5\\\"></div>\\n          </div>\\n        </div>\\n      </section>\\n    </main>\\n    <footer></footer>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://test-for-itsoft/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://test-for-itsoft/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./src/assets/images/wave-descr.png":
/*!******************************************!*\
  !*** ./src/assets/images/wave-descr.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/wave-descr.png\";\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/images/wave-descr.png?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;