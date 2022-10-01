import Fontfaceobserver from 'fontfaceobserver';
import { v4 as uuid } from 'uuid';

type Font = { name: string, url: string };

const fontStyleId = `font-style-${uuid()}`;

const loadedFonts: Font[] = [];

/**
 * 加载字体
 * @param font 字体配置 {@link Font}
 * @param timeout 超时时间
 */
export const loadFont = (font: Font, timeout: number = 30000) => {
  const { name } = font;

  if (loadedFonts.find(font => font.name === name)) return Promise.resolve(font.name);
  loadedFonts.push(font);

  const fontStyleNode = document.querySelector(`#${fontStyleId}`) ?? document.createElement('style');
  fontStyleNode.id = fontStyleId;
  fontStyleNode.innerHTML = loadedFonts.map(font =>`
    @font-face {
      font-weight: normal;
      font-style: normal;
      font-family: "${font.name}";
      src: url('${font.url}');
    }
  `).join('');
  if (!fontStyleNode.parentNode) {
    document.head.append(fontStyleNode);
  }
  return new Promise<string>((resolve, reject) =>
    new Fontfaceobserver(name).load(null, timeout)
      .then(() => resolve(font.name))
      .catch(reject)
  );
};
