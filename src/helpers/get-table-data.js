import { GLOBAL_COUNTRY_CODE } from '../constants';
import { getValuePerBase } from './index';

const getTableData = ({
  summaryCovidData, summaryGlobalCovidData, countryCode: value, isDataNew, isDataPer100,
}) => {
  let covidData = summaryGlobalCovidData;

  if (value !== GLOBAL_COUNTRY_CODE) {
    const propName = 'countryCode';
    covidData = summaryCovidData.filter((obj) => obj[propName] === value)[0];
  }

  if (!covidData || !Object.keys(covidData).length) {
    return {};
  }

  const { data } = covidData;
  let confirmed = data.totalConfirmed;
  let recovered = data.totalRecovered;
  let deaths = data.totalDeaths;

  if (isDataNew) {
    confirmed = data.newConfirmed;
    recovered = data.newRecovered;
    deaths = data.newDeaths;
  }

  return {
    countryCode: covidData.countryCode,
    country: covidData.country,
    flag: covidData.flag,
    population: covidData.population,
    confirmed: getValuePerBase(confirmed, covidData.population, isDataPer100),
    recovered: getValuePerBase(recovered, covidData.population, isDataPer100),
    deaths: getValuePerBase(deaths, covidData.population, isDataPer100),
  };
}

export default getTableData;
