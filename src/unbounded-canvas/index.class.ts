import { wait } from 'vivid-wait';
import {
  CanvasOptions,
  CommonCreateCanvasOptions,
  NaturalListener,
  ZoomSetting,
} from '.';
import Canvas2d, { Canvas2dRender, CreateCanvas2dOptions } from './canvas-2d.class';
import CanvasWebGL, { CanvasWebGLRender, CreateCanvasWebGLOptions } from './canvas-webgl.class';

/** 默认空坐标 */
const EMPTY_COORDINATE = { x: 0, y: 0 };
/** 默认缩放限制 */
const DEFAULT_ZOOM_SETTING: ZoomSetting = {
  disabled: false,
  min: 1,
  max: 100,
  center: 'canvas'
};

class UnboundedCanvas {
  /**
   * 画布容器
   */
  private _container: HTMLDivElement | null = null;

  /**
   * 画布中心点
   */
  private _canvasCenter: Coordinate | null = null;

  /**
   * 内容中心点
   */
  private _contentCenter: Coordinate | null = null;

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
   * 画布缩放中心
   * @default 'canvas'
   */
  private zoomCenter: ZoomSetting['center'] = 'canvas';

  /**
   * 缩放值
   */
  private zoom: number = 1;

  /**
   * 移动粘连
   */
  private sticky: boolean = false;

  /**
   * 像素倍率
   */
  private devicePixelRatio: number;

  /**
   * 缩放限制
   */
  private zoomLimit: [number, number] = [
    DEFAULT_ZOOM_SETTING.min,
    DEFAULT_ZOOM_SETTING.max,
  ];

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
  private currentFocusing: {
    percent: number;
    cancel?: () => void;
  } | undefined;

  /**
   * 渲染图层
   */
  private _layers: {
    name?: string;
    canvas: Canvas2d | CanvasWebGL,
    zIndex: number,
  }[] = [];

  /**
   * 记录监听器
   */
  private _listeners: NaturalListener<any>[] = [];

  /**
   * 记录初始数据
   */
  private _store: HTMLCanvasElement | null = null;

  constructor(element: HTMLCanvasElement, options: Partial<CanvasOptions> = {}) {
    /** 存储源画布，用于读取尺寸和销毁时还原 */
    this._store = element;

    /** 初始基本配置 */
    const { ignoreDevicePixelRatio = false } = options;
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
  private initCanvas(options: Partial<CanvasOptions>) {
    if (!this._store) return;
    const {
      width: _width = this._store.width,
      height: _height = this._store.height,
      className,
    } = options;
    // 尺寸至少大于等于1
    const width = Math.max(1, Math.ceil(_width));
    const height = Math.max(1, Math.ceil(_height));
    
    if (!this._container) {
      const parentNode = this._store.parentNode;
      if (!parentNode) return;

      // 构建容器，所有事件挂载到该容器上
      this._container = document.createElement('div');
      this._container.classList.add(`unbounded-canvas-container`);
      if (className) this._container.classList.add(className);
      this._container.style.width = `${width}px`;
      this._container.style.height = `${height}px`;
      parentNode.insertBefore(this._container, this._store);
      parentNode.removeChild(this._store);
    } else {
      this._container.style.width = `${width}px`;
      this._container.style.height = `${height}px`;
      this._layers.forEach(({ canvas }) => {
        canvas.changeSize(width * this.devicePixelRatio, height * this.devicePixelRatio);
      })
    }
  }

  /**
   * 初始配置
   */
  private initOptions(options: Partial<CanvasOptions>) {
    if (!this._container) return;
    const { clientWidth: width, clientHeight: height } = this._container;

    const {
      unit,
      zoom = true,
      bound,
      movable = true,
    } = options;
    // 初始画布中心点
    this._canvasCenter = { x: width / 2, y: height / 2 };
    // 初始内容中心点
    this._contentCenter = { ...this._canvasCenter };

    /** 移动配置 */
    this.movable = movable;

    /** 缩放配置 */
    const { disabled = false, min = 1, max = 100, center = 'canvas'} = zoom === true
      ? DEFAULT_ZOOM_SETTING
      : typeof zoom === 'object' ? zoom : { disabled: true }
    // 是否可缩放
    this.zoomable = !disabled;
    // 缩放限制
    this.zoomLimit = min > 0 && min <= max ? [min, max] : [1, 100];
    // 缩放中心
    this.zoomCenter = center;

    /** 单位像素格配置 */
    const { size: unitSize = 1, gap: unitGap = 0, sticky = false } = unit || {};
    // 单位像素格至少需要1像素
    this.unitSize = Math.max(1, Math.ceil(unitSize));
    // 单位像素格间距不允许小于0
    this.unitGap = Math.max(0, Math.ceil(unitGap));
    // 是否移动粘连
    this.sticky = sticky;

    /** 初始边界，默认无边界（无限拖拽） */
    if (bound) this.bound = [
      Math.max(width, bound[0] ?? Infinity),
      Math.max(height, bound[1] ?? Infinity),
    ];
  }

  /**
   * 更新画布
   */
  updateCanvas(width: number, height: number) {
    if (!this._container) return;
    const { clientWidth, clientHeight } = this._container;
    const { canvasCenter: oldCanvasCenter, contentCenter } = this.getOptions();
    this.initCanvas({ width, height });
    this._canvasCenter = {
      x: clientWidth / 2,
      y: clientHeight / 2,
    };
    this._contentCenter = {
      x: contentCenter.x + (this._canvasCenter.x - oldCanvasCenter.x),
      y: contentCenter.y + (this._canvasCenter.y - oldCanvasCenter.y),
    }
    this.render();
  }

  /**
   * 添加渲染图层
   */
  private addLayer(
    options:
    | ({ type: '2d' } & Partial<Omit<CreateCanvas2dOptions, 'styles'> & CommonCreateCanvasOptions>)
    | ({ type: 'webgl' } & Partial<Omit<CreateCanvasWebGLOptions, 'styles'> & CommonCreateCanvasOptions>)
  ) {
    if (!this._container) throw ReferenceError('missing canvas container!');

    const { clientWidth: width, clientHeight: height } = this._container;
    const { type, zIndex = 1, uniqueKey, ...restOptions } = options;

    // 判断key值已存在，存在直接抛出错误
    if (uniqueKey && this._layers.some(({ name }) => name === uniqueKey)) {
      throw new Error(`layer named ${uniqueKey} already exists!`)
    };

    const canvas = new ({
      '2d': Canvas2d,
      'webgl': CanvasWebGL,
    }[type])(
      width * this.devicePixelRatio,
      height * this.devicePixelRatio,
      {
        styles: {
          width: '100%',
          height: '100%',
          position: 'absolute',
        },
        ...restOptions,
      }
    );

    const canvasList = this._container.childNodes;
    let insertIndex = this._layers.findIndex((layer) => layer.zIndex > zIndex);
    if (insertIndex === -1) insertIndex = this._layers.length
    
    const element = canvas.getElement();
    if (!element) throw ReferenceError('missing canvas element!');

    this._container.insertBefore(element, canvasList[insertIndex]);
    this._layers.splice(insertIndex, 0, { canvas, zIndex, name: uniqueKey });

    return canvas;
  }

  /**
   * 添加普通2d画布
   */
  add2dLayer (
    handler: Canvas2dRender,
    options: Partial<Omit<CreateCanvas2dOptions, 'styles'> & CommonCreateCanvasOptions> = {}
  ) {
    const canvas = this.addLayer({
      type: '2d',
      ...options,
    }) as Canvas2d;

    canvas.addRender(handler).renderAll();

    return canvas;
  }

  /**
   * 添加webgl画布
   */
  addWebGLLayer  (
    handler: CanvasWebGLRender,
    options: Partial<Omit<CreateCanvasWebGLOptions, 'styles'> & CommonCreateCanvasOptions> = {}
  ) {
    const canvas = this.addLayer({
      type: 'webgl',
      ...options,
    }) as CanvasWebGL;

    canvas.addRender(handler).renderAll();

    return canvas;
  }

  /**
   * 获取图层画布
   */
  getLayer (key: string) {
    return this._layers.find(({ name }) => name === key)?.canvas;
  }

  /**
   * 移除图层画布
   */
  removeLayer (target: string | Canvas2d | CanvasWebGL) {
    const index = this._layers.findIndex(({ name, canvas }) =>
      typeof target === 'string'
        ? name === target
        : canvas === target
    );
    if (index === -1) return;

    const canvas = this._layers[index].canvas;
    const canvasNode = canvas.getElement();
    canvas.dispose();
    canvasNode?.parentNode?.removeChild(canvasNode);
    this._layers.splice(index, 1);
  }

  /**
   * 获取画布参数
   */
  getOptions() {
    const { clientWidth: width, clientHeight: height } = this._container ?? {
      clientWidth: 0,
      clientHeight: 0,
    };
    return {
      width: width * this.devicePixelRatio,
      height: height * this.devicePixelRatio,
      devicePixelRatio: this.devicePixelRatio,
      unitSize: this.unitSize * this.devicePixelRatio * this.zoom,
      unitGap: this.unitGap * this.devicePixelRatio * this.zoom,
      zoom: this.zoom,
      zoomLimit: this.zoomLimit,
      canvasCenter: this._canvasCenter ?? { ...EMPTY_COORDINATE },
      contentCenter: this._contentCenter ?? { ...EMPTY_COORDINATE },
    }
  }

  /**
   * 直接设置内容中心
   */
  setContentCenter(coord: Coordinate) {
    this._contentCenter = coord;
    this.render();
  }

  /**
   * 初始画布监听器
   */
  private initListeners() {
    if (!this._container) return;

    this.movable && this.initMoveListener();
    this.zoomable && this.initZoomListener();
  }

  /**
   * 根据页面坐标获取单位像素坐标（相对于内容中心而不是画布中心）
   */
  viewCoords2UnitPoint(x: number, y: number) {
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
  unitPoint2ViewCoords(
    x: number,
    y: number,
    contentCenter = this._contentCenter ?? { ...EMPTY_COORDINATE }
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
  getUnitFirstPoint (contentCenter = this._canvasCenter ?? { ...EMPTY_COORDINATE }) {
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
    const renderFrame = (renderNextFrame?: () => void) => {
      window.requestAnimationFrame(() => {
        this._layers.forEach(({ canvas }) => canvas.renderAll());
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
  handleZoom (newZoom: number, focusPoint: Coordinate = this._canvasCenter ?? { ...EMPTY_COORDINATE }) {
    const { width, height, unitSize, contentCenter, canvasCenter, devicePixelRatio } = this.getOptions();
    const [boundWidth, boundHeight] = this.bound; 
    const preZoom = this.zoom;

    // 如果会导致内容尺寸小于画布尺寸不执行缩放
    const [xMinZoom, yMinZoom] = [
      width / boundWidth / devicePixelRatio,
      height / boundHeight / devicePixelRatio,
    ];
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
        const point = this.viewCoords2UnitPoint(
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
      if (this._container) this._container.style.cursor = type;
    }
    const handleReady = (event: KeyboardEvent) => {
      if (movable || !this._container) return;
      movable = event.code === 'Space';
      changeCursor('grab');
    };
    const handleStart = (event: MouseEvent) => {
      if (!movable || !this._container) return;
      // 不是鼠标左键点击不可拖拽
      if (event.which !== 1) return;
      const { contentCenter } = this.getOptions();
      this.moveInitDistance = {
        x: event.offsetX - contentCenter.x,
        y: event.offsetY - contentCenter.y,
      };

      changeCursor('grabbing');
    };
    const handleQuicklyMove = (event: MouseEvent) => {
      event.preventDefault();
      if (!this._container) return;
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
      if (!this._container) return;
      const { unitSize, contentCenter } = this.getOptions();

      if (this.moveInitDistance) {
        // 如果粘连，格子会保持原有的格子区域
        if (this.sticky) {
          if (this.zoomStickyTimer) clearTimeout(this.zoomStickyTimer);
          const point = this.viewCoords2UnitPoint(
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
      eventName: 'contextmenu',
      handler: handleQuicklyMove,
    })
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
        if (this.moveInitDistance) return;
        if (this.currentFocusing) {
          this.currentFocusing.cancel?.();
          this.currentFocusing = undefined;
        }
        const { canvasCenter, contentCenter } = this.getOptions(); 
        const { offsetX, offsetY, deltaY } = event;
        const dZoom = 0.999 ** (deltaY / 2);
        const newZoom = Math.min(
          Math.max(this.zoom * dZoom, this.zoomLimit[0]),
          this.zoomLimit[1]
        );
  
        this.handleZoom(
          newZoom, 
          {
            'canvas': canvasCenter,
            'content': contentCenter,
            'operation': { x: offsetX, y: offsetY },
          }[this.zoomCenter],
        );
      }
    });
  }

  /**
   * 聚焦到某个特定坐标点，坐标点相对于内容画布
   */
  async focus(point: Point, options: Partial<{
    speedMode: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out',
    duration: number, 
  }> = {}) {
    if (!this.movable) return;
    if (this.currentFocusing) {
      this.currentFocusing.cancel?.();
      this.currentFocusing = undefined;
    }

    const { speedMode = 'ease-in-out', duration } = options;
    const { unitSize, unitGap, canvasCenter, contentCenter } = this.getOptions();
    const pointCoord = this.unitPoint2ViewCoords(...point, canvasCenter);
    const oldContentCoords = { ...contentCenter };
    const distanceContentCenter = {
      x: pointCoord.x - oldContentCoords.x,
      y: pointCoord.y - oldContentCoords.y,
    };
    const maxDistance = Math.max(Math.abs(distanceContentCenter.x), Math.abs(distanceContentCenter.y));
    const distanceGridLength = Math.ceil(maxDistance * this.devicePixelRatio / (unitSize + unitGap));
    let time = duration ?? Math.max(Math.min(distanceGridLength * 50, 2000), 300);

    // 在指定时间内通过特定过渡方式变成指定值
    await wait(time, {
      mode: speedMode,
      onUpdate: (percent, cancel) => {
        this._contentCenter = {
          x: oldContentCoords.x + distanceContentCenter.x * percent,
          y: oldContentCoords.y + distanceContentCenter.y * percent,
        };
        this.render();
        this.currentFocusing = { percent, cancel };
      }
    })
    this.currentFocusing = undefined;
  }

  /**
   * 控制原生监听器
   */
  private controlNaturalListener<K extends keyof HTMLElementEventMap>(type: 'on' | 'off', options: NaturalListener<K>) {
    const { eventName, handler, options: _options, window: isWindow = false } = options;
    const listenerTarget = isWindow ? window : this._container;
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
        window: isWindow,
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
  on<K extends keyof HTMLElementEventMap>(
    eventName: K,
    handler: (ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ) {
    this.controlNaturalListener('on', { eventName, handler, options } as any);
  }

  /**
   * 移除监听事件
   */
  off<K extends (keyof HTMLElementEventMap)>(
    eventName: K,
    handler: (ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ) {
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
    if (!this._container || !this._store) return;
  
    const parentNode = this._container.parentNode;
    if (!parentNode) return;

    // 清除监听事件
    const listeners = [...this._listeners];
    while(listeners.length) {
      const listener = listeners.pop();
      if (listener) this.controlNaturalListener('off', listener);
    };
    // 清空图层
    this._layers = [];
    while(this._layers.length) {
      const layers = this._layers.pop();
      if (!layers) continue;
      
      const { canvas } = layers;
      const element = canvas.getElement();
      canvas.dispose();
      if (element) parentNode.removeChild(element);
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
  }
}

export default UnboundedCanvas;
