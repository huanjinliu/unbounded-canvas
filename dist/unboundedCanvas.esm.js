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

export { UnboundedCanvas as default };
