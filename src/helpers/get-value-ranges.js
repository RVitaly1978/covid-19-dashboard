const getRoundedValue = (value) => {
  const valueStr = String(value);
  const charts = valueStr.length;

  switch (charts) {
    case 1:
      return value;
    case 2:
      if (value <= 20) {
        return value;
      } else {
        const integer = Math.trunc(value / 10);
        const fractional = value % 10;
        return (fractional <= 5)
          ? integer * 10 + 5
          : integer * 10 + 10;
      }
    default:
      return (Number(valueStr) % (10 ** (charts - 3)) === 0)
        ? (Number(valueStr.slice(0, 3))) * (10 ** (charts - 3))
        : (Number(valueStr.slice(0, 3)) + 1) * (10 ** (charts - 3));
  }
}

const getNumbersAfterDecimalPoint = (value) => {
  const fractional = value - Math.trunc(value);
  const dividedFractional = String(fractional).split('.');
  const charts = dividedFractional[dividedFractional.length - 1].length;
  return (10 ** charts);
}

const getRangeBoundary = (value) => {
  const isInteger = (value % 1) === 0;
  let integerRatio = 1;
  if (!isInteger && value < 10) {
    integerRatio = getNumbersAfterDecimalPoint(value);
  }

  return getRoundedValue(Math.ceil(value * integerRatio)) / integerRatio;
}

const getValueRanges = (max, min = 0, rangeNumbers = 5) => {
  let range = max - min;
  const ratio = 0.75;

  const steps = [];
  for (let i = rangeNumbers; i > 0; i -= 1) {
    if (i === 1) {
      steps.unshift(range);
    }

    const step = range * ratio;
    steps.unshift(step);
    range -= step;
  }

  const res = [min];
  for (let i = 1; i < rangeNumbers; i += 1) {
    const current = res[i - 1] + steps[i];
    res.push(getRangeBoundary(current));
  }
  res.push(getRangeBoundary(max));

  return res;
}

export default getValueRanges;
