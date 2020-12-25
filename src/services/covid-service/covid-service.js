export default class CovidService {
  _base = 'https://api.covid19api.com';
  _default = '/';
  _summary = '/summary';

  getResource = async (url) => {
    const res = await fetch(`${this._base}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base}${url}, received ${res.status}`);
    }

    return await res.json();
  }

  getDefault = async () => {
    const res = await this.getResource(this._default);
    return res;
  }

  getSummary = async () => {
    const res = await this.getResource(this._summary);
    return res;
  }
};
