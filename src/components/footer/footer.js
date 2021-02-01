import React from 'react';
import { connect } from 'react-redux';

import { footer } from '../../constants';

import st from './footer.module.scss';

const Footer = ({ isFullScreen }) => {
  const footerContainerStyle = isFullScreen
  ? `${st.footer_container} ${st.footer_container__fullscreen}`
  : st.footer_container;

  return (
    <footer className={footerContainerStyle}>

      <a className={`${st.footer_link} ${st.footer_link__github}`}
        href={footer.authorGitHubLink}>
        {footer.authorGitHubText}
      </a>

      <a className={`${st.footer_link}`}
        href={footer.rssLink}>
        {footer.rssText}
      </a>

    </footer>
  );
}

const mapStateToProps = ({ isFullScreen }) => {
  return {
    isFullScreen,
  };
};

export default connect(mapStateToProps)(Footer);
