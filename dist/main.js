/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMPartials/__counters.js":
/*!***************************************!*\
  !*** ./src/DOMPartials/__counters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counters": () => (/* binding */ counters)
/* harmony export */ });
var counters = document.createElement('SECTION');
counters.setAttribute('id', 'counters');
counters.innerHTML = "\n    <ul>\n        <li class=\"total\">Total <span>0</span></li>\n        <li class=\"completed\">Completed <span>0</span></li>\n        <li class=\"uncompleted\">Uncompleted <span>0</span></li>\n    </ul>\n";

/***/ }),

/***/ "./src/DOMPartials/__items.js":
/*!************************************!*\
  !*** ./src/DOMPartials/__items.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "submit": () => (/* binding */ submit)
/* harmony export */ });
var items = document.createElement('SECTION');
items.setAttribute('id', 'items');
items.innerHTML = "\n    <form>\n        <input type=\"text\" name=\"\" id=\"textField\" />\n        <button type=\"submit\" id=\"submit\">Create</button>\n    </form>\n\n    <ul id=\"list\"></ul>\n";
var list = items.querySelector('#list');
var input = items.querySelector('#textField');
var form = items.querySelector('form');
var submit = items.querySelector('#submit');

/***/ }),

/***/ "./src/functions/addTodo.js":
/*!**********************************!*\
  !*** ./src/functions/addTodo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMPartials/__items.js */ "./src/DOMPartials/__items.js");
/* harmony import */ var _saveToStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveToStorage.js */ "./src/functions/saveToStorage.js");
/* harmony import */ var _renderTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTodos.js */ "./src/functions/renderTodos.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (evt) {
  evt.preventDefault();
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var newTodo = {
    value: _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.input.value,
    completed: false
  };
  todos.push(newTodo);
  _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.input.value = '';
  (0,_saveToStorage_js__WEBPACK_IMPORTED_MODULE_1__.default)(todos);
  (0,_renderTodos_js__WEBPACK_IMPORTED_MODULE_2__.default)(todos);
});

/***/ }),

/***/ "./src/functions/completeTodo.js":
/*!***************************************!*\
  !*** ./src/functions/completeTodo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToStorage.js */ "./src/functions/saveToStorage.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (evt) {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var todoText = evt.target.nextElementSibling.innerText;
  todos.map(function (todo) {
    if (todo.value === todoText) {
      todo.completed = !todo.completed;
      if (todo.completed) evt.target.nextElementSibling.setAttribute('class', 'completed');else evt.target.nextElementSibling.removeAttribute('class');
    }
  });
  (0,_saveToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(todos);
});

/***/ }),

/***/ "./src/functions/deleteTodo.js":
/*!*************************************!*\
  !*** ./src/functions/deleteTodo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToStorage.js */ "./src/functions/saveToStorage.js");
/* harmony import */ var _renderTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodos.js */ "./src/functions/renderTodos.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (evt) {
  if (evt.target.getAttribute('class') !== 'fas fa-trash-alt') return;
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var todoText = evt.target.parentElement.previousElementSibling.lastElementChild.innerText;
  var filteredTodos = todos.filter(function (todo) {
    return todo.value !== todoText;
  });
  (0,_saveToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(filteredTodos);
  (0,_renderTodos_js__WEBPACK_IMPORTED_MODULE_1__.default)(filteredTodos);
});

/***/ }),

/***/ "./src/functions/editTodo.js":
/*!***********************************!*\
  !*** ./src/functions/editTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToStorage.js */ "./src/functions/saveToStorage.js");
/* harmony import */ var _renderTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodos.js */ "./src/functions/renderTodos.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (evt) {
  if (evt.target.attributes[0].value !== 'todo-value') return;
  var id = parseInt(evt.target.parentNode.parentNode.getAttribute('data-id'), 10);
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var input = document.createElement('INPUT');
  input.type = 'text';
  input.value = evt.target.innerText;
  input.style.outline = 'none';
  input.style.border = 'none';
  input.style.fontFamily = 'Roboto, sans-serif';
  input.style.fontWeight = '300';
  input.style.fontSize = '1em';
  input.style.color = '#6b7077';
  input.style.background = 'transparent';
  var todoValue = evt.target;

  function handleEdit(evt) {
    evt.stopPropagation();
    /**
     * If the todo's value remains the same as the input's,
     * the operation will have been in vain.
     */

    var inputValue = this.value;

    if (inputValue !== todoValue.innerText) {
      todos = todos.map(function (todo, idx) {
        if (idx === id) {
          return _objectSpread(_objectSpread({}, todo), {}, {
            value: inputValue
          });
        }

        return todo;
      });
    }

    (0,_saveToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(todos);
    (0,_renderTodos_js__WEBPACK_IMPORTED_MODULE_1__.default)(todos);
  }

  evt.target.innerText = '';
  evt.target.append(input);
  input.addEventListener('change', handleEdit);
  input.focus(); // evt.target.style.display = 'none';
});

/***/ }),

/***/ "./src/functions/renderTodos.js":
/*!**************************************!*\
  !*** ./src/functions/renderTodos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMPartials/__items.js */ "./src/DOMPartials/__items.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (todos) {
  _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.list.innerHTML = '';
  var todoCounter = 0;
  todos.map(function (todo) {
    return _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.list.innerHTML += "\n            <li class=\"list-item\" data-id=\"".concat(todoCounter++, "\">\n                <div class=\"content\">\n                    <input type=\"checkbox\" id=\"checkbox\"").concat(todo.completed && ' checked', ">\n                    <p id=\"todo-value\" class=\"").concat(todo.completed && 'completed', "\">").concat(todo.value, "</p>\n                </div>\n                \n                <div class=\"actions\">\n                    <i class=\"fas fa-marker\"></i>\n                    <i class=\"fas fa-trash-alt\"></i>\n                </div>\n            </li>\n        ");
  });
});

/***/ }),

/***/ "./src/functions/saveToStorage.js":
/*!****************************************!*\
  !*** ./src/functions/saveToStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
});

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
/* harmony import */ var _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMPartials/__items.js */ "./src/DOMPartials/__items.js");
/* harmony import */ var _DOMPartials_counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMPartials/__counters.js */ "./src/DOMPartials/__counters.js");
/* harmony import */ var _functions_addTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/addTodo.js */ "./src/functions/addTodo.js");
/* harmony import */ var _functions_renderTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/renderTodos.js */ "./src/functions/renderTodos.js");
/* harmony import */ var _functions_completeTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/completeTodo.js */ "./src/functions/completeTodo.js");
/* harmony import */ var _functions_deleteTodo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/deleteTodo.js */ "./src/functions/deleteTodo.js");
/* harmony import */ var _functions_editTodo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/editTodo.js */ "./src/functions/editTodo.js");
// references
var app = document.querySelector('#app'); // dependencies


 // functions





 // Append the DOM slices(partials) to the main app

[_DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.items, _DOMPartials_counters_js__WEBPACK_IMPORTED_MODULE_1__.counters].forEach(function (node, idx) {
  app.children[idx].insertAdjacentElement('afterend', node);
});

function init() {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener('submit', _functions_addTodo_js__WEBPACK_IMPORTED_MODULE_2__.default);
  _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('change', _functions_completeTodo_js__WEBPACK_IMPORTED_MODULE_4__.default);
  _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('click', _functions_deleteTodo_js__WEBPACK_IMPORTED_MODULE_5__.default);
  _DOMPartials_items_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('dblclick', _functions_editTodo_js__WEBPACK_IMPORTED_MODULE_6__.default);
  (0,_functions_renderTodos_js__WEBPACK_IMPORTED_MODULE_3__.default)(todos);
}

init();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map