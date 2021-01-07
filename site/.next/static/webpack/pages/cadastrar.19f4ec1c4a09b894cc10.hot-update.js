webpackHotUpdate_N_E("pages/cadastrar",{

/***/ "./pages/cadastrar.jsx":
/*!*****************************!*\
  !*** ./pages/cadastrar.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\guilh\\Documents\\imersao_cinco\\site\\pages\\cadastrar.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Cadastrar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    description: '',
    status: ''
  }),
      meta = _useState[0],
      setMeta = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setMeta(_objectSpread(_objectSpread({}, meta), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var sendMeta = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(meta);
              setResponse({
                formSave: true
              });
              _context.prev = 3;
              _context.next = 6;
              return fetch('http://localhost:8080/metas', {
                method: 'POST',
                body: JSON.stringify(meta),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: Meta nao cadastrada com sucesso, tente mais tarde!'
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function sendMeta(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
        fluid: true,
        className: "form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
          children: ".form{\n                            \n                        }"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          children: "Cadastrar minha meta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 50
        }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 52
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
          onSubmit: sendMeta,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            children: "Nome "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            id: "name",
            placeholder: "Nome da meta",
            onChange: onChangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 121
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 127
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            children: "Descricao "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "text",
            name: "description",
            id: "description",
            placeholder: "Descricao da meta",
            onChange: onChangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 140
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 146
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            children: "Status "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "text",
            name: "status",
            id: "status",
            placeholder: "Status da meta",
            onChange: onChangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 127
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 133
          }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit",
            disabled: true,
            children: "Enviando..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 46
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            type: "submit",
            children: "Cadastrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 100
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

_s(Cadastrar, "41Q4vQ6JvBR+6Bb9al1pE3jQyCk=");

_c = Cadastrar;
/* harmony default export */ __webpack_exports__["default"] = (Cadastrar);

var _c;

$RefreshReg$(_c, "Cadastrar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cmFyLmpzeCJdLCJuYW1lcyI6WyJDYWRhc3RyYXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm1ldGEiLCJzZXRNZXRhIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZE1ldGEiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxlQUFXLEVBQUUsRUFGZ0I7QUFHN0JDLFVBQU0sRUFBRTtBQUhxQixHQUFELENBRGY7QUFBQSxNQUNWQyxJQURVO0FBQUEsTUFDSkMsT0FESTs7QUFBQSxtQkFPZUwsc0RBQVEsQ0FBQztBQUNyQ00sWUFBUSxFQUFFLEtBRDJCO0FBRXJDQyxRQUFJLEVBQUUsRUFGK0I7QUFHckNDLFdBQU8sRUFBRTtBQUg0QixHQUFELENBUHZCO0FBQUEsTUFPVkMsUUFQVTtBQUFBLE1BT0FDLFdBUEE7O0FBYWpCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUlQLE9BQU8saUNBQU1ELElBQU4scUdBQWFRLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixJQUF0QixFQUE2QlcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXRDLEdBQVg7QUFBQSxHQUF2Qjs7QUFFQSxNQUFNQyxRQUFRO0FB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THZILGVBSzZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTDdILGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFRSTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBSSxFQUFDLFFBQXhCO0FBQWlDLGNBQUUsRUFBQyxRQUFwQztBQUE2Qyx1QkFBVyxFQUFDLGdCQUF6RDtBQUEwRSxvQkFBUSxFQUFFQTtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLG9CQVEwRztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVIxRyxlQVFnSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJoSCxFQVlLRixRQUFRLENBQUNILFFBQVQsZ0JBQW9CO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLG9CQUFRLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwQixnQkFBMEU7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWi9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlDSDs7R0F0RlFQLFM7O0tBQUFBLFM7QUF3Rk1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhZGFzdHJhci4xOWY0ZWMxYzRhMDliODk0Y2MxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5mdW5jdGlvbiBDYWRhc3RyYXIoKSB7XHJcbiAgICBjb25zdCBbbWV0YSwgc2V0TWV0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHN0YXR1czogJycsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRNZXRhKHsgLi4ubWV0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2cobWV0YSlcclxuXHJcbiAgICAgICAgc2V0UmVzcG9uc2UoeyBmb3JtU2F2ZTogdHJ1ZSB9KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvbWV0YXMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1ldGEpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VFbnYuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm86IE1ldGEgbmFvIGNhZGFzdHJhZGEgY29tIHN1Y2Vzc28sIHRlbnRlIG1haXMgdGFyZGUhJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YC5mb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkNhZGFzdHJhciBtaW5oYSBtZXRhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicgPyA8cD57cmVzcG9uc2UubWVzc2FnZX08L3A+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gPHA+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPiA6IFwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWV0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGRhIG1ldGFcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz4gPGJyIC8+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpY2FvIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaWNhbyBkYSBtZXRhXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+IDxiciAvPjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXR1cyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdHVzXCIgaWQ9XCJzdGF0dXNcIiBwbGFjZWhvbGRlcj1cIlN0YXR1cyBkYSBtZXRhXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+IDxiciAvPjxiciAvPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UuZm9ybVNhdmUgPyA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD5FbnZpYW5kby4uLjwvYnV0dG9uPiA6IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNhZGFzdHJhcjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhZGFzdHJhciJdLCJzb3VyY2VSb290IjoiIn0=