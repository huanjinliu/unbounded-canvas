/** 画布上下文 */
declare type Context2D = CanvasRenderingContext2D;
/** 需要处理的样式类型 */
declare type NeedProcessTypeStyles = {
    fontSize: number;
    fontFamily: string;
    lineDash: number[];
    angle: number;
    scaleX: number;
    scaleY: number;
    originX: 'left' | 'center' | 'right';
    originY: 'top' | 'center' | 'bottom';
    flipX: boolean;
    flipY: boolean;
    skewX: number;
    skewY: number;
};
/** 原生样式配置对象 */
declare type NaturalTypeStyles = Pick<CanvasRenderingContext2D, 'fillStyle' | 'filter' | 'globalAlpha' | 'globalCompositeOperation' | 'imageSmoothingEnabled' | 'imageSmoothingQuality' | 'lineCap' | 'lineDashOffset' | 'lineJoin' | 'lineWidth' | 'miterLimit' | 'shadowBlur' | 'shadowColor' | 'shadowOffsetX' | 'shadowOffsetY' | 'strokeStyle' | 'textAlign'>;
/** 样式配置对象 */
declare type TypeStyles = NaturalTypeStyles & NeedProcessTypeStyles;
/** 配置绘制样式 */
declare type StyleSetter = Partial<TypeStyles> | ((ctx: Context2D) => void);
/** 可加工属性 */
export declare type PositionAndSize = {
    left: number;
    top: number;
    width: number;
    height: number;
};
/** 属性加工函数 */
export declare type PropertyProcessor = (properties: PositionAndSize) => PositionAndSize;
declare const getDrawers: (ctx?: Context2D) => {
    line: (startPoint: Point, endPoint: Point) => Promise<CanvasRenderingContext2D>;
    rect: (x: number, y: number, w: number, h: number, radius?: number | undefined) => Promise<CanvasRenderingContext2D>;
    text: (text: string, x: number, y: number) => Promise<CanvasRenderingContext2D>;
    image: (image: HTMLImageElement, x: number, y: number, w?: number | undefined, h?: number | undefined) => Promise<CanvasRenderingContext2D>;
    style: (styleSetter?: StyleSetter, configs?: Partial<{
        /**
         * 是否临时绘制
         * 如果是，旧配置会在绘制完后会重置，在粒子化绘制时会严重影响性能
         * @fedault true
         */
        temporary: boolean;
    }>) => {
        line: (startPoint: Point, endPoint: Point) => Promise<CanvasRenderingContext2D>;
        rect: (x: number, y: number, w: number, h: number, radius?: number | undefined) => Promise<CanvasRenderingContext2D>;
        text: (text: string, x: number, y: number) => Promise<CanvasRenderingContext2D>;
        image: (image: HTMLImageElement, x: number, y: number, w?: number | undefined, h?: number | undefined) => Promise<CanvasRenderingContext2D>;
    };
};
export default getDrawers;
