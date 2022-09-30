/**
 * 节流
 * 单位时间内只执行一次
 */
declare const throttle: (handler: Function, duration: number) => () => void;
export default throttle;
