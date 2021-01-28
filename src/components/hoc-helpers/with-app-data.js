import React, { useEffect } from 'react';

import { BounceLoading } from '../spinners';
import ErrorIndicator from '../error-indicator';

import st from '../app-main/app-main.module.scss';

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
      return (
        <div className={`${st.app_main} ${st.app_main__fullscreen}`}>
          <BounceLoading />
        </div>
      );
    }

    if (hasError) {
      return (
        <div className={`${st.app_main} ${st.app_main__fullscreen}`}>
          <ErrorIndicator />
        </div>
      );
    }

    return <View {...props} />;
  };
}

export default withAppData;
