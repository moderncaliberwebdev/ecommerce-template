"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction cart() {\n    _s();\n    var ref = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)(), user = ref.user, error = ref.error, isLoading = ref.isLoading;\n    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n            lineNumber: 6\n        },\n        __self: this,\n        children: \"Loading...\"\n    }));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n            lineNumber: 7\n        },\n        __self: this,\n        children: error.message\n    }));\n    if (user) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n                lineNumber: 11\n            },\n            __self: this,\n            children: [\n                \"Welcome \",\n                user.name,\n                \"! \",\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    href: \"/api/auth/logout\",\n                    __source: {\n                        fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n                        lineNumber: 12\n                    },\n                    __self: this,\n                    children: \"Logout\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n        href: \"/api/auth/login\",\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/iCloud Documents/Web Development/Projects/Next Projects/ecommerce-template/client/pages/cart.tsx\",\n            lineNumber: 17\n        },\n        __self: this,\n        children: \"Login\"\n    }));\n}\n_s(cart, \"z8NjDiK5azFgDeQIeOoWnL/sCfs=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNvQjs7U0FFcENFLElBQUksR0FBRyxDQUFDOztJQUNiLEdBQUssQ0FBOEJELEdBQVMsR0FBVEEsNERBQU8sSUFBbENFLElBQUksR0FBdUJGLEdBQVMsQ0FBcENFLElBQUksRUFBRUMsS0FBSyxHQUFnQkgsR0FBUyxDQUE5QkcsS0FBSyxFQUFFQyxTQUFTLEdBQUtKLEdBQVMsQ0FBdkJJLFNBQVM7SUFDOUIsRUFBRSxFQUFFQSxTQUFTLEVBQUUsTUFBTSxzRUFBRUMsQ0FBRzs7Ozs7O2tCQUFDLENBQVU7O0lBQ3JDLEVBQUUsRUFBRUYsS0FBSyxFQUFFLE1BQU0sc0VBQUVFLENBQUc7Ozs7OztrQkFBRUYsS0FBSyxDQUFDRyxPQUFPOztJQUVyQyxFQUFFLEVBQUVKLElBQUksRUFBRSxDQUFDO1FBQ1QsTUFBTSx1RUFDSEcsQ0FBRzs7Ozs7OztnQkFBQyxDQUNLO2dCQUFDSCxJQUFJLENBQUNLLElBQUk7Z0JBQUMsQ0FBRTtxRkFBQ0MsQ0FBQztvQkFBQ0MsSUFBSSxFQUFDLENBQWtCOzs7Ozs7OEJBQUMsQ0FBTTs7OztJQUc1RCxDQUFDO0lBRUQsTUFBTSxzRUFBRUQsQ0FBQztRQUFDQyxJQUFJLEVBQUMsQ0FBaUI7Ozs7OztrQkFBQyxDQUFLOztBQUMxQyxDQUFDO0dBZFFSLElBQUk7O1FBQzBCRCx3REFBTzs7O0FBZTlDLCtEQUFlQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcnQudHN4P2Q2N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuXG5mdW5jdGlvbiBjYXJ0KCkge1xuICAgIGNvbnN0IHsgdXNlciwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIFxuICAgIGlmICh1c2VyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFdlbGNvbWUge3VzZXIubmFtZX0hIDxhIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCI+TG9nb3V0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gPGEgaHJlZj1cIi9hcGkvYXV0aC9sb2dpblwiPkxvZ2luPC9hPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FydFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVXNlciIsImNhcnQiLCJ1c2VyIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJtZXNzYWdlIiwibmFtZSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart.tsx\n");

/***/ })

});