import { PropertyProcessor } from ".";

/**
 * 绘制可设置圆角的矩形
 */
export default (ctx: CanvasRenderingContext2D, composeCroods: PropertyProcessor) =>
  (x: number, y: number, w: number, h: number, radius: number = 0) => {
    const { left, top, width, height } = composeCroods({
      left: x,
      top: y,
      width: w,
      height: h,
    });
    const r = w > radius * 2 ? radius : 0;
    if (r < 1) {
      ctx.fillRect(left, top, width, height);
      return;
    }
    ctx.beginPath();
    ctx.moveTo(left + r, top);
    ctx.lineTo(left + width - r, top);
    r && ctx.arcTo(left + width, top, left + width, top + r, radius);
    ctx.lineTo(left + width, top + height - r);
    r && ctx.arcTo(left + width, top + height, left + width - r, top + height, radius);
    ctx.lineTo(left + r, top + height);
    r && ctx.arcTo(left, top + height, left, top + height - r, radius);
    ctx.lineTo(left, top + r);
    r && ctx.arcTo(left, top, left + r, top, radius);
    ctx.closePath();
    ctx.fill();
  };
