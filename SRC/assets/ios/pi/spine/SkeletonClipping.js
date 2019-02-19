_$define("pi/spine/SkeletonClipping", function (require, exports, module){
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
    var SkeletonClipping = function () {
        function SkeletonClipping() {
            _classCallCheck(this, SkeletonClipping);

            this.triangulator = new Triangulator();
            this.clippingPolygon = new Array();
            this.clipOutput = new Array();
            this.clippedVertices = new Array();
            this.clippedTriangles = new Array();
            this.scratch = new Array();
        }

        _createClass(SkeletonClipping, [{
            key: "clipStart",
            value: function clipStart(slot, clip) {
                if (this.clipAttachment != null) return 0;
                this.clipAttachment = clip;
                var n = clip.worldVerticesLength;
                var vertices = spine.Utils.setArraySize(this.clippingPolygon, n);
                clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
                var clippingPolygon = this.clippingPolygon;
                SkeletonClipping.makeClockwise(clippingPolygon);
                var clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));
                for (var i = 0, _n = clippingPolygons.length; i < _n; i++) {
                    var polygon = clippingPolygons[i];
                    SkeletonClipping.makeClockwise(polygon);
                    polygon.push(polygon[0]);
                    polygon.push(polygon[1]);
                }
                return clippingPolygons.length;
            }
        }, {
            key: "clipEndWithSlot",
            value: function clipEndWithSlot(slot) {
                if (this.clipAttachment != null && this.clipAttachment.endSlot == slot.data) this.clipEnd();
            }
        }, {
            key: "clipEnd",
            value: function clipEnd() {
                if (this.clipAttachment == null) return;
                this.clipAttachment = null;
                this.clippingPolygons = null;
                this.clippedVertices.length = 0;
                this.clippedTriangles.length = 0;
                this.clippingPolygon.length = 0;
            }
        }, {
            key: "isClipping",
            value: function isClipping() {
                return this.clipAttachment != null;
            }
        }, {
            key: "clipTriangles",
            value: function clipTriangles(vertices, verticesLength, triangles, trianglesLength, uvs, light, dark, twoColor) {
                var clipOutput = this.clipOutput,
                    clippedVertices = this.clippedVertices;
                var clippedTriangles = this.clippedTriangles;
                var polygons = this.clippingPolygons;
                var polygonsCount = this.clippingPolygons.length;
                var vertexSize = twoColor ? 12 : 8;
                var index = 0;
                clippedVertices.length = 0;
                clippedTriangles.length = 0;
                outer: for (var i = 0; i < trianglesLength; i += 3) {
                    var vertexOffset = triangles[i] << 1;
                    var x1 = vertices[vertexOffset],
                        y1 = vertices[vertexOffset + 1];
                    var u1 = uvs[vertexOffset],
                        v1 = uvs[vertexOffset + 1];
                    vertexOffset = triangles[i + 1] << 1;
                    var x2 = vertices[vertexOffset],
                        y2 = vertices[vertexOffset + 1];
                    var u2 = uvs[vertexOffset],
                        v2 = uvs[vertexOffset + 1];
                    vertexOffset = triangles[i + 2] << 1;
                    var x3 = vertices[vertexOffset],
                        y3 = vertices[vertexOffset + 1];
                    var u3 = uvs[vertexOffset],
                        v3 = uvs[vertexOffset + 1];
                    for (var p = 0; p < polygonsCount; p++) {
                        var s = clippedVertices.length;
                        if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
                            var clipOutputLength = clipOutput.length;
                            if (clipOutputLength == 0) continue;
                            var d0 = y2 - y3,
                                d1 = x3 - x2,
                                d2 = x1 - x3,
                                d4 = y3 - y1;
                            var d = 1 / (d0 * d2 + d1 * (y1 - y3));
                            var clipOutputCount = clipOutputLength >> 1;
                            var clipOutputItems = this.clipOutput;
                            var clippedVerticesItems = spine.Utils.setArraySize(clippedVertices, s + clipOutputCount * vertexSize);
                            for (var ii = 0; ii < clipOutputLength; ii += 2) {
                                var x = clipOutputItems[ii],
                                    y = clipOutputItems[ii + 1];
                                clippedVerticesItems[s] = x;
                                clippedVerticesItems[s + 1] = y;
                                clippedVerticesItems[s + 2] = light.r;
                                clippedVerticesItems[s + 3] = light.g;
                                clippedVerticesItems[s + 4] = light.b;
                                clippedVerticesItems[s + 5] = light.a;
                                var c0 = x - x3,
                                    c1 = y - y3;
                                var a = (d0 * c0 + d1 * c1) * d;
                                var b = (d4 * c0 + d2 * c1) * d;
                                var c = 1 - a - b;
                                clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
                                clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;
                                if (twoColor) {
                                    clippedVerticesItems[s + 8] = dark.r;
                                    clippedVerticesItems[s + 9] = dark.g;
                                    clippedVerticesItems[s + 10] = dark.b;
                                    clippedVerticesItems[s + 11] = dark.a;
                                }
                                s += vertexSize;
                            }
                            s = clippedTriangles.length;
                            var clippedTrianglesItems = spine.Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
                            clipOutputCount--;
                            for (var _ii = 1; _ii < clipOutputCount; _ii++) {
                                clippedTrianglesItems[s] = index;
                                clippedTrianglesItems[s + 1] = index + _ii;
                                clippedTrianglesItems[s + 2] = index + _ii + 1;
                                s += 3;
                            }
                            index += clipOutputCount + 1;
                        } else {
                            var _clippedVerticesItems = spine.Utils.setArraySize(clippedVertices, s + 3 * vertexSize);
                            _clippedVerticesItems[s] = x1;
                            _clippedVerticesItems[s + 1] = y1;
                            _clippedVerticesItems[s + 2] = light.r;
                            _clippedVerticesItems[s + 3] = light.g;
                            _clippedVerticesItems[s + 4] = light.b;
                            _clippedVerticesItems[s + 5] = light.a;
                            if (!twoColor) {
                                _clippedVerticesItems[s + 6] = u1;
                                _clippedVerticesItems[s + 7] = v1;
                                _clippedVerticesItems[s + 8] = x2;
                                _clippedVerticesItems[s + 9] = y2;
                                _clippedVerticesItems[s + 10] = light.r;
                                _clippedVerticesItems[s + 11] = light.g;
                                _clippedVerticesItems[s + 12] = light.b;
                                _clippedVerticesItems[s + 13] = light.a;
                                _clippedVerticesItems[s + 14] = u2;
                                _clippedVerticesItems[s + 15] = v2;
                                _clippedVerticesItems[s + 16] = x3;
                                _clippedVerticesItems[s + 17] = y3;
                                _clippedVerticesItems[s + 18] = light.r;
                                _clippedVerticesItems[s + 19] = light.g;
                                _clippedVerticesItems[s + 20] = light.b;
                                _clippedVerticesItems[s + 21] = light.a;
                                _clippedVerticesItems[s + 22] = u3;
                                _clippedVerticesItems[s + 23] = v3;
                            } else {
                                _clippedVerticesItems[s + 6] = u1;
                                _clippedVerticesItems[s + 7] = v1;
                                _clippedVerticesItems[s + 8] = dark.r;
                                _clippedVerticesItems[s + 9] = dark.g;
                                _clippedVerticesItems[s + 10] = dark.b;
                                _clippedVerticesItems[s + 11] = dark.a;
                                _clippedVerticesItems[s + 12] = x2;
                                _clippedVerticesItems[s + 13] = y2;
                                _clippedVerticesItems[s + 14] = light.r;
                                _clippedVerticesItems[s + 15] = light.g;
                                _clippedVerticesItems[s + 16] = light.b;
                                _clippedVerticesItems[s + 17] = light.a;
                                _clippedVerticesItems[s + 18] = u2;
                                _clippedVerticesItems[s + 19] = v2;
                                _clippedVerticesItems[s + 20] = dark.r;
                                _clippedVerticesItems[s + 21] = dark.g;
                                _clippedVerticesItems[s + 22] = dark.b;
                                _clippedVerticesItems[s + 23] = dark.a;
                                _clippedVerticesItems[s + 24] = x3;
                                _clippedVerticesItems[s + 25] = y3;
                                _clippedVerticesItems[s + 26] = light.r;
                                _clippedVerticesItems[s + 27] = light.g;
                                _clippedVerticesItems[s + 28] = light.b;
                                _clippedVerticesItems[s + 29] = light.a;
                                _clippedVerticesItems[s + 30] = u3;
                                _clippedVerticesItems[s + 31] = v3;
                                _clippedVerticesItems[s + 32] = dark.r;
                                _clippedVerticesItems[s + 33] = dark.g;
                                _clippedVerticesItems[s + 34] = dark.b;
                                _clippedVerticesItems[s + 35] = dark.a;
                            }
                            s = clippedTriangles.length;
                            var _clippedTrianglesItems = spine.Utils.setArraySize(clippedTriangles, s + 3);
                            _clippedTrianglesItems[s] = index;
                            _clippedTrianglesItems[s + 1] = index + 1;
                            _clippedTrianglesItems[s + 2] = index + 2;
                            index += 3;
                            continue outer;
                        }
                    }
                }
            }
            /** Clips the input triangle against the convex, clockwise clipping area. If the triangle lies entirely within the clipping
             * area, false is returned. The clipping area must duplicate the first vertex at the end of the vertices list. */

        }, {
            key: "clip",
            value: function clip(x1, y1, x2, y2, x3, y3, clippingArea, output) {
                var originalOutput = output;
                var clipped = false;
                // Avoid copy at the end.
                var input = null;
                if (clippingArea.length % 4 >= 2) {
                    input = output;
                    output = this.scratch;
                } else input = this.scratch;
                input.length = 0;
                input.push(x1);
                input.push(y1);
                input.push(x2);
                input.push(y2);
                input.push(x3);
                input.push(y3);
                input.push(x1);
                input.push(y1);
                output.length = 0;
                var clippingVertices = clippingArea;
                var clippingVerticesLast = clippingArea.length - 4;
                for (var i = 0;; i += 2) {
                    var edgeX = clippingVertices[i],
                        edgeY = clippingVertices[i + 1];
                    var edgeX2 = clippingVertices[i + 2],
                        edgeY2 = clippingVertices[i + 3];
                    var deltaX = edgeX - edgeX2,
                        deltaY = edgeY - edgeY2;
                    var inputVertices = input;
                    var inputVerticesLength = input.length - 2,
                        outputStart = output.length;
                    for (var ii = 0; ii < inputVerticesLength; ii += 2) {
                        var inputX = inputVertices[ii],
                            inputY = inputVertices[ii + 1];
                        var inputX2 = inputVertices[ii + 2],
                            inputY2 = inputVertices[ii + 3];
                        var side2 = deltaX * (inputY2 - edgeY2) - deltaY * (inputX2 - edgeX2) > 0;
                        if (deltaX * (inputY - edgeY2) - deltaY * (inputX - edgeX2) > 0) {
                            if (side2) {
                                // v1 inside, v2 inside
                                output.push(inputX2);
                                output.push(inputY2);
                                continue;
                            }
                            // v1 inside, v2 outside
                            var c0 = inputY2 - inputY,
                                c2 = inputX2 - inputX;
                            var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / (c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY));
                            output.push(edgeX + (edgeX2 - edgeX) * ua);
                            output.push(edgeY + (edgeY2 - edgeY) * ua);
                        } else if (side2) {
                            // v1 outside, v2 inside
                            var _c = inputY2 - inputY,
                                _c2 = inputX2 - inputX;
                            var _ua = (_c2 * (edgeY - inputY) - _c * (edgeX - inputX)) / (_c * (edgeX2 - edgeX) - _c2 * (edgeY2 - edgeY));
                            output.push(edgeX + (edgeX2 - edgeX) * _ua);
                            output.push(edgeY + (edgeY2 - edgeY) * _ua);
                            output.push(inputX2);
                            output.push(inputY2);
                        }
                        clipped = true;
                    }
                    if (outputStart == output.length) {
                        // All edges outside.
                        originalOutput.length = 0;
                        return true;
                    }
                    output.push(output[0]);
                    output.push(output[1]);
                    if (i == clippingVerticesLast) break;
                    var temp = output;
                    output = input;
                    output.length = 0;
                    input = temp;
                }
                if (originalOutput != output) {
                    originalOutput.length = 0;
                    for (var _i = 0, n = output.length - 2; _i < n; _i++) {
                        originalOutput[_i] = output[_i];
                    }
                } else originalOutput.length = originalOutput.length - 2;
                return clipped;
            }
        }], [{
            key: "makeClockwise",
            value: function makeClockwise(polygon) {
                var vertices = polygon;
                var verticeslength = polygon.length;
                var area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1],
                    p1x = 0,
                    p1y = 0,
                    p2x = 0,
                    p2y = 0;
                for (var i = 0, n = verticeslength - 3; i < n; i += 2) {
                    p1x = vertices[i];
                    p1y = vertices[i + 1];
                    p2x = vertices[i + 2];
                    p2y = vertices[i + 3];
                    area += p1x * p2y - p2x * p1y;
                }
                if (area < 0) return;
                for (var _i2 = 0, lastX = verticeslength - 2, _n2 = verticeslength >> 1; _i2 < _n2; _i2 += 2) {
                    var x = vertices[_i2],
                        y = vertices[_i2 + 1];
                    var other = lastX - _i2;
                    vertices[_i2] = vertices[other];
                    vertices[_i2 + 1] = vertices[other + 1];
                    vertices[other] = x;
                    vertices[other + 1] = y;
                }
            }
        }]);

        return SkeletonClipping;
    }();

    spine.SkeletonClipping = SkeletonClipping;
})(spine || (spine = {}));
})