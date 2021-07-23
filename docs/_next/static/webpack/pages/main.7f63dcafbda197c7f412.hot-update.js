webpackHotUpdate_N_E("pages/main",{

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ \"./context.tsx\");\n/* harmony import */ var _HotBid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HotBid */ \"./components/HotBid/index.js\");\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/components/Main.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadingApi = _useState2[0],\n      setLoadingApi = _useState2[1];\n\n  var _useUser = Object(_context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"])(),\n      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUser, 2),\n      user = _useUser2[0],\n      setUser = _useUser2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      users = _useState3[0],\n      setUsers = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      post = _useState4[0],\n      setPost = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      listings = _useState5[0],\n      setListings = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      listingSub = _useState6[0],\n      setListingSub = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getPaths\"])()),\n      paths = _useState7[0],\n      setPaths = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      acct = _useState8[0],\n      setAcct = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      setUser(null);\n      setListings([]);\n      setListingSub(false);\n    }\n  }, [account, acct]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (user && users && users.filter(function (_user) {\n      return _user.id == user.is.alias;\n    }).length < 1) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addSwapUser\"])(user, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!listingSub && paths) {\n      console.log(\"Subscribing to Listings\");\n      setListingSub(true);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getListings\"])(function (result) {\n        setListings(result);\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && !users && !state.loaded && paths) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getSwapUsers\"])(true, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && users && !state.loaded) {\n      setState({\n        loaded: true\n      });\n    }\n  });\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(chainId),\n      chain = _useState9[0],\n      setChain = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      });\n    }\n  }, [chainId, chain]);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    w: \"100%\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, user ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, \"Authenticated User: \", user.is.alias), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"HStack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    value: post,\n    onChange: function onChange(event) {\n      return setPost(event.target.value);\n    },\n    m: 5,\n    type: \"text\",\n    id: \"post\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addListing\"])(user, post, function (_listings) {\n        console.log('listings returned to featured', _listings); // listings.get('listings-test1').map().val((k,v)=>{console.log(k,v)})\n\n        setPost('');\n      });\n    },\n    mr: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }, \"Post\"))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"No Authenticated User\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"Registered Users\"), users ? users.map(function (_user, i) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }\n    }, user && user.is.alias == _user.id ? 'Me:' : 'User:', \" \", _user.id);\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, \"No Registered Users\"), listings.length > 0 ? __jsx(_HotBid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    classSection: \"section\",\n    listings: listings,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }) : null)));\n}\n\n_s(Main, \"d6l5QH4DwUzXwsapoDhCT1TTtQo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"], _context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLnRzeD9mZDVjIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVdlYjNSZWFjdCIsImFjY291bnQiLCJjaGFpbklkIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9hZGluZ0FwaSIsInNldExvYWRpbmdBcGkiLCJ1c2VVc2VyIiwidXNlciIsInNldFVzZXIiLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdCIsInNldFBvc3QiLCJsaXN0aW5ncyIsInNldExpc3RpbmdzIiwibGlzdGluZ1N1YiIsInNldExpc3RpbmdTdWIiLCJnZXRQYXRocyIsInBhdGhzIiwic2V0UGF0aHMiLCJhY2N0Iiwic2V0QWNjdCIsInVzZUVmZmVjdCIsImZpbHRlciIsIl91c2VyIiwiaWQiLCJpcyIsImFsaWFzIiwibGVuZ3RoIiwiYWRkU3dhcFVzZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZ2V0TGlzdGluZ3MiLCJnZXRTd2FwVXNlcnMiLCJjaGFpbiIsInNldENoYWluIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZExpc3RpbmciLCJfbGlzdGluZ3MiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG1CQUNYQyw2REFBUyxFQURFO0FBQUEsTUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQjs7QUFBQSxzQkFFQUMscUVBQVksRUFGWjtBQUFBLE1BRXJCQyxPQUZxQixpQkFFckJBLE9BRnFCO0FBQUEsTUFFWkMsT0FGWSxpQkFFWkEsT0FGWTs7QUFBQSxrQkFHSEMsc0RBQVEsQ0FBQztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFELENBSEw7QUFBQSxNQUd0QkMs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QVIsSUFBaUJILEtBQUssQ0FBQ0MsRUFBL0IsR0FBcUMsS0FBckMsR0FBK0MsT0FBOUQsT0FBeUVELEtBQUssQ0FBQ0MsRUFBL0UsQ0FERjtBQUdELEdBSkQsQ0FESSxHQU9KLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE3QkosRUEyQ0daLFFBQVEsQ0FBQ2UsTUFBVCxHQUFrQixDQUFsQixHQUNDLE1BQUMsZ0RBQUQ7QUFBUSxnQkFBWSxFQUFDLFNBQXJCO0FBQStCLFlBQVEsRUFBRWYsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBRUcsSUE3Q04sQ0FERixDQUhGLENBREY7QUF3REQ7O0dBM0h1Qm5CLEk7VUFDSkMscUQsRUFDV0UsNkQsRUFHTFMsZ0Q7OztLQUxGWixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgVGV4dCwgSW5wdXQsIEJ1dHRvbiwgTGluaywgSW1hZ2UsIFN0YWNrLCBTcGlubmVyLCB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQge0hTdGFja30gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJ1xuaW1wb3J0IFJlZnJlc2hpbmcgZnJvbSAnLi9SZWZyZXNoaW5nJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYWRkTGlzdGluZywgYWRkU3dhcFVzZXIsIGdldExpc3RpbmdzLCBnZXRTd2FwVXNlcnMsIGdldFBhdGhzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCBIb3RCaWQgZnJvbSBcIi4vSG90QmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgYWNjb3VudCwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgY29uc3QgW2xvYWRpbmdBcGksIHNldExvYWRpbmdBcGldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVVzZXIoKVxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbGlzdGluZ3MsIHNldExpc3RpbmdzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbGlzdGluZ1N1Yiwgc2V0TGlzdGluZ1N1Yl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3BhdGhzLCBzZXRQYXRoc10gPSB1c2VTdGF0ZShnZXRQYXRocygpKVxuXG4gIGNvbnN0IFthY2N0LCBzZXRBY2N0XSA9IHVzZVN0YXRlKCcnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY2NvdW50ICYmIGFjY3QgIT0gYWNjb3VudCkge1xuICAgICAgc2V0QWNjdChhY2NvdW50KVxuICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pXG4gICAgICBzZXRVc2VyKG51bGwpXG4gICAgICBzZXRMaXN0aW5ncyhbXSlcbiAgICAgIHNldExpc3RpbmdTdWIoZmFsc2UpXG4gICAgfVxuICB9LCBbYWNjb3VudCwgYWNjdF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlciAmJiB1c2VycyAmJiAodXNlcnMuZmlsdGVyKF91c2VyPT57cmV0dXJuIF91c2VyLmlkID09IHVzZXIuaXMuYWxpYXN9KS5sZW5ndGggPCAxKSkge1xuICAgICAgYWRkU3dhcFVzZXIodXNlciwgcmVzdWx0PT57XG4gICAgICAgIHNldFVzZXJzKHJlc3VsdCk7XG4gICAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZiAoIWxpc3RpbmdTdWIgJiYgcGF0aHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3Vic2NyaWJpbmcgdG8gTGlzdGluZ3NcIilcbiAgICAgIHNldExpc3RpbmdTdWIodHJ1ZSlcbiAgICAgIGdldExpc3RpbmdzKChyZXN1bHQpPT57XG4gICAgICAgICAgc2V0TGlzdGluZ3MocmVzdWx0KSAgICAgICAgICAgICAgIFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIXVzZXJzICYmICFzdGF0ZS5sb2FkZWQgJiYgcGF0aHMpIHsgICAgICBcbiAgICAgIGdldFN3YXBVc2Vycyh0cnVlLCByZXN1bHQ9PntcbiAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcbiAgICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIH0pICAgXG4gICAgfVxuICB9KVxuXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyICYmIHVzZXJzICYmICFzdGF0ZS5sb2FkZWQpIHtcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IFtjaGFpbiwgc2V0Q2hhaW5dID0gdXNlU3RhdGUoY2hhaW5JZClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhaW5JZCAmJiBjaGFpbiAhPSBjaGFpbklkKSB7XG4gICAgICBzZXRDaGFpbihjaGFpbklkKVxuICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pICAgICAgXG4gICAgfVxuICB9LCBbY2hhaW5JZCwgY2hhaW5dKVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlciBsb2FkZWQ9e3N0YXRlLmxvYWRlZH0+XG4gICAgICB7bG9hZGluZ0FwaSA/IDxSZWZyZXNoaW5nIC8+IDogJyd9XG4gICAgICBcbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIG10PXsxMH0+XG4gICAgICAgIDxCb3ggdz17XCIxMDAlXCJ9ICB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICB7dXNlcj8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFRleHQ+QXV0aGVudGljYXRlZCBVc2VyOiB7dXNlci5pcy5hbGlhc308L1RleHQ+XG4gICAgICAgICAgICAgIDxIU3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3Bvc3R9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQb3N0KGV2ZW50LnRhcmdldC52YWx1ZSl9IG09ezV9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RpbmcodXNlciwgcG9zdCwgKF9saXN0aW5ncyk9PntcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdGluZ3MgcmV0dXJuZWQgdG8gZmVhdHVyZWQnLCBfbGlzdGluZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGluZ3MuZ2V0KCdsaXN0aW5ncy10ZXN0MScpLm1hcCgpLnZhbCgoayx2KT0+e2NvbnNvbGUubG9nKGssdil9KVxuICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3QoJycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX0gbXI9ezV9PlBvc3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUZXh0Pk5vIEF1dGhlbnRpY2F0ZWQgVXNlcjwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPFRleHQgbT17NX0gYXM9e1wiaDFcIn0+UmVnaXN0ZXJlZCBVc2VyczwvVGV4dD5cblxuICAgICAgICAgIHt1c2Vycz8gKFxuICAgICAgICAgICAgdXNlcnMubWFwKChfdXNlciwgaSk9PntcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxUZXh0IGtleT17aX0+e3VzZXIgJiYgdXNlci5pcy5hbGlhcyA9PSBfdXNlci5pZCA/ICgnTWU6JykgOiAoJ1VzZXI6Jyl9IHtfdXNlci5pZH08L1RleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUZXh0Pk5vIFJlZ2lzdGVyZWQgVXNlcnM8L1RleHQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiB7bGlzdGluZ3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxUZXh0IG09ezV9IGFzPXtcImgxXCJ9PiBQb3N0cyA8L1RleHQ+XG4gICAgICAgICAgKTpudWxsfVxuICAgICAgICAgIHtsaXN0aW5ncyA/IChcbiAgICAgICAgICAgIGxpc3RpbmdzLnJldmVyc2UoKS5tYXAobGlzdGluZz0+e1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIC8vIDxUZXh0IGtleT17bGlzdGluZy5rfT5lbnRyeToge2xpc3Rpbmcudi5wYXlsb2FkfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsaXN0aW5nLmltYWdlX3VybH0gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogbnVsbH0gKi99XG4gICAgICAgICAge2xpc3RpbmdzLmxlbmd0aCA+IDAgPyAgKFxuICAgICAgICAgICAgPEhvdEJpZCBjbGFzc1NlY3Rpb249XCJzZWN0aW9uXCIgbGlzdGluZ3M9e2xpc3RpbmdzfSAvPlxuICAgICAgICAgICkgOiBudWxsIH1cblxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xvYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

})