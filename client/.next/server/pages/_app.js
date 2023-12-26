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

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);\n_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst buttonStyle = {\n    display: \"inline-flex\",\n    alignItems: \"center\",\n    padding: \"8px 20px\",\n    color: \"black\",\n    textDecoration: \"none\",\n    cursor: \"pointer\"\n};\nconst activeButtonStyle = {\n    ...buttonStyle,\n    color: \"blue\",\n    borderBottom: \"2px solid blue\"\n};\nconst TopNav = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSetActive = (pathname)=>{\n        setActiveButton(pathname);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: activeButton === \"/\" ? activeButtonStyle : buttonStyle,\n                    onClick: ()=>handleSetActive(\"/\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHome,\n                            style: {\n                                marginRight: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        \"App\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/login\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: activeButton === \"/login\" ? activeButtonStyle : buttonStyle,\n                    onClick: ()=>handleSetActive(\"/login\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignInAlt,\n                            style: {\n                                marginRight: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Login\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/register\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: activeButton === \"/register\" ? activeButtonStyle : buttonStyle,\n                    onClick: ()=>handleSetActive(\"/register\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUserPlus,\n                            style: {\n                                marginRight: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Register\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNKO0FBQ1c7QUFDeUI7QUFDbUI7QUFFcEYsTUFBTU8sY0FBYztJQUNsQkMsU0FBUztJQUNUQyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxnQkFBZ0I7SUFDaEJDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLG9CQUFvQjtJQUN4QixHQUFHUCxXQUFXO0lBQ2RJLE9BQU87SUFDUEksY0FBYztBQUNoQjtBQUVBLE1BQU1DLFNBQVM7SUFDYixNQUFNQyxTQUFTZixzREFBU0E7SUFDeEIsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNb0Isa0JBQWtCLENBQUNDO1FBQ3ZCRixnQkFBZ0JFO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ3JCLHNDQUFJQTtnQkFBQ3NCLE1BQUs7MEJBQ1QsNEVBQUNDO29CQUNDQyxPQUFPUCxpQkFBaUIsTUFBTUosb0JBQW9CUDtvQkFDbERtQixTQUFTLElBQU1OLGdCQUFnQjs7c0NBRS9CLDhEQUFDakIsMkVBQWVBOzRCQUFDd0IsTUFBTXZCLHFFQUFNQTs0QkFBRXFCLE9BQU87Z0NBQUVHLGFBQWE7NEJBQU07Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7OzBCQUtwRSw4REFBQzNCLHNDQUFJQTtnQkFBQ3NCLE1BQUs7MEJBQ1QsNEVBQUNDO29CQUNDQyxPQUFPUCxpQkFBaUIsV0FBV0osb0JBQW9CUDtvQkFDdkRtQixTQUFTLElBQU1OLGdCQUFnQjs7c0NBRS9CLDhEQUFDakIsMkVBQWVBOzRCQUFDd0IsTUFBTXRCLDBFQUFXQTs0QkFBRW9CLE9BQU87Z0NBQUVHLGFBQWE7NEJBQU07Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7OzBCQUt6RSw4REFBQzNCLHNDQUFJQTtnQkFBQ3NCLE1BQUs7MEJBQ1QsNEVBQUNDO29CQUNDQyxPQUFPUCxpQkFBaUIsY0FBY0osb0JBQW9CUDtvQkFDMURtQixTQUFTLElBQU1OLGdCQUFnQjs7c0NBRS9CLDhEQUFDakIsMkVBQWVBOzRCQUFDd0IsTUFBTXJCLHlFQUFVQTs0QkFBRW1CLE9BQU87Z0NBQUVHLGFBQWE7NEJBQU07Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlFO0FBRUEsaUVBQWVaLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhSG9tZSwgZmFTaWduSW5BbHQsIGZhVXNlclBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICBwYWRkaW5nOiAnOHB4IDIwcHgnLFxyXG4gIGNvbG9yOiAnYmxhY2snLFxyXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbn07XHJcblxyXG5jb25zdCBhY3RpdmVCdXR0b25TdHlsZSA9IHtcclxuICAuLi5idXR0b25TdHlsZSxcclxuICBjb2xvcjogJ2JsdWUnLFxyXG4gIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibHVlJyxcclxufTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYWN0aXZlQnV0dG9uLCBzZXRBY3RpdmVCdXR0b25dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNldEFjdGl2ZSA9IChwYXRobmFtZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQnV0dG9uKHBhdGhuYW1lKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZUJ1dHRvbiA9PT0gJy8nID8gYWN0aXZlQnV0dG9uU3R5bGUgOiBidXR0b25TdHlsZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldEFjdGl2ZSgnLycpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0gLz5cclxuICAgICAgICAgIEFwcFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17YWN0aXZlQnV0dG9uID09PSAnL2xvZ2luJyA/IGFjdGl2ZUJ1dHRvblN0eWxlIDogYnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRBY3RpdmUoJy9sb2dpbicpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduSW5BbHR9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fSAvPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZUJ1dHRvbiA9PT0gJy9yZWdpc3RlcicgPyBhY3RpdmVCdXR0b25TdHlsZSA6IGJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2V0QWN0aXZlKCcvcmVnaXN0ZXInKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlclBsdXN9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fSAvPlxyXG4gICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsInVzZVJvdXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhSG9tZSIsImZhU2lnbkluQWx0IiwiZmFVc2VyUGx1cyIsImJ1dHRvblN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsImFjdGl2ZUJ1dHRvblN0eWxlIiwiYm9yZGVyQm90dG9tIiwiVG9wTmF2Iiwicm91dGVyIiwiYWN0aXZlQnV0dG9uIiwic2V0QWN0aXZlQnV0dG9uIiwiaGFuZGxlU2V0QWN0aXZlIiwicGF0aG5hbWUiLCJkaXYiLCJocmVmIiwicCIsInN0eWxlIiwib25DbGljayIsImljb24iLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopNav */ \"./components/TopNav.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TopNav__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_TopNav__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1o7QUFDUztBQUNJO0FBQ0M7QUFHL0MsU0FBU0UsTUFBTSxFQUFDQyxTQUFTLEVBQUNDLFNBQVMsRUFBQztJQUVoQyxxQkFDRTs7MEJBQ0UsOERBQUNILDBEQUFjQTtnQkFBQ0ksVUFBUzs7Ozs7OzBCQUN6Qiw4REFBQ0wsMERBQU1BOzs7OzswQkFDUCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgVG9wTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL1RvcE5hdlwiO1xyXG5pbXBvcnQge1RvYXN0Q29udGFpbmVyfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LHBhZ2VQcm9wc30pXHJcbntcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+IFxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIi8+XHJcbiAgICAgICAgPFRvcE5hdi8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlRvcE5hdiIsIlRvYXN0Q29udGFpbmVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();