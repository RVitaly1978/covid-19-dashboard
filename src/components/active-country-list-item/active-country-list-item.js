import React from 'react';
import { connect } from 'react-redux';

import {
  setDefaultCountryCode,
} from '../../store';

import st from './active-country-list-item.module.scss';

const ActiveCountryListItem = ({
    value='UN', flag, country, setCode,
}) => {
  const onClick = () => {
    setCode();
  }

  if (value === 'UN') {
    return null;
  }

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>
        <img className={st.flag}
            src={flag}
            alt={`${country} flag`}></img>
        <p className={st.marked}>{country}</p>
        <button
          className={st.view_button}
          onClick={onClick}
        >X</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ countryCode, summaryCovidData }) => {
  const filtered = summaryCovidData
    .filter((itemObj) => itemObj.countryCode === countryCode)[0];

  return {
    value: countryCode,
    flag: filtered.flag,
    country: filtered.country,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCode: () => dispatch(setDefaultCountryCode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCountryListItem);
