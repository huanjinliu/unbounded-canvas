interface CanvasOptions {
    width: number;
    height: number;
}
interface PointObject {
    x: number;
    y: number;
}
declare type Point = [number, number];
interface FillPoint {
    point: Point;
    fill: string;
}
declare class Canvas {
    /**
     * 画布节点
     */
    element: HTMLCanvasElement;
    /**
     * 画布上下文
     */
    ctx: CanvasRenderingContext2D | null;
    /**
     * 默认中心点
     */
    canvasCenter: PointObject;
    /**
     * 变换后的中心点
     */
    contentCenter: PointObject;
    /**
     * 移动初始位置
     */
    moveInitPoint: PointObject | undefined;
    /**
     * 缩放值
     */
    zoom: number;
    /**
     * 像素倍率
     */
    devicePixelRatio: number;
    /**
     *
     */
    fillPoints: FillPoint[];
    constructor(element: HTMLCanvasElement, options: CanvasOptions);
    /**
     * 计算缩放后的值
     */
    getOptions(): {
        gap: number;
        size: number;
        halfSize: number;
        unitSize: number;
    };
    /**
     * 根据页面坐标获取方块坐标（相对于内容中心而不是画布中心）
     */
    getCroodsFromView(x: number, y: number): Point;
    /**
     * 根据相对于内容中心的方块中心坐标获取页面坐标
     */
    getCroodsFromContent(x: number, y: number): {
        x: number;
        y: number;
    };
    /**
     * 绘制某坐标方块
     */
    drawPoint(point: Point | PointObject, color?: string, center?: PointObject): void;
    /**
     * 绘制线条
     */
    drawLine(startPoint: Point, endPoint: Point): void;
    /**
     * 绘制圆角矩形
     */
    drawRect(x: number, y: number, w: number, h: number, radius?: number): void;
    /**
     * 渲染画布
     */
    render(contentCenter?: PointObject): Promise<void>;
    /**
     * 缩放
     */
    handleZoom(newZoom: number, focusPoint?: PointObject): void;
    /**
     * 初始移动监听
     */
    initMoveListener(): void;
    /**
     * 初始缩放监听
     */
    initZoomListener(): void;
    /**
     * 初始点击监听
     */
    initClickListener(): void;
    /**
     * 回到中心
     */
    backToCenter(duration?: number): void;
}
declare const _default: {
    Canvas: typeof Canvas;
};
export default _default;
