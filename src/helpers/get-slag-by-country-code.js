import { GLOBAL_SLUG } from '../constants';

const getSlagByCountryCode = ({ summaryCovidData, countryCode }) => {
  if (summaryCovidData.length === 0) {
    return GLOBAL_SLUG;
  }

  const filtered = summaryCovidData
    .filter((country) => country.countryCode === countryCode);

  return filtered[0].slug;
};

export default getSlagByCountryCode;
