import { connect } from 'react-redux';

import { setIsDataPer100 } from '../../store';
import {
  labels as L,
  identifiers as ID,
} from '../../constants';

import ToggleSwitcher from '../toggle-switcher';

const mapStateToProps = ({ isDataPer100 }) => {
  return {
    isChecked: isDataPer100,
    labelOn: L.isDataPer100LabelOn,
    labelOff: L.isDataPer100LabelOff,
    id: ID.isDataPer100SwitcherId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setChecked: (value) => dispatch(setIsDataPer100(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitcher);
