export declare type Matrix = [
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
];
/** 单位矩阵 */
export declare const UNIT_MATRIX: Matrix;
/**
 * 行为变换矩阵
 */
export declare const BEHAVE_MATRICES: {
    move: (x: number, y: number) => Matrix;
    rotate: (angle: number) => Matrix;
    scale: (x: number, y: number) => Matrix;
    flip: (x?: boolean, y?: boolean) => Matrix;
    skew: (angleX: number, angleY: number) => Matrix;
};
/**
 * 转换值矩阵相乘
 */
export declare const multiplyTransformMatrix: (a: Matrix, b: Matrix) => Matrix;
/**
 * 多转换值相乘
 * 其效果等同多种转换形式的叠加
 */
export declare const multiplyTransformMatrices: (matrices: Matrix[]) => Matrix;
