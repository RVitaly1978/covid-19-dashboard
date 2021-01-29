import React from 'react';

import ActiveCountryListItem from '../active-country-list-item';
import CountrySearch from '../country-search';
import ListControlsPanel from '../list-controls-panel';

import st from './list-info.module.scss';

const ListInfo = ({ data, color, setCode }) => {
  const onClick = (evt) => {
    const { id } = evt.target;
    setCode(id);
  };

  const list = data.map(item => {
    const { countryCode, country, flag, value } = item;
    return (
      <li key={country}
        className={st.list_item}
        id={countryCode}
      >
        <img className={st.flag}
            src={flag}
            alt={`${country} flag`}></img>

        <div className={st.item_content}>
          <p className={st.item_country}>{country}</p>
          <p className={st.marked} style={{ color: color }}>{value}</p>
        </div>
      </li>
    );
  });

  return (
    <div className={st.view_container}>

      <div className={st.view_search}>
        <CountrySearch />
        <ActiveCountryListItem />
      </div>

      <div className={st.view_list_container}>
        <ListControlsPanel />
        <ul className={st.view_list}
          onClick={onClick}>
          {list}
        </ul>
      </div>

    </div>
  );
}

export default ListInfo;
