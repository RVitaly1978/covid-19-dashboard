import { filterByPropertyName } from './index';

const filterCountries = (base, target, propName = 'countryCode') => {
  return target.filter((country) => {
    const filtered = filterByPropertyName(base, propName, country[propName]);
    return country[propName] === filtered[propName];
  });
}

export default filterCountries;
