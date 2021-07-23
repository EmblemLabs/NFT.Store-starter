webpackHotUpdate_N_E("pages/main",{

/***/ "./components/HotBid/index.js":
/*!************************************!*\
  !*** ./components/HotBid/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HotBid.module.sass */ \"./components/HotBid/HotBid.module.sass\");\n/* harmony import */ var _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon */ \"./components/Icon.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Card */ \"./components/Card/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/components/HotBid/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n // data\n// import { bids } from \"../../mocks/bids\";\n\nvar bids;\n\nvar SlickArrow = function SlickArrow(_ref) {\n  var currentSlide = _ref.currentSlide,\n      slideCount = _ref.slideCount,\n      children = _ref.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"currentSlide\", \"slideCount\", \"children\"]);\n\n  return __jsx(\"button\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }), children);\n};\n\n_c = SlickArrow;\n\nvar Hot = function Hot(_ref2) {\n  var classSection = _ref2.classSection,\n      listings = _ref2.listings,\n      _ref2$title = _ref2.title,\n      title = _ref2$title === void 0 ? \"Hot Items\" : _ref2$title;\n  bids = listings;\n  var settings = {\n    infinite: false,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    nextArrow: __jsx(SlickArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.icon,\n      name: \"arrow-next\",\n      size: \"14\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    })),\n    prevArrow: __jsx(SlickArrow, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.icon,\n      name: \"arrow-prev\",\n      size: \"14\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    })),\n    responsive: [{\n      breakpoint: 1179,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 1023,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 2,\n        infinite: true\n      }\n    }]\n  };\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classSection, _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.section),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"container\", _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.container),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"h3\", _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"div\", {\n    className: _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.inner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, bids.length > 0 ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"bid-slider\"\n  }, settings, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }), bids.map(function (x, index) {\n    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: index,\n      className: _HotBid_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n      item: x,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 19\n      }\n    });\n  })) : null))));\n};\n\n_c2 = Hot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hot);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SlickArrow\");\n$RefreshReg$(_c2, \"Hot\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3RCaWQvaW5kZXguanM/YzUyNCJdLCJuYW1lcyI6WyJiaWRzIiwiU2xpY2tBcnJvdyIsImN1cnJlbnRTbGlkZSIsInNsaWRlQ291bnQiLCJjaGlsZHJlbiIsInByb3BzIiwiSG90IiwiY2xhc3NTZWN0aW9uIiwibGlzdGluZ3MiLCJ0aXRsZSIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibmV4dEFycm93Iiwic3R5bGVzIiwiaWNvbiIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiY24iLCJzZWN0aW9uIiwiY29udGFpbmVyIiwid3JhcHBlciIsImlubmVyIiwibGVuZ3RoIiwibWFwIiwieCIsImluZGV4IiwiY2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQSxJQUFJQSxJQUFKOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsWUFBSCxRQUFHQSxZQUFIO0FBQUEsTUFBaUJDLFVBQWpCLFFBQWlCQSxVQUFqQjtBQUFBLE1BQTZCQyxRQUE3QixRQUE2QkEsUUFBN0I7QUFBQSxNQUEwQ0MsS0FBMUM7O0FBQUEsU0FDakIsdUdBQVlBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFvQkQsUUFBcEIsQ0FEaUI7QUFBQSxDQUFuQjs7S0FBTUgsVTs7QUFJTixJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxRQUFxRDtBQUFBLE1BQWxEQyxZQUFrRCxTQUFsREEsWUFBa0Q7QUFBQSxNQUFwQ0MsUUFBb0MsU0FBcENBLFFBQW9DO0FBQUEsMEJBQTFCQyxLQUEwQjtBQUFBLE1BQTFCQSxLQUEwQiw0QkFBbEIsV0FBa0I7QUFDL0RULE1BQUksR0FBR1EsUUFBUDtBQUNBLE1BQU1FLFFBQVEsR0FBRztBQUNmQyxZQUFRLEVBQUUsS0FESztBQUVmQyxTQUFLLEVBQUUsR0FGUTtBQUdmQyxnQkFBWSxFQUFFLENBSEM7QUFJZkMsa0JBQWMsRUFBRSxDQUpEO0FBS2ZDLGFBQVMsRUFDUCxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkNBQUQ7QUFBTSxlQUFTLEVBQUVDLDBEQUFNLENBQUNDLElBQXhCO0FBQThCLFVBQUksRUFBQyxZQUFuQztBQUFnRCxVQUFJLEVBQUMsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTmE7QUFVZkMsYUFBUyxFQUNQLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2Q0FBRDtBQUFNLGVBQVMsRUFBRUYsMERBQU0sQ0FBQ0MsSUFBeEI7QUFBOEIsVUFBSSxFQUFDLFlBQW5DO0FBQWdELFVBQUksRUFBQyxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FYYTtBQWVmRSxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRVYsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUU7QUFETjtBQUZaLEtBRFUsRUFPVjtBQUNFTyxnQkFBVSxFQUFFLElBRGQ7QUFFRVYsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUU7QUFETjtBQUZaLEtBUFUsRUFhVjtBQUNFTyxnQkFBVSxFQUFFLEdBRGQ7QUFFRVYsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETjtBQUVSRixnQkFBUSxFQUFFO0FBRkY7QUFGWixLQWJVO0FBZkcsR0FBakI7QUFzQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRVUsaURBQUUsQ0FBQ2QsWUFBRCxFQUFlUywwREFBTSxDQUFDTSxPQUF0QixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELGlEQUFFLENBQUMsV0FBRCxFQUFjTCwwREFBTSxDQUFDTyxTQUFyQixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVQLDBEQUFNLENBQUNRLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUgsaURBQUUsQ0FBQyxJQUFELEVBQU9MLDBEQUFNLENBQUNQLEtBQWQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q0EsS0FBeEMsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFTywwREFBTSxDQUFDUyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d6QixJQUFJLENBQUMwQixNQUFMLEdBQWMsQ0FBZCxHQUNDLE1BQUMsa0RBQUQ7QUFBUSxhQUFTLEVBQUM7QUFBbEIsS0FBbUNoQixRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dWLElBQUksQ0FBQzJCLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSxXQUNSLE1BQUMsNkNBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQVg7QUFBa0IsZUFBUyxFQUFFYiwwREFBTSxDQUFDYyxJQUFwQztBQUEwQyxVQUFJLEVBQUVGLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQURELEdBTUcsSUFQTixDQUZGLENBREYsQ0FERixDQURGO0FBa0JELENBMUREOztNQUFNdEIsRztBQTREU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvdEJpZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSG90QmlkLm1vZHVsZS5zYXNzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmRcIjtcblxuLy8gZGF0YVxuLy8gaW1wb3J0IHsgYmlkcyB9IGZyb20gXCIuLi8uLi9tb2Nrcy9iaWRzXCI7XG5sZXQgYmlkc1xuXG5jb25zdCBTbGlja0Fycm93ID0gKHsgY3VycmVudFNsaWRlLCBzbGlkZUNvdW50LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8YnV0dG9uIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvYnV0dG9uPlxuKTtcblxuY29uc3QgSG90ID0gKHsgY2xhc3NTZWN0aW9uLCBsaXN0aW5ncywgdGl0bGUgPSBcIkhvdCBJdGVtc1wiIH0pID0+IHtcbiAgYmlkcyA9IGxpc3RpbmdzXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBuZXh0QXJyb3c6IChcbiAgICAgIDxTbGlja0Fycm93PlxuICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBuYW1lPVwiYXJyb3ctbmV4dFwiIHNpemU9XCIxNFwiIC8+XG4gICAgICA8L1NsaWNrQXJyb3c+XG4gICAgKSxcbiAgICBwcmV2QXJyb3c6IChcbiAgICAgIDxTbGlja0Fycm93PlxuICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBuYW1lPVwiYXJyb3ctcHJldlwiIHNpemU9XCIxNFwiIC8+XG4gICAgICA8L1NsaWNrQXJyb3c+XG4gICAgKSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDExNzksXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzU2VjdGlvbiwgc3R5bGVzLnNlY3Rpb24pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcImNvbnRhaW5lclwiLCBzdHlsZXMuY29udGFpbmVyKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y24oXCJoM1wiLCBzdHlsZXMudGl0bGUpfT57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cbiAgICAgICAgICAgIHtiaWRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIDxTbGlkZXIgY2xhc3NOYW1lPVwiYmlkLXNsaWRlclwiIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICAgICAge2JpZHMubWFwKCh4LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gaXRlbT17eH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HotBid/index.js\n");

/***/ })

})