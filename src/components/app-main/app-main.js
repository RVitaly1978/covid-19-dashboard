import { connect } from 'react-redux';

import {
  withAppData,
  withAppDataUpdate,
  withServices,
  compose,
} from '../hoc-helpers';

import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataUpdateRequest,
  fetchDataUpdateRequestEnd,
  fetchDataUpdateSuccess,
  fetchDataUpdateFailure,
} from '../../store';

import AppMainView from './app-main-view';

const mapMethodToProps = ({ covidService, covidHistoricalService, countriesService }) => {
  return {
    getCovidData: covidService.getSummary,
    getCovidHistoricalTotalData: covidHistoricalService.getHistoricalAll,
    getCountriesData: countriesService.getAllDataFiltered,
  };
};

const mapStateToProps = ({
  summaryGlobalCovidData, historicalGlobalCovidData, isLoading, hasError, isFullScreen,
}) => {
  return {
    isLoading,
    hasError,
    isFullScreen,
    covidLastUpdate: summaryGlobalCovidData.data
      ? summaryGlobalCovidData.data.date
      : undefined,
    historicalLastUpdate: historicalGlobalCovidData.data
      ? historicalGlobalCovidData.data[historicalGlobalCovidData.data.length - 1].date
      : undefined,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchDataRequest()),
  fetchSuccess: (data) => dispatch(fetchDataSuccess(data)),
  fetchFailure: (error) => dispatch(fetchDataFailure(error)),
  fetchUpdateRequest: () => dispatch(fetchDataUpdateRequest()),
  fetchUpdateRequestEnd: () => dispatch(fetchDataUpdateRequestEnd()),
  fetchUpdateSuccess: (data) => dispatch(fetchDataUpdateSuccess(data)),
  fetchUpdateFailure: (error) => dispatch(fetchDataUpdateFailure(error)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withServices(mapMethodToProps),
  withAppData,
  withAppDataUpdate,
)(AppMainView);
