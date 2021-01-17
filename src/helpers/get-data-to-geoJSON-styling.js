const getDataToGeoJSONStyling = (covidData, countryCode, targetPropName, defaultValue) => {
  if (!covidData.length || !countryCode || typeof countryCode !== 'string') {
    return defaultValue;
  }

  const country = covidData
    .find(obj => obj.countryCode.toLowerCase() === countryCode.toLowerCase());

  if (!country) {
    return defaultValue;
  }

  return country[targetPropName];
}

export default getDataToGeoJSONStyling;
