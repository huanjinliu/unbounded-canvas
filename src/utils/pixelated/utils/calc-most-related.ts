/**
 * 计算范围内连续性最高的值
 */
const calcMostRelated = <ValueType>(
  values: ValueType[][],
  isRelated: (source: ValueType, target: ValueType) => boolean,
) => {
  let result: { times: number, value?: ValueType } = {
    times: 0,
    value: undefined,
  };
  const flags: boolean[][] = [];
  const findRelatedAround = (x: number, y: number) => {
    if (flags[y] && flags[y][x]) return 0;
    // 标记自身
    if (flags[y] === undefined) flags[y] = [];
    flags[y][x] = true;

    // 色值
    const value = values[y][x];
    // 关联次数
    let times = 1;
    // 判断四周相似值
    ([
      [y - 1, x], // 上
      [y + 1, x], // 下
      [y, x - 1], // 左
      [y, x + 1], // 右
    ]).forEach(([targetY, targetX]) => {
      if (!values[targetY] || !values[targetY][targetX]) return;
      if (isRelated(value, values[targetY][targetX])) {
        times += findRelatedAround(targetX, targetY);
      }
    });
    return times;
  };
  values.forEach((rowArrays, row) => {
    rowArrays.forEach((value, col) => {
      const times = findRelatedAround(col, row);
      if (times > result.times) result = { times, value };
    });
  });

  return result;
};

export default calcMostRelated;