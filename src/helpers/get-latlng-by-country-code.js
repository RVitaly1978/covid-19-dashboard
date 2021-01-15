import { GLOBAL_COUNTRY_CODE } from '../constants';

const getLatLngByCountryCode = ({ summaryCovidData, countryCode }) => {
  if (summaryCovidData.length === 0 || countryCode === GLOBAL_COUNTRY_CODE) {
    return [];
  }

  const target = summaryCovidData
    .find((country) => country.countryCode === countryCode);

  return target.latlng;
};

export default getLatLngByCountryCode;
