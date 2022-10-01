import { PropertyProcessor } from ".";

/**
 * 绘制文本
 */
export default (ctx: CanvasRenderingContext2D, composeCroods: PropertyProcessor) =>
  (text: string, x: number, y: number) => {
    const measure = ctx.measureText(text);
    const { left, top } = composeCroods({
      left: x,
      top: y,
      width: measure.width,
      height: measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent,
    });
    ctx.fillText(text, left, top);
  };
