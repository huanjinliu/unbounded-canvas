import Canvas, { CreateCanvasOptions } from "./canvas.class";
/**
 * 画布配置
 */
export interface CreateCanvas2dOptions extends CreateCanvasOptions {
    /**
     * 是否需要离屏渲染
     */
    needOffScreenCache?: boolean;
}
/**
 * 画布渲染器
 */
export declare type Canvas2dRender = (context: CanvasRenderingContext2D) => void;
declare class Canvas2d extends Canvas {
    private _context;
    private _cacheElement;
    private _cacheContext;
    /**
     * 渲染器
     */
    private _renders;
    constructor(width?: number, height?: number, extraOptions?: CreateCanvas2dOptions);
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
        context: CanvasRenderingContext2D | null;
    } | undefined;
    /**
     * 添加渲染器
     */
    addRender(handler: Canvas2dRender): this;
    /**
     * 执行全部渲染器
     */
    renderAll(): void;
    /**
     * 画布销毁
     */
    dispose(): void;
}
export default Canvas2d;
