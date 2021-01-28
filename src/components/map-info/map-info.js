import { connect } from 'react-redux';

import {
  setCountryCode,
} from '../../store';

import {
  getLatLngByCountryCode,
  addFilteredValue, 
  getMaxMinValue,
  getValueRanges,
  getMapData,
  getTableData,
} from '../../helpers';

import MapInfo from './map-info-view';

const mapStateToProps = (state) => {
  const { summaryCovidData, filterCase, isDataNew, isDataPer100, countryCode } = state;

  const withFilteredValue = addFilteredValue({ summaryCovidData, filterCase, isDataNew, isDataPer100 });
  const [maxValue, minValue] = getMaxMinValue([...withFilteredValue]);
  const ranges = getValueRanges(maxValue, minValue);

  return {
    latlng: getLatLngByCountryCode(state),
    ranges,
    covidData: getMapData(withFilteredValue, ranges, filterCase),
    filterCase,
    countryCode,
    tableData: getTableData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCountryCode: (code) => dispatch(setCountryCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapInfo);
