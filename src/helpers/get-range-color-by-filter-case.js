import { cases } from '../constants';

const getRangeIndex = (value, ranges = []) => {
  const filtered = ranges.filter((range) => range <= value);

  if (!filtered.length) {
    return 0;
  }

  return (filtered.length - 1);
}

const getRangeColorByFilterCase = (filterCase, value, ranges = []) => {
  const index = getRangeIndex(value, ranges);

  return cases
    .find((item) => item.case === filterCase)
    .colorRanges[index];
}

export default getRangeColorByFilterCase;
