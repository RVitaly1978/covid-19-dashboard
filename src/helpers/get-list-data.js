import { getValuePerBase } from './index';

const getFiltered = (itemObj, filterCase, isDataNew, isDataPer100) => {
  const keys = Object.keys(itemObj);

  const filteredKeys = keys
    .filter((key) => key.toLowerCase().includes(filterCase))
    .filter((key) => {
      if (isDataNew) {
        return key.toLowerCase().includes('new');
      }
      return key.toLowerCase().includes('total');
    });

    const propName = filteredKeys[0];

  return getValuePerBase(itemObj[propName], itemObj.population, isDataPer100);
}

const getListData = (state) => {
  const {
    summaryCovidData, filterCase, searchValue, isDataNew, isDataPer100,
  } = state;

  const propName = 'country';
  const globalValue = 'global';

  const filtered = summaryCovidData
    .filter((itemObj) => {
      const value = itemObj[propName].toLowerCase();

      if (value === globalValue) {
        return false;
      }

      return value.includes(searchValue);
    });

  if (filtered.length === 0) {
    return [];
  }

  const structured = filtered.map((itemObj) => {
    return {
      countryCode: itemObj.countryCode,
      country: itemObj.country,
      flag: itemObj.flag,
      value: getFiltered(itemObj, filterCase, isDataNew, isDataPer100),
    };
  });

  return [...structured.sort((a, b) => b.value - a.value)];
}

export default getListData;
