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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const _header = document.querySelector(`.header`);\n  const _navWrap = _header.querySelector(`.header_nav`);\n  const _navItemAll = _navWrap.querySelectorAll(`.nav_list > li`);\n  const _main = document.querySelector(`.main`);\n  const _sectionAll = _main.querySelectorAll(`section`);\n\n  function navSelectedFunc() {\n    const _scrollY = window.scrollY;\n    \n    _sectionAll.forEach(_section => {\n      const _sectionHeight = _section.offsetHeight;\n      const _sectionTop = _section.offsetTop;\n      const _sectionId = _section.getAttribute(`id`);\n      const _navItem = _navWrap.querySelector(`.nav_list a[href*=` + _sectionId + `]`).closest(`li`);\n      \n      if (\n        _scrollY >= _sectionTop &&\n        _scrollY < _sectionTop + _sectionHeight\n      ) {\n        _navItem.classList.add(`selected`);\n      } else {\n        _navItem.classList.remove(`selected`);\n      }\n    });\n  };\n\n  function scrollFunc(_section) {\n    const _scrollTop = _section.offsetTop;\n\n    window.scrollTo({top: _scrollTop, behavior: `smooth`});\n  };\n\n  _navItemAll.forEach((_item) => {\n    _item.addEventListener(`click`, function(event) {\n      const _thisItem = this;\n      const _href = _thisItem.querySelector(`a`).getAttribute(`href`).substr(1);\n\n      event.preventDefault();\n\n      _sectionAll.forEach(_section => {\n        if (_section.getAttribute(`id`) === _href) {\n\n          scrollFunc(_section);\n        }\n      });\n    });\n  });\n\n  document.addEventListener(`scroll`, function () {\n    navSelectedFunc();\n  });\n});\n\n//# sourceURL=webpack://portfolio/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;