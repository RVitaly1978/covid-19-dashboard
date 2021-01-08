const getValuePerBase = (value, total, isTrue, base = 100000) => {
  if (isTrue) {
    const result = value / total * base;
    return Math.ceil(result * 100) / 100;
  }

  return value;
}

export default getValuePerBase;
