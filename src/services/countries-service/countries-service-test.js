import data from './test-data';

export default class CountriesServiceTest {
  getAllDataFiltered = async () => {
    const res = await new Promise(resolve => resolve(data));
    return res.map(this._transformFiltered);
  }

  _transformFiltered = (data) => {
    return {
      countryCode: data.alpha2Code.toUpperCase(),
      capital: data.capital,
      flag: data.flag,
      population: data.population,
      latlng: data.latlng,
    };
  }
};
