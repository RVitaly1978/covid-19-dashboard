import React from 'react';

import st from './table-info.module.scss';

const TableInfo = ({
  country = 'no data',
  confirmed = 'no data',
  recovered = 'no data',
  deaths = 'no data',
}) => {
  return (
    <div className={st.view_container}>
      <div className={st.view_content}>
        <p className={st.marked}>{country}</p>
        <p className={st.marked}>{confirmed}</p>
        <p className={st.marked}>{recovered}</p>
        <p className={st.marked}>{deaths}</p>
      </div>
    </div>
  );
}

export default TableInfo;
