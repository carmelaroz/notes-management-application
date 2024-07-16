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

/***/ "./src/components/Post.tsx":
/*!*********************************!*\
  !*** ./src/components/Post.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/Post.css */ \"./src/css/Post.css\");\n/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Post_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Post = (param)=>{\n    let { post } = param;\n    var _post_author, _post_author1, _post_author2;\n    _s();\n    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editedContent, setEditedContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.content);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!editMode) {\n            setEditedContent(post.content);\n        }\n    }, [\n        post.content,\n        editMode\n    ]);\n    const handleDelete = async ()=>{\n        if (post.token) {\n            post.onDelete(post.id);\n        } else {\n            alert(\"You must be logged in to delete a post.\");\n        }\n    };\n    const handleEditToggle = ()=>{\n        if (post.token) {\n            setEditMode(!editMode);\n            setEditedContent(post.content);\n        } else {\n            alert(\"You must be logged in to edit a post.\");\n        }\n    };\n    const handleContentChange = (event)=>{\n        setEditedContent(event.target.value);\n    };\n    const handleUpdate = async ()=>{\n        if (post.token) {\n            console.log(\"Updating post ID \".concat(post.id, \" with content:\"), editedContent);\n            await post.onUpdateContent(post.id, editedContent);\n            setEditMode(false);\n        } else {\n            alert(\"You must be logged in to update a post.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"note\",\n        id: \"\".concat(post.id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: [\n                    \"By \",\n                    (_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: (_post_author1 = post.author) === null || _post_author1 === void 0 ? void 0 : _post_author1.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            editMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"text_input-\".concat(post.id),\n                value: editedContent,\n                onChange: handleContentChange,\n                rows: 4,\n                cols: 50\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.currentUsername === ((_post_author2 = post.author) === null || _post_author2 === void 0 ? void 0 : _post_author2.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        editMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    name: \"text_input_save-\".concat(post.id),\n                                    className: \"save-button\",\n                                    onClick: handleUpdate,\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    name: \"text_input_cancel-\".concat(post.id),\n                                    className: \"cancel-button\",\n                                    onClick: handleEditToggle,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            name: \"edit-\".concat(post.id),\n                            className: \"edit-button\",\n                            onClick: handleEditToggle,\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            name: \"delete-\".concat(post.id),\n                            className: \"delete-button\",\n                            onClick: handleDelete,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw2\\\\frontend\\\\src\\\\components\\\\Post.tsx\",\n        lineNumber: 60,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Post, \"BjtHDXjpCRrp9lhj74IqNrWci00=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3QudHN4P2Q3YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi4vY3NzL1Bvc3QuY3NzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RQcm9wcyA9IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYXV0aG9yOiB7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgZW1haWw6IHN0cmluZztcclxuICAgIH0gfCBudWxsO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgb25EZWxldGU6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgb25VcGRhdGVDb250ZW50OiAoaWQ6IG51bWJlciwgbmV3Q29udGVudDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgdG9rZW46IHN0cmluZztcclxuICAgIGN1cnJlbnRVc2VyTmFtZTogc3RyaW5nO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFBvc3Q6IFJlYWN0LkZDPHsgcG9zdDogUG9zdFByb3BzIH0+ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlZGl0ZWRDb250ZW50LCBzZXRFZGl0ZWRDb250ZW50XSA9IHVzZVN0YXRlKHBvc3QuY29udGVudCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFlZGl0TW9kZSkge1xyXG4gICAgICAgIHNldEVkaXRlZENvbnRlbnQocG9zdC5jb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Bvc3QuY29udGVudCwgZWRpdE1vZGVdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChwb3N0LnRva2VuKSB7XHJcbiAgICAgICAgcG9zdC5vbkRlbGV0ZShwb3N0LmlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gZGVsZXRlIGEgcG9zdC5cIik7XHJcbiAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVkaXRUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChwb3N0LnRva2VuKSB7XHJcbiAgICAgICAgc2V0RWRpdE1vZGUoIWVkaXRNb2RlKTtcclxuICAgICAgICBzZXRFZGl0ZWRDb250ZW50KHBvc3QuY29udGVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIGVkaXQgYSBwb3N0LlwiKTtcclxuICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVDb250ZW50Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgICBzZXRFZGl0ZWRDb250ZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocG9zdC50b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBVcGRhdGluZyBwb3N0IElEICR7cG9zdC5pZH0gd2l0aCBjb250ZW50OmAsIGVkaXRlZENvbnRlbnQpO1xyXG4gICAgICAgIGF3YWl0IHBvc3Qub25VcGRhdGVDb250ZW50KHBvc3QuaWQsIGVkaXRlZENvbnRlbnQpO1xyXG4gICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gdXBkYXRlIGEgcG9zdC5cIik7XHJcbiAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZVwiIGlkPXtgJHtwb3N0LmlkfWB9PlxyXG4gICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgPHNtYWxsPkJ5IHtwb3N0LmF1dGhvcj8ubmFtZX08L3NtYWxsPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPHNtYWxsPntwb3N0LmF1dGhvcj8uZW1haWx9PC9zbWFsbD5cclxuICAgICAge2VkaXRNb2RlID8gKFxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPXtgdGV4dF9pbnB1dC0ke3Bvc3QuaWR9YH1cclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRDb250ZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbnRlbnRDaGFuZ2V9XHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgY29scz17NTB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cG9zdC5jdXJyZW50VXNlcm5hbWUgPT09IHBvc3QuYXV0aG9yPy5uYW1lICYmICggPD5cclxuICAgICAgICB7ZWRpdE1vZGUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG5hbWU9e2B0ZXh0X2lucHV0X3NhdmUtJHtwb3N0LmlkfWB9IGNsYXNzTmFtZT1cInNhdmUtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVXBkYXRlfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbmFtZT17YHRleHRfaW5wdXRfY2FuY2VsLSR7cG9zdC5pZH1gfSBjbGFzc05hbWU9XCJjYW5jZWwtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRWRpdFRvZ2dsZX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBuYW1lPXtgZWRpdC0ke3Bvc3QuaWR9YH0gY2xhc3NOYW1lPVwiZWRpdC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVFZGl0VG9nZ2xlfT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIG5hbWU9e2BkZWxldGUtJHtwb3N0LmlkfWB9IGNsYXNzTmFtZT1cImRlbGV0ZS1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb3N0IiwicG9zdCIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJlZGl0ZWRDb250ZW50Iiwic2V0RWRpdGVkQ29udGVudCIsImNvbnRlbnQiLCJoYW5kbGVEZWxldGUiLCJ0b2tlbiIsIm9uRGVsZXRlIiwiaWQiLCJhbGVydCIsImhhbmRsZUVkaXRUb2dnbGUiLCJoYW5kbGVDb250ZW50Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvblVwZGF0ZUNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwic21hbGwiLCJhdXRob3IiLCJuYW1lIiwiYnIiLCJlbWFpbCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJyb3dzIiwiY29scyIsInAiLCJjdXJyZW50VXNlcm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Post.tsx\n"));

/***/ })

});