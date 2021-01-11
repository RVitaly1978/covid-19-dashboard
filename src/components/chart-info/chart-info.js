import { connect } from 'react-redux';

import {
  withChartData,
  withCovidService,
  compose,
} from '../hok-helpers';

import { getSlagByCountryCode } from '../../helpers';

import ChartInfo from './chart-info-view';

const mapMethodToProps = (covidService) => {
  return {
    getData: covidService.getDayOneTotalAllStatus,
    getDataDefault: covidService.getDayOneTotalAllStatus,
  };
};

const mapStateToProps = (state) => {
  return {
    slug: getSlagByCountryCode(state),
    filterCase: state.filterCase,
    isDataNew: state.isDataNew,
    isDataPer100: state.isDataPer100,
    summary: state.summaryCovidData,
  };
};

export default compose(
  connect(mapStateToProps),
  withCovidService(mapMethodToProps),
  withChartData,
)(ChartInfo);
