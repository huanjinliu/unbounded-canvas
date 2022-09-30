
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
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

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

    /**
     * 节流
     * 单位时间内只执行一次
     */
    var throttle = function (handler, duration) {
        var preTime;
        return function () {
            var time = new Date().getTime();
            if (preTime && time - preTime < duration)
                return;
            preTime = time;
            var timer = setTimeout(function () {
                handler();
                clearTimeout(timer);
                preTime = undefined;
            }, duration);
        };
    };

    /** 加载图片 */
    var loadImage = function (src) { return new Promise(function (resolve) {
        var image = new Image();
        image.src = src;
        image.onload = function () {
            resolve(image);
        };
    }); };

    /** 获取图片数据 */
    var getImageData = function (src) { return __awaiter(void 0, void 0, void 0, function () {
        var image, img2Canvas, ctx, imageData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadImage(src)];
                case 1:
                    image = _a.sent();
                    if (!image)
                        return [2 /*return*/, undefined];
                    img2Canvas = document.createElement('canvas');
                    img2Canvas.width = image.width;
                    img2Canvas.height = image.height;
                    ctx = img2Canvas.getContext('2d');
                    if (!ctx)
                        return [2 /*return*/, undefined];
                    ctx.drawImage(image, 0, 0);
                    imageData = ctx.getImageData(0, 0, img2Canvas.width, img2Canvas.height).data;
                    return [2 /*return*/, {
                            /**
                             * 遍历像素值
                             * ...r, g, b, a...每四个色值元素组成一个像素
                             * @param {number} unitSize 每个单位的尺寸
                             * @param {Function} callback 回调函数
                             */
                            mapPixels: function (unitSize, callback) {
                                // 每个单位内部遍历
                                var mapUnit = function (unitCol, unitRow) {
                                    for (var y = 0; y < unitSize; y++) {
                                        for (var x = 0; x < unitSize; x++) {
                                            var row = unitRow * unitSize + y;
                                            var col = unitCol * unitSize + x;
                                            var ind = (row * image.width + col) * 4;
                                            var r = imageData[ind];
                                            var g = imageData[ind + 1];
                                            var b = imageData[ind + 2];
                                            var a = imageData[ind + 3];
                                            callback({
                                                x: col,
                                                y: row,
                                                rgba: { r: r, g: g, b: b, a: a },
                                                unit: unitSize > 1 ? { x: x, y: y } : undefined,
                                            });
                                        }
                                    }
                                };
                                for (var y = 0; y < Math.floor(image.height / unitSize); y++) {
                                    for (var x = 0; x < Math.floor(image.width / unitSize); x++) {
                                        mapUnit(x, y);
                                    }
                                }
                            },
                            width: image.width,
                            height: image.height,
                        }];
            }
        });
    }); };

    var pixelated = function (src, size, gap) { return __awaiter(void 0, void 0, void 0, function () {
        var imageData, mapPixels, points, minX, minY;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getImageData(src)];
                case 1:
                    imageData = _a.sent();
                    if (imageData === undefined)
                        return [2 /*return*/];
                    mapPixels = imageData.mapPixels;
                    points = [];
                    minX = Infinity;
                    minY = Infinity;
                    // 模糊像素遍历
                    mapPixels(size + gap, function (_a) {
                        var x = _a.x, y = _a.y, rgba = _a.rgba, unit = _a.unit;
                        var r = rgba.r, g = rgba.g, b = rgba.b, a = rgba.a;
                        var halfSize = Math.floor(size / 2);
                        if (unit && unit.x === halfSize && unit.y === halfSize) {
                            minX = Math.min(minX, x - halfSize);
                            minY = Math.min(minY, y - halfSize);
                            points.push({
                                x: x - halfSize,
                                y: y - halfSize,
                                fill: "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"),
                            });
                        }
                    });
                    return [2 /*return*/, points.map(function (item) { return ({
                            x: item.x - minX,
                            y: item.y - minY,
                            fill: item.fill,
                        }); })];
            }
        });
    }); };

    /** 格子大小 */
    var GRID_SIZE = 16;
    /** 格子间隔 */
    var GRID_GAP = 2;
    /** 最小格子尺寸 */
    var GRID_MIN_SIZE = 5;
    /** 最大格子尺寸 */
    var GRID_MAX_SIZE = 500;
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
            this.element = element;
            this.ctx = element.getContext('2d');
            // 构建缓存画布（离屏画布）
            this.cacheElement = document.createElement('canvas');
            this.cacheContext = this.cacheElement.getContext('2d');
            // 初始画布css样式
            this.element.style.width = '100%';
            this.element.style.height = '100%';
            this.element.style.cursor = 'grab';
            // 初始画布参数
            this.canvasCenter = this.initCanvas(options);
            this.contentCenter = __assign({}, this.canvasCenter);
            this.render();
            this.initMoveListener();
            this.initZoomListener();
            this.initClickListener();
            this.initHoverListener();
            this.initResizeListener();
        }
        /**
         * 初始画布
         */
        Canvas.prototype.initCanvas = function (options) {
            var width = options.width, height = options.height;
            this.element.width = width * this.devicePixelRatio;
            this.element.height = height * this.devicePixelRatio;
            this.cacheElement.width = width * this.devicePixelRatio;
            this.cacheElement.height = height * this.devicePixelRatio;
            return {
                x: this.element.width / this.devicePixelRatio / 2,
                y: this.element.height / this.devicePixelRatio / 2,
            };
        };
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
            var ctx = this.cacheContext;
            if (!ctx)
                return;
            var _a = this.getOptions(), size = _a.size, unitSize = _a.unitSize, halfSize = _a.halfSize;
            ctx.save();
            if (color)
                ctx.fillStyle = color;
            if (Array.isArray(point)) {
                var x = point[0], y = point[1];
                this.drawRect(center.x * this.devicePixelRatio + x * unitSize - halfSize, center.y * this.devicePixelRatio + y * unitSize - halfSize, size, size);
            }
            else {
                var x = point.x, y = point.y;
                this.drawRect(x - halfSize, y - halfSize, size, size);
            }
            ctx.restore();
        };
        /**
         * 绘制线条
         */
        Canvas.prototype.drawLine = function (startPoint, endPoint) {
            var ctx = this.cacheContext;
            if (!ctx)
                return;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo.apply(ctx, startPoint);
            ctx.lineTo.apply(ctx, endPoint);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.restore();
        };
        /**
         * 绘制圆角矩形
         */
        Canvas.prototype.drawRect = function (x, y, w, h, radius) {
            if (radius === void 0) { radius = 1 * this.devicePixelRatio * this.zoom; }
            var ctx = this.cacheContext;
            if (!ctx)
                return;
            var r = w > radius * 2 ? radius : 0;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.arcTo(x + w, y, x + w, y + r, radius);
            ctx.lineTo(x + w, y + h - r);
            ctx.arcTo(x + w, y + h, x + w - r, y + h, radius);
            ctx.lineTo(x + r, y + h);
            ctx.arcTo(x, y + h, x, y + h - r, radius);
            ctx.lineTo(x, y + r);
            ctx.arcTo(x, y, x + r, y, radius);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        /**
         * 渲染画布
         */
        Canvas.prototype.render = function (contentCenter) {
            var _this = this;
            if (contentCenter === void 0) { contentCenter = this.contentCenter; }
            var ctx = this.cacheContext;
            return new Promise(function (resolve, reject) {
                window.requestAnimationFrame(function () {
                    if (!ctx)
                        return reject();
                    ctx.clearRect(0, 0, _this.element.width, _this.element.height);
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
                    ctx.fillStyle = '#f2f2f2';
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
                    if (_this.ctx) {
                        _this.ctx.clearRect(0, 0, _this.element.width, _this.element.height);
                        _this.ctx.drawImage(_this.cacheElement, 0, 0);
                    }
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
                console.log(_this.getCroodsFromView(offsetX, offsetY));
                // this.fillPoints.push({
                //   point: this.getCroodsFromView(offsetX, offsetY),
                //   fill: 'pink',
                // });
                // this.render();
            });
        };
        /**
         * 初始悬空监听
         */
        Canvas.prototype.initHoverListener = function () {
            // this.element.addEventListener('mousemove', (event) => {
            //   if (this.moveInitPoint) return;
            //   const { offsetX, offsetY } = event;
            //   this.render().then(() => {
            //     this.drawPoint(
            //       this.getCroodsFromView(offsetX, offsetY),
            //       '#999'
            //     );
            //   });
            // });
        };
        /**
         * 监听界面尺寸变化
         */
        Canvas.prototype.initResizeListener = function () {
            var _this = this;
            var refresh = throttle(function () {
                _this.canvasCenter = _this.initCanvas({
                    width: _this.element.clientWidth,
                    height: _this.element.clientHeight,
                });
                _this.render();
            }, 50);
            window.addEventListener('resize', refresh);
        };
        /**
         * 回到中心
         */
        Canvas.prototype.focus = function (point, duration) {
            var _this = this;
            var pointCroods = this.getCroodsFromContent.apply(this, point);
            var oldContentCroods = __assign({}, this.contentCenter);
            var distanceContentCenter = {
                x: pointCroods.x - oldContentCroods.x,
                y: pointCroods.y - oldContentCroods.y,
            };
            var distanceCanvasCenter = {
                x: oldContentCroods.x - this.canvasCenter.x + distanceContentCenter.x,
                y: oldContentCroods.y - this.canvasCenter.y + distanceContentCenter.y
            };
            var time = duration !== null && duration !== void 0 ? duration : Math.max(Math.abs(distanceCanvasCenter.x), Math.abs(distanceCanvasCenter.y)) / 150 * 1000;
            time = Math.min(Math.max(time, 300), 2000);
            // 在指定时间内通过特定过渡方式变成指定值
            t(time, {
                mode: 'ease-in-out',
                onUpdate: function (percent) {
                    _this.contentCenter = {
                        x: oldContentCroods.x - distanceCanvasCenter.x * percent,
                        y: oldContentCroods.y - distanceCanvasCenter.y * percent,
                    };
                    _this.render();
                }
            });
        };
        /**
         * 绘制图像
         */
        Canvas.prototype.drawImage = function (src) {
            return __awaiter(this, void 0, void 0, function () {
                var pixelData;
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, pixelated(src, 16, 2)];
                        case 1:
                            pixelData = _b.sent();
                            if (!pixelData)
                                return [2 /*return*/];
                            (_a = this.fillPoints).push.apply(_a, pixelData.map(function (_a) {
                                var x = _a.x, y = _a.y, fill = _a.fill;
                                return {
                                    point: _this.getCroodsFromView(x, y),
                                    fill: fill,
                                };
                            }));
                            this.render();
                            return [2 /*return*/];
                    }
                });
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
            noBounedCanvas.drawImage('./assets/test.png');
        });
    })();

})();
