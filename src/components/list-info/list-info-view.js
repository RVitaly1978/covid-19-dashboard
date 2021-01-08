import React from 'react';

import ActiveCountryListItem from '../active-country-list-item';

import st from './list-info.module.scss';

const ListInfo = ({ data, setCode }) => {
  const onClick = (evt) => {
    const { id } = evt.target;
    setCode(id);
  };

  const list = data.map((item) => {
    const { countryCode, country, flag, value } = item;
    return (
      <li key={country}
        className={st.list_item}
        id={countryCode}
      >
        <img className={st.flag}
            src={flag}
            alt={`${country} flag`}></img>
        <p className={st.marked}>{country}</p>
        <p className={st.marked}>{value}</p>
      </li>
    );
  });

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>

        <ActiveCountryListItem />

        <ul onClick={onClick}>
          {list}
        </ul>

      </div>
    </div>
  );
}

export default ListInfo;
