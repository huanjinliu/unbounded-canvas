/**
 * 画布配置
 */
export interface CreateCanvasOptions {
    styles: Partial<CSSStyleDeclaration>;
    needOffScreenCache: boolean;
}
/**
 * 画布渲染器
 */
export declare type CanvasRender = (context: CanvasRenderingContext2D) => void;
declare class Canvas {
    private _element;
    private _context2d;
    private _cacheElement;
    private _cacheContext2d;
    /**
     * 渲染器
     */
    private _renders;
    constructor(width?: number, height?: number, extraOptions?: Partial<CreateCanvasOptions>);
    /**
     * 取得canvas节点
     */
    getElement(): HTMLCanvasElement | null;
    /**
     * 取得画布上下文
     */
    getContext(): CanvasRenderingContext2D | null;
    /**
     * 改变画布尺寸
     */
    changeSize(width: number, height: number): void;
    /**
     * 创建缓存画布（离屏画布）
     */
    createCacheCanvas(): {
        canvas: HTMLCanvasElement;
        context2d: CanvasRenderingContext2D | null;
    } | undefined;
    /**
     * 添加渲染器
     */
    addRender(handler: CanvasRender): this;
    /**
     * 执行全部渲染器
     */
    renderAll(): void;
    /**
     * 画布销毁
     */
    dispose(): void;
}
export default Canvas;
