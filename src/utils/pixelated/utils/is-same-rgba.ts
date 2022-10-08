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
const isSameRGBA = (color1: RGBA, color2: RGBA, ignoreOpacity: boolean = false) => {
  return (
    color1.r === color2.r &&
    color1.g === color2.g &&
    color1.b === color2.b &&
    (!ignoreOpacity || color1.a === color2.a)
  );
}

export default isSameRGBA;