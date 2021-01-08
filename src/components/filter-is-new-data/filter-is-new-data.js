import { connect } from 'react-redux';

import {
  setIsDataNew,
} from '../../store';

import ToggleSwitcher from '../toggle-switcher';

const mapStateToProps = ({ isDataNew }) => {
  return {
    isChecked: isDataNew,
    labelOn: 'New',
    labelOff: 'Summary',
    id: 'isDataNew',
  };
};

const mapDispatchToProps = (dispatch) => ({
  setChecked: (value) => dispatch(setIsDataNew(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitcher);
