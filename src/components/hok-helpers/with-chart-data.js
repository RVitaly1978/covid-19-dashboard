import React, { useState, useEffect } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withChartData = (View) => {
  return (props) => {
    const { getData, getDataDefault, slug } = props;

    const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: false,
    });

    useEffect(() => {
      if (slug === 'global') {
        onLoading();
        return undefined;
      }

      const getChartData = (slug === 'global')
        ? getDataDefault
        : () => getData(slug)

      const update = () => {
        onLoading();

        getChartData()
          .then(onDataLoaded)
          .catch(onError);
      }

      update();
    }, [getData, getDataDefault, slug]);

    const onDataLoaded = (data) => {
      setState({
        data,
        isLoading: false,
        hasError: false,
      });
    }

    const onError = () => {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
      });
    }

    const onLoading = () => {
      setState({
        data: null,
        isLoading: true,
        hasError: false,
      });
    }

    const { data, isLoading, hasError } = state;

    if (isLoading) {
      return <Spinner />;
    }

    if (hasError) {
      return <ErrorIndicator />;
    }

    return <View {...props} data={data} />;
  };
}

export default withChartData;
