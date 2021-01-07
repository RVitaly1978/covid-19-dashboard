import React, { useEffect } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import unFlag from '../../img/un.svg';

const getCountryDataByPropertyNameAndKey = (arr, propName, value) => {
  const filtered = arr.filter((itemObj) => {
    return itemObj[propName].toUpperCase() === value.toUpperCase();
  });

  if (filtered.length === 0) {
    return {};
  }

  return filtered[0];
}

const getTotalPopulation = (arr, propName) => {
  return arr.reduce((sum, itemObj) => {
    const value = itemObj[propName];
    const res = ((value instanceof Number || typeof value === 'number') && !isNaN(value))
      ? value
      : 0

    return sum + res;
  }, 0);
}

const structureData = (covidData, countriesData) => {
  const { lastUpdate, globalCovidData, countriesCovidData } = covidData;

  const countries = countriesCovidData.map((countryObj) => {
    const { flag, population, capital } = getCountryDataByPropertyNameAndKey(
      countriesData,
      'countryCode',
      countryObj.countryCode
    );

    return { ...countryObj, flag, population, capital };
  });

  const global = {
    ...globalCovidData,
    flag: unFlag,
    population: getTotalPopulation(countries, 'population'),
  };

  return {
    lastUpdateCovidData: lastUpdate,
    countriesCovidData: [global, ...countries],
  };
}

const withAppData = (View) => {
  return (props) => {
    const {
      isLoading, hasError,
      getCovidData, getCountriesData,
      fetchDataRequest, fetchDataSuccess, fetchDataFailure,
    } = props;

    useEffect(() => {
      let isCancelled = false;

      async function loadData() {
        fetchDataRequest();

        try {
          const [covidData, countriesData] = await Promise.all([
            getCovidData(),
            getCountriesData(),
          ]);

          const data = structureData(covidData, countriesData);
          console.log(data);

          if (!isCancelled) {
            fetchDataSuccess({ ...data });
          }

        } catch (error) {
          if (!isCancelled) {
            fetchDataFailure(error);
          }
        }
      };
  
      loadData();

      return () => isCancelled = true;
    }, [getCovidData, getCountriesData, fetchDataRequest, fetchDataSuccess, fetchDataFailure]);

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
