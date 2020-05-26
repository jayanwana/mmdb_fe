webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./utils/auth_token.js":
/*!*****************************!*\
  !*** ./utils/auth_token.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthToken; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);






var TOKEN_STORAGE_KEY = "myApp.authToken";

var AuthToken = /*#__PURE__*/function () {
  function AuthToken(token) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AuthToken);

    // we are going to default to an expired decodedToken
    this.decodedToken = {
      email: "",
      exp: 0
    }; // then try and decode the jwt using jwt-decode

    try {
      if (token) this.decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
    } catch (e) {}
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthToken, [{
    key: "authorizationString",
    value: function authorizationString() {
      return "Bearer ".concat(this.token);
    }
  }, {
    key: "expiresAt",
    value: function expiresAt() {
      return new Date(this.decodedToken.exp * 1000);
    }
  }, {
    key: "isExpired",
    value: function isExpired() {
      return new Date() > this.expiresAt;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return !this.isExpired();
    }
  }], [{
    key: "decodeToken",
    value: function decodeToken(token) {
      var dt = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
      return dt;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      if (!document.cookie) {
        return null;
      }

      var authToken = document.cookie.split(';').map(function (c) {
        return c.trim();
      }).filter(function (c) {
        return c.startsWith('myApp.authToken=');
      });

      if (authToken.length === 0) {
        return null;
      }

      return decodeURIComponent(authToken[0].split('=')[1]);
    }
  }, {
    key: "storeToken",
    value: function () {
      var _storeToken = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set(TOKEN_STORAGE_KEY, token);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function storeToken(_x) {
        return _storeToken.apply(this, arguments);
      }

      return storeToken;
    }()
  }, {
    key: "deleteToken",
    value: function deleteToken() {
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove(TOKEN_STORAGE_KEY);
    }
  }]);

  return AuthToken;
}();



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoX3Rva2VuLmpzIl0sIm5hbWVzIjpbIlRPS0VOX1NUT1JBR0VfS0VZIiwiQXV0aFRva2VuIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJlbWFpbCIsImV4cCIsImp3dERlY29kZSIsImUiLCJEYXRlIiwiZXhwaXJlc0F0IiwiaXNFeHBpcmVkIiwiZHQiLCJkb2N1bWVudCIsImNvb2tpZSIsImF1dGhUb2tlbiIsInNwbGl0IiwibWFwIiwiYyIsInRyaW0iLCJmaWx0ZXIiLCJzdGFydHNXaXRoIiwibGVuZ3RoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiQ29va2llIiwic2V0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHLGlCQUExQjs7SUFFcUJDLFM7QUFDakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CO0FBQUVDLFdBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUFwQixDQUZtQixDQUluQjs7QUFDQSxRQUFJO0FBQ0YsVUFBSUgsS0FBSixFQUFXLEtBQUtDLFlBQUwsR0FBb0JHLGlEQUFTLENBQUNKLEtBQUQsQ0FBN0I7QUFDWixLQUZELENBRUUsT0FBT0ssQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OzswQ0FNcUI7QUFDcEIsOEJBQWlCLEtBQUtMLEtBQXRCO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sSUFBSU0sSUFBSixDQUFTLEtBQUtMLFlBQUwsQ0FBa0JFLEdBQWxCLEdBQXdCLElBQWpDLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxJQUFJRyxJQUFKLEtBQWEsS0FBS0MsU0FBekI7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxDQUFDLEtBQUtDLFNBQUwsRUFBUjtBQUNEOzs7Z0NBbkJrQlIsSyxFQUFPO0FBQ3hCLFVBQU1TLEVBQUUsR0FBR0wsaURBQVMsQ0FBQ0osS0FBRCxDQUFwQjtBQUNBLGFBQU9TLEVBQVA7QUFDRDs7OytCQWtCaUI7QUFDaEIsVUFBSSxDQUFDQyxRQUFRLENBQUNDLE1BQWQsRUFBc0I7QUFDcEIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLE1BQVQsQ0FBZ0JFLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCQyxHQUEzQixDQUErQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxPQUFoQyxFQUE4Q0MsTUFBOUMsQ0FBcUQsVUFBQUYsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0csVUFBRixDQUFhLGtCQUFiLENBQUo7QUFBQSxPQUF0RCxDQUFsQjs7QUFFQSxVQUFJTixTQUFTLENBQUNPLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBUUMsa0JBQWtCLENBQUNSLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFELENBQTFCO0FBQ0Q7Ozs7ME5BRXVCYixLOzs7OztBQUN0QnFCLGdFQUFNLENBQUNDLEdBQVAsQ0FBV3hCLGlCQUFYLEVBQThCRSxLQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdtQjtBQUNuQnFCLHNEQUFNLENBQUNFLE1BQVAsQ0FBY3pCLGlCQUFkO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluLmpzLjNjMjg0MTQwMTA2NDZhNGI4Y2VhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgVE9LRU5fU1RPUkFHRV9LRVkgPSBcIm15QXBwLmF1dGhUb2tlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFRva2VuIHtcclxuICAgIGNvbnN0cnVjdG9yKHRva2VuKSB7XHJcbiAgICAvLyB3ZSBhcmUgZ29pbmcgdG8gZGVmYXVsdCB0byBhbiBleHBpcmVkIGRlY29kZWRUb2tlblxyXG4gICAgdGhpcy5kZWNvZGVkVG9rZW4gPSB7IGVtYWlsOiBcIlwiLCBleHA6IDAgfTtcclxuXHJcbiAgICAvLyB0aGVuIHRyeSBhbmQgZGVjb2RlIHRoZSBqd3QgdXNpbmcgand0LWRlY29kZVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRva2VuKSB0aGlzLmRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBkZWNvZGVUb2tlbih0b2tlbikge1xyXG4gICAgY29uc3QgZHQgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgcmV0dXJuIGR0XHJcbiAgfVxyXG5cclxuICBhdXRob3JpemF0aW9uU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBCZWFyZXIgJHt0aGlzLnRva2VufWA7XHJcbiAgfVxyXG5cclxuICBleHBpcmVzQXQoKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5kZWNvZGVkVG9rZW4uZXhwICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBpc0V4cGlyZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoKSA+IHRoaXMuZXhwaXJlc0F0O1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0V4cGlyZWQoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUb2tlbigpIHtcclxuICAgIGlmICghZG9jdW1lbnQuY29va2llKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLm1hcChjID0+IGMudHJpbSgpKS5maWx0ZXIoYyA9PiBjLnN0YXJ0c1dpdGgoJ215QXBwLmF1dGhUb2tlbj0nKSk7XHJcblxyXG4gICAgaWYgKGF1dGhUb2tlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIGRlY29kZVVSSUNvbXBvbmVudChhdXRoVG9rZW5bMF0uc3BsaXQoJz0nKVsxXSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIHN0b3JlVG9rZW4odG9rZW4pIHtcclxuICAgIENvb2tpZS5zZXQoVE9LRU5fU1RPUkFHRV9LRVksIHRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxldGVUb2tlbigpIHtcclxuICAgIENvb2tpZS5yZW1vdmUoVE9LRU5fU1RPUkFHRV9LRVkpXHJcbn1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9