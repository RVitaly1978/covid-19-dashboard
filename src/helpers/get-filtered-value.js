import { getValuePerBase } from './index';

const NEW_DATA = 'new';
const TOTAL_DATA = 'total';

const getFilteredValue = (obj, population, filterCase, isDataNew, isDataPer100) => {
  const keys = Object.keys(obj);

  const filteredKeys = keys
    .filter((key) => key.toLowerCase().includes(filterCase))
    .filter((key) => {
      if (isDataNew) {
        return key.toLowerCase().includes(NEW_DATA);
      }
      return key.toLowerCase().includes(TOTAL_DATA);
    });

    const propName = filteredKeys[0];

  return getValuePerBase(obj[propName], population, isDataPer100);
}

export default getFilteredValue;
