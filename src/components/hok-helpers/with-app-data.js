import React, { useEffect } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const getCountryDataByPropertyNameAndKey = (arr, propName, value) => {
  const filtered = arr.filter((itemObj) => itemObj[propName] === value);

  if (filtered.length === 0) {
    return {};
  }

  return filtered[0];
}

const getTotalPopulation = (arr, propName) => {
  return arr.reduce((sum, itemObj) => {
    return sum + itemObj[propName];
  }, 0);
}

const structureData = (covidDataObj, countriesDataArr) => {
  const { lastUpdate, globalData, countriesData } = covidDataObj;

  const countries = countriesData.map((countryObj) => {
    const { flag: Flag, population: Population } = getCountryDataByPropertyNameAndKey(
      countriesDataArr,
      'name',
      countryObj.Country
    );

    return { ...countryObj, Flag, Population };
  });

  const global = {
    ...globalData,
    Country: 'Global',
    Flag: null,
    Population: getTotalPopulation(countries, 'Population'),
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
