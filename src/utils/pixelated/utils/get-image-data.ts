import loadImage from "../../load-image";
import type { RGBA } from "./is-same-rgba";

type Pixel = {
  x: number,
  y: number,
  rgba: RGBA,
  unit?: {
    x: number,
    y: number,
  },
};

/** 获取图片数据 */
const getImageData = async (src: string) => {
  const image = await loadImage(src);
  if (!image) return undefined;

  const img2Canvas = document.createElement('canvas');
  img2Canvas.width = image.width;
  img2Canvas.height = image.height;

  const ctx = img2Canvas.getContext('2d');
  if (!ctx) return undefined;

  ctx.drawImage(image, 0, 0);
  const { data: imageData } = ctx.getImageData(0, 0, img2Canvas.width, img2Canvas.height);
  const getPixelColor = (row: number, col: number) => {
    const ind = (row * image.width + col) * 4;
    const r = imageData[ind];
    const g = imageData[ind + 1];
    const b = imageData[ind + 2];
    const a = imageData[ind + 3] / 255;
    return { r, g, b, a };
  };
  const getRangePixel = (startRow: number, startCol: number, endRow: number, endCol: number) => {
    const range: RGBA[][] = [];
    if (endCol < startCol || endRow < endRow) return range; 
    for (let y = startCol; y < endCol; y++) {
      range[endCol - startCol] = [];
      for (let x = startRow; x < endRow; x++) {
        range[endCol - startCol].push(getPixelColor(x, y));
      }
    }
    return range;
  };
  return {
    getPixelColor,
    getRangePixel,
    /**
     * 遍历像素值
     * ...r, g, b, a...每四个色值元素组成一个像素
     * @param {number} unitSize 每个单位的尺寸 
     * @param {Function} callback 回调函数
     */
    mapPixels: (unitSize: number, callback: (pixel: Pixel) => void) => {
      // 每个单位内部遍历
      const mapUnit = (unitCol: number, unitRow: number) => {
        for (let y = 0; y < unitSize; y++) {
          for (let x = 0; x < unitSize; x++) {
            const row = unitRow * unitSize + y;
            const col = unitCol * unitSize + x;

            callback({
              x: col,
              y: row,
              rgba: getPixelColor(row, col),
              unit: unitSize > 0 ? { x, y } : undefined,
            })
          }
        }
      }
      for (let y = 0; y < Math.floor(image.height / unitSize); y++) {
        for (let x = 0; x < Math.floor(image.width / unitSize); x++) {
          mapUnit(x, y);
        }
      }
    },
    width: image.width,
    height: image.height,
  };
}

export default getImageData;