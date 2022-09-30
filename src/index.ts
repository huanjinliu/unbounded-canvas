import { wait } from 'vivid-wait';
import throttle from './utils/throttle';
import { pixelated } from './utils/pixelated-image';

interface CanvasOptions {
  width: number;
  height: number;
}

interface PointObject {
  x: number;
  y: number;
}

type Point = [number, number];

interface FillPoint {
  point: Point;
  fill: string;
}

/** 格子大小 */
const GRID_SIZE = 16;
/** 格子间隔 */
const GRID_GAP = 2;
/** 最小格子尺寸 */
const GRID_MIN_SIZE = 5;
/** 最大格子尺寸 */
const GRID_MAX_SIZE = 500;

class Canvas {
  /**
   * 画布节点
   */
  element: HTMLCanvasElement;

  /**
   * 画布上下文
   */
  ctx: CanvasRenderingContext2D | null;

  /**
   * 缓存画布
   */
  cacheElement: HTMLCanvasElement;

  /**
   * 缓存画布上下文
   */
  cacheContext: CanvasRenderingContext2D | null;

  /**
   * 默认中心点
   */
  canvasCenter: PointObject;

  /**
   * 变换后的中心点
   */
  contentCenter: PointObject;

  /**
   * 移动初始位置
   */
  moveInitPoint: PointObject | undefined;

  /**
   * 缩放值
   */
  zoom: number = 1;

  /**
   * 像素倍率
   */
  devicePixelRatio: number = window.devicePixelRatio;

  /**
   *
   */
  fillPoints: FillPoint[] = [];

  constructor(element: HTMLCanvasElement, options: CanvasOptions) {
    this.element = element;
    this.ctx = element.getContext('2d');

    // 构建缓存画布（离屏画布）
    this.cacheElement = document.createElement('canvas');
    this.cacheContext = this.cacheElement.getContext('2d');

    // 初始画布css样式
    this.element.style.width = '100%';
    this.element.style.height = '100%';
    this.element.style.cursor = 'grab';

    // 初始画布参数
    this.canvasCenter = this.initCanvas(options);
    this.contentCenter = { ...this.canvasCenter };

    this.render();

    this.initMoveListener();
    this.initZoomListener();
    this.initClickListener();
    this.initHoverListener();
    this.initResizeListener();
  }

  /**
   * 初始画布
   */
  initCanvas(options: CanvasOptions) {
    const { width, height } = options;

    this.element.width = width * this.devicePixelRatio;
    this.element.height = height * this.devicePixelRatio;

    this.cacheElement.width = width * this.devicePixelRatio;
    this.cacheElement.height = height * this.devicePixelRatio;

    return {
      x: this.element.width / this.devicePixelRatio / 2,
      y: this.element.height / this.devicePixelRatio / 2,
    };
  }

  /**
   * 计算缩放后的值
   */
  getOptions() {
    const size = GRID_SIZE * this.zoom * this.devicePixelRatio;
    const gap = GRID_GAP * this.zoom * this.devicePixelRatio;

    return {
      gap,
      size,
      halfSize: size / 2,
      unitSize: size + gap,
    };
  }

  /**
   * 根据页面坐标获取方块坐标（相对于内容中心而不是画布中心）
   */
  getCroodsFromView(x: number, y: number) {
    const { unitSize, halfSize } = this.getOptions();

    // 计算点击坐标到画布中心的距离
    const distanceCanvasCenter = {
      x: x - this.canvasCenter.x,
      y: y - this.canvasCenter.y,
    };

    // 计算点击坐标到内容中心的距离
    const distanceContentCenter = {
      x: distanceCanvasCenter.x + (this.canvasCenter.x - this.contentCenter.x),
      y: distanceCanvasCenter.y + (this.canvasCenter.y - this.contentCenter.y),
    };

    return [
      Math.floor(
        (distanceContentCenter.x * this.devicePixelRatio + halfSize) / unitSize
      ),
      Math.floor(
        (distanceContentCenter.y * this.devicePixelRatio + halfSize) / unitSize
      ),
    ] as Point;
  }

  /**
   * 根据相对于内容中心的方块中心坐标获取页面坐标
   */
  getCroodsFromContent(x: number, y: number) {
    const { unitSize } = this.getOptions();

    // 方块中心到内容中心位置
    const blockPosition = {
      x: (x * unitSize) / this.devicePixelRatio,
      y: (y * unitSize) / this.devicePixelRatio,
    };

    // 方块中心到画布中心的距离
    const distanceCanvasCenter = {
      x: blockPosition.x - (this.canvasCenter.x - this.contentCenter.x),
      y: blockPosition.y - (this.canvasCenter.y - this.contentCenter.y),
    };

    return {
      x: distanceCanvasCenter.x + this.canvasCenter.x,
      y: distanceCanvasCenter.y + this.canvasCenter.y,
    };
  }

  /**
   * 绘制某坐标方块
   */
  drawPoint(
    point: Point | PointObject,
    color?: string,
    center: PointObject = this.contentCenter
  ) {
    const ctx = this.cacheContext;
    if (!ctx) return;
    const { size, unitSize, halfSize } = this.getOptions();
    ctx.save();
    if (color) ctx.fillStyle = color;
    if (Array.isArray(point)) {
      const [x, y] = point;
      this.drawRect(
        center.x * this.devicePixelRatio + x * unitSize - halfSize,
        center.y * this.devicePixelRatio + y * unitSize - halfSize,
        size,
        size
      );
    } else {
      const { x, y } = point;
      this.drawRect(x - halfSize, y - halfSize, size, size);
    }
    ctx.restore();
  }

  /**
   * 绘制线条
   */
  drawLine(startPoint: Point, endPoint: Point) {
    const ctx = this.cacheContext;
    if (!ctx) return;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(...startPoint);
    ctx.lineTo(...endPoint);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.restore();
  }

  /**
   * 绘制圆角矩形
   */
  drawRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radius: number = 1 * this.devicePixelRatio * this.zoom,
  ) {
    const ctx = this.cacheContext;
    if (!ctx) return;
    const r = w > radius * 2 ? radius : 0;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, radius);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, radius);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, radius);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, radius);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  /**
   * 渲染画布
   */
  render(contentCenter = this.contentCenter) {
    const ctx = this.cacheContext;
    return new Promise<void>((resolve, reject) => {
      window.requestAnimationFrame(() => {
        if (!ctx) return reject();
        ctx.clearRect(0, 0, this.element.width, this.element.height);
  
        const { size, unitSize, halfSize } = this.getOptions();
  
        // 计算绘制起始点
        const calcDrawStartPoint = () => {
          // 中心方块左上角与画布左上角的距离
          const centerOffset = {
            x: contentCenter.x * this.devicePixelRatio - halfSize,
            y: contentCenter.y * this.devicePixelRatio - halfSize,
          };
          // 中心方块左上角与画布左上角的距离可以再加多少个矩形
          const rest = {
            top: Math.ceil(centerOffset.y / unitSize),
            left: Math.ceil(centerOffset.x / unitSize),
          };
  
          // 绘制矩形起始点
          const drawStartPoint = {
            x: centerOffset.x - rest.left * unitSize,
            y: centerOffset.y - rest.top * unitSize,
          };
  
          return drawStartPoint;
        };
  
        const drawStartPoint = calcDrawStartPoint();
  
        // 绘制颜色
        ctx.fillStyle = '#f2f2f2';
        // 绘制矩形格子
        for (
          let y = drawStartPoint.y;
          y < this.element.height + size;
          y += unitSize
        ) {
          for (
            let x = drawStartPoint.x;
            x < this.element.width + size;
            x += unitSize
          ) {
            this.drawRect(x, y, size, size);
          }
        }
  
        // 绘制中心方块用于参考
        this.fillPoints.forEach(({ point, fill }) => {
          this.drawPoint(point, fill, contentCenter);
        });
  
        // 绘制线条用于参考
        this.drawLine(
          [this.element.width / 2, 0],
          [this.element.width / 2, this.element.height]
        );
        this.drawLine(
          [0, this.element.height / 2],
          [this.element.width, this.element.height / 2]
        );

        if (this.ctx) {
          this.ctx.clearRect(0, 0, this.element.width, this.element.height);
          this.ctx.drawImage(this.cacheElement, 0, 0)
        };

        resolve();
      });
    })
  }

  /**
   * 缩放
   */
  handleZoom (newZoom: number, focusPoint: PointObject = this.canvasCenter) {
    const preZoom = this.zoom;
    this.zoom = newZoom;

    // 旧的内容中心点到鼠标聚焦点的距离
    const oldDistance = {
      x: this.contentCenter.x - focusPoint.x,
      y: this.contentCenter.y - focusPoint.y,
    }
    // 新的内容中心点到鼠标聚焦点的距离
    const newDistance = {
      x: oldDistance.x / preZoom * this.zoom,
      y: oldDistance.y / preZoom * this.zoom,
    }

    this.contentCenter = {
      x: this.contentCenter.x + (newDistance.x - oldDistance.x),
      y: this.contentCenter.y + (newDistance.y - oldDistance.y),
    }

    this.render();
  }

  /**
   * 初始移动监听
   */
  initMoveListener() {
    const handleStart = (event: MouseEvent) => {
      this.moveInitPoint = {
        x: event.offsetX,
        y: event.offsetY,
      };
      this.element.style.cursor = 'grabbing';
    };
    const handleMoving = (event: MouseEvent) => {
      if (this.moveInitPoint === undefined) return;

      const contentCenter = {
        x: this.contentCenter.x + event.offsetX - this.moveInitPoint.x,
        y: this.contentCenter.y + event.offsetY - this.moveInitPoint.y,
      };

      this.render(contentCenter);
    };
    const handleEnd = (event: MouseEvent) => {
      if (this.moveInitPoint === undefined) return;

      this.contentCenter = {
        x: this.contentCenter.x + event.offsetX - this.moveInitPoint.x,
        y: this.contentCenter.y + event.offsetY - this.moveInitPoint.y,
      };

      this.render();

      this.moveInitPoint = undefined;
      this.element.style.cursor = 'grab';
    };
    this.element.addEventListener('mousedown', handleStart);
    this.element.addEventListener('mousemove', handleMoving);
    this.element.addEventListener('mouseup', handleEnd);
    this.element.addEventListener('mouseleave', handleEnd);
  }

  /**
   * 初始缩放监听
   */
  initZoomListener() {
    this.element.addEventListener('wheel', (event) => {
      if (this.moveInitPoint) return;
      const { offsetX, offsetY, deltaY } = event;
      const dZoom = 0.999 ** (deltaY / 2);
      const newZoom = Math.min(
        Math.max(this.zoom * dZoom, GRID_MIN_SIZE / GRID_SIZE),
        GRID_MAX_SIZE / GRID_SIZE
      );

      this.handleZoom(newZoom, {
        x: offsetX,
        y: offsetY,
      });
    });
  }

  /**
   * 初始点击监听
   */
  initClickListener() {
    this.element.addEventListener('click', (event) => {
      const { offsetX, offsetY } = event;

      console.log(this.getCroodsFromView(offsetX, offsetY));
      // this.fillPoints.push({
      //   point: this.getCroodsFromView(offsetX, offsetY),
      //   fill: 'pink',
      // });

      // this.render();
    });
  }

  /**
   * 初始悬空监听
   */
  initHoverListener() {
    // this.element.addEventListener('mousemove', (event) => {
    //   if (this.moveInitPoint) return;
    //   const { offsetX, offsetY } = event;

    //   this.render().then(() => {
    //     this.drawPoint(
    //       this.getCroodsFromView(offsetX, offsetY),
    //       '#999'
    //     );
    //   });
    // });
  }

  /**
   * 监听界面尺寸变化
   */
  initResizeListener() {
    const refresh = throttle(() => {
      this.canvasCenter = this.initCanvas({
        width: this.element.clientWidth,
        height: this.element.clientHeight,
      });
      this.render();
    }, 50);
    window.addEventListener('resize', refresh);
  }

  /**
   * 回到中心
   */
  focus(point: Point, duration?: number) {
    const pointCroods = this.getCroodsFromContent(...point);
    const oldContentCroods = { ...this.contentCenter };
    const distanceContentCenter = {
      x: pointCroods.x - oldContentCroods.x,
      y: pointCroods.y - oldContentCroods.y,
    };
    const distanceCanvasCenter = {
      x: oldContentCroods.x - this.canvasCenter.x + distanceContentCenter.x,
      y: oldContentCroods.y - this.canvasCenter.y + distanceContentCenter.y
    };
    let time = duration ?? Math.max(Math.abs(distanceCanvasCenter.x), Math.abs(distanceCanvasCenter.y)) / 150 * 1000;
    time = Math.min(Math.max(time, 300), 2000);

    // 在指定时间内通过特定过渡方式变成指定值
    wait(time, {
      mode: 'ease-in-out',
      onUpdate: percent => {
        this.contentCenter = {
          x: oldContentCroods.x - distanceCanvasCenter.x * percent,
          y: oldContentCroods.y - distanceCanvasCenter.y * percent,
        };
        this.render();
      }
    })
  }

  /**
   * 绘制图像
   */
  async drawImage(src: string) {
    const pixelData = await pixelated(src, 16, 2);
    if (!pixelData) return;
    this.fillPoints.push(
      ...pixelData.map(({ x, y, fill }) => {
        return {
          point: this.getCroodsFromView(x, y),
          fill,
        }
      })
    )
    this.render();
  }
}

export default {
  Canvas,
};
