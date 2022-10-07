/**
 * 画布配置
 */
export interface CreateCanvasOptions {
    /**
     * 图层样式
     */
    styles?: Partial<CSSStyleDeclaration>;
}
declare class Canvas {
    protected _element: HTMLCanvasElement | null;
    constructor(width?: number, height?: number, extraOptions?: CreateCanvasOptions);
    /**
     * 取得canvas节点
     */
    getElement(): HTMLCanvasElement | null;
    /**
     * 改变画布尺寸
     */
    changeSize(width: number, height: number): void;
}
export default Canvas;
