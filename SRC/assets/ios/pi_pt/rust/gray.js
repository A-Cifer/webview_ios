_$define("pi_pt/rust/gray", function (require, exports, module){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var nobject_1 = require("../vm/nobject");
var sinfo_1 = require("../../pi/struct/sinfo");

var GrayTab = function (_nobject_1$NObject) {
  _inherits(GrayTab, _nobject_1$NObject);

  function GrayTab() {
    _classCallCheck(this, GrayTab);

    return _possibleConstructorReturn(this, (GrayTab.__proto__ || Object.getPrototypeOf(GrayTab)).apply(this, arguments));
  }

  return GrayTab;
}(nobject_1.NObject);

GrayTab._$info = new sinfo_1.StructInfo("pi_pt/rust/gray/.GrayTab", 2003879657, new Map(), []);
exports.GrayTab = GrayTab;
})