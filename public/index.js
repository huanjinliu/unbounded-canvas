
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
         * ??????canvas??????
         */
        Canvas.prototype.getElement = function () {
            return this._element;
        };
        /**
         * ??????????????????
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
             * ?????????
             */
            _this._renders = [];
            if (_this._element)
                _this._context = _this._element.getContext('2d');
            // ????????????????????????????????????
            if (needOffScreenCache)
                _this.createCacheCanvas();
            return _this;
        }
        /**
         * ?????????????????????
         */
        Canvas2d.prototype.getContext = function () {
            return this._context;
        };
        /**
         * ??????????????????
         */
        Canvas2d.prototype.changeSize = function (width, height) {
            _super.prototype.changeSize.call(this, width, height);
            if (!this._cacheElement)
                return;
            this._cacheElement.width = width;
            this._cacheElement.height = height;
        };
        /**
         * ????????????????????????????????????
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
         * ???????????????
         */
        Canvas2d.prototype.addRender = function (handler) {
            this._renders.push(handler);
            return this;
        };
        /**
         * ?????????????????????
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
         * ????????????
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
             * ?????????????????????
             */
            _this._context = null;
            /**
             * ?????????
             */
            _this._renders = [];
            if (_this._element)
                _this._context = _this._element.getContext('webgl');
            return _this;
        }
        /**
         * ?????????????????????
         */
        CanvasWebGL.prototype.getContext = function () {
            return this._context;
        };
        /**
         * ???????????????
         */
        CanvasWebGL.prototype.addRender = function (handler) {
            this._renders.push(handler);
            return this;
        };
        /**
         * ?????????????????????
         */
        CanvasWebGL.prototype.renderAll = function () {
            if (!this._element)
                return;
            var _context = this._context;
            if (!_context)
                return;
            /** ???????????? */
            _context.viewport(0, 0, _context.canvas.width, _context.canvas.height);
            _context.clearColor(0, 0, 0, 0);
            _context.clear(_context.COLOR_BUFFER_BIT);
            this._renders.forEach(function (render) { return render(_context); });
        };
        /**
         * ????????????
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

    /** ??????????????? */
    var EMPTY_COORDINATE = { x: 0, y: 0 };
    /** ?????????????????? */
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
             * ????????????
             */
            this._container = null;
            /**
             * ???????????????
             */
            this._canvasCenter = null;
            /**
             * ???????????????
             */
            this._contentCenter = null;
            /**
             * ???????????????
             */
            this.unitSize = 1;
            /**
             * ?????????????????????
             */
            this.unitGap = 0;
            /**
             * ????????????
             */
            this.bound = [Infinity, Infinity];
            /**
             * ???????????????????????????
             */
            this.movable = true;
            /**
            * ?????????????????????
            */
            this.zoomable = true;
            /**
             * ??????????????????
             * @default 'canvas'
             */
            this.zoomCenter = 'canvas';
            /**
             * ?????????
             */
            this.zoom = 1;
            /**
             * ????????????
             */
            this.sticky = false;
            /**
             * ????????????
             */
            this.zoomLimit = [
                DEFAULT_ZOOM_SETTING.min,
                DEFAULT_ZOOM_SETTING.max,
            ];
            /**
             * ????????????
             */
            this._layers = [];
            /**
             * ???????????????
             */
            this._listeners = [];
            /**
             * ??????????????????
             */
            this._store = null;
            /** ?????????????????????????????????????????????????????? */
            this._store = element;
            /** ?????????????????? */
            var _a = options.ignoreDevicePixelRatio, ignoreDevicePixelRatio = _a === void 0 ? false : _a;
            this.devicePixelRatio = ignoreDevicePixelRatio
                ? 1
                : Math.ceil(window.devicePixelRatio);
            /** ?????????????????? */
            this.initCanvas(options);
            /** ?????????????????? */
            this.initOptions(options);
            /** ????????????????????? */
            this.initListeners();
        }
        /**
         * ????????????
         */
        UnboundedCanvas.prototype.initCanvas = function (options) {
            var _this = this;
            if (!this._store)
                return;
            var _a = options.width, _width = _a === void 0 ? this._store.width : _a, _b = options.height, _height = _b === void 0 ? this._store.height : _b, className = options.className;
            // ????????????????????????1
            var width = Math.max(1, Math.ceil(_width));
            var height = Math.max(1, Math.ceil(_height));
            if (!this._container) {
                var parentNode = this._store.parentNode;
                if (!parentNode)
                    return;
                // ????????????????????????????????????????????????
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
         * ????????????
         */
        UnboundedCanvas.prototype.initOptions = function (options) {
            var _a, _b;
            if (!this._container)
                return;
            var _c = this._container, width = _c.clientWidth, height = _c.clientHeight;
            var unit = options.unit, _d = options.zoom, zoom = _d === void 0 ? true : _d, bound = options.bound, _e = options.movable, movable = _e === void 0 ? true : _e;
            // ?????????????????????
            this._canvasCenter = { x: width / 2, y: height / 2 };
            // ?????????????????????
            this._contentCenter = __assign({}, this._canvasCenter);
            /** ???????????? */
            this.movable = movable;
            /** ???????????? */
            var _f = zoom === true
                ? DEFAULT_ZOOM_SETTING
                : typeof zoom === 'object' ? zoom : { disabled: true }, _g = _f.disabled, disabled = _g === void 0 ? false : _g, _h = _f.min, min = _h === void 0 ? 1 : _h, _j = _f.max, max = _j === void 0 ? 100 : _j, _k = _f.center, center = _k === void 0 ? 'canvas' : _k;
            // ???????????????
            this.zoomable = !disabled;
            // ????????????
            this.zoomLimit = min > 0 && min <= max ? [min, max] : [1, 100];
            // ????????????
            this.zoomCenter = center;
            /** ????????????????????? */
            var _l = unit || {}, _m = _l.size, unitSize = _m === void 0 ? 1 : _m, _o = _l.gap, unitGap = _o === void 0 ? 0 : _o, _p = _l.sticky, sticky = _p === void 0 ? false : _p;
            // ???????????????????????????1??????
            this.unitSize = Math.max(1, Math.ceil(unitSize));
            // ????????????????????????????????????0
            this.unitGap = Math.max(0, Math.ceil(unitGap));
            // ??????????????????
            this.sticky = sticky;
            /** ???????????????????????????????????????????????? */
            if (bound)
                this.bound = [
                    Math.max(width, (_a = bound[0]) !== null && _a !== void 0 ? _a : Infinity),
                    Math.max(height, (_b = bound[1]) !== null && _b !== void 0 ? _b : Infinity),
                ];
        };
        /**
         * ????????????
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
         * ??????????????????
         */
        UnboundedCanvas.prototype.addLayer = function (options) {
            if (!this._container)
                throw ReferenceError('missing canvas container!');
            var _a = this._container, width = _a.clientWidth, height = _a.clientHeight;
            var type = options.type, _b = options.zIndex, zIndex = _b === void 0 ? 1 : _b, uniqueKey = options.uniqueKey, restOptions = __rest(options, ["type", "zIndex", "uniqueKey"]);
            // ??????key???????????????????????????????????????
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
         * ????????????2d??????
         */
        UnboundedCanvas.prototype.add2dLayer = function (handler, options) {
            if (options === void 0) { options = {}; }
            var canvas = this.addLayer(__assign({ type: '2d' }, options));
            canvas.addRender(handler).renderAll();
            return canvas;
        };
        /**
         * ??????webgl??????
         */
        UnboundedCanvas.prototype.addWebGLLayer = function (handler, options) {
            if (options === void 0) { options = {}; }
            var canvas = this.addLayer(__assign({ type: 'webgl' }, options));
            var context = canvas.getContext();
            if (context)
                handler === null || handler === void 0 ? void 0 : handler(context);
            else
                throw Error('add error!');
            return canvas;
        };
        /**
         * ??????????????????
         */
        UnboundedCanvas.prototype.getLayer = function (key) {
            var _a;
            return (_a = this._layers.find(function (_a) {
                var name = _a.name;
                return name === key;
            })) === null || _a === void 0 ? void 0 : _a.canvas;
        };
        /**
         * ??????????????????
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
         * ??????????????????
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
         * ????????????????????????
         */
        UnboundedCanvas.prototype.setContentCenter = function (coord) {
            this._contentCenter = coord;
            this.render();
        };
        /**
         * ?????????????????????
         */
        UnboundedCanvas.prototype.initListeners = function () {
            if (!this._container)
                return;
            this.movable && this.initMoveListener();
            this.zoomable && this.initZoomListener();
        };
        /**
         * ??????????????????????????????????????????????????????????????????????????????????????????
         */
        UnboundedCanvas.prototype.viewCoords2UnitPoint = function (x, y) {
            var _a = this.getOptions(), unitSize = _a.unitSize, unitGap = _a.unitGap, canvasCenter = _a.canvasCenter;
            var size = unitSize + unitGap;
            var halfSize = unitSize / 2;
            // ??????????????????????????????????????????
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
         * ????????????????????????????????????????????????????????????????????????
         */
        UnboundedCanvas.prototype.unitPoint2ViewCoords = function (x, y, contentCenter) {
            var _a;
            if (contentCenter === void 0) { contentCenter = (_a = this._contentCenter) !== null && _a !== void 0 ? _a : __assign({}, EMPTY_COORDINATE); }
            var _b = this.getOptions(), unitSize = _b.unitSize, unitGap = _b.unitGap, canvasCenter = _b.canvasCenter;
            var size = unitSize + unitGap;
            // ?????????????????????????????????
            var blockPosition = {
                x: (x * size) / this.devicePixelRatio,
                y: (y * size) / this.devicePixelRatio,
            };
            // ????????????????????????????????????
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
         * ???????????????????????????????????????
         * @param contentCenter ?????????????????????
         */
        UnboundedCanvas.prototype.getUnitFirstPoint = function (contentCenter) {
            var _a;
            if (contentCenter === void 0) { contentCenter = (_a = this._canvasCenter) !== null && _a !== void 0 ? _a : __assign({}, EMPTY_COORDINATE); }
            var _b = this.getOptions(), unitSize = _b.unitSize, unitGap = _b.unitGap;
            var size = unitSize + unitGap;
            var halfSize = unitSize / 2;
            // ????????????????????????????????????????????????
            var centerOffset = {
                x: contentCenter.x * this.devicePixelRatio - halfSize,
                y: contentCenter.y * this.devicePixelRatio - halfSize,
            };
            // ???????????????????????????????????????????????????????????????????????????
            var rest = {
                top: Math.ceil(centerOffset.y / size),
                left: Math.ceil(centerOffset.x / size),
            };
            // ??????????????????????????????
            var unitDrawStartPoint = {
                x: centerOffset.x - rest.left * size,
                y: centerOffset.y - rest.top * size,
            };
            return unitDrawStartPoint;
        };
        /**
         * ????????????
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
         * ????????????
         */
        UnboundedCanvas.prototype.limitBound = function (contentCenter) {
            var _a = this.getOptions(), canvasCenter = _a.canvasCenter, zoom = _a.zoom;
            var _b = this.bound, boundWidth = _b[0], boundHeight = _b[1];
            var _c = [
                boundWidth / 2 * zoom,
                boundHeight / 2 * zoom,
            ], halfBoundWidth = _c[0], halfBoundHeight = _c[1];
            var newX = contentCenter.x, newY = contentCenter.y;
            // ???????????????
            if (newX > halfBoundWidth)
                newX = halfBoundWidth;
            // ???????????????
            if (newX < -halfBoundWidth + canvasCenter.x * 2)
                newX = -halfBoundWidth + canvasCenter.x * 2;
            // ???????????????
            if (newY > halfBoundHeight)
                newY = halfBoundHeight;
            // ???????????????
            if (newY < -halfBoundHeight + canvasCenter.y * 2)
                newY = -halfBoundHeight + canvasCenter.y * 2;
            return { x: newX, y: newY };
        };
        /**
         * ??????
         */
        UnboundedCanvas.prototype.handleZoom = function (newZoom, focusPoint) {
            var _this = this;
            var _a;
            if (focusPoint === void 0) { focusPoint = (_a = this._canvasCenter) !== null && _a !== void 0 ? _a : __assign({}, EMPTY_COORDINATE); }
            var _b = this.getOptions(), width = _b.width, height = _b.height, unitSize = _b.unitSize, contentCenter = _b.contentCenter; _b.canvasCenter; var devicePixelRatio = _b.devicePixelRatio;
            var _c = this.bound, boundWidth = _c[0], boundHeight = _c[1];
            var preZoom = this.zoom;
            // ????????????????????????????????????????????????????????????
            var _d = [
                width / boundWidth / devicePixelRatio,
                height / boundHeight / devicePixelRatio,
            ], xMinZoom = _d[0], yMinZoom = _d[1];
            this.zoom = newZoom < xMinZoom || newZoom < yMinZoom
                ? Math.max(xMinZoom, yMinZoom)
                : newZoom;
            // ????????????????????????????????????????????????
            var oldDistance = {
                x: contentCenter.x - focusPoint.x,
                y: contentCenter.y - focusPoint.y,
            };
            // ????????????????????????????????????????????????
            var newDistance = {
                x: oldDistance.x / preZoom * this.zoom,
                y: oldDistance.y / preZoom * this.zoom,
            };
            this._contentCenter = this.limitBound({
                x: contentCenter.x + (newDistance.x - oldDistance.x),
                y: contentCenter.y + (newDistance.y - oldDistance.y),
            });
            this.render();
            // ????????????????????????100???????????????
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
         * ????????????
         */
        UnboundedCanvas.prototype.initMoveListener = function () {
            var _this = this;
            /** ????????????????????? */
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
                // ????????????????????????????????????
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
                    // ???????????????????????????????????????????????????
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
         * ????????????
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
         * ???????????????????????????????????????????????????????????????
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
                            // ?????????????????????????????????????????????????????????
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
                            // ?????????????????????????????????????????????????????????
                            _e.sent();
                            this.currentFocusing = undefined;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ?????????????????????
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
         * ????????????
         */
        UnboundedCanvas.prototype.on = function (eventName, handler, options) {
            this.controlNaturalListener('on', { eventName: eventName, handler: handler, options: options });
        };
        /**
         * ??????????????????
         */
        UnboundedCanvas.prototype.off = function (eventName, handler, options) {
            this.controlNaturalListener('off', {
                eventName: eventName,
                handler: handler,
                options: options,
            });
        };
        /**
         * ????????????
         */
        UnboundedCanvas.prototype.dispose = function () {
            if (!this._container || !this._store)
                return;
            var parentNode = this._container.parentNode;
            if (!parentNode)
                return;
            // ??????????????????
            var listeners = __spreadArray([], this._listeners, true);
            while (listeners.length) {
                var listener = listeners.pop();
                if (listener)
                    this.controlNaturalListener('off', listener);
            }
            // ????????????
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
            // ????????????
            parentNode.insertBefore(this._store, this._container);
            parentNode.removeChild(this._container);
            // ????????????
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
            // ????????????
            this._canvasCenter = null;
            this._contentCenter = null;
            this._store = null;
            this._container = null;
        };
        return UnboundedCanvas;
    }());

    var vertex = "attribute vec2 a_position;attribute vec4 a_color;uniform vec2 u_resolution;varying vec4 v_color;varying vec2 v_position;void main(){vec2 zeroToOne=a_position/u_resolution;vec2 zeroToTwo=zeroToOne*2.0;vec2 clipSpace=zeroToTwo-1.0;gl_Position=vec4(clipSpace*vec2(1,-1),0,1);v_color=a_color;v_position=zeroToOne;}";

    var fragment = "precision highp float;uniform vec2 u_resolution;uniform vec2 u_firstPointPosition;varying vec2 v_position;uniform float u_size;uniform float u_gap;varying vec4 v_color;void main(){vec2 position=v_position*u_resolution-u_firstPointPosition;float unitSize=u_size+u_gap;float sizeRatio=u_size/unitSize;if((position.y-(floor(position.y/unitSize)*unitSize))/unitSize>sizeRatio)discard;if((position.x-(floor(position.x/unitSize)*unitSize))/unitSize>sizeRatio)discard;gl_FragColor=v_color;}";

    /**
     * ?????????????????????
     * @param {RGBA} color1 ??????1
     * @param {RGBA} color2 ??????2
     * @param {boolean} ignoreOpacity ?????????????????????
     * @returns {boolean} ??????????????????
     */
    var isSameRGBA = function (color1, color2, ignoreOpacity) {
        if (ignoreOpacity === void 0) { ignoreOpacity = false; }
        return (color1.r === color2.r &&
            color1.g === color2.g &&
            color1.b === color2.b &&
            (!ignoreOpacity || color1.a === color2.a));
    };

    /** ???????????? */
    var loadImage = function (src) { return new Promise(function (resolve) {
        var image = new Image();
        image.src = src;
        image.onload = function () {
            resolve(image);
        };
    }); };

    /** ?????????????????? */
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
                             * ???????????????
                             * ...r, g, b, a...???????????????????????????????????????
                             * @param {number} unitSize ?????????????????????
                             * @param {Function} callback ????????????
                             */
                            mapPixels: function (unitSize, callback) {
                                // ????????????????????????
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
     * ????????????????????????????????????
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
            // ????????????
            if (flags[y] === undefined)
                flags[y] = [];
            flags[y][x] = true;
            // ??????
            var value = values[y][x];
            // ????????????
            var times = 1;
            // ?????????????????????
            ([
                [y - 1, x],
                [y + 1, x],
                [y, x - 1],
                [y, x + 1], // ???
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
     * ??????????????????????????????
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
                                /** ?????? 1????????????????????????????????????????????????????????? */
                                'use-most': function () {
                                    var colors = [];
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y, rgba = _a.rgba, unit = _a.unit;
                                        if (unit && unit.x === 0 && unit.y === 0)
                                            colors = [];
                                        colors.push(rgba);
                                        var lastIndex = size - 1;
                                        // ??????????????????????????????????????????
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
                                /** ?????? 2?????????????????????????????????????????????????????? */
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
                                /** ?????? 3??????????????????????????????????????????????????? */
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
                                /** ?????? 4??????????????????????????????????????????????????? */
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
                                 * ?????? 5??????????????????????????????????????????????????????????????????
                                 * @param {number} spread ????????????
                                 */
                                'use-most-related': function (spread) {
                                    if (spread === void 0) { spread = 0; }
                                    mapPixels(size + gap, function (_a) {
                                        var x = _a.x, y = _a.y; _a.rgba; var unit = _a.unit;
                                        if (!unit)
                                            return;
                                        // ??????????????????????????????????????????
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

    /** ???????????? */
    var GRID_SIZE = 5;
    /** ???????????? */
    var GRID_GAP = 1;
    /** ?????????????????? */
    var GRID_MIN_SIZE = 3;
    /** ?????????????????? */
    var GRID_MAX_SIZE = 500;
    /**
     * ????????????????????????
     */
    var createShader = function (gl, type, source) {
        // ?????????????????????
        var shader = gl.createShader(type);
        if (!shader)
            throw Error('shader create error!');
        // ??????????????????????????????
        gl.shaderSource(shader, source);
        // ?????????????????????
        gl.compileShader(shader);
        // ??????????????????????????????
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success)
            return shader;
        // ?????????????????????????????????????????????????????????
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    };
    /**
     * ??????????????????
     */
    var createWebGLProgram = function (gl, vertexSource, fragmentSource) {
        // ??????????????????
        var program = gl.createProgram();
        if (!program)
            throw Error('create program error!');
        // ?????????????????????
        var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
        // ?????????????????????
        var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
        // ??????????????? + ???????????????
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        // ?????????????????????
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success)
            return program;
        // ?????????????????????????????????????????????
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    };
    /**
     * ????????????????????????
     */
    var createAttributeInjector = function (gl, program, attributeName) {
        var attributeLocation = gl.getAttribLocation(program, attributeName);
        // ?????????????????????????????????????????????
        var positionBuffer = gl.createBuffer();
        return function (size, dataArray, options) {
            if (options === void 0) { options = {}; }
            var _a = options.type, type = _a === void 0 ? gl.FLOAT : _a, _b = options.normalize, normalize = _b === void 0 ? false : _b;
            // ?????????????????????????????????????????????????????????????????????????????????
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            // ????????????????????????
            gl.enableVertexAttribArray(attributeLocation);
            // ????????????
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dataArray), gl.STATIC_DRAW);
            /** ?????????????????????????????????????????? */
            // const size = 2;          // ??????????????????????????????????????????
            // const type = gl.FLOAT;   // ??????????????????????????????32????????????
            // const normalize = false; // ????????????????????????
            var stride = 0; // 0 = ?????????????????? * ???????????????????????????sizeof(type), ???????????????????????????????????????????????????????????????
            var offset = 0; // ?????????????????????????????????
            gl.vertexAttribPointer(attributeLocation, size, type, normalize, stride, offset);
        };
    };
    var createWebGLDemo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _canvas, unbounedCanvas, program, locationInjector, colorInjector, layerCanvas, button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _canvas = document.querySelector('#_canvas');
                    if (!_canvas)
                        return [2 /*return*/];
                    unbounedCanvas = new UnboundedCanvas(_canvas, {
                        width: document.body.clientWidth,
                        height: document.body.clientHeight,
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
                    layerCanvas = unbounedCanvas.addWebGLLayer(function (gl) {
                        /** ??????????????????????????? */
                        program = createWebGLProgram(gl, vertex, fragment);
                        if (!program)
                            return;
                        gl.useProgram(program);
                        /** ?????????????????? */
                        var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
                        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
                        locationInjector = createAttributeInjector(gl, program, 'a_position');
                        colorInjector = createAttributeInjector(gl, program, 'a_color');
                    });
                    return [4 /*yield*/, pixelated('./assets/test.png', {
                            size: 5,
                            gap: 0,
                            mode: 'use-most-related',
                        })
                            .then(function (imageData) {
                            console.dir(imageData);
                            if (!imageData)
                                return;
                            imageData.rows; imageData.cols; imageData.points;
                            layerCanvas
                                .addRender(function (gl) {
                                if (!program)
                                    return;
                                var _a = unbounedCanvas.getOptions(), width = _a.width, height = _a.height, unitSize = _a.unitSize, unitGap = _a.unitGap, contentCenter = _a.contentCenter;
                                var unitFirstPoint = unbounedCanvas.getUnitFirstPoint(contentCenter);
                                var rectData = [];
                                var colorData = [];
                                /**
                                 * ????????????
                                 */
                                var fillRect = function (x, y, w, h, fill) {
                                    var _a;
                                    var a = (_a = fill.a) !== null && _a !== void 0 ? _a : 1;
                                    rectData.push(x, y, x + w, y, x, y + h, x + w, y, x, y + h, x + w, y + h);
                                    colorData.push(fill.r / 255, fill.g / 255, fill.b / 255, a, fill.r / 255, fill.g / 255, fill.b / 255, a, fill.r / 255, fill.g / 255, fill.b / 255, a, fill.r / 255, fill.g / 255, fill.b / 255, a, fill.r / 255, fill.g / 255, fill.b / 255, a, fill.r / 255, fill.g / 255, fill.b / 255, a);
                                };
                                var firstUniformLocation = gl.getUniformLocation(program, "u_firstPointPosition");
                                gl.uniform2f(firstUniformLocation, unitFirstPoint.x, unitFirstPoint.y);
                                var sizeUniformLocation = gl.getUniformLocation(program, "u_size");
                                gl.uniform1f(sizeUniformLocation, unitSize);
                                var gapUniformLocation = gl.getUniformLocation(program, "u_gap");
                                gl.uniform1f(gapUniformLocation, unitGap);
                                // console.dir(height * width / (size ** 2))
                                // for (let y = unitFirstPoint.y; y < height + size; y += size) {
                                //   for (let x = unitFirstPoint.x; x < width + size; x += size) {
                                //     fillRect(x, y, unitSize, unitSize, { r: 242, g: 242, b: 242, a: 1 });
                                //   }
                                // };
                                // console.log(unitFirstPoint.x, unitFirstPoint.y, width, height)
                                fillRect(0, 0, width, height, { r: 242, g: 242, b: 242, a: 1 });
                                // points.forEach(({ col, row, fill }) => {
                                //   if (
                                //     (fill.r === 255 && fill.g === 255 && fill.b === 255) ||
                                //     fill.a === 0
                                //   ) return;
                                //   const point = [Math.floor(- cols / 2) + col, Math.floor(- rows / 2) + row - 10];
                                //   fillRect(
                                //     contentCenter.x * devicePixelRatio + point[0] * size - halfSize,
                                //     contentCenter.y * devicePixelRatio + point[1] * size - halfSize,
                                //     unitSize,
                                //     unitSize,
                                //     fill,
                                //   );
                                // })
                                locationInjector(2, rectData);
                                colorInjector(4, colorData);
                                /** ???????????? */
                                // ???????????????
                                var primitiveType = gl.TRIANGLES;
                                // ??????????????????
                                var first = 0;
                                // ??????????????????????????????
                                var count = rectData.length / 2;
                                gl.drawArrays(primitiveType, first, count);
                            })
                                .renderAll();
                        })];
                case 1:
                    _a.sent();
                    button = document.querySelector('#back_center');
                    if (button)
                        button.addEventListener('click', function () {
                            unbounedCanvas === null || unbounedCanvas === void 0 ? void 0 : unbounedCanvas.focus([0, 0]);
                        });
                    return [2 /*return*/];
            }
        });
    }); };
    createWebGLDemo();

})();
//# sourceMappingURL=index.js.map
