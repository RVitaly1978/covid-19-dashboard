import React from 'react';
import { connect } from 'react-redux';

import { GLOBAL_COUNTRY_CODE } from '../../constants';

import UpdateInfo from '../update-info';

import st from './header.module.scss';

const Header = ({ countryCode }) => {
  const country = (countryCode && countryCode !== GLOBAL_COUNTRY_CODE)
    ? `Dashboard for ${countryCode}`
    : 'Dashboard';

  return (
    <div className={st.header}>
      <div className={st.header_content}>

        {`Covid-19 ${country}`}
        <UpdateInfo />

      </div>
    </div>
  );
}

const mapStateToProps = ({ countryCode }) => {
  return {
    countryCode,
  };
};

export default connect(mapStateToProps)(Header);
