webpackHotUpdate_N_E("pages/main",{

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ \"./context.tsx\");\n/* harmony import */ var _HotBid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HotBid */ \"./components/HotBid/index.js\");\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/components/Main.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadingApi = _useState2[0],\n      setLoadingApi = _useState2[1];\n\n  var _useUser = Object(_context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"])(),\n      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUser, 2),\n      user = _useUser2[0],\n      setUser = _useUser2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      users = _useState3[0],\n      setUsers = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      post = _useState4[0],\n      setPost = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      listings = _useState5[0],\n      setListings = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      listingSub = _useState6[0],\n      setListingSub = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getPaths\"])()),\n      paths = _useState7[0],\n      setPaths = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      acct = _useState8[0],\n      setAcct = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      setUser(null);\n      setListings([]);\n      setListingSub(false);\n    }\n  }, [account, acct]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (user && users && users.filter(function (_user) {\n      return _user.id == user.is.alias;\n    }).length < 1) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addSwapUser\"])(user, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  }); // useEffect(()=>{\n  //   if (user && !listingSub) {\n  //     console.log(\"Subscribing\")\n  //     setListingSub(true)\n  //     getListings(user, (result)=>{\n  //       if (listings && !(listings.filter((item)=>{return item.k == result.k}).length > 0)) {\n  //         console.log(result)\n  //         listings.push(result)\n  //         let newListings = JSON.parse(JSON.stringify(listings))\n  //         setListings(newListings)\n  //       }        \n  //     })\n  //   }\n  // })\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && !users && !state.loaded) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getSwapUsers\"])(true, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  }); // useEffect(() => {\n  //   if (!paths) {\n  //     getPaths(paths=>{\n  //       console.log(\"Paths\", paths)\n  //       setPaths(paths)\n  //     })      \n  //   }\n  // })\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && users && !state.loaded) {\n      setState({\n        loaded: true\n      });\n    }\n  });\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(chainId),\n      chain = _useState9[0],\n      setChain = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      });\n    }\n  }, [chainId, chain]);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    w: \"100%\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }, user ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, \"Authenticated User: \", user.is.alias), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"HStack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    value: post,\n    onChange: function onChange(event) {\n      return setPost(event.target.value);\n    },\n    m: 5,\n    type: \"text\",\n    id: \"post\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addListing\"])(user, post, function (_listings) {\n        console.log('listings returned to featured', _listings); // listings.get('listings-test1').map().val((k,v)=>{console.log(k,v)})\n\n        setPost('');\n      });\n    },\n    mr: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, \"Post\"))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, \"No Authenticated User\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, \"Registered Users\"), users ? users.map(function (_user, i) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }\n    }, user && user.is.alias == _user.id ? 'Me:' : 'User:', \" \", _user.id);\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, \"No Registered Users\"), listings.length > 0 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, \" Posts \") : null, listings ? listings.reverse().map(function (listing) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      key: listing.k,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 23\n      }\n    }, \"entry: \", listing.v.payload);\n  }) : null, __jsx(_HotBid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    classSection: \"section\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Main, \"vy6jLPS9xuh+cYh9tOnv/XM4mYU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"], _context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLnRzeD9mZDVjIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVdlYjNSZWFjdCIsImFjY291bnQiLCJjaGFpbklkIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9hZGluZ0FwaSIsInNldExvYWRpbmdBcGkiLCJ1c2VVc2VyIiwidXNlciIsInNldFVzZXIiLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdCIsInNldFBvc3QiLCJsaXN0aW5ncyIsInNldExpc3RpbmdzIiwibGlzdGluZ1N1YiIsInNldExpc3RpbmdTdWIiLCJnZXRQYXRocyIsInBhdGhzIiwic2V0UGF0aHMiLCJhY2N0Iiwic2V0QWNjdCIsInVzZUVmZmVjdCIsImZpbHRlciIsIl91c2VyIiwiaWQiLCJpcyIsImFsaWFzIiwibGVuZ3RoIiwiYWRkU3dhcFVzZXIiLCJyZXN1bHQiLCJnZXRTd2FwVXNlcnMiLCJjaGFpbiIsInNldENoYWluIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZExpc3RpbmciLCJfbGlzdGluZ3MiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaSIsInJldmVyc2UiLCJsaXN0aW5nIiwiayIsInYiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG1CQUNYQyw2REFBUyxFQURFO0FBQUEsTUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQjs7QUFBQSxzQkFFQUMscUVBQVksRUFGWjtBQUFBLE1BRXJCQyxPQUZxQixpQkFFckJBLE9BRnFCO0FBQUEsTUFFWkMsT0FGWSxpQkFFWkEsT0FGWTs7QUFBQSxrQkFHSEMsc0RBQVEsQ0FBQztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFELENBSEw7QUFBQSxNQUd0QkMsS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUFBLG1CQUlPSCxzREFBUSxDQUFDLEtBQUQsQ0FKZjtBQUFBLE1BSXRCSSxVQUpzQjtBQUFBLE1BSVZDLGFBSlU7O0FBQUEsaUJBS0xDLHdEQUFPLEVBTEY7QUFBQTtBQUFBLE1BS3RCQyxJQUxzQjtBQUFBLE1BS2hCQyxPQUxnQjs7QUFBQSxtQkFNSFIsc0RBQVEsQ0FBQyxJQUFELENBTkw7QUFBQSxNQU10QlMsS0FOc0I7QUFBQSxNQU1mQyxRQU5lOztBQUFBLG1CQU9MVixzREFBUSxDQUFDLEVBQUQsQ0FQSDtBQUFBLE1BT3RCVyxJQVBzQjtBQUFBLE1BT2hCQyxPQVBnQjs7QUFBQSxtQkFRR1osc0RBQVEsQ0FBQyxFQUFELENBUlg7QUFBQSxNQVF0QmEsUUFSc0I7QUFBQSxNQVFaQyxXQVJZOztBQUFBLG1CQVNPZCxzREFBUSxDQUFDLEtBQUQsQ0FUZjtBQUFBLE1BU3RCZSxVQVRzQjtBQUFBLE1BU1ZDLGFBVFU7O0FBQUEsbUJBVUhoQixzREFBUSxDQUFDaUIsdURBQVEsRUFBVCxDQVZMO0FBQUEsTUFVdEJDLEtBVnNCO0FBQUEsTUFVZkMsUUFWZTs7QUFBQSxtQkFZTG5CLHNEQUFRLENBQUMsRUFBRCxDQVpIO0FBQUEsTUFZdEJvQixJQVpzQjtBQUFBLE1BWWhCQyxPQVpnQjs7QUFhN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUl4QixPQUFPLElBQUlzQixJQUFJLElBQUl0QixPQUF2QixFQUFnQztBQUM5QnVCLGFBQU8sQ0FBQ3ZCLE9BQUQsQ0FBUDtBQUNBSyxjQUFRLENBQUM7QUFBRUYsY0FBTSxFQUFFO0FBQVYsT0FBRCxDQUFSO0FBQ0FPLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQU0saUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDbEIsT0FBRCxFQUFVc0IsSUFBVixDQVJNLENBQVQ7QUFVQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWYsSUFBSSxJQUFJRSxLQUFSLElBQWtCQSxLQUFLLENBQUNjLE1BQU4sQ0FBYSxVQUFBQyxLQUFLLEVBQUU7QUFBQyxhQUFPQSxLQUFLLENBQUNDLEVBQU4sSUFBWWxCLElBQUksQ0FBQ21CLEVBQUwsQ0FBUUMsS0FBM0I7QUFBaUMsS0FBdEQsRUFBd0RDLE1BQXhELEdBQWlFLENBQXZGLEVBQTJGO0FBQ3pGQyxnRUFBVyxDQUFDdEIsSUFBRCxFQUFPLFVBQUF1QixNQUFNLEVBQUU7QUFDeEJwQixnQkFBUSxDQUFDb0IsTUFBRCxDQUFSO0FBQ0EzQixnQkFBUSxDQUFDO0FBQUVGLGdCQUFNLEVBQUU7QUFBVixTQUFELENBQVI7QUFDRCxPQUhVLENBQVg7QUFJRDtBQUNGLEdBUFEsQ0FBVCxDQXZCNkIsQ0FnQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFxQix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNmLElBQUQsSUFBUyxDQUFDRSxLQUFWLElBQW1CLENBQUNQLEtBQUssQ0FBQ0QsTUFBOUIsRUFBc0M7QUFDcEM4QixpRUFBWSxDQUFDLElBQUQsRUFBTyxVQUFBRCxNQUFNLEVBQUU7QUFDekJwQixnQkFBUSxDQUFDb0IsTUFBRCxDQUFSO0FBQ0EzQixnQkFBUSxDQUFDO0FBQUVGLGdCQUFNLEVBQUU7QUFBVixTQUFELENBQVI7QUFDRCxPQUhXLENBQVo7QUFJRDtBQUNGLEdBUFEsQ0FBVCxDQS9DNkIsQ0F3RDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUFxQix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNmLElBQUQsSUFBU0UsS0FBVCxJQUFrQixDQUFDUCxLQUFLLENBQUNELE1BQTdCLEVBQXFDO0FBQ25DRSxjQUFRLENBQUM7QUFBRUYsY0FBTSxFQUFFO0FBQVYsT0FBRCxDQUFSO0FBQ0Q7QUFDRixHQUpRLENBQVQ7O0FBbkU2QixtQkF5RUhELHNEQUFRLENBQUNELE9BQUQsQ0F6RUw7QUFBQSxNQXlFdEJpQyxLQXpFc0I7QUFBQSxNQXlFZkMsUUF6RWU7O0FBMEU3QlgseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXZCLE9BQU8sSUFBSWlDLEtBQUssSUFBSWpDLE9BQXhCLEVBQWlDO0FBQy9Ca0MsY0FBUSxDQUFDbEMsT0FBRCxDQUFSO0FBQ0FJLGNBQVEsQ0FBQztBQUFFRixjQUFNLEVBQUU7QUFBVixPQUFELENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDRixPQUFELEVBQVVpQyxLQUFWLENBTE0sQ0FBVDtBQU9BLFNBQ0UsTUFBQyxtREFBRDtBQUFRLFVBQU0sRUFBRTlCLEtBQUssQ0FBQ0QsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxVQUFVLEdBQUcsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBb0IsRUFEakMsRUFHRSxNQUFDLG9EQUFEO0FBQU0sS0FBQyxFQUFDLE1BQVI7QUFBZSxXQUFPLEVBQUMsUUFBdkI7QUFBZ0MsWUFBUSxFQUFDLE1BQXpDO0FBQWdELE1BQUUsRUFBRSxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBRSxNQUFSO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLElBQUksR0FDSCxtRUFDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTJCQSxJQUFJLENBQUNtQixFQUFMLENBQVFDLEtBQW5DLENBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVEsU0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTyxTQUFLLEVBQUVoQixJQUFkO0FBQW9CLFlBQVEsRUFBRSxrQkFBQXVCLEtBQUs7QUFBQSxhQUFJdEIsT0FBTyxDQUFDc0IsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWDtBQUFBLEtBQW5DO0FBQW9FLEtBQUMsRUFBRSxDQUF2RTtBQUEwRSxRQUFJLEVBQUMsTUFBL0U7QUFBc0YsTUFBRSxFQUFDLE1BQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUUsbUJBQUk7QUFDakJDLCtEQUFVLENBQUM5QixJQUFELEVBQU9JLElBQVAsRUFBYSxVQUFDMkIsU0FBRCxFQUFhO0FBQ2xDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q0YsU0FBN0MsRUFEa0MsQ0FFbEM7O0FBQ0ExQixlQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsT0FKUyxDQUFWO0FBS0gsS0FORDtBQU1HLE1BQUUsRUFBRSxDQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixDQUZGLENBREcsR0FnQkgsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWpCSixFQW9CSSxNQUFDLG9EQUFEO0FBQU0sS0FBQyxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFwQkosRUFzQkdILEtBQUssR0FDSkEsS0FBSyxDQUFDZ0MsR0FBTixDQUFVLFVBQUNqQixLQUFELEVBQVFrQixDQUFSLEVBQVk7QUFDcEIsV0FDRSxNQUFDLG9EQUFEO0FBQU0sU0FBRyxFQUFFQSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZW5DLElBQUksSUFBSUEsSUFBSSxDQUFDbUIsRUFBTCxDQUFRQyxLQUFSLElBQWlCSCxLQUFLLENBQUNDLEVBQS9CLEdBQXFDLEtBQXJDLEdBQStDLE9BQTlELE9BQXlFRCxLQUFLLENBQUNDLEVBQS9FLENBREY7QUFHRCxHQUpELENBREksR0FPSixNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBN0JKLEVBZ0NHWixRQUFRLENBQUNlLE1BQVQsR0FBa0IsQ0FBbEIsR0FDQyxNQUFDLG9EQUFEO0FBQU0sS0FBQyxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEdBRUMsSUFsQ0osRUFtQ0dmLFFBQVEsR0FDUEEsUUFBUSxDQUFDOEIsT0FBVCxHQUFtQkYsR0FBbkIsQ0FBdUIsVUFBQUcsT0FBTyxFQUFFO0FBQzlCLFdBQVEsTUFBQyxvREFBRDtBQUFNLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE4QkQsT0FBTyxDQUFDRSxDQUFSLENBQVVDLE9BQXhDLENBQVI7QUFDRCxHQUZELENBRE8sR0FJTCxJQXZDTixFQXlDRSxNQUFDLGdEQUFEO0FBQVEsZ0JBQVksRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBREYsQ0FIRixDQURGO0FBb0REOztHQXJJdUJyRCxJO1VBQ0pDLHFELEVBQ1dFLDZELEVBR0xTLGdEOzs7S0FMRlosSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIElucHV0LCBCdXR0b24sIExpbmssIEltYWdlLCBTdGFjaywgU3Bpbm5lciwgdXNlQ29sb3JNb2RlIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IHtIU3RhY2t9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlcidcbmltcG9ydCBSZWZyZXNoaW5nIGZyb20gJy4vUmVmcmVzaGluZydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFkZExpc3RpbmcsIGFkZFN3YXBVc2VyLCBnZXRMaXN0aW5ncywgZ2V0U3dhcFVzZXJzLCBnZXRQYXRocyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgSG90QmlkIGZyb20gXCIuL0hvdEJpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGFjY291bnQsIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pXG4gIGNvbnN0IFtsb2FkaW5nQXBpLCBzZXRMb2FkaW5nQXBpXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VVc2VyKClcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xpc3RpbmdzLCBzZXRMaXN0aW5nc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xpc3RpbmdTdWIsIHNldExpc3RpbmdTdWJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwYXRocywgc2V0UGF0aHNdID0gdXNlU3RhdGUoZ2V0UGF0aHMoKSlcblxuICBjb25zdCBbYWNjdCwgc2V0QWNjdF0gPSB1c2VTdGF0ZSgnJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWNjb3VudCAmJiBhY2N0ICE9IGFjY291bnQpIHtcbiAgICAgIHNldEFjY3QoYWNjb3VudClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgc2V0TGlzdGluZ3MoW10pXG4gICAgICBzZXRMaXN0aW5nU3ViKGZhbHNlKVxuICAgIH1cbiAgfSwgW2FjY291bnQsIGFjY3RdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIgJiYgdXNlcnMgJiYgKHVzZXJzLmZpbHRlcihfdXNlcj0+e3JldHVybiBfdXNlci5pZCA9PSB1c2VyLmlzLmFsaWFzfSkubGVuZ3RoIDwgMSkpIHtcbiAgICAgIGFkZFN3YXBVc2VyKHVzZXIsIHJlc3VsdD0+e1xuICAgICAgICBzZXRVc2VycyhyZXN1bHQpO1xuICAgICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgLy8gdXNlRWZmZWN0KCgpPT57XG4gIC8vICAgaWYgKHVzZXIgJiYgIWxpc3RpbmdTdWIpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiU3Vic2NyaWJpbmdcIilcbiAgLy8gICAgIHNldExpc3RpbmdTdWIodHJ1ZSlcbiAgLy8gICAgIGdldExpc3RpbmdzKHVzZXIsIChyZXN1bHQpPT57XG4gIC8vICAgICAgIGlmIChsaXN0aW5ncyAmJiAhKGxpc3RpbmdzLmZpbHRlcigoaXRlbSk9PntyZXR1cm4gaXRlbS5rID09IHJlc3VsdC5rfSkubGVuZ3RoID4gMCkpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIC8vICAgICAgICAgbGlzdGluZ3MucHVzaChyZXN1bHQpXG4gIC8vICAgICAgICAgbGV0IG5ld0xpc3RpbmdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsaXN0aW5ncykpXG4gIC8vICAgICAgICAgc2V0TGlzdGluZ3MobmV3TGlzdGluZ3MpXG4gIC8vICAgICAgIH0gICAgICAgIFxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIXVzZXJzICYmICFzdGF0ZS5sb2FkZWQpIHsgICAgICBcbiAgICAgIGdldFN3YXBVc2Vycyh0cnVlLCByZXN1bHQ9PntcbiAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcbiAgICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIH0pICAgXG4gICAgfVxuICB9KVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFwYXRocykge1xuICAvLyAgICAgZ2V0UGF0aHMocGF0aHM9PntcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJQYXRoc1wiLCBwYXRocylcbiAgLy8gICAgICAgc2V0UGF0aHMocGF0aHMpXG4gIC8vICAgICB9KSAgICAgIFxuICAvLyAgIH1cbiAgLy8gfSlcblxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXNlciAmJiB1c2VycyAmJiAhc3RhdGUubG9hZGVkKSB7XG4gICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBbY2hhaW4sIHNldENoYWluXSA9IHVzZVN0YXRlKGNoYWluSWQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYWluSWQgJiYgY2hhaW4gIT0gY2hhaW5JZCkge1xuICAgICAgc2V0Q2hhaW4oY2hhaW5JZClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KSAgICAgIFxuICAgIH1cbiAgfSwgW2NoYWluSWQsIGNoYWluXSlcblxuICByZXR1cm4gKFxuICAgIDxMb2FkZXIgbG9hZGVkPXtzdGF0ZS5sb2FkZWR9PlxuICAgICAge2xvYWRpbmdBcGkgPyA8UmVmcmVzaGluZyAvPiA6ICcnfVxuICAgICAgXG4gICAgICA8RmxleCB3PVwiMTAwJVwiIGp1c3RpZnk9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIiBtdD17MTB9PlxuICAgICAgICA8Qm94IHc9e1wiMTAwJVwifSAgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAge3VzZXI/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxUZXh0PkF1dGhlbnRpY2F0ZWQgVXNlcjoge3VzZXIuaXMuYWxpYXN9PC9UZXh0PlxuICAgICAgICAgICAgICA8SFN0YWNrIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtwb3N0fSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0UG9zdChldmVudC50YXJnZXQudmFsdWUpfSBtPXs1fSB0eXBlPVwidGV4dFwiIGlkPVwicG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0aW5nKHVzZXIsIHBvc3QsIChfbGlzdGluZ3MpPT57XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3RpbmdzIHJldHVybmVkIHRvIGZlYXR1cmVkJywgX2xpc3RpbmdzKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGxpc3RpbmdzLmdldCgnbGlzdGluZ3MtdGVzdDEnKS5tYXAoKS52YWwoKGssdik9Pntjb25zb2xlLmxvZyhrLHYpfSlcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0KCcnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19IG1yPXs1fT5Qb3N0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGV4dD5ObyBBdXRoZW50aWNhdGVkIFVzZXI8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxUZXh0IG09ezV9IGFzPXtcImgxXCJ9PlJlZ2lzdGVyZWQgVXNlcnM8L1RleHQ+XG5cbiAgICAgICAgICB7dXNlcnM/IChcbiAgICAgICAgICAgIHVzZXJzLm1hcCgoX3VzZXIsIGkpPT57XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8VGV4dCBrZXk9e2l9Pnt1c2VyICYmIHVzZXIuaXMuYWxpYXMgPT0gX3VzZXIuaWQgPyAoJ01lOicpIDogKCdVc2VyOicpfSB7X3VzZXIuaWR9PC9UZXh0PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGV4dD5ObyBSZWdpc3RlcmVkIFVzZXJzPC9UZXh0PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7bGlzdGluZ3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxUZXh0IG09ezV9IGFzPXtcImgxXCJ9PiBQb3N0cyA8L1RleHQ+XG4gICAgICAgICAgKTpudWxsfVxuICAgICAgICAgIHtsaXN0aW5ncyA/IChcbiAgICAgICAgICAgIGxpc3RpbmdzLnJldmVyc2UoKS5tYXAobGlzdGluZz0+e1xuICAgICAgICAgICAgICByZXR1cm4gKDxUZXh0IGtleT17bGlzdGluZy5rfT5lbnRyeToge2xpc3Rpbmcudi5wYXlsb2FkfTwvVGV4dD4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPEhvdEJpZCBjbGFzc1NlY3Rpb249XCJzZWN0aW9uXCIgLz5cblxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xvYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

})