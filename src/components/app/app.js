import { connect } from 'react-redux';

import {
  withAppData,
  withAppServices,
  compose,
} from '../hok-helpers';

import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../../store';

import App from './app-view';

const mapMethodToProps = (covidService, countriesService) => {
  return {
    getCovidData: covidService.getSummary,
    getCountriesData: countriesService.getAllDataFiltered,
  };
};

const mapStateToProps = ({ countriesCovidData, isLoading, hasError }) => {
  return {
    countriesCovidData,
    isLoading,
    hasError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDataRequest: () => dispatch(fetchDataRequest()),
  fetchDataSuccess: (data) => dispatch(fetchDataSuccess(data)),
  fetchDataFailure: (error) => dispatch(fetchDataFailure(error)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAppServices(mapMethodToProps),
  withAppData,
)(App);
