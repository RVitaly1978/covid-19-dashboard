import {
  GLOBAL_SLUG,
  GLOBAL_COUNTRY_CODE,
} from '../constants';

const getSlagByCountryCode = ({ summaryCovidData, countryCode }) => {
  if (summaryCovidData.length === 0 || countryCode === GLOBAL_COUNTRY_CODE) {
    return GLOBAL_SLUG;
  }

  const target = summaryCovidData
    .find((country) => country.countryCode === countryCode);

  return target.slug;
};

export default getSlagByCountryCode;
