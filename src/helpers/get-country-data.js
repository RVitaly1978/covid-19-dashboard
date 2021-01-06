const getCasePer100 = (total, is100, population) => {
  const CASE = 100000;

  if (is100) {
    return Math.ceil(total / population * CASE * 100) / 100;
  }

  return total;
}

const getCountryData = (arr, name, isNew, isPer100) => {
  const filtered = arr.filter((itemObj) => itemObj.Country === name);
  const NO_DATA = 'no data';

  if (filtered.length === 0) {
    return {
      country: NO_DATA,
      flag: NO_DATA,
      population: NO_DATA,
      confirmed: NO_DATA,
      recovered: NO_DATA,
      deaths: NO_DATA,
    };
  }

  const data = filtered[0];
  let country = data.Country;
  let flag = data.Flag;
  let population = data.Population;
  let confirmed = data.TotalConfirmed;
  let recovered = data.TotalRecovered;
  let deaths = data.TotalDeaths;

  if (isNew) {
    confirmed = data.NewConfirmed;
    recovered = data.NewRecovered;
    deaths = data.NewDeaths;
  }

  return {
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
