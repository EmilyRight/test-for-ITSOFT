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

eval("/* eslint-disable no-param-reassign */\nvar hiddenIcons = document.querySelectorAll('.icon_hidden');\nvar burger = document.querySelector('.burger');\nvar pseudoBurger = document.querySelector('.burger_pseudo');\nvar navBar = document.querySelector('.header__nav');\nvar wave = document.querySelector('.wave');\nfunction openBurgerNav() {\n  navBar.style.left = 0;\n  hiddenIcons.forEach(function (icon) {\n    icon.style.display = 'none';\n  });\n  burger.style.display = 'none';\n  pseudoBurger.style.display = 'block';\n  wave.style.display = 'none';\n  var prevent = function prevent(ev) {\n    return ev.preventDefault();\n  };\n  document.addEventListener('wheel', prevent, {\n    passive: false\n  });\n}\nfunction closeBurgerNav() {\n  navBar.style.left = '-140%';\n  hiddenIcons.forEach(function (icon) {\n    icon.style.display = 'block';\n  });\n  wave.style.display = 'block';\n  burger.style.display = 'block';\n  pseudoBurger.style.display = 'none';\n  var prevent = function prevent(ev) {\n    return ev.preventDefault();\n  };\n  document.removeEventListener('wheel', prevent);\n}\nburger.addEventListener('click', openBurgerNav);\npseudoBurger.addEventListener('click', closeBurgerNav);\nnavBar.addEventListener('click', closeBurgerNav);\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/scripts/burger.js?");

/***/ }),

/***/ "./src/assets/scripts/description-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/description-slider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inactiveBtn)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\nvar sliderItems = document.querySelectorAll('.slider__item');\nvar sliderContainer = document.querySelector('.slider');\nvar sliderContainerInner = document.querySelector('.slider__inner');\nvar descriptionSliderBtnLeft = document.querySelector('.description__btn_left');\nvar descriptionSliderBtnRight = document.querySelector('.description__btn_right');\nvar slidersLength = sliderItems.length;\nvar sliderWidth = sliderContainer.clientWidth;\nvar descriptionSliderClicks = 0;\nfunction findSliderGap() {\n  var gap = (sliderContainerInner.clientWidth - slidersLength * sliderWidth) / (slidersLength - 1);\n  return gap;\n}\nfindSliderGap();\nfunction inactiveBtn(number) {\n  if (Math.abs(descriptionSliderClicks) === slidersLength - number) {\n    descriptionSliderBtnRight.classList.add('btn_inactive');\n  } else {\n    descriptionSliderBtnRight.classList.remove('btn_inactive');\n  }\n  if (Math.abs(descriptionSliderClicks) === 0) {\n    descriptionSliderBtnLeft.classList.add('btn_inactive');\n  } else {\n    descriptionSliderBtnLeft.classList.remove('btn_inactive');\n  }\n}\nfunction moveToLeft(movingWidth, container) {\n  var gap = findSliderGap();\n  if (Math.abs(descriptionSliderClicks) !== 0) {\n    descriptionSliderClicks += 1;\n    container.style.left = \"calc(\".concat(descriptionSliderClicks * (movingWidth + gap), \"px)\");\n    inactiveBtn(1);\n  } else {\n    container.style.left = '0';\n  }\n}\nfunction moveToRight(movingWidth, container) {\n  var gap = findSliderGap();\n  if (Math.abs(descriptionSliderClicks) !== slidersLength - 1) {\n    descriptionSliderClicks -= 1;\n    container.style.left = \"calc(\".concat(descriptionSliderClicks * (movingWidth + gap), \"px)\");\n    inactiveBtn(1);\n  } else {\n    container.style.left = \"calc(\".concat((-slidersLength + 1) * (movingWidth + gap), \"px)\");\n  }\n}\ndescriptionSliderBtnLeft.addEventListener('click', function () {\n  moveToLeft(sliderWidth, sliderContainerInner);\n});\ndescriptionSliderBtnRight.addEventListener('click', function () {\n  return moveToRight(sliderWidth, sliderContainerInner);\n});\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/scripts/description-slider.js?");

/***/ }),

/***/ "./src/assets/scripts/opinion-slider.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/opinion-slider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"sources\": () => (/* binding */ sources)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-loop-func */\nvar paginationList = document.querySelectorAll('.opinion-slider-pagination__item');\nvar currentVideo = document.querySelector('.opinion-slider__video');\nvar opinionPlayBtn = document.querySelector('.opinion__play-btn');\nvar isOpinionVideoPlayed = false;\nvar isAutoPlay = true;\nvar sliders;\nvar currentVideoIndex = 0;\nvar frames = paginationList.length;\nvar sources = ['./assets/video/sample-30s.mp4', './assets/video/sample-5s.mp4', './assets/video/sample-30s_copy.mp4'];\nfunction findIndex() {\n  var paths = [];\n  sources.forEach(function (el) {\n    return paths.push(\"http://localhost:3000/\".concat(el.slice(2)));\n  });\n  return paths;\n}\nfunction setActive(array) {\n  array.forEach(function (el) {\n    if (el.classList.contains('pagination__item_active')) {\n      el.classList.remove('pagination__item_active');\n      el.style.animation = 'none';\n    }\n  });\n}\nfunction autoPlay() {\n  sliders = setInterval(function () {\n    if (isAutoPlay) {\n      setActive(Array.from(paginationList));\n      paginationList[currentVideoIndex].classList.add('pagination__item_active');\n      paginationList[currentVideoIndex].style.animation = 'fadePagination ease-in-out 4s infinite';\n      currentVideo.src = sources[currentVideoIndex];\n      currentVideo.style.animation = 'fadeVideo ease-in-out 4s infinite';\n      currentVideoIndex += 1;\n      if (currentVideoIndex === frames) {\n        currentVideoIndex = 0;\n      }\n    }\n    paginationList[currentVideoIndex].style.animation = 'none';\n    currentVideo.style.animation = 'none';\n  }, 4000);\n}\nfunction showPlayBtn() {\n  var btn = currentVideo.nextElementSibling;\n  if (!isOpinionVideoPlayed) {\n    btn.style.display = 'block';\n  } else {\n    btn.style.display = 'none';\n  }\n}\nfunction setNewVideo(event) {\n  isOpinionVideoPlayed = false;\n  isAutoPlay = false;\n  clearInterval(sliders);\n  var paginationItem = event.target;\n  var paginationItemIndex = Array.from(paginationList).indexOf(paginationItem);\n  setActive(Array.from(paginationList));\n  paginationItem.classList.add('pagination__item_active');\n  paginationItem.style.animation = 'none';\n  currentVideo.style.animation = 'none';\n  currentVideo.pause();\n  currentVideo.src = sources[paginationItemIndex];\n  showPlayBtn();\n}\nfunction playOpinionVideo() {\n  var fullPaths = findIndex();\n  var paginationItemIndex = fullPaths.indexOf(currentVideo.src);\n  var paginationItem = paginationList[paginationItemIndex];\n  isAutoPlay = false;\n  if (!isOpinionVideoPlayed) {\n    isOpinionVideoPlayed = true;\n    currentVideo.play();\n    paginationItem.style.animation = 'none';\n    showPlayBtn();\n  }\n}\nfunction pauseOpinionVideo() {\n  isAutoPlay = true;\n  if (isOpinionVideoPlayed) {\n    currentVideo.pause();\n    isOpinionVideoPlayed = false;\n    showPlayBtn();\n    clearInterval(sliders);\n    autoPlay();\n  }\n}\npaginationList.forEach(function (btn) {\n  return btn.addEventListener('click', setNewVideo);\n});\nopinionPlayBtn.addEventListener('click', playOpinionVideo);\ncurrentVideo.addEventListener('click', pauseOpinionVideo);\ncurrentVideo.addEventListener('ended', function () {\n  clearInterval(sliders);\n  isOpinionVideoPlayed = false;\n  isAutoPlay = true;\n  showPlayBtn(currentVideo);\n  autoPlay();\n});\nwindow.onload = function () {\n  autoPlay();\n};\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/scripts/opinion-slider.js?");

/***/ }),

/***/ "./src/assets/scripts/production-slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/production-slider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findGap)\n/* harmony export */ });\n/* harmony import */ var _description_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description-slider */ \"./src/assets/scripts/description-slider.js\");\n/* eslint-disable no-param-reassign */\n\nvar productionSliderBtnLeft = document.querySelector('.production__btn_left');\nvar productionSliderBtnRight = document.querySelector('.production__btn_right');\nvar productionSlider = document.querySelector('.production-video-slider');\nvar productionSliderContainer = document.querySelector('.production-video-slider__inner');\nvar productionSliderItems = document.querySelectorAll('.production-video-slider__item');\nvar movingRightOffset = document.querySelector('.slider-item_inactive').clientWidth;\nvar movingLeftOffset = document.querySelector('.slider-item_active').clientWidth;\nvar productionSliderItemsLength = productionSliderItems.length;\nvar playBtn = document.querySelectorAll('.play-btn');\nvar videoList = document.querySelectorAll('.slider-item__video');\nvar popup = document.querySelector('.production__pop-up');\nvar popupVideo = document.querySelector('.pop-up__video');\nvar closeBtn = document.querySelector('.close-btn');\nvar isVideoPlayed = false;\nvar steps = 0;\nfunction findGap(movingOffset) {\n  var activeItemOffset = document.querySelector('.slider-item_active').clientWidth;\n  var gap = productionSlider.clientWidth - movingOffset - activeItemOffset;\n  return gap;\n}\nfunction moveVideoToLeft(movingWidth, container) {\n  var activeSliderItem = document.querySelector('.slider-item_active');\n  var activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);\n  var inactiveSliderItem = document.querySelector('.slider-item_inactive');\n  var gap = findGap(movingLeftOffset);\n  if (Math.abs(steps) !== 0) {\n    steps += 1;\n    container.style.left = \"calc(\".concat(steps * (movingWidth + gap), \"px)\");\n    activeSliderItem.classList.remove('slider-item_active');\n    inactiveSliderItem.classList.remove('slider-item_inactive');\n    productionSliderItems[activeSliderItemIndex - 2].classList.add('slider-item_inactive');\n    productionSliderItems[activeSliderItemIndex - 1].classList.add('slider-item_active');\n    activeSliderItem = document.querySelector('.slider-item_active');\n    activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);\n    (0,_description_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n  } else {\n    container.style.left = '0';\n  }\n}\nfunction moveVideoToRight(movingWidth, container) {\n  var activeSliderItem = document.querySelector('.slider-item_active');\n  var activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);\n  var inactiveSliderItem = document.querySelector('.slider-item_inactive');\n  var gap = findGap(movingRightOffset);\n  if (Math.abs(steps) !== productionSliderItemsLength - 2) {\n    steps -= 1;\n    container.style.left = \"calc(\".concat(steps * (movingWidth + gap), \"px\");\n    inactiveSliderItem.classList.remove('slider-item_inactive');\n    activeSliderItem.classList.remove('slider-item_active');\n    activeSliderItem.classList.add('slider-item_inactive');\n    productionSliderItems[activeSliderItemIndex + 1].classList.add('slider-item_active');\n    activeSliderItem = document.querySelector('.slider-item_active');\n    activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);\n    (0,_description_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n  } else {\n    container.style.left = \"calc(\".concat((-productionSliderItemsLength + 2) * (movingWidth + gap), \"px\");\n  }\n}\nfunction closePopUp() {\n  popupVideo.pause();\n  popup.style.display = 'none';\n  isVideoPlayed = false;\n}\nfunction playVideo(event) {\n  var pressedButton = event.target;\n  var btnIndex = Array.from(playBtn).indexOf(pressedButton);\n  var currentVideoSrc = videoList[btnIndex].src.replace(/(http:\\/\\/localhost:3000\\/)/, '');\n  if (!isVideoPlayed) {\n    popup.style.display = 'block';\n    popupVideo.src = \"\".concat(currentVideoSrc);\n    popupVideo.play();\n    isVideoPlayed = true;\n  }\n}\nfunction pauseVideo(event) {\n  var currentVideo = event.target;\n  var play = currentVideo.nextElementSibling;\n  if (isVideoPlayed) {\n    currentVideo.pause();\n    play.style.display = 'block';\n    isVideoPlayed = false;\n  }\n}\nproductionSliderBtnLeft.addEventListener('click', function () {\n  moveVideoToLeft(movingLeftOffset, productionSliderContainer);\n});\nproductionSliderBtnRight.addEventListener('click', function () {\n  moveVideoToRight(movingRightOffset, productionSliderContainer);\n});\nplayBtn.forEach(function (btn) {\n  return btn.addEventListener('click', playVideo);\n});\nvideoList.forEach(function (video) {\n  return video.addEventListener('click', pauseVideo);\n});\ncloseBtn.addEventListener('click', closePopUp);\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/scripts/production-slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _assets_scripts_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/burger */ \"./src/assets/scripts/burger.js\");\n/* harmony import */ var _assets_scripts_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_burger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_scripts_description_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/description-slider */ \"./src/assets/scripts/description-slider.js\");\n/* harmony import */ var _assets_scripts_production_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scripts/production-slider */ \"./src/assets/scripts/production-slider.js\");\n/* harmony import */ var _assets_scripts_opinion_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/scripts/opinion-slider */ \"./src/assets/scripts/opinion-slider.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://test-for-itsoft/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/wave-descr.png */ \"./src/assets/images/wave-descr.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/wave-prod.png */ \"./src/assets/images/wave-prod.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video/sample-30s.mp4 */ \"./src/assets/video/sample-30s.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/scheme.svg */ \"./src/assets/images/scheme.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/wave-info.png */ \"./src/assets/images/wave-info.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Test</title>\\n  </head>\\n  <body class=\\\"body\\\">\\n    <header class=\\\"header inner-container\\\">\\n      <div class=\\\"header__logo\\\"></div>\\n      <div class=\\\"header__icon-dash icon-dash\\\">\\n        <button\\n          type=\\\"button\\\"\\n          class=\\\"icon-dash__search-icon icon_hidden\\\"\\n        ></button>\\n        <button type=\\\"button\\\" class=\\\"icon-dash__map-icon icon_hidden\\\"></button>\\n        <div class=\\\"icon-dash__burger-icon burger-icon\\\">\\n          <button type=\\\"button\\\" class=\\\"burger\\\"></button>\\n          <button type=\\\"button\\\" class=\\\"burger_pseudo\\\"></button>\\n        </div>\\n      </div>\\n    </header>\\n    <nav class=\\\"header__nav\\\">\\n      <ul class=\\\"nav\\\">\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Где купить</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">О препарате</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">О варикозе</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Решение</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Специалистам</a>\\n        </li>\\n        <li class=\\\"nav__item inner-container\\\">\\n          <a href=\\\"\\\" class=\\\"nav__link\\\">Геморрой</a>\\n        </li>\\n      </ul>\\n    </nav>\\n    <main>\\n      <section class=\\\"animated-wave\\\">\\n        <img class=\\\"wave\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n      </section>\\n      <section class=\\\"description\\\">\\n        <div class=\\\"description-content inner-container\\\">\\n          <h1 class=\\\"description__title h1-title\\\">\\n            Надежный помощник в лечении варикоза\\n          </h1>\\n          <div class=\\\"instruction__item\\\">\\n            <div class=\\\"instruction__icon instruction__icon_1\\\"></div>\\n            <a href=\\\"\\\" class=\\\"instruction__link\\\">Схема приема</a>\\n          </div>\\n          <div class=\\\"instruction__item\\\">\\n            <div class=\\\"instruction__icon instruction__icon_2\\\"></div>\\n            <a href=\\\"\\\" class=\\\"instruction__link\\\">Инструкция</a>\\n          </div>\\n          <div class=\\\"instruction__item\\\">\\n            <div class=\\\"instruction__icon instruction__icon_3\\\"></div>\\n            <a href=\\\"\\\" class=\\\"instruction__link\\\">Где купить</a>\\n          </div>\\n          <div class=\\\"slider\\\">\\n            <div class=\\\"slider__inner\\\">\\n              <div class=\\\"slider__item slider__item_1\\\"></div>\\n              <div class=\\\"slider__item slider__item_2\\\"></div>\\n              <div class=\\\"slider__item slider__item_3\\\"></div>\\n            </div>\\n          </div>\\n          <div class=\\\"description__buttons round-buttons-block\\\">\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"description__btn_left round-btn\\\"\\n            ></button>\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"description__btn_right round-btn\\\"\\n            ></button>\\n          </div>\\n          <button type=\\\"button\\\" class=\\\"description__ellipse-btn ellipse-btn\\\">\\n            Где купить >\\n          </button>\\n        </div>\\n      </section>\\n      <section class=\\\"marquee-container\\\">\\n        <span class=\\\"marquee\\\"\\n          >Получить скидку 10% >>> Получить скидку 10% >>>\\n        </span>\\n      </section>\\n      <section class=\\\"advantages inner-container\\\">\\n        <div class=\\\"advantages__item\\\">\\n          <div class=\\\"advantages__icon advantages__icon_1\\\"></div>\\n          <div class=\\\"advantages__text\\\">Доказанная эффективность</div>\\n        </div>\\n        <div class=\\\"advantages__item\\\">\\n          <div class=\\\"advantages__icon advantages__icon_2\\\"></div>\\n          <div class=\\\"advantages__text\\\">\\n            Новая дозировка <br />\\n            100 мг + 900 мг\\n          </div>\\n        </div>\\n        <div class=\\\"advantages__item\\\">\\n          <div class=\\\"advantages__icon advantages__icon_3\\\"></div>\\n          <div class=\\\"advantages__text\\\">\\n            Удобный прием.<br />\\n            Одна таблетка в сутки*\\n          </div>\\n          <div class=\\\"advantages__info-icon advantages__pop-up\\\"></div>\\n        </div>\\n      </section>\\n      <section class=\\\"effects inner-container\\\">\\n        <div class=\\\"effects__description_main\\\">\\n          <h2 class=\\\"effects__title h2__title\\\">Комплексное действие</h2>\\n          <div class=\\\"effects__text section-text\\\">\\n            Венарус показан для терапии симптомов хронических заболеваний вен\\n            (устранения и облегчения симптомов).\\n          </div>\\n        </div>\\n        <div class=\\\"effects-container\\\">\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"#\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Помогает предотвратить судороги\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_1\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"#\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Способствует снижению тяжести в ногах\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_2\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"#\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Способствует снижению болевых ощущений\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_3\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"#\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">Помогает уменьшить отеки</div>\\n            <div class=\\\"effects__icon effects__icon_4\\\"></div>\\n          </div>\\n          <div class=\\\"effects__item\\\">\\n            <a href=\\\"#\\\" class=\\\"effects__link\\\">Подробнее ></a>\\n            <div class=\\\"effects__description\\\">\\n              Оказывает ангиопротекторное и венотонизурующее действие\\n            </div>\\n            <div class=\\\"effects__icon effects__icon_5\\\"></div>\\n          </div>\\n        </div>\\n      </section>\\n\\n      <section class=\\\"production\\\">\\n        <img class=\\\"wave-static__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" />\\n        <div class=\\\"production-content inner-container\\\">\\n          <div class=\\\"production__title h2__title\\\">О производстве Венарус</div>\\n          <div class=\\\"production-video-slider\\\">\\n            <div class=\\\"production-video-slider__inner\\\">\\n              <div class=\\\"production-video-slider__item slider-item_inactive\\\">\\n                <video\\n                  class=\\\"slider-item__video\\\"\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n                  id=\\\"item-active\\\"\\n                ></video>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"play-btn\\\" alt=\\\"\\\" />\\n              </div>\\n              <div class=\\\"production-video-slider__item slider-item_active\\\">\\n                <video\\n                  class=\\\"slider-item__video\\\"\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n                  id=\\\"item-active\\\"\\n                ></video>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"play-btn\\\" alt=\\\"\\\" />\\n              </div>\\n              <div class=\\\"production-video-slider__item\\\">\\n                <video\\n                  class=\\\"slider-item__video\\\"\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n                  id=\\\"item-active\\\"\\n                ></video>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"play-btn\\\" alt=\\\"\\\" />\\n              </div>\\n\\n              <div class=\\\"production-video-slider__item\\\">\\n                <video\\n                  class=\\\"slider-item__video\\\"\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n                  id=\\\"item-active\\\"\\n                ></video>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"play-btn\\\" alt=\\\"\\\" />\\n              </div>\\n              <div class=\\\"production-video-slider__item\\\">\\n                <video\\n                  class=\\\"slider-item__video\\\"\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n                  id=\\\"item-active\\\"\\n                ></video>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"play-btn\\\" alt=\\\"\\\" />\\n              </div>\\n            </div>\\n          </div>\\n          <div class=\\\"production__buttons round-buttons-block\\\">\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"production__btn_left round-btn\\\"\\n            ></button>\\n            <button\\n              type=\\\"button\\\"\\n              class=\\\"production__btn_right round-btn\\\"\\n            ></button>\\n          </div>\\n          <button type=\\\"button\\\" class=\\\"production__ellipse-btn ellipse-btn\\\">\\n            Подробнее >\\n          </button>\\n        </div>\\n        <div class=\\\"production__pop-up\\\">\\n          <div class=\\\"pop-up__item\\\">\\n            <video\\n              class=\\\"pop-up__video\\\"\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n              id=\\\"item-active\\\"\\n            ></video>\\n            <!-- <img src=\\\"./assets/images/scheme.svg\\\" class=\\\"play-btn pop-up__play-btn\\\" alt=\\\"\\\" /> -->\\n            <div class=\\\"close-btn\\\">\\n              <span class=\\\"close-btn_1\\\"></span>\\n              <span class=\\\"close-btn_2\\\"></span>\\n            </div>\\n          </div>\\n        </div>\\n      </section>\\n      <section class=\\\"opinion inner-container\\\">\\n        <div class=\\\"opinion_main section-main-text\\\">\\n          <h2 class=\\\"opinion__title h2__title\\\">Мнение специалистов</h2>\\n          <div class=\\\"opinion__text section-text\\\">\\n            Фармакотерапия — неотъемлемый компонент современного лечения\\n            хронического заболевания вен.\\n          </div>\\n        </div>\\n        <div class=\\\"opinion-slider\\\">\\n          <div class=\\\"opinion-slider__item\\\">\\n            <video\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n              class=\\\"opinion-slider__video\\\"\\n              id=\\\"item-active\\\"\\n            ></video>\\n            <img\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n              class=\\\"opinion__play-btn\\\"\\n              alt=\\\"\\\"\\n            />\\n          </div>\\n          <div class=\\\"opinion-slider-pagination\\\">\\n            <div\\n              class=\\\"opinion-slider-pagination__item pagination__item_active\\\"\\n            ></div>\\n            <div class=\\\"opinion-slider-pagination__item\\\"></div>\\n            <div class=\\\"opinion-slider-pagination__item\\\"></div>\\n          </div>\\n        </div>\\n      </section>\\n      <section class=\\\"info\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" class=\\\"wave-info\\\" alt=\\\"\\\" />\\n        <div class=\\\"info-block inner-container\\\">\\n          <div class=\\\"info__main-text section-main-text\\\">\\n            <h2 class=\\\"info__title h2__title\\\">Полезная информация</h2>\\n            <div class=\\\"info__text section-text\\\">\\n              ВЕНАРУС — надежный помощник в лечении варикоза, хранитель женских\\n              ног на пути <br />к ее мечте!\\n            </div>\\n          </div>\\n          <div class=\\\"info__links\\\">\\n            <a href=\\\"#\\\" class=\\\"info__link info__link_1\\\"\\n              >Профилакти-<wbr />ческие упражнения</a\\n            >\\n            <a href=\\\"#\\\" class=\\\"info__link info__link_2\\\"\\n              >Диагностика и способы лечения</a\\n            >\\n            <a href=\\\"#\\\" class=\\\"info__link info__link_3\\\"\\n              >Рекомен-<wbr />дации по питанию</a\\n            >\\n            <div class=\\\"info__facts info__link_4\\\">Факты <br />о варикозе</div>\\n            <button type=\\\"button\\\" class=\\\"info__ellipse-btn ellipse-btn\\\">\\n              Подробнее >\\n            </button>\\n          </div>\\n        </div>\\n      </section>\\n      <section class=\\\"purchase inner-container\\\">\\n        <div class=\\\"purchase__main-text section-main-text\\\">\\n          <h2 class=\\\"purchase__title h2__title\\\">Где купить</h2>\\n          <div class=\\\"purchase__text section-text\\\">\\n            Ветонизирующее средство ВЕНАРУС вы можете приобрести в аптеках\\n            вашего города\\n          </div>\\n        </div>\\n        <div class=\\\"purchase-content\\\">\\n          <div class=\\\"purchase__image\\\"></div>\\n          <div class=\\\"purchase__btns\\\">\\n            <button type=\\\"button\\\" class=\\\"purchase__ellipse-btn ellipse-btn\\\">\\n              apteka.ru\\n            </button>\\n            <button type=\\\"button\\\" class=\\\"purchase__ellipse-btn ellipse-btn\\\">\\n              366.ru\\n            </button>\\n            <button type=\\\"button\\\" class=\\\"purchase__ellipse-btn ellipse-btn\\\">\\n              stolichki.ru\\n            </button>\\n          </div>\\n        </div>\\n      </section>\\n    </main>\\n    <footer class=\\\"footer\\\">\\n      <div class=\\\"inner-container\\\">\\n        <div class=\\\"footer-disclaimer\\\">\\n          БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ\\n        </div>\\n        <div class=\\\"footer-content\\\">\\n          <a href=\\\"\\\" class=\\\"footer__link footer__link_1\\\"\\n            >Сообщить о нежелательном явлении</a\\n          >\\n          <a href=\\\"\\\" class=\\\"footer__link footer__link_2\\\"\\n            >Условия пользования сайтом и файлами Cookies</a\\n          >\\n          <div class=\\\"footer__sm-dash\\\">\\n            <a href=\\\"#\\\" class=\\\"sm__item vk\\\"></a>\\n            <a href=\\\"#\\\" class=\\\"sm__item fb\\\"></a>\\n            <a href=\\\"#\\\" class=\\\"sm__item twitter\\\"></a>\\n            <a href=\\\"#\\\" class=\\\"sm__item ok\\\"></a>\\n          </div>\\n          <div class=\\\"footer__address\\\">\\n            г. Москва, ул. Шаболовка, д. 31, стр. 11, 4 этаж <br />Телефон: +7\\n            (495) 555-55-55\\n          </div>\\n          <div class=\\\"footer-meta\\\">\\n            <div class=\\\"meta__logo\\\"></div>\\n            <div class=\\\"meta__text\\\">\\n              Создание сайтов <br />Фарм-студия №1 в Рунете\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </footer>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://test-for-itsoft/./src/index.html?");

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

/***/ "./src/assets/images/scheme.svg":
/*!**************************************!*\
  !*** ./src/assets/images/scheme.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/scheme.svg\";\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/images/scheme.svg?");

/***/ }),

/***/ "./src/assets/images/wave-descr.png":
/*!******************************************!*\
  !*** ./src/assets/images/wave-descr.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/wave-descr.png\";\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/images/wave-descr.png?");

/***/ }),

/***/ "./src/assets/images/wave-info.png":
/*!*****************************************!*\
  !*** ./src/assets/images/wave-info.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/wave-info.png\";\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/images/wave-info.png?");

/***/ }),

/***/ "./src/assets/images/wave-prod.png":
/*!*****************************************!*\
  !*** ./src/assets/images/wave-prod.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/wave-prod.png\";\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/images/wave-prod.png?");

/***/ }),

/***/ "./src/assets/video/sample-30s.mp4":
/*!*****************************************!*\
  !*** ./src/assets/video/sample-30s.mp4 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/video/sample-30s.mp4\";\n\n//# sourceURL=webpack://test-for-itsoft/./src/assets/video/sample-30s.mp4?");

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