
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    function n(n, e, t, o) {
      return new (t || (t = Promise))(function (r, a) {
        function i(n) {
          try {
            l(o.next(n));
          } catch (n) {
            a(n);
          }
        }

        function u(n) {
          try {
            l(o.throw(n));
          } catch (n) {
            a(n);
          }
        }

        function l(n) {
          var e;
          n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t(function (n) {
            n(e);
          })).then(i, u);
        }

        l((o = o.apply(n, e || [])).next());
      });
    }

    function e(n = 0, e, t) {
      var o;
      let r = 0;
      const a = {
        ease: e => Math.pow(e / n, 4),
        "ease-in": e => Math.pow(e / n, 2),
        "ease-in-out": e => {
          let t = e / (n / 2);
          return t < 1 ? Math.pow(t, 2) / 2 : -(--t * (t - 2) - 1) / 2;
        },
        "ease-out": e => -e / n * (e / n - 2),
        linear: e => e / n,
        random: e => r + Math.pow(Math.random() * (e / n) * (1 - r), 3)
      },
            i = Object.keys(a),
            u = "random" === e ? a[i[Math.floor(Math.random() * i.length)]] : null !== (o = a[e]) && void 0 !== o ? o : a.random;
      return new Promise(e => {
        let o = new Date().getTime(),
            a = 0;

        const i = () => {
          !function (n) {
            if ("undefined" != typeof window) return window.requestAnimationFrame(n);
            const e = setTimeout(() => {
              n(e), clearTimeout(e);
            }, 16.6);
          }(() => {
            a = new Date().getTime() - o, r = u(a), a >= n ? (null == t || t(1), e(a)) : (null == t || t(r), i());
          });
        };

        i();
      });
    }

    function t(t, o = {}) {
      return n(this, void 0, void 0, function* () {
        const {
          mode: n = "random",
          handler: r,
          onUpdate: a
        } = o;
        let i = r ? .99 : 1;
        const u = r ? r() : Promise.resolve(),
              l = yield e(t, n, n => {
          null == a || a(Math.round(n * i * 1e4) / 1e4);
        }),
              [c] = yield Promise.all([u, l]);
        return r && (null == a || a(1)), c;
      });
    }

    /** 格子大小 */
    var GRID_SIZE = 16;
    /** 格子间隔 */
    var GRID_GAP = 2;
    /** 最小格子尺寸 */
    var GRID_MIN_SIZE = 5;
    /** 最大格子尺寸 */
    var GRID_MAX_SIZE = 100;
    var Canvas = /** @class */ (function () {
        function Canvas(element, options) {
            /**
             * 缩放值
             */
            this.zoom = 1;
            /**
             * 像素倍率
             */
            this.devicePixelRatio = window.devicePixelRatio;
            /**
             *
             */
            this.fillPoints = [];
            var width = options.width, height = options.height;
            element.width = width * this.devicePixelRatio;
            element.height = height * this.devicePixelRatio;
            element.style.width = '100%';
            element.style.height = '100%';
            this.element = element;
            this.element.style.cursor = 'grab';
            this.canvasCenter = {
                x: this.element.width / this.devicePixelRatio / 2,
                y: this.element.height / this.devicePixelRatio / 2,
            };
            this.contentCenter = __assign({}, this.canvasCenter);
            this.ctx = element.getContext('2d');
            this.fillPoints.push({ point: [3, -3], fill: '#333' }, { point: [0, 0], fill: 'pink' }, { point: [6, -6], fill: 'pink' }, { point: [-6, 6], fill: 'pink' });
            this.render();
            this.initMoveListener();
            this.initZoomListener();
            this.initClickListener();
        }
        /**
         * 计算缩放后的值
         */
        Canvas.prototype.getOptions = function () {
            var size = GRID_SIZE * this.zoom * this.devicePixelRatio;
            var gap = GRID_GAP * this.zoom * this.devicePixelRatio;
            return {
                gap: gap,
                size: size,
                halfSize: size / 2,
                unitSize: size + gap,
            };
        };
        /**
         * 根据页面坐标获取方块坐标（相对于内容中心而不是画布中心）
         */
        Canvas.prototype.getCroodsFromView = function (x, y) {
            var _a = this.getOptions(), unitSize = _a.unitSize, halfSize = _a.halfSize;
            // 计算点击坐标到画布中心的距离
            var distanceCanvasCenter = {
                x: x - this.canvasCenter.x,
                y: y - this.canvasCenter.y,
            };
            // 计算点击坐标到内容中心的距离
            var distanceContentCenter = {
                x: distanceCanvasCenter.x + (this.canvasCenter.x - this.contentCenter.x),
                y: distanceCanvasCenter.y + (this.canvasCenter.y - this.contentCenter.y),
            };
            return [
                Math.floor((distanceContentCenter.x * this.devicePixelRatio + halfSize) / unitSize),
                Math.floor((distanceContentCenter.y * this.devicePixelRatio + halfSize) / unitSize),
            ];
        };
        /**
         * 根据相对于内容中心的方块中心坐标获取页面坐标
         */
        Canvas.prototype.getCroodsFromContent = function (x, y) {
            var unitSize = this.getOptions().unitSize;
            // 方块中心到内容中心位置
            var blockPosition = {
                x: (x * unitSize) / this.devicePixelRatio,
                y: (y * unitSize) / this.devicePixelRatio,
            };
            // 方块中心到画布中心的距离
            var distanceCanvasCenter = {
                x: blockPosition.x - (this.canvasCenter.x - this.contentCenter.x),
                y: blockPosition.y - (this.canvasCenter.y - this.contentCenter.y),
            };
            return {
                x: distanceCanvasCenter.x + this.canvasCenter.x,
                y: distanceCanvasCenter.y + this.canvasCenter.y,
            };
        };
        /**
         * 绘制某坐标方块
         */
        Canvas.prototype.drawPoint = function (point, color, center) {
            if (center === void 0) { center = this.contentCenter; }
            if (!this.ctx)
                return;
            var _a = this.getOptions(), size = _a.size, unitSize = _a.unitSize, halfSize = _a.halfSize;
            this.ctx.save();
            if (color)
                this.ctx.fillStyle = color;
            if (Array.isArray(point)) {
                var x = point[0], y = point[1];
                this.drawRect(center.x * this.devicePixelRatio + x * unitSize - halfSize, center.y * this.devicePixelRatio + y * unitSize - halfSize, size, size);
            }
            else {
                var x = point.x, y = point.y;
                this.drawRect(x - halfSize, y - halfSize, size, size);
            }
            this.ctx.restore();
        };
        /**
         * 绘制线条
         */
        Canvas.prototype.drawLine = function (startPoint, endPoint) {
            var _a, _b;
            if (!this.ctx)
                return;
            this.ctx.save();
            this.ctx.beginPath();
            (_a = this.ctx).moveTo.apply(_a, startPoint);
            (_b = this.ctx).lineTo.apply(_b, endPoint);
            this.ctx.strokeStyle = 'red';
            this.ctx.lineWidth = 1;
            this.ctx.lineCap = 'round';
            this.ctx.setLineDash([5, 5]);
            this.ctx.stroke();
            this.ctx.restore();
        };
        /**
         * 绘制圆角矩形
         */
        Canvas.prototype.drawRect = function (x, y, w, h, radius) {
            if (radius === void 0) { radius = 1 * this.devicePixelRatio * this.zoom; }
            if (!this.ctx)
                return;
            var r = w > radius * 2 ? radius : 0;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.moveTo(x + r, y);
            this.ctx.lineTo(x + w - r, y);
            this.ctx.arcTo(x + w, y, x + w, y + r, radius);
            this.ctx.lineTo(x + w, y + h - r);
            this.ctx.arcTo(x + w, y + h, x + w - r, y + h, radius);
            this.ctx.lineTo(x + r, y + h);
            this.ctx.arcTo(x, y + h, x, y + h - r, radius);
            this.ctx.lineTo(x, y + r);
            this.ctx.arcTo(x, y, x + r, y, radius);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.restore();
        };
        /**
         * 渲染画布
         */
        Canvas.prototype.render = function (contentCenter) {
            var _this = this;
            if (contentCenter === void 0) { contentCenter = this.contentCenter; }
            return new Promise(function (resolve, reject) {
                window.requestAnimationFrame(function () {
                    if (!_this.ctx)
                        return reject();
                    _this.ctx.clearRect(0, 0, _this.element.width, _this.element.height);
                    var _a = _this.getOptions(), size = _a.size, unitSize = _a.unitSize, halfSize = _a.halfSize;
                    // 计算绘制起始点
                    var calcDrawStartPoint = function () {
                        // 中心方块左上角与画布左上角的距离
                        var centerOffset = {
                            x: contentCenter.x * _this.devicePixelRatio - halfSize,
                            y: contentCenter.y * _this.devicePixelRatio - halfSize,
                        };
                        // 中心方块左上角与画布左上角的距离可以再加多少个矩形
                        var rest = {
                            top: Math.ceil(centerOffset.y / unitSize),
                            left: Math.ceil(centerOffset.x / unitSize),
                        };
                        // 绘制矩形起始点
                        var drawStartPoint = {
                            x: centerOffset.x - rest.left * unitSize,
                            y: centerOffset.y - rest.top * unitSize,
                        };
                        return drawStartPoint;
                    };
                    var drawStartPoint = calcDrawStartPoint();
                    // 绘制颜色
                    _this.ctx.fillStyle = '#f2f2f2';
                    // 绘制矩形格子
                    for (var y = drawStartPoint.y; y < _this.element.height + size; y += unitSize) {
                        for (var x = drawStartPoint.x; x < _this.element.width + size; x += unitSize) {
                            _this.drawRect(x, y, size, size);
                        }
                    }
                    // 绘制中心方块用于参考
                    _this.fillPoints.forEach(function (_a) {
                        var point = _a.point, fill = _a.fill;
                        _this.drawPoint(point, fill, contentCenter);
                    });
                    // 绘制线条用于参考
                    _this.drawLine([_this.element.width / 2, 0], [_this.element.width / 2, _this.element.height]);
                    _this.drawLine([0, _this.element.height / 2], [_this.element.width, _this.element.height / 2]);
                    resolve();
                });
            });
        };
        /**
         * 缩放
         */
        Canvas.prototype.handleZoom = function (newZoom, focusPoint) {
            if (focusPoint === void 0) { focusPoint = this.canvasCenter; }
            var preZoom = this.zoom;
            this.zoom = newZoom;
            // 旧的内容中心点到鼠标聚焦点的距离
            var oldDistance = {
                x: this.contentCenter.x - focusPoint.x,
                y: this.contentCenter.y - focusPoint.y,
            };
            // 新的内容中心点到鼠标聚焦点的距离
            var newDistance = {
                x: oldDistance.x / preZoom * this.zoom,
                y: oldDistance.y / preZoom * this.zoom,
            };
            this.contentCenter = {
                x: this.contentCenter.x + (newDistance.x - oldDistance.x),
                y: this.contentCenter.y + (newDistance.y - oldDistance.y),
            };
            this.render();
        };
        /**
         * 初始移动监听
         */
        Canvas.prototype.initMoveListener = function () {
            var _this = this;
            var handleStart = function (event) {
                _this.moveInitPoint = {
                    x: event.offsetX,
                    y: event.offsetY,
                };
                _this.element.style.cursor = 'grabbing';
            };
            var handleMoving = function (event) {
                if (_this.moveInitPoint === undefined)
                    return;
                var contentCenter = {
                    x: _this.contentCenter.x + event.offsetX - _this.moveInitPoint.x,
                    y: _this.contentCenter.y + event.offsetY - _this.moveInitPoint.y,
                };
                _this.render(contentCenter);
            };
            var handleEnd = function (event) {
                if (_this.moveInitPoint === undefined)
                    return;
                _this.contentCenter = {
                    x: _this.contentCenter.x + event.offsetX - _this.moveInitPoint.x,
                    y: _this.contentCenter.y + event.offsetY - _this.moveInitPoint.y,
                };
                _this.render();
                _this.moveInitPoint = undefined;
                _this.element.style.cursor = 'grab';
            };
            this.element.addEventListener('mousedown', handleStart);
            this.element.addEventListener('mousemove', handleMoving);
            this.element.addEventListener('mouseup', handleEnd);
            this.element.addEventListener('mouseleave', handleEnd);
        };
        /**
         * 初始缩放监听
         */
        Canvas.prototype.initZoomListener = function () {
            var _this = this;
            this.element.addEventListener('wheel', function (event) {
                if (_this.moveInitPoint)
                    return;
                var offsetX = event.offsetX, offsetY = event.offsetY, deltaY = event.deltaY;
                var dZoom = Math.pow(0.999, (deltaY / 2));
                var newZoom = Math.min(Math.max(_this.zoom * dZoom, GRID_MIN_SIZE / GRID_SIZE), GRID_MAX_SIZE / GRID_SIZE);
                _this.handleZoom(newZoom, {
                    x: offsetX,
                    y: offsetY,
                });
            });
        };
        /**
         * 初始点击监听
         */
        Canvas.prototype.initClickListener = function () {
            var _this = this;
            this.element.addEventListener('click', function (event) {
                var offsetX = event.offsetX, offsetY = event.offsetY;
                _this.fillPoints.push({
                    point: _this.getCroodsFromView(offsetX, offsetY),
                    fill: 'pink',
                });
                _this.render();
            });
        };
        /**
         * 回到中心
         */
        Canvas.prototype.backToCenter = function (duration) {
            var _this = this;
            if (duration === void 0) { duration = 1500; }
            var oldContentCenter = __assign({}, this.contentCenter);
            var distance = {
                x: this.contentCenter.x - this.canvasCenter.x,
                y: this.contentCenter.y - this.canvasCenter.y
            };
            var renderEnd = true;
            // 在指定时间内通过特定过渡方式变成指定值
            t(duration, {
                mode: 'ease-in-out',
                onUpdate: function (percent) {
                    _this.contentCenter = {
                        x: oldContentCenter.x - distance.x * percent,
                        y: oldContentCenter.y - distance.y * percent,
                    };
                    if (renderEnd) {
                        renderEnd = false;
                        _this.render().then(function () {
                            renderEnd = true;
                        });
                    }
                }
            });
        };
        return Canvas;
    }());
    var unboundedCanvas = {
        Canvas: Canvas,
    };

    (function () {
        var _canvas = document.querySelector('#_canvas');
        if (!_canvas)
            return;
        var _a = [
            document.body.clientWidth,
            document.body.clientHeight,
        ], width = _a[0], height = _a[1];
        var noBounedCanvas = new unboundedCanvas.Canvas(_canvas, {
            width: width,
            height: height,
        });
        var button = document.querySelector('#back_center');
        if (!button)
            return;
        button.addEventListener('click', function () {
            noBounedCanvas.backToCenter();
        });
    })();

})();
