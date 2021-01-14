import { getFilteredValue } from './index';

const getListData = (
  { summaryCovidData, filterCase, searchValue, isDataNew, isDataPer100 },
  propName = 'country'
) => {
  const filtered = summaryCovidData.filter((obj) => {
    const value = obj[propName].toLowerCase();
    return value.includes(searchValue);
  });

  if (!filtered.length) {
    return [];
  }

  const structured = filtered.map((obj) => {
    const { data, population } = obj;
    return {
      ...obj,
      value: getFilteredValue(data, population, filterCase, isDataNew, isDataPer100),
    };
  });

  return [...structured.sort((a, b) => b.value - a.value)];
}

export default getListData;
