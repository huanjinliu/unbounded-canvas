import { wait } from 'vivid-wait';

interface CanvasOptions {
  /**
   * 画布宽度
   */
  width: number;
  /**
   * 画布高度
   */
  height: number;
  /**
   * 画布边界
   */
  bound?: [number, number];
  /**
   * 是否可内容画布移动
   */
  movable?: boolean;
  /**
   * 是否可画布缩放
   */
  zoomable?: boolean;
  /**
   * 像素单位设置
   */
  unit?: {
    /**
     * 像素单位格，实现像素化分格
     */
    size: number;
    /**
     * 像素单元格间距
     */
    gap?: number;
    /**
     * 是否移动粘连
     */
    sticky?: boolean
    /**
     * 缩放限制
     */
    zoomLimit?: [number, number];
  },
  /**
   * 忽略设备像素比例
   * @default false
   */
  ignoreDevicePixelRatio?: boolean;
}

/** 渲染相关 */
type RenderListenerOptions = {
  /**
   * 图层层级
   */
  zIndex?: number;
};

type RenderType = 'render';

type RenderListener = (options: RenderListenerOptions) => void;

/** 事件相关 */
type NaturalListener<K extends keyof HTMLElementEventMap> = {
  eventName: K;
  handler: (ev: HTMLElementEventMap[K]) => any;
  options?: boolean | AddEventListenerOptions;
  window?: boolean; 
};

/** 默认空坐标 */
const EMPTY_CROODINATE = { x: 0, y: 0 };
/** 默认缩放限制 */
const DEFAULT_ZOOM_LIMIT = [1, 100] as [number, number];

class UnboundedCanvas {
  /**
   * 缓存画布（实现离屏渲染）
   */
  private _cacheElement: HTMLCanvasElement | null;

  /**
   * 缓存画布上下文
   */
  private _cacheContext: CanvasRenderingContext2D | null;

  /**
   * 画布节点
   */
  private _element: HTMLCanvasElement | null;

  /**
   * 画布上下文
   */
  private _ctx: CanvasRenderingContext2D | null;

  /**
   * 画布中心点
   */
  private _canvasCenter: Coordinate | null;

  /**
   * 内容中心点
   */
  private _contentCenter: Coordinate | null;

  /**
   * 单位像素格
   */
  private unitSize: number = 1;

  /**
   * 像素单元格间距
   */
  private unitGap: number = 0;

  /**
   * 移动事件前所聚焦位置
   */
  private moveInitDistance: Coordinate | undefined;

  /**
   * 画布边界
   */
  private bound: [width: number, height: number] = [Infinity, Infinity];

  /**
   * 是否可内容画布移动
   */
  private movable: boolean = true;

  /**
  * 是否可画布缩放
  */
  private zoomable: boolean = true;

  /**
   * 缩放值
   */
  private zoom: number = 1;

  /**
   * 移动粘连
   */
  private sticky: boolean;

  /**
   * 像素倍率
   */
  private devicePixelRatio: number;

  /**
   * 缩放限制
   */
  private zoomLimit: [number, number];

  /**
   * 缩放延后计时器
   */
  private zoomStickyTimer: number | undefined;

  /**
   * 下一个绘制（如果绘制过于频繁，下一个绘制将保持最新绘制）
   */
  private nextRender: AnyFunction | undefined;

  /**
   * 上一次绘制时间
   */
  private preRenderTime: number | undefined;

  /**
   * 是否正在聚焦
   */
  private isFocuing: boolean = false;

  /**
   * 渲染监听器
   */
  private _renderListeners: {
    options: RenderListenerOptions;
    handler: RenderListener;
  }[] = [];

  /**
   * 记录监听器
   */
  private _listeners: NaturalListener<any>[] = [];

  /**
   * 记录初始数据
   */
  private _stores: null | {
    width: number;
    height: number;
  };

  constructor(element: HTMLCanvasElement, options: CanvasOptions) {
    const {
      ignoreDevicePixelRatio = false,
      unit,
      bound,
      movable = true,
      zoomable = true,
    } = options;

    const {
      zoomLimit = DEFAULT_ZOOM_LIMIT,
      size: unitSize = 1,
      gap: unitGap = 0,
      sticky = false,
    } = unit || {};

    this._element = element;
    this._ctx = element.getContext('2d');
    this.devicePixelRatio = ignoreDevicePixelRatio
      ? 1
      : window.devicePixelRatio;
    // 是否可拖动
    this.movable = movable;
    // 是否可缩放
    this.zoomable = zoomable;
    // 单位像素格至少需要1像素
    this.unitSize = Math.max(1, Math.ceil(unitSize));
    // 单位像素格间距不允许小于0
    this.unitGap = Math.max(0, Math.ceil(unitGap));
    // 是否移动粘连
    this.sticky = sticky;
    // 缩放必须付费需求
    this.zoomLimit = zoomLimit[0] > 0 && zoomLimit[0] < zoomLimit[1]
      ? zoomLimit
      : DEFAULT_ZOOM_LIMIT;

    // 构建缓存画布（离屏画布）
    this._cacheElement = document.createElement('canvas');
    this._cacheContext = this._cacheElement.getContext('2d');

    // 记录初始尺寸，用于销毁时恢复尺寸
    this._stores = {
      width: this._element.width,
      height: this._element.height,
    };
    // 初始画布参数
    this.initOptions(options);

    // 初始画布中心点
    this._canvasCenter = {
      x: this._element.width / this.devicePixelRatio / 2,
      y: this._element.height / this.devicePixelRatio / 2,
    };

    // 初始边界，默认无边界（无限拖拽）
    if (bound) this.bound = [
      Math.max(this._element.width / this.devicePixelRatio, bound[0] ?? Infinity),
      Math.max(this._element.height / this.devicePixelRatio, bound[1] ?? Infinity),
    ];

    // 初始内容中心点
    this._contentCenter = { ...this._canvasCenter };

    // 初始画布监听器
    this.initListeners();
  }

  /**
   * 初始画布
   */
  private initOptions(options: CanvasOptions) {
    if (!this._element || !this._cacheElement) return;

    // 尺寸至少大于等于1
    const width = Math.max(1, Math.ceil(options.width));
    const height = Math.max(1, Math.ceil(options.height));

    this._element.width = width * this.devicePixelRatio;
    this._element.height = height * this.devicePixelRatio;

    // 缓存画布
    this._cacheElement.width = width * this.devicePixelRatio;
    this._cacheElement.height = height * this.devicePixelRatio;

    // 初始画布css样式
    this._element.style.width = `${width}px`;
    this._element.style.height = `${height}px`;
    this._element.style.cursor = 'default';
  }

  /**
   * 获取画布参数
   */
  getOptions() {
    return {
      width: this._element?.width ?? 0,
      height: this._element?.height ?? 0,
      devicePixelRatio: this.devicePixelRatio,
      unitSize: this.unitSize * this.devicePixelRatio * this.zoom,
      unitGap: this.unitGap * this.devicePixelRatio * this.zoom,
      zoom: this.zoom,
      zoomLimit: this.zoomLimit,
      canvasCenter: this._canvasCenter ?? { ...EMPTY_CROODINATE },
      contentCenter: this._contentCenter ?? { ...EMPTY_CROODINATE },
    }
  }

  /**
   * 设置画布参数
   */
  setOptions(options: Pick<CanvasOptions, 'width' | 'height'>) {
    const { width, height } = this.getOptions()
    this.initOptions(options)
    this._canvasCenter = {
      x: width / this.devicePixelRatio / 2,
      y: height / this.devicePixelRatio / 2,
    };
    this.render();
  }

  /**
   * 初始画布监听器
   */
  private initListeners() {
    this.movable && this.initMoveListener();
    this.zoomable && this.initZoomListener();
  }

  /**
   * 取得绘制上下文
   */
  getContext() {
    return this._cacheContext;
  }

  /**
   * 根据页面坐标获取单位像素坐标（相对于内容中心而不是画布中心）
   */
  viewCroods2UnitPoint(x: number, y: number) {
    const { unitSize, unitGap, canvasCenter } = this.getOptions();
    const size = unitSize + unitGap;
    const halfSize = unitSize / 2;

    // 计算点击坐标到画布中心的距离
    const distanceCanvasCenter = {
      x: x - canvasCenter.x,
      y: y - canvasCenter.y,
    };

    return [
      Math.floor(
        (distanceCanvasCenter.x * this.devicePixelRatio + halfSize) / size
      ),
      Math.floor(
        (distanceCanvasCenter.y * this.devicePixelRatio + halfSize) / size
      ),
    ] as Point;
  }

  /**
   * 根据单位像素坐标获取页面坐标（相对于画布左上角）
   */
  unitPoint2ViewCroods(
    x: number,
    y: number,
    contentCenter = this._contentCenter ?? { ...EMPTY_CROODINATE }
  ) {
    const { unitSize, unitGap, canvasCenter } = this.getOptions();
    const size = unitSize + unitGap;

    // 方块中心到内容中心位置
    const blockPosition = {
      x: (x * size) / this.devicePixelRatio,
      y: (y * size) / this.devicePixelRatio,
    };

    // 方块中心到画布中心的距离
    const distanceCanvasCenter = {
      x: blockPosition.x - (canvasCenter.x - contentCenter.x),
      y: blockPosition.y - (canvasCenter.y - contentCenter.y),
    };

    return {
      x: distanceCanvasCenter.x + canvasCenter.x,
      y: distanceCanvasCenter.y + canvasCenter.y,
    };
  }

  /**
   * 计算单位像素格子绘制起始点
   * @param contentCenter 指定内容中心点
   */
  getUnitFirstPoint (contentCenter = this._canvasCenter ?? { ...EMPTY_CROODINATE }) {
    const { unitSize, unitGap } = this.getOptions();
    const size = unitSize + unitGap;
    const halfSize = unitSize / 2;
  
    // 中心方块左上角与画布左上角的距离
    const centerOffset = {
      x: contentCenter.x * this.devicePixelRatio - halfSize,
      y: contentCenter.y * this.devicePixelRatio - halfSize,
    };
    // 中心方块左上角与画布左上角的距离可以再加多少个矩形
    const rest = {
      top: Math.ceil(centerOffset.y / size),
      left: Math.ceil(centerOffset.x / size),
    };

    // 单位格绘制矩形起始点
    const unitDrawStartPoint = {
      x: centerOffset.x - rest.left * size,
      y: centerOffset.y - rest.top * size,
    };

    return unitDrawStartPoint;
  }

  /**
   * 渲染画布
   */
  private render() {
    const _render = () => {
      const ctx = this.getContext();
      if (!ctx) return;
      const { width, height } = this.getOptions();
      ctx.clearRect(0, 0, width, height);

      this._renderListeners.map(({ handler, options }) => handler(options))

      if (this._ctx && this._cacheElement) {
        this._ctx.clearRect(0, 0, width, height);
        this._ctx.drawImage(this._cacheElement, 0, 0)
      };
    };
    const renderFrame = (renderNextFrame?: () => void) => {
      window.requestAnimationFrame(() => {
        _render();
        if (renderNextFrame) renderNextFrame();
      })
    };
    const renderNextFrame = () => {
      if (this.nextRender) {
        const draw = this.nextRender;
        this.nextRender = undefined;
        if (draw) draw(renderNextFrame);
      }
    };
    const currentTime = new Date().getTime();
    if (this.preRenderTime && currentTime - this.preRenderTime < 10) {
      this.nextRender = renderFrame;
    } else {
      this.preRenderTime = currentTime;
      renderFrame(renderNextFrame);
    }
  }

  /**
   * 边界约束
   */
  private limitBound(contentCenter: Coordinate) {
    const { canvasCenter, zoom } = this.getOptions();
    const [boundWidth, boundHeight] = this.bound; 
    const [halfBoundWidth, halfBoundHeight] = [
      boundWidth / 2 * zoom,
      boundHeight / 2 * zoom,
    ]; 
    let { x: newX, y: newY } = contentCenter;

    // 左边界检测
    if (newX > halfBoundWidth) newX = halfBoundWidth;
    // 右边界检测
    if (newX < -halfBoundWidth + canvasCenter.x * 2) newX = -halfBoundWidth + canvasCenter.x * 2;
    // 上边界检测
    if (newY > halfBoundHeight) newY = halfBoundHeight;
    // 下边界检测
    if (newY < -halfBoundHeight + canvasCenter.y * 2) newY = -halfBoundHeight + canvasCenter.y * 2;

    return { x: newX, y: newY };
  }

  /**
   * 缩放
   */
  handleZoom (newZoom: number, focusPoint: Coordinate = this._canvasCenter ?? { ...EMPTY_CROODINATE }) {
    const { width, height, unitSize, contentCenter, devicePixelRatio } = this.getOptions();
    const [boundWidth, boundHeight] = this.bound; 
    const preZoom = this.zoom;

    // 如果会导致内容尺寸小于画布尺寸不执行缩放
    const [xMinZoom, yMinZoom] = [
      width / boundWidth / devicePixelRatio,
      height / boundHeight / devicePixelRatio,
    ]
    this.zoom = newZoom < xMinZoom || newZoom < yMinZoom
      ? Math.max(xMinZoom, yMinZoom)
      : newZoom;

    // 旧的内容中心点到鼠标聚焦点的距离
    const oldDistance = {
      x: contentCenter.x - focusPoint.x,
      y: contentCenter.y - focusPoint.y,
    }
    // 新的内容中心点到鼠标聚焦点的距离
    const newDistance = {
      x: oldDistance.x / preZoom * this.zoom,
      y: oldDistance.y / preZoom * this.zoom,
    }

    this._contentCenter = this.limitBound({
      x: contentCenter.x + (newDistance.x - oldDistance.x),
      y: contentCenter.y + (newDistance.y - oldDistance.y),
    })

    this.render();

    // 如果是粘连效果，100毫秒后执行
    if (this.sticky) {
      if (this.zoomStickyTimer) clearTimeout(this.zoomStickyTimer);
      this.zoomStickyTimer = setTimeout(() => {
        const { contentCenter } = this.getOptions();
        const point = this.viewCroods2UnitPoint(
          contentCenter.x,
          contentCenter.y,
        );

        this.focus(point, { duration: Math.min(unitSize * 5, 300) });
        this.zoomStickyTimer = undefined;
        clearTimeout(this.zoomStickyTimer);
      }, 300);
    }
  }

  /**
   * 移动监听
   */
  private initMoveListener() {
    /** 是否可拖拽移动 */
    let movable = false;
    const changeCursor = (type: 'default' | 'grab' | 'grabbing') => {
      if (this._element) this._element.style.cursor = type;
    }
    const handleReady = (event: KeyboardEvent) => {
      if (movable || !this._element) return;
      movable = event.code === 'Space';
      changeCursor('grab');
    };
    const handleStart = (event: MouseEvent) => {
      if (!movable || !this._element) return;
      // 不是鼠标左键点击不可拖拽
      if (event.which !== 1) return;
      const { contentCenter } = this.getOptions();
      this.moveInitDistance = {
        x: event.offsetX - contentCenter.x,
        y: event.offsetY - contentCenter.y,
      };

      changeCursor('grabbing');
    };
    const handleMoving = (event: MouseEvent) => {
      if (this.moveInitDistance === undefined) return;

      this._contentCenter = this.limitBound({
        x: event.offsetX - this.moveInitDistance.x,
        y: event.offsetY - this.moveInitDistance.y,
      });

      this.render();
    };
    const handleEnd = () => {
      if (!this._element) return;
      const { unitSize, contentCenter } = this.getOptions();

      if (this.moveInitDistance) {
        // 如果粘连，格子会保持原有的格子区域
        if (this.sticky) {
          if (this.zoomStickyTimer) clearTimeout(this.zoomStickyTimer);
          const point = this.viewCroods2UnitPoint(
            contentCenter.x,
            contentCenter.y,
          );
          this.focus(point, { duration: Math.min(unitSize * 5, 300) });
        } else this.render();
      }

      movable = false;
      this.moveInitDistance = undefined;
      changeCursor('default');
    };
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
  }

  /**
   * 缩放监听
   */
  private initZoomListener() {
    this.controlNaturalListener('on', {
      eventName: 'wheel',
      handler: (event) => {
        if (this.moveInitDistance || this.isFocuing) return;
        const { offsetX, offsetY, deltaY } = event;
        const dZoom = 0.999 ** (deltaY / 2);
        const newZoom = Math.min(
          Math.max(this.zoom * dZoom, this.zoomLimit[0]),
          this.zoomLimit[1]
        );
  
        this.handleZoom(newZoom, {
          x: offsetX,
          y: offsetY,
        });
      }
    });
  }

  /**
   * 回到中心
   */
  async focus(point: Point, options: Partial<{
    speedMode: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out',
    duration: number, 
  }> = {}) {
    if (!this.movable) return;

    const { speedMode = 'ease-in-out', duration } = options;
    const { unitSize, unitGap, canvasCenter, contentCenter } = this.getOptions();
    const pointCrood = this.unitPoint2ViewCroods(...point, canvasCenter);
    const oldContentCroods = { ...contentCenter };
    const distanceContentCenter = {
      x: pointCrood.x - oldContentCroods.x,
      y: pointCrood.y - oldContentCroods.y,
    };
    const maxDistance = Math.max(Math.abs(distanceContentCenter.x), Math.abs(distanceContentCenter.y));
    const distanceGridLength = Math.ceil(maxDistance * this.devicePixelRatio / (unitSize + unitGap));
    let time = duration ?? Math.min(distanceGridLength * 50, 2000);

    this.isFocuing = true;
    // 在指定时间内通过特定过渡方式变成指定值
    await wait(time, {
      mode: speedMode,
      onUpdate: percent => {
        this._contentCenter = {
          x: oldContentCroods.x + distanceContentCenter.x * percent,
          y: oldContentCroods.y + distanceContentCenter.y * percent,
        };
        this.render();
      }
    })
    this.isFocuing = false;
  }

  /**
   * 控制原生监听器
   */
  private controlNaturalListener<K extends keyof HTMLElementEventMap>(type: 'on' | 'off', options: NaturalListener<K>) {
    const { eventName, handler, options: _options, window: isWindow = false } = options;
    const listenerTarget = isWindow ? window : this._element;
    if (!listenerTarget) return;

    const listenerIndex = this._listeners.findIndex(listener => {
      return listener.eventName === eventName
        && listener.handler === handler
        && (listener.options === _options || (listener.options === undefined && _options === undefined));
    });
    if (type === 'on') {
      if (listenerIndex !== -1) return;
      this._listeners.push({
        eventName,
        handler,
        options: _options,
      })
      listenerTarget.addEventListener(eventName, handler as any, _options);
    } else {
      if (listenerIndex === -1) return;
      listenerTarget.removeEventListener(eventName, handler as any, _options);
      this._listeners.splice(listenerIndex, 1);
    }
  }

  /**
   * 监听事件
   */
  on<K extends (keyof HTMLElementEventMap | RenderType)>(
    eventName: K,
    handler: K extends keyof HTMLElementEventMap
      ? (ev: HTMLElementEventMap[K]) => any
      : RenderListener,
    options?: K extends keyof HTMLElementEventMap
      ? boolean | AddEventListenerOptions
      : RenderListenerOptions,
  ) {
    if (eventName === 'render') {
      this._renderListeners.push({ handler, options } as any);
      this._renderListeners.sort((a, b) => {
        return (a.options?.zIndex ?? 1) - (b.options?.zIndex ?? 1);
      })
      this.render();
      return;
    }
    this.controlNaturalListener('on', { eventName, handler, options } as any);
  }

  /**
   * 移除监听事件
   */
  off<K extends (keyof HTMLElementEventMap | RenderType)>(
    eventName: K,
    handler: K extends keyof HTMLElementEventMap
      ? (ev: HTMLElementEventMap[K]) => any
      : RenderListener,
    options?: K extends keyof HTMLElementEventMap
      ? boolean | AddEventListenerOptions
      : RenderListenerOptions,
  ) {
    if (eventName === 'render') {
      const index = this._renderListeners.findIndex(listeners => {
        return listeners.handler === handler;
      })
      if (index === -1) return;
      this._renderListeners.splice(index, 1);
      this.render();
      return;
    }
    this.controlNaturalListener('off', {
      eventName,
      handler,
      options,
    } as any);
  }

  /**
   * 画布销毁
   */
  dispose() {
    const disposeCanvas = (
      canvas: HTMLCanvasElement,
      size = {
        width: 1,
        height: 1,
      }
    ) => {
      canvas.width = size.width;
      canvas.height = size.height;
      canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
      canvas.removeAttribute('style');
    }
    // 清空画布
    if (this._cacheElement) disposeCanvas(this._cacheElement);
    if (this._element && this._stores) disposeCanvas(this._element, this._stores);
    // 清除监听事件
    const listeners = [...this._listeners];
    while(listeners.length) {
      const listener = listeners.pop();
      if (listener) this.controlNaturalListener('off', listener);
    };

    // 初始数据
    this._renderListeners = [];
    this.moveInitDistance = undefined;
    this.preRenderTime = undefined;
    this.sticky = false;
    this.movable = true;
    this.zoomable = true;
    this.unitGap = 0;
    this.unitSize = 1;
    this.zoom = 1;
    this.zoomLimit = DEFAULT_ZOOM_LIMIT;

    // 置空数据
    this._cacheContext = null;
    this._cacheElement = null;
    this._canvasCenter = null;
    this._contentCenter = null;
    this._stores = null;
    this._ctx = null;
    this._element = null;
  }
}

export default UnboundedCanvas;
