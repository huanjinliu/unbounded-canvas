import getLineDrawer from './line';
import getRectDrawer from './rect';
import getTextDrawer from './text';
import getImageDrawer from './image';
import { BEHAVE_MATRICES, multiplyTransformMatrices } from '../utils/matrix';

/** 画布上下文 */
type Context2D = CanvasRenderingContext2D;

/** 需要处理的样式类型 */
type NeedProcessTypeStyles = {
  fontSize: number;
  fontFamily: string;
  lineDash: number[];
  angle: number;
  scaleX: number;
  scaleY: number;
  originX: 'left' | 'center' | 'right';
  originY: 'top' | 'center' | 'bottom';
  flipX: boolean;
  flipY: boolean;
  skewX: number;
  skewY: number;
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
export type PositionAndSize = {
  left: number;
  top: number;
  width: number;
  height: number;
};

/** 属性加工函数 */
export type PropertyProcessor = (properties: PositionAndSize) => PositionAndSize;

/** 变换默认值 */
const TRANSFORM_DEFAULT_SETTING = {
  originX: 'left',
  originY: 'top',
  scaleX: 1,
  scaleY: 1,
  flipX: false,
  flipY: false,
  angle: 0,
  skewX: 0,
  skewY: 0,
};

const getDrawers = (ctx?: Context2D) => {
  if (!ctx) throw ReferenceError('ctx is no define');
  /** 设置公用默认参数 */
  ctx.textBaseline = 'hanging';

  /**
   * 样式覆盖
   */
  const overwriteStyle = (styleSetter?: StyleSetter) => {
    if (styleSetter === undefined) return;
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
    });
  };

  /**
   * 获取绘制函数集合
   * @param styleSetter 配置绘制样式
   * @param configs 配置
   */
  const getProtectdrawers = (
    styleSetter?: StyleSetter,
    configs: Partial<{
      /**
       * 是否临时绘制
       * 如果是，旧配置会在绘制完后会重置，在粒子化绘制时会严重影响性能
       * @fedault true
       */
      temporary: boolean;
    }> = {},
  ) => {
    const { temporary = true } = configs;

    /**
     * 使绘制添加的新配置不破坏原有的绘制配置
     * @param drawerGetter 形状绘制获取
     * @param styleSetter 配置绘制样式
     */
    const protect = <Drawer extends AnyFunction>(
      drawerGetter: (ctx: Context2D, processor: PropertyProcessor) => Drawer,
      styleSetter?: StyleSetter,
    ) => {
      let transform = styleSetter && Object.keys(styleSetter)
        .reduce<Partial<NeedProcessTypeStyles>>((result, key) => {
          if (!TRANSFORM_DEFAULT_SETTING[key]) return result;
          if (styleSetter[key] === TRANSFORM_DEFAULT_SETTING[key]) return result;
          result[key] = styleSetter[key];
          return result;
        }, {});
      
      const withTransform = (positionAndSize: PositionAndSize) => {
        if (transform === undefined) return positionAndSize;
        const { top, left, width, height } = positionAndSize;
        const {
          originX = 'left',
          originY = 'top',
          scaleX = 1,
          scaleY = 1,
          flipX = false,
          flipY = false,
          angle = 0,
          skewX = 0,
          skewY = 0,
        } = transform;
        const offset = {
          x: {
            'left': 0,
            'center': width / 2,
            'right': width,
          }[originX],
          y: {
            'top': 0,
            'center': height / 2,
            'bottom': height,
          }[originY],
        }
        const transformQueue = [
          // 位移
          BEHAVE_MATRICES.move(left, top),
          // 缩放
          BEHAVE_MATRICES.scale(scaleX, scaleY),
          // 旋转
          BEHAVE_MATRICES.rotate(angle),
          // 变形
          BEHAVE_MATRICES.skew(skewX, skewY),
          // 翻转
          BEHAVE_MATRICES.flip(flipX, flipY),
          BEHAVE_MATRICES.move(
            flipX ? -width : -offset.x * 2, 
            flipY ? -height : -offset.y * 2,
          ),
        ];

        ctx.transform(...multiplyTransformMatrices(transformQueue));

        return {
          left: offset.x,
          top: offset.y,
          width,
          height,
        };
      };
      return async (...args: Parameters<Drawer>) => {
        temporary && ctx.save();
        overwriteStyle(styleSetter);
        drawerGetter(ctx, withTransform)(...args);
        if (transform && !temporary) ctx.resetTransform();
        temporary && ctx.restore();
        return ctx;
      }
    }

    return {
      line: protect(getLineDrawer, styleSetter),
      rect: protect(getRectDrawer, styleSetter),
      text: protect(getTextDrawer, styleSetter),
      image: protect(getImageDrawer, styleSetter),
    };
  };

  return {
    style: getProtectdrawers,
    ...getProtectdrawers(),
  }
};

export default getDrawers;