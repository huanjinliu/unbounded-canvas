
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

    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
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
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
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
            a = 0,
            i = !1;

        const l = () => {
          !function (n) {
            if ("undefined" != typeof window) return window.requestAnimationFrame(n);
            const e = setTimeout(() => {
              n(e), clearTimeout(e);
            }, 16.6);
          }(() => {
            if (a = new Date().getTime() - o, r = u(a), a >= n) null == t || t(1), e(a);else {
              const n = () => {
                i = !0;
              };

              null == t || t(r, n), i ? e(a) : l();
            }
          });
        };

        l();
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
              l = yield e(t, n, (n, e) => {
          null == a || a(Math.round(n * i * 1e4) / 1e4, e);
        }),
              [c] = yield Promise.all([u, l]);
        return r && (null == a || a(1)), c;
      });
    }

    var Canvas = /** @class */ (function () {
        function Canvas(width, height, extraOptions) {
            if (extraOptions === void 0) { extraOptions = {}; }
            var _this = this;
            this._element = null;
            var _a = extraOptions.styles, styles = _a === void 0 ? {} : _a;
            this._element = document.createElement("canvas");
            if (width)
                this._element.width = width;
            if (height)
                this._element.height = height;
            Object.keys(styles).forEach(function (key) {
                _this._element.style[key] = styles[key];
            });
        }
        /**
         * 取得canvas节点
         */
        Canvas.prototype.getElement = function () {
            return this._element;
        };
        /**
         * 改变画布尺寸
         */
        Canvas.prototype.changeSize = function (width, height) {
            if (!this._element)
                return;
            this._element.width = width;
            this._element.height = height;
        };
        return Canvas;
    }());

    var Canvas2d = /** @class */ (function (_super) {
        __extends(Canvas2d, _super);
        function Canvas2d(width, height, extraOptions) {
            if (extraOptions === void 0) { extraOptions = {}; }
            var _this = this;
            var _a = extraOptions.styles, styles = _a === void 0 ? {} : _a, _b = extraOptions.needOffScreenCache, needOffScreenCache = _b === void 0 ? false : _b;
            _this = _super.call(this, width, height, { styles: styles }) || this;
            _this._context = null;
            _this._cacheElement = null;
            _this._cacheContext = null;
            /**
             * 渲染器
             */
            _this._renders = [];
            if (_this._element)
                _this._context = _this._element.getContext('2d');
            // 构建缓存画布（离屏画布）
            if (needOffScreenCache)
                _this.createCacheCanvas();
            return _this;
        }
        /**
         * 取得画布上下文
         */
        Canvas2d.prototype.getContext = function () {
            return this._context;
        };
        /**
         * 改变画布尺寸
         */
        Canvas2d.prototype.changeSize = function (width, height) {
            _super.prototype.changeSize.call(this, width, height);
            if (!this._cacheElement)
                return;
            this._cacheElement.width = width;
            this._cacheElement.height = height;
        };
        /**
         * 创建缓存画布（离屏画布）
         */
        Canvas2d.prototype.createCacheCanvas = function () {
            if (!this._element)
                return;
            this._cacheElement = document.createElement("canvas");
            this._cacheElement.width = this._element.width;
            this._cacheElement.height = this._element.height;
            this._cacheContext = this._cacheElement.getContext('2d');
            return {
                canvas: this._cacheElement,
                context: this._cacheContext,
            };
        };
        /**
         * 添加渲染器
         */
        Canvas2d.prototype.addRender = function (handler) {
            this._renders.push(handler);
            return this;
        };
        /**
         * 执行全部渲染器
         */
        Canvas2d.prototype.renderAll = function () {
            var _a;
            if (!this._element)
                return;
            var _context = (_a = this._cacheContext) !== null && _a !== void 0 ? _a : this._context;
            if (!_context)
                return;
            _context.clearRect(0, 0, this._element.width, this._element.height);
            this._renders.forEach(function (render) { return render(_context); });
            if (this._cacheElement && this._context) {
                this._context.clearRect(0, 0, this._element.width, this._element.height);
                this._context.drawImage(this._cacheElement, 0, 0);
            }
        };
        /**
         * 画布销毁
         */
        Canvas2d.prototype.dispose = function () {
            var disposeCanvas = function (canvas, ctx) {
                canvas.width = 1;
                canvas.height = 1;
                ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, 1, 1);
                canvas.removeAttribute('style');
            };
            if (this._element)
                disposeCanvas(this._element, this._context);
            if (this._cacheElement)
                disposeCanvas(this._cacheElement, this._cacheContext);
            this._renders = [];
            this._element = null;
            this._context = null;
            this._cacheElement = null;
            this._cacheContext = null;
        };
        return Canvas2d;
    }(Canvas));

    var CanvasWebGL = /** @class */ (function (_super) {
        __extends(CanvasWebGL, _super);
        function CanvasWebGL(width, height, extraOptions) {
            if (extraOptions === void 0) { extraOptions = {}; }
            var _this = this;
            extraOptions.styles;
            _this = _super.call(this, width, height, extraOptions) || this;
            /**
             * 画布内容上下文
             */
            _this._context = null;
            /**
             * 渲染器
             */
            _this._renders = [];
            if (_this._element)
                _this._context = _this._element.getContext('webgl');
            return _this;
        }
        /**
         * 取得画布上下文
         */
        CanvasWebGL.prototype.getContext = function () {
            return this._context;
        };
        /**
         * 添加渲染器
         */
        CanvasWebGL.prototype.addRender = function (handler) {
            this._renders.push(handler);
            return this;
        };
        /**
         * 执行全部渲染器
         */
        CanvasWebGL.prototype.renderAll = function () {
            if (!this._element)
                return;
            var _context = this._context;
            if (!_context)
                return;
            // _context.clearRect(0, 0, this._element.width, this._element.height);
            this._renders.forEach(function (render) { return render(_context); });
        };
        /**
         * 画布销毁
         */
        CanvasWebGL.prototype.dispose = function () {
            var disposeCanvas = function (canvas, ctx) {
                canvas.width = 1;
                canvas.height = 1;
                // ctx?.clearRect(0, 0, 1, 1);
                canvas.removeAttribute('style');
            };
            if (this._element)
                disposeCanvas(this._element, this._context);
            this._renders = [];
            this._element = null;
            this._context = null;
        };
        return CanvasWebGL;
    }(Canvas));

    /** 默认空坐标 */
    var EMPTY_COORDINATE = { x: 0, y: 0 };
    /** 默认缩放限制 */
    var DEFAULT_ZOOM_SETTING = {
        disabled: false,
        min: 1,
        max: 100,
        center: 'canvas'
    };
    var UnboundedCanvas = /** @class */ (function () {
        function UnboundedCanvas(element, options) {
            if (options === void 0) { options = {}; }
            /**
             * 画布容器
             */
            this._container = null;
            /**
             * 画布中心点
             */
            this._canvasCenter = null;
            /**
             * 内容中心点
             */
            this._contentCenter = null;
            /**
             * 单位像素格
             */
            this.unitSize = 1;
            /**
             * 像素单元格间距
             */
            this.unitGap = 0;
            /**
             * 画布边界
             */
            this.bound = [Infinity, Infinity];
            /**
             * 是否可内容画布移动
             */
            this.movable = true;
            /**
            * 是否可画布缩放
            */
            this.zoomable = true;
            /**
             * 画布缩放中心
             * @default 'canvas'
             */
            this.zoomCenter = 'canvas';
            /**
             * 缩放值
             */
            this.zoom = 1;
            /**
             * 移动粘连
             */
            this.sticky = false;
            /**
             * 缩放限制
             */
            this.zoomLimit = [
                DEFAULT_ZOOM_SETTING.min,
                DEFAULT_ZOOM_SETTING.max,
            ];
            /**
             * 渲染图层
             */
            this._layers = [];
            /**
             * 记录监听器
             */
            this._listeners = [];
            /**
             * 记录初始数据
             */
            this._store = null;
            /** 存储源画布，用于读取尺寸和销毁时还原 */
            this._store = element;
            /** 初始基本配置 */
            var _a = options.ignoreDevicePixelRatio, ignoreDevicePixelRatio = _a === void 0 ? false : _a;
            this.devicePixelRatio = ignoreDevicePixelRatio
                ? 1
                : Math.ceil(window.devicePixelRatio);
            /** 初始画布尺寸 */
            this.initCanvas(options);
            /** 初始画布配置 */
            this.initOptions(options);
            /** 初始画布监听器 */
            this.initListeners();
        }
        /**
         * 初始画布
         */
        UnboundedCanvas.prototype.initCanvas = function (options) {
            var _this = this;
            if (!this._store)
                return;
            var _a = options.width, _width = _a === void 0 ? this._store.width : _a, _b = options.height, _height = _b === void 0 ? this._store.height : _b, className = options.className;
            // 尺寸至少大于等于1
            var width = Math.max(1, Math.ceil(_width));
            var height = Math.max(1, Math.ceil(_height));
            if (!this._container) {
                var parentNode = this._store.parentNode;
                if (!parentNode)
                    return;
                // 构建容器，所有事件挂载到该容器上
                this._container = document.createElement('div');
                this._container.classList.add("unbounded-canvas-container");
                if (className)
                    this._container.classList.add(className);
                this._container.style.width = "".concat(width, "px");
                this._container.style.height = "".concat(height, "px");
                parentNode.insertBefore(this._container, this._store);
                parentNode.removeChild(this._store);
            }
            else {
                this._container.style.width = "".concat(width, "px");
                this._container.style.height = "".concat(height, "px");
                this._layers.forEach(function (_a) {
                    var canvas = _a.canvas;
                    canvas.changeSize(width * _this.devicePixelRatio, height * _this.devicePixelRatio);
                });
            }
        };
        /**
         * 初始配置
         */
        UnboundedCanvas.prototype.initOptions = function (options) {
            var _a, _b;
            if (!this._container)
                return;
            var _c = this._container, width = _c.clientWidth, height = _c.clientHeight;
            var unit = options.unit, _d = options.zoom, zoom = _d === void 0 ? true : _d, bound = options.bound, _e = options.movable, movable = _e === void 0 ? true : _e;
            // 初始画布中心点
            this._canvasCenter = { x: width / 2, y: height / 2 };
            // 初始内容中心点
            this._contentCenter = __assign({}, this._canvasCenter);
            /** 移动配置 */
            this.movable = movable;
            /** 缩放配置 */
            var _f = zoom === true
                ? DEFAULT_ZOOM_SETTING
                : typeof zoom === 'object' ? zoom : { disabled: true }, _g = _f.disabled, disabled = _g === void 0 ? false : _g, _h = _f.min, min = _h === void 0 ? 1 : _h, _j = _f.max, max = _j === void 0 ? 100 : _j, _k = _f.center, center = _k === void 0 ? 'canvas' : _k;
            // 是否可缩放
            this.zoomable = !disabled;
            // 缩放限制
            this.zoomLimit = min > 0 && min <= max ? [min, max] : [1, 100];
            // 缩放中心
            this.zoomCenter = center;
            /** 单位像素格配置 */
            var _l = unit || {}, _m = _l.size, unitSize = _m === void 0 ? 1 : _m, _o = _l.gap, unitGap = _o === void 0 ? 0 : _o, _p = _l.sticky, sticky = _p === void 0 ? false : _p;
            // 单位像素格至少需要1像素
            this.unitSize = Math.max(1, Math.ceil(unitSize));
            // 单位像素格间距不允许小于0
            this.unitGap = Math.max(0, Math.ceil(unitGap));
            // 是否移动粘连
            this.sticky = sticky;
            /** 初始边界，默认无边界（无限拖拽） */
            if (bound)
                this.bound = [
                    Math.max(width, (_a = bound[0]) !== null && _a !== void 0 ? _a : Infinity),
                    Math.max(height, (_b = bound[1]) !== null && _b !== void 0 ? _b : Infinity),
                ];
        };
        /**
         * 更新画布
         */
        UnboundedCanvas.prototype.updateCanvas = function (width, height) {
            if (!this._container)
                return;
            var _a = this._container, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            var _b = this.getOptions(), oldCanvasCenter = _b.canvasCenter, contentCenter = _b.contentCenter;
            this.initCanvas({ width: width, height: height });
            this._canvasCenter = {
                x: clientWidth / 2,
                y: clientHeight / 2,
            };
            this._contentCenter = {
                x: contentCenter.x + (this._canvasCenter.x - oldCanvasCenter.x),
                y: contentCenter.y + (this._canvasCenter.y - oldCanvasCenter.y),
            };
            this.render();
        };
        /**
         * 添加渲染图层
         */
        UnboundedCanvas.prototype.addLayer = function (options) {
            if (!this._container)
                throw ReferenceError('missing canvas container!');
            var _a = this._container, width = _a.clientWidth, height = _a.clientHeight;
            var type = options.type, _b = options.zIndex, zIndex = _b === void 0 ? 1 : _b, uniqueKey = options.uniqueKey, restOptions = __rest(options, ["type", "zIndex", "uniqueKey"]);
            // 判断key值已存在，存在直接抛出错误
            if (uniqueKey && this._layers.some(function (_a) {
                var name = _a.name;
                return name === uniqueKey;
            })) {
                throw new Error("layer named ".concat(uniqueKey, " already exists!"));
            }
            var canvas = new ({
                '2d': Canvas2d,
                'webgl': CanvasWebGL,
            }[type])(width * this.devicePixelRatio, height * this.devicePixelRatio, __assign({ styles: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                } }, restOptions));
            var canvasList = this._container.childNodes;
            var insertIndex = this._layers.findIndex(function (layer) { return layer.zIndex > zIndex; });
            if (insertIndex === -1)
                insertIndex = this._layers.length;
            var element = canvas.getElement();
            if (!element)
                throw ReferenceError('missing canvas element!');
            this._container.insertBefore(element, canvasList[insertIndex]);
            this._layers.splice(insertIndex, 0, { canvas: canvas, zIndex: zIndex, name: uniqueKey });
            return canvas;
        };
        /**
         * 添加普通2d画布
         */
        UnboundedCanvas.prototype.add2dLayer = function (handler, options) {
            if (options === void 0) { options = {}; }
            var canvas = this.addLayer(__assign({ type: '2d' }, options));
            canvas.addRender(handler).renderAll();
            return canvas;
        };
        /**
         * 添加webgl画布
         */
        UnboundedCanvas.prototype.addWebGLLayer = function (handler, options) {
            if (options === void 0) { options = {}; }
            var canvas = this.addLayer(__assign({ type: 'webgl' }, options));
            canvas.addRender(handler).renderAll();
            return canvas;
        };
        /**
         * 获取图层画布
         */
        UnboundedCanvas.prototype.getLayer = function (key) {
            var _a;
            return (_a = this._layers.find(function (_a) {
                var name = _a.name;
                return name === key;
            })) === null || _a === void 0 ? void 0 : _a.canvas;
        };
        /**
         * 移除图层画布
         */
        UnboundedCanvas.prototype.removeLayer = function (target) {
            var _a;
            var index = this._layers.findIndex(function (_a) {
                var name = _a.name, canvas = _a.canvas;
                return typeof target === 'string'
                    ? name === target
                    : canvas === target;
            });
            if (index === -1)
                return;
            var canvas = this._layers[index].canvas;
            var canvasNode = canvas.getElement();
            canvas.dispose();
            (_a = canvasNode === null || canvasNode === void 0 ? void 0 : canvasNode.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(canvasNode);
            this._layers.splice(index, 1);
        };
        /**
         * 获取画布参数
         */
        UnboundedCanvas.prototype.getOptions = function () {
            var _a, _b, _c;
            var _d = (_a = this._container) !== null && _a !== void 0 ? _a : {
                clientWidth: 0,
                clientHeight: 0,
            }, width = _d.clientWidth, height = _d.clientHeight;
            return {
                width: width * this.devicePixelRatio,
                height: height * this.devicePixelRatio,
                devicePixelRatio: this.devicePixelRatio,
                unitSize: this.unitSize * this.devicePixelRatio * this.zoom,
                unitGap: this.unitGap * this.devicePixelRatio * this.zoom,
                zoom: this.zoom,
                zoomLimit: this.zoomLimit,
                canvasCenter: (_b = this._canvasCenter) !== null && _b !== void 0 ? _b : __assign({}, EMPTY_COORDINATE),
                contentCenter: (_c = this._contentCenter) !== null && _c !== void 0 ? _c : __assign({}, EMPTY_COORDINATE),
            };
        };
        /**
         * 直接设置内容中心
         */
        UnboundedCanvas.prototype.setContentCenter = function (coord) {
            this._contentCenter = coord;
            this.render();
        };
        /**
         * 初始画布监听器
         */
        UnboundedCanvas.prototype.initListeners = function () {
            if (!this._container)
                return;
            this.movable && this.initMoveListener();
            this.zoomable && this.initZoomListener();
        };
        /**
         * 根据页面坐标获取单位像素坐标（相对于内容中心而不是画布中心）
         */
        UnboundedCanvas.prototype.viewCoords2UnitPoint = function (x, y) {
            var _a = this.getOptions(), unitSize = _a.unitSize, unitGap = _a.unitGap, canvasCenter = _a.canvasCenter;
            var size = unitSize + unitGap;
            var halfSize = unitSize / 2;
            // 计算点击坐标到画布中心的距离
            var distanceCanvasCenter = {
                x: x - canvasCenter.x,
                y: y - canvasCenter.y,
            };
            return [
                Math.floor((distanceCanvasCenter.x * this.devicePixelRatio + halfSize) / size),
                Math.floor((distanceCanvasCenter.y * this.devicePixelRatio + halfSize) / size),
            ];
        };
        /**
         * 根据单位像素坐标获取页面坐标（相对于画布左上角）
         */
        UnboundedCanvas.prototype.unitPoint2ViewCoords = function (x, y, contentCenter) {
            var _a;
            if (contentCenter === void 0) { contentCenter = (_a = this._contentCenter) !== null && _a !== void 0 ? _a : __assign({}, EMPTY_COORDINATE); }
            var _b = this.getOptions(), unitSize = _b.unitSize, unitGap = _b.unitGap, canvasCenter = _b.canvasCenter;
            var size = unitSize + unitGap;
            // 方块中心到内容中心位置
            var blockPosition = {
                x: (x * size) / this.devicePixelRatio,
                y: (y * size) / this.devicePixelRatio,
            };
            // 方块中心到画布中心的距离
            var distanceCanvasCenter = {
                x: blockPosition.x - (canvasCenter.x - contentCenter.x),
                y: blockPosition.y - (canvasCenter.y - contentCenter.y),
            };
            return {
                x: distanceCanvasCenter.x + canvasCenter.x,
                y: distanceCanvasCenter.y + canvasCenter.y,
            };
        };
        /**
         * 计算单位像素格子绘制起始点
         * @param contentCenter 指定内容中心点
         */
        UnboundedCanvas.prototype.getUnitFirstPoint = function (contentCenter) {
            var _a;
            if (contentCenter === void 0) { contentCenter = (_a = this._canvasCenter) !== null && _a !== void 0 ? _a : __assign({}, EMPTY_COORDINATE); }
            var _b = this.getOptions(), unitSize = _b.unitSize, unitGap = _b.unitGap;
            var size = unitSize + unitGap;
            var halfSize = unitSize / 2;
            // 中心方块左上角与画布左上角的距离
            var centerOffset = {
                x: contentCenter.x * this.devicePixelRatio - halfSize,
                y: contentCenter.y * this.devicePixelRatio - halfSize,
            };
            // 中心方块左上角与画布左上角的距离可以再加多少个矩形
            var rest = {
                top: Math.ceil(centerOffset.y / size),
                left: Math.ceil(centerOffset.x / size),
            };
            // 单位格绘制矩形起始点
            var unitDrawStartPoint = {
                x: centerOffset.x - rest.left * size,
                y: centerOffset.y - rest.top * size,
            };
            return unitDrawStartPoint;
        };
        /**
         * 渲染画布
         */
        UnboundedCanvas.prototype.render = function () {
            var _this = this;
            var renderFrame = function (renderNextFrame) {
                window.requestAnimationFrame(function () {
                    _this._layers.forEach(function (_a) {
                        var canvas = _a.canvas;
                        return canvas.renderAll();
                    });
                    if (renderNextFrame)
                        renderNextFrame();
                });
            };
            var renderNextFrame = function () {
                if (_this.nextRender) {
                    var draw = _this.nextRender;
                    _this.nextRender = undefined;
                    if (draw)
                        draw(renderNextFrame);
                }
            };
            var currentTime = new Date().getTime();
            if (this.preRenderTime && currentTime - this.preRenderTime < 10) {
                this.nextRender = renderFrame;
            }
            else {
                this.preRenderTime = currentTime;
                renderFrame(renderNextFrame);
            }
        };
        /**
         * 边界约束
         */
        UnboundedCanvas.prototype.limitBound = function (contentCenter) {
            var _a = this.getOptions(), canvasCenter = _a.canvasCenter, zoom = _a.zoom;
            var _b = this.bound, boundWidth = _b[0], boundHeight = _b[1];
            var _c = [
                boundWidth / 2 * zoom,
                boundHeight / 2 * zoom,
            ], halfBoundWidth = _c[0], halfBoundHeight = _c[1];
            var newX = contentCenter.x, newY = contentCenter.y;
            // 左边界检测
            if (newX > halfBoundWidth)
                newX = halfBoundWidth;
            // 右边界检测
            if (newX < -halfBoundWidth + canvasCenter.x * 2)
                newX = -halfBoundWidth + canvasCenter.x * 2;
            // 上边界检测
            if (newY > halfBoundHeight)
                newY = halfBoundHeight;
            // 下边界检测
            if (newY < -halfBoundHeight + canvasCenter.y * 2)
                newY = -halfBoundHeight + canvasCenter.y * 2;
            return { x: newX, y: newY };
        };
        /**
         * 缩放
         */
        UnboundedCanvas.prototype.handleZoom = function (newZoom, focusPoint) {
            var _this = this;
            var _a;
            if (focusPoint === void 0) { focusPoint = (_a = this._canvasCenter) !== null && _a !== void 0 ? _a : __assign({}, EMPTY_COORDINATE); }
            var _b = this.getOptions(), width = _b.width, height = _b.height, unitSize = _b.unitSize, contentCenter = _b.contentCenter; _b.canvasCenter; var devicePixelRatio = _b.devicePixelRatio;
            var _c = this.bound, boundWidth = _c[0], boundHeight = _c[1];
            var preZoom = this.zoom;
            // 如果会导致内容尺寸小于画布尺寸不执行缩放
            var _d = [
                width / boundWidth / devicePixelRatio,
                height / boundHeight / devicePixelRatio,
            ], xMinZoom = _d[0], yMinZoom = _d[1];
            this.zoom = newZoom < xMinZoom || newZoom < yMinZoom
                ? Math.max(xMinZoom, yMinZoom)
                : newZoom;
            // 旧的内容中心点到鼠标聚焦点的距离
            var oldDistance = {
                x: contentCenter.x - focusPoint.x,
                y: contentCenter.y - focusPoint.y,
            };
            // 新的内容中心点到鼠标聚焦点的距离
            var newDistance = {
                x: oldDistance.x / preZoom * this.zoom,
                y: oldDistance.y / preZoom * this.zoom,
            };
            this._contentCenter = this.limitBound({
                x: contentCenter.x + (newDistance.x - oldDistance.x),
                y: contentCenter.y + (newDistance.y - oldDistance.y),
            });
            this.render();
            // 如果是粘连效果，100毫秒后执行
            if (this.sticky) {
                if (this.zoomStickyTimer)
                    clearTimeout(this.zoomStickyTimer);
                this.zoomStickyTimer = setTimeout(function () {
                    var contentCenter = _this.getOptions().contentCenter;
                    var point = _this.viewCoords2UnitPoint(contentCenter.x, contentCenter.y);
                    _this.focus(point, { duration: Math.min(unitSize * 5, 300) });
                    _this.zoomStickyTimer = undefined;
                    clearTimeout(_this.zoomStickyTimer);
                }, 300);
            }
        };
        /**
         * 移动监听
         */
        UnboundedCanvas.prototype.initMoveListener = function () {
            var _this = this;
            /** 是否可拖拽移动 */
            var movable = false;
            var changeCursor = function (type) {
                if (_this._container)
                    _this._container.style.cursor = type;
            };
            var handleReady = function (event) {
                if (movable || !_this._container)
                    return;
                movable = event.code === 'Space';
                changeCursor('grab');
            };
            var handleStart = function (event) {
                if (!movable || !_this._container)
                    return;
                // 不是鼠标左键点击不可拖拽
                if (event.which !== 1)
                    return;
                var contentCenter = _this.getOptions().contentCenter;
                _this.moveInitDistance = {
                    x: event.offsetX - contentCenter.x,
                    y: event.offsetY - contentCenter.y,
                };
                changeCursor('grabbing');
            };
            var handleQuicklyMove = function (event) {
                event.preventDefault();
                if (!_this._container)
                    return;
                var contentCenter = _this.getOptions().contentCenter;
                _this.moveInitDistance = {
                    x: event.offsetX - contentCenter.x,
                    y: event.offsetY - contentCenter.y,
                };
                changeCursor('grabbing');
            };
            var handleMoving = function (event) {
                if (_this.moveInitDistance === undefined)
                    return;
                _this._contentCenter = _this.limitBound({
                    x: event.offsetX - _this.moveInitDistance.x,
                    y: event.offsetY - _this.moveInitDistance.y,
                });
                _this.render();
            };
            var handleEnd = function () {
                if (!_this._container)
                    return;
                var _a = _this.getOptions(), unitSize = _a.unitSize, contentCenter = _a.contentCenter;
                if (_this.moveInitDistance) {
                    // 如果粘连，格子会保持原有的格子区域
                    if (_this.sticky) {
                        if (_this.zoomStickyTimer)
                            clearTimeout(_this.zoomStickyTimer);
                        var point = _this.viewCoords2UnitPoint(contentCenter.x, contentCenter.y);
                        _this.focus(point, { duration: Math.min(unitSize * 5, 300) });
                    }
                    else
                        _this.render();
                }
                movable = false;
                _this.moveInitDistance = undefined;
                changeCursor('default');
            };
            this.controlNaturalListener('on', {
                eventName: 'contextmenu',
                handler: handleQuicklyMove,
            });
            this.controlNaturalListener('on', {
                eventName: 'keydown',
                handler: handleReady,
                window: true,
            });
            this.controlNaturalListener('on', {
                eventName: 'keyup',
                handler: handleEnd,
                window: true,
            });
            this.controlNaturalListener('on', {
                eventName: 'mousedown',
                handler: handleStart,
            });
            this.controlNaturalListener('on', {
                eventName: 'mousemove',
                handler: handleMoving,
            });
            this.controlNaturalListener('on', {
                eventName: 'mouseup',
                handler: handleEnd,
            });
            this.controlNaturalListener('on', {
                eventName: 'mouseleave',
                handler: handleEnd,
            });
        };
        /**
         * 缩放监听
         */
        UnboundedCanvas.prototype.initZoomListener = function () {
            var _this = this;
            this.controlNaturalListener('on', {
                eventName: 'wheel',
                handler: function (event) {
                    var _a, _b;
                    if (_this.moveInitDistance)
                        return;
                    if (_this.currentFocusing) {
                        (_b = (_a = _this.currentFocusing).cancel) === null || _b === void 0 ? void 0 : _b.call(_a);
                        _this.currentFocusing = undefined;
                    }
                    var _c = _this.getOptions(), canvasCenter = _c.canvasCenter, contentCenter = _c.contentCenter;
                    var offsetX = event.offsetX, offsetY = event.offsetY, deltaY = event.deltaY;
                    var dZoom = Math.pow(0.999, (deltaY / 2));
                    var newZoom = Math.min(Math.max(_this.zoom * dZoom, _this.zoomLimit[0]), _this.zoomLimit[1]);
                    _this.handleZoom(newZoom, {
                        'canvas': canvasCenter,
                        'content': contentCenter,
                        'operation': { x: offsetX, y: offsetY },
                    }[_this.zoomCenter]);
                }
            });
        };
        /**
         * 聚焦到某个特定坐标点，坐标点相对于内容画布
         */
        UnboundedCanvas.prototype.focus = function (point, options) {
            var _a, _b;
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _c, speedMode, duration, _d, unitSize, unitGap, canvasCenter, contentCenter, pointCoord, oldContentCoords, distanceContentCenter, maxDistance, distanceGridLength, time;
                var _this = this;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (!this.movable)
                                return [2 /*return*/];
                            if (this.currentFocusing) {
                                (_b = (_a = this.currentFocusing).cancel) === null || _b === void 0 ? void 0 : _b.call(_a);
                                this.currentFocusing = undefined;
                            }
                            _c = options.speedMode, speedMode = _c === void 0 ? 'ease-in-out' : _c, duration = options.duration;
                            _d = this.getOptions(), unitSize = _d.unitSize, unitGap = _d.unitGap, canvasCenter = _d.canvasCenter, contentCenter = _d.contentCenter;
                            pointCoord = this.unitPoint2ViewCoords.apply(this, __spreadArray(__spreadArray([], point, false), [canvasCenter], false));
                            oldContentCoords = __assign({}, contentCenter);
                            distanceContentCenter = {
                                x: pointCoord.x - oldContentCoords.x,
                                y: pointCoord.y - oldContentCoords.y,
                            };
                            maxDistance = Math.max(Math.abs(distanceContentCenter.x), Math.abs(distanceContentCenter.y));
                            distanceGridLength = Math.ceil(maxDistance * this.devicePixelRatio / (unitSize + unitGap));
                            time = duration !== null && duration !== void 0 ? duration : Math.max(Math.min(distanceGridLength * 50, 2000), 300);
                            // 在指定时间内通过特定过渡方式变成指定值
                            return [4 /*yield*/, t(time, {
                                    mode: speedMode,
                                    onUpdate: function (percent, cancel) {
                                        _this._contentCenter = {
                                            x: oldContentCoords.x + distanceContentCenter.x * percent,
                                            y: oldContentCoords.y + distanceContentCenter.y * percent,
                                        };
                                        _this.render();
                                        _this.currentFocusing = { percent: percent, cancel: cancel };
                                    }
                                })];
                        case 1:
                            // 在指定时间内通过特定过渡方式变成指定值
                            _e.sent();
                            this.currentFocusing = undefined;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 控制原生监听器
         */
        UnboundedCanvas.prototype.controlNaturalListener = function (type, options) {
            var eventName = options.eventName, handler = options.handler, _options = options.options, _a = options.window, isWindow = _a === void 0 ? false : _a;
            var listenerTarget = isWindow ? window : this._container;
            if (!listenerTarget)
                return;
            var listenerIndex = this._listeners.findIndex(function (listener) {
                return listener.eventName === eventName
                    && listener.handler === handler
                    && (listener.options === _options || (listener.options === undefined && _options === undefined));
            });
            if (type === 'on') {
                if (listenerIndex !== -1)
                    return;
                this._listeners.push({
                    eventName: eventName,
                    handler: handler,
                    options: _options,
                    window: isWindow,
                });
                listenerTarget.addEventListener(eventName, handler, _options);
            }
            else {
                if (listenerIndex === -1)
                    return;
                listenerTarget.removeEventListener(eventName, handler, _options);
                this._listeners.splice(listenerIndex, 1);
            }
        };
        /**
         * 监听事件
         */
        UnboundedCanvas.prototype.on = function (eventName, handler, options) {
            this.controlNaturalListener('on', { eventName: eventName, handler: handler, options: options });
        };
        /**
         * 移除监听事件
         */
        UnboundedCanvas.prototype.off = function (eventName, handler, options) {
            this.controlNaturalListener('off', {
                eventName: eventName,
                handler: handler,
                options: options,
            });
        };
        /**
         * 画布销毁
         */
        UnboundedCanvas.prototype.dispose = function () {
            if (!this._container || !this._store)
                return;
            var parentNode = this._container.parentNode;
            if (!parentNode)
                return;
            // 清除监听事件
            var listeners = __spreadArray([], this._listeners, true);
            while (listeners.length) {
                var listener = listeners.pop();
                if (listener)
                    this.controlNaturalListener('off', listener);
            }
            // 清空图层
            this._layers = [];
            while (this._layers.length) {
                var layers = this._layers.pop();
                if (!layers)
                    continue;
                var canvas = layers.canvas;
                var element = canvas.getElement();
                canvas.dispose();
                if (element)
                    parentNode.removeChild(element);
            }
            // 还原画布
            parentNode.insertBefore(this._store, this._container);
            parentNode.removeChild(this._container);
            // 初始数据
            this.moveInitDistance = undefined;
            this.preRenderTime = undefined;
            this.sticky = false;
            this.movable = true;
            this.zoomable = true;
            this.zoomCenter = 'canvas';
            this.unitGap = 0;
            this.unitSize = 1;
            this.zoom = 1;
            this.zoomLimit = [
                DEFAULT_ZOOM_SETTING.min,
                DEFAULT_ZOOM_SETTING.max,
            ];
            // 置空数据
            this._canvasCenter = null;
            this._contentCenter = null;
            this._store = null;
            this._container = null;
        };
        return UnboundedCanvas;
    }());

    /**
     * 绘制线条
     */
    var getLineDrawer = (function (ctx) { return function (startPoint, endPoint) {
        ctx.beginPath();
        ctx.moveTo.apply(ctx, startPoint);
        ctx.lineTo.apply(ctx, endPoint);
        ctx.stroke();
    }; });

    /**
     * 绘制可设置圆角的矩形
     */
    var getRectDrawer = (function (ctx, composeCroods) {
        return function (x, y, w, h, radius) {
            if (radius === void 0) { radius = 0; }
            var _a = composeCroods({
                left: x,
                top: y,
                width: w,
                height: h,
            }), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
            var r = w > radius * 2 ? radius : 0;
            if (r < 1) {
                ctx.fillRect(left, top, width, height);
                return;
            }
            ctx.beginPath();
            ctx.moveTo(left + r, top);
            ctx.lineTo(left + width - r, top);
            r && ctx.arcTo(left + width, top, left + width, top + r, radius);
            ctx.lineTo(left + width, top + height - r);
            r && ctx.arcTo(left + width, top + height, left + width - r, top + height, radius);
            ctx.lineTo(left + r, top + height);
            r && ctx.arcTo(left, top + height, left, top + height - r, radius);
            ctx.lineTo(left, top + r);
            r && ctx.arcTo(left, top, left + r, top, radius);
            ctx.closePath();
            ctx.fill();
        };
    });

    /**
     * 绘制文本
     */
    var getTextDrawer = (function (ctx, composeCroods) {
        return function (text, x, y) {
            var measure = ctx.measureText(text);
            var _a = composeCroods({
                left: x,
                top: y,
                width: measure.width,
                height: measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent,
            }), left = _a.left, top = _a.top;
            ctx.fillText(text, left, top);
        };
    });

    /**
     * 绘制图像
     */
    var getImageDrawer = (function (ctx, composeCroods) {
        return function (image, x, y, w, h) {
            var _a = composeCroods({
                left: x,
                top: y,
                width: w !== null && w !== void 0 ? w : image.width,
                height: h !== null && h !== void 0 ? h : image.height,
            }), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
            ctx.drawImage(image, left, top, width, height);
        };
    });

    /** 单位矩阵 */
    var UNIT_MATRIX = [1, 0, 0, 1, 0, 0];
    /**
     * 行为变换矩阵
     */
    var BEHAVE_MATRICES = (function () {
        /**
         * 转化为matrix所用的角度值
         */
        var transformMatrixAngle = function (angle) {
            if (angle === void 0) { angle = 0; }
            return (angle * Math.PI) / 180;
        };
        return {
            'move': function (x, y) { return [1, 0, 0, 1, x, y]; },
            'rotate': function (angle) {
                var _angle = transformMatrixAngle(angle);
                return [
                    Math.cos(_angle),
                    Math.sin(_angle),
                    -Math.sin(_angle),
                    Math.cos(_angle),
                    0, 0,
                ];
            },
            'scale': function (x, y) { return [x, 0, 0, y, 0, 0]; },
            'flip': function (x, y) {
                if (x === void 0) { x = false; }
                if (y === void 0) { y = false; }
                // [1 0] [-1 0]
                // [0 1] [0 -1]
                return [
                    x ? -1 : 1,
                    0,
                    0,
                    y ? -1 : 1,
                    0,
                    0,
                ];
            },
            'skew': function (angleX, angleY) {
                var _angleX = transformMatrixAngle(angleX);
                var _angleY = transformMatrixAngle(angleY);
                return [1, Math.tan(_angleY), Math.tan(_angleX), 1, 0, 0];
            }
        };
    })();
    /**
     * 转换值矩阵相乘
     */
    var multiplyTransformMatrix = function (a, b) {
        // [a:0 c:2 e:4]
        // [b:1 d:3 f:5]
        return [
            a[0] * b[0] + a[2] * b[1],
            a[1] * b[0] + a[3] * b[1],
            a[0] * b[2] + a[2] * b[3],
            a[1] * b[2] + a[3] * b[3],
            a[0] * b[4] + a[2] * b[5] + a[4],
            a[1] * b[4] + a[3] * b[5] + a[5],
        ];
    };
    /**
     * 多转换值相乘
     * 其效果等同多种转换形式的叠加
     */
    var multiplyTransformMatrices = function (matrices) {
        return matrices.reduce(function (result, item) {
            return multiplyTransformMatrix(result, item);
        }, UNIT_MATRIX);
    };

    /** 变换默认值 */
    var TRANSFORM_DEFAULT_SETTING = {
        originX: 'left',
        originY: 'top',
        scaleX: 1,
        scaleY: 1,
        flipX: false,
        flipY: false,
        angle: 0,
        skewX: 0,
        skewY: 0,
    };
    var getDrawers = function (ctx) {
        if (!ctx)
            throw ReferenceError('ctx is no define');
        /**
         * 样式覆盖
         */
        var overwriteStyle = function (styleSetter) {
            /** 设置公用默认参数 */
            ctx.textBaseline = 'hanging';
            if (styleSetter === undefined)
                return;
            // 如果是配置函数直接执行
            if (typeof styleSetter === 'function') {
                styleSetter(ctx);
                return;
            }
            // 如果是配置参数，处理部分参数并覆盖样式
            var keys = Object.keys(styleSetter);
            keys.forEach(function (key) {
                var value = styleSetter[key];
                if (value === undefined)
                    return;
                var _a = ctx.font.split(' '), size = _a[0], familyPart = _a.slice(1);
                switch (key) {
                    case 'originX':
                    case 'originY':
                    case 'scaleX':
                    case 'scaleY':
                    case 'flipX':
                    case 'flipY':
                    case 'angle':
                    case 'skewX':
                    case 'skewY':
                        break;
                    case 'fontSize':
                        ctx.font = "".concat(value, "px ").concat(familyPart.join(''));
                        break;
                    case 'fontFamily':
                        ctx.font = "".concat(size, " \"").concat(value, "\"");
                        break;
                    case 'lineDash':
                        ctx.setLineDash(value);
                        break;
                    case 'opacity':
                        ctx.globalAlpha = value;
                        break;
                    // @ts-ignore
                    default: ctx[key] = value;
                }
            });
        };
        /**
         * 获取绘制函数集合
         * @param styleSetter 配置绘制样式
         * @param configs 配置
         */
        var getProtectdrawers = function (styleSetter, configs) {
            if (configs === void 0) { configs = {}; }
            var _a = configs.temporary, temporary = _a === void 0 ? true : _a;
            /**
             * 使绘制添加的新配置不破坏原有的绘制配置
             * @param drawerGetter 形状绘制获取
             * @param styleSetter 配置绘制样式
             */
            var protect = function (drawerGetter, styleSetter) {
                if (styleSetter === void 0) { styleSetter = {}; }
                var transform = Object.keys(styleSetter)
                    .reduce(function (result, key) {
                    if (TRANSFORM_DEFAULT_SETTING[key] === undefined)
                        return result;
                    if (styleSetter[key] === TRANSFORM_DEFAULT_SETTING[key])
                        return result;
                    result[key] = styleSetter[key];
                    return result;
                }, {});
                var withTransform = function (positionAndSize) {
                    if (Object.keys(transform).length === 0)
                        return positionAndSize;
                    var top = positionAndSize.top, left = positionAndSize.left, width = positionAndSize.width, height = positionAndSize.height;
                    var _a = transform.originX, originX = _a === void 0 ? 'left' : _a, _b = transform.originY, originY = _b === void 0 ? 'top' : _b, _c = transform.scaleX, scaleX = _c === void 0 ? 1 : _c, _d = transform.scaleY, scaleY = _d === void 0 ? 1 : _d, _e = transform.flipX, flipX = _e === void 0 ? false : _e, _f = transform.flipY, flipY = _f === void 0 ? false : _f, _g = transform.angle, angle = _g === void 0 ? 0 : _g, _h = transform.skewX, skewX = _h === void 0 ? 0 : _h, _j = transform.skewY, skewY = _j === void 0 ? 0 : _j;
                    var offset = {
                        x: {
                            'left': 0,
                            'center': width / 2,
                            'right': width,
                        }[originX],
                        y: {
                            'top': 0,
                            'center': height / 2,
                            'bottom': height,
                        }[originY],
                    };
                    var transformQueue = [
                        // 位移
                        BEHAVE_MATRICES.move(left, top),
                        // 缩放
                        BEHAVE_MATRICES.scale(scaleX, scaleY),
                        // 旋转
                        BEHAVE_MATRICES.rotate(angle),
                        // 变形
                        BEHAVE_MATRICES.skew(skewX, skewY),
                        // 翻转
                        BEHAVE_MATRICES.flip(flipX, flipY),
                        BEHAVE_MATRICES.move(flipX ? -width : -offset.x * 2, flipY ? -height : -offset.y * 2),
                    ];
                    ctx.transform.apply(ctx, multiplyTransformMatrices(transformQueue));
                    return {
                        left: offset.x,
                        top: offset.y,
                        width: width,
                        height: height,
                    };
                };
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            temporary && ctx.save();
                            overwriteStyle(styleSetter);
                            drawerGetter(ctx, withTransform).apply(void 0, args);
                            if (transform && !temporary)
                                ctx.resetTransform();
                            temporary && ctx.restore();
                            return [2 /*return*/, ctx];
                        });
                    });
                };
            };
            return {
                line: protect(getLineDrawer, styleSetter),
                rect: protect(getRectDrawer, styleSetter),
                text: protect(getTextDrawer, styleSetter),
                image: protect(getImageDrawer, styleSetter),
            };
        };
        return __assign({ style: getProtectdrawers }, getProtectdrawers());
    };

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

    var fontfaceobserver_standalone = {exports: {}};

    /* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */

    (function (module) {
      (function () {
        function p(a, c) {
          document.addEventListener ? a.addEventListener("scroll", c, !1) : a.attachEvent("scroll", c);
        }

        function u(a) {
          document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function b() {
            document.removeEventListener("DOMContentLoaded", b);
            a();
          }) : document.attachEvent("onreadystatechange", function g() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", g), a();
          });
        }

        function w(a) {
          this.g = document.createElement("div");
          this.g.setAttribute("aria-hidden", "true");
          this.g.appendChild(document.createTextNode(a));
          this.h = document.createElement("span");
          this.i = document.createElement("span");
          this.m = document.createElement("span");
          this.j = document.createElement("span");
          this.l = -1;
          this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
          this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
          this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
          this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
          this.h.appendChild(this.m);
          this.i.appendChild(this.j);
          this.g.appendChild(this.h);
          this.g.appendChild(this.i);
        }

        function x(a, c) {
          a.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + c + ";";
        }

        function B(a) {
          var c = a.g.offsetWidth,
              b = c + 100;
          a.j.style.width = b + "px";
          a.i.scrollLeft = b;
          a.h.scrollLeft = a.h.scrollWidth + 100;
          return a.l !== c ? (a.l = c, !0) : !1;
        }

        function C(a, c) {
          function b() {
            var e = g;
            B(e) && null !== e.g.parentNode && c(e.l);
          }

          var g = a;
          p(a.h, b);
          p(a.i, b);
          B(a);
        }

        function D(a, c, b) {
          c = c || {};
          b = b || window;
          this.family = a;
          this.style = c.style || "normal";
          this.weight = c.weight || "normal";
          this.stretch = c.stretch || "normal";
          this.context = b;
        }

        var E = null,
            F = null,
            G = null,
            H = null;

        function I(a) {
          null === F && (M(a) && /Apple/.test(window.navigator.vendor) ? (a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), F = !!a && 603 > parseInt(a[1], 10)) : F = !1);
          return F;
        }

        function M(a) {
          null === H && (H = !!a.document.fonts);
          return H;
        }

        function N(a, c) {
          var b = a.style,
              g = a.weight;

          if (null === G) {
            var e = document.createElement("div");

            try {
              e.style.font = "condensed 100px sans-serif";
            } catch (q) {}

            G = "" !== e.style.font;
          }

          return [b, g, G ? a.stretch : "", "100px", c].join(" ");
        }

        D.prototype.load = function (a, c) {
          var b = this,
              g = a || "BESbswy",
              e = 0,
              q = c || 3E3,
              J = new Date().getTime();
          return new Promise(function (K, L) {
            if (M(b.context) && !I(b.context)) {
              var O = new Promise(function (r, t) {
                function h() {
                  new Date().getTime() - J >= q ? t(Error("" + q + "ms timeout exceeded")) : b.context.document.fonts.load(N(b, '"' + b.family + '"'), g).then(function (n) {
                    1 <= n.length ? r() : setTimeout(h, 25);
                  }, t);
                }

                h();
              }),
                  P = new Promise(function (r, t) {
                e = setTimeout(function () {
                  t(Error("" + q + "ms timeout exceeded"));
                }, q);
              });
              Promise.race([P, O]).then(function () {
                clearTimeout(e);
                K(b);
              }, L);
            } else u(function () {
              function r() {
                var d;
                if (d = -1 != k && -1 != l || -1 != k && -1 != m || -1 != l && -1 != m) (d = k != l && k != m && l != m) || (null === E && (d = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), E = !!d && (536 > parseInt(d[1], 10) || 536 === parseInt(d[1], 10) && 11 >= parseInt(d[2], 10))), d = E && (k == y && l == y && m == y || k == z && l == z && m == z || k == A && l == A && m == A)), d = !d;
                d && (null !== f.parentNode && f.parentNode.removeChild(f), clearTimeout(e), K(b));
              }

              function t() {
                if (new Date().getTime() - J >= q) null !== f.parentNode && f.parentNode.removeChild(f), L(Error("" + q + "ms timeout exceeded"));else {
                  var d = b.context.document.hidden;
                  if (!0 === d || void 0 === d) k = h.g.offsetWidth, l = n.g.offsetWidth, m = v.g.offsetWidth, r();
                  e = setTimeout(t, 50);
                }
              }

              var h = new w(g),
                  n = new w(g),
                  v = new w(g),
                  k = -1,
                  l = -1,
                  m = -1,
                  y = -1,
                  z = -1,
                  A = -1,
                  f = document.createElement("div");
              f.dir = "ltr";
              x(h, N(b, "sans-serif"));
              x(n, N(b, "serif"));
              x(v, N(b, "monospace"));
              f.appendChild(h.g);
              f.appendChild(n.g);
              f.appendChild(v.g);
              b.context.document.body.appendChild(f);
              y = h.g.offsetWidth;
              z = n.g.offsetWidth;
              A = v.g.offsetWidth;
              t();
              C(h, function (d) {
                k = d;
                r();
              });
              x(h, N(b, '"' + b.family + '",sans-serif'));
              C(n, function (d) {
                l = d;
                r();
              });
              x(n, N(b, '"' + b.family + '",serif'));
              C(v, function (d) {
                m = d;
                r();
              });
              x(v, N(b, '"' + b.family + '",monospace'));
            });
          });
        };

        module.exports = D ;
      })();
    })(fontfaceobserver_standalone);

    var Fontfaceobserver = fontfaceobserver_standalone.exports;

    // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).
    let getRandomValues;
    const rnds8 = new Uint8Array(16);
    function rng() {
      // lazy load so that environments that need to polyfill have a chance to do so
      if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

        if (!getRandomValues) {
          throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
      }

      return getRandomValues(rnds8);
    }

    var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function validate(uuid) {
      return typeof uuid === 'string' && REGEX.test(uuid);
    }

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */

    const byteToHex = [];

    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).slice(1));
    }

    function unsafeStringify(arr, offset = 0) {
      // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
      return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    }

    function parse(uuid) {
      if (!validate(uuid)) {
        throw TypeError('Invalid UUID');
      }

      let v;
      const arr = new Uint8Array(16); // Parse ########-....-....-....-............

      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 0xff;
      arr[2] = v >>> 8 & 0xff;
      arr[3] = v & 0xff; // Parse ........-####-....-....-............

      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 0xff; // Parse ........-....-####-....-............

      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 0xff; // Parse ........-....-....-####-............

      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 0xff; // Parse ........-....-....-....-############
      // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
      arr[11] = v / 0x100000000 & 0xff;
      arr[12] = v >>> 24 & 0xff;
      arr[13] = v >>> 16 & 0xff;
      arr[14] = v >>> 8 & 0xff;
      arr[15] = v & 0xff;
      return arr;
    }

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)); // UTF8 escape

      const bytes = [];

      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }

      return bytes;
    }

    const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    function v35(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var _namespace;

        if (typeof value === 'string') {
          value = stringToBytes(value);
        }

        if (typeof namespace === 'string') {
          namespace = parse(namespace);
        }

        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
          throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`


        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;

        if (buf) {
          offset = offset || 0;

          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }

          return buf;
        }

        return unsafeStringify(bytes);
      } // Function#name is not settable on some platforms (#270)


      try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
      } catch (err) {} // For CommonJS default export support


      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }

    /*
     * Browser-compatible JavaScript MD5
     *
     * Modification of JavaScript MD5
     * https://github.com/blueimp/JavaScript-MD5
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * https://opensource.org/licenses/MIT
     *
     * Based on
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */
    function md5(bytes) {
      if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = new Uint8Array(msg.length);

        for (let i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }

      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    /*
     * Convert an array of little-endian words to an array of bytes
     */


    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = input.length * 32;
      const hexTab = '0123456789abcdef';

      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
      }

      return output;
    }
    /**
     * Calculate output length with padding and bit length
     */


    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */


    function wordsToMd5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;

      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }

      return [a, b, c, d];
    }
    /*
     * Convert an array bytes to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */


    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }

      const length8 = input.length * 8;
      const output = new Uint32Array(getOutputLength(length8));

      for (let i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
      }

      return output;
    }
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */


    function safeAdd(x, y) {
      const lsw = (x & 0xffff) + (y & 0xffff);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xffff;
    }
    /*
     * Bitwise rotate a 32-bit number to the left.
     */


    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    /*
     * These functions implement the four basic operations the algorithm uses.
     */


    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }

    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    v35('v3', 0x30, md5);

    const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var native = {
      randomUUID
    };

    function v4(options, buf, offset) {
      if (native.randomUUID && !buf && !options) {
        return native.randomUUID();
      }

      options = options || {};
      const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        offset = offset || 0;

        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }

        return buf;
      }

      return unsafeStringify(rnds);
    }

    // Adapted from Chris Veness' SHA1 code at
    // http://www.movable-type.co.uk/scripts/sha1.html
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;

        case 1:
          return x ^ y ^ z;

        case 2:
          return x & y ^ x & z ^ y & z;

        case 3:
          return x ^ y ^ z;
      }
    }

    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }

    function sha1(bytes) {
      const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

      if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = [];

        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        // Convert Array-like to Array
        bytes = Array.prototype.slice.call(bytes);
      }

      bytes.push(0x80);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);

      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);

        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }

        M[i] = arr;
      }

      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);

        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }

        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }

        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];

        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }

        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }

      return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    }

    v35('v5', 0x50, sha1);

    var fontStyleId = "font-style-".concat(v4());
    var loadedFonts = [];
    /**
     * 加载字体
     * @param font 字体配置 {@link Font}
     * @param timeout 超时时间
     */
    var loadFont = function (font, timeout) {
        var _a;
        if (timeout === void 0) { timeout = 30000; }
        var name = font.name;
        if (loadedFonts.find(function (font) { return font.name === name; }))
            return Promise.resolve(font.name);
        loadedFonts.push(font);
        var fontStyleNode = (_a = document.querySelector("#".concat(fontStyleId))) !== null && _a !== void 0 ? _a : document.createElement('style');
        fontStyleNode.id = fontStyleId;
        fontStyleNode.innerHTML = loadedFonts.map(function (font) { return "\n    @font-face {\n      font-weight: normal;\n      font-style: normal;\n      font-family: \"".concat(font.name, "\";\n      src: url('").concat(font.url, "');\n    }\n  "); }).join('');
        if (!fontStyleNode.parentNode) {
            document.head.append(fontStyleNode);
        }
        return new Promise(function (resolve, reject) {
            return new Fontfaceobserver(name).load(null, timeout)
                .then(function () { return resolve(font.name); })
                .catch(reject);
        });
    };

    /**
     * 是否是相似色块
     * @param {RGBA} color1 色值1
     * @param {RGBA} color2 色值2
     * @param {boolean} ignoreOpacity 是否忽略透明度
     * @returns {boolean} 是否是同色值
     */
    var isSameRGBA = function (color1, color2, ignoreOpacity) {
        if (ignoreOpacity === void 0) { ignoreOpacity = false; }
        return (color1.r === color2.r &&
            color1.g === color2.g &&
            color1.b === color2.b &&
            (!ignoreOpacity || color1.a === color2.a));
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
        var image, img2Canvas, ctx, imageData, getPixelColor, getRangePixel;
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
                    getPixelColor = function (row, col) {
                        var ind = (row * image.width + col) * 4;
                        var r = imageData[ind];
                        var g = imageData[ind + 1];
                        var b = imageData[ind + 2];
                        var a = imageData[ind + 3] / 255;
                        return { r: r, g: g, b: b, a: a };
                    };
                    getRangePixel = function (startRow, startCol, endRow, endCol) {
                        var range = [];
                        if (endCol < startCol || endRow < endRow)
                            return range;
                        for (var y = startCol; y < endCol; y++) {
                            range[endCol - startCol] = [];
                            for (var x = startRow; x < endRow; x++) {
                                range[endCol - startCol].push(getPixelColor(x, y));
                            }
                        }
                        return range;
                    };
                    return [2 /*return*/, {
                            getPixelColor: getPixelColor,
                            getRangePixel: getRangePixel,
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
                                            callback({
                                                x: col,
                                                y: row,
                                                rgba: getPixelColor(row, col),
                                                unit: unitSize > 0 ? { x: x, y: y } : undefined,
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

    /**
     * 计算范围内连续性最高的值
     */
    var calcMostRelated = function (values, isRelated) {
        var result = {
            times: 0,
            value: undefined,
        };
        var flags = [];
        var findRelatedAround = function (x, y) {
            if (flags[y] && flags[y][x])
                return 0;
            // 标记自身
            if (flags[y] === undefined)
                flags[y] = [];
            flags[y][x] = true;
            // 色值
            var value = values[y][x];
            // 关联次数
            var times = 1;
            // 判断四周相似值
            ([
                [y - 1, x],
                [y + 1, x],
                [y, x - 1],
                [y, x + 1], // 右
            ]).forEach(function (_a) {
                var targetY = _a[0], targetX = _a[1];
                if (!values[targetY] || !values[targetY][targetX])
                    return;
                if (isRelated(value, values[targetY][targetX])) {
                    times += findRelatedAround(targetX, targetY);
                }
            });
            return times;
        };
        values.forEach(function (rowArrays, row) {
            rowArrays.forEach(function (value, col) {
                var times = findRelatedAround(col, row);
                if (times > result.times)
                    result = { times: times, value: value };
            });
        });
        return result;
    };

    /**
     * 计算出现次数最多的值
     */
    var calcMostAppear = function (values, isSame) {
        var valueTimes = values.reduce(function (resule, value) {
            var _result = resule;
            var index = _result.findIndex(function (item) { return isSame(item.value, value); });
            if (index > -1)
                _result[index].times++;
            else
                _result.push({ times: 1, value: value });
            return _result;
        }, []);
        valueTimes.sort(function (a, b) { return b.times - a.times; });
        return valueTimes;
    };

    var pixelated = function (src, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var imageData, getPixelatedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getImageData(src)];
                    case 1:
                        imageData = _a.sent();
                        if (imageData === undefined)
                            return [2 /*return*/];
                        getPixelatedData = function (_imageData, _options) {
                            var _a = _options.mode, mode = _a === void 0 ? 'use-middle' : _a, _b = _options.size, size = _b === void 0 ? 1 : _b, _c = _options.gap, gap = _c === void 0 ? 0 : _c;
                            var getRangePixel = _imageData.getRangePixel, mapPixels = _imageData.mapPixels, width = _imageData.width, height = _imageData.height;
                            var points = [];
                            var drawStrategies = {
                                /** 策略 1：使用颜色出现最多的颜色作为像素块填充 */
                                'use-most': function () {
                                    var colors = [];
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y, rgba = _a.rgba, unit = _a.unit;
                                        if (unit && unit.x === 0 && unit.y === 0)
                                            colors = [];
                                        colors.push(rgba);
                                        var lastIndex = size - 1;
                                        // 当遍历单位区域到最后一个像素
                                        if (unit && unit.x === lastIndex && unit.y === lastIndex) {
                                            var colorTimes = calcMostAppear(colors, isSameRGBA);
                                            if (colorTimes.length === 0)
                                                return;
                                            console.log(colorTimes);
                                            var theMostColor = colorTimes[0].value;
                                            points.push({
                                                col: Math.floor(x / size),
                                                row: Math.floor(y / size),
                                                fill: theMostColor,
                                            });
                                        }
                                    });
                                },
                                /** 策略 2：使用出现的第一个颜色作为像素块填充 */
                                'use-first': function () {
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y, rgba = _a.rgba, unit = _a.unit;
                                        if (rgba.a === 0)
                                            return;
                                        if (unit && unit.x === 0 && unit.y === 0) {
                                            points.push({
                                                col: Math.floor(x / size),
                                                row: Math.floor(y / size),
                                                fill: rgba,
                                            });
                                        }
                                    });
                                },
                                /** 策略 3：使用中间出现的颜色作为像素块填充 */
                                'use-middle': function () {
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y, rgba = _a.rgba, unit = _a.unit;
                                        if (rgba.a === 0)
                                            return;
                                        var middleIndex = Math.floor(size / 2);
                                        if (unit && unit.x === middleIndex && unit.y === middleIndex) {
                                            points.push({
                                                col: Math.floor(x / size),
                                                row: Math.floor(y / size),
                                                fill: rgba,
                                            });
                                        }
                                    });
                                },
                                /** 策略 4：使用最后出现的颜色作为像素块填充 */
                                'use-last': function () {
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y, rgba = _a.rgba, unit = _a.unit;
                                        if (rgba.a === 0)
                                            return;
                                        var lastIndex = size - 1;
                                        if (unit && unit.x === lastIndex && unit.y === lastIndex) {
                                            points.push({
                                                col: Math.floor(x / size),
                                                row: Math.floor(y / size),
                                                fill: rgba,
                                            });
                                        }
                                    });
                                },
                                /**
                                 * 策略 5：使用范围内连续色值最多的颜色作为像素块填充
                                 * @param {number} spread 拓展范围
                                 */
                                'use-most-related': function (spread) {
                                    if (spread === void 0) { spread = 0; }
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y; _a.rgba; var unit = _a.unit;
                                        if (!unit)
                                            return;
                                        // 当遍历单位区域到最后一个像素
                                        if (unit && unit.x === 0 && unit.y === 0) {
                                            var color = calcMostRelated(getRangePixel(y - spread, x - spread, y + size - 1 + spread, x + size - 1 + spread), isSameRGBA).value;
                                            if (!color)
                                                return;
                                            points.push({
                                                col: Math.floor(x / size),
                                                row: Math.floor(y / size),
                                                fill: color,
                                            });
                                        }
                                    });
                                }
                            };
                            drawStrategies[mode]();
                            return Promise.resolve({
                                cols: Math.floor(width / size),
                                rows: Math.floor(height / size),
                                points: points,
                            });
                        };
                        return [2 /*return*/, getPixelatedData(imageData, options)];
                }
            });
        });
    };

    /** 格子大小 */
    var GRID_SIZE = 5;
    /** 格子间隔 */
    var GRID_GAP = 1;
    /** 最小格子尺寸 */
    var GRID_MIN_SIZE = 3;
    /** 最大格子尺寸 */
    var GRID_MAX_SIZE = 500;
    /** 字体配置 */
    var FONT_CONFIGURATION = {
        name: 'Century Gothic-Bold',
        url: 'https://storage.sunzi.cool/font/965b7d59-bad0-466b-9703-a20672e27bc7.ttf'
    };
    var createBlogColorWorld = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _canvas, _a, width, height, unbounedCanvas, getRadius, drawPoint, button;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _canvas = document.querySelector('#_canvas');
                    if (!_canvas)
                        return [2 /*return*/];
                    _a = [
                        document.body.clientWidth,
                        document.body.clientHeight,
                    ], width = _a[0], height = _a[1];
                    unbounedCanvas = new UnboundedCanvas(_canvas, {
                        width: width,
                        height: height,
                        unit: {
                            size: GRID_SIZE,
                            gap: GRID_GAP,
                            // sticky: true,
                        },
                        zoom: {
                            min: GRID_MIN_SIZE / GRID_SIZE,
                            max: GRID_MAX_SIZE / GRID_SIZE,
                        }
                    });
                    getRadius = function () {
                        var _a = unbounedCanvas.getOptions(), devicePixelRatio = _a.devicePixelRatio, zoom = _a.zoom;
                        return 1 * devicePixelRatio * zoom;
                    };
                    drawPoint = function (ctx, point, color, center) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a, width, height, devicePixelRatio, unitSize, unitGap, contentCenter, radius, size, halfSize, _center, _b, x, y;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = unbounedCanvas.getOptions(), width = _a.width, height = _a.height, devicePixelRatio = _a.devicePixelRatio, unitSize = _a.unitSize, unitGap = _a.unitGap, contentCenter = _a.contentCenter;
                                    radius = getRadius();
                                    size = unitSize + unitGap;
                                    halfSize = unitSize / 2;
                                    _center = center !== null && center !== void 0 ? center : contentCenter;
                                    _b = Array.isArray(point)
                                        ? [
                                            _center.x * devicePixelRatio + point[0] * size - halfSize,
                                            _center.y * devicePixelRatio + point[1] * size - halfSize,
                                        ]
                                        : [
                                            point.x - halfSize,
                                            point.y - halfSize,
                                        ], x = _b[0], y = _b[1];
                                    // 如果不在画布内的格子不进行渲染  
                                    if (x + unitSize < 0 || x > width || y + unitSize < 0 || y > height)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, getDrawers(ctx)
                                            .style({ fillStyle: color })
                                            .rect(x, y, unitSize, unitSize, radius)];
                                case 1:
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    /**
                     * 监听绘制更新
                     */
                    unbounedCanvas
                        .add2dLayer(function (ctx) {
                        var _a = unbounedCanvas.getOptions(), width = _a.width, height = _a.height, unitSize = _a.unitSize, unitGap = _a.unitGap, contentCenter = _a.contentCenter;
                        var size = unitSize + unitGap;
                        var radius = getRadius();
                        var r = radius > 3 ? radius : 0;
                        var unitFirstPoint = unbounedCanvas.getUnitFirstPoint(contentCenter);
                        var drawRadiusRectPath = function (left, top) {
                            ctx.moveTo(left + r, top);
                            ctx.lineTo(left + unitSize - r, top);
                            r && ctx.arcTo(left + unitSize, top, left + unitSize, top + r, radius);
                            ctx.lineTo(left + unitSize, top + unitSize - r);
                            r && ctx.arcTo(left + unitSize, top + unitSize, left + unitSize - r, top + unitSize, radius);
                            ctx.lineTo(left + r, top + unitSize);
                            r && ctx.arcTo(left, top + unitSize, left, top + unitSize - r, radius);
                            ctx.lineTo(left, top + r);
                            r && ctx.arcTo(left, top, left + r, top, radius);
                            ctx.lineTo(left, top + r);
                        };
                        // 绘制矩形格子
                        ctx.save();
                        ctx.fillStyle = '#f2f2f2';
                        ctx.beginPath();
                        for (var y = unitFirstPoint.y; y < height + size; y += size) {
                            for (var x = unitFirstPoint.x; x < width + size; x += size) {
                                drawRadiusRectPath(x, y);
                            }
                        }
                        ctx.closePath();
                        ctx.fill();
                        ctx.restore();
                    }, {
                        uniqueKey: 'bg',
                        needOffScreenCache: true,
                    });
                    /**
                     * 坐标参考
                     */
                    (_b = loadFont(FONT_CONFIGURATION, 1000)) === null || _b === void 0 ? void 0 : _b.then(function (fontName) {
                        unbounedCanvas.add2dLayer(function (ctx) {
                            var contentCenter = unbounedCanvas.getOptions().contentCenter;
                            var point = unbounedCanvas.viewCoords2UnitPoint(contentCenter.x, contentCenter.y);
                            getDrawers(ctx)
                                .style({
                                fontSize: 12,
                                fontFamily: fontName,
                                opacity: 0.6,
                                fillStyle: 'RED',
                            })
                                .text("(x: ".concat(point[0], ", y: ").concat(point[1], ")"), 10, 10);
                        });
                    });
                    return [4 /*yield*/, pixelated('./assets/test.png', {
                            size: 5,
                            gap: 0,
                            mode: 'use-most-related',
                        })
                            .then(function (imageData) {
                            if (!imageData)
                                return;
                            var rows = imageData.rows, cols = imageData.cols, points = imageData.points;
                            unbounedCanvas.add2dLayer(function (ctx) {
                                // console.time('word');
                                points.forEach(function (_a) {
                                    var col = _a.col, row = _a.row, fill = _a.fill;
                                    if ((fill.r === 255 && fill.g === 255 && fill.b === 255) ||
                                        fill.a === 0)
                                        return;
                                    drawPoint(ctx, [Math.floor(-cols / 2) + col, Math.floor(-rows / 2) + row - 10], "rgba(".concat(fill.r, ", ").concat(fill.g, ", ").concat(fill.b, ", ").concat(fill.a, ")"));
                                });
                                // console.timeEnd('word');
                            }, {
                                needOffScreenCache: true,
                            });
                        })
                        /**
                         * 浏览器尺寸变化事件监听
                         */
                    ];
                case 1:
                    _c.sent();
                    /**
                     * 浏览器尺寸变化事件监听
                     */
                    window.addEventListener('resize', throttle(function () {
                        unbounedCanvas.updateCanvas(document.body.clientWidth, document.body.clientHeight);
                    }, 50));
                    button = document.querySelector('#back_center');
                    if (button)
                        button.addEventListener('click', function () {
                            unbounedCanvas === null || unbounedCanvas === void 0 ? void 0 : unbounedCanvas.focus([0, 0]);
                        });
                    return [2 /*return*/];
            }
        });
    }); };
    createBlogColorWorld();

})();
//# sourceMappingURL=index.js.map
