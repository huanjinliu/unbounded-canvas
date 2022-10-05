/**
 * 画布配置
 */
export interface CreateCanvasOptions {
  styles: Partial<CSSStyleDeclaration>,
  needOffScreenCache: boolean,
}

/**
 * 画布渲染器
 */
export type CanvasRender = (context: CanvasRenderingContext2D) => void;


class Canvas {
  private _element: HTMLCanvasElement | null = null;
  
  private _context2d: CanvasRenderingContext2D | null = null;

  private _cacheElement: HTMLCanvasElement | null = null;

  private _cacheContext2d: CanvasRenderingContext2D | null = null;

  /**
   * 渲染器
   */
  private _renders: CanvasRender[] = [];
  
  constructor (width?: number, height?: number, extraOptions: Partial<CreateCanvasOptions> = {}) {
    const {
      styles = {},
      needOffScreenCache = false,
    } = extraOptions;

    this._element = document.createElement("canvas");
    if (width) this._element.width = width;
    if (height) this._element.height = height;
    Object.keys(styles).forEach(key => {
      this._element!.style[key] = styles[key];
    });

    this._context2d = this._element.getContext("2d");
  
    // 构建缓存画布（离屏画布）
    if (needOffScreenCache) this.createCacheCanvas();
  }

  /**
   * 取得canvas节点
   */
  getElement () {
    return this._element;
  }

  /**
   * 取得画布上下文
   */
  getContext () {
    return this._context2d;
  }

  /**
   * 改变画布尺寸
   */
  changeSize (width: number, height: number) {
    if (!this._element) return;
    this._element.width = width;
    this._element.height = height;

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

    this._cacheContext2d = this._cacheElement.getContext("2d");
    return {
      canvas: this._cacheElement,
      context2d: this._cacheContext2d,
    }
  }

  /**
   * 添加渲染器
   */
  addRender (handler: CanvasRender,) {
    this._renders.push(handler);
    return this;
  }

  /**
   * 执行全部渲染器
   */
  renderAll () {
    if (!this._element) return;

    const _context = this._cacheContext2d ?? this._context2d;
    if (!_context) return;

    _context.clearRect(0, 0, this._element.width, this._element.height);

    this._renders.forEach(render => render(_context));

    if (this._cacheElement && this._context2d) {
      this._context2d.clearRect(0, 0, this._element.width, this._element.height);
      this._context2d.drawImage(this._cacheElement, 0, 0)
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

    if (this._element) disposeCanvas(this._element, this._context2d);
    if (this._cacheElement) disposeCanvas(this._cacheElement, this._cacheContext2d);
   
    this._renders = [];

    this._element = null;
    this._context2d = null;
    this._cacheElement = null;
    this._cacheContext2d = null;
  }
};

export default Canvas;