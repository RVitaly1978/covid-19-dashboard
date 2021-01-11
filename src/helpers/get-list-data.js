import { getFilteredValue } from './index';
import { GLOBAL_COUNTRY } from '../constants';

const getListData = (state) => {
  const {
    summaryCovidData, filterCase, searchValue, isDataNew, isDataPer100,
  } = state;

  const propName = 'country';

  const filtered = summaryCovidData.filter((obj) => {
    const value = obj[propName].toLowerCase();

    if (value === GLOBAL_COUNTRY.toLowerCase()) {
      return false;
    }

    return value.includes(searchValue);
  });

  if (filtered.length === 0) {
    return [];
  }

  const structured = filtered.map((obj) => {
    return {
      countryCode: obj.countryCode,
      country: obj.country,
      flag: obj.flag,
      value: getFilteredValue(obj, filterCase, isDataNew, isDataPer100),
    };
  });

  return [...structured.sort((a, b) => b.value - a.value)];
}

export default getListData;
