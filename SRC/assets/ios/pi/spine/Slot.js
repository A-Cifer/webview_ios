_$define("pi/spine/Slot", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    var Slot = function () {
        function Slot(data, bone) {
            _classCallCheck(this, Slot);

            this.attachmentVertices = new Array();
            if (data == null) throw new Error("data cannot be null.");
            if (bone == null) throw new Error("bone cannot be null.");
            this.data = data;
            this.bone = bone;
            this.color = new Color();
            this.darkColor = data.darkColor == null ? null : new Color();
            this.setToSetupPose();
        }
        /** @return May be null. */


        _createClass(Slot, [{
            key: "getAttachment",
            value: function getAttachment() {
                return this.attachment;
            }
            /** Sets the attachment and if it changed, resets {@link #getAttachmentTime()} and clears {@link #getAttachmentVertices()}.
             * @param attachment May be null. */

        }, {
            key: "setAttachment",
            value: function setAttachment(attachment) {
                if (this.attachment == attachment) return;
                this.attachment = attachment;
                this.attachmentTime = this.bone.skeleton.time;
                this.attachmentVertices.length = 0;
            }
        }, {
            key: "setAttachmentTime",
            value: function setAttachmentTime(time) {
                this.attachmentTime = this.bone.skeleton.time - time;
            }
            /** Returns the time since the attachment was set. */

        }, {
            key: "getAttachmentTime",
            value: function getAttachmentTime() {
                return this.bone.skeleton.time - this.attachmentTime;
            }
        }, {
            key: "setToSetupPose",
            value: function setToSetupPose() {
                this.color.setFromColor(this.data.color);
                if (this.darkColor != null) this.darkColor.setFromColor(this.data.darkColor);
                if (this.data.attachmentName == null) this.attachment = null;else {
                    this.attachment = null;
                    this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
                }
            }
        }]);

        return Slot;
    }();

    spine.Slot = Slot;
})(spine || (spine = {}));
})