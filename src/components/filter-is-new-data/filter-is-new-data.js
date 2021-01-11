import { connect } from 'react-redux';

import { setIsDataNew } from '../../store';
import {
  labels as L,
  identifiers as ID,
} from '../../constants';

import ToggleSwitcher from '../toggle-switcher';

const mapStateToProps = ({ isDataNew }) => {
  return {
    isChecked: isDataNew,
    labelOn: L.isDataNewLabelOn,
    labelOff: L.isDataNewLabelOff,
    id: ID.isDataNewSwitcherId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setChecked: (value) => dispatch(setIsDataNew(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitcher);
