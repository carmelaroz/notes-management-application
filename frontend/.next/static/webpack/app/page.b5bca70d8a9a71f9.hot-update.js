"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.css */ \"(app-pages-browser)/./components/Post.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst Post = (param)=>{\n    let { post } = param;\n    var _post_author, _post_author1;\n    _s();\n    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editedContent, setEditedContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.content);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!editMode) {\n            setEditedContent(post.content);\n        }\n    }, [\n        post.content,\n        editMode\n    ]);\n    const handleDelete = async ()=>{\n        //   if (post.token) {\n        //     post.onDelete(post.id);\n        // } else {\n        //     alert(\"You must be logged in to delete a post.\");\n        // }\n        try {\n            if (post.token) {\n                post.onDelete(post.id);\n            }\n        } catch (error) {}\n    };\n    const handleEditToggle = ()=>{\n        if (post.token) {\n            setEditMode(!editMode);\n            setEditedContent(post.content);\n        } else {\n            alert(\"You must be logged in to edit a post.\");\n        }\n    };\n    const handleContentChange = (event)=>{\n        setEditedContent(event.target.value);\n    };\n    const handleUpdate = async ()=>{\n        if (post.token) {\n            console.log(\"Updating post ID \".concat(post.id, \" with content:\"), editedContent);\n            await post.onUpdateContent(post.id, editedContent);\n            setEditMode(false);\n        } else {\n            alert(\"You must be logged in to update a post.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"note\",\n        id: \"\".concat(post.id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: [\n                    \"By \",\n                    (_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: (_post_author1 = post.author) === null || _post_author1 === void 0 ? void 0 : _post_author1.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            editMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"text_input-\".concat(post.id),\n                value: editedContent,\n                onChange: handleContentChange,\n                rows: 4,\n                cols: 50\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    editMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                name: \"text_input_save-\".concat(post.id),\n                                className: \"save-button\",\n                                onClick: handleUpdate,\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                name: \"text_input_cancel-\".concat(post.id),\n                                className: \"cancel-button\",\n                                onClick: handleEditToggle,\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        name: \"edit-\".concat(post.id),\n                        className: \"edit-button\",\n                        onClick: handleEditToggle,\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        name: \"delete-\".concat(post.id),\n                        className: \"delete-button\",\n                        onClick: handleDelete,\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\components\\\\Post.tsx\",\n        lineNumber: 67,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Post, \"BjtHDXjpCRrp9lhj74IqNrWci00=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QudHN4Pzc3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi9Qb3N0LmNzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0UHJvcHMgPSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGF1dGhvcjoge1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICB9IHwgbnVsbDtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIG9uRGVsZXRlOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIG9uVXBkYXRlQ29udGVudDogKGlkOiBudW1iZXIsIG5ld0NvbnRlbnQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgY29uc3QgUG9zdDogUmVhY3QuRkM8eyBwb3N0OiBQb3N0UHJvcHMgfT4gPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2VkaXRlZENvbnRlbnQsIHNldEVkaXRlZENvbnRlbnRdID0gdXNlU3RhdGUocG9zdC5jb250ZW50KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWVkaXRNb2RlKSB7XHJcbiAgICAgICAgc2V0RWRpdGVkQ29udGVudChwb3N0LmNvbnRlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbcG9zdC5jb250ZW50LCBlZGl0TW9kZV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgaWYgKHBvc3QudG9rZW4pIHtcclxuICAgIC8vICAgICBwb3N0Lm9uRGVsZXRlKHBvc3QuaWQpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBhbGVydChcIllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBkZWxldGUgYSBwb3N0LlwiKTtcclxuICAgIC8vIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmKHBvc3QudG9rZW4pIHtcclxuICAgICAgICBwb3N0Lm9uRGVsZXRlKHBvc3QuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHBvc3QudG9rZW4pIHtcclxuICAgICAgICBzZXRFZGl0TW9kZSghZWRpdE1vZGUpO1xyXG4gICAgICAgIHNldEVkaXRlZENvbnRlbnQocG9zdC5jb250ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gZWRpdCBhIHBvc3QuXCIpO1xyXG4gICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUNvbnRlbnRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIHNldEVkaXRlZENvbnRlbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChwb3N0LnRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFVwZGF0aW5nIHBvc3QgSUQgJHtwb3N0LmlkfSB3aXRoIGNvbnRlbnQ6YCwgZWRpdGVkQ29udGVudCk7XHJcbiAgICAgICAgYXdhaXQgcG9zdC5vblVwZGF0ZUNvbnRlbnQocG9zdC5pZCwgZWRpdGVkQ29udGVudCk7XHJcbiAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byB1cGRhdGUgYSBwb3N0LlwiKTtcclxuICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RlXCIgaWQ9e2Ake3Bvc3QuaWR9YH0+XHJcbiAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICA8c21hbGw+Qnkge3Bvc3QuYXV0aG9yPy5uYW1lfTwvc21hbGw+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8c21hbGw+e3Bvc3QuYXV0aG9yPy5lbWFpbH08L3NtYWxsPlxyXG4gICAgICB7ZWRpdE1vZGUgPyAoXHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9e2B0ZXh0X2lucHV0LSR7cG9zdC5pZH1gfVxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZENvbnRlbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29udGVudENoYW5nZX1cclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICBjb2xzPXs1MH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtlZGl0TW9kZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gbmFtZT17YHRleHRfaW5wdXRfc2F2ZS0ke3Bvc3QuaWR9YH0gY2xhc3NOYW1lPVwic2F2ZS1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVVcGRhdGV9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPXtgdGV4dF9pbnB1dF9jYW5jZWwtJHtwb3N0LmlkfWB9IGNsYXNzTmFtZT1cImNhbmNlbC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVFZGl0VG9nZ2xlfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG5hbWU9e2BlZGl0LSR7cG9zdC5pZH1gfSBjbGFzc05hbWU9XCJlZGl0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUVkaXRUb2dnbGV9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxidXR0b24gbmFtZT17YGRlbGV0ZS0ke3Bvc3QuaWR9YH0gY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdCIsInBvc3QiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwiZWRpdGVkQ29udGVudCIsInNldEVkaXRlZENvbnRlbnQiLCJjb250ZW50IiwiaGFuZGxlRGVsZXRlIiwidG9rZW4iLCJvbkRlbGV0ZSIsImlkIiwiZXJyb3IiLCJoYW5kbGVFZGl0VG9nZ2xlIiwiYWxlcnQiLCJoYW5kbGVDb250ZW50Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZUNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwic21hbGwiLCJhdXRob3IiLCJuYW1lIiwiYnIiLCJlbWFpbCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJyb3dzIiwiY29scyIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Post.tsx\n"));

/***/ })

});