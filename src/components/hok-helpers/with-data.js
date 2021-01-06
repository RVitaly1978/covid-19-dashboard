import React, { useState, useEffect } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return (props) => {
    const { getData } = props;

    const [state, setState] = useState({
      data: {},
      isLoading: true,
      hasError: false,
    });

    useEffect(() => {
      const update = () => {
        onLoading();
  
        getData()
          .then(onDataLoaded)
          .catch(onError);
      }

      update();
    }, [getData]);

    const onDataLoaded = (data) => {
      setState({
        data,
        isLoading: false,
        hasError: false,
      });
    }

    const onError = () => {
      setState({
        data: {},
        isLoading: false,
        hasError: true,
      });
    }

    const onLoading = () => {
      setState({
        data: {},
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

export default withData;
