import React from 'react';

import { getColorByFilterCase } from '../../helpers';

import st from './table-info.module.scss';

const TableInfo = ({
  countryCode = 'no data',
  country = 'no data',
  flag = 'no data',
  population = 'no data',
  confirmed = 'no data',
  recovered = 'no data',
  deaths = 'no data',
}) => {
  return (
    <div className={st.view_container} style={{ backgroundImage: `url(${flag})` }}>

      <div className={st.content_data}>
        <h3 className={st.content_title}>{`${country} (${countryCode})`}</h3>
        <p className={st.marked}>Population: {population}</p>
        <p className={st.marked}>
          Confirmed: <span style={{ color: getColorByFilterCase('confirmed') }}>{confirmed}</span></p>
        <p className={st.marked}>
          Recovered: <span style={{ color: getColorByFilterCase('recovered') }}>{recovered}</span></p>
        <p className={st.marked}>
          Deaths: <span style={{ color: getColorByFilterCase('deaths') }}>{deaths}</span></p>
      </div>

    </div>
  );
}

export default TableInfo;
