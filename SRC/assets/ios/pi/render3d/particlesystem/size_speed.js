_$define("pi/render3d/particlesystem/size_speed", function (require, exports, module){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var three_1 = require("../three");
var curve_1 = require("./curve");

var SizeBySpeedModule =
// tslint:disable-next-line:typedef
function SizeBySpeedModule(config) {
    _classCallCheck(this, SizeBySpeedModule);

    this.range = new three_1.THREE.Vector2(config.range.x, config.range.y);
    this.separateAxes = config.separateAxes;
    this.size = curve_1.buildMinMaxCurve(config.size);
    this.sizeMultiplier = config.sizeMultiplier;
    this.x = curve_1.buildMinMaxCurve(config.x);
    this.xMultiplier = config.xMultiplier;
    this.y = curve_1.buildMinMaxCurve(config.y);
    this.yMultiplier = config.yMultiplier;
    this.z = curve_1.buildMinMaxCurve(config.z);
    this.zMultiplier = config.zMultiplier;
};

exports.SizeBySpeedModule = SizeBySpeedModule;
})