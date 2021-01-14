import React, { useEffect } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withChartData = (View) => {
  return (props) => {
    const {
      getData,
      slug, isRequest,
      isLoading, hasError,
      fetchRequest, fetchSuccess, fetchFailure,
    } = props;

    useEffect(() => {
      let isCancelled = false;

      async function loadData() {
        fetchRequest();
        try {
          !isCancelled && fetchSuccess(await getData(slug));
        } catch (error) {
          !isCancelled && fetchFailure(error);
        }
      };

      isRequest && loadData();

      return () => isCancelled = true;
    }, [getData, slug, isRequest, fetchRequest, fetchSuccess, fetchFailure]);

    if (isLoading) {
      return <Spinner />;
    }

    if (hasError) {
      return <ErrorIndicator />;
    }

    return <View {...props} />;
  };
}

export default withChartData;
