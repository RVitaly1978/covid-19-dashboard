const getCasePer100 = (value, is100, population) => {
  const CASE_100000 = 100000;

  if (is100) {
    return Math.ceil(value / population * CASE_100000 * 100) / 100;
  }

  return value;
}

const getCountryData = (arr, value, isNew, isPer100) => {
  const propName = 'countryCode';
  const filtered = arr.filter((itemObj) => itemObj[propName] === value);

  if (filtered.length === 0) {
    return {};
  }

  const data = filtered[0];
  let countryCode = data.countryCode;
  let country = data.country;
  let flag = data.flag;
  let population = data.population;
  let confirmed = data.totalConfirmed;
  let recovered = data.totalRecovered;
  let deaths = data.totalDeaths;

  if (isNew) {
    confirmed = data.newConfirmed;
    recovered = data.newRecovered;
    deaths = data.newDeaths;
  }

  return {
    countryCode,
    country,
    flag,
    population,
    confirmed: getCasePer100(confirmed, isPer100, population),
    recovered: getCasePer100(recovered, isPer100, population),
    deaths: getCasePer100(deaths, isPer100, population),
  };
}

export default getCountryData;
export { getCasePer100 };
