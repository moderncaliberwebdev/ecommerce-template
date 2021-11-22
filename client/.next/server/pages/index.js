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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./sass/pages/_home.module.scss":
/*!**************************************!*\
  !*** ./sass/pages/_home.module.scss ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"heading\": \"_home_heading__2JQMN\",\n\t\"container\": \"_home_container__2xUPg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL3BhZ2VzL19ob21lLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJuLW5leHQtc2Fzcy1raW5kbGluZy8uL3Nhc3MvcGFnZXMvX2hvbWUubW9kdWxlLnNjc3M/NzJjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nXCI6IFwiX2hvbWVfaGVhZGluZ19fMkpRTU5cIixcblx0XCJjb250YWluZXJcIjogXCJfaG9tZV9jb250YWluZXJfXzJ4VVBnXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sass/pages/_home.module.scss\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/main */ \"./redux/actions/main.ts\");\n/* harmony import */ var _sass_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/pages/_home.module.scss */ \"./sass/pages/_home.module.scss\");\n/* harmony import */ var _sass_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Home({ title  }) {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const name = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.main.name\n    );\n    //.main.name\n    const getNewName = (newNameParam)=>{\n        dispatch((0,_redux_actions_main__WEBPACK_IMPORTED_MODULE_4__.setInfo)(newNameParam));\n    };\n    const { 0: newName , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_sass_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        __source: {\n            fileName: \"/Users/calebmartin/Documents/Web Development/Kindling/mern-next-sass-kindling/client/pages/index.tsx\",\n            lineNumber: 21\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_sass_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading),\n                __source: {\n                    fileName: \"/Users/calebmartin/Documents/Web Development/Kindling/mern-next-sass-kindling/client/pages/index.tsx\",\n                    lineNumber: 22\n                },\n                __self: this,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"/Users/calebmartin/Documents/Web Development/Kindling/mern-next-sass-kindling/client/pages/index.tsx\",\n                    lineNumber: 23\n                },\n                __self: this,\n                children: [\n                    \"Enter a name \",\n                    name,\n                    \":\"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"text\",\n                value: newName,\n                onChange: (e)=>setName(e.target.value)\n                ,\n                __source: {\n                    fileName: \"/Users/calebmartin/Documents/Web Development/Kindling/mern-next-sass-kindling/client/pages/index.tsx\",\n                    lineNumber: 24\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: ()=>getNewName(newName)\n                ,\n                __source: {\n                    fileName: \"/Users/calebmartin/Documents/Web Development/Kindling/mern-next-sass-kindling/client/pages/index.tsx\",\n                    lineNumber: 29\n                },\n                __self: this,\n                children: \"Submit\"\n            })\n        ]\n    }));\n};\nasync function getStaticProps() {\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`http://localhost:3333/api`);\n    return {\n        props: {\n            title: data.title\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDc0M7QUFDN0M7QUFFc0I7QUFFSztBQUVyQyxRQUFRLENBQUNNLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxLQUFLLENBQUNDLFFBQVEsR0FBR1Asd0RBQVc7SUFFNUIsS0FBSyxDQUFDUSxJQUFJLEdBQUdQLHdEQUFXLEVBQUVRLEtBQXFCLEdBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRixJQUFJOztJQUVyRSxFQUFZO0lBQ1YsS0FBSyxDQUFDRyxVQUFVLElBQUlDLFlBQVksR0FBSyxDQUFDO1FBQ3BDTCxRQUFRLENBQUNKLDREQUFPLENBQUNTLFlBQVk7SUFDL0IsQ0FBQztJQUVELEtBQUssTUFBRUMsT0FBTyxNQUFFQyxPQUFPLE1BQUlmLCtDQUFRLENBQUMsQ0FBRTtJQUN0QyxNQUFNLHVFQUNIZ0IsQ0FBRztRQUFDQyxTQUFTLEVBQUVaLCtFQUFnQjs7Ozs7OztpRkFDN0JjLENBQUU7Z0JBQUNGLFNBQVMsRUFBRVosNkVBQWM7Ozs7OzswQkFBR0UsS0FBSzs7a0ZBQ3BDYyxDQUFDOzs7Ozs7O29CQUFDLENBQWE7b0JBQUNaLElBQUk7b0JBQUMsQ0FBQzs7O2lGQUN0QmEsQ0FBSztnQkFDSkMsSUFBSSxFQUFDLENBQU07Z0JBQ1hDLEtBQUssRUFBRVYsT0FBTztnQkFDZFcsUUFBUSxHQUFHQyxDQUFDLEdBQUtYLE9BQU8sQ0FBQ1csQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7O2lGQUV4Q0ksQ0FBTTtnQkFBQ0MsT0FBTyxNQUFRakIsVUFBVSxDQUFDRSxPQUFPOzs7Ozs7OzBCQUFHLENBQU07Ozs7QUFHeEQsQ0FBQztBQUVNLGVBQWVnQixjQUFjLEdBQUcsQ0FBQztJQUN0QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzVCLGdEQUFTLEVBQUUseUJBQXlCO0lBRTNELE1BQU0sQ0FBQyxDQUFDO1FBQ044QixLQUFLLEVBQUUsQ0FBQztZQUNOMUIsS0FBSyxFQUFFd0IsSUFBSSxDQUFDeEIsS0FBSztRQUNuQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJuLW5leHQtc2Fzcy1raW5kbGluZy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb290U3RhdGVPckFueSwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IHNldEluZm8gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL21haW4nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc2Fzcy9wYWdlcy9faG9tZS5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRpdGxlIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgbmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlT3JBbnkpID0+IHN0YXRlLm1haW4ubmFtZSlcbiAgXG4vLy5tYWluLm5hbWVcbiAgY29uc3QgZ2V0TmV3TmFtZSA9IChuZXdOYW1lUGFyYW0pID0+IHtcbiAgICBkaXNwYXRjaChzZXRJbmZvKG5ld05hbWVQYXJhbSkpXG4gIH1cblxuICBjb25zdCBbbmV3TmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+e3RpdGxlfTwvaDE+XG4gICAgICA8cD5FbnRlciBhIG5hbWUge25hbWV9OjwvcD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICB2YWx1ZT17bmV3TmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE5ld05hbWUobmV3TmFtZSl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hcGlgKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJheGlvcyIsInNldEluZm8iLCJzdHlsZXMiLCJIb21lIiwidGl0bGUiLCJkaXNwYXRjaCIsIm5hbWUiLCJzdGF0ZSIsIm1haW4iLCJnZXROZXdOYW1lIiwibmV3TmFtZVBhcmFtIiwibmV3TmFtZSIsInNldE5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImhlYWRpbmciLCJwIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiZ2V0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./redux/actions/main.ts":
/*!*******************************!*\
  !*** ./redux/actions/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setInfo\": () => (/* binding */ setInfo)\n/* harmony export */ });\nconst setInfo = (name)=>(dispatch)=>{\n        dispatch({\n            type: 'SET_NAME',\n            payload: name\n        });\n    }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL21haW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLEtBQUssQ0FBQ0EsT0FBTyxJQUFJQyxJQUFJLElBQU1DLFFBQVEsR0FBSyxDQUFDO1FBQzlDQSxRQUFRLENBQUMsQ0FBQztZQUNSQyxJQUFJLEVBQUUsQ0FBVTtZQUNoQkMsT0FBTyxFQUFFSCxJQUFJO1FBQ2YsQ0FBQztJQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJuLW5leHQtc2Fzcy1raW5kbGluZy8uL3JlZHV4L2FjdGlvbnMvbWFpbi50cz84NjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IHNldEluZm8gPSAobmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnU0VUX05BTUUnLFxuICAgIHBheWxvYWQ6IG5hbWUsXG4gIH0pXG59XG4iXSwibmFtZXMiOlsic2V0SW5mbyIsIm5hbWUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions/main.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();