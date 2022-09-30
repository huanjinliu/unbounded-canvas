
/** 加载图片 */
const loadImage = (src: string) => new Promise<HTMLImageElement>(resolve => {
  const image = new Image();
  image.src = src;
  image.onload = () => {
    resolve(image);
  }
});

export default loadImage;