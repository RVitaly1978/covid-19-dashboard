import React from 'react';

import FilterChange from '../filter-change';
import FilterIsNewData from '../filter-is-new-data';
import FilterIsDataPer100 from '../filter-is-data-per100';

import st from './controls-panel.module.scss';

const ControlsPanel = () => {
  return (
    <div className={st.view_container}>
      <div className={st.view_content}>

        <FilterChange />
        <FilterIsNewData />
        <FilterIsDataPer100 />

      </div>
    </div>
  );
};

export default ControlsPanel;
