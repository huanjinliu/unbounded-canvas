import UnboundedCanvas from '../../unbounded-canvas/index.class';
import getDrawers from '../../drawers';
import throttle from '../../utils/throttle';
import { loadFont } from '../../utils/load-font';
import pixelated from './pixelated';

/** 格子大小 */
const GRID_SIZE = 5;
/** 格子间隔 */
const GRID_GAP = 1;
/** 最小格子尺寸 */
const GRID_MIN_SIZE = 3;
/** 最大格子尺寸 */
const GRID_MAX_SIZE = 500;
/** 字体配置 */
const FONT_CONFIGURATION = {
  name: 'Century Gothic-Bold',
  url: 'https://storage.sunzi.cool/font/965b7d59-bad0-466b-9703-a20672e27bc7.ttf'
};

const createBlogColorWorld = async () => {
  const _canvas: HTMLCanvasElement | null = document.querySelector('#_canvas');
  if (!_canvas) return;
  
  const [width, height] = [
    document.body.clientWidth,
    document.body.clientHeight,
  ];

  const unbounedCanvas = new UnboundedCanvas(_canvas, {
    width,
    height,
    unit: {
      size: GRID_SIZE,
      gap: GRID_GAP,
      // sticky: true,
    },
    zoom: {
      min: GRID_MIN_SIZE / GRID_SIZE,
      max: GRID_MAX_SIZE / GRID_SIZE,
    }
  });

  /**
   * 获取参数
   */
  const getRadius = () => {
    const { devicePixelRatio, zoom } = unbounedCanvas.getOptions();
    return 1 * devicePixelRatio * zoom
  };

  /**
   * 绘制某坐标方块
   */
  const drawPoint = async (
    ctx: CanvasRenderingContext2D,
    point: Point | Coordinate,
    color: string,
    center?: Coordinate,
  ) => {
    const { width, height, devicePixelRatio, unitSize, unitGap, contentCenter } = unbounedCanvas.getOptions();
    const radius = getRadius();
    const size = unitSize + unitGap
    const halfSize = unitSize / 2;
    const _center = center ?? contentCenter;

    const [x, y] = Array.isArray(point)
      ? [
        _center.x * devicePixelRatio + point[0] * size - halfSize,
        _center.y * devicePixelRatio + point[1] * size - halfSize,
      ]
      : [
        point.x - halfSize,
        point.y - halfSize,
      ]
    // 如果不在画布内的格子不进行渲染  
    if (x + unitSize < 0 || x > width || y + unitSize < 0 || y > height) return;
    await getDrawers(ctx)
      .style({ fillStyle: color })
      .rect(x, y, unitSize, unitSize, radius);
  };

  /**
   * 监听绘制更新
   */
  unbounedCanvas
    .add2dLayer((ctx) => {
      const { width, height, unitSize, unitGap, contentCenter } = unbounedCanvas.getOptions();
      const size = unitSize + unitGap
      const radius = getRadius();
      const r = radius > 3 ? radius : 0;
    
      const unitFirstPoint = unbounedCanvas.getUnitFirstPoint(contentCenter);

      const drawRadiusRectPath = (left: number, top: number) => {
        ctx.moveTo(left + r, top);
        ctx.lineTo(left + unitSize - r, top);
        r && ctx.arcTo(left + unitSize, top, left + unitSize, top + r, radius);
        ctx.lineTo(left + unitSize, top + unitSize - r);
        r && ctx.arcTo(left + unitSize, top + unitSize, left + unitSize - r, top + unitSize, radius);
        ctx.lineTo(left + r, top + unitSize);
        r && ctx.arcTo(left, top + unitSize, left, top + unitSize - r, radius);
        ctx.lineTo(left, top + r);
        r && ctx.arcTo(left, top, left + r, top, radius);
        ctx.lineTo(left, top + r);
      }
      // 绘制矩形格子
      ctx.save();
      ctx.fillStyle = '#f2f2f2';
      ctx.beginPath();
      for (let y = unitFirstPoint.y; y < height + size; y += size) {
        for (let x = unitFirstPoint.x; x < width + size; x += size) {
          drawRadiusRectPath(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }, {
      uniqueKey: 'bg',
      needOffScreenCache: true,
    });

  /**
   * 坐标参考
   */
  loadFont(FONT_CONFIGURATION, 1000)?.then(fontName => {
    unbounedCanvas.add2dLayer((ctx) => {
      const { contentCenter } = unbounedCanvas.getOptions();
      const point = unbounedCanvas.viewCoords2UnitPoint(
        contentCenter.x,
        contentCenter.y,
      );
      getDrawers(ctx)
        .style({
          fontSize: 12,
          fontFamily: fontName,
          opacity: 0.6,
          fillStyle: 'RED',
        })
        .text(`(x: ${point[0]}, y: ${point[1]})`, 10, 10);
    })
  })

  await pixelated('./assets/test.png', {
    size: 5,
    gap: 0,
    mode: 'use-most-related',
  })
    .then(imageData => {
      if (!imageData) return;
      const { rows, cols, points } = imageData;
      unbounedCanvas.add2dLayer((ctx) => {
        // console.time('word');
        points.forEach(({ col, row, fill }) => {
          if (
            (fill.r === 255 && fill.g === 255 && fill.b === 255) ||
            fill.a === 0
          ) return;
          drawPoint(
            ctx,
            [Math.floor(- cols / 2) + col, Math.floor(- rows / 2) + row - 10],
            `rgba(${fill.r}, ${fill.g}, ${fill.b}, ${fill.a})`
          );
        })
        // console.timeEnd('word');
      }, {
        needOffScreenCache: true,
      });
    })
    
  /**
   * 浏览器尺寸变化事件监听
   */
  window.addEventListener('resize', throttle(() => {
    unbounedCanvas.updateCanvas(
      document.body.clientWidth,
      document.body.clientHeight,
    );
  }, 50));

  const button = document.querySelector('#back_center');
  if (button) button.addEventListener('click', () => {
    unbounedCanvas?.focus([0, 0]);
  })
};

createBlogColorWorld();