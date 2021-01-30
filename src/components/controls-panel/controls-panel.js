import React from 'react';
import { connect } from 'react-redux';

import { setFilterCase, setIsDataPer100, setIsDataNew } from '../../store';
import {
  labels as L,
  identifiers as ID,
  tooltips as tt,
} from '../../constants';

import CaseSwitcher from '../case-switcher';
import ToggleSwitcher from '../toggle-switcher';

import st from './controls-panel.module.scss';

const ControlsPanel = ({
  filterCase, isDataPer100, isDataNew,
  setFilterCase, setIsDataPer100, setIsDataNew,
}) => {
  return (
    <div className={st.controls_container}>

      <CaseSwitcher
        styleClass={st.controls_item}
        value={filterCase}
        setValue={setFilterCase}
        name={ID.caseSwitcherRadioName}
      />

      <ToggleSwitcher
        styleClass={`${st.controls_item} ${st.controls_toggle}`}
        id={ID.isDataNewSwitcherId}
        labelOn={L.isDataNewLabelOn}
        labelOff={L.isDataNewLabelOff}
        isChecked={isDataNew}
        setChecked={setIsDataNew}
        dataTitle={tt.toggleSummary}
        dataPlacement='bottom'
      />

      <ToggleSwitcher
        styleClass={`${st.controls_item} ${st.controls_toggle}`}
        id={ID.isDataPer100SwitcherId}
        labelOn={L.isDataPer100LabelOn}
        labelOff={L.isDataPer100LabelOff}
        isChecked={isDataPer100}
        setChecked={setIsDataPer100}
        dataTitle={tt.toggleTotal}
        dataPlacement='bottom'
      />

    </div>
  );
};

const mapStateToProps = ({ filterCase, isDataNew, isDataPer100 }) => {
  return {
    filterCase, isDataNew, isDataPer100,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setFilterCase: (value) => dispatch(setFilterCase(value)),
  setIsDataPer100: (value) => dispatch(setIsDataPer100(value)),
  setIsDataNew: (value) => dispatch(setIsDataNew(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlsPanel);
