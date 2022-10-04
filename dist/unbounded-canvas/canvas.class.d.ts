import { CanvasOptions, RenderListener, RenderListenerOptions, RenderType } from './canvas';
declare class UnboundedCanvas {
    /**
     * 缓存画布（实现离屏渲染）
     */
    private _cacheElement;
    /**
     * 缓存画布上下文
     */
    private _cacheContext;
    /**
     * 画布节点
     */
    private _element;
    /**
     * 画布上下文
     */
    private _ctx;
    /**
     * 画布中心点
     */
    private _canvasCenter;
    /**
     * 内容中心点
     */
    private _contentCenter;
    /**
     * 单位像素格
     */
    private unitSize;
    /**
     * 像素单元格间距
     */
    private unitGap;
    /**
     * 移动事件前所聚焦位置
     */
    private moveInitDistance;
    /**
     * 画布边界
     */
    private bound;
    /**
     * 是否可内容画布移动
     */
    private movable;
    /**
    * 是否可画布缩放
    */
    private zoomable;
    /**
     * 画布缩放中心
     * @default 'canvas'
     */
    private zoomCenter;
    /**
     * 缩放值
     */
    private zoom;
    /**
     * 移动粘连
     */
    private sticky;
    /**
     * 像素倍率
     */
    private devicePixelRatio;
    /**
     * 缩放限制
     */
    private zoomLimit;
    /**
     * 缩放延后计时器
     */
    private zoomStickyTimer;
    /**
     * 下一个绘制（如果绘制过于频繁，下一个绘制将保持最新绘制）
     */
    private nextRender;
    /**
     * 上一次绘制时间
     */
    private preRenderTime;
    /**
     * 是否正在聚焦
     */
    private isFocuing;
    /**
     * 渲染监听器
     */
    private _renderListeners;
    /**
     * 记录监听器
     */
    private _listeners;
    /**
     * 记录初始数据
     */
    private _stores;
    constructor(element: HTMLCanvasElement, options: CanvasOptions);
    /**
     * 初始画布
     */
    private initCanvas;
    /**
     * 更新画布
     */
    updateCanvas(width: number, height: number): void;
    /**
     * 获取画布参数
     */
    getOptions(): {
        width: number;
        height: number;
        devicePixelRatio: number;
        unitSize: number;
        unitGap: number;
        zoom: number;
        zoomLimit: [number, number];
        canvasCenter: Coordinate;
        contentCenter: Coordinate;
    };
    /**
     * 初始画布监听器
     */
    private initListeners;
    /**
     * 取得绘制上下文
     */
    getContext(): CanvasRenderingContext2D | null;
    /**
     * 根据页面坐标获取单位像素坐标（相对于内容中心而不是画布中心）
     */
    viewCoords2UnitPoint(x: number, y: number): Point;
    /**
     * 根据单位像素坐标获取页面坐标（相对于画布左上角）
     */
    unitPoint2ViewCoords(x: number, y: number, contentCenter?: Coordinate): {
        x: number;
        y: number;
    };
    /**
     * 计算单位像素格子绘制起始点
     * @param contentCenter 指定内容中心点
     */
    getUnitFirstPoint(contentCenter?: Coordinate): {
        x: number;
        y: number;
    };
    /**
     * 渲染画布
     */
    private render;
    /**
     * 边界约束
     */
    private limitBound;
    /**
     * 缩放
     */
    handleZoom(newZoom: number, focusPoint?: Coordinate): void;
    /**
     * 移动监听
     */
    private initMoveListener;
    /**
     * 缩放监听
     */
    private initZoomListener;
    /**
     * 聚焦到某个特定坐标点，坐标点相对于内容画布
     */
    focus(point: Point, options?: Partial<{
        speedMode: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
        duration: number;
    }>): Promise<void>;
    /**
     * 直接设置内容中心
     */
    setContentCenter(coord: Coordinate): void;
    /**
     * 控制原生监听器
     */
    private controlNaturalListener;
    /**
     * 监听事件
     */
    on<K extends (keyof HTMLElementEventMap | RenderType)>(eventName: K, handler: K extends keyof HTMLElementEventMap ? (ev: HTMLElementEventMap[K]) => any : RenderListener, options?: K extends keyof HTMLElementEventMap ? boolean | AddEventListenerOptions : RenderListenerOptions): void;
    /**
     * 移除监听事件
     */
    off<K extends (keyof HTMLElementEventMap | RenderType)>(eventName: K, handler: K extends keyof HTMLElementEventMap ? (ev: HTMLElementEventMap[K]) => any : RenderListener, options?: K extends keyof HTMLElementEventMap ? boolean | AddEventListenerOptions : RenderListenerOptions): void;
    /**
     * 画布销毁
     */
    dispose(): void;
}
export default UnboundedCanvas;
