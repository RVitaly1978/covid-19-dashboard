import { getValuePerBase } from './index';

const getFilteredValue = (itemObj, filterCase, isDataNew, isDataPer100) => {
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

export default getFilteredValue;
