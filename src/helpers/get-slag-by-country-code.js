import {
  GLOBAL_SLUG,
  GLOBAL_COUNTRY_CODE,
} from '../constants';

const getSlagByCountryCode = ({ summaryCovidData, countryCode }) => {
  if (summaryCovidData.length === 0 || countryCode === GLOBAL_COUNTRY_CODE) {
    return GLOBAL_SLUG;
  }

  const filtered = summaryCovidData
    .filter((country) => country.countryCode === countryCode)[0];

  return filtered.slug;
};

export default getSlagByCountryCode;
