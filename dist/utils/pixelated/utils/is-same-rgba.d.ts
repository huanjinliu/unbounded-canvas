export interface RGBA {
    r: number;
    g: number;
    b: number;
    a?: number;
}
/**
 * 是否是相似色块
 * @param {RGBA} color1 色值1
 * @param {RGBA} color2 色值2
 * @param {boolean} ignoreOpacity 是否忽略透明度
 * @returns {boolean} 是否是同色值
 */
declare const isSameRGBA: (color1: RGBA, color2: RGBA, ignoreOpacity?: boolean) => boolean;
export default isSameRGBA;
