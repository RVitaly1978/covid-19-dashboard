import { connect } from 'react-redux';

import {
  // fetchHistoricalDataRequest,
  // fetchHistoricalDataSuccess,
  // fetchHistoricalDataFailure,
  setCountryCode,
} from '../../store';

import { getLatLngByCountryCode } from '../../helpers';

import MapInfo from './map-info-view';

const mapStateToProps = (state) => {
  return {
    latlng: getLatLngByCountryCode(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCountryCode: (code) => dispatch(setCountryCode(code)),
  // fetchRequest: () => dispatch(fetchHistoricalDataRequest()),
  // fetchSuccess: (data) => dispatch(fetchHistoricalDataSuccess(data)),
  // fetchFailure: (error) => dispatch(fetchHistoricalDataFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapInfo);
