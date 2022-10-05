import getImageData from "./get-image-data";
import { RGBA } from "./is-same-rgba";

interface PixelData {
  col: number;
  row: number;
  fill: RGBA;
}

export const pixelated = async (src: string, size: number, gap: number) => {
  const imageData = await getImageData(src);
  if (imageData === undefined) return;

  const { width, height, mapPixels } = imageData;

  const points: PixelData[] = [];
  let minX = Infinity;
  let minY = Infinity;
  // 模糊像素遍历
  mapPixels(size + gap, ({ x, y, rgba, unit }) => {
    const halfSize = Math.floor(size / 2);
    if (!unit || (unit && unit.x === halfSize && unit.y === halfSize)) {
      minX = Math.min(minX, x - halfSize);
      minY = Math.min(minY, y - halfSize);
      points.push({
        col: Math.floor(x / size),
        row: Math.floor(y / size),
        fill: rgba,
      })
    }
  })

  return {
    cols: Math.floor(width / size),
    rows: Math.floor(height / size),
    points,
  };
}