"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stripe/callback",{

/***/ "./pages/stripe/callback.js":
/*!**********************************!*\
  !*** ./pages/stripe/callback.js ***!
  \**********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst StripeCallback = ()=>{\n    _s();\n    const { state: { user }, disatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            console.log(user);\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/get-account-status\").then((res)=>{\n            // window.location.href = \"/instructor\";\n            });\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            padding: \"5rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                fontSize: \"4rem\",\n                color: \"red\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"spinner-border text-danger\",\n                role: \"status\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"sr-only\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\stripe\\\\callback.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\stripe\\\\callback.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\stripe\\\\callback.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\stripe\\\\callback.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StripeCallback, \"SGofErTHkEVoxH8xb2wL1b6JfAo=\");\n_c = StripeCallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StripeCallback);\nvar _c;\n$RefreshReg$(_c, \"StripeCallback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHJpcGUvY2FsbGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUMzQjtBQUNjO0FBQ3hDLE1BQU1LLGlCQUFpQjs7SUFDckIsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLElBQUksRUFBRSxFQUNmQyxPQUFPLEVBQ1IsR0FBR1AsaURBQVVBLENBQUNHLDZDQUFPQTtJQUV0QkYsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxNQUFNO1lBQ05FLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDZEosa0RBQVUsQ0FBQywyQkFBMkJTLElBQUksQ0FBQyxDQUFDQztZQUUxQyx3Q0FBd0M7WUFDMUM7UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBSztJQUVULHFCQUNFLDhEQUFDTztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFNBQVM7UUFDWDtrQkFFQSw0RUFBQ0w7WUFDQ0MsT0FBTztnQkFDTEMsU0FBUztnQkFDVEMsZ0JBQWdCO2dCQUNoQkMsWUFBWTtnQkFDWkUsVUFBVTtnQkFDVkMsT0FBTztZQUNUO3NCQUVBLDRFQUFDUDtnQkFBSVEsV0FBVTtnQkFBNkJDLE1BQUs7MEJBQy9DLDRFQUFDQztvQkFBS0YsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBeENNakI7S0FBQUE7QUEwQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RyaXBlL2NhbGxiYWNrLmpzP2U3ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5jb25zdCBTdHJpcGVDYWxsYmFjayA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBzdGF0ZTogeyB1c2VyIH0sXHJcbiAgICBkaXNhdGNoXHJcbiAgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICBheGlvcy5wb3N0KFwiL2FwaS9nZXQtYWNjb3VudC1zdGF0dXNcIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2luc3RydWN0b3JcIjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiNXJlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1kYW5nZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyaXBlQ2FsbGJhY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNvbnRleHQiLCJTdHJpcGVDYWxsYmFjayIsInN0YXRlIiwidXNlciIsImRpc2F0Y2giLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJjb2xvciIsImNsYXNzTmFtZSIsInJvbGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/stripe/callback.js\n"));

/***/ })

});