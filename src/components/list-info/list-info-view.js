import React from 'react';

import st from './list-info.module.scss';

const ListInfo = ({ data }) => {
  const list = data.map((item) => {
    const { country, flag, value } = item;
    return (<li key={country}>
      <img className={st.flag}
          src={flag}
          alt={`${country} flag`}></img>
      <p className={st.marked}>{country}</p>
      <p className={st.marked}>{value}</p>
    </li>)
  });

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default ListInfo;
