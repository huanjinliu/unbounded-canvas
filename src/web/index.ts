import unboundedCanvas from '../index';

(() => {
  const _canvas: HTMLCanvasElement | null = document.querySelector('#_canvas');
  if (!_canvas) return;
  
  const [width, height] = [
    document.body.clientWidth,
    document.body.clientHeight,
  ];

  const noBounedCanvas = new unboundedCanvas.Canvas(_canvas, {
    width,
    height,
  })

  const button = document.querySelector('#back_center');
  if (!button) return;

  button.addEventListener('click', () => {
    noBounedCanvas.drawImage('./assets/test.png');
  })
})();