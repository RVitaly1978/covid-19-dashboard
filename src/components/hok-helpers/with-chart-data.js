import React, { useState, useEffect } from 'react';

import { getFilteredValue, addPopulationProp } from '../../helpers';
import { GLOBAL_SLUG } from '../../constants';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withChartData = (View) => {
  return (props) => {
    const { getData, getDataDefault, slug, filterCase, isDataNew, isDataPer100, summary } = props;

    const [state, setState] = useState({
      data: [],
      isLoading: true,
      hasError: false,
    });

    useEffect(() => {
      if (slug === GLOBAL_SLUG) {
        onLoading();
        return undefined;
      }

      const getChartData = (slug === GLOBAL_SLUG)
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
        data: [],
        isLoading: false,
        hasError: true,
      });
    }

    const onLoading = () => {
      setState({
        data: [],
        isLoading: true,
        hasError: false,
      });
    }

    const { data, isLoading, hasError } = state;
    const withPopulation = addPopulationProp(summary, data);
    const filtered = withPopulation.map((item) => {
      return {
        date: item.date,
        value: getFilteredValue(item, filterCase, isDataNew, isDataPer100),
      };
    });

    if (isLoading) {
      return <Spinner />;
    }

    if (hasError) {
      return <ErrorIndicator />;
    }

    return <View {...props} data={filtered} />;
  };
}

export default withChartData;
