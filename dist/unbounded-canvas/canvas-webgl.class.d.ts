import Canvas, { CreateCanvasOptions } from "./canvas.class";
/**
 * 画布配置
 */
export interface CreateCanvasWebGLOptions extends CreateCanvasOptions {
}
/**
 * 画布渲染器
 */
export declare type CanvasWebGLRender = (context: WebGLRenderingContext) => void;
declare class CanvasWebGL extends Canvas {
    /**
     * 画布内容上下文
     */
    private _context;
    /**
     * 渲染器
     */
    private _renders;
    constructor(width?: number, height?: number, extraOptions?: CreateCanvasWebGLOptions);
    /**
     * 取得画布上下文
     */
    getContext(): WebGLRenderingContext | null;
    /**
     * 添加渲染器
     */
    addRender(handler: CanvasWebGLRender): this;
    /**
     * 执行全部渲染器
     */
    renderAll(): void;
    /**
     * 画布销毁
     */
    dispose(): void;
}
export default CanvasWebGL;
