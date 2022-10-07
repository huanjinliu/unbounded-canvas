/**
 * 画布配置
 */
 export interface CreateCanvasOptions {
  /**
   * 图层样式
   */
  styles?: Partial<CSSStyleDeclaration>,
}

class Canvas {
  protected _element: HTMLCanvasElement | null = null;
  
  constructor (width?: number, height?: number, extraOptions: CreateCanvasOptions = {}) {
    const {
      styles = {},
    } = extraOptions;

    this._element = document.createElement("canvas");
    if (width) this._element.width = width;
    if (height) this._element.height = height;
    Object.keys(styles).forEach(key => {
      this._element!.style[key] = styles[key];
    });
  }

  /**
   * 取得canvas节点
   */
  getElement () {
    return this._element;
  }

  /**
   * 改变画布尺寸
   */
  changeSize (width: number, height: number) {
    if (!this._element) return;
    this._element.width = width;
    this._element.height = height;
  }
};

export default Canvas;