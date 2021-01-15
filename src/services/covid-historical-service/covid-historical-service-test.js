import data from './test-data';
import { GLOBAL_COUNTRY, GLOBAL_SLUG } from '../../constants';

export default class CovidHistoricalServiceTest {
  getHistoricalAll = async () => {
    const res = await new Promise(resolve => resolve(data));
    return this._transformHistoricalAll(res);
  }

  _transformHistoricalAll = (data) => {
    return {
      country: GLOBAL_COUNTRY,
      slag: GLOBAL_SLUG,
      data: this._transformHistoricalAllData(data),
    };
  }

  _transformHistoricalAllData = (data) => {
    const sorted = [...data.sort((a, b) => {
      return (new Date(a.last_update) - new Date(b.last_update));
    })];

    return sorted.map((item, idx) => {
      const dayData = {
        totalConfirmed: item.total_cases,
        totalRecovered: item.total_recovered,
        totalDeaths: item.total_deaths,
        date: item.last_update,
      };

      if (idx === 0) {
        return {
          ...dayData,
          newConfirmed: item.total_cases,
          newRecovered: item.total_recovered,
          newDeaths: item.total_deaths,
        };
      }

      return {
        ...dayData,
        newConfirmed: this._getNewCasesData(item.total_cases, sorted[idx - 1].total_cases),
        newRecovered: this._getNewCasesData(item.total_recovered, sorted[idx - 1].total_recovered),
        newDeaths: this._getNewCasesData(item.total_deaths, sorted[idx - 1].total_deaths),
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
