import React, { useEffect } from 'react';

import { DEFAULT_UPDATE_DELAY } from '../../constants';
import { getRandomInRange } from '../../helpers';

const withAppDataUpdate = (View) => {
  return (props) => {
    const {
      covidLastUpdate, historicalLastUpdate,
      getCovidData, getCovidHistoricalTotalData,
      fetchUpdateRequest, fetchUpdateSuccess, fetchUpdateFailure, fetchUpdateRequestCancel,
    } = props;

    useEffect(() => {
      let isCancelled = false;

      async function loadData() {
        await new Promise(resolve => setTimeout(resolve, DEFAULT_UPDATE_DELAY));

        fetchUpdateRequest();

        try {
          const [summaryData, historicalTotalData] = await Promise.all([
            getCovidData(),
            getCovidHistoricalTotalData()
          ]);

          const lastHistoricalDate = historicalTotalData.data[historicalTotalData.data.length - 1].date;
          const lastCovidDate = summaryData.globalCovidData.data.date;

          if ((lastHistoricalDate !== historicalLastUpdate) || (covidLastUpdate !== lastCovidDate)) {
            !isCancelled && fetchUpdateSuccess({ ...summaryData, historicalTotalData });
          } else {
            fetchUpdateRequestCancel();
          }

        } catch (error) {
          !isCancelled && fetchUpdateFailure({
            id: `${error.message}-${getRandomInRange(1000)}-${new Date()}`,
            type: 'error',
            notification: error.message,
          });
        }

        await loadData();
      };

      loadData();

      return () => isCancelled = true;
    }, [ covidLastUpdate, historicalLastUpdate,
      getCovidData, getCovidHistoricalTotalData,
      fetchUpdateRequest, fetchUpdateSuccess, fetchUpdateFailure, fetchUpdateRequestCancel,
    ]);

    return <View {...props} />;
  };
}

export default withAppDataUpdate;
