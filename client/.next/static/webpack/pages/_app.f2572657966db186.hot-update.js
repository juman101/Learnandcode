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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Context: function() { return /* binding */ Context; },\n/* harmony export */   Provider: function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// initial state\nconst intialState = {\n    user: null\n};\n// create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// root reducer\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// context provider\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialState);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].interceptors.response.use(function(response) {\n        // any status code that lie within the range of 2XX cause this function\n        // to trigger\n        return response;\n    }, function(error) {\n        // any status codes that falls outside the range of 2xx cause this function\n        // to trigger\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            return new Promise((resolve, reject)=>{\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/logout\").then((data)=>{\n                    console.log(\"/401 error > logout\");\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window.localStorage.removeItem(\"user\");\n                    router.push(\"/login\");\n                }).catch((err)=>{\n                    console.log(\"AXIOS INTERCEPTORS ERR\", err);\n                    reject(error);\n                });\n            });\n        }\n        return Promise.reject(error);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCsrfToken = async ()=>{\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/csrf-token\");\n            // console.log(\"CSRF\", data);\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers[\"X-CSRF-Token\"] = data.csrfToken;\n        };\n        getCsrfToken();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCsrfToken = async ()=>{\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/csrf-token\");\n            // console.log(data);\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers[\"X-CSRF-Token\"] = data.csrfToken;\n        };\n        getCsrfToken();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\context\\\\index.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"ZqE8f8zt7bnR9Z3jEsQPPmP3xmg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Provider;\n\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ25DO0FBQzBCO0FBRXBELGdCQUFnQjtBQUNoQixNQUFNTSxjQUFjO0lBQ2xCQyxNQUFNO0FBQ1I7QUFFQSxpQkFBaUI7QUFDakIsTUFBTUMsd0JBQVVQLG9EQUFhQTtBQUU3QixlQUFlO0FBQ2YsTUFBTVEsY0FBYyxDQUFDQyxPQUFPQztJQUMxQixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdGLEtBQUs7Z0JBQUVILE1BQU1JLE9BQU9FLE9BQU87WUFBQztRQUMxQyxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHSCxLQUFLO2dCQUFFSCxNQUFNO1lBQUs7UUFDaEM7WUFDRSxPQUFPRztJQUNYO0FBQ0Y7QUFFQSxtQkFBbUI7QUFDbkIsTUFBTUksV0FBVztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDNUIsTUFBTSxDQUFDTCxPQUFPTSxTQUFTLEdBQUdoQixpREFBVUEsQ0FBQ1MsYUFBYUg7SUFFbEQsU0FBUztJQUNULE1BQU1XLFNBQVNiLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDUmMsU0FBUztZQUNQSixNQUFNO1lBQ05DLFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDbEQ7SUFDRixHQUFHLEVBQUU7SUFFTG5CLDBEQUFrQixDQUFDcUIsUUFBUSxDQUFDQyxHQUFHLENBQzdCLFNBQVVELFFBQVE7UUFDaEIsdUVBQXVFO1FBQ3ZFLGFBQWE7UUFDYixPQUFPQTtJQUNULEdBQ0EsU0FBVUUsS0FBSztRQUNiLDJFQUEyRTtRQUMzRSxhQUFhO1FBQ2IsSUFBSUMsTUFBTUQsTUFBTUYsUUFBUTtRQUN4QixJQUFJRyxJQUFJQyxNQUFNLEtBQUssT0FBT0QsSUFBSUUsTUFBTSxJQUFJLENBQUNGLElBQUlFLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUU7WUFDcEUsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO2dCQUMzQjlCLGlEQUNNLENBQUMsZUFDSmdDLElBQUksQ0FBQyxDQUFDQztvQkFDTEMsUUFBUUMsR0FBRyxDQUFDO29CQUNadEIsU0FBUzt3QkFBRUosTUFBTTtvQkFBUztvQkFDMUJRLE9BQU9DLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQztvQkFDL0J0QixPQUFPdUIsSUFBSSxDQUFDO2dCQUNkLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztvQkFDTkwsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkk7b0JBQ3RDVCxPQUFPUDtnQkFDVDtZQUNKO1FBQ0Y7UUFDQSxPQUFPSyxRQUFRRSxNQUFNLENBQUNQO0lBQ3hCO0lBR0Z4QixnREFBU0EsQ0FBQztRQUNSLE1BQU15QyxlQUFlO1lBQ25CLE1BQU0sRUFBRVAsSUFBSSxFQUFFLEdBQUcsTUFBTWpDLGlEQUFTLENBQUM7WUFDakMsNkJBQTZCO1lBQzdCQSxzREFBYyxDQUFDMEMsT0FBTyxDQUFDLGVBQWUsR0FBR1QsS0FBS1UsU0FBUztRQUN6RDtRQUNBSDtJQUNGLEdBQUcsRUFBRTtJQUNMekMsZ0RBQVNBLENBQUM7UUFDUixNQUFNeUMsZUFBZTtZQUNuQixNQUFNLEVBQUVQLElBQUksRUFBRSxHQUFHLE1BQU1qQyxpREFBUyxDQUFDO1lBQ2pDLHFCQUFxQjtZQUNyQkEsc0RBQWMsQ0FBQzBDLE9BQU8sQ0FBQyxlQUFlLEdBQUdULEtBQUtVLFNBQVM7UUFDekQ7UUFDQUg7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ25DLFFBQVFNLFFBQVE7UUFBQ2lDLE9BQU87WUFBRXJDO1lBQU9NO1FBQVM7a0JBQUlEOzs7Ozs7QUFFbkQ7R0E5RE1EOztRQUlXVixrREFBU0E7OztLQUpwQlU7QUFnRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZXJSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGluaXRpYWwgc3RhdGVcclxuY29uc3QgaW50aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjogbnVsbCxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBjb250ZXh0XHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyByb290IHJlZHVjZXJcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJMT0dJTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJMT0dPVVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBjb250ZXh0IHByb3ZpZGVyXHJcbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW50aWFsU3RhdGUpO1xyXG5cclxuICAvLyByb3V0ZXJcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJMT0dJTlwiLFxyXG4gICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vIGFueSBzdGF0dXMgY29kZSB0aGF0IGxpZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDJYWCBjYXVzZSB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgIC8vIHRvIHRyaWdnZXJcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBhbnkgc3RhdHVzIGNvZGVzIHRoYXQgZmFsbHMgb3V0c2lkZSB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb25cclxuICAgICAgLy8gdG8gdHJpZ2dlclxyXG4gICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgJiYgcmVzLmNvbmZpZyAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXCIvYXBpL2xvZ291dFwiKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLzQwMSBlcnJvciA+IGxvZ291dFwiKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFYSU9TIElOVEVSQ0VQVE9SUyBFUlJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRDc3JmVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jc3JmLXRva2VuXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkNTUkZcIiwgZGF0YSk7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJYLUNTUkYtVG9rZW5cIl0gPSBkYXRhLmNzcmZUb2tlbjtcclxuICAgIH07XHJcbiAgICBnZXRDc3JmVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldENzcmZUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NzcmYtdG9rZW5cIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzW1wiWC1DU1JGLVRva2VuXCJdID0gZGF0YS5jc3JmVG9rZW47XHJcbiAgICB9O1xyXG4gICAgZ2V0Q3NyZlRva2VuKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgQ29udGV4dCwgUHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VyUm91dGVyIiwiaW50aWFsU3RhdGUiLCJ1c2VyIiwiQ29udGV4dCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInJvdXRlciIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInB1c2giLCJjYXRjaCIsImVyciIsImdldENzcmZUb2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNzcmZUb2tlbiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n"));

/***/ })

});