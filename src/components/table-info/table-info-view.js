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
    <div className={st.view_container}>
      <div className={st.view_content} style={{ backgroundImage: `url(${flag})` }}>

        {/* <img className={st.flag}
            src={flag}
            alt={`${country} flag`}></img> */}

        <div className={st.content_data}>
          <p className={st.marked}>{`${country} (${countryCode})`}</p>
          <p className={st.marked}>Population: {population}</p>
          <p className={st.marked}>Confirmed: <span style={{ color: getColorByFilterCase('confirmed') }}>{confirmed}</span></p>
          <p className={st.marked}>Recovered: <span style={{ color: getColorByFilterCase('recovered') }}>{recovered}</span></p>
          <p className={st.marked}>Deaths: <span style={{ color: getColorByFilterCase('deaths') }}>{deaths}</span></p>
        </div>

      </div>
    </div>
  );
}

export default TableInfo;
