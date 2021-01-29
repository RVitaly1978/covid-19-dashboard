import React from 'react';
import { connect } from 'react-redux';

import { setDefaultCountryCode } from '../../store';
import { GLOBAL_COUNTRY_CODE } from '../../constants';

import { CloseButton } from '../buttons';

import st from './active-country-list-item.module.scss';

const ActiveCountryListItem = ({
    countryCode = GLOBAL_COUNTRY_CODE, flag, country, setCode,
}) => {

  const onClick = () => {
    setCode();
  }

  const closeButton = (countryCode !== GLOBAL_COUNTRY_CODE)
    ? <CloseButton
        onClick={onClick}
        styleClass={st.close_button} />
    : null;

  return (
    <div className={st.view_container}>

      <img className={st.flag}
        src={flag}
        alt='flag'></img>

      <p className={st.item_country}>{country}</p>

      {closeButton}

    </div>
  );
}

const mapStateToProps = ({ countryCode, summaryCovidData, summaryGlobalCovidData }) => {
  if (countryCode === GLOBAL_COUNTRY_CODE) {
    return {
      countryCode,
      flag: summaryGlobalCovidData.flag,
      country: summaryGlobalCovidData.country,
    };
  
  }

  const filtered = summaryCovidData
    .filter((obj) => obj.countryCode === countryCode)[0];

  return {
    countryCode,
    flag: filtered && filtered.flag,
    country: filtered && filtered.country,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCode: () => dispatch(setDefaultCountryCode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCountryListItem);
