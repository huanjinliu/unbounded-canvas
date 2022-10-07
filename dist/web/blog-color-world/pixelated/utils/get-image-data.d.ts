import type { RGBA } from "./is-same-rgba";
declare type Pixel = {
    x: number;
    y: number;
    rgba: RGBA;
    unit?: {
        x: number;
        y: number;
    };
};
/** 获取图片数据 */
declare const getImageData: (src: string) => Promise<{
    getPixelColor: (row: number, col: number) => {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    getRangePixel: (startRow: number, startCol: number, endRow: number, endCol: number) => RGBA[][];
    /**
     * 遍历像素值
     * ...r, g, b, a...每四个色值元素组成一个像素
     * @param {number} unitSize 每个单位的尺寸
     * @param {Function} callback 回调函数
     */
    mapPixels: (unitSize: number, callback: (pixel: Pixel) => void) => void;
    width: number;
    height: number;
} | undefined>;
export default getImageData;
