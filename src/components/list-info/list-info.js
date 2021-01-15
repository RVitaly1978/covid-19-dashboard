import { connect } from 'react-redux';

import { setCountryCode } from '../../store';
import { getListData, getColorByFilterCase } from '../../helpers';

import ListInfo from './list-info-view';

const mapStateToProps = (state) => {
  const { filterCase } = state;
  return {
    color: getColorByFilterCase(filterCase),
    data: getListData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCode: (value) => dispatch(setCountryCode(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListInfo);
