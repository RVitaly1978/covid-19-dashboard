import React from 'react';
import { connect } from 'react-redux';

import { setDefaultCountryCode } from '../../store';
import { GLOBAL_COUNTRY_CODE } from '../../constants';

import st from './active-country-list-item.module.scss';

const ActiveCountryListItem = ({
    value=GLOBAL_COUNTRY_CODE, flag, country, setCode,
}) => {
  const onClick = () => {
    setCode();
  }

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>

        <img className={st.flag}
          src={flag}
          alt={`${country} flag`}></img>

        <p className={st.marked}>{country}</p>

        {(value !== GLOBAL_COUNTRY_CODE)
          && <button
            className={st.view_button}
            onClick={onClick}
          >X</button>}

      </div>
    </div>
  );
}

const mapStateToProps = ({ countryCode, summaryCovidData }) => {
  const filtered = summaryCovidData
    .filter((obj) => obj.countryCode === countryCode)[0];

  return {
    value: countryCode,
    flag: filtered && filtered.flag,
    country: filtered && filtered.country,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCode: () => dispatch(setDefaultCountryCode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCountryListItem);
