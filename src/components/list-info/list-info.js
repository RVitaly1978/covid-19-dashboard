import { connect } from 'react-redux';

import { setCountryCode } from '../../store';

import ListInfo from './list-info-view';

const mapStateToProps = ({ listData }) => {
  return {
    data: listData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCode: (value) => dispatch(setCountryCode(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListInfo);
