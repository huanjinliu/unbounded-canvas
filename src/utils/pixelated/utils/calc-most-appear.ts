
interface  ValueTimes<ValueType> {
  times: number;
  value: ValueType;
};

/**
 * 计算出现次数最多的值
 */
const calcMostAppear = <ValueType>(
  values: ValueType[],
  isSame: (source: ValueType, target: ValueType) => boolean,
) => {
  const valueTimes = values.reduce<ValueTimes<ValueType>[]>((resule, value) => {
    const _result = resule;
    const index = _result.findIndex((item) => isSame(item.value, value));
    if (index > -1) _result[index].times++;
    else _result.push({ times: 1, value });
    return _result;
  }, []);

  valueTimes.sort((a, b) => b.times - a.times);

  return valueTimes;
}

export default calcMostAppear;