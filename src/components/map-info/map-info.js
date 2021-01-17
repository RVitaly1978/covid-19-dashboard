import { connect } from 'react-redux';

import {
  // fetchHistoricalDataRequest,
  // fetchHistoricalDataSuccess,
  // fetchHistoricalDataFailure,
  setCountryCode,
} from '../../store';

import {
  getLatLngByCountryCode,
  addFilteredValue, 
  getMaxMinValue,
  getValueRanges,
  getMapData,
} from '../../helpers';

import MapInfo from './map-info-view';

const mapStateToProps = (state) => {
  const { summaryCovidData, filterCase, isDataNew, isDataPer100 } = state;

  const withFilteredValue = addFilteredValue({ summaryCovidData, filterCase, isDataNew, isDataPer100 });
  const [maxValue, minValue] = getMaxMinValue([...withFilteredValue]);
  const ranges = getValueRanges(maxValue, minValue);

  return {
    latlng: getLatLngByCountryCode(state),
    ranges,
    covidData: getMapData(withFilteredValue, ranges, filterCase),
    filterCase,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCountryCode: (code) => dispatch(setCountryCode(code)),
  // fetchRequest: () => dispatch(fetchHistoricalDataRequest()),
  // fetchSuccess: (data) => dispatch(fetchHistoricalDataSuccess(data)),
  // fetchFailure: (error) => dispatch(fetchHistoricalDataFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapInfo);
