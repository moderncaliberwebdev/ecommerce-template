/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _sass_pages_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/pages/styles.scss */ \"./sass/pages/styles.scss\");\n/* harmony import */ var _sass_pages_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/_app.tsx\",\n            lineNumber: 7\n        },\n        __self: this\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZTtBQUVOO1NBRXpCRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLHNFQUFFRCxTQUFTO1dBQUtDLFNBQVM7Ozs7Ozs7QUFDakMsQ0FBQztBQUVELGlFQUFlSCwyREFBaUIsQ0FBQ0MsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVybi1uZXh0LXNhc3Mta2luZGxpbmcvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcblxuaW1wb3J0ICcuLi9zYXNzL3BhZ2VzL3N0eWxlcy5zY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ3cmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/reducers/main.ts":
/*!********************************!*\
  !*** ./redux/reducers/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = (state = {\n    name: 'guest'\n}, action)=>{\n    switch(action.type){\n        case 'SET_NAME':\n            return {\n                ...state,\n                name: action.payload\n            };\n        default:\n            return {\n                ...state\n            };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9tYWluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLElBQUksSUFDUkMsS0FBSyxHQUFHLENBQUM7SUFDUEMsSUFBSSxFQUFFLENBQU87QUFDZixDQUFDLEVBQ0RDLE1BQU0sR0FDSCxDQUFDO0lBQ0osTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDLENBQVU7WUFDYixNQUFNLENBQUMsQ0FBQzttQkFDSEgsS0FBSztnQkFDUkMsSUFBSSxFQUFFQyxNQUFNLENBQUNFLE9BQU87WUFDdEIsQ0FBQzs7WUFFRCxNQUFNLENBQUMsQ0FBQzttQkFDSEosS0FBSztZQUNWLENBQUM7O0FBRVAsQ0FBQztBQUVELGlFQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVybi1uZXh0LXNhc3Mta2luZGxpbmcvLi9yZWR1eC9yZWR1Y2Vycy9tYWluLnRzPzNhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFpbiA9IChcbiAgc3RhdGUgPSB7XG4gICAgbmFtZTogJ2d1ZXN0JyxcbiAgfSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9OQU1FJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpblxuIl0sIm5hbWVzIjpbIm1haW4iLCJzdGF0ZSIsIm5hbWUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/main.ts\n");

/***/ }),

/***/ "./redux/reducers/rootReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./redux/reducers/main.ts\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    main: _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ2Q7QUFFekIsS0FBSyxDQUFDRSxXQUFXLEdBQUdGLHNEQUFlLENBQUMsQ0FBQztJQUNuQ0MsSUFBSSxFQUFFQSw2Q0FBSTtBQUNaLENBQUM7QUFFRCxpRUFBZUMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL21lcm4tbmV4dC1zYXNzLWtpbmRsaW5nLy4vcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXIudHM/MDAzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBtYWluOiBtYWluLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJtYWluIiwicm9vdFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/rootReducer.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/rootReducer */ \"./redux/reducers/rootReducer.ts\");\n\n\n\n\n\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())\n];\nconst makeStore = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)))\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1U7QUFDL0I7QUFDbUI7QUFDRjtBQUVoRCxLQUFLLENBQUNNLFVBQVUsR0FBRyxDQUFDSDtJQUFBQSxvREFBSztBQUFBLENBQUM7QUFFMUIsS0FBSyxDQUFDSSxTQUFTLE9BQ2JQLGtEQUFXLENBQUNLLDZEQUFXLEVBQUVILDZFQUFtQixDQUFDRCxzREFBZSxJQUFJSyxVQUFVOztBQUVyRSxLQUFLLENBQUNFLE9BQU8sR0FBR0osaUVBQWEsQ0FBQ0csU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21lcm4tbmV4dC1zYXNzLWtpbmRsaW5nLy4vcmVkdXgvc3RvcmUudHM/OTNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXVxuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxuICBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpKVxuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKVxuIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwiY3JlYXRlV3JhcHBlciIsInJvb3RSZWR1Y2VyIiwibWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsIndyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./sass/pages/styles.scss":
/*!********************************!*\
  !*** ./sass/pages/styles.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();