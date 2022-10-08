import greenlet from 'greenlet';
import isSameRGBA, { RGBA } from "./utils/is-same-rgba";
import getImageData from "./utils/get-image-data";
import calcMostRelated from "./utils/calc-most-related";
import calcMostAppear from "./utils/calc-most-appear";

interface PixelData {
  col: number;
  row: number;
  fill: RGBA;
}

const pixelated = async (src: string, options: Partial<{
  mode:
    | 'use-most'
    | 'use-first'
    | 'use-middle'
    | 'use-last'
    | 'use-most-related',
  size: number,
  gap: number,
}> = {}) => {
  const imageData = await getImageData(src);
  if (imageData === undefined) return;

  const getPixelatedData = (_imageData: typeof imageData, _options: typeof options) => {
    const { mode = 'use-middle', size = 1, gap = 0 } = _options;
    const { getRangePixel, mapPixels, width, height } = _imageData;

    const points: PixelData[] = [];

    const drawStrategies = {
      /** 策略 1：使用颜色出现最多的颜色作为像素块填充 */
      'use-most': () => {
        let colors: RGBA[] = [];
        mapPixels(size + gap, ({ x, y, rgba, unit }) => {
          if (unit && unit.x === 0 && unit.y === 0) colors = [];
          colors.push(rgba);
          const lastIndex = size - 1;
          // 当遍历单位区域到最后一个像素
          if (unit && unit.x === lastIndex && unit.y === lastIndex) {
            const colorTimes = calcMostAppear(colors, isSameRGBA);
            if (colorTimes.length === 0) return;
            console.log(colorTimes)
            const theMostColor = colorTimes[0].value;
            points.push({
              col: Math.floor(x / size),
              row: Math.floor(y / size),
              fill: theMostColor,
            });
          }
        })
      },
      /** 策略 2：使用出现的第一个颜色作为像素块填充 */
      'use-first': () => {
        mapPixels(size + gap, ({ x, y, rgba, unit }) => {
          if (rgba.a === 0) return;
          if (unit && unit.x === 0 && unit.y === 0) {
            points.push({
              col: Math.floor(x / size),
              row: Math.floor(y / size),
              fill: rgba,
            });
          }
        })
      },
      /** 策略 3：使用中间出现的颜色作为像素块填充 */
      'use-middle': () => {
        mapPixels(size + gap, ({ x, y, rgba, unit }) => {
          if (rgba.a === 0) return;
          const middleIndex = Math.floor(size / 2);
          if (unit && unit.x === middleIndex && unit.y === middleIndex) {
            points.push({
              col: Math.floor(x / size),
              row: Math.floor(y / size),
              fill: rgba,
            });
          }
        })
      },
      /** 策略 4：使用最后出现的颜色作为像素块填充 */
      'use-last': () => {
        mapPixels(size + gap, ({ x, y, rgba, unit }) => {
          if (rgba.a === 0) return;
          const lastIndex = size - 1;
          if (unit && unit.x === lastIndex && unit.y === lastIndex) {
            points.push({
              col: Math.floor(x / size),
              row: Math.floor(y / size),
              fill: rgba,
            });
          }
        })
      },
      /**
       * 策略 5：使用范围内连续色值最多的颜色作为像素块填充
       * @param {number} spread 拓展范围 
       */
      'use-most-related': (spread: number = 0) => {
        mapPixels(size + gap, ({ x, y, rgba, unit }) => {
          if (!unit) return;
          // 当遍历单位区域到最后一个像素
          if (unit && unit.x === 0 && unit.y === 0) {
            const { value: color } = calcMostRelated(
              getRangePixel(
                y - spread,
                x - spread,
                y + size - 1 + spread,
                x + size - 1 + spread,
              ),
              isSameRGBA,
            );
            if (!color) return;
            points.push({
              col: Math.floor(x / size),
              row: Math.floor(y / size),
              fill: color,
            });
          }
        })
      }
    };

    drawStrategies[mode]();

    return Promise.resolve({
      cols: Math.floor(width / size),
      rows: Math.floor(height / size),
      points,
    })
  };

  return getPixelatedData(imageData, options);
};

export default pixelated;
