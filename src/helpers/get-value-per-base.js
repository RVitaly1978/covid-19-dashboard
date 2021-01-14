const getValuePerBase = (value, total, isTrue, base = 100000) => {
  if (total === 0 || !isTrue) {
    return value;
  }

  const result = value / total * base;
  return Math.ceil(result * 100) / 100;
}

export default getValuePerBase;
