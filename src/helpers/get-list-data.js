import { getFilteredValue } from './index';
import { SORT_ORDER_UP } from '../constants';

const sortByPropNameAndOrder = (arr, propName, order) => {
  return [...arr.sort((a, b) => {
    if (a[propName] > b[propName]) {
      if (typeof a[propName] === 'number') {
        return (order === SORT_ORDER_UP) ? -1 : 1;
      }

      return (order === SORT_ORDER_UP) ? 1 : -1;
    }

    if (a[propName] < b[propName]) {
      if (typeof a[propName] === 'number') {
        return (order === SORT_ORDER_UP) ? 1 : -1;
      }

      return (order === SORT_ORDER_UP) ? -1 : 1;
    }

    return 0;
  })];
}

const getListData = (
  { summaryCovidData, filterCase, searchValue, isDataNew, isDataPer100, sortBy, sortOrder },
  propName = 'country'
) => {
  const filtered = summaryCovidData
    .filter(obj => obj[propName].toLowerCase().includes(searchValue));

  if (!filtered.length) {
    return [];
  }

  const structured = filtered.map(obj => {
    const { data, population } = obj;
    return {
      ...obj,
      value: getFilteredValue(data, population, filterCase, isDataNew, isDataPer100),
    };
  });

  return sortByPropNameAndOrder(structured, sortBy, sortOrder);
}

export default getListData;
