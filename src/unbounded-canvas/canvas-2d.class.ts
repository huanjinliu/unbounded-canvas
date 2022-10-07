import Canvas, { CreateCanvasOptions } from "./canvas.class";

/**
 * 画布配置
 */
export interface CreateCanvas2dOptions extends CreateCanvasOptions {
  /**
   * 是否需要离屏渲染
   */
  needOffScreenCache?: boolean,
}

/**
 * 画布渲染器
 */
export type Canvas2dRender = (context: CanvasRenderingContext2D) => void;


class Canvas2d extends Canvas {
  private _context: CanvasRenderingContext2D | null = null;

  private _cacheElement: HTMLCanvasElement | null = null;

  private _cacheContext: CanvasRenderingContext2D | null = null;

  /**
   * 渲染器
   */
  private _renders: Canvas2dRender[] = [];
  
  constructor (width?: number, height?: number, extraOptions: CreateCanvas2dOptions = {}) {
    const {
      styles = {},
      needOffScreenCache = false,
    } = extraOptions;

    super(width, height, { styles });

    if (this._element) this._context = this._element.getContext('2d');
  
    // 构建缓存画布（离屏画布）
    if (needOffScreenCache) this.createCacheCanvas();
  }

  /**
   * 取得画布上下文
   */
  getContext () {
    return this._context;
  }

  /**
   * 改变画布尺寸
   */
  changeSize (width: number, height: number) {
    super.changeSize(width, height);

    if (!this._cacheElement) return;
    this._cacheElement.width = width;
    this._cacheElement.height = height;
  }

  /**
   * 创建缓存画布（离屏画布）
   */
  createCacheCanvas () {
    if (!this._element) return;
    this._cacheElement = document.createElement("canvas");
    this._cacheElement.width = this._element.width;
    this._cacheElement.height = this._element.height;

    this._cacheContext = this._cacheElement.getContext('2d');
    return {
      canvas: this._cacheElement,
      context: this._cacheContext,
    }
  }

  /**
   * 添加渲染器
   */
  addRender (handler: Canvas2dRender) {
    this._renders.push(handler);
    return this;
  }

  /**
   * 执行全部渲染器
   */
  renderAll () {
    if (!this._element) return;

    const _context = this._cacheContext ?? this._context;
    if (!_context) return;

    _context.clearRect(0, 0, this._element.width, this._element.height);

    this._renders.forEach(render => render(_context));

    if (this._cacheElement && this._context) {
      this._context.clearRect(0, 0, this._element.width, this._element.height);
      this._context.drawImage(this._cacheElement, 0, 0)
    };
  }

  /**
   * 画布销毁
   */
  dispose () {
    const disposeCanvas = (
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D | null,
    ) => {
      canvas.width = 1;
      canvas.height = 1;
      ctx?.clearRect(0, 0, 1, 1);
      canvas.removeAttribute('style');
    };

    if (this._element) disposeCanvas(this._element, this._context);
    if (this._cacheElement) disposeCanvas(this._cacheElement, this._cacheContext);
   
    this._renders = [];

    this._element = null;
    this._context = null;
    this._cacheElement = null;
    this._cacheContext = null;
  }
};

export default Canvas2d;