import Canvas, { CreateCanvasOptions } from "./canvas.class";

/**
 * 画布配置
 */
export interface CreateCanvasWebGLOptions extends CreateCanvasOptions {
}

/**
 * 画布渲染器
 */
export type CanvasWebGLRender = (gl: WebGLRenderingContext) => void;


class CanvasWebGL extends Canvas {
  /**
   * 画布内容上下文
   */
  private _context: WebGLRenderingContext | null = null;

  /**
   * 渲染器
   */
  private _renders: CanvasWebGLRender[] = [];
  
  constructor (width?: number, height?: number, extraOptions: CreateCanvasWebGLOptions = {}) {
    const { styles = {} } = extraOptions;
    super(width, height, extraOptions);

    if (this._element) this._context = this._element.getContext('webgl');
  }

  /**
   * 取得画布上下文
   */
  getContext () {
    return this._context;
  }

  /**
   * 添加渲染器
   */
  addRender (handler: CanvasWebGLRender) {
    this._renders.push(handler);
    return this;
  }

  /**
   * 执行全部渲染器
   */
  renderAll () {
    if (!this._element) return;

    const _context = this._context;
    if (!_context) return;

    // _context.clearRect(0, 0, this._element.width, this._element.height);

    this._renders.forEach(render => render(_context));
  }

  /**
   * 画布销毁
   */
  dispose () {
    const disposeCanvas = (
      canvas: HTMLCanvasElement,
      ctx: WebGLRenderingContext | null,
    ) => {
      canvas.width = 1;
      canvas.height = 1;
      // ctx?.clearRect(0, 0, 1, 1);
      canvas.removeAttribute('style');
    };

    if (this._element) disposeCanvas(this._element, this._context);
   
    this._renders = [];

    this._element = null;
    this._context = null;
  }
};

export default CanvasWebGL;