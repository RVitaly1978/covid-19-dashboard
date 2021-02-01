import React, { useEffect } from 'react';

import { getRandomInRange } from '../../helpers';

import { BounceLoading } from '../spinners';
import ErrorIndicator from '../error-indicator';

const withChartData = (View) => {
  return (props) => {
    const {
      getData,
      slug, isRequest,
      isLoading, hasError,
      fetchRequest, fetchSuccess, fetchFailure, fetchRequestCancel,
    } = props;

    useEffect(() => {
      let isCancelled = false;

      async function loadData() {
        fetchRequest();
        try {
          !isCancelled && fetchSuccess(await getData(slug));
        } catch (error) {
          !isCancelled && fetchFailure({
            id: `${error.message}-${getRandomInRange(1000)}-${new Date()}`,
            type: 'error',
            notification: error.message,
          });
        }
      };

      isRequest && loadData();

      return () => {
        fetchRequestCancel();
        isCancelled = true
      };
    }, [getData, slug, isRequest, fetchRequest, fetchSuccess, fetchFailure, fetchRequestCancel]);

    if (isLoading) {
      return <BounceLoading />;
    }

    if (hasError) {
      return <ErrorIndicator />;
    }

    return <View {...props} />;
  };
}

export default withChartData;
