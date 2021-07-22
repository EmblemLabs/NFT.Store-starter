webpackHotUpdate_N_E("pages/main",{

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: getGun, asList, getSwapUsers, addSwapUser, addListing, getListings, getRemoteGunPaths, escapeRegExp, shortenHex, CHAIN_ID_NAMES, INFURA_PREFIXES, ExplorerTXType, EXPLORER_PREFIXES, NETWORK_SHORTNAMES, formatEtherscanLink, getTokenDisplayValue, getPercentChange, formatQueryParams, validImage, isETHAddress, toContractValue, fromContractValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGun\", function() { return getGun; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asList\", function() { return asList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSwapUsers\", function() { return getSwapUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSwapUser\", function() { return addSwapUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListing\", function() { return addListing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListings\", function() { return getListings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRemoteGunPaths\", function() { return getRemoteGunPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeRegExp\", function() { return escapeRegExp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortenHex\", function() { return shortenHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHAIN_ID_NAMES\", function() { return CHAIN_ID_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INFURA_PREFIXES\", function() { return INFURA_PREFIXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExplorerTXType\", function() { return ExplorerTXType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPLORER_PREFIXES\", function() { return EXPLORER_PREFIXES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NETWORK_SHORTNAMES\", function() { return NETWORK_SHORTNAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatEtherscanLink\", function() { return formatEtherscanLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTokenDisplayValue\", function() { return getTokenDisplayValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercentChange\", function() { return getPercentChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatQueryParams\", function() { return formatQueryParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validImage\", function() { return validImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isETHAddress\", function() { return isETHAddress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toContractValue\", function() { return toContractValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromContractValue\", function() { return fromContractValue; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uniswap/sdk */ \"./node_modules/@uniswap/sdk/dist/sdk.esm.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3-utils */ \"./node_modules/web3-utils/lib/index.js\");\n/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gun */ \"../../../node_modules/gun/browser.js\");\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gun/sea */ \"../../../node_modules/gun/sea.js\");\n/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gun_sea__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar gun = gun__WEBPACK_IMPORTED_MODULE_5___default()(['https://emblem-gun.herokuapp.com/gun']);\nvar API = 'https://gun-api-ev.herokuapp.com';\nfunction getGun() {\n  return gun;\n}\nvar SWAP_USER_PATH = 'ev-swap40';\nvar SWAP_LISTINGS_PATH = \"listings-test10\";\n\nfunction getFromGun(path, cb) {\n  gun.get(path + '/', function (ack) {\n    if (!ack.put) {\n      console.log('Not Found');\n      return cb({});\n    } else {\n      return cb(ack.put);\n    }\n  });\n}\n\nconsole.log(\"In Utils!!! does this exec?\");\n\nfunction getFromGunObject(path) {\n  return gun.get(path + '/');\n}\n\nfunction withinGunCollection(collection, needle) {\n  return asList(collection).filter(function (item) {\n    return item.id == needle;\n  }).length > 0;\n}\n\nfunction asList(collection) {\n  return Object.keys(collection).map(function (key) {\n    return {\n      \"id\": key,\n      \"val\": collection[key]\n    };\n  }).filter(function (item) {\n    return item.val != \"\" && item.id != \"_\";\n  });\n}\nfunction getSwapUsers(_asList, cb) {\n  getFromGun(SWAP_USER_PATH, function (users) {\n    if (_asList) {\n      return cb(asList(users));\n    } else {\n      return cb(users);\n    }\n  });\n}\nfunction addSwapUser(_user, cb) {\n  console.log(_user);\n  getSwapUsers(false, function (users) {\n    if (!withinGunCollection(users, _user.is.alias)) {\n      getFromGunObject(SWAP_USER_PATH).get(_user.is.alias).put(_user.is.pub, function () {\n        return addSwapUser(_user, cb);\n      });\n    } else {\n      return cb(asList(users));\n    }\n  });\n}\nfunction addListing(_user, payload, cb) {\n  var id = Math.floor(Math.random() * 4294967296);\n  console.log(_user);\n\n  _user.get(SWAP_LISTINGS_PATH).get(id).put({\n    id: id,\n    payload: payload\n  });\n\n  return cb(true);\n}\nfunction getListings(_user, cb) {\n  _user.get(SWAP_LISTINGS_PATH).map().val(function (v, k) {\n    return cb({\n      k: k,\n      v: v\n    });\n  });\n}\nfunction getRemoteGunPaths(_x) {\n  return _getRemoteGunPaths.apply(this, arguments);\n} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping\n\nfunction _getRemoteGunPaths() {\n  _getRemoteGunPaths = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cb) {\n    var response, jsonData;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(API + '/path', {\n              method: 'GET',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            jsonData = _context.sent;\n            return _context.abrupt(\"return\", cb(jsonData));\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getRemoteGunPaths.apply(this, arguments);\n}\n\nfunction escapeRegExp(string) {\n  return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'); // $& means the whole matched string\n}\nfunction shortenHex(hex) {\n  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;\n  return \"\".concat(hex.substring(0, length + 2), \"\\u2026\").concat(hex.substring(hex.length - length));\n}\nvar CHAIN_ID_NAMES = {\n  1: 'Ethereum Mainnet',\n  3: 'Ropsten',\n  4: 'Rinkeby',\n  5: 'Görli',\n  42: 'Kovan',\n  80001: 'Mumbai',\n  137: 'Polygon',\n  97: 'bnbsc',\n  100: 'xDai',\n  56: 'Binance Smart Chain',\n  250: 'Fantom'\n};\nvar INFURA_PREFIXES = {\n  1: 'mainnet',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  80001: 'mumbai',\n  137: 'matic',\n  97: 'bnbsc',\n  100: 'xdai',\n  56: 'bsc',\n  250: 'fantom'\n};\nvar ExplorerTXType;\n\n(function (ExplorerTXType) {\n  ExplorerTXType[ExplorerTXType[\"Account\"] = 0] = \"Account\";\n  ExplorerTXType[ExplorerTXType[\"TokenBalance\"] = 1] = \"TokenBalance\";\n  ExplorerTXType[ExplorerTXType[\"Transaction\"] = 2] = \"Transaction\";\n  ExplorerTXType[ExplorerTXType[\"Token\"] = 3] = \"Token\";\n})(ExplorerTXType || (ExplorerTXType = {}));\n\nvar EXPLORER_PREFIXES = {\n  1: 'etherscan.io',\n  3: 'ropsten.etherscan.io',\n  4: 'rinkeby.etherscan.io',\n  5: 'goerli.',\n  42: 'kovan.',\n  80001: 'mumbai-explorer.matic.today',\n  137: 'polygonscan.com',\n  97: 'bnbsc',\n  100: 'blockscout.com/xdai/mainnet',\n  56: 'bscscan.com',\n  250: 'ftmscan.com'\n};\nvar NETWORK_SHORTNAMES = {\n  1: 'eth',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  80001: 'mumbai',\n  137: 'matic',\n  97: 'bsctest',\n  100: 'xdai',\n  56: 'bsc',\n  250: 'fantom'\n};\nfunction formatEtherscanLink(type, data) {\n  switch (type) {\n    case ExplorerTXType.Account:\n      {\n        var _ref = data,\n            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n            chainId = _ref2[0],\n            address = _ref2[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[chainId], \"/address/\").concat(address);\n      }\n\n    case ExplorerTXType.TokenBalance:\n      {\n        var _ref3 = data,\n            _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, 2),\n            token = _ref4[0],\n            _address = _ref4[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[token.chainId], \"/token/\").concat(token.address, \"?a=\").concat(_address);\n      }\n\n    case ExplorerTXType.Transaction:\n      {\n        var _ref5 = data,\n            _ref6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref5, 2),\n            _chainId = _ref6[0],\n            hash = _ref6[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[_chainId], \"/tx/\").concat(hash);\n      }\n\n    case ExplorerTXType.Token:\n      {\n        var _ref7 = data,\n            _ref8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref7, 2),\n            _chainId2 = _ref8[0],\n            _hash = _ref8[1];\n\n        return \"https://\".concat(EXPLORER_PREFIXES[_chainId2], \"/token/\").concat(_hash);\n      }\n  }\n}\nvar SAI = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Token\"](_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"ChainId\"].MAINNET, '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359', 18);\nfunction getTokenDisplayValue(token) {\n  var _token$symbol;\n\n  return token.equals(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"WETH\"][token.chainId]) ? 'ETH' : token.equals(SAI) ? 'SAI' : (_token$symbol = token.symbol) !== null && _token$symbol !== void 0 ? _token$symbol : 'UNKNOWN';\n}\nfunction getPercentChange(referenceRate, newRate) {\n  var flipOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  // calculate (referenceRate - newRate) / referenceRate or (newRate - referenceRate) / referenceRate\n  var difference = new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Fraction\"](flipOrder ? _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].subtract(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator)) : _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].subtract(_uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator)), _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"JSBI\"].multiply(referenceRate.adjusted.denominator, newRate.adjusted.denominator));\n  var percentChange = difference.multiply(referenceRate.adjusted.invert());\n  return new _uniswap_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Percent\"](percentChange.numerator, percentChange.denominator);\n}\nfunction formatQueryParams(params) {\n  var formatted = Object.keys(params).map(function (key) {\n    return \"\".concat(key, \"=\").concat(params[key]);\n  }).join('&');\n  return formatted === '' ? formatted : \"?\".concat(formatted);\n}\nfunction validImage(data) {\n  if (data && (data.includes('http') || data.includes('data:image'))) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction isETHAddress(address) {\n  return Object(web3_utils__WEBPACK_IMPORTED_MODULE_4__[\"isAddress\"])(address);\n}\nfunction toContractValue(amount, decimal) {\n  return Object(web3_utils__WEBPACK_IMPORTED_MODULE_4__[\"toWei\"])(amount, decimal);\n}\nfunction fromContractValue(amount, decimal) {\n  return Number(Object(web3_utils__WEBPACK_IMPORTED_MODULE_4__[\"fromWei\"])(amount, decimal));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMudHM/ODgxMyJdLCJuYW1lcyI6WyJndW4iLCJHdW4iLCJBUEkiLCJnZXRHdW4iLCJTV0FQX1VTRVJfUEFUSCIsIlNXQVBfTElTVElOR1NfUEFUSCIsImdldEZyb21HdW4iLCJwYXRoIiwiY2IiLCJnZXQiLCJhY2siLCJwdXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0RnJvbUd1bk9iamVjdCIsIndpdGhpbkd1bkNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibmVlZGxlIiwiYXNMaXN0IiwiZmlsdGVyIiwiaXRlbSIsImlkIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbCIsImdldFN3YXBVc2VycyIsIl9hc0xpc3QiLCJ1c2VycyIsImFkZFN3YXBVc2VyIiwiX3VzZXIiLCJpcyIsImFsaWFzIiwicHViIiwiYWRkTGlzdGluZyIsInBheWxvYWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRMaXN0aW5ncyIsInYiLCJrIiwiZ2V0UmVtb3RlR3VuUGF0aHMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJqc29uRGF0YSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJzaG9ydGVuSGV4IiwiaGV4Iiwic3Vic3RyaW5nIiwiQ0hBSU5fSURfTkFNRVMiLCJJTkZVUkFfUFJFRklYRVMiLCJFeHBsb3JlclRYVHlwZSIsIkVYUExPUkVSX1BSRUZJWEVTIiwiTkVUV09SS19TSE9SVE5BTUVTIiwiZm9ybWF0RXRoZXJzY2FuTGluayIsInR5cGUiLCJkYXRhIiwiQWNjb3VudCIsImNoYWluSWQiLCJhZGRyZXNzIiwiVG9rZW5CYWxhbmNlIiwidG9rZW4iLCJUcmFuc2FjdGlvbiIsImhhc2giLCJUb2tlbiIsIlNBSSIsIkNoYWluSWQiLCJNQUlOTkVUIiwiZ2V0VG9rZW5EaXNwbGF5VmFsdWUiLCJlcXVhbHMiLCJXRVRIIiwic3ltYm9sIiwiZ2V0UGVyY2VudENoYW5nZSIsInJlZmVyZW5jZVJhdGUiLCJuZXdSYXRlIiwiZmxpcE9yZGVyIiwiZGlmZmVyZW5jZSIsIkZyYWN0aW9uIiwiSlNCSSIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJhZGp1c3RlZCIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicGVyY2VudENoYW5nZSIsImludmVydCIsIlBlcmNlbnQiLCJmb3JtYXRRdWVyeVBhcmFtcyIsInBhcmFtcyIsImZvcm1hdHRlZCIsImpvaW4iLCJ2YWxpZEltYWdlIiwiaW5jbHVkZXMiLCJpc0VUSEFkZHJlc3MiLCJpc0FkZHJlc3MiLCJ0b0NvbnRyYWN0VmFsdWUiLCJhbW91bnQiLCJkZWNpbWFsIiwidG9XZWkiLCJmcm9tQ29udHJhY3RWYWx1ZSIsIk51bWJlciIsImZyb21XZWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUlBLElBQU1BLEdBQUcsR0FBR0MsMENBQUcsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBZjtBQUNBLElBQUlDLEdBQUcsR0FBRyxrQ0FBVjtBQUVPLFNBQVNDLE1BQVQsR0FBa0I7QUFDdkIsU0FBT0gsR0FBUDtBQUNEO0FBRUQsSUFBTUksY0FBYyxHQUFHLFdBQXZCO0FBQ0EsSUFBTUMsa0JBQWtCLG9CQUF4Qjs7QUFHQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQkMsRUFBMUIsRUFBOEI7QUFDNUJSLEtBQUcsQ0FBQ1MsR0FBSixDQUFRRixJQUFJLEdBQUcsR0FBZixFQUFvQixVQUFTRyxHQUFULEVBQWE7QUFDL0IsUUFBRyxDQUFDQSxHQUFHLENBQUNDLEdBQVIsRUFBWTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsYUFBT0wsRUFBRSxDQUFDLEVBQUQsQ0FBVDtBQUNELEtBSEQsTUFHTztBQUNMLGFBQU9BLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDQyxHQUFMLENBQVQ7QUFDRDtBQUNGLEdBUEQ7QUFR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fSBmcm9tICdAZXRoZXJzcHJvamVjdC9iaWdudW1iZXInXG5pbXBvcnQgeyBKU0JJLCBGcmFjdGlvbiwgUGVyY2VudCwgUHJpY2UsIFRva2VuLCBXRVRILCBDaGFpbklkIH0gZnJvbSAnQHVuaXN3YXAvc2RrJ1xuaW1wb3J0IEJOIGZyb20gJ2JuLmpzJ1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgaXNBZGRyZXNzLCB0b1dlaSwgZnJvbVdlaSwgVW5pdCB9IGZyb20gJ3dlYjMtdXRpbHMnXG5cbmltcG9ydCBHdW4gZnJvbSAnZ3VuJztcbmltcG9ydCAnZ3VuL3NlYSdcblxuaW1wb3J0IHsgaXNJUEZTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IGd1biA9IEd1bihbJ2h0dHBzOi8vZW1ibGVtLWd1bi5oZXJva3VhcHAuY29tL2d1biddKVxubGV0IEFQSSA9ICdodHRwczovL2d1bi1hcGktZXYuaGVyb2t1YXBwLmNvbSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEd1bigpIHtcbiAgcmV0dXJuIGd1blxufVxuXG5jb25zdCBTV0FQX1VTRVJfUEFUSCA9ICdldi1zd2FwNDAnXG5jb25zdCBTV0FQX0xJU1RJTkdTX1BBVEggPSBgbGlzdGluZ3MtdGVzdDEwYFxuXG5cbmZ1bmN0aW9uIGdldEZyb21HdW4ocGF0aCwgY2IpIHsgIFxuICBndW4uZ2V0KHBhdGggKyAnLycsIGZ1bmN0aW9uKGFjayl7XG4gICAgaWYoIWFjay5wdXQpe1xuICAgICAgY29uc29sZS5sb2coJ05vdCBGb3VuZCcpXG4gICAgICByZXR1cm4gY2Ioe30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYihhY2sucHV0KVxuICAgIH1cbiAgfSkgIFxufVxuXG5jb25zb2xlLmxvZyhcIkluIFV0aWxzISEhIGRvZXMgdGhpcyBleGVjP1wiKVxuXG5mdW5jdGlvbiBnZXRGcm9tR3VuT2JqZWN0KHBhdGgpOiBhbnkge1xuICByZXR1cm4gZ3VuLmdldChwYXRoICsgJy8nKVxufVxuXG5mdW5jdGlvbiB3aXRoaW5HdW5Db2xsZWN0aW9uKGNvbGxlY3Rpb24sIG5lZWRsZSkge1xuICByZXR1cm4gYXNMaXN0KGNvbGxlY3Rpb24pLmZpbHRlcihpdGVtPT57cmV0dXJuIGl0ZW0uaWQgPT0gbmVlZGxlfSkubGVuZ3RoID4gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNMaXN0KGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IFwiaWRcIjoga2V5LCBcInZhbFwiOiBjb2xsZWN0aW9uW2tleV0gfSB9KS5maWx0ZXIoaXRlbSA9PiB7IHJldHVybiBpdGVtLnZhbCAhPSBcIlwiICYmIGl0ZW0uaWQgIT0gXCJfXCIgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN3YXBVc2VycyhfYXNMaXN0LCBjYikge1xuICBnZXRGcm9tR3VuKFNXQVBfVVNFUl9QQVRILCB1c2Vycz0+e1xuICAgIGlmIChfYXNMaXN0KSB7XG4gICAgICByZXR1cm4gY2IoYXNMaXN0KHVzZXJzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNiKHVzZXJzKVxuICAgIH0gICAgXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTd2FwVXNlcihfdXNlciwgY2IpIHtcbiAgY29uc29sZS5sb2coX3VzZXIpXG4gIGdldFN3YXBVc2VycyhmYWxzZSwgdXNlcnM9PntcbiAgICBpZiAoIXdpdGhpbkd1bkNvbGxlY3Rpb24odXNlcnMsIF91c2VyLmlzLmFsaWFzKSkge1xuICAgICAgZ2V0RnJvbUd1bk9iamVjdChTV0FQX1VTRVJfUEFUSCkuZ2V0KF91c2VyLmlzLmFsaWFzKS5wdXQoX3VzZXIuaXMucHViLCAoKT0+e1xuICAgICAgICByZXR1cm4gYWRkU3dhcFVzZXIoX3VzZXIsIGNiKVxuICAgICAgfSk7ICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYihhc0xpc3QodXNlcnMpKVxuICAgIH0gICAgXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0aW5nKF91c2VyLCBwYXlsb2FkLCBjYikge1xuICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0Mjk0OTY3Mjk2KTtcbiAgY29uc29sZS5sb2coX3VzZXIpXG4gIF91c2VyLmdldChTV0FQX0xJU1RJTkdTX1BBVEgpLmdldChpZCkucHV0KHtpZDogaWQsIHBheWxvYWQ6IHBheWxvYWR9KSBcbiAgcmV0dXJuIGNiKHRydWUpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RpbmdzKF91c2VyLCBjYikge1xuICBfdXNlci5nZXQoU1dBUF9MSVNUSU5HU19QQVRIKS5tYXAoKS52YWwoKHYsayk9PntcbiAgICByZXR1cm4gY2Ioe2ssdn0pXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZW1vdGVHdW5QYXRocyhjYikgeyBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSSArICcvcGF0aCcsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBjYihqc29uRGF0YSlcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zI0VzY2FwaW5nXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpIC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbkhleChoZXg6IHN0cmluZywgbGVuZ3RoID0gNCk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtoZXguc3Vic3RyaW5nKDAsIGxlbmd0aCArIDIpfeKApiR7aGV4LnN1YnN0cmluZyhoZXgubGVuZ3RoIC0gbGVuZ3RoKX1gXG59XG5cbmV4cG9ydCBjb25zdCBDSEFJTl9JRF9OQU1FUzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgMTogJ0V0aGVyZXVtIE1haW5uZXQnLFxuICAzOiAnUm9wc3RlbicsXG4gIDQ6ICdSaW5rZWJ5JyxcbiAgNTogJ0fDtnJsaScsXG4gIDQyOiAnS292YW4nLFxuICA4MDAwMTogJ011bWJhaScsXG4gIDEzNzogJ1BvbHlnb24nLFxuICA5NzogJ2JuYnNjJyxcbiAgMTAwOiAneERhaScsXG4gIDU2OiAnQmluYW5jZSBTbWFydCBDaGFpbicsXG4gIDI1MDogJ0ZhbnRvbSdcbn1cblxuZXhwb3J0IGNvbnN0IElORlVSQV9QUkVGSVhFUzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgMTogJ21haW5uZXQnLFxuICAzOiAncm9wc3RlbicsXG4gIDQ6ICdyaW5rZWJ5JyxcbiAgNTogJ2dvZXJsaScsXG4gIDQyOiAna292YW4nLFxuICA4MDAwMTogJ211bWJhaScsXG4gIDEzNzogJ21hdGljJyxcbiAgOTc6ICdibmJzYycsXG4gIDEwMDogJ3hkYWknLFxuICA1NjogJ2JzYycsXG4gIDI1MDogJ2ZhbnRvbSdcbn1cblxuZXhwb3J0IGVudW0gRXhwbG9yZXJUWFR5cGUge1xuICBBY2NvdW50LFxuICBUb2tlbkJhbGFuY2UsXG4gIFRyYW5zYWN0aW9uLFxuICBUb2tlblxufVxuXG5leHBvcnQgY29uc3QgRVhQTE9SRVJfUFJFRklYRVM6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDE6ICdldGhlcnNjYW4uaW8nLFxuICAzOiAncm9wc3Rlbi5ldGhlcnNjYW4uaW8nLFxuICA0OiAncmlua2VieS5ldGhlcnNjYW4uaW8nLFxuICA1OiAnZ29lcmxpLicsXG4gIDQyOiAna292YW4uJyxcbiAgODAwMDE6ICdtdW1iYWktZXhwbG9yZXIubWF0aWMudG9kYXknLFxuICAxMzc6ICdwb2x5Z29uc2Nhbi5jb20nLFxuICA5NzogJ2JuYnNjJyxcbiAgMTAwOiAnYmxvY2tzY291dC5jb20veGRhaS9tYWlubmV0JyxcbiAgNTY6ICdic2NzY2FuLmNvbScsXG4gIDI1MDogJ2Z0bXNjYW4uY29tJ1xufVxuXG5leHBvcnQgY29uc3QgTkVUV09SS19TSE9SVE5BTUVTOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAxOiAnZXRoJyxcbiAgMzogJ3JvcHN0ZW4nLFxuICA0OiAncmlua2VieScsXG4gIDU6ICdnb2VybGknLFxuICA0MjogJ2tvdmFuJyxcbiAgODAwMDE6ICdtdW1iYWknLFxuICAxMzc6ICdtYXRpYycsXG4gIDk3OiAnYnNjdGVzdCcsXG4gIDEwMDogJ3hkYWknLFxuICA1NjogJ2JzYycsXG4gIDI1MDogJ2ZhbnRvbSdcbn1cblxuaW50ZXJmYWNlIEV4cGxvcmVyVHlwZURhdGEge1xuICBbRXhwbG9yZXJUWFR5cGUuQWNjb3VudF06IFtudW1iZXIsIHN0cmluZ11cbiAgW0V4cGxvcmVyVFhUeXBlLlRva2VuQmFsYW5jZV06IFtUb2tlbiwgc3RyaW5nXVxuICBbRXhwbG9yZXJUWFR5cGUuVHJhbnNhY3Rpb25dOiBbbnVtYmVyLCBzdHJpbmddXG4gIFtFeHBsb3JlclRYVHlwZS5Ub2tlbl06IFtudW1iZXIsIHN0cmluZ11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEV0aGVyc2NhbkxpbmsodHlwZTogRXhwbG9yZXJUWFR5cGUsIGRhdGE6IEV4cGxvcmVyVHlwZURhdGFbRXhwbG9yZXJUWFR5cGVdKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBFeHBsb3JlclRYVHlwZS5BY2NvdW50OiB7XG4gICAgICBjb25zdCBbY2hhaW5JZCwgYWRkcmVzc10gPSBkYXRhIGFzIEV4cGxvcmVyVHlwZURhdGFbRXhwbG9yZXJUWFR5cGUuQWNjb3VudF1cbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0VYUExPUkVSX1BSRUZJWEVTW2NoYWluSWRdfS9hZGRyZXNzLyR7YWRkcmVzc31gXG4gICAgfVxuICAgIGNhc2UgRXhwbG9yZXJUWFR5cGUuVG9rZW5CYWxhbmNlOiB7XG4gICAgICBjb25zdCBbdG9rZW4sIGFkZHJlc3NdID0gZGF0YSBhcyBFeHBsb3JlclR5cGVEYXRhW0V4cGxvcmVyVFhUeXBlLlRva2VuQmFsYW5jZV1cbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0VYUExPUkVSX1BSRUZJWEVTW3Rva2VuLmNoYWluSWRdfS90b2tlbi8ke3Rva2VuLmFkZHJlc3N9P2E9JHthZGRyZXNzfWBcbiAgICB9XG4gICAgY2FzZSBFeHBsb3JlclRYVHlwZS5UcmFuc2FjdGlvbjoge1xuICAgICAgY29uc3QgW2NoYWluSWQsIGhhc2hdID0gZGF0YSBhcyBFeHBsb3JlclR5cGVEYXRhW0V4cGxvcmVyVFhUeXBlLlRyYW5zYWN0aW9uXVxuICAgICAgcmV0dXJuIGBodHRwczovLyR7RVhQTE9SRVJfUFJFRklYRVNbY2hhaW5JZF19L3R4LyR7aGFzaH1gXG4gICAgfVxuICAgIGNhc2UgRXhwbG9yZXJUWFR5cGUuVG9rZW46IHtcbiAgICAgIGNvbnN0IFtjaGFpbklkLCBoYXNoXSA9IGRhdGEgYXMgRXhwbG9yZXJUeXBlRGF0YVtFeHBsb3JlclRYVHlwZS5UcmFuc2FjdGlvbl1cbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0VYUExPUkVSX1BSRUZJWEVTW2NoYWluSWRdfS90b2tlbi8ke2hhc2h9YFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBTQUkgPSBuZXcgVG9rZW4oQ2hhaW5JZC5NQUlOTkVULCAnMHg4OWQyNEE2YjRDY0IxQjZmQUEyNjI1ZkU1NjJiREQ5YTIzMjYwMzU5JywgMTgpXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5EaXNwbGF5VmFsdWUodG9rZW46IFRva2VuKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRva2VuLmVxdWFscyhXRVRIW3Rva2VuLmNoYWluSWRdKSA/ICdFVEgnIDogdG9rZW4uZXF1YWxzKFNBSSkgPyAnU0FJJyA6IHRva2VuLnN5bWJvbCA/PyAnVU5LTk9XTidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnRDaGFuZ2UocmVmZXJlbmNlUmF0ZTogUHJpY2UsIG5ld1JhdGU6IFByaWNlLCBmbGlwT3JkZXIgPSBmYWxzZSk6IFBlcmNlbnQge1xuICAvLyBjYWxjdWxhdGUgKHJlZmVyZW5jZVJhdGUgLSBuZXdSYXRlKSAvIHJlZmVyZW5jZVJhdGUgb3IgKG5ld1JhdGUgLSByZWZlcmVuY2VSYXRlKSAvIHJlZmVyZW5jZVJhdGVcbiAgY29uc3QgZGlmZmVyZW5jZSA9IG5ldyBGcmFjdGlvbihcbiAgICBmbGlwT3JkZXJcbiAgICAgID8gSlNCSS5zdWJ0cmFjdChcbiAgICAgICAgICBKU0JJLm11bHRpcGx5KG5ld1JhdGUuYWRqdXN0ZWQubnVtZXJhdG9yLCByZWZlcmVuY2VSYXRlLmFkanVzdGVkLmRlbm9taW5hdG9yKSxcbiAgICAgICAgICBKU0JJLm11bHRpcGx5KHJlZmVyZW5jZVJhdGUuYWRqdXN0ZWQubnVtZXJhdG9yLCBuZXdSYXRlLmFkanVzdGVkLmRlbm9taW5hdG9yKVxuICAgICAgICApXG4gICAgICA6IEpTQkkuc3VidHJhY3QoXG4gICAgICAgICAgSlNCSS5tdWx0aXBseShyZWZlcmVuY2VSYXRlLmFkanVzdGVkLm51bWVyYXRvciwgbmV3UmF0ZS5hZGp1c3RlZC5kZW5vbWluYXRvciksXG4gICAgICAgICAgSlNCSS5tdWx0aXBseShuZXdSYXRlLmFkanVzdGVkLm51bWVyYXRvciwgcmVmZXJlbmNlUmF0ZS5hZGp1c3RlZC5kZW5vbWluYXRvcilcbiAgICAgICAgKSxcbiAgICBKU0JJLm11bHRpcGx5KHJlZmVyZW5jZVJhdGUuYWRqdXN0ZWQuZGVub21pbmF0b3IsIG5ld1JhdGUuYWRqdXN0ZWQuZGVub21pbmF0b3IpXG4gIClcbiAgY29uc3QgcGVyY2VudENoYW5nZSA9IGRpZmZlcmVuY2UubXVsdGlwbHkocmVmZXJlbmNlUmF0ZS5hZGp1c3RlZC5pbnZlcnQoKSlcbiAgcmV0dXJuIG5ldyBQZXJjZW50KHBlcmNlbnRDaGFuZ2UubnVtZXJhdG9yLCBwZXJjZW50Q2hhbmdlLmRlbm9taW5hdG9yKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UXVlcnlQYXJhbXMocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogc3RyaW5nIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5tYXAoKGtleSkgPT4gYCR7a2V5fT0ke3BhcmFtc1trZXldfWApXG4gICAgLmpvaW4oJyYnKVxuICByZXR1cm4gZm9ybWF0dGVkID09PSAnJyA/IGZvcm1hdHRlZCA6IGA/JHtmb3JtYXR0ZWR9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRJbWFnZShkYXRhOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAoZGF0YSAmJiAoZGF0YS5pbmNsdWRlcygnaHR0cCcpIHx8IGRhdGEuaW5jbHVkZXMoJ2RhdGE6aW1hZ2UnKSkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VUSEFkZHJlc3MoYWRkcmVzczogc3RyaW5nKSB7XG4gIHJldHVybiBpc0FkZHJlc3MoYWRkcmVzcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQ29udHJhY3RWYWx1ZShhbW91bnQ6IEJOLCBkZWNpbWFsOiBVbml0IHwgdW5kZWZpbmVkKSB7XG4gIHJldHVybiB0b1dlaShhbW91bnQsIGRlY2ltYWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQ29udHJhY3RWYWx1ZShhbW91bnQ6IHN0cmluZyB8IEJOLCBkZWNpbWFsOiBVbml0IHwgdW5kZWZpbmVkKSA6IG51bWJlciB7XG4gIHJldHVybiBOdW1iZXIoZnJvbVdlaShhbW91bnQsIGRlY2ltYWwpKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils.ts\n");

/***/ })

})