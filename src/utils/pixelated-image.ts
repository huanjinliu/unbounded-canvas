import getImageData from "./get-image-data";

interface PixelData {
  x: number;
  y: number;
  fill: string;
}

export const pixelated = async (src: string, size: number, gap: number) => {
  const imageData = await getImageData(src);
  if (imageData === undefined) return;

  const { mapPixels } = imageData;

  const points: PixelData[] = [];
  let minX = Infinity;
  let minY = Infinity;
  // 模糊像素遍历
  mapPixels(size + gap, ({ x, y, rgba, unit }) => {
    const { r, g, b, a } = rgba;
    const halfSize = Math.floor(size / 2);
    if (unit && unit.x === halfSize && unit.y === halfSize) {
      minX = Math.min(minX, x - halfSize);
      minY = Math.min(minY, y - halfSize);
      points.push({
        x: x - halfSize,
        y: y - halfSize,
        fill: `rgba(${r}, ${g}, ${b}, ${a})`,
      })
    }
  })

  return points.map(item => ({
    x: item.x - minX,
    y: item.y - minY,
    fill: item.fill,
  }));
}