webpackHotUpdate_N_E("pages/featured",{

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: asList, getSwapUsers, addSwapUser, addListing, getListings, escapeRegExp, shortenHex, CHAIN_ID_NAMES, INFURA_PREFIXES, ExplorerTXType, EXPLORER_PREFIXES, NETWORK_SHORTNAMES, formatEtherscanLink, getTokenDisplayValue, getPercentChange, formatQueryParams, validImage, isETHAddress, toContractValue, fromContractValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asList\", function() { return asList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSwapUsers\", function() { return getSwapUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSwapUser\", function() { return addSwapUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListing\", function() { return addListing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListings\", function() { return getListings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeRegExp\", function() { return escapeRegExp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortenHex\", function() { return shortenHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHAIN_ID_NAMES\", function() { return CHAIN_ID_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INFURA_PREFIXES\", function() { return INFURA_PREFIXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExplorerTXType\", function() { return ExplorerTXType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPLORER_PREFIXES\", function() { return EXPLORER_PREFIXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NETWORK_SHORTNAMES\", function() { return NETWORK_SHORTNAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatEtherscanLink\", function() { return formatEtherscanLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTokenDisplayValue\", function() { return getTokenDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercentChange\", function() { return getPercentChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatQueryParams\", function() { return formatQueryParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validImage\", function() { return validImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isETHAddress\", function() { return isETHAddress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toContractValue\", function() { return toContractValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromContractValue\", function() { return fromContractValue; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uniswap/sdk */ \"./node_modules/@uniswap/sdk/dist/sdk.esm.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3-utils */ \"./node_modules/web3-utils/lib/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gun */ \"../../../node_modules/gun/browser.js\");\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar gun = gun__WEBPACK_IMPORTED_MODULE_3___default()(['https://mvp-gun.herokuapp.com/gun', 'http://localhost:8765/gun']);\nvar SWAP_USER_PATH = 'ev-swap28';\nvar SWAP_LISTINGS_PATH = \"listings-test7\";\n\nfunction getFromGun(path, cb) {\n  gun.get(path + '/', function (ack) {\n    if (!ack.put) {\n      console.log('Not Found');\n      return cb({});\n    } else {\n      return cb(ack.put);\n    }\n  });\n}\n\nfunction getFromGunObject(path) {\n  return gun.get(path + '/');\n}\n\nfunction withinGunCollection(collection, needle) {\n  return asList(collection).filter(function (item) {\n    return item.id == needle;\n  }).length > 0;\n}\n\nfunction asList(collection) {\n  return Object.keys(collection).map(function (key) {\n    return {\n      \"id\": key,\n      \"val\": collection[key]\n    };\n  }).filter(function (item) {\n    return item.val != \"\" && item.id != \"_\";\n  });\n}\nfunction getSwapUsers(_asList, cb) {\n  getFromGun(SWAP_USER_PATH, function (users) {\n    if (_asList) {\n      return cb(asList(users));\n    } else {\n      return cb(users);\n    }\n  });\n}\nfunction addSwapUser(_user, cb) {\n  console.log(_user);\n  getSwapUsers(false, function (users) {\n    if (!withinGunCollection(users, _user.is.alias)) {\n      getFromGunObject(SWAP_USER_PATH).get(_user.is.alias).put(_user.is.pub, function () {\n        return addSwapUser(_user, cb);\n      });\n    } else {\n      return cb(asList(users));\n    }\n  });\n}\nfunction addListing(_user, payload, cb) {\n  var id = Math.floor(Math.random() * 4294967296);\n  console.log(_user);\n\n  _user.get(SWAP_LISTINGS_PATH).get(id).put({\n    id: id,\n    payload: payload\n  }); //, (result)=>{\n  // _user.get(SWAP_LISTINGS_PATH).map().val((k,v)=>{console.log(k,v)})\n  //   console.log('result', result)\n  //   getListings(_user.is.alias, listings=>{\n  //     // console.log('listings', listings)\n  //     return cb(listings)\n  //   })\n  // })\n\n\n  return cb(true);\n}\nfunction getListings(_user, cb) {\n  _user.get(SWAP_LISTINGS_PATH).map().val(function (v, k) {\n    return cb({\n      k: k,\n      v: v\n    });\n  });\n} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping\n\nfunction escapeRegExp(string) {\n  return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'); // $& means the whole matched string\n}\nfunction shortenHex(hex) {\n  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;\n  return \"\".concat(hex.substring(0, length + 2), \"\\u2026\").concat(hex.substring(hex.length - length));\n}\nvar CHAIN_ID_NAMES = {\n  1: 'Ethereum Mainnet',\n  3: 'Ropsten',\n  4: 'Rinkeby',\n  5: 'Görli',\n  42: 'Kovan',\n  80001: 'Mumbai',\n  137: 'Polygon',\n  97: 'bnbsc',\n  100: 'xDai',\n  56: 'Binance Smart Chain',\n  250: 'Fantom'\n};\nvar INFURA_PREFIXES = {\n  1: 'mainnet',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  80001: 'mumbai',\n  137: 'matic',\n  97: 'bnbsc',\n  100: 'xdai',\n  56: 'bsc',\n  250: 'fantom'\n};\nvar ExplorerTXType;\n\n(function (ExplorerTXType) {\n  ExplorerTXType[ExplorerTXType[\"Account\"] = 0] = \"Account\";\n  ExplorerTXType[ExplorerTXType[\"TokenBalance\"] = 1] = \"TokenBalance\";\n  ExplorerTXType[ExplorerTXType[\"Transaction\"] = 2] = \"Transaction\";\n  ExplorerTXType[ExplorerTXType[\"Token\"] = 3] = \"Token\";\n})(ExplorerTXType || (ExplorerTXType = {}));\n\nvar EXPLORER_PREFIXES = {\n  1: 'etherscan.io',\n  3: 'ropsten.etherscan.io',\n  4: 'rinkeby.etherscan.io',\n  5: 'goerli.',\n  42: 'kovan.',\n  80001: 'mumbai-explorer.matic.today',\n  137: 'polygonscan.com',\n  97: 'bnbsc',\n  100: 'blockscout.com/xdai/mainnet',\n  56: 'bscscan.com',\n  250: 'ftmscan.com'\n};\nvar NETWORK_SHORTNAMES = {\n  1: 'eth',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  80001: 'mumbai',\n  137: 'matic',\n  97: 'bsctest',\n  100: 'xdai',\n  56: 'bsc',\n  250: 'fantom'\n};\nfunction formatEtherscanLink(type, data) {\n  switch (type) {\n    case ExplorerTXType.Account:\n      {\n        var _ref = data,\n            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n            chainId = _ref2[0],\n            address = _ref2[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[chainId], \"/address/\").concat(address);\n      }\n\n    case ExplorerTXType.TokenBalance:\n      {\n        var _ref3 = data,\n            _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, 2),\n            token = _ref4[0],\n            _address = _ref4[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[token.chainId], \"/token/\").concat(token.address, \"?a=\").concat(_address);\n      }\n\n    case ExplorerTXType.Transaction:\n      {\n        var _ref5 = data,\n            _ref6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref5, 2),\n            _chainId = _ref6[0],\n            hash = _ref6[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[_chainId], \"/tx/\").concat(hash);\n      }\n\n    case ExplorerTXType.Token:\n      {\n        var _ref7 = data,\n            _ref8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref7, 2),\n            _chainId2 = _ref8[0],\n            _hash = _ref8[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[_chainId2], \"/token/\").concat(_hash);\n      }\n  }\n}\nvar SAI = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"ChainId\"].MAINNET, '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359', 18);\nfunction getTokenDisplayValue(token) {\n  var _token$symbol;\n\n  return token.equals(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"WETH\"][token.chainId]) ? 'ETH' : token.equals(SAI) ? 'SAI' : (_token$symbol = token.symbol) !== null && _token$symbol !== void 0 ? _token$symbol : 'UNKNOWN';\n}\nfunction getPercentChange(referenceRate, newRate) {\n  var flipOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  // calculate (referenceRate - newRate) / referenceRate or (newRate - referenceRate) / referenceRate\n  var difference = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"Fraction\"](flipOrder ? _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].subtract(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator)) : _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].subtract(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator)), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"JSBI\"].multiply(referenceRate.adjusted.denominator, newRate.adjusted.denominator));\n  var percentChange = difference.multiply(referenceRate.adjusted.invert());\n  return new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_1__[\"Percent\"](percentChange.numerator, percentChange.denominator);\n}\nfunction formatQueryParams(params) {\n  var formatted = Object.keys(params).map(function (key) {\n    return \"\".concat(key, \"=\").concat(params[key]);\n  }).join('&');\n  return formatted === '' ? formatted : \"?\".concat(formatted);\n}\nfunction validImage(data) {\n  if (data && (data.includes('http') || data.includes('data:image'))) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction isETHAddress(address) {\n  return Object(web3_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAddress\"])(address);\n}\nfunction toContractValue(amount, decimal) {\n  return Object(web3_utils__WEBPACK_IMPORTED_MODULE_2__[\"toWei\"])(amount, decimal);\n}\nfunction fromContractValue(amount, decimal) {\n  return Number(Object(web3_utils__WEBPACK_IMPORTED_MODULE_2__[\"fromWei\"])(amount, decimal));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMudHM/ODgxMyJdLCJuYW1lcyI6WyJndW4iLCJHdW4iLCJTV0FQX1VTRVJfUEFUSCIsIlNXQVBfTElTVElOR1NfUEFUSCIsImdldEZyb21HdW4iLCJwYXRoIiwiY2IiLCJnZXQiLCJhY2siLCJwdXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0RnJvbUd1bk9iamVjdCIsIndpdGhpbkd1bkNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibmVlZGxlIiwiYXNMaXN0IiwiZmlsdGVyIiwiaXRlbSIsImlkIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbCIsImdldFN3YXBVc2VycyIsIl9hc0xpc3QiLCJ1c2VycyIsImFkZFN3YXBVc2VyIiwiX3VzZXIiLCJpcyIsImFsaWFzIiwicHViIiwiYWRkTGlzdGluZyIsInBheWxvYWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRMaXN0aW5ncyIsInYiLCJrIiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInNob3J0ZW5IZXgiLCJoZXgiLCJzdWJzdHJpbmciLCJDSEFJTl9JRF9OQU1FUyIsIklORlVSQV9QUkVGSVhFUyIsIkV4cGxvcmVyVFhUeXBlIiwiRVhQTE9SRVJfUFJFRklYRVMiLCJORVRXT1JLX1NIT1JUTkFNRVMiLCJmb3JtYXRFdGhlcnNjYW5MaW5rIiwidHlwZSIsImRhdGEiLCJBY2NvdW50IiwiY2hhaW5JZCIsImFkZHJlc3MiLCJUb2tlbkJhbGFuY2UiLCJ0b2tlbiIsIlRyYW5zYWN0aW9uIiwiaGFzaCIsIlRva2VuIiwiU0FJIiwiQ2hhaW5JZCIsIk1BSU5ORVQiLCJnZXRUb2tlbkRpc3BsYXlWYWx1ZSIsImVxdWFscyIsIldFVEgiLCJzeW1ib2wiLCJnZXRQZXJjZW50Q2hhbmdlIiwicmVmZXJlbmNlUmF0ZSIsIm5ld1JhdGUiLCJmbGlwT3JkZXIiLCJkaWZmZXJlbmNlIiwiRnJhY3Rpb24iLCJKU0JJIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImFkanVzdGVkIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJwZXJjZW50Q2hhbmdlIiwiaW52ZXJ0IiwiUGVyY2VudCIsImZvcm1hdFF1ZXJ5UGFyYW1zIiwicGFyYW1zIiwiZm9ybWF0dGVkIiwiam9pbiIsInZhbGlkSW1hZ2UiLCJpbmNsdWRlcyIsImlzRVRIQWRkcmVzcyIsImlzQWRkcmVzcyIsInRvQ29udHJhY3RWYWx1ZSIsImFtb3VudCIsImRlY2ltYWwiLCJ0b1dlaSIsImZyb21Db250cmFjdFZhbHVlIiwiTnVtYmVyIiwiZnJvbVdlaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBR0MsMENBQUcsQ0FBQyxDQUFDLG1DQUFELEVBQXNDLDJCQUF0QyxDQUFELENBQWY7QUFFQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7QUFDQSxJQUFNQyxrQkFBa0IsbUJBQXhCOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxFQUExQixFQUE4QjtBQUM1Qk4sS0FBRyxDQUFDTyxHQUFKLENBQVFGLElBQUksR0FBRyxHQUFmLEVBQW9CLFVBQVNHLEdBQVQsRUFBYTtBQUMvQixRQUFHLENBQUNBLEdBQUcsQ0FBQ0MsR0FBUixFQUFZO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxhQUFPTCxFQUFFLENBQUMsRUFBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsYUFBT0EsRUFBRSxDQUFDRSxHQUFHLENBQUNDLEdBQUwsQ0FBVDtBQUNEO0FBQ0YsR0FQRDtBQVNEOztBQUVELFNBQVNHLGdCQUFULENBQTBCUCxJQUExQixFQUFxQztBQUNuQyxTQUFPTCxHQUFHLENBQUNPLEdBQUosQ0FBUUYsSUFBSSxHQUFHLEdBQWYsQ0FBUDtBQUNEOztBQUVELFNBQVNRLG1CQUFULENBQTZCQyxVQUE3QixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFDL0MsU0FBT0MsTUFB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O0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRjtBQUVNLFNBQVNDLFlBQVQsQ0FBc0JsQyxPQUF0QixFQUF1QztBQUM1QyxTQUFPbUMsNERBQVMsQ0FBQ25DLE9BQUQsQ0FBaEI7QUFDRDtBQUVNLFNBQVNvQyxlQUFULENBQXlCQyxNQUF6QixFQUFxQ0MsT0FBckMsRUFBZ0U7QUFDckUsU0FBT0Msd0RBQUssQ0FBQ0YsTUFBRCxFQUFTQyxPQUFULENBQVo7QUFDRDtBQUVNLFNBQVNFLGlCQUFULENBQTJCSCxNQUEzQixFQUFnREMsT0FBaEQsRUFBb0Y7QUFDekYsU0FBT0csTUFBTSxDQUFDQywwREFBTyxDQUFDTCxNQUFELEVBQVNDLE9BQVQsQ0FBUixDQUFiO0FBQ0QiLCJmaWxlIjoiLi91dGlscy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L2JpZ251bWJlcidcbmltcG9ydCB7IEpTQkksIEZyYWN0aW9uLCBQZXJjZW50LCBQcmljZSwgVG9rZW4sIFdFVEgsIENoYWluSWQgfSBmcm9tICdAdW5pc3dhcC9zZGsnXG5pbXBvcnQgQk4gZnJvbSAnYm4uanMnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBpc0FkZHJlc3MsIHRvV2VpLCBmcm9tV2VpLCBVbml0IH0gZnJvbSAnd2ViMy11dGlscydcbmltcG9ydCBHdW4gZnJvbSAnZ3VuJztcbmltcG9ydCB7IGlzSVBGUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuY29uc3QgZ3VuID0gR3VuKFsnaHR0cHM6Ly9tdnAtZ3VuLmhlcm9rdWFwcC5jb20vZ3VuJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nXSlcblxuY29uc3QgU1dBUF9VU0VSX1BBVEggPSAnZXYtc3dhcDI4J1xuY29uc3QgU1dBUF9MSVNUSU5HU19QQVRIID0gYGxpc3RpbmdzLXRlc3Q3YFxuXG5mdW5jdGlvbiBnZXRGcm9tR3VuKHBhdGgsIGNiKSB7ICBcbiAgZ3VuLmdldChwYXRoICsgJy8nLCBmdW5jdGlvbihhY2spe1xuICAgIGlmKCFhY2sucHV0KXtcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgRm91bmQnKVxuICAgICAgcmV0dXJuIGNiKHt9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2IoYWNrLnB1dClcbiAgICB9XG4gIH0pXG4gIFxufVxuXG5mdW5jdGlvbiBnZXRGcm9tR3VuT2JqZWN0KHBhdGgpOiBhbnkge1xuICByZXR1cm4gZ3VuLmdldChwYXRoICsgJy8nKVxufVxuXG5mdW5jdGlvbiB3aXRoaW5HdW5Db2xsZWN0aW9uKGNvbGxlY3Rpb24sIG5lZWRsZSkge1xuICByZXR1cm4gYXNMaXN0KGNvbGxlY3Rpb24pLmZpbHRlcihpdGVtPT57cmV0dXJuIGl0ZW0uaWQgPT0gbmVlZGxlfSkubGVuZ3RoID4gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNMaXN0KGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IFwiaWRcIjoga2V5LCBcInZhbFwiOiBjb2xsZWN0aW9uW2tleV0gfSB9KS5maWx0ZXIoaXRlbSA9PiB7IHJldHVybiBpdGVtLnZhbCAhPSBcIlwiICYmIGl0ZW0uaWQgIT0gXCJfXCIgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN3YXBVc2VycyhfYXNMaXN0LCBjYikge1xuICBnZXRGcm9tR3VuKFNXQVBfVVNFUl9QQVRILCB1c2Vycz0+e1xuICAgIGlmIChfYXNMaXN0KSB7XG4gICAgICByZXR1cm4gY2IoYXNMaXN0KHVzZXJzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNiKHVzZXJzKVxuICAgIH0gICAgXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTd2FwVXNlcihfdXNlciwgY2IpIHtcbiAgY29uc29sZS5sb2coX3VzZXIpXG4gIGdldFN3YXBVc2VycyhmYWxzZSwgdXNlcnM9PntcbiAgICBpZiAoIXdpdGhpbkd1bkNvbGxlY3Rpb24odXNlcnMsIF91c2VyLmlzLmFsaWFzKSkge1xuICAgICAgZ2V0RnJvbUd1bk9iamVjdChTV0FQX1VTRVJfUEFUSCkuZ2V0KF91c2VyLmlzLmFsaWFzKS5wdXQoX3VzZXIuaXMucHViLCAoKT0+e1xuICAgICAgICByZXR1cm4gYWRkU3dhcFVzZXIoX3VzZXIsIGNiKVxuICAgICAgfSk7ICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYihhc0xpc3QodXNlcnMpKVxuICAgIH0gICAgXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0aW5nKF91c2VyLCBwYXlsb2FkLCBjYikge1xuICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0Mjk0OTY3Mjk2KTtcbiAgY29uc29sZS5sb2coX3VzZXIpXG4gIF91c2VyLmdldChTV0FQX0xJU1RJTkdTX1BBVEgpLmdldChpZCkucHV0KHtpZDogaWQsIHBheWxvYWQ6IHBheWxvYWR9KS8vLCAocmVzdWx0KT0+e1xuICAvLyBfdXNlci5nZXQoU1dBUF9MSVNUSU5HU19QQVRIKS5tYXAoKS52YWwoKGssdik9Pntjb25zb2xlLmxvZyhrLHYpfSlcbiAgLy8gICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICAvLyAgIGdldExpc3RpbmdzKF91c2VyLmlzLmFsaWFzLCBsaXN0aW5ncz0+e1xuICAvLyAgICAgLy8gY29uc29sZS5sb2coJ2xpc3RpbmdzJywgbGlzdGluZ3MpXG4gIC8vICAgICByZXR1cm4gY2IobGlzdGluZ3MpXG4gIC8vICAgfSlcbiAgLy8gfSlcbiAgXG4gIHJldHVybiBjYih0cnVlKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0aW5ncyhfdXNlciwgY2IpIHtcbiAgX3VzZXIuZ2V0KFNXQVBfTElTVElOR1NfUEFUSCkubWFwKCkudmFsKCh2LGspPT57XG4gICAgcmV0dXJuIGNiKHtrLHZ9KVxuICB9KVxufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMjRXNjYXBpbmdcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG9ydGVuSGV4KGhleDogc3RyaW5nLCBsZW5ndGggPSA0KTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2hleC5zdWJzdHJpbmcoMCwgbGVuZ3RoICsgMil94oCmJHtoZXguc3Vic3RyaW5nKGhleC5sZW5ndGggLSBsZW5ndGgpfWBcbn1cblxuZXhwb3J0IGNvbnN0IENIQUlOX0lEX05BTUVTOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAxOiAnRXRoZXJldW0gTWFpbm5ldCcsXG4gIDM6ICdSb3BzdGVuJyxcbiAgNDogJ1JpbmtlYnknLFxuICA1OiAnR8O2cmxpJyxcbiAgNDI6ICdLb3ZhbicsXG4gIDgwMDAxOiAnTXVtYmFpJyxcbiAgMTM3OiAnUG9seWdvbicsXG4gIDk3OiAnYm5ic2MnLFxuICAxMDA6ICd4RGFpJyxcbiAgNTY6ICdCaW5hbmNlIFNtYXJ0IENoYWluJyxcbiAgMjUwOiAnRmFudG9tJ1xufVxuXG5leHBvcnQgY29uc3QgSU5GVVJBX1BSRUZJWEVTOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAxOiAnbWFpbm5ldCcsXG4gIDM6ICdyb3BzdGVuJyxcbiAgNDogJ3JpbmtlYnknLFxuICA1OiAnZ29lcmxpJyxcbiAgNDI6ICdrb3ZhbicsXG4gIDgwMDAxOiAnbXVtYmFpJyxcbiAgMTM3OiAnbWF0aWMnLFxuICA5NzogJ2JuYnNjJyxcbiAgMTAwOiAneGRhaScsXG4gIDU2OiAnYnNjJyxcbiAgMjUwOiAnZmFudG9tJ1xufVxuXG5leHBvcnQgZW51bSBFeHBsb3JlclRYVHlwZSB7XG4gIEFjY291bnQsXG4gIFRva2VuQmFsYW5jZSxcbiAgVHJhbnNhY3Rpb24sXG4gIFRva2VuXG59XG5cbmV4cG9ydCBjb25zdCBFWFBMT1JFUl9QUkVGSVhFUzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgMTogJ2V0aGVyc2Nhbi5pbycsXG4gIDM6ICdyb3BzdGVuLmV0aGVyc2Nhbi5pbycsXG4gIDQ6ICdyaW5rZWJ5LmV0aGVyc2Nhbi5pbycsXG4gIDU6ICdnb2VybGkuJyxcbiAgNDI6ICdrb3Zhbi4nLFxuICA4MDAwMTogJ211bWJhaS1leHBsb3Jlci5tYXRpYy50b2RheScsXG4gIDEzNzogJ3BvbHlnb25zY2FuLmNvbScsXG4gIDk3OiAnYm5ic2MnLFxuICAxMDA6ICdibG9ja3Njb3V0LmNvbS94ZGFpL21haW5uZXQnLFxuICA1NjogJ2JzY3NjYW4uY29tJyxcbiAgMjUwOiAnZnRtc2Nhbi5jb20nXG59XG5cbmV4cG9ydCBjb25zdCBORVRXT1JLX1NIT1JUTkFNRVM6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDE6ICdldGgnLFxuICAzOiAncm9wc3RlbicsXG4gIDQ6ICdyaW5rZWJ5JyxcbiAgNTogJ2dvZXJsaScsXG4gIDQyOiAna292YW4nLFxuICA4MDAwMTogJ211bWJhaScsXG4gIDEzNzogJ21hdGljJyxcbiAgOTc6ICdic2N0ZXN0JyxcbiAgMTAwOiAneGRhaScsXG4gIDU2OiAnYnNjJyxcbiAgMjUwOiAnZmFudG9tJ1xufVxuXG5pbnRlcmZhY2UgRXhwbG9yZXJUeXBlRGF0YSB7XG4gIFtFeHBsb3JlclRYVHlwZS5BY2NvdW50XTogW251bWJlciwgc3RyaW5nXVxuICBbRXhwbG9yZXJUWFR5cGUuVG9rZW5CYWxhbmNlXTogW1Rva2VuLCBzdHJpbmddXG4gIFtFeHBsb3JlclRYVHlwZS5UcmFuc2FjdGlvbl06IFtudW1iZXIsIHN0cmluZ11cbiAgW0V4cGxvcmVyVFhUeXBlLlRva2VuXTogW251bWJlciwgc3RyaW5nXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXRoZXJzY2FuTGluayh0eXBlOiBFeHBsb3JlclRYVHlwZSwgZGF0YTogRXhwbG9yZXJUeXBlRGF0YVtFeHBsb3JlclRYVHlwZV0pOiBzdHJpbmcge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEV4cGxvcmVyVFhUeXBlLkFjY291bnQ6IHtcbiAgICAgIGNvbnN0IFtjaGFpbklkLCBhZGRyZXNzXSA9IGRhdGEgYXMgRXhwbG9yZXJUeXBlRGF0YVtFeHBsb3JlclRYVHlwZS5BY2NvdW50XVxuICAgICAgcmV0dXJuIGBodHRwczovLyR7RVhQTE9SRVJfUFJFRklYRVNbY2hhaW5JZF19L2FkZHJlc3MvJHthZGRyZXNzfWBcbiAgICB9XG4gICAgY2FzZSBFeHBsb3JlclRYVHlwZS5Ub2tlbkJhbGFuY2U6IHtcbiAgICAgIGNvbnN0IFt0b2tlbiwgYWRkcmVzc10gPSBkYXRhIGFzIEV4cGxvcmVyVHlwZURhdGFbRXhwbG9yZXJUWFR5cGUuVG9rZW5CYWxhbmNlXVxuICAgICAgcmV0dXJuIGBodHRwczovLyR7RVhQTE9SRVJfUFJFRklYRVNbdG9rZW4uY2hhaW5JZF19L3Rva2VuLyR7dG9rZW4uYWRkcmVzc30/YT0ke2FkZHJlc3N9YFxuICAgIH1cbiAgICBjYXNlIEV4cGxvcmVyVFhUeXBlLlRyYW5zYWN0aW9uOiB7XG4gICAgICBjb25zdCBbY2hhaW5JZCwgaGFzaF0gPSBkYXRhIGFzIEV4cGxvcmVyVHlwZURhdGFbRXhwbG9yZXJUWFR5cGUuVHJhbnNhY3Rpb25dXG4gICAgICByZXR1cm4gYGh0dHBzOi8vJHtFWFBMT1JFUl9QUkVGSVhFU1tjaGFpbklkXX0vdHgvJHtoYXNofWBcbiAgICB9XG4gICAgY2FzZSBFeHBsb3JlclRYVHlwZS5Ub2tlbjoge1xuICAgICAgY29uc3QgW2NoYWluSWQsIGhhc2hdID0gZGF0YSBhcyBFeHBsb3JlclR5cGVEYXRhW0V4cGxvcmVyVFhUeXBlLlRyYW5zYWN0aW9uXVxuICAgICAgcmV0dXJuIGBodHRwczovLyR7RVhQTE9SRVJfUFJFRklYRVNbY2hhaW5JZF19L3Rva2VuLyR7aGFzaH1gXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFNBSSA9IG5ldyBUb2tlbihDaGFpbklkLk1BSU5ORVQsICcweDg5ZDI0QTZiNENjQjFCNmZBQTI2MjVmRTU2MmJERDlhMjMyNjAzNTknLCAxOClcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkRpc3BsYXlWYWx1ZSh0b2tlbjogVG9rZW4pOiBzdHJpbmcge1xuICByZXR1cm4gdG9rZW4uZXF1YWxzKFdFVEhbdG9rZW4uY2hhaW5JZF0pID8gJ0VUSCcgOiB0b2tlbi5lcXVhbHMoU0FJKSA/ICdTQUknIDogdG9rZW4uc3ltYm9sID8/ICdVTktOT1dOJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudENoYW5nZShyZWZlcmVuY2VSYXRlOiBQcmljZSwgbmV3UmF0ZTogUHJpY2UsIGZsaXBPcmRlciA9IGZhbHNlKTogUGVyY2VudCB7XG4gIC8vIGNhbGN1bGF0ZSAocmVmZXJlbmNlUmF0ZSAtIG5ld1JhdGUpIC8gcmVmZXJlbmNlUmF0ZSBvciAobmV3UmF0ZSAtIHJlZmVyZW5jZVJhdGUpIC8gcmVmZXJlbmNlUmF0ZVxuICBjb25zdCBkaWZmZXJlbmNlID0gbmV3IEZyYWN0aW9uKFxuICAgIGZsaXBPcmRlclxuICAgICAgPyBKU0JJLnN1YnRyYWN0KFxuICAgICAgICAgIEpTQkkubXVsdGlwbHkobmV3UmF0ZS5hZGp1c3RlZC5udW1lcmF0b3IsIHJlZmVyZW5jZVJhdGUuYWRqdXN0ZWQuZGVub21pbmF0b3IpLFxuICAgICAgICAgIEpTQkkubXVsdGlwbHkocmVmZXJlbmNlUmF0ZS5hZGp1c3RlZC5udW1lcmF0b3IsIG5ld1JhdGUuYWRqdXN0ZWQuZGVub21pbmF0b3IpXG4gICAgICAgIClcbiAgICAgIDogSlNCSS5zdWJ0cmFjdChcbiAgICAgICAgICBKU0JJLm11bHRpcGx5KHJlZmVyZW5jZVJhdGUuYWRqdXN0ZWQubnVtZXJhdG9yLCBuZXdSYXRlLmFkanVzdGVkLmRlbm9taW5hdG9yKSxcbiAgICAgICAgICBKU0JJLm11bHRpcGx5KG5ld1JhdGUuYWRqdXN0ZWQubnVtZXJhdG9yLCByZWZlcmVuY2VSYXRlLmFkanVzdGVkLmRlbm9taW5hdG9yKVxuICAgICAgICApLFxuICAgIEpTQkkubXVsdGlwbHkocmVmZXJlbmNlUmF0ZS5hZGp1c3RlZC5kZW5vbWluYXRvciwgbmV3UmF0ZS5hZGp1c3RlZC5kZW5vbWluYXRvcilcbiAgKVxuICBjb25zdCBwZXJjZW50Q2hhbmdlID0gZGlmZmVyZW5jZS5tdWx0aXBseShyZWZlcmVuY2VSYXRlLmFkanVzdGVkLmludmVydCgpKVxuICByZXR1cm4gbmV3IFBlcmNlbnQocGVyY2VudENoYW5nZS5udW1lcmF0b3IsIHBlcmNlbnRDaGFuZ2UuZGVub21pbmF0b3IpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRRdWVyeVBhcmFtcyhwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBzdHJpbmcge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgLm1hcCgoa2V5KSA9PiBgJHtrZXl9PSR7cGFyYW1zW2tleV19YClcbiAgICAuam9pbignJicpXG4gIHJldHVybiBmb3JtYXR0ZWQgPT09ICcnID8gZm9ybWF0dGVkIDogYD8ke2Zvcm1hdHRlZH1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZEltYWdlKGRhdGE6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGlmIChkYXRhICYmIChkYXRhLmluY2x1ZGVzKCdodHRwJykgfHwgZGF0YS5pbmNsdWRlcygnZGF0YTppbWFnZScpKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRVRIQWRkcmVzcyhhZGRyZXNzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGlzQWRkcmVzcyhhZGRyZXNzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Db250cmFjdFZhbHVlKGFtb3VudDogQk4sIGRlY2ltYWw6IFVuaXQgfCB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIHRvV2VpKGFtb3VudCwgZGVjaW1hbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Db250cmFjdFZhbHVlKGFtb3VudDogc3RyaW5nIHwgQk4sIGRlY2ltYWw6IFVuaXQgfCB1bmRlZmluZWQpIDogbnVtYmVyIHtcbiAgcmV0dXJuIE51bWJlcihmcm9tV2VpKGFtb3VudCwgZGVjaW1hbCkpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils.ts\n");

/***/ })

})