import { RGBA } from "./is-same-rgba";

/**
 * 将色彩对象转字符串
 * @param {RGBA} color 色值对象 
 * @returns {string} 色值字符串
 */
const stringifyRGBA = (color: RGBA) => {
  const { r, g, b, a = 1 } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default stringifyRGBA;