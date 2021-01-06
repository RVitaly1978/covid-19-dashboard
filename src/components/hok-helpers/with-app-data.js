import React, { useEffect } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const getDataByPropertyNameAndKey = (arr, name, key) => {
  const filtered = arr.filter((item) => item[name] === key);

  if (filtered.length === 0) {
    return {};
  }

  return filtered[0];
}

const getTotalPopulation = (arr, name) => {
  return arr.reduce((sum, item) => {
    return sum + item[name];
  }, 0);
}

const structureData = (covidDataObj, countriesDataArr) => {
  const countriesCovidData = covidDataObj.countriesCovidData
    .map((country) => {
      const { flag, population } = getDataByPropertyNameAndKey(
        countriesDataArr,
        'name',
        country.Country
      );

      return { ...country, flag, population };
    });

  const globalCovidData = {
    ...covidDataObj.globalCovidData,
    country: 'global',
    flag: 'no data',
    population: getTotalPopulation(countriesDataArr, 'population'),
  };

  return {
    ...covidDataObj,
    globalCovidData,
    countriesCovidData,
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
