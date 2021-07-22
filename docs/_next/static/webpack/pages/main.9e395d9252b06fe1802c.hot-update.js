webpackHotUpdate_N_E("pages/main",{

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ \"./context.tsx\");\n/* harmony import */ var _HotBid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HotBid */ \"./components/HotBid/index.js\");\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/components/Main.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadingApi = _useState2[0],\n      setLoadingApi = _useState2[1];\n\n  var _useUser = Object(_context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"])(),\n      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUser, 2),\n      user = _useUser2[0],\n      setUser = _useUser2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      users = _useState3[0],\n      setUsers = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      post = _useState4[0],\n      setPost = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      listings = _useState5[0],\n      setListings = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      listingSub = _useState6[0],\n      setListingSub = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getPaths\"])()),\n      paths = _useState7[0],\n      setPaths = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      acct = _useState8[0],\n      setAcct = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      setUser(null);\n      setListings([]);\n      setListingSub(false);\n    }\n  }, [account, acct]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (user && users && users.filter(function (_user) {\n      return _user.id == user.is.alias;\n    }).length < 1) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addSwapUser\"])(user, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!listingSub && paths) {\n      console.log(\"Subscribing to Listings\");\n      setListingSub(true);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getListings\"])(function (result) {\n        // console.log('Listings', result)\n        // listings.push(result)\n        // let newListings = JSON.parse(JSON.stringify(listings))\n        setListings(result);\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && !users && !state.loaded) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getSwapUsers\"])(true, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && users && !state.loaded) {\n      setState({\n        loaded: true\n      });\n    }\n  });\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(chainId),\n      chain = _useState9[0],\n      setChain = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      });\n    }\n  }, [chainId, chain]);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    w: \"100%\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, user ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, \"Authenticated User: \", user.is.alias), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"HStack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    value: post,\n    onChange: function onChange(event) {\n      return setPost(event.target.value);\n    },\n    m: 5,\n    type: \"text\",\n    id: \"post\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addListing\"])(user, post, function (_listings) {\n        console.log('listings returned to featured', _listings); // listings.get('listings-test1').map().val((k,v)=>{console.log(k,v)})\n\n        setPost('');\n      });\n    },\n    mr: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"Post\"))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"No Authenticated User\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, \"Registered Users\"), users ? users.map(function (_user, i) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 17\n      }\n    }, user && user.is.alias == _user.id ? 'Me:' : 'User:', \" \", _user.id);\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, \"No Registered Users\"), listings.length > 0 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \" Posts \") : null, listings ? listings.reverse().map(function (listing) {\n    return (// <Text key={listing.k}>entry: {listing.v.payload}</Text>\n      __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n        src: listing.image_url,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 17\n        }\n      })\n    );\n  }) : null, __jsx(_HotBid__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    classSection: \"section\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Main, \"d6l5QH4DwUzXwsapoDhCT1TTtQo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"], _context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLnRzeD9mZDVjIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZVdlYjNSZWFjdCIsImFjY291bnQiLCJjaGFpbklkIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9hZGluZ0FwaSIsInNldExvYWRpbmdBcGkiLCJ1c2VVc2VyIiwidXNlciIsInNldFVzZXIiLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdCIsInNldFBvc3QiLCJsaXN0aW5ncyIsInNldExpc3RpbmdzIiwibGlzdGluZ1N1YiIsInNldExpc3RpbmdTdWIiLCJnZXRQYXRocyIsInBhdGhzIiwic2V0UGF0aHMiLCJhY2N0Iiwic2V0QWNjdCIsInVzZUVmZmVjdCIsImZpbHRlciIsIl91c2VyIiwiaWQiLCJpcyIsImFsaWFzIiwibGVuZ3RoIiwiYWRkU3dhcFVzZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZ2V0TGlzdGluZ3MiLCJnZXRTd2FwVXNlcnMiLCJjaGFpbiIsInNldENoYWluIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZExpc3RpbmciLCJfbGlzdGluZ3MiLCJtYXAiLCJpIiwicmV2ZXJzZSIsImxpc3RpbmciLCJpbWFnZV91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1hDLDZEQUFTLEVBREU7QUFBQSxNQUNyQkMsS0FEcUIsY0FDckJBLEtBRHFCOztBQUFBLHNCQUVBQyxxRUFBWSxFQUZaO0FBQUEsTUFFckJDLE9BRnFCLGlCQUVyQkEsT0FGcUI7QUFBQSxNQUVaQyxPQUZZLGlCQUVaQSxPQUZZOztBQUFBLGtCQUdIQyxzREFBUSxDQUFDO0FBQUVDLFVBQU0sRUFBRTtBQUFWLEdBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSU9ILHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJdEJJLFVBSnNCO0FBQUEsTUFJVkMsYUFKVTs7QUFBQSxpQkFLTEMsd0RBQU8sRUFMRjtBQUFBO0FBQUEsTUFLdEJDLElBTHNCO0FBQUEsTUFLaEJDLE9BTGdCOztBQUFBLG1CQU1IUixzREFBUSxDQUFDLElBQUQsQ0FOTDtBQUFBLE1BTXRCUyxLQU5zQjtBQUFBLE1BTWZDLFFBTmU7O0FBQUEsbUJBT0xWLHNEQUFRLENBQUMsRUFBRCxDQVBIO0FBQUEsTUFPdEJXLElBUHNCO0FBQUEsTUFPaEJDLE9BUGdCOztBQUFBLG1CQVFHWixzREFBUSxDQUFDLEVBQUQsQ0FSWDtBQUFBLE1BUXRCYSxRQVJzQjtBQUFBLE1BUVpDLFdBUlk7O0FBQUEsbUJBU09kLHNEQUFRLENBQUMsS0FBRCxDQVRmO0FBQUEsTUFTdEJlLFVBVHNCO0FBQUEsTUFTVkMsYUFUVTs7QUFBQSxtQkFVSGhCLHNEQUFRLENBQUNpQix1REFBUSxFQUFULENBVkw7QUFBQSxNQVV0QkMsS0FWc0I7QUFBQSxNQVVmQyxRQVZlOztBQUFBLG1CQVlMbkIsc0RBQVEsQ0FBQyxFQUFELENBWkg7QUFBQSxNQVl0Qm9CLElBWnNCO0FBQUEsTUFZaEJDLE9BWmdCOztBQWE3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXhCLE9BQU8sSUFBSXNCLElBQUksSUFBSXRCLE9BQXZCLEVBQWdDO0FBQzlCdUIsYUFBTyxDQUFDdkIsT0FBRCxDQUFQO0FBQ0FLLGNBQVEsQ0FBQztBQUFFRixjQUFNLEVBQUU7QUFBVixPQUFELENBQVI7QUFDQU8sYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBTSxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNsQixPQUFELEVBQVVzQixJQUFWLENBUk0sQ0FBVDtBQVVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJZixJQUFJLElBQUlFLEtBQVIsSUFBa0JBLEtBQUssQ0FBQ2MsTUFBTixDQUFhLFVBQUFDLEtBQUssRUFBRTtBQUFDLGFBQU9BLEtBQUssQ0FBQ0MsRUFBTixJQUFZbEIsSUFBSSxDQUFDbUIsRUFBTCxDQUFRQyxLQUEzQjtBQUFpQyxLQUF0RCxFQUF3REMsTUFBeEQsR0FBaUUsQ0FBdkYsRUFBMkY7QUFDekZDLGdFQUFXLENBQUN0QixJQUFELEVBQU8sVUFBQXVCLE1BQU0sRUFBRTtBQUN4QnBCLGdCQUFRLENBQUNvQixNQUFELENBQVI7QUFDQTNCLGdCQUFRLENBQUM7QUFBRUYsZ0JBQU0sRUFBRTtBQUFWLFNBQUQsQ0FBUjtBQUNELE9BSFUsQ0FBWDtBQUlEO0FBQ0YsR0FQUSxDQUFUO0FBU0FxQix5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFJLENBQUNQLFVBQUQsSUFBZUcsS0FBbkIsRUFBMEI7QUFDeEJhLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FoQixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBaUIsZ0VBQVcsQ0FBQyxVQUFDSCxNQUFELEVBQVU7QUFFbEI7QUFDQTtBQUNBO0FBQ0FoQixtQkFBVyxDQUFDZ0IsTUFBRCxDQUFYO0FBRUgsT0FQVSxDQUFYO0FBUUQ7QUFDRixHQWJRLENBQVQ7QUFlQVIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDZixJQUFELElBQVMsQ0FBQ0UsS0FBVixJQUFtQixDQUFDUCxLQUFLLENBQUNELE1BQTlCLEVBQXNDO0FBQ3BDaUMsaUVBQVksQ0FBQyxJQUFELEVBQU8sVUFBQUosTUFBTSxFQUFFO0FBQ3pCcEIsZ0JBQVEsQ0FBQ29CLE1BQUQsQ0FBUjtBQUNBM0IsZ0JBQVEsQ0FBQztBQUFFRixnQkFBTSxFQUFFO0FBQVYsU0FBRCxDQUFSO0FBQ0QsT0FIVyxDQUFaO0FBSUQ7QUFDRixHQVBRLENBQVQ7QUFXQXFCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2YsSUFBRCxJQUFTRSxLQUFULElBQWtCLENBQUNQLEtBQUssQ0FBQ0QsTUFBN0IsRUFBcUM7QUFDbkNFLGNBQVEsQ0FBQztBQUFFRixjQUFNLEVBQUU7QUFBVixPQUFELENBQVI7QUFDRDtBQUNGLEdBSlEsQ0FBVDs7QUExRDZCLG1CQWdFSEQsc0RBQVEsQ0FBQ0QsT0FBRCxDQWhFTDtBQUFBLE1BZ0V0Qm9DLEtBaEVzQjtBQUFBLE1BZ0VmQyxRQWhFZTs7QUFpRTdCZCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJdkIsT0FBTyxJQUFJb0MsS0FBSyxJQUFJcEMsT0FBeEIsRUFBaUM7QUFDL0JxQyxjQUFRLENBQUNyQyxPQUFELENBQVI7QUFDQUksY0FBUSxDQUFDO0FBQUVGLGNBQU0sRUFBRTtBQUFWLE9BQUQsQ0FBUjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNGLE9BQUQsRUFBVW9DLEtBQVYsQ0FMTSxDQUFUO0FBT0EsU0FDRSxNQUFDLG1EQUFEO0FBQVEsVUFBTSxFQUFFakMsS0FBSyxDQUFDRCxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFVBQVUsR0FBRyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFvQixFQURqQyxFQUdFLE1BQUMsb0RBQUQ7QUFBTSxLQUFDLEVBQUMsTUFBUjtBQUFlLFdBQU8sRUFBQyxRQUF2QjtBQUFnQyxZQUFRLEVBQUMsTUFBekM7QUFBZ0QsTUFBRSxFQUFFLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFFLE1BQVI7QUFBaUIsYUFBUyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csSUFBSSxHQUNILG1FQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBMkJBLElBQUksQ0FBQ21CLEVBQUwsQ0FBUUMsS0FBbkMsQ0FERixFQUVFLE1BQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFPLFNBQUssRUFBRWhCLElBQWQ7QUFBb0IsWUFBUSxFQUFFLGtCQUFBMEIsS0FBSztBQUFBLGFBQUl6QixPQUFPLENBQUN5QixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFYO0FBQUEsS0FBbkM7QUFBb0UsS0FBQyxFQUFFLENBQXZFO0FBQTBFLFFBQUksRUFBQyxNQUEvRTtBQUFzRixNQUFFLEVBQUMsTUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBRSxtQkFBSTtBQUNqQkMsK0RBQVUsQ0FBQ2pDLElBQUQsRUFBT0ksSUFBUCxFQUFhLFVBQUM4QixTQUFELEVBQWE7QUFDbENWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaLEVBQTZDUyxTQUE3QyxFQURrQyxDQUVsQzs7QUFDQTdCLGVBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxPQUpTLENBQVY7QUFLSCxLQU5EO0FBTUcsTUFBRSxFQUFFLENBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBRkYsQ0FERyxHQWdCSCxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBakJKLEVBb0JJLE1BQUMsb0RBQUQ7QUFBTSxLQUFDLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXBCSixFQXNCR0gsS0FBSyxHQUNKQSxLQUFLLENBQUNpQyxHQUFOLENBQVUsVUFBQ2xCLEtBQUQsRUFBUW1CLENBQVIsRUFBWTtBQUNwQixXQUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFHLEVBQUVBLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFlcEMsSUFBSSxJQUFJQSxJQUFJLENBQUNtQixFQUFMLENBQVFDLEtBQVIsSUFBaUJILEtBQUssQ0FBQ0MsRUFBL0IsR0FBcUMsS0FBckMsR0FBK0MsT0FBOUQsT0FBeUVELEtBQUssQ0FBQ0MsRUFBL0UsQ0FERjtBQUdELEdBSkQsQ0FESSxHQU9KLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE3QkosRUFnQ0daLFFBQVEsQ0FBQ2UsTUFBVCxHQUFrQixDQUFsQixHQUNDLE1BQUMsb0RBQUQ7QUFBTSxLQUFDLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsR0FFQyxJQWxDSixFQW1DR2YsUUFBUSxHQUNQQSxRQUFRLENBQUMrQixPQUFULEdBQW1CRixHQUFuQixDQUF1QixVQUFBRyxPQUFPLEVBQUU7QUFDOUIsV0FDRTtBQUNBLFlBQUMscURBQUQ7QUFBTyxXQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBSUQsR0FMRCxDQURPLEdBT0wsSUExQ04sRUE0Q0UsTUFBQyxnREFBRDtBQUFRLGdCQUFZLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDRixDQURGLENBSEYsQ0FERjtBQXVERDs7R0EvSHVCcEQsSTtVQUNKQyxxRCxFQUNXRSw2RCxFQUdMUyxnRDs7O0tBTEZaLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0LCBJbnB1dCwgQnV0dG9uLCBMaW5rLCBJbWFnZSwgU3RhY2ssIFNwaW5uZXIsIHVzZUNvbG9yTW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7SFN0YWNrfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXInXG5pbXBvcnQgUmVmcmVzaGluZyBmcm9tICcuL1JlZnJlc2hpbmcnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhZGRMaXN0aW5nLCBhZGRTd2FwVXNlciwgZ2V0TGlzdGluZ3MsIGdldFN3YXBVc2VycywgZ2V0UGF0aHMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0IEhvdEJpZCBmcm9tIFwiLi9Ib3RCaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBhY2NvdW50LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICBjb25zdCBbbG9hZGluZ0FwaSwgc2V0TG9hZGluZ0FwaV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlVXNlcigpXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtsaXN0aW5ncywgc2V0TGlzdGluZ3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtsaXN0aW5nU3ViLCBzZXRMaXN0aW5nU3ViXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGF0aHMsIHNldFBhdGhzXSA9IHVzZVN0YXRlKGdldFBhdGhzKCkpXG5cbiAgY29uc3QgW2FjY3QsIHNldEFjY3RdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjY291bnQgJiYgYWNjdCAhPSBhY2NvdW50KSB7XG4gICAgICBzZXRBY2N0KGFjY291bnQpXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICAgIHNldExpc3RpbmdzKFtdKVxuICAgICAgc2V0TGlzdGluZ1N1YihmYWxzZSlcbiAgICB9XG4gIH0sIFthY2NvdW50LCBhY2N0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyICYmIHVzZXJzICYmICh1c2Vycy5maWx0ZXIoX3VzZXI9PntyZXR1cm4gX3VzZXIuaWQgPT0gdXNlci5pcy5hbGlhc30pLmxlbmd0aCA8IDEpKSB7XG4gICAgICBhZGRTd2FwVXNlcih1c2VyLCByZXN1bHQ9PntcbiAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcbiAgICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmICghbGlzdGluZ1N1YiAmJiBwYXRocykge1xuICAgICAgY29uc29sZS5sb2coXCJTdWJzY3JpYmluZyB0byBMaXN0aW5nc1wiKVxuICAgICAgc2V0TGlzdGluZ1N1Yih0cnVlKVxuICAgICAgZ2V0TGlzdGluZ3MoKHJlc3VsdCk9PntcbiAgICAgICAgXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0xpc3RpbmdzJywgcmVzdWx0KVxuICAgICAgICAgIC8vIGxpc3RpbmdzLnB1c2gocmVzdWx0KVxuICAgICAgICAgIC8vIGxldCBuZXdMaXN0aW5ncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobGlzdGluZ3MpKVxuICAgICAgICAgIHNldExpc3RpbmdzKHJlc3VsdClcbiAgICAgICAgICAgICAgIFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIXVzZXJzICYmICFzdGF0ZS5sb2FkZWQpIHsgICAgICBcbiAgICAgIGdldFN3YXBVc2Vycyh0cnVlLCByZXN1bHQ9PntcbiAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcbiAgICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIH0pICAgXG4gICAgfVxuICB9KVxuXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyICYmIHVzZXJzICYmICFzdGF0ZS5sb2FkZWQpIHtcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IFtjaGFpbiwgc2V0Q2hhaW5dID0gdXNlU3RhdGUoY2hhaW5JZClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhaW5JZCAmJiBjaGFpbiAhPSBjaGFpbklkKSB7XG4gICAgICBzZXRDaGFpbihjaGFpbklkKVxuICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pICAgICAgXG4gICAgfVxuICB9LCBbY2hhaW5JZCwgY2hhaW5dKVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlciBsb2FkZWQ9e3N0YXRlLmxvYWRlZH0+XG4gICAgICB7bG9hZGluZ0FwaSA/IDxSZWZyZXNoaW5nIC8+IDogJyd9XG4gICAgICBcbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIG10PXsxMH0+XG4gICAgICAgIDxCb3ggdz17XCIxMDAlXCJ9ICB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICB7dXNlcj8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFRleHQ+QXV0aGVudGljYXRlZCBVc2VyOiB7dXNlci5pcy5hbGlhc308L1RleHQ+XG4gICAgICAgICAgICAgIDxIU3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3Bvc3R9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQb3N0KGV2ZW50LnRhcmdldC52YWx1ZSl9IG09ezV9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RpbmcodXNlciwgcG9zdCwgKF9saXN0aW5ncyk9PntcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdGluZ3MgcmV0dXJuZWQgdG8gZmVhdHVyZWQnLCBfbGlzdGluZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGluZ3MuZ2V0KCdsaXN0aW5ncy10ZXN0MScpLm1hcCgpLnZhbCgoayx2KT0+e2NvbnNvbGUubG9nKGssdil9KVxuICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3QoJycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX0gbXI9ezV9PlBvc3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUZXh0Pk5vIEF1dGhlbnRpY2F0ZWQgVXNlcjwvVGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPFRleHQgbT17NX0gYXM9e1wiaDFcIn0+UmVnaXN0ZXJlZCBVc2VyczwvVGV4dD5cblxuICAgICAgICAgIHt1c2Vycz8gKFxuICAgICAgICAgICAgdXNlcnMubWFwKChfdXNlciwgaSk9PntcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxUZXh0IGtleT17aX0+e3VzZXIgJiYgdXNlci5pcy5hbGlhcyA9PSBfdXNlci5pZCA/ICgnTWU6JykgOiAoJ1VzZXI6Jyl9IHtfdXNlci5pZH08L1RleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUZXh0Pk5vIFJlZ2lzdGVyZWQgVXNlcnM8L1RleHQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtsaXN0aW5ncy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPFRleHQgbT17NX0gYXM9e1wiaDFcIn0+IFBvc3RzIDwvVGV4dD5cbiAgICAgICAgICApOm51bGx9XG4gICAgICAgICAge2xpc3RpbmdzID8gKFxuICAgICAgICAgICAgbGlzdGluZ3MucmV2ZXJzZSgpLm1hcChsaXN0aW5nPT57XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgLy8gPFRleHQga2V5PXtsaXN0aW5nLmt9PmVudHJ5OiB7bGlzdGluZy52LnBheWxvYWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xpc3RpbmcuaW1hZ2VfdXJsfSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPEhvdEJpZCBjbGFzc1NlY3Rpb249XCJzZWN0aW9uXCIgLz5cblxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xvYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main.tsx\n");

/***/ })

})