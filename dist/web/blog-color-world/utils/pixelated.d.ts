import { RGBA } from "./is-same-rgba";
interface PixelData {
    col: number;
    row: number;
    fill: RGBA;
}
export declare const pixelated: (src: string, size: number, gap: number) => Promise<{
    cols: number;
    rows: number;
    points: PixelData[];
} | undefined>;
export {};
