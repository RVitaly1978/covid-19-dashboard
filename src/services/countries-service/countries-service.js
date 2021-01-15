export default class CountriesService {
  _base = 'https://restcountries.eu/rest/v2';
  _all = '/all';
  _filtered = '?fields=alpha2Code;capital;population;flag;latlng';

  getResource = async (url) => {
    const res = await fetch(`${this._base}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base}${url}, received ${res.status}`);
    }

    return res.json();
  }

  getAllData = async () => {
    const res = await this.getResource(this._all);
    return res.map(this._transformFiltered);
  }

  getAllDataFiltered = async () => {
    const res = await this.getResource(`${this._all}${this._filtered}`);
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
