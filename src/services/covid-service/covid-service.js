import {
  GLOBAL_COUNTRY_CODE,
  GLOBAL_COUNTRY,
  GLOBAL_SLUG,
} from '../../constants';

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
    const res = await this.getResource(`${this._dayOneTotalAllStatus}${country}`);
    return this._transformDayOneTotalAllStatus(res);
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
      countryCode: GLOBAL_COUNTRY_CODE,
      country: GLOBAL_COUNTRY,
      slug: GLOBAL_SLUG,
      totalConfirmed: data.TotalConfirmed,
      totalRecovered: data.TotalRecovered,
      totalDeaths: data.TotalDeaths,
      newConfirmed: data.NewConfirmed,
      newRecovered: data.NewRecovered,
      newDeaths: data.NewDeaths,
    };
  }

  _transformDayOneTotalAllStatus = (data) => {
    return data.map((item, idx) => {
      const dayData = {
        country: item.Country,
        totalConfirmed: item.Confirmed,
        totalRecovered: item.Recovered,
        totalDeaths: item.Deaths,
        date: item.Date,
      };

      if (idx === 0) {
        return {
          ...dayData,
          newConfirmed: item.Confirmed,
          newRecovered: item.Recovered,
          newDeaths: item.Deaths,
        };
      }

      return {
        ...dayData,
        newConfirmed: this._getNewCasesData(item.Confirmed, data[idx - 1].Confirmed),
        newRecovered: this._getNewCasesData(item.Recovered, data[idx - 1].Recovered),
        newDeaths: this._getNewCasesData(item.Deaths, data[idx - 1].Deaths),
      };
    });
  }

  _getNewCasesData = (newData, oldData) => {
    if (newData < oldData) {
      return 0;
    }

    return (newData - oldData);
  }
};
