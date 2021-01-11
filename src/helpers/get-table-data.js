import { getValuePerBase } from './index';

const getTableData = ({
  summaryCovidData, countryCode: value, isDataNew, isDataPer100,
}) => {

  const propName = 'countryCode';
  const filtered = summaryCovidData.filter((obj) => obj[propName] === value);

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

  if (isDataNew) {
    confirmed = data.newConfirmed;
    recovered = data.newRecovered;
    deaths = data.newDeaths;
  }

  return {
    countryCode,
    country,
    flag,
    population,
    confirmed: getValuePerBase(confirmed, population, isDataPer100),
    recovered: getValuePerBase(recovered, population, isDataPer100),
    deaths: getValuePerBase(deaths, population, isDataPer100),
  };
}

export default getTableData;
