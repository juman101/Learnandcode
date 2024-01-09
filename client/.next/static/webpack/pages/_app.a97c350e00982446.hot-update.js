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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Context: function() { return /* binding */ Context; },\n/* harmony export */   Provider: function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// initial state\nconst intialState = {\n    user: null\n};\n// create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// root reducer\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// context provider\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialState);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].interceptors.response.use(function(response) {\n        // any status code that lie within the range of 2XX cause this function\n        // to trigger\n        return response;\n    }, function(error) {\n        // any status codes that falls outside the range of 2xx cause this function\n        // to trigger\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            return new Promise((resolve, reject)=>{\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/logout\").then((data)=>{\n                    console.log(\"/401 error > logout\");\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window.localStorage.removeItem(\"user\");\n                    router.push(\"/login\");\n                }).catch((err)=>{\n                    console.log(\"AXIOS INTERCEPTORS ERR\", err);\n                    reject(error);\n                });\n            });\n        }\n        return Promise.reject(error);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCsrfToken = async ()=>{\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/csrf-token\");\n            // console.log(\"CSRF\", data);\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers[\"X-CSRF-Token\"] = data.csrfToken;\n        };\n        getCsrfToken();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\context\\\\index.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"K8QiL3/+sJiE6wRj9aqnm9+yrP4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Provider;\n\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ25DO0FBQzBCO0FBRXBELGdCQUFnQjtBQUNoQixNQUFNTSxjQUFjO0lBQ2xCQyxNQUFNO0FBQ1I7QUFFQSxpQkFBaUI7QUFDakIsTUFBTUMsd0JBQVVQLG9EQUFhQTtBQUU3QixlQUFlO0FBQ2YsTUFBTVEsY0FBYyxDQUFDQyxPQUFPQztJQUMxQixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdGLEtBQUs7Z0JBQUVILE1BQU1JLE9BQU9FLE9BQU87WUFBQztRQUMxQyxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHSCxLQUFLO2dCQUFFSCxNQUFNO1lBQUs7UUFDaEM7WUFDRSxPQUFPRztJQUNYO0FBQ0Y7QUFFQSxtQkFBbUI7QUFDbkIsTUFBTUksV0FBVztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDNUIsTUFBTSxDQUFDTCxPQUFPTSxTQUFTLEdBQUdoQixpREFBVUEsQ0FBQ1MsYUFBYUg7SUFFbEQsU0FBUztJQUNULE1BQU1XLFNBQVNiLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDUmMsU0FBUztZQUNQSixNQUFNO1lBQ05DLFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDbEQ7SUFDRixHQUFHLEVBQUU7SUFFTG5CLDBEQUFrQixDQUFDcUIsUUFBUSxDQUFDQyxHQUFHLENBQzdCLFNBQVVELFFBQVE7UUFDaEIsdUVBQXVFO1FBQ3ZFLGFBQWE7UUFDYixPQUFPQTtJQUNULEdBQ0EsU0FBVUUsS0FBSztRQUNiLDJFQUEyRTtRQUMzRSxhQUFhO1FBQ2IsSUFBSUMsTUFBTUQsTUFBTUYsUUFBUTtRQUN4QixJQUFJRyxJQUFJQyxNQUFNLEtBQUssT0FBT0QsSUFBSUUsTUFBTSxJQUFJLENBQUNGLElBQUlFLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUU7WUFDcEUsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO2dCQUMzQjlCLGlEQUNNLENBQUMsZUFDSmdDLElBQUksQ0FBQyxDQUFDQztvQkFDTEMsUUFBUUMsR0FBRyxDQUFDO29CQUNadEIsU0FBUzt3QkFBRUosTUFBTTtvQkFBUztvQkFDMUJRLE9BQU9DLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQztvQkFDL0J0QixPQUFPdUIsSUFBSSxDQUFDO2dCQUNkLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztvQkFDTkwsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkk7b0JBQ3RDVCxPQUFPUDtnQkFDVDtZQUNKO1FBQ0Y7UUFDQSxPQUFPSyxRQUFRRSxNQUFNLENBQUNQO0lBQ3hCO0lBR0Z4QixnREFBU0EsQ0FBQztRQUNSLE1BQU15QyxlQUFlO1lBQ25CLE1BQU0sRUFBRVAsSUFBSSxFQUFFLEdBQUcsTUFBTWpDLGlEQUFTLENBQUM7WUFDakMsNkJBQTZCO1lBQzdCQSxzREFBYyxDQUFDMEMsT0FBTyxDQUFDLGVBQWUsR0FBR1QsS0FBS1UsU0FBUztRQUN6RDtRQUNBSDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbkMsUUFBUU0sUUFBUTtRQUFDaUMsT0FBTztZQUFFckM7WUFBT007UUFBUztrQkFBSUQ7Ozs7OztBQUVuRDtHQXZETUQ7O1FBSVdWLGtEQUFTQTs7O0tBSnBCVTtBQXlEdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlclJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gaW5pdGlhbCBzdGF0ZVxyXG5jb25zdCBpbnRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG59O1xyXG5cclxuLy8gY3JlYXRlIGNvbnRleHRcclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIHJvb3QgcmVkdWNlclxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGNvbnRleHQgcHJvdmlkZXJcclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbnRpYWxTdGF0ZSk7XHJcblxyXG4gIC8vIHJvdXRlclxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkxPR0lOXCIsXHJcbiAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSksXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8gYW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMlhYIGNhdXNlIHRoaXMgZnVuY3Rpb25cclxuICAgICAgLy8gdG8gdHJpZ2dlclxyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIGFueSBzdGF0dXMgY29kZXMgdGhhdCBmYWxscyBvdXRzaWRlIHRoZSByYW5nZSBvZiAyeHggY2F1c2UgdGhpcyBmdW5jdGlvblxyXG4gICAgICAvLyB0byB0cmlnZ2VyXHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcIi9hcGkvbG9nb3V0XCIpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIvNDAxIGVycm9yID4gbG9nb3V0XCIpO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dPVVRcIiB9KTtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVhJT1MgSU5URVJDRVBUT1JTIEVSUlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldENzcmZUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NzcmYtdG9rZW5cIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1NSRlwiLCBkYXRhKTtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVyc1tcIlgtQ1NSRi1Ub2tlblwiXSA9IGRhdGEuY3NyZlRva2VuO1xyXG4gICAgfTtcclxuICAgIGdldENzcmZUb2tlbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBDb250ZXh0LCBQcm92aWRlciB9O1xyXG4iXSwibmFtZXMiOlsidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsInVzZXJSb3V0ZXIiLCJpbnRpYWxTdGF0ZSIsInVzZXIiLCJDb250ZXh0Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwicm91dGVyIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJyZXMiLCJzdGF0dXMiLCJjb25maWciLCJfX2lzUmV0cnlSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJdGVtIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiZ2V0Q3NyZlRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY3NyZlRva2VuIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n"));

/***/ })

});