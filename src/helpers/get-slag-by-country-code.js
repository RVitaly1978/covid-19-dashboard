const GLOBAL_SLAG = 'global';

const getSlagByCountryCode = ({ summaryCovidData, countryCode }) => {
  if (summaryCovidData.length === 0) {
    return GLOBAL_SLAG;
  }

  const country = summaryCovidData.filter((country) => {
    return country.countryCode === countryCode;
  })[0];

  return country.slug;
};

export default getSlagByCountryCode;
