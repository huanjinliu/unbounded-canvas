interface ValueTimes<ValueType> {
    times: number;
    value: ValueType;
}
/**
 * 计算出现次数最多的值
 */
declare const calcMostAppear: <ValueType>(values: ValueType[], isSame: (source: ValueType, target: ValueType) => boolean) => ValueTimes<ValueType>[];
export default calcMostAppear;
