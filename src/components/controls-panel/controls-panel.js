import React from 'react';

import { identifiers } from '../../constants';

import CaseSwitcher from '../case-switcher';
import FilterIsNewData from '../filter-is-new-data';
import FilterIsDataPer100 from '../filter-is-data-per100';

import st from './controls-panel.module.scss';

const ControlsPanel = () => {
  return (
    <div className={st.view_container}>

      <div className={st.switcher_item}>
        <CaseSwitcher name={identifiers.caseSwitcherRadioName} />
      </div>

      <div className={st.switcher_item}>
        <FilterIsNewData />
      </div>

      <div className={st.switcher_item}>
        <FilterIsDataPer100 />
      </div>

    </div>
  );
};

export default ControlsPanel;
