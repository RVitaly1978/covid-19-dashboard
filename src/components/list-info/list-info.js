import { connect } from 'react-redux';

import { setCountryCode } from '../../store';
import { getListData } from '../../helpers';

import ListInfo from './list-info-view';

const mapStateToProps = (state) => {
  return {
    data: getListData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCode: (value) => dispatch(setCountryCode(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListInfo);
