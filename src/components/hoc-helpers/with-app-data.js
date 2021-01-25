import React, { useEffect } from 'react';

import { BounceLoading } from '../spinners';
import ErrorIndicator from '../error-indicator';

const withAppData = (View) => {
  return (props) => {
    const {
      isLoading, hasError,
      getCovidData, getCovidHistoricalTotalData, getCountriesData,
      fetchRequest, fetchSuccess, fetchFailure,
    } = props;

    useEffect(() => {
      let isCancelled = false;

      async function loadData() {
        fetchRequest();

        try {
          const [summaryData, countriesData, historicalTotalData] = await Promise.all([
            getCovidData(),
            getCountriesData(),
            getCovidHistoricalTotalData()
          ]);

          !isCancelled && fetchSuccess({ ...summaryData, countriesData, historicalTotalData });

        } catch (error) {
          !isCancelled && fetchFailure(error);
        }
      };

      loadData();

      return () => isCancelled = true;
    }, [
      getCovidData, getCountriesData, getCovidHistoricalTotalData,
      fetchRequest, fetchSuccess, fetchFailure,
    ]);

    if (isLoading) {
      return <BounceLoading />;
    }

    if (hasError) {
      return <ErrorIndicator />;
    }

    return <View {...props} />;
  };
}

export default withAppData;
