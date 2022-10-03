
export type Matrix = [
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
];

/** 单位矩阵 */
export const UNIT_MATRIX: Matrix = [1, 0, 0, 1, 0, 0];

/**
 * 行为变换矩阵
 */
export const BEHAVE_MATRICES = (() => {
  /**
   * 转化为matrix所用的角度值
   */
  const transformMatrixAngle = (angle = 0) => (angle * Math.PI) / 180;

  return {
    'move': (x: number, y: number) => [1, 0, 0, 1, x, y] as Matrix,
    'rotate': (angle: number) => {
      const _angle = transformMatrixAngle(angle);
      return [
        Math.cos(_angle),
        Math.sin(_angle),
        -Math.sin(_angle),
        Math.cos(_angle),
        0, 0,
      ] as Matrix;
    },
    'scale': (x: number, y: number) => [x, 0, 0, y, 0, 0] as Matrix,
    'flip': (x: boolean = false, y: boolean = false) => {
      // [1 0] [-1 0]
      // [0 1] [0 -1]
      return [
        x ? -1 : 1,
        0,
        0,
        y ? -1 : 1,
        0,
        0,
      ] as Matrix;
    },
    'skew': (angleX: number, angleY: number) => {
      const _angleX = transformMatrixAngle(angleX);
      const _angleY = transformMatrixAngle(angleY);
      return [1, Math.tan(_angleY), Math.tan(_angleX), 1, 0, 0] as Matrix;
    }
  }
})();

/**
 * 转换值矩阵相乘
 */
export const multiplyTransformMatrix = (a: Matrix, b: Matrix) => {
  // [a:0 c:2 e:4]
  // [b:1 d:3 f:5]
  return [
    a[0] * b[0] + a[2] * b[1],
    a[1] * b[0] + a[3] * b[1],
    a[0] * b[2] + a[2] * b[3],
    a[1] * b[2] + a[3] * b[3],
    a[0] * b[4] + a[2] * b[5] + a[4],
    a[1] * b[4] + a[3] * b[5] + a[5],
  ] as Matrix;
};

/**
 * 多转换值相乘
 * 其效果等同多种转换形式的叠加
 */
export const multiplyTransformMatrices = (matrices: Matrix[]) => {
  return matrices.reduce((result, item) => {
    return multiplyTransformMatrix(result, item)
  }, UNIT_MATRIX);
};