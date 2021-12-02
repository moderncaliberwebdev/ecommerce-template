"use strict";
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
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction cart() {\n    const { user , error , isLoading  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n            lineNumber: 6\n        },\n        __self: this,\n        children: \"Loading...\"\n    }));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n            lineNumber: 7\n        },\n        __self: this,\n        children: error.message\n    }));\n    if (user) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n                lineNumber: 11\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n                        lineNumber: 12\n                    },\n                    __self: this,\n                    children: [\n                        \"User id: \",\n                        user.sub.split('|')[1]\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    href: \"/api/auth/logout\",\n                    __source: {\n                        fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n                        lineNumber: 13\n                    },\n                    __self: this,\n                    children: \"Logout\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n        href: \"/api/auth/login\",\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n            lineNumber: 18\n        },\n        __self: this,\n        children: \"Login\"\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNvQjtTQUVwQ0UsSUFBSSxHQUFHLENBQUM7SUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBR0osNERBQU87SUFDMUMsRUFBRSxFQUFFSSxTQUFTLEVBQUUsTUFBTSxzRUFBRUMsQ0FBRzs7Ozs7O2tCQUFDLENBQVU7O0lBQ3JDLEVBQUUsRUFBRUYsS0FBSyxFQUFFLE1BQU0sc0VBQUVFLENBQUc7Ozs7OztrQkFBRUYsS0FBSyxDQUFDRyxPQUFPOztJQUVyQyxFQUFFLEVBQUVKLElBQUksRUFBRSxDQUFDO1FBQ1QsTUFBTSx1RUFDSEcsQ0FBRzs7Ozs7OztzRkFDREUsQ0FBQzs7Ozs7Ozt3QkFBQyxDQUFTO3dCQUFDTCxJQUFJLENBQUNNLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDOzs7cUZBQ2pDQyxDQUFDO29CQUFDQyxJQUFJLEVBQUMsQ0FBa0I7Ozs7Ozs4QkFBQyxDQUFNOzs7O0lBR3ZDLENBQUM7SUFFRCxNQUFNLHNFQUFFRCxDQUFDO1FBQUNDLElBQUksRUFBQyxDQUFpQjs7Ozs7O2tCQUFDLENBQUs7O0FBQzFDLENBQUM7QUFFRCxpRUFBZVYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL21lcm4tbmV4dC1zYXNzLWtpbmRsaW5nLy4vcGFnZXMvY2FydC50c3g/ZDY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5cbmZ1bmN0aW9uIGNhcnQoKSB7XG4gICAgY29uc3QgeyB1c2VyLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VVc2VyKCk7XG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+VXNlciBpZDoge3VzZXIuc3ViLnNwbGl0KCd8JylbMV19PC9wPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCI+TG9nb3V0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gPGEgaHJlZj1cIi9hcGkvYXV0aC9sb2dpblwiPkxvZ2luPC9hPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FydFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVXNlciIsImNhcnQiLCJ1c2VyIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJtZXNzYWdlIiwicCIsInN1YiIsInNwbGl0IiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cart.tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cart.tsx"));
module.exports = __webpack_exports__;

})();