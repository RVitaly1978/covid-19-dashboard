import { connect } from 'react-redux';

import {
  setIsDataPer100,
} from '../../store';

import ToggleSwitcher from '../toggle-switcher';

const mapStateToProps = ({ isDataPer100 }) => {
  return {
    isChecked: isDataPer100,
    labelOn: 'Per100',
    labelOff: 'Total',
    id: 'isDataPer100',
  };
};

const mapDispatchToProps = (dispatch) => ({
  setChecked: (value) => dispatch(setIsDataPer100(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitcher);
