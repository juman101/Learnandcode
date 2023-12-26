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

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst buttonStyle = {\n    display: \"inline-flex\",\n    alignItems: \"center\",\n    padding: \"8px 20px\",\n    color: \"black\",\n    textDecoration: \"none\",\n    cursor: \"pointer\"\n};\n\nconst activeButtonStyle = {\n    ...buttonStyle,\n    color: \"blue\",\n    borderBottom: \"2px solid blue\"\n};\nconst TopNav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n    const handleSetActive = (pathname)=>{\n        setActiveButton(pathname);\n    };\n    const logout = async ()=>{\n        dispatch();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: activeButton === \"/\" ? activeButtonStyle : buttonStyle,\n                    onClick: ()=>handleSetActive(\"/\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHome,\n                            style: {\n                                marginRight: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        \"App\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/login\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: activeButton === \"/login\" ? activeButtonStyle : buttonStyle,\n                    onClick: ()=>handleSetActive(\"/login\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSignInAlt,\n                            style: {\n                                marginRight: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Login\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/register\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: activeButton === \"/register\" ? activeButtonStyle : buttonStyle,\n                    onClick: ()=>handleSetActive(\"/register\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUserPlus,\n                            style: {\n                                marginRight: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Register\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopNav, \"URT+Wi7UdFKWvUhdbOmFYG6Egig=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ2hCO0FBQ1c7QUFDeUI7QUFDbUI7QUFDMUQ7QUFDMUIsTUFBTVMsY0FBYztJQUNsQkMsU0FBUztJQUNUQyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxnQkFBZ0I7SUFDaEJDLFFBQVE7QUFDVjtBQUNvQztBQUNwQyxNQUFNRSxvQkFBb0I7SUFDeEIsR0FBR1IsV0FBVztJQUNkSSxPQUFPO0lBQ1BLLGNBQWM7QUFDaEI7QUFDQSxNQUFNQyxTQUFTOztJQUNiLE1BQU1DLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTSxDQUFDa0IsY0FBY0MsZ0JBQWdCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVsRCxNQUFNLEVBQUNzQixLQUFLLEVBQUNDLFFBQVEsRUFBQyxHQUFDeEIsaURBQVVBLENBQUNnQiw2Q0FBT0E7SUFFeEMsTUFBTVMsa0JBQWtCLENBQUNDO1FBQ3ZCSixnQkFBZ0JJO0lBQ2xCO0lBRUEsTUFBTUMsU0FBUTtRQUVaSDtJQUVGO0lBQ0EscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQzFCLHNDQUFJQTtnQkFBQzJCLE1BQUs7MEJBQ1QsNEVBQUNDO29CQUNDQyxPQUFPVixpQkFBaUIsTUFBTUosb0JBQW9CUjtvQkFDbER1QixTQUFTLElBQU1QLGdCQUFnQjs7c0NBRS9CLDhEQUFDckIsMkVBQWVBOzRCQUFDNkIsTUFBTTVCLHFFQUFNQTs0QkFBRTBCLE9BQU87Z0NBQUVHLGFBQWE7NEJBQU07Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7OzBCQUtwRSw4REFBQ2hDLHNDQUFJQTtnQkFBQzJCLE1BQUs7MEJBQ1QsNEVBQUNDO29CQUNDQyxPQUFPVixpQkFBaUIsV0FBV0osb0JBQW9CUjtvQkFDdkR1QixTQUFTLElBQU1QLGdCQUFnQjs7c0NBRS9CLDhEQUFDckIsMkVBQWVBOzRCQUFDNkIsTUFBTTNCLDBFQUFXQTs0QkFBRXlCLE9BQU87Z0NBQUVHLGFBQWE7NEJBQU07Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7OzBCQUt6RSw4REFBQ2hDLHNDQUFJQTtnQkFBQzJCLE1BQUs7MEJBQ1QsNEVBQUNDO29CQUNDQyxPQUFPVixpQkFBaUIsY0FBY0osb0JBQW9CUjtvQkFDMUR1QixTQUFTLElBQU1QLGdCQUFnQjs7c0NBRS9CLDhEQUFDckIsMkVBQWVBOzRCQUFDNkIsTUFBTTFCLHlFQUFVQTs0QkFBRXdCLE9BQU87Z0NBQUVHLGFBQWE7NEJBQU07Ozs7Ozt3QkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlFO0dBaERNZjs7UUFDV2hCLGtEQUFTQTs7O0tBRHBCZ0I7QUFrRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUhvbWUsIGZhU2lnbkluQWx0LCBmYVVzZXJQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICBwYWRkaW5nOiAnOHB4IDIwcHgnLFxyXG4gIGNvbG9yOiAnYmxhY2snLFxyXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbn07XHJcbmltcG9ydCAge0NvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmNvbnN0IGFjdGl2ZUJ1dHRvblN0eWxlID0ge1xyXG4gIC4uLmJ1dHRvblN0eWxlLFxyXG4gIGNvbG9yOiAnYmx1ZScsXHJcbiAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIGJsdWUnLFxyXG59O1xyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2FjdGl2ZUJ1dHRvbiwgc2V0QWN0aXZlQnV0dG9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuIGNvbnN0IHtzdGF0ZSxkaXNwYXRjaH09dXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0QWN0aXZlID0gKHBhdGhuYW1lKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVCdXR0b24ocGF0aG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9YXN5bmMoKT0+XHJcbiAge1xyXG4gICAgZGlzcGF0Y2goKVxyXG5cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXthY3RpdmVCdXR0b24gPT09ICcvJyA/IGFjdGl2ZUJ1dHRvblN0eWxlIDogYnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRBY3RpdmUoJy8nKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+XHJcbiAgICAgICAgICBBcHBcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZUJ1dHRvbiA9PT0gJy9sb2dpbicgPyBhY3RpdmVCdXR0b25TdHlsZSA6IGJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2V0QWN0aXZlKCcvbG9naW4nKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2lnbkluQWx0fSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0gLz5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXthY3RpdmVCdXR0b24gPT09ICcvcmVnaXN0ZXInID8gYWN0aXZlQnV0dG9uU3R5bGUgOiBidXR0b25TdHlsZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldEFjdGl2ZSgnL3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJQbHVzfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0gLz5cclxuICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlUm91dGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFIb21lIiwiZmFTaWduSW5BbHQiLCJmYVVzZXJQbHVzIiwiYXhpb3MiLCJidXR0b25TdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJjdXJzb3IiLCJDb250ZXh0IiwiYWN0aXZlQnV0dG9uU3R5bGUiLCJib3JkZXJCb3R0b20iLCJUb3BOYXYiLCJyb3V0ZXIiLCJhY3RpdmVCdXR0b24iLCJzZXRBY3RpdmVCdXR0b24iLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlU2V0QWN0aXZlIiwicGF0aG5hbWUiLCJsb2dvdXQiLCJkaXYiLCJocmVmIiwicCIsInN0eWxlIiwib25DbGljayIsImljb24iLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});