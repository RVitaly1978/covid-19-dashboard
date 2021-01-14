import { connect } from 'react-redux';

import {
  withChartData,
  withServices,
  compose,
} from '../hok-helpers';

import {
  fetchHistoricalDataRequest,
  fetchHistoricalDataSuccess,
  fetchHistoricalDataFailure,
} from '../../store';

import {
  getSlagByCountryCode,
  getIsRequest,
  chooseDataToChart,
  getChartOptions,
} from '../../helpers';

import ChartInfo from './chart-info-view';

const mapMethodToProps = ({ covidService }) => {
  return {
    getData: covidService.getTotalCountryAllData,
  };
};

const mapStateToProps = (state) => {
  const slug = getSlagByCountryCode(state);
  const chosenData = chooseDataToChart(state, slug);

  return {
    slug,
    isRequest: getIsRequest(state, slug),
    isLoading: state.isChartLoading,
    hasError: state.hasChartError,
    chartOptions: getChartOptions(chosenData, state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchHistoricalDataRequest()),
  fetchSuccess: (data) => dispatch(fetchHistoricalDataSuccess(data)),
  fetchFailure: (error) => dispatch(fetchHistoricalDataFailure(error)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withServices(mapMethodToProps),
  withChartData,
)(ChartInfo);
