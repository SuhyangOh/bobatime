"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Yellowbox = exports.Wrapper = exports.Box = void 0;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tmargin: 100px;\n\tfont-size: 25px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder: 2px solid #000458;\n\n\talign-items: center;\n\tdisplay: -webkit-flex;\n\t-webkit-align-item: center;\n\t-webkit-justify-content: center;\n"])));
exports.Wrapper = Wrapper;
var Yellowbox = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tposition: absolute;\n\twidth: 779px;\n\theight: 399px;\n\tleft: 323px;\n\ttop: 514px;\n\n\tbackground-color: #ffc700;\n\tborder: 2px solid #000458;\n\tborder-radius: 10px;\n\talign-items: center;\n\tdisplay: -webkit-flex;\n\t-webkit-align-item: center;\n\t-webkit-justify-content: center;\n"])));
exports.Yellowbox = Yellowbox;
var Box = _styled.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\twidth: 384px;\n\theight: 64px;\n\tpadding: 20px;\n\tfont: Noto Sans CJK KR;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tline-height: 24px;\n\topacity: 0.6;\n\tbox-sizing: border-box;\n"])));
exports.Box = Box;