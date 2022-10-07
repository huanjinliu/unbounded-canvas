/** 画布缩放配置 */
export interface ZoomSetting {
  /**
   * 是否可用
   */
  disabled: boolean;
  /**
   * 最小缩小比例，以默认画布为基础
   * @default 1
   */
  min: number;
  /**
   * 最大扩大比例，以默认画布为基础
   * @default 100
   */
  max: number;
  /**
   * 缩放中心
   * @default 'canvas'
   */
  center: "canvas" | "content" | "operation";
}

/** 单位像素格配置 */
export interface UnitSetting {
  /**
   * 像素单位格，实现像素化分格
   */
  size: number;
  /**
   * 像素单元格间距
   */
  gap?: number;
  /**
   * 是否移动粘连
   */
  sticky?: boolean;
}

/** 画布配置 */
export interface CanvasOptions {
  /**
   * 画布宽度
   */
  width: number;
  /**
   * 画布高度
   */
  height: number;
  /**
   * 容器自定义类名
   */
  className: string;
  /**
   * 画布边界
   */
  bound: [number, number];
  /**
   * 是否可内容画布移动
   */
  movable: boolean;
  /**
   * 缩放设置
   */
  zoom: boolean | Partial<ZoomSetting>;
  /**
   * 像素单位设置
   */
  unit: UnitSetting;
  /**
   * 忽略设备像素比例
   * @default false
   */
  ignoreDevicePixelRatio: boolean;
}

export type RenderType = "render";

/** 事件相关 */
export type NaturalListener<K extends keyof HTMLElementEventMap> = {
  eventName: K;
  handler: (ev: HTMLElementEventMap[K]) => any;
  options?: boolean | AddEventListenerOptions;
  window?: boolean;
};

/**
 * 创建画布共有属性
 */
export interface CommonCreateCanvasOptions {
  /**
   * 图层唯一名称
   * 可用通过图层名称取得图层画布数据，如果不设置只能通过一开始的函数调用返回值获取图层数据
   */
  uniqueKey: string;
  /**
   * 图层层级
   */
  zIndex: number;
}