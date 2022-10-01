import { PropertyProcessor } from ".";

/**
 * 绘制图像
 */
export default (ctx: CanvasRenderingContext2D, composeCroods: PropertyProcessor) => 
  (
    image: HTMLImageElement,
    x: number,
    y: number,
    w?: number,
    h?: number,
  ) => {
    const { left, top, width, height } = composeCroods({
      left: x,
      top: y,
      width: w ?? image.width,
      height: h ?? image.height,
    });
    ctx.drawImage(image, left, top, width, height);
  };
