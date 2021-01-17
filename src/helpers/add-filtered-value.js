import { getFilteredValue } from './index';

const addFilteredValue = (
  { summaryCovidData, filterCase, isDataNew, isDataPer100 }
) => {
  if (!summaryCovidData.length) {
    return [...summaryCovidData];
  }

  return summaryCovidData.map((obj) => {
    const { data, population } = obj;
    return {
      ...obj,
      value: getFilteredValue(data, population, filterCase, isDataNew, isDataPer100),
    };
  });
}

export default addFilteredValue;
