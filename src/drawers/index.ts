import getLineDrawer from './line';
import getRectDrawer from './rect';
import getTextDrawer from './text';
import getImageDrawer from './image';

/** 画布上下文 */
type Context2D = CanvasRenderingContext2D;

/** 需要处理的样式类型 */
type NeedProcessTypeStyles = {
  fontSize: number;
  fontFamily: string;
  lineDash: number[];
  angle: number;
  originX: 'left' | 'center' | 'right';
  originY: 'top' | 'center' | 'bottom';
}

/** 原生样式配置对象 */
type NaturalTypeStyles = Pick<
  CanvasRenderingContext2D,
  | 'fillStyle'
  | 'filter'
  | 'globalAlpha'
  | 'globalCompositeOperation'
  | 'imageSmoothingEnabled'
  | 'imageSmoothingQuality'
  | 'lineCap'
  | 'lineDashOffset'
  | 'lineJoin'
  | 'lineWidth'
  | 'miterLimit'
  | 'shadowBlur'
  | 'shadowColor'
  | 'shadowOffsetX'
  | 'shadowOffsetY'
  | 'strokeStyle'
  | 'textAlign'
>

/** 样式配置对象 */
type TypeStyles = NaturalTypeStyles & NeedProcessTypeStyles;

/** 配置绘制样式 */
type StyleSetter =
  | Partial<TypeStyles>
  | ((ctx: Context2D) => void);

/** 可加工属性 */
type ProcessProperties = {
  left: number;
  top: number;
  width: number;
  height: number;
};

/** 属性加工函数 */
export type PropertyProcessor = (properties: ProcessProperties) => ProcessProperties;

const getDrawers = (ctx?: Context2D) => {
  if (!ctx) throw ReferenceError('ctx is no define');

  /**
   * 样式覆盖
   */
  const overwriteStyle = (styleSetter: StyleSetter = {}) => {
    // 设置公用默认参数
    ctx.textBaseline = 'hanging';

    // 如果是配置函数直接执行
    if (typeof styleSetter === 'function') {
      styleSetter(ctx);
      return;
    }
    // 如果是配置参数，处理部分参数并覆盖样式
    const keys = Object.keys(styleSetter) as (keyof TypeStyles)[];

    keys.forEach((key) => {
      const value = styleSetter[key];
      if (value === undefined) return;
      const [size, ...familyPart] = ctx.font.split(' ');
      switch (key) {
        case 'originX':
        case 'originY':
        case 'angle':
          break;
        case 'fontSize':
          ctx.font = `${value}px ${familyPart.join('')}`;
          break;
        case 'fontFamily':
          ctx.font = `${size} "${value}"`;
          break;
        case 'lineDash':
          ctx.setLineDash(value as NeedProcessTypeStyles['lineDash']);
          break;
        // @ts-ignore
        default: ctx[key] = value;
      }
    })

    // 加工函数，需要处理传入数据
    const originX = styleSetter.originX ?? 'left';
    const originY = styleSetter.originY ?? 'top';
    const angle = styleSetter.angle ?? 0;
    const processor: PropertyProcessor = ({ top, left, width, height }: ProcessProperties) => {
      const offset = {
        x: originX === 'center'
          ? left - width / 2
          : originX === 'left'
            ? left
            : left - width,
        y: originY === 'center'
          ? top - height / 2
          : originY === 'top'
            ? top
            : top - height,
      }
      if (angle !== 0) {
        ctx.translate(left, top);
        ctx.rotate(((angle as number) * Math.PI) / 180);
        offset.x -= left;
        offset.y -= top;
      }
      return {
        left: offset.x,
        top: offset.y,
        width,
        height,
      };
    };
    return processor;
  };

  /**
   * 使绘制添加的新配置不破坏原有的绘制配置
   * @param drawerGetter 形状绘制获取
   * @param styleSetter 配置绘制样式
   */
  const protect = <Drawer extends AnyFunction>(
    drawerGetter: (ctx: Context2D, processor: PropertyProcessor) => Drawer,
    styleSetter: StyleSetter = {},
  ) => {
    return async (...args: Parameters<Drawer>) => {
      ctx.save();
      const processor = overwriteStyle(styleSetter) ?? ((properties: ProcessProperties) => properties);
      drawerGetter(ctx, processor)(...args);
      ctx.restore();
      return ctx;
    }
  }

  /**
   * 获取绘制函数集合
   * @param styleSetter 配置绘制样式
   */
  const getProtectdrawers = (styleSetter?: StyleSetter) => ({
    line: protect(getLineDrawer, styleSetter),
    rect: protect(getRectDrawer, styleSetter),
    text: protect(getTextDrawer, styleSetter),
    image: protect(getImageDrawer, styleSetter),
  });

  return {
    style: getProtectdrawers,
    ...getProtectdrawers(),
  }
};

export default getDrawers;