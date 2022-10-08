/**
 * 计算范围内连续性最高的值
 */
declare const calcMostRelated: <ValueType>(values: ValueType[][], isRelated: (source: ValueType, target: ValueType) => boolean) => {
    times: number;
    value?: ValueType | undefined;
};
export default calcMostRelated;
