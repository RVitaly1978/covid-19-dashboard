import React from 'react';

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
      <div className={st.view_content}>

        <img className={st.flag}
            src={flag}
            alt={`${country} flag`}></img>

        <div className={st.content_data}>
          <p className={st.marked}>{`${country} (${countryCode})`}</p>
          <p className={st.marked}>Population: {population}</p>
          <p className={st.marked}>Confirmed: {confirmed}</p>
          <p className={st.marked}>Recovered: {recovered}</p>
          <p className={st.marked}>Deaths: {deaths}</p>
        </div>

      </div>
    </div>
  );
}

export default TableInfo;
