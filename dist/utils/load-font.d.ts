declare type Font = {
    name: string;
    url: string;
};
/**
 * 测量文本尺寸
 */
export declare const measureText: (ctx: CanvasRenderingContext2D, text: string) => {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    outerHeight: number;
};
/**
 * 加载字体
 * @param font 字体配置 {@link Font}
 * @param timeout 超时时间
 */
export declare const loadFont: (font: Font, timeout?: number) => Promise<string>;
export {};
