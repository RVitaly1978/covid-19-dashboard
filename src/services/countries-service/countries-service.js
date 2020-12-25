export default class CountriesService {
  _base = 'https://restcountries.eu/rest/v2';
  _all = '/all';
  _filtered = '?fields=name;population;flag';

  getResource = async (url) => {
    const res = await fetch(`${this._base}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base}${url}, received ${res.status}`);
    }

    return res.json();
  }

  getAllData = async () => {
    const res = await this.getResource(this._all);
    return res;
  }

  getAllDataFiltered = async () => {
    const res = await this.getResource(`${this._all}${this._filtered}`);
    return res;
  }
};
