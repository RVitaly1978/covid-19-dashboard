import { connect } from 'react-redux';

import {
  withChartData,
  withServices,
  compose,
} from '../hoc-helpers';

import {
  fetchHistoricalDataRequest,
  fetchHistoricalDataRequestCancel,
  fetchHistoricalDataSuccess,
  fetchHistoricalDataFailure,
} from '../../store';

import {
  getSlagByCountryCode,
  getIsRequest,
} from '../../helpers';

import ChartInfo from './chart-info-view';

const mapMethodToProps = ({ covidService }) => {
  return {
    getData: covidService.getTotalCountryAllData,
  };
};

const mapStateToProps = (state) => {
  const {
    historicalCovidData, historicalGlobalCovidData,
    filterCase, isDataNew, isDataPer100,
  } = state;

  const slug = getSlagByCountryCode(state);

  return {
    slug,
    isRequest: getIsRequest(state, slug),
    isLoading: state.isChartLoading,
    hasError: state.hasChartError,

    historicalCovidData,
    historicalGlobalCovidData,
    filterCase,
    isDataNew,
    isDataPer100,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchHistoricalDataRequest()),
  fetchRequestCancel: () => dispatch(fetchHistoricalDataRequestCancel()),
  fetchSuccess: (data) => dispatch(fetchHistoricalDataSuccess(data)),
  fetchFailure: (error) => dispatch(fetchHistoricalDataFailure(error)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withServices(mapMethodToProps),
  withChartData,
)(ChartInfo);
