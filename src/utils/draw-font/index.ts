import { loadFont, measureText } from "../load-font";

async function drawFont (text: string, options: {
  /** 字体链接 */
  url: string,
  /**
   * 字体尺寸
   * @default 80
   */
  fontSize?: number,
  /**
   * 字体填充
   * @default #000
   */
  color?: string,
  /**
   * 字体描边宽度
   * @default 0
   */
  strokeWidth?: number;
  /**
   * 字体描边
   * @default #000
   */
  strokeColor?: string;
  /**
   * 字体宽度
   * @default 1000
   */
  width?: number,
  /**
   * 字体高度
   * @default 1000
   */
  height?: number,
  /**
   * 边缘留白
   * @default 0
   */
  padding?: number,
  /**
   * 是否考忽略设备分辨率
   * @default false
   */
  ignoreDeviceRatio?: boolean,
}) {
  const {
    url,
    color = '#000',
    strokeWidth = 0,
    strokeColor = '#000',
    width = 1000,
    height = 1000,
    fontSize = 80,
    padding = 0,
    ignoreDeviceRatio = false,
  } = options;
  if (!url) return Promise.reject('invalid font url!')

  const canvas = document.createElement('canvas');
  const ratio = ignoreDeviceRatio ? 1 : window.devicePixelRatio;

  canvas.width = width * ratio;
  canvas.height = height * ratio;

  const ctx = canvas.getContext('2d');
  if (!ctx) return Promise.reject('invalid canvas!')

  // 加载字体族
  const urlParsers = url.split('/');
  const fontName = urlParsers[urlParsers.length - 1].split('.')[0];
  await loadFont({
    url,
    name: fontName,
  }, 30000);
  // 设置文本基本样式
  ctx.fillStyle = color;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // 初步计算尺寸
  ctx.font = `normal ${fontSize}px "${fontName}"`;
  const { width: fontWidth, outerHeight: fontHeight } = measureText(ctx, text);

  // 计算分词
  // let words = text
  //   .split(/\s/)
  //   .map(word => word
  //     .replace(/([^\w\s])/g, ' $1 ')
  //     .split(/\s/)
  //     .filter(Boolean)
  //   );
  // console.dir(words)

  // words.forEach(list => {
  //   while(list.length) {
  //     const item = list.pop();
  //     if (!item) break;
  //     const { width: fontWidth, outerHeight: fontHeight } = measureText(ctx, text);
  //     if ()
  //   }
  // });


  // 自动缩放到适合展示
  const autoScale = Math.min(
    (width - padding * 2) / fontWidth,
    (height - padding * 2) / fontHeight,
    1,
  );
  ctx.font = `normal ${fontSize * autoScale * ratio}px "${fontName}"`;
  // 渲染文本
  const { offsetX } = measureText(ctx, text);
  ctx.fillText(text, (width - offsetX) * ratio / 2, height * ratio / 2);
  if (strokeWidth) ctx.strokeText(text, (width - offsetX) * ratio / 2, height * ratio / 2)

  return canvas.toDataURL('image/png');
}

export default drawFont;