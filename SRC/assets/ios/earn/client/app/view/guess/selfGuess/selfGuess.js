_$define("earn/client/app/view/guess/selfGuess/selfGuess", function (require, exports, module){
"use strict";
/**
 * 竞猜主页-我的
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("../../../../../../pi/ui/root");
var widget_1 = require("../../../../../../pi/widget/widget");
var rpc_1 = require("../../../net/rpc");
var tools_1 = require("../../../utils/tools");

var SelfGuess = function (_widget_1$Widget) {
    _inherits(SelfGuess, _widget_1$Widget);

    function SelfGuess() {
        _classCallCheck(this, SelfGuess);

        var _this = _possibleConstructorReturn(this, (SelfGuess.__proto__ || Object.getPrototypeOf(SelfGuess)).apply(this, arguments));

        _this.props = {
            myGuessList: []
        };
        return _this;
    }

    _createClass(SelfGuess, [{
        key: "create",
        value: function create() {
            var _this2 = this;

            _get(SelfGuess.prototype.__proto__ || Object.getPrototypeOf(SelfGuess.prototype), "create", this).call(this);
            rpc_1.getMyGuess().then(function (resAry) {
                _this2.props.myGuessList = _this2.processData(resAry);
                _this2.paint();
            });
        }
    }, {
        key: "processData",
        value: function processData(ary) {
            var map = {};
            var list = [];
            ary.forEach(function (element) {
                var cid = element.guessData.cid;
                var teamName = element.guessing.guessTeam;
                if (!map[cid] || !map[teamName]) {
                    list.push(Object.assign({}, element, { cid: cid, teamName: teamName }));
                    map[cid] = cid;
                    map[teamName] = teamName;
                } else {
                    list.forEach(function (element1) {
                        if (element1.cid === cid && element1.teamName === teamName) {
                            element1.guessing.guessSTnum += element.guessing.guessSTnum;
                            element1.guessing.benefit += element.guessing.benefit;
                            element1.guessing.time = element.guessing.time;
                        }
                    });
                }
            });
            list.forEach(function (element) {
                element.guessing.benefit = tools_1.st2ST(element.guessing.benefit);
                element.guessing.guessSTnum = tools_1.st2ST(element.guessing.guessSTnum);
            });
            console.log(list);
            return list;
        }
        /**
         * 详情
         */

    }, {
        key: "goDetail",
        value: function goDetail(index) {
            root_1.popNew('earn-client-app-view-guess-selfGuess-selfGuessDetail', this.props.myGuessList[index]);
        }
        /**
         * 返回
         */

    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return SelfGuess;
}(widget_1.Widget);

exports.SelfGuess = SelfGuess;
})