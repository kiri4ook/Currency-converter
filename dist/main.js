/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResults": () => (/* binding */ getResults),
/* harmony export */   "getUAH": () => (/* binding */ getUAH)
/* harmony export */ });
/* harmony import */ var _displays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displays.js */ "./src/displays.js");


const api = "https://api.exchangerate-api.com/v4/latest/USD";
function getResults() {
  return fetch(`${api}`).then(currency => currency.json()).then(_displays_js__WEBPACK_IMPORTED_MODULE_0__.displayResults).catch(error => console.log(error.message));
}
function getUAH() {
  return fetch(`${api}`).then(currency => currency.json()).then(_displays_js__WEBPACK_IMPORTED_MODULE_0__.displayUAH).catch(error => console.log(error.message));
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "costUAHtoEUR": () => (/* binding */ costUAHtoEUR),
/* harmony export */   "costUAHtoUSD": () => (/* binding */ costUAHtoUSD),
/* harmony export */   "exchangeButton": () => (/* binding */ exchangeButton),
/* harmony export */   "fromCurrecySelect": () => (/* binding */ fromCurrecySelect),
/* harmony export */   "resetButton": () => (/* binding */ resetButton),
/* harmony export */   "searchFromInput": () => (/* binding */ searchFromInput),
/* harmony export */   "searchToInput": () => (/* binding */ searchToInput),
/* harmony export */   "toCurrecySelect": () => (/* binding */ toCurrecySelect),
/* harmony export */   "valueFrom": () => (/* binding */ valueFrom),
/* harmony export */   "valueTo": () => (/* binding */ valueTo)
/* harmony export */ });
const searchFromInput = document.querySelector(".searchBoxFrom");
const searchToInput = document.querySelector(".convert");
const exchangeButton = document.querySelector(".exchange");
const resetButton = document.querySelector(".reset");
const fromCurrecySelect = document.querySelector(".from");
const toCurrecySelect = document.querySelector(".to");
const costUAHtoUSD = document.querySelector(".costUAHtoUSD");
const costUAHtoEUR = document.querySelector(".costUAHtoEUR");
const valueFrom = document.getElementById("input1");
const valueTo = document.getElementById("input2");

/***/ }),

/***/ "./src/displays.js":
/*!*************************!*\
  !*** ./src/displays.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayResults": () => (/* binding */ displayResults),
/* harmony export */   "displayUAH": () => (/* binding */ displayUAH)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");







function displayResults(currency) {
  let fromRate = currency.rates[_logic_js__WEBPACK_IMPORTED_MODULE_0__.resultFrom];
  let toRate = currency.rates[_logic_js__WEBPACK_IMPORTED_MODULE_0__.resultTo];
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.valueTo.value = (toRate / fromRate * _logic_js__WEBPACK_IMPORTED_MODULE_0__.searchValue).toFixed(2);
  // console.log(valueTo.value);
}

function displayUAH(currency) {
  let fromUSD = currency.rates["USD"];
  let fromEUR = currency.rates["EUR"];
  let toUAH = currency.rates["UAH"];
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.costUAHtoUSD.innerHTML = (toUAH / fromUSD).toFixed(2);
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.costUAHtoEUR.innerHTML = (toUAH / fromEUR).toFixed(2);
}

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearValues": () => (/* binding */ clearValues),
/* harmony export */   "exchangeCurrency": () => (/* binding */ exchangeCurrency),
/* harmony export */   "onFromCurrencyChange": () => (/* binding */ onFromCurrencyChange),
/* harmony export */   "onToCurrencyChange": () => (/* binding */ onToCurrencyChange),
/* harmony export */   "resultFrom": () => (/* binding */ resultFrom),
/* harmony export */   "resultTo": () => (/* binding */ resultTo),
/* harmony export */   "searchValue": () => (/* binding */ searchValue),
/* harmony export */   "updateValue": () => (/* binding */ updateValue)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");





let resultFrom;
let resultTo;
let searchValue;
const onFromCurrencyChange = event => {
  resultFrom = `${event.target.value}`;
  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getResults)();
};
const onToCurrencyChange = event => {
  resultTo = `${event.target.value}`;
  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getResults)();
};
function updateValue(e) {
  searchValue = e.target.value;
}
function exchangeCurrency() {
  let intermediateCurrency = _constants_js__WEBPACK_IMPORTED_MODULE_1__.fromCurrecySelect.value;
  let intermediateValue = _constants_js__WEBPACK_IMPORTED_MODULE_1__.valueFrom.value;
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.fromCurrecySelect.value = _constants_js__WEBPACK_IMPORTED_MODULE_1__.toCurrecySelect.value;
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.toCurrecySelect.value = intermediateCurrency;
  resultFrom = _constants_js__WEBPACK_IMPORTED_MODULE_1__.fromCurrecySelect.value;
  resultTo = _constants_js__WEBPACK_IMPORTED_MODULE_1__.toCurrecySelect.value;
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.valueFrom.value = _constants_js__WEBPACK_IMPORTED_MODULE_1__.valueTo.value;
  _constants_js__WEBPACK_IMPORTED_MODULE_1__.valueTo.value = intermediateValue;
}
function clearValues() {
  window.location.reload();
}

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");













document.addEventListener('DOMContentLoaded', _api_js__WEBPACK_IMPORTED_MODULE_1__.getUAH);
_constants_js__WEBPACK_IMPORTED_MODULE_2__.fromCurrecySelect.addEventListener('change', _logic_js__WEBPACK_IMPORTED_MODULE_0__.onFromCurrencyChange);
_constants_js__WEBPACK_IMPORTED_MODULE_2__.toCurrecySelect.addEventListener('change', _logic_js__WEBPACK_IMPORTED_MODULE_0__.onToCurrencyChange);
_constants_js__WEBPACK_IMPORTED_MODULE_2__.searchFromInput.addEventListener('input', _logic_js__WEBPACK_IMPORTED_MODULE_0__.updateValue);
_constants_js__WEBPACK_IMPORTED_MODULE_2__.searchToInput.addEventListener('keyup', _api_js__WEBPACK_IMPORTED_MODULE_1__.getResults);
_constants_js__WEBPACK_IMPORTED_MODULE_2__.exchangeButton.addEventListener('click', _logic_js__WEBPACK_IMPORTED_MODULE_0__.exchangeCurrency);
_constants_js__WEBPACK_IMPORTED_MODULE_2__.resetButton.addEventListener('click', _logic_js__WEBPACK_IMPORTED_MODULE_0__.clearValues);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map