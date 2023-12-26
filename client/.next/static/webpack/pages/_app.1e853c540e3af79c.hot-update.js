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

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Context: function() { return /* binding */ Context; },\n/* harmony export */   Provider: function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _s = $RefreshSig$();\n\n// Initial state\nconst initialState = {\n    user: null\n};\n// Create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Reducer function\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        // Handle other action types if needed\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// Context provider component\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    // Add other actions if needed\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch,\n            login\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\context\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"bgCdjuTOmPdSBRwTap80EFd9Y3U=\");\n_c = Provider;\n\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQUU3RCxnQkFBZ0I7QUFDaEIsTUFBTUcsZUFBZTtJQUNuQkMsTUFBTTtBQUNSO0FBRUEsaUJBQWlCO0FBQ2pCLE1BQU1DLHdCQUFVTCxvREFBYUE7QUFFN0IsbUJBQW1CO0FBQ25CLE1BQU1NLGNBQWMsQ0FBQ0MsT0FBT0M7SUFDMUIsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHRixLQUFLO2dCQUFFSCxNQUFNSSxPQUFPRSxPQUFPO1lBQUM7UUFDMUMsc0NBQXNDO1FBQ3RDLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdILEtBQUs7Z0JBQUVILE1BQU07WUFBSztRQUNoQztZQUNFLE9BQU9HO0lBQ1g7QUFDRjtBQUVBLDZCQUE2QjtBQUM3QixNQUFNSSxXQUFXO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM1QixNQUFNLENBQUNMLE9BQU9NLFNBQVMsR0FBR1osaURBQVVBLENBQUNLLGFBQWFIO0lBRWxERCxnREFBU0EsQ0FBQztRQUFRVyxTQUFTO1lBQ3JCSixNQUFNO1lBQ05DLFNBQVNJLEtBQUtDLEtBQUssQ0FBQ0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFFdEQ7SUFDRixHQUFFLEVBQUU7SUFFRiw4QkFBOEI7SUFFOUIscUJBQ0UsOERBQUNiLFFBQVFNLFFBQVE7UUFBQ1EsT0FBTztZQUFFWjtZQUFPTTtZQUFVTztRQUFNO2tCQUMvQ1I7Ozs7OztBQUdQO0dBakJNRDtLQUFBQTtBQW1CdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gSW5pdGlhbCBzdGF0ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjogbnVsbCxcclxufTtcclxuXHJcbi8vIENyZWF0ZSBjb250ZXh0XHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBSZWR1Y2VyIGZ1bmN0aW9uXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiTE9HSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAvLyBIYW5kbGUgb3RoZXIgYWN0aW9uIHR5cGVzIGlmIG5lZWRlZFxyXG4gICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIENvbnRleHQgcHJvdmlkZXIgY29tcG9uZW50XHJcbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFwiTE9HSU5cIixcclxuICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG5cclxuICB9KVxyXG59LFtdKVxyXG5cclxuICAvLyBBZGQgb3RoZXIgYWN0aW9ucyBpZiBuZWVkZWRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCwgbG9naW4gfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJvdmlkZXIsIENvbnRleHQgfTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwiaW5pdGlhbFN0YXRlIiwidXNlciIsIkNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiLCJsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n"));

/***/ })

});