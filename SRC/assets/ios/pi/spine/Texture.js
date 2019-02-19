_$define("pi/spine/Texture", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******************************************************************************
 * Spine Runtimes Software License v2.5
 *
 * Copyright (c) 2013-2016, Esoteric Software
 * All rights reserved.
 *
 * You are granted a perpetual, non-exclusive, non-sublicensable, and
 * non-transferable license to use, install, execute, and perform the Spine
 * Runtimes software and derivative works solely for personal or internal
 * use. Without the written permission of Esoteric Software (see Section 2 of
 * the Spine Software License Agreement), you may not (a) modify, translate,
 * adapt, or develop new applications using the Spine Runtimes or otherwise
 * create derivative works or improvements of the Spine Runtimes or (b) remove,
 * delete, alter, or obscure any trademarks or any copyright, trademark, patent,
 * or other intellectual property or proprietary rights notices on or in the
 * Software, including any copy thereof. Redistributions in binary or source
 * form must include this license and terms.
 *
 * THIS SOFTWARE IS PROVIDED BY ESOTERIC SOFTWARE "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL ESOTERIC SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, BUSINESS INTERRUPTION, OR LOSS OF
 * USE, DATA, OR PROFITS) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
var spine;
(function (spine) {
    var Texture = function () {
        function Texture(image) {
            _classCallCheck(this, Texture);

            this._image = image;
        }

        _createClass(Texture, [{
            key: "getImage",
            value: function getImage() {
                return this._image;
            }
        }], [{
            key: "filterFromString",
            value: function filterFromString(text) {
                switch (text.toLowerCase()) {
                    case "nearest":
                        return TextureFilter.Nearest;
                    case "linear":
                        return TextureFilter.Linear;
                    case "mipmap":
                        return TextureFilter.MipMap;
                    case "mipmapnearestnearest":
                        return TextureFilter.MipMapNearestNearest;
                    case "mipmaplinearnearest":
                        return TextureFilter.MipMapLinearNearest;
                    case "mipmapnearestlinear":
                        return TextureFilter.MipMapNearestLinear;
                    case "mipmaplinearlinear":
                        return TextureFilter.MipMapLinearLinear;
                    default:
                        throw new Error("Unknown texture filter " + text);
                }
            }
        }, {
            key: "wrapFromString",
            value: function wrapFromString(text) {
                switch (text.toLowerCase()) {
                    case "mirroredtepeat":
                        return TextureWrap.MirroredRepeat;
                    case "clamptoedge":
                        return TextureWrap.ClampToEdge;
                    case "repeat":
                        return TextureWrap.Repeat;
                    default:
                        throw new Error("Unknown texture wrap " + text);
                }
            }
        }]);

        return Texture;
    }();

    spine.Texture = Texture;
    var TextureFilter = void 0;
    (function (TextureFilter) {
        TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
        TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
        TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
        TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
        TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
        TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
        TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear"; // WebGLRenderingContext.LINEAR_MIPMAP_LINEAR
    })(TextureFilter = spine.TextureFilter || (spine.TextureFilter = {}));
    var TextureWrap = void 0;
    (function (TextureWrap) {
        TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
        TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
        TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat"; // WebGLRenderingContext.REPEAT
    })(TextureWrap = spine.TextureWrap || (spine.TextureWrap = {}));

    var TextureRegion = function TextureRegion() {
        _classCallCheck(this, TextureRegion);

        this.u = 0;
        this.v = 0;
        this.u2 = 0;
        this.v2 = 0;
        this.width = 0;
        this.height = 0;
        this.rotate = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.originalWidth = 0;
        this.originalHeight = 0;
    };

    spine.TextureRegion = TextureRegion;

    var FakeTexture = function (_spine$Texture) {
        _inherits(FakeTexture, _spine$Texture);

        function FakeTexture() {
            _classCallCheck(this, FakeTexture);

            return _possibleConstructorReturn(this, (FakeTexture.__proto__ || Object.getPrototypeOf(FakeTexture)).apply(this, arguments));
        }

        _createClass(FakeTexture, [{
            key: "setFilters",
            value: function setFilters(minFilter, magFilter) {}
        }, {
            key: "setWraps",
            value: function setWraps(uWrap, vWrap) {}
        }, {
            key: "dispose",
            value: function dispose() {}
        }]);

        return FakeTexture;
    }(spine.Texture);

    spine.FakeTexture = FakeTexture;
})(spine || (spine = {}));
})