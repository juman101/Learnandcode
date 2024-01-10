"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/instructor/course/create",{

/***/ "./pages/instructor/course/create.js":
/*!*******************************************!*\
  !*** ./pages/instructor/course/create.js ***!
  \*******************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _components_forms_CourseCreateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/forms/CourseCreateForm */ \"./components/forms/CourseCreateForm.js\");\n/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-file-resizer */ \"./node_modules/react-image-file-resizer/build/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CourseCreate = ()=>{\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        description: \"\",\n        uploading: false,\n        paid: true,\n        price: \"0\",\n        loading: false\n    });\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [uploadButtonText, setUploadButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleImage = (e)=>{\n        let file = e.target.files[0];\n        setPreview(window.URL.createObjectURL(file));\n        setUploadButtonText(file.name);\n        react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].imageFileResizer(file, 720, 500, \"JPEG\", 100, 0, async (uri)=>{\n            try {\n                let { data } = await axios.post(\"/api/course/upload-image\", {\n                    image: uri\n                });\n                console.log(\"IMAGE UPLOADED\", data);\n            } catch (err) {\n                console.log(err);\n            }\n        });\n    };\n    const handleChange = (e)=>{\n        setValues({\n            ...values,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(values);\n    // Add your logic to send the data to the server using axios\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center\",\n                children: \"Create Course\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\instructor\\\\course\\\\create.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_CourseCreateForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: handleChange,\n                handleImage: handleImage,\n                handleSubmit: handleSubmit,\n                values: values,\n                setValues: setValues,\n                preview: preview\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\instructor\\\\course\\\\create.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(values, null, 4)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\instructor\\\\course\\\\create.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\juman\\\\winterproject\\\\client\\\\pages\\\\instructor\\\\course\\\\create.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CourseCreate, \"LSzD2t+drtH2l54BjpkE4H6khpY=\");\n_c = CourseCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseCreate);\nvar _c;\n$RefreshReg$(_c, \"CourseCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS9jcmVhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUM0QjtBQUUzQjtBQUcvQyxNQUFNSSxlQUFlOztJQUNuQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7UUFDbkNNLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxXQUFXO1FBQ1hDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBRVg7SUFDRSxNQUFLLENBQUNDLE9BQU9DLFNBQVMsR0FBQ2IsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUNmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLGtCQUFrQkMsb0JBQW9CLEdBQUNqQiwrQ0FBUUEsQ0FBQztJQUd2RCxNQUFNa0IsY0FBYSxDQUFDQztRQUdsQixJQUFJQyxPQUFNRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzNCUCxXQUFXUSxPQUFPQyxHQUFHLENBQUNDLGVBQWUsQ0FBQ0w7UUFDdkNILG9CQUFvQkcsS0FBS2QsSUFBSTtRQUc3QkosZ0VBQWUsQ0FBQ3lCLGdCQUFnQixDQUFDUCxNQUFLLEtBQUksS0FBSSxRQUFPLEtBQUksR0FBRSxPQUFNUTtZQUVoRSxJQUFHO2dCQUNLLElBQUksRUFBQ0MsSUFBSSxFQUFDLEdBQUMsTUFBTUMsTUFBTUMsSUFBSSxDQUFDLDRCQUEyQjtvQkFDOUNuQixPQUFPZ0I7Z0JBQ2hCO2dCQUNBSSxRQUFRQyxHQUFHLENBQUMsa0JBQWlCSjtZQUVyQyxFQUNBLE9BQU1LLEtBQ047Z0JBQ0VGLFFBQVFDLEdBQUcsQ0FBQ0M7WUFFZDtRQUVEO0lBQ0E7SUFFRCxNQUFNQyxlQUFlLENBQUNoQjtRQUNwQmQsVUFBVTtZQUFFLEdBQUdELE1BQU07WUFBRSxDQUFDZSxFQUFFRSxNQUFNLENBQUNmLElBQUksQ0FBQyxFQUFFYSxFQUFFRSxNQUFNLENBQUNlLEtBQUs7UUFBQztJQUN6RDtJQUVBLE1BQU1DLGVBQWUsQ0FBQ2xCO1FBQ3BCQSxFQUFFbUIsY0FBYztRQUNoQk4sUUFBUUMsR0FBRyxDQUFDN0I7SUFDWiw0REFBNEQ7SUFDOUQ7SUFHQSxxQkFDRSw4REFBQ21DO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBd0I7Ozs7OzswQkFDdEMsOERBQUN2QywwRUFBZ0JBO2dCQUNqQmtDLGNBQWNBO2dCQUNkakIsYUFBYUE7Z0JBQ2JtQixjQUFjQTtnQkFDZGpDLFFBQVFBO2dCQUNSQyxXQUFXQTtnQkFDWFMsU0FBU0E7Ozs7OzswQkFHVCw4REFBQzRCOzBCQUNBQyxLQUFLQyxTQUFTLENBQUN4QyxRQUFPLE1BQUs7Ozs7Ozs7Ozs7OztBQUlsQztHQXJFTUQ7S0FBQUE7QUF1RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvY3JlYXRlLmpzP2I0NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgQ291cnNlQ3JlYXRlRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9Db3Vyc2VDcmVhdGVGb3JtXCI7XHJcblxyXG5pbXBvcnQgUmVzaXplciBmcm9tIFwicmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyXCI7XHJcblxyXG5cclxuY29uc3QgQ291cnNlQ3JlYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICB1cGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcGFpZDogdHJ1ZSxcclxuICAgIHByaWNlOiBcIjBcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG5cclxuICB9KTtcclxuICAgIGNvbnN0W2ltYWdlLCBzZXRJbWFnZV09dXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddPXVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXBsb2FkQnV0dG9uVGV4dCwgc2V0VXBsb2FkQnV0dG9uVGV4dF09dXNlU3RhdGUoJycpO1xyXG4gICBcclxuICBcclxuICBjb25zdCBoYW5kbGVJbWFnZSA9KGUpPT5cclxuICAge1xyXG4gICAgXHJcbiAgICBsZXQgZmlsZSA9ZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcmV2aWV3KHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcclxuICAgc2V0VXBsb2FkQnV0dG9uVGV4dChmaWxlLm5hbWUpO1xyXG4gICAgICAgICBcclxuXHJcbiAgIFJlc2l6ZXIuZGVmYXVsdC5pbWFnZUZpbGVSZXNpemVyKGZpbGUsNzIwLDUwMCxcIkpQRUdcIiwxMDAsMCxhc3luYyh1cmkpPT5cclxuICAge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQge2RhdGF9PWF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY291cnNlL3VwbG9hZC1pbWFnZScse1xyXG4gICAgICAgICAgICAgICAgICAgICBpbWFnZTogdXJpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTUFHRSBVUExPQURFRFwiLGRhdGEpO1xyXG5cclxuICAgIH1cclxuICAgIGNhdGNoKGVycilcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICB9KVxyXG4gICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgLy8gQWRkIHlvdXIgbG9naWMgdG8gc2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyIHVzaW5nIGF4aW9zXHJcbiAgfTtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBDb3Vyc2U8L2gxPlxyXG4gICAgICA8Q291cnNlQ3JlYXRlRm9ybVxyXG4gICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgaGFuZGxlSW1hZ2U9e2hhbmRsZUltYWdlfVxyXG4gICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgdmFsdWVzPXt2YWx1ZXN9XHJcbiAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxyXG4gICAgICBwcmV2aWV3PXtwcmV2aWV3fVxyXG4gICAgICBcclxuICAgICAgLz5cclxuICAgICAgPHByZT5cclxuICAgICAge0pTT04uc3RyaW5naWZ5KHZhbHVlcyxudWxsLDQpfVxyXG4gICAgICA8L3ByZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDcmVhdGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ291cnNlQ3JlYXRlRm9ybSIsIlJlc2l6ZXIiLCJDb3Vyc2VDcmVhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1cGxvYWRpbmciLCJwYWlkIiwicHJpY2UiLCJsb2FkaW5nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInByZXZpZXciLCJzZXRQcmV2aWV3IiwidXBsb2FkQnV0dG9uVGV4dCIsInNldFVwbG9hZEJ1dHRvblRleHQiLCJoYW5kbGVJbWFnZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkZWZhdWx0IiwiaW1hZ2VGaWxlUmVzaXplciIsInVyaSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/instructor/course/create.js\n"));

/***/ })

});