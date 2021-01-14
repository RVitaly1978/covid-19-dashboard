import { filterByPropertyName } from './index';

const addPropertiesToHistoricalData = (base, target, propName = 'country') => {
  const { flag, population, capital, countryCode } = filterByPropertyName(
    base,
    propName,
    target[propName]
  );

  return { ...target, flag, population, capital, countryCode };
}

export default addPropertiesToHistoricalData;
