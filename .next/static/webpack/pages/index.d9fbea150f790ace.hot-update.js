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

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\n\n\n\n\nconst variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: -0,\n        y: 20\n    }\n};\nconst Layout = (param)=>{\n    let { children , title  } = param;\n    const t = \"\".concat(title);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\",\n            width: \"150%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: t\n                        }, void 0, false, {\n                            fileName: \"/home/kenjitheman/projs/sead.club/components/layouts/article.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"/home/kenjitheman/projs/sead.club/components/layouts/article.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"/home/kenjitheman/projs/sead.club/components/layouts/article.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kenjitheman/projs/sead.club/components/layouts/article.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/home/kenjitheman/projs/sead.club/components/layouts/article.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/home/kenjitheman/projs/sead.club/components/layouts/article.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBc0M7QUFDVjtBQUNnQjtBQUU1QyxNQUFNRyxXQUFXO0lBQ2ZDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO1FBQUdDLEdBQUc7SUFBRztJQUNsQ0MsT0FBTztRQUFFSCxTQUFTO1FBQUdDLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2hDRSxNQUFNO1FBQUVKLFNBQVM7UUFBR0MsR0FBRyxDQUFDO1FBQUdDLEdBQUc7SUFBRztBQUNuQztBQUVBLE1BQU1HLFNBQVMsU0FBeUI7UUFBeEIsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUU7SUFDakMsTUFBTUMsSUFBSSxHQUFTLE9BQU5EO0lBQ2IscUJBQ0UsOERBQUNaLHlEQUFjO1FBQ2JlLFNBQVE7UUFDUkMsU0FBUTtRQUNSUCxNQUFLO1FBQ0xOLFVBQVVBO1FBQ1ZjLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxNQUFNO1FBQVk7UUFDL0NDLE9BQU87WUFBRUMsVUFBVTtZQUFZQyxPQUFPO1FBQU87a0JBRTdDOztnQkFDR1YsdUJBQ0MsOERBQUNYLGtEQUFJQTs7c0NBQ0gsOERBQUNXO3NDQUFPQzs7Ozs7O3NDQUNSLDhEQUFDVTs0QkFBS0MsTUFBSzs0QkFBZ0JDLFNBQVNaOzs7Ozs7c0NBQ3BDLDhEQUFDVTs0QkFBS0csVUFBUzs0QkFBV0QsU0FBU1o7Ozs7Ozs7Ozs7OztnQkFHdENGOzhCQUVELDhEQUFDVCxxREFBYUE7Ozs7Ozs7Ozs7OztBQUl0QjtLQXpCTVE7QUEyQk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGUuanM/ZWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gJy4uL2dyaWQtaXRlbSdcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAyMCB9LFxuICBlbnRlcjogeyBvcGFjaXR5OiAxLCB4OiAwLCB5OiAwIH0sXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogLTAsIHk6IDIwIH1cbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgdCA9IGAke3RpdGxlfWBcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmFydGljbGVcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgdHlwZTogJ2Vhc2VJbk91dCcgfX1cbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzE1MCUnIH19XG4gICAgPlxuICAgICAgPD5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dH08L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0fSAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3R9IC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgPEdyaWRJdGVtU3R5bGUgLz5cbiAgICAgIDwvPlxuICAgIDwvbW90aW9uLmFydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkdyaWRJdGVtU3R5bGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJ0IiwiYXJ0aWNsZSIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHlwZSIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ })

});