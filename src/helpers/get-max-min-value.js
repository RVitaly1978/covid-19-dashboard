const getMaxMinValue = (withValue) => {
  if (!withValue.length) {
    return [0, 0];
  }

  const sorted = [...withValue].sort((a, b) => b.value - a.value);
  const max = sorted[0].value;
  const min = sorted[sorted.length - 1].value;

  return [max, min];
}

export default getMaxMinValue;
