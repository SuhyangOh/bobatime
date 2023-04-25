"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;
var _main = require("./main.styles");
var _router = require("next/router");
function Main() {
  var router = (0, _router.useRouter)();
  function onClickMove1() {
    router.push("../log_in/login");
  }
  return /*#__PURE__*/React.createElement(_main.Wrapper, null, /*#__PURE__*/React.createElement("div", null, "BOBA TIME"), /*#__PURE__*/React.createElement(_main.Yellowbox, null, /*#__PURE__*/React.createElement("div", null, "Hi there"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: onClickMove1
  }, " \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9 "), /*#__PURE__*/React.createElement("br", null)));
}