declare function drawFont(text: string, options: {
    /** 字体链接 */
    url: string;
    /**
     * 字体尺寸
     * @default 80
     */
    fontSize?: number;
    /**
     * 字体填充
     * @default #000
     */
    color?: string;
    /**
     * 字体描边宽度
     * @default 0
     */
    strokeWidth?: number;
    /**
     * 字体描边
     * @default #000
     */
    strokeColor?: string;
    /**
     * 字体宽度
     * @default 1000
     */
    width?: number;
    /**
     * 字体高度
     * @default 1000
     */
    height?: number;
    /**
     * 边缘留白
     * @default 0
     */
    padding?: number;
    /**
     * 是否考忽略设备分辨率
     * @default false
     */
    ignoreDeviceRatio?: boolean;
}): Promise<string>;
export default drawFont;
