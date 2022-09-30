/**
 * 节流
 * 单位时间内只执行一次
 */
const throttle = (handler: Function, duration: number) => {
  let preTime: number | undefined;
  return () => {
    let time = new Date().getTime();
    if (preTime && time - preTime < duration) return;
    preTime = time;

    const timer = setTimeout(() => {
      handler();
      clearTimeout(timer);
      preTime = undefined;
    }, duration);
  }
}

export default throttle;