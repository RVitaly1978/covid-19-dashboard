import React from 'react';
import { connect } from 'react-redux';

import { GLOBAL_COUNTRY_CODE } from '../../constants';

import UpdateInfo from '../update-info';
import ControlsPanel from '../controls-panel';

import st from './header.module.scss';

const Header = ({ countryCode }) => {

  const country = (countryCode && countryCode !== GLOBAL_COUNTRY_CODE)
    ? `Dashboard for ${countryCode}`
    : 'Dashboard';

  return (
    <div className={st.header_content}>

      <div className={st.logo_content}>
        <h1 className={st.header_logo}>Covid-19</h1>

        <div className={st.header_data}>
          <h2 className={st.header_dashboard}>{country}</h2>
          <UpdateInfo />
        </div>
      </div>

      <ControlsPanel />

    </div>
  );
}

const mapStateToProps = ({ countryCode }) => {
  return {
    countryCode,
  };
};

export default connect(mapStateToProps)(Header);
