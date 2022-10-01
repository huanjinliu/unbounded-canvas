import UnboundedCanvas from '../index';
import getDrawers from '../drawers';
import throttle from '../utils/throttle';
import { loadFont } from '../utils/load-font';
import loadImage from '../utils/load-image';

/** 格子大小 */
const GRID_SIZE = 15;
/** 格子间隔 */
const GRID_GAP = 2;
/** 最小格子尺寸 */
const GRID_MIN_SIZE = 5;
/** 最大格子尺寸 */
const GRID_MAX_SIZE = 500;
/** 字体配置 */
const FONT_CONFIGURATION = {
  name: 'Century Gothic-Bold',
  url: 'https://storage.sunzi.cool/font/965b7d59-bad0-466b-9703-a20672e27bc7.ttf'
};

const createCanvas = async () => {
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
      zoomLimit: [
        GRID_MIN_SIZE / GRID_SIZE,
        GRID_MAX_SIZE / GRID_SIZE,
      ],
    }
  });

  const ctx = unbounedCanvas.getContext();
  if (!ctx) return;

  const drawers = getDrawers(ctx);
  
  /**
   * 获取参数
   */
  const getRadius = () => {
    const { devicePixelRatio, zoom } = unbounedCanvas.getOptions();
    return 1 * devicePixelRatio * zoom
  };

  /**
   * 绘制虚线
   */
  const drawDashLine = drawers
    .style({
      strokeStyle: 'red',
      lineWidth: 1,
      lineCap: 'round',
      lineDash: [5, 5],
    })
    .line;

  /**
   * 绘制某坐标方块
   */
  const drawPoint = async (
    point: Point | Coordinate,
    color: string,
    center: Coordinate,
  ) => {
    const { devicePixelRatio, unitSize, unitGap } = unbounedCanvas.getOptions();
    const radius = getRadius();
    const size = unitSize + unitGap
    const halfSize = unitSize / 2;

    if (Array.isArray(point)) {
      const [x, y] = point;

      await drawers
        .style({ fillStyle: color })
        .rect(
          center.x * devicePixelRatio + x * size - halfSize,
          center.y * devicePixelRatio + y * size - halfSize,
          unitSize,
          unitSize,
          radius,
        );
    } else {
      const { x, y } = point;

      await drawers
        .style({ fillStyle: color })
        .rect(x - halfSize, y - halfSize, unitSize, unitSize, radius);
    }
  };

  /**
   * 监听绘制更新
   */
  unbounedCanvas.on('render', () => {
    const ctx = unbounedCanvas.getContext();
    if (!ctx) return;
    const { width, height, unitSize, unitGap, contentCenter } = unbounedCanvas.getOptions();
    const size = unitSize + unitGap
    const radius = getRadius();
  
    const unitFirstPoint = unbounedCanvas.getUnitFirstPoint(contentCenter);
    // 绘制矩形格子
    for (let y = unitFirstPoint.y; y < height + size; y += size) {
      for (let x = unitFirstPoint.x; x < width + size; x += size) {
        drawers
          .style({
            fillStyle: '#f2f2f2',
            // angle: 45,
          })
          .rect(x, y, unitSize, unitSize, radius);
      }
    }
    // 绘制中心点用于参考
    drawPoint([0, 0], 'pink', contentCenter);
  })
  /**
   * 监听绘制更新
   */
  unbounedCanvas.on('render', () => {
    const { width, height } = unbounedCanvas.getOptions();
    // 绘制中心线条用于参考
    drawDashLine([width / 2, 0], [width / 2, height]);
    drawDashLine([0, height / 2], [width, height / 2]);

  }, { zIndex: 999999 })

  loadImage('./assets/test.png').then(image => {
    unbounedCanvas.on('render', () => {
      const { width, height, zoom } = unbounedCanvas.getOptions();

      const imageWidth = image.width * zoom;
      const imageHeight = image.height * zoom;
      console.dir(imageWidth)
      drawers
        .style({
          angle: 0,
          originX: 'center',
          originY: 'bottom',
        })
        .image(
          image,
          width / 2,
          height / 2,
          imageWidth,
          imageHeight,
        )
    })
  })

  loadFont(FONT_CONFIGURATION, 1000)?.then(fontName => {
    unbounedCanvas.on('render', () => {
      const { contentCenter, width, height } = unbounedCanvas.getOptions();
      const point = unbounedCanvas.viewCroods2UnitPoint(
        contentCenter.x,
        contentCenter.y,
      );
      drawers
        .style({
          fontSize: 20,
          fontFamily: fontName,
          // angle: 45,
          originX: 'center',
          originY: 'bottom',
        })
        .text(`(x: ${point[0]}, y: ${point[1]})`, width / 2, height / 2);
    })
  })

  window.addEventListener('resize', throttle(() => {
    const { canvasCenter: oldCanvasCenter } = unbounedCanvas.getOptions();
    unbounedCanvas.setOptions({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
    const { canvasCenter, contentCenter } = unbounedCanvas.getOptions();
    const newContentCroods = {
      x: contentCenter.x + (canvasCenter.x - oldCanvasCenter.x),
      y: contentCenter.y + (canvasCenter.y - oldCanvasCenter.y),
    }
    // 保持内容区域跟随中心变动
    unbounedCanvas.focus(
      unbounedCanvas.viewCroods2UnitPoint(
        newContentCroods.x,
        newContentCroods.y
      )
    )
  }, 50));
  return unbounedCanvas;
};


createCanvas().then((canvas) => {
  const button = document.querySelector('#back_center');
  if (button) button.addEventListener('click', () => {
    canvas?.focus([0, 0]);
  })
})