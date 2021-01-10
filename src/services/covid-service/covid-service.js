export default class CovidService {
  _base = 'https://api.covid19api.com';
  _summary = '/summary';
  _dayOneTotalAllStatus = '/total/dayone/country/';

  getResource = async (url) => {
    const res = await fetch(`${this._base}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._base}${url}, received ${res.status}`);
    }

    return await res.json();
  }

  getSummary = async () => {
    const res = await this.getResource(this._summary);
    return this._transformSummary(res);
  }

  getDayOneTotalAllStatus = async (country) => {
    const url = `${this._dayOneTotalAllStatus}${country}`;
    const res = await this.getResource(url);
    return res.map(this._transformDayOneTotalAllStatus);
  }

  _transformSummary = (data) => {
    return {
      lastUpdate: data.Date,
      globalCovidData: this._transformGlobalData(data.Global),
      countriesCovidData: data.Countries.map(this._transformCountriesData),
    };
  }

  _transformCountriesData = (data) => {
    return {
      countryCode: data.CountryCode.toUpperCase(),
      country: data.Country,
      slug: data.Slug,
      totalConfirmed: data.TotalConfirmed,
      totalRecovered: data.TotalRecovered,
      totalDeaths: data.TotalDeaths,
      newConfirmed: data.NewConfirmed,
      newRecovered: data.NewRecovered,
      newDeaths: data.NewDeaths,
    };
  }

  _transformGlobalData = (data) => {
    return {
      countryCode: 'UN',
      country: 'Global',
      slug: 'global',
      totalConfirmed: data.TotalConfirmed,
      totalRecovered: data.TotalRecovered,
      totalDeaths: data.TotalDeaths,
      newConfirmed: data.NewConfirmed,
      newRecovered: data.NewRecovered,
      newDeaths: data.NewDeaths,
    };
  }

  _transformDayOneTotalAllStatus = (data) => {
    return {
      country: data.Country,
      confirmed: data.Confirmed,
      recovered: data.Recovered,
      deaths: data.Deaths,
      date: data.Date,
    };
  }
};
