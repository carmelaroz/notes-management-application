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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Post */ \"(app-pages-browser)/./components/Post.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"(app-pages-browser)/./components/Pagination.tsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./app/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst POSTS_PER_PAGE = 10;\nconst NOTES_URL = \"//localhost:3001/api/notes\";\nfunction Home() {\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [newNote, setNewNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        content: \"\",\n        author: {\n            name: \"\",\n            email: \"\"\n        }\n    });\n    const [showNewNoteForm, setShowNewNoteForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [darkTheme, setDarkTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const promise = axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(NOTES_URL, {\n            params: {\n                _page: activePage,\n                _per_page: POSTS_PER_PAGE\n            }\n        });\n        promise.then((response)=>{\n            setNotes(response.data);\n            const totalCount = parseInt(response.headers[\"x-total-count\"]);\n            const totalPagesCount = Math.ceil(totalCount / POSTS_PER_PAGE);\n            setTotalPages(totalPagesCount);\n        }).catch((error)=>{\n            console.log(\"Encountered an error:\" + error);\n        });\n    }, [\n        activePage\n    ]);\n    const handlePageChange = (page)=>{\n        setActivePage(page);\n    };\n    const handleDelete = async (index)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(\"\".concat(NOTES_URL, \"/\").concat(index));\n            setNotes(notes.filter((note)=>note.id !== index));\n        } catch (error) {\n            console.log(\"Encountered an error while deleting:\" + error);\n        }\n    };\n    const handleUpdateContent = async (index, newContent)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"\".concat(NOTES_URL, \"/\").concat(index), {\n                content: newContent\n            });\n            console.log(\"Updating note ID \".concat(index, \" with new content:\"), newContent);\n            setNotes(notes.map((note)=>{\n                if (note.id === index) {\n                    return {\n                        ...note,\n                        content: newContent\n                    };\n                }\n                return note;\n            }));\n        } catch (error) {\n            console.error(\"Encountered an error while updating content:\", error);\n        }\n    };\n    const handleAddNewNote = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(NOTES_URL, newNote, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            setNotes([\n                ...notes,\n                response.data\n            ]);\n            setShowNewNoteForm(false);\n            setNewNote({\n                id: \"\",\n                title: \"\",\n                content: \"\",\n                author: {\n                    name: \"\",\n                    email: \"\"\n                }\n            });\n        } catch (error) {\n            console.error(\"Encountered an error while adding a new note:\", error);\n        }\n    };\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setNewNote((prevNote)=>{\n            if (name.startsWith(\"author.\")) {\n                const authorField = name.split(\".\")[1];\n                return {\n                    ...prevNote,\n                    author: {\n                        ...prevNote.author,\n                        [authorField]: value\n                    }\n                };\n            }\n            return {\n                ...prevNote,\n                [name]: value\n            };\n        });\n    };\n    const handleChangeTheme = ()=>{\n        setDarkTheme(!darkTheme);\n        if (!darkTheme) {\n            document.body.classList.add(\"dark-theme\");\n        } else {\n            document.body.classList.remove(\"dark-theme\");\n        }\n    };\n    // Log the notes array to check for duplicate IDs\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Notes array:\", notes);\n    }, [\n        notes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    post: {\n                        ...note,\n                        onDelete: handleDelete,\n                        onUpdateContent: handleUpdateContent\n                    }\n                }, \"${note.id}\", false, {\n                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 7\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pagination\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    pagination: {\n                        currPage: activePage,\n                        totalPages: totalPages,\n                        handlePageChange: handlePageChange\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"add-new-note\",\n                children: showNewNoteForm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"new-note-form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"id\",\n                            placeholder: \"id\",\n                            value: newNote.id,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Title\",\n                            value: newNote.title,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            name: \"content\",\n                            placeholder: \"Content\",\n                            value: newNote.content,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"author.name\",\n                            placeholder: \"Author Name\",\n                            value: newNote.author.name,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            name: \"author.email\",\n                            placeholder: \"Author Email\",\n                            value: newNote.author.email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 157,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            name: \"text_input_save_new_note\",\n                            onClick: handleAddNewNote,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            name: \"text_input_cancel_new_note\",\n                            onClick: ()=>setShowNewNoteForm(false),\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    name: \"add-new-note\",\n                    onClick: ()=>setShowNewNoteForm(true),\n                    children: \"Add new note\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 128,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"theme-button\",\n                    onClick: handleChangeTheme,\n                    name: \"change_theme\",\n                    children: \"Change Theme\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                    lineNumber: 172,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carmela\\\\Documents\\\\Universty\\\\תכנות קצה\\\\frontend_hw1\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"/eKR6247aPCLODWmGXeb5fxH49s=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZVMsU0FBU2xCO29CQUFtQjdDLE1BQUs7OEJBQWU7Ozs7Ozs7Ozs7Ozs7QUFPdkY7R0F2S3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFBvc3QsIHtQb3N0UHJvcHN9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUE9TVFNfUEVSX1BBR0UgOiBudW1iZXIgPSAxMDtcclxuY29uc3QgTk9URVNfVVJMIDogc3RyaW5nID0gXCIvL2xvY2FsaG9zdDozMDAxL2FwaS9ub3Rlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPFBvc3RQcm9wc1tdPihbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3RvdGFsUGFnZXMsIHNldFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW25ld05vdGUsIHNldE5ld05vdGVdID0gdXNlU3RhdGUoeyBpZDogJycsIHRpdGxlOiAnJywgY29udGVudDogJycsIGF1dGhvcjogeyBuYW1lOiAnJywgZW1haWw6ICcnIH0gfSk7XHJcbiAgY29uc3QgW3Nob3dOZXdOb3RlRm9ybSwgc2V0U2hvd05ld05vdGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGFya1RoZW1lLCBzZXREYXJrVGhlbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gYXhpb3MuZ2V0KE5PVEVTX1VSTCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgX3BhZ2U6IGFjdGl2ZVBhZ2UsXHJcbiAgICAgICAgICBfcGVyX3BhZ2U6IFBPU1RTX1BFUl9QQUdFXHJcbiAgICAgICAgfX0pO1xyXG4gICAgcHJvbWlzZS50aGVuKHJlc3BvbnNlID0+IHsgXHJcbiAgICAgIHNldE5vdGVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zdCB0b3RhbENvdW50ID0gcGFyc2VJbnQocmVzcG9uc2UuaGVhZGVyc1sneC10b3RhbC1jb3VudCddKTtcclxuICAgICAgY29uc3QgdG90YWxQYWdlc0NvdW50ID0gTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBQT1NUU19QRVJfUEFHRSk7XHJcbiAgICAgIHNldFRvdGFsUGFnZXModG90YWxQYWdlc0NvdW50KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4geyBjb25zb2xlLmxvZyhcIkVuY291bnRlcmVkIGFuIGVycm9yOlwiICsgZXJyb3IpOyB9KTtcclxufSwgW2FjdGl2ZVBhZ2VdKTtcclxuXHJcbmNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2UpO1xyXG4gIH07XHJcbiAgXHJcbmNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpbmRleDogbnVtYmVyKSA9PiB7XHJcbnRyeSB7XHJcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7Tk9URVNfVVJMfS8ke2luZGV4fWApO1xyXG4gICAgc2V0Tm90ZXMobm90ZXMuZmlsdGVyKG5vdGUgPT4gbm90ZS5pZCAhPT0gaW5kZXgpKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgZGVsZXRpbmc6XCIgKyBlcnJvcik7XHJcbn1cclxufTtcclxuICBcclxuY29uc3QgaGFuZGxlVXBkYXRlQ29udGVudCA9IGFzeW5jIChpbmRleDogbnVtYmVyLCBuZXdDb250ZW50OiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtOT1RFU19VUkx9LyR7aW5kZXh9YCwgeyBjb250ZW50OiBuZXdDb250ZW50IH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhgVXBkYXRpbmcgbm90ZSBJRCAke2luZGV4fSB3aXRoIG5ldyBjb250ZW50OmAsIG5ld0NvbnRlbnQpO1xyXG4gICAgICBzZXROb3Rlcyhub3Rlcy5tYXAobm90ZSA9PiB7XHJcbiAgICAgICAgaWYgKG5vdGUuaWQgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5ub3RlLCBjb250ZW50OiBuZXdDb250ZW50IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub3RlO1xyXG4gICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgY29udGVudDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfTtcclxuICBcclxuY29uc3QgaGFuZGxlQWRkTmV3Tm90ZSA9IGFzeW5jICgpID0+IHtcclxudHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChOT1RFU19VUkwsIG5ld05vdGUsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIH0pO1xyXG4gICAgc2V0Tm90ZXMoWy4uLm5vdGVzLCByZXNwb25zZS5kYXRhXSk7XHJcbiAgICBzZXRTaG93TmV3Tm90ZUZvcm0oZmFsc2UpO1xyXG4gICAgc2V0TmV3Tm90ZSh7IGlkOiAnJywgdGl0bGU6ICcnLCBjb250ZW50OiAnJywgYXV0aG9yOiB7IG5hbWU6ICcnLCBlbWFpbDogJycgfSB9KTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0VuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGFkZGluZyBhIG5ldyBub3RlOicsIGVycm9yKTtcclxufVxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG5jb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbnNldE5ld05vdGUocHJldk5vdGUgPT4ge1xyXG4gICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnYXV0aG9yLicpKSB7XHJcbiAgICBjb25zdCBhdXRob3JGaWVsZCA9IG5hbWUuc3BsaXQoJy4nKVsxXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldk5vdGUsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgLi4ucHJldk5vdGUuYXV0aG9yLFxyXG4gICAgICAgIFthdXRob3JGaWVsZF06IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAuLi5wcmV2Tm90ZSxcclxuICAgIFtuYW1lXTogdmFsdWVcclxuICAgIH07XHJcbn0pO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGhhbmRsZUNoYW5nZVRoZW1lID0gKCkgPT4ge1xyXG4gIHNldERhcmtUaGVtZSghZGFya1RoZW1lKTtcclxuICBpZiAoIWRhcmtUaGVtZSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xyXG4gIH1cclxufTtcclxuXHJcbiAgLy8gTG9nIHRoZSBub3RlcyBhcnJheSB0byBjaGVjayBmb3IgZHVwbGljYXRlIElEc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5vdGVzIGFycmF5OlwiLCBub3Rlcyk7XHJcbiAgfSwgW25vdGVzXSk7XHJcblxyXG5cclxucmV0dXJuIChcclxuICA8PlxyXG4gICAge25vdGVzLm1hcChub3RlID0+IChcclxuICAgICAgPFBvc3Qga2V5PScke25vdGUuaWR9JyBwb3N0PXt7IC4uLm5vdGUsIG9uRGVsZXRlOiBoYW5kbGVEZWxldGUsIG9uVXBkYXRlQ29udGVudDogaGFuZGxlVXBkYXRlQ29udGVudCB9fSAvPlxyXG4gICAgKSl9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgY3VyclBhZ2U6IGFjdGl2ZVBhZ2UsXHJcbiAgICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxyXG4gICAgICAgICAgaGFuZGxlUGFnZUNoYW5nZTogaGFuZGxlUGFnZUNoYW5nZVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgIGNsYXNzTmFtZT1cImFkZC1uZXctbm90ZVwiPlxyXG4gICAgICAgIHtzaG93TmV3Tm90ZUZvcm0gPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1ub3RlLWZvcm1cIiA+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld05vdGUuaWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3Tm90ZS50aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3Tm90ZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhdXRob3IubmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdXRob3IgTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld05vdGUuYXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhdXRob3IuZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXV0aG9yIEVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3Tm90ZS5hdXRob3IuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJ0ZXh0X2lucHV0X3NhdmVfbmV3X25vdGVcIiBvbkNsaWNrPXtoYW5kbGVBZGROZXdOb3RlfT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInRleHRfaW5wdXRfY2FuY2VsX25ld19ub3RlXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd05ld05vdGVGb3JtKGZhbHNlKX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBuYW1lPVwiYWRkLW5ldy1ub3RlXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd05ld05vdGVGb3JtKHRydWUpfT5BZGQgbmV3IG5vdGU8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0aGVtZS1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VUaGVtZX0gbmFtZT1cImNoYW5nZV90aGVtZVwiPlxyXG4gICAgICBDaGFuZ2UgVGhlbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuICBcclxuKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUG9zdCIsIlBhZ2luYXRpb24iLCJQT1NUU19QRVJfUEFHRSIsIk5PVEVTX1VSTCIsIkhvbWUiLCJub3RlcyIsInNldE5vdGVzIiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJ0b3RhbFBhZ2VzIiwic2V0VG90YWxQYWdlcyIsIm5ld05vdGUiLCJzZXROZXdOb3RlIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3IiLCJuYW1lIiwiZW1haWwiLCJzaG93TmV3Tm90ZUZvcm0iLCJzZXRTaG93TmV3Tm90ZUZvcm0iLCJkYXJrVGhlbWUiLCJzZXREYXJrVGhlbWUiLCJwcm9taXNlIiwiZ2V0IiwicGFyYW1zIiwiX3BhZ2UiLCJfcGVyX3BhZ2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidG90YWxDb3VudCIsInBhcnNlSW50IiwiaGVhZGVycyIsInRvdGFsUGFnZXNDb3VudCIsIk1hdGgiLCJjZWlsIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImhhbmRsZURlbGV0ZSIsImluZGV4IiwiZGVsZXRlIiwiZmlsdGVyIiwibm90ZSIsImhhbmRsZVVwZGF0ZUNvbnRlbnQiLCJuZXdDb250ZW50IiwicHV0IiwibWFwIiwiaGFuZGxlQWRkTmV3Tm90ZSIsInBvc3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2Tm90ZSIsInN0YXJ0c1dpdGgiLCJhdXRob3JGaWVsZCIsInNwbGl0IiwiaGFuZGxlQ2hhbmdlVGhlbWUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkRlbGV0ZSIsIm9uVXBkYXRlQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2luYXRpb24iLCJjdXJyUGFnZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});