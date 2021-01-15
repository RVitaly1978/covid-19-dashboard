import { filterByPropertyName } from './index';

const addPropertiesToSummaryData = (base, target) => {
  return target.map((obj) => {
    const propName = 'countryCode';

    const { flag, population, capital, latlng } = filterByPropertyName(
      base,
      propName,
      obj[propName]
    );

    return { ...obj, flag, population, capital, latlng };
  });
}

export default addPropertiesToSummaryData;
