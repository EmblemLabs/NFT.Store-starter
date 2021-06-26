webpackHotUpdate_N_E("pages/featured",{

/***/ "./components/Featured.tsx":
/*!*********************************!*\
  !*** ./components/Featured.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Featured; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ \"./context.tsx\");\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/components/Featured.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n // import Gun from 'gun';\n// import 'gun/sea'\n// import { GunProvider } from 'react-gun';\n// import GunComponent from './GunComponent'\n// import '../extensions/sea';\n\nfunction Featured() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadingApi = _useState2[0],\n      setLoadingApi = _useState2[1];\n\n  var _useUser = Object(_context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"])(),\n      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUser, 2),\n      user = _useUser2[0],\n      setUser = _useUser2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      users = _useState3[0],\n      setUsers = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      post = _useState4[0],\n      setPost = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      listings = _useState5[0],\n      setListings = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      listingSub = _useState6[0],\n      setListingSub = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      acct = _useState7[0],\n      setAcct = _useState7[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      setUser(null);\n    }\n  }, [account, acct]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (user && users && users.filter(function (_user) {\n      return _user.id == user.is.alias;\n    }).length < 1) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addSwapUser\"])(user, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (user && !listingSub) {\n      console.log(\"Subscribing\");\n      setListingSub(true);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getListings\"])(user, function (result) {\n        if (listings && !listings.includes(result)) {\n          console.log(result);\n          listings.push(result);\n          setListings(listings);\n        }\n      }); // subscribeToListings(user.is.alias, (listings)=>{\n      //   console.log(\"Listings\", listings)\n      // })\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && !users && !state.loaded) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getSwapUsers\"])(true, function (result) {\n        setUsers(result);\n        setState({\n          loaded: true\n        });\n      });\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!user && users && !state.loaded) {\n      setState({\n        loaded: true\n      });\n    }\n  });\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(chainId),\n      chain = _useState8[0],\n      setChain = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      });\n    }\n  }, [chainId, chain]);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    w: \"100%\",\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, user ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 15\n    }\n  }, \"Authenticated User: \", user.is.alias), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"HStack\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    value: post,\n    onChange: function onChange(event) {\n      return setPost(event.target.value);\n    },\n    m: 5,\n    type: \"text\",\n    id: \"post\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"addListing\"])(user, post, function (listings) {\n        console.log('listings returned to featured', listings); // listings.get('listings-test1').map().val((k,v)=>{console.log(k,v)})\n\n        setPost('');\n      });\n    },\n    mr: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  }, \"Post\"))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"No Authenticated User\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, \"Registered Users\"), users ? users.map(function (_user, i) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }\n    }, user && user.is.alias == _user.id ? 'Me:' : 'User:', \" \", _user.id);\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \"No Registered Users\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    m: 5,\n    as: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, \" Posts \"), listings.length > 0 ? listings.map(function (listing) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      key: listing.k,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 23\n      }\n    }, \"entry: \", listing.v.payload);\n  }) : null)));\n}\n\n_s(Featured, \"wXL2FvzAVrlWzICRQ8q2Pmj4oss=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"], _context__WEBPACK_IMPORTED_MODULE_9__[\"useUser\"]];\n});\n\n_c = Featured;\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC50c3g/NDc0OSJdLCJuYW1lcyI6WyJGZWF0dXJlZCIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlV2ViM1JlYWN0IiwiYWNjb3VudCIsImNoYWluSWQiLCJ1c2VTdGF0ZSIsImxvYWRlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJsb2FkaW5nQXBpIiwic2V0TG9hZGluZ0FwaSIsInVzZVVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJzIiwic2V0VXNlcnMiLCJwb3N0Iiwic2V0UG9zdCIsImxpc3RpbmdzIiwic2V0TGlzdGluZ3MiLCJsaXN0aW5nU3ViIiwic2V0TGlzdGluZ1N1YiIsImFjY3QiLCJzZXRBY2N0IiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiX3VzZXIiLCJpZCIsImlzIiwiYWxpYXMiLCJsZW5ndGgiLCJhZGRTd2FwVXNlciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRMaXN0aW5ncyIsImluY2x1ZGVzIiwicHVzaCIsImdldFN3YXBVc2VycyIsImNoYWluIiwic2V0Q2hhaW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWRkTGlzdGluZyIsIm1hcCIsImkiLCJsaXN0aW5nIiwiayIsInYiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLG1CQUNmQyw2REFBUyxFQURNO0FBQUEsTUFDekJDLEtBRHlCLGNBQ3pCQSxLQUR5Qjs7QUFBQSxzQkFFSkMscUVBQVksRUFGUjtBQUFBLE1BRXpCQyxPQUZ5QixpQkFFekJBLE9BRnlCO0FBQUEsTUFFaEJDLE9BRmdCLGlCQUVoQkEsT0FGZ0I7O0FBQUEsa0JBR1BDLHNEQUFRLENBQUM7QUFBRUMsVUFBTSxF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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFlbEMsSUFBSSxJQUFJQSxJQUFJLENBQUNnQixFQUFMLENBQVFDLEtBQVIsSUFBaUJILEtBQUssQ0FBQ0MsRUFBL0IsR0FBcUMsS0FBckMsR0FBK0MsT0FBOUQsT0FBeUVELEtBQUssQ0FBQ0MsRUFBL0UsQ0FERjtBQUdELEdBSkQsQ0FESSxHQU9KLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE3QkosRUFnQ0UsTUFBQyxvREFBRDtBQUFNLEtBQUMsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0YsRUFrQ0dULFFBQVEsQ0FBQ1ksTUFBVCxHQUFrQixDQUFsQixHQUNDWixRQUFRLENBQUMyQixHQUFULENBQWEsVUFBQUUsT0FBTyxFQUFFO0FBQ3BCLFdBQVEsTUFBQyxvREFBRDtBQUFNLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE4QkQsT0FBTyxDQUFDRSxDQUFSLENBQVVDLE9BQXhDLENBQVI7QUFDRCxHQUZELENBREQsR0FJRyxJQXRDTixDQURGLENBSEYsQ0FERjtBQWdERDs7R0F2SHVCbkQsUTtVQUNKQyxxRCxFQUNXRSw2RCxFQUdMUyxnRDs7O0tBTEZaLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgVGV4dCwgSW5wdXQsIEJ1dHRvbiwgTGluaywgSW1hZ2UsIFN0YWNrLCBTcGlubmVyLCB1c2VDb2xvck1vZGUgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQge0hTdGFja30gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJ1xuaW1wb3J0IFJlZnJlc2hpbmcgZnJvbSAnLi9SZWZyZXNoaW5nJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYWRkTGlzdGluZywgYWRkU3dhcFVzZXIsIGdldExpc3RpbmdzLCBnZXRTd2FwVXNlcnMsIHN1YnNjcmliZVRvTGlzdGluZ3MgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi9jb250ZXh0J1xuLy8gaW1wb3J0IEd1biBmcm9tICdndW4nO1xuLy8gaW1wb3J0ICdndW4vc2VhJ1xuLy8gaW1wb3J0IHsgR3VuUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1ndW4nO1xuLy8gaW1wb3J0IEd1bkNvbXBvbmVudCBmcm9tICcuL0d1bkNvbXBvbmVudCdcbi8vIGltcG9ydCAnLi4vZXh0ZW5zaW9ucy9zZWEnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVkKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGFjY291bnQsIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pXG4gIGNvbnN0IFtsb2FkaW5nQXBpLCBzZXRMb2FkaW5nQXBpXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VVc2VyKClcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xpc3RpbmdzLCBzZXRMaXN0aW5nc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xpc3RpbmdTdWIsIHNldExpc3RpbmdTdWJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2FjY3QsIHNldEFjY3RdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjY291bnQgJiYgYWNjdCAhPSBhY2NvdW50KSB7XG4gICAgICBzZXRBY2N0KGFjY291bnQpXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICB9XG4gIH0sIFthY2NvdW50LCBhY2N0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyICYmIHVzZXJzICYmICh1c2Vycy5maWx0ZXIoX3VzZXI9PntyZXR1cm4gX3VzZXIuaWQgPT0gdXNlci5pcy5hbGlhc30pLmxlbmd0aCA8IDEpKSB7XG4gICAgICBhZGRTd2FwVXNlcih1c2VyLCByZXN1bHQ9PntcbiAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcbiAgICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmICh1c2VyICYmICFsaXN0aW5nU3ViKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmliaW5nXCIpXG4gICAgICBzZXRMaXN0aW5nU3ViKHRydWUpXG4gICAgICBnZXRMaXN0aW5ncyh1c2VyLCAocmVzdWx0KT0+e1xuICAgICAgICBcbiAgICAgICAgaWYgKGxpc3RpbmdzICYmICFsaXN0aW5ncy5pbmNsdWRlcyhyZXN1bHQpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgIGxpc3RpbmdzLnB1c2gocmVzdWx0KVxuICAgICAgICAgIHNldExpc3RpbmdzKGxpc3RpbmdzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC8vIHN1YnNjcmliZVRvTGlzdGluZ3ModXNlci5pcy5hbGlhcywgKGxpc3RpbmdzKT0+e1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIkxpc3RpbmdzXCIsIGxpc3RpbmdzKVxuICAgICAgLy8gfSlcbiAgICB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIXVzZXJzICYmICFzdGF0ZS5sb2FkZWQpIHtcbiAgICAgIGdldFN3YXBVc2Vycyh0cnVlLCByZXN1bHQ9PntcbiAgICAgICAgc2V0VXNlcnMocmVzdWx0KTtcbiAgICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyICYmIHVzZXJzICYmICFzdGF0ZS5sb2FkZWQpIHtcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IFtjaGFpbiwgc2V0Q2hhaW5dID0gdXNlU3RhdGUoY2hhaW5JZClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhaW5JZCAmJiBjaGFpbiAhPSBjaGFpbklkKSB7XG4gICAgICBzZXRDaGFpbihjaGFpbklkKVxuICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pICAgICAgXG4gICAgfVxuICB9LCBbY2hhaW5JZCwgY2hhaW5dKVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlciBsb2FkZWQ9e3N0YXRlLmxvYWRlZH0+XG4gICAgICB7bG9hZGluZ0FwaSA/IDxSZWZyZXNoaW5nIC8+IDogJyd9XG4gICAgICBcbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIG10PXsxMH0+XG4gICAgICAgIDxCb3ggdz17XCIxMDAlXCJ9ICB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICB7dXNlcj8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFRleHQ+QXV0aGVudGljYXRlZCBVc2VyOiB7dXNlci5pcy5hbGlhc308L1RleHQ+XG4gICAgICAgICAgICAgIDxIU3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3Bvc3R9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQb3N0KGV2ZW50LnRhcmdldC52YWx1ZSl9IG09ezV9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RpbmcodXNlciwgcG9zdCwgKGxpc3RpbmdzKT0+e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0aW5ncyByZXR1cm5lZCB0byBmZWF0dXJlZCcsIGxpc3RpbmdzKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGxpc3RpbmdzLmdldCgnbGlzdGluZ3MtdGVzdDEnKS5tYXAoKS52YWwoKGssdik9Pntjb25zb2xlLmxvZyhrLHYpfSlcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0KCcnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19IG1yPXs1fT5Qb3N0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGV4dD5ObyBBdXRoZW50aWNhdGVkIFVzZXI8L1RleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxUZXh0IG09ezV9IGFzPXtcImgxXCJ9PlJlZ2lzdGVyZWQgVXNlcnM8L1RleHQ+XG5cbiAgICAgICAgICB7dXNlcnM/IChcbiAgICAgICAgICAgIHVzZXJzLm1hcCgoX3VzZXIsIGkpPT57XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8VGV4dCBrZXk9e2l9Pnt1c2VyICYmIHVzZXIuaXMuYWxpYXMgPT0gX3VzZXIuaWQgPyAoJ01lOicpIDogKCdVc2VyOicpfSB7X3VzZXIuaWR9PC9UZXh0PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VGV4dD5ObyBSZWdpc3RlcmVkIFVzZXJzPC9UZXh0PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8VGV4dCBtPXs1fSBhcz17XCJoMVwifT4gUG9zdHMgPC9UZXh0PlxuXG4gICAgICAgICAge2xpc3RpbmdzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBsaXN0aW5ncy5tYXAobGlzdGluZz0+e1xuICAgICAgICAgICAgICByZXR1cm4gKDxUZXh0IGtleT17bGlzdGluZy5rfT5lbnRyeToge2xpc3Rpbmcudi5wYXlsb2FkfTwvVGV4dD4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xvYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Featured.tsx\n");

/***/ })

})