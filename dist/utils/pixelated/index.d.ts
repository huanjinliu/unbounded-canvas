import { RGBA } from "./utils/is-same-rgba";
interface PixelData {
    col: number;
    row: number;
    fill: RGBA;
}
declare const pixelated: (src: string, options?: Partial<{
    mode: 'use-most' | 'use-first' | 'use-middle' | 'use-last' | 'use-most-related';
    size: number;
    gap: number;
}>) => Promise<{
    cols: number;
    rows: number;
    points: PixelData[];
} | undefined>;
export default pixelated;
