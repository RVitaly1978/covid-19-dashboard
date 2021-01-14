const getTotalPopulation = (arr, propName = 'population') => {
  return arr.reduce((sum, obj) => {
    const value = obj[propName];

    const res = ((value instanceof Number || typeof value === 'number') && !isNaN(value))
      ? value
      : 0

    return (sum + res);
  }, 0);
}

export default getTotalPopulation;
