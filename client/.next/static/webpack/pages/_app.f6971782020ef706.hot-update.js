"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[10].use[4]!./sass/pages/styles.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[10].use[4]!./sass/pages/styles.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  /* root font size is 16px so 62.5% is 10px */\\n  font-size: 62.5%;\\n}\\n@media (min-width: 112.5em) {\\n  html {\\n    font-size: 75%;\\n  }\\n}\\n@media (max-width: 75em) {\\n  html {\\n    font-size: 56.25%;\\n  }\\n}\\n@media (max-width: 56.25em) {\\n  html {\\n    font-size: 50%;\\n  }\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  padding: 3rem;\\n  background-color: #f2f2f2;\\n}\\n@media (max-width: 56.25em) {\\n  body {\\n    padding: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.scss\",\"webpack://../../../../../../iCloud%20Documents/Web%20Development/Projects/Next%20Projects/ecommerce-template/client/sass/pages/styles.scss\"],\"names\":[],\"mappings\":\"AAAA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;ACCF;;AD6BA;EAEE,4CAAA;EACA,gBAAA;AC3BF;ADiBI;EAOJ;IAMI,cAAA;EC1BF;AACF;ADMI;EAaJ;IASI,iBAAA;ECxBF;AACF;ADLI;EAmBJ;IAYI,cAAA;ECtBF;AACF;;ADyBA;EACE,sBAAA;EACA,aAAA;EACA,yBAAA;ACtBF;ADhBI;EAmCJ;IAMI,UAAA;ECrBF;AACF\",\"sourcesContent\":[\"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\n@mixin respond($breakpoint) {\\n  @if $breakpoint == phone {\\n    @media (max-width: 37.5em) {\\n      //600px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-port {\\n    @media (max-width: 56.25em) {\\n      //900px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == tab-land {\\n    @media (max-width: 75em) {\\n      //1200px\\n      @content;\\n    }\\n  }\\n  @if $breakpoint == big-desktop {\\n    @media (min-width: 112.5em) {\\n      //1800px\\n      @content;\\n    }\\n  }\\n}\\n\\nhtml {\\n  // Defines what 1rem is\\n  /* root font size is 16px so 62.5% is 10px */\\n  font-size: 62.5%;\\n\\n  @include respond(big-desktop) {\\n    font-size: 75%; // 12px\\n  }\\n  @include respond(tab-land) {\\n    font-size: 56.25%; //9px\\n  }\\n  @include respond(tab-port) {\\n    font-size: 50%; //8px\\n  }\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  padding: 3rem;\\n  background-color: rgb(242, 242, 242);\\n\\n  @include respond(tab-port) {\\n    padding: 0;\\n  }\\n}\\n\",\"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  /* root font size is 16px so 62.5% is 10px */\\n  font-size: 62.5%;\\n}\\n@media (min-width: 112.5em) {\\n  html {\\n    font-size: 75%;\\n  }\\n}\\n@media (max-width: 75em) {\\n  html {\\n    font-size: 56.25%;\\n  }\\n}\\n@media (max-width: 56.25em) {\\n  html {\\n    font-size: 50%;\\n  }\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  padding: 3rem;\\n  background-color: #f2f2f2;\\n}\\n@media (max-width: 56.25em) {\\n  body {\\n    padding: 0;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsxMF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzEwXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsxMF0udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMTBdLnVzZVs0XSEuL3Nhc3MvcGFnZXMvc3R5bGVzLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG9FQUFvRSxjQUFjLGVBQWUsd0JBQXdCLEdBQUcsVUFBVSxzRUFBc0UsR0FBRywrQkFBK0IsVUFBVSxxQkFBcUIsS0FBSyxHQUFHLDRCQUE0QixVQUFVLHdCQUF3QixLQUFLLEdBQUcsK0JBQStCLFVBQVUscUJBQXFCLEtBQUssR0FBRyxVQUFVLDJCQUEyQixrQkFBa0IsOEJBQThCLEdBQUcsK0JBQStCLFVBQVUsaUJBQWlCLEtBQUssR0FBRyxPQUFPLDJOQUEyTixVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sbURBQW1ELGNBQWMsZUFBZSx3QkFBd0IsR0FBRyxpQ0FBaUMsOEJBQThCLGtDQUFrQyxnQ0FBZ0MsT0FBTyxLQUFLLGlDQUFpQyxtQ0FBbUMsZ0NBQWdDLE9BQU8sS0FBSyxpQ0FBaUMsZ0NBQWdDLGlDQUFpQyxPQUFPLEtBQUssb0NBQW9DLG1DQUFtQyxpQ0FBaUMsT0FBTyxLQUFLLEdBQUcsVUFBVSxpR0FBaUcscUNBQXFDLHNCQUFzQixZQUFZLGdDQUFnQyx5QkFBeUIsVUFBVSxnQ0FBZ0Msc0JBQXNCLFVBQVUsR0FBRyxVQUFVLDJCQUEyQixrQkFBa0IseUNBQXlDLGtDQUFrQyxpQkFBaUIsS0FBSyxHQUFHLCtCQUErQixjQUFjLGVBQWUsd0JBQXdCLEdBQUcsVUFBVSxzRUFBc0UsR0FBRywrQkFBK0IsVUFBVSxxQkFBcUIsS0FBSyxHQUFHLDRCQUE0QixVQUFVLHdCQUF3QixLQUFLLEdBQUcsK0JBQStCLFVBQVUscUJBQXFCLEtBQUssR0FBRyxVQUFVLDJCQUEyQixrQkFBa0IsOEJBQThCLEdBQUcsK0JBQStCLFVBQVUsaUJBQWlCLEtBQUssR0FBRyxtQkFBbUI7QUFDdGxGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2Fzcy9wYWdlcy9zdHlsZXMuc2Nzcz82YmI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiByb290IGZvbnQgc2l6ZSBpcyAxNnB4IHNvIDYyLjUlIGlzIDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTIuNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1Ni4yNSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uLy4uLy4uL2lDbG91ZCUyMERvY3VtZW50cy9XZWIlMjBEZXZlbG9wbWVudC9Qcm9qZWN0cy9OZXh0JTIwUHJvamVjdHMvZWNvbW1lcmNlLXRlbXBsYXRlL2NsaWVudC9zYXNzL3BhZ2VzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FENkJBO0VBRUUsNENBQUE7RUFDQSxnQkFBQTtBQzNCRjtBRGlCSTtFQU9KO0lBTUksY0FBQTtFQzFCRjtBQUNGO0FETUk7RUFhSjtJQVNJLGlCQUFBO0VDeEJGO0FBQ0Y7QURMSTtFQW1CSjtJQVlJLGNBQUE7RUN0QkY7QUFDRjs7QUR5QkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ3RCRjtBRGhCSTtFQW1DSjtJQU1JLFVBQUE7RUNyQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBwaG9uZSB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNy41ZW0pIHtcXG4gICAgICAvLzYwMHB4XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItcG9ydCB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgICAgLy85MDBweFxcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgICAgIC8vMTIwMHB4XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcCB7XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTIuNWVtKSB7XFxuICAgICAgLy8xODAwcHhcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5odG1sIHtcXG4gIC8vIERlZmluZXMgd2hhdCAxcmVtIGlzXFxuICAvKiByb290IGZvbnQgc2l6ZSBpcyAxNnB4IHNvIDYyLjUlIGlzIDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuXFxuICBAaW5jbHVkZSByZXNwb25kKGJpZy1kZXNrdG9wKSB7XFxuICAgIGZvbnQtc2l6ZTogNzUlOyAvLyAxMnB4XFxuICB9XFxuICBAaW5jbHVkZSByZXNwb25kKHRhYi1sYW5kKSB7XFxuICAgIGZvbnQtc2l6ZTogNTYuMjUlOyAvLzlweFxcbiAgfVxcbiAgQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xcbiAgICBmb250LXNpemU6IDUwJTsgLy84cHhcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG5cXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXCIsXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICAvKiByb290IGZvbnQgc2l6ZSBpcyAxNnB4IHNvIDYyLjUlIGlzIDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTIuNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1Ni4yNSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[10].use[4]!./sass/pages/styles.scss\n");

/***/ })

});