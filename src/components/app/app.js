import { connect } from 'react-redux';

import {
  withAppData,
  withServices,
  compose,
} from '../hok-helpers';

import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../../store';

import App from './app-view';

const mapMethodToProps = ({ covidService, covidHistoricalService, countriesService }) => {
  return {
    getCovidData: covidService.getSummary,
    getCovidHistoricalTotalData: covidHistoricalService.getHistoricalAll,
    getCountriesData: countriesService.getAllDataFiltered,
  };
};

const mapStateToProps = ({ isLoading, hasError }) => {
  return {
    isLoading,
    hasError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchDataRequest()),
  fetchSuccess: (data) => dispatch(fetchDataSuccess(data)),
  fetchFailure: (error) => dispatch(fetchDataFailure(error)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withServices(mapMethodToProps),
  withAppData,
)(App);
