/**
 * 绘制线条
 */
export default (ctx: CanvasRenderingContext2D) => (
  startPoint: Point,
  endPoint: Point
) => {
  ctx.beginPath();
  ctx.moveTo(...startPoint);
  ctx.lineTo(...endPoint);
  ctx.stroke();
}
