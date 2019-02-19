_$define("app/view/wallet/create/createWalletByImage", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create a wallet by image
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var localWallet_1 = require("../../../logic/localWallet");
var native_1 = require("../../../logic/native");
var modulConfig_1 = require("../../../modulConfig");
var memstore_1 = require("../../../store/memstore");
var account_1 = require("../../../utils/account");

var CreateWalletByImage = function (_widget_1$Widget) {
    _inherits(CreateWalletByImage, _widget_1$Widget);

    function CreateWalletByImage() {
        _classCallCheck(this, CreateWalletByImage);

        return _possibleConstructorReturn(this, (CreateWalletByImage.__proto__ || Object.getPrototypeOf(CreateWalletByImage)).apply(this, arguments));
    }

    _createClass(CreateWalletByImage, [{
        key: "create",
        value: function create() {
            _get(CreateWalletByImage.prototype.__proto__ || Object.getPrototypeOf(CreateWalletByImage.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.props = {
                chooseImage: false,
                imageHtml: '',
                imagePsw: '',
                imagePswAvailable: false,
                imgagePswConfirm: '',
                pswEqualed: false,
                walletName: modulConfig_1.getModulConfig('WALLET_NAME'),
                imagePicker: null
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "selectImageClick",
        value: function selectImageClick() {
            var _this2 = this;

            this.props.imagePicker = native_1.selectImage(function (width, height, url) {
                console.log('selectImage url = ', url);
                // tslint:disable-next-line:max-line-length
                _this2.props.imageHtml = "<div style=\"background-image: url(" + url + ");width: 100%;height: 100%;position: absolute;top: 0;background-size: cover;background-position: center;background-repeat: no-repeat;\"></div>";
                _this2.props.chooseImage = true;
                _this2.paint();
            });
        }
    }, {
        key: "imagePswClick",
        value: function imagePswClick() {
            // 防止事件冒泡  on-tap事件已经处理
        }
    }, {
        key: "imagePswChange",
        value: function imagePswChange(e) {
            this.props.imagePsw = e.value;
            this.props.imagePswAvailable = this.props.imagePsw.length > 0;
            this.props.pswEqualed = account_1.pswEqualed(this.props.imagePsw, this.props.imgagePswConfirm);
            this.paint();
        }
    }, {
        key: "imagePswConfirmChange",
        value: function imagePswConfirmChange(e) {
            this.props.imgagePswConfirm = e.value;
            this.props.pswEqualed = account_1.pswEqualed(this.props.imagePsw, this.props.imgagePswConfirm);
            this.paint();
        }
    }, {
        key: "nextClick",
        value: function nextClick() {
            var _this3 = this;

            if (!this.props.chooseImage) {
                root_1.popNew('app-components1-message-message', { content: this.language.tips[0] });
                return;
            }
            if (!this.props.pswEqualed) {
                root_1.popNew('app-components1-message-message', { content: this.language.tips[1] });
                return;
            }
            var imagePsw = this.props.imagePsw;
            var imgArgon2HashPromise = new Promise(function (resolve) {
                _this3.props.imagePicker.getAHash({
                    success: function success(ahash) {
                        console.log('image ahash = ', ahash);
                        resolve(localWallet_1.ahashToArgon2Hash(ahash, imagePsw));
                    }
                });
            });
            memstore_1.setStore('flags/imgArgon2HashPromise', imgArgon2HashPromise);
            root_1.popNew('app-view-wallet-create-createWallet', { itype: localWallet_1.CreateWalletType.Image });
            this.ok && this.ok();
        }
    }]);

    return CreateWalletByImage;
}(widget_1.Widget);

exports.CreateWalletByImage = CreateWalletByImage;
})