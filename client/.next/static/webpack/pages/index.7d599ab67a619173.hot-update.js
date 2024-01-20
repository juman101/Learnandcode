"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cards/CourseCard.js":
/*!****************************************!*\
  !*** ./components/cards/CourseCard.js ***!
  \****************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n\n\nconst CourseCard = (param)=>{\n    let { course } = param;\n    // destructure\n    const { name, instructor, price, image, slug, paid, categories } = course;\n    const currencyFormatter = (data)=>{\n        return (data.amount * 100 / 100).toLocaleString(data.currency, {\n            style: \"currency\",\n            currency: data.currency\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card mb-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__, {\n            href: \"/course/[slug]\",\n            as: \"/course/\".concat(slug),\n            legacyBehavior: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"text-decoration-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.Location,\n                        alt: name,\n                        className: \"card-img-top\",\n                        style: {\n                            height: \"200px\",\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"h4 font-weight-bold\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"by \",\n                                    instructor.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            categories === null || categories === void 0 ? void 0 : categories.map((c, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"badge badge-primary mr-2\",\n                                    style: {\n                                        backgroundColor: \"#03a9f4\"\n                                    },\n                                    children: c.name\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"pt-2\",\n                                children: paid ? currencyFormatter({\n                                    amount: price,\n                                    currency: \"usd\"\n                                }) : \"Free\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\components\\\\cards\\\\CourseCard.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CourseCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseCard);\nvar _c;\n$RefreshReg$(_c, \"CourseCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0NvdXJzZUNhcmQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE2QjtBQUU3QixNQUFNQyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFO0lBQzVCLGNBQWM7SUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRSxHQUFHUDtJQUNuRSxNQUFNUSxvQkFBb0IsQ0FBQ0M7UUFDekIsT0FBTyxDQUFDLEtBQU1DLE1BQU0sR0FBRyxNQUFPLEdBQUUsRUFBR0MsY0FBYyxDQUFDRixLQUFLRyxRQUFRLEVBQUU7WUFDL0RDLE9BQU87WUFDUEQsVUFBVUgsS0FBS0csUUFBUTtRQUN6QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNqQixzQ0FBSUE7WUFBQ2tCLE1BQUs7WUFBaUJDLElBQUksV0FBZ0IsT0FBTFo7WUFBUWEsY0FBYztzQkFDL0QsNEVBQUNDO2dCQUFFSixXQUFVOztrQ0FDWCw4REFBQ0s7d0JBQ0NDLEtBQUtqQixNQUFNa0IsUUFBUTt3QkFDbkJDLEtBQUt0Qjt3QkFDTGMsV0FBVTt3QkFDVkYsT0FBTzs0QkFBRVcsUUFBUTs0QkFBU0MsV0FBVzt3QkFBUTs7Ozs7O2tDQUUvQyw4REFBQ1g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVztnQ0FBR1gsV0FBVTswQ0FBdUJkOzs7Ozs7MENBQ3JDLDhEQUFDMEI7O29DQUFFO29DQUFJekIsV0FBV0QsSUFBSTs7Ozs7Ozs0QkFFckJNLHVCQUFBQSxpQ0FBQUEsV0FBWXFCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDbkIsOERBQUNDO29DQUVDaEIsV0FBVTtvQ0FDVkYsT0FBTzt3Q0FBRW1CLGlCQUFpQjtvQ0FBVTs4Q0FFbkNILEVBQUU1QixJQUFJO21DQUpGNkI7Ozs7OzBDQVFULDhEQUFDRztnQ0FBR2xCLFdBQVU7MENBQ1hULE9BQ0dFLGtCQUFrQjtvQ0FDaEJFLFFBQVFQO29DQUNSUyxVQUFVO2dDQUNaLEtBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEI7S0EvQ01iO0FBaUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ291cnNlQ2FyZC5qcz85YmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IENvdXJzZUNhcmQgPSAoeyBjb3Vyc2UgfSkgPT4ge1xyXG4gIC8vIGRlc3RydWN0dXJlXHJcbiAgY29uc3QgeyBuYW1lLCBpbnN0cnVjdG9yLCBwcmljZSwgaW1hZ2UsIHNsdWcsIHBhaWQsIGNhdGVnb3JpZXMgfSA9IGNvdXJzZTtcclxuICBjb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gKChkYXRhLmFtb3VudCAqIDEwMCkgLyAxMDApLnRvTG9jYWxlU3RyaW5nKGRhdGEuY3VycmVuY3ksIHtcclxuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3ksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTRcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jb3Vyc2UvW3NsdWddXCIgYXM9e2AvY291cnNlLyR7c2x1Z31gfSBsZWdhY3lCZWhhdmlvcj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2ltYWdlLkxvY2F0aW9ufVxyXG4gICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoNCBmb250LXdlaWdodC1ib2xkXCI+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgPHA+Ynkge2luc3RydWN0b3IubmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcz8ubWFwKChjLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeSBtci0yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDNhOWY0XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Yy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICAgIHtwYWlkXHJcbiAgICAgICAgICAgICAgICA/IGN1cnJlbmN5Rm9ybWF0dGVyKHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcInVzZFwiLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiBcIkZyZWVcIn1cclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiQ291cnNlQ2FyZCIsImNvdXJzZSIsIm5hbWUiLCJpbnN0cnVjdG9yIiwicHJpY2UiLCJpbWFnZSIsInNsdWciLCJwYWlkIiwiY2F0ZWdvcmllcyIsImN1cnJlbmN5Rm9ybWF0dGVyIiwiZGF0YSIsImFtb3VudCIsInRvTG9jYWxlU3RyaW5nIiwiY3VycmVuY3kiLCJzdHlsZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhcyIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImltZyIsInNyYyIsIkxvY2F0aW9uIiwiYWx0IiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaDIiLCJwIiwibWFwIiwiYyIsImluZGV4Iiwic3BhbiIsImJhY2tncm91bmRDb2xvciIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/CourseCard.js\n"));

/***/ })

});