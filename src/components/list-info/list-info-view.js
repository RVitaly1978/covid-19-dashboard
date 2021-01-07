import React from 'react';

import st from './list-info.module.scss';

const ListInfo = ({
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
        <p className={st.marked}>{country}</p>
        <p className={st.marked}>{countryCode}</p>
        <img className={st.flag}
          src={flag}
          alt={`${country} flag`}></img>
        <p className={st.marked}>{population}</p>
        <p className={st.marked}>{confirmed}</p>
        <p className={st.marked}>{recovered}</p>
        <p className={st.marked}>{deaths}</p>
      </div>
    </div>
  );
}

export default ListInfo;
