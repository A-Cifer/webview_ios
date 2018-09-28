_$define("app/view/wallet/components/choosetWithdrawAddr", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../../../../pi/widget/widget");

var ChooseWithdrawAddr = function (_widget_1$Widget) {
    _inherits(ChooseWithdrawAddr, _widget_1$Widget);

    function ChooseWithdrawAddr() {
        _classCallCheck(this, ChooseWithdrawAddr);

        return _possibleConstructorReturn(this, (ChooseWithdrawAddr.__proto__ || Object.getPrototypeOf(ChooseWithdrawAddr)).apply(this, arguments));
    }

    _createClass(ChooseWithdrawAddr, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ChooseWithdrawAddr.prototype.__proto__ || Object.getPrototypeOf(ChooseWithdrawAddr.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
            console.log(props);
        }
    }, {
        key: "init",
        value: function init() {}
    }, {
        key: "chooseAddrClick",
        value: function chooseAddrClick(e, index) {
            this.ok && this.ok(index);
        }
    }, {
        key: "doClick",
        value: function doClick() {
            this.cancel && this.cancel();
        }
    }]);

    return ChooseWithdrawAddr;
}(widget_1.Widget);

exports.ChooseWithdrawAddr = ChooseWithdrawAddr;
})