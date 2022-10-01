declare type Font = {
    name: string;
    url: string;
};
/**
 * 加载字体
 * @param font 字体配置 {@link Font}
 * @param timeout 超时时间
 */
export declare const loadFont: (font: Font, timeout?: number) => Promise<string>;
export {};
