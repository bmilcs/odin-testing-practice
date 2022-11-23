export default function analyzeArray(array) {
  const min = array.reduce((prev, cur) => (cur < prev ? cur : prev), Infinity);
  const max = array.reduce((prev, cur) => (cur > prev ? cur : prev), -Infinity);
  const average = array.reduce((prev, cur) => prev + cur, 0) / array.length;
  const length = array.length;

  return {
    min: min,
    max: max,
    average: average,
    length: length,
  };
}
