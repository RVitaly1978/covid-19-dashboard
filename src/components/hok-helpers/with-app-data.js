import React, { useEffect } from 'react';

import { filterByPropertyName, getTotalPopulation } from '../../helpers';
import { GLOBAL_CAPITAL } from '../../constants';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import globalFlag from '../../img/un.svg';

const structureData = (covidData, countriesData) => {
  const { lastUpdate, globalCovidData, countriesCovidData } = covidData;

  const countries = countriesCovidData.map((obj) => {
    const { flag, population, capital } = filterByPropertyName(
      countriesData,
      'countryCode',
      obj.countryCode
    );

    return { ...obj, flag, population, capital };
  });

  const global = {
    ...globalCovidData,
    flag: globalFlag,
    capital: GLOBAL_CAPITAL,
    population: getTotalPopulation(countries, 'population'),
  };

  return {
    lastUpdateCovidData: lastUpdate,
    summaryCovidData: [global, ...countries],
  };
}

const withAppData = (View) => {
  return (props) => {
    const {
      isLoading, hasError,
      getCovidData, getCountriesData,
      fetchRequest, fetchSuccess, fetchFailure,
    } = props;

    useEffect(() => {
      let isCancelled = false;

      async function loadData() {
        fetchRequest();

        try {
          const [covidData, countriesData] = await Promise.all([
            getCovidData(),
            getCountriesData(),
          ]);

          if (!isCancelled) {
            fetchSuccess({ ...structureData(covidData, countriesData) });
          }

        } catch (error) {
          if (!isCancelled) {
            fetchFailure(error);
          }
        }
      };
  
      loadData();

      return () => isCancelled = true;
    }, [getCovidData, getCountriesData, fetchRequest, fetchSuccess, fetchFailure]);

    if (isLoading) {
      return <Spinner />;
    }

    if (hasError) {
      return <ErrorIndicator />;
    }

    return <View {...props} />;
  };
}

export default withAppData;
