import React from 'react';
import { connect } from 'react-redux';

import { footer } from '../../constants';

import { GithubLogo, RssLogo } from '../icons';

import st from './footer.module.scss';

const Footer = ({ isFullScreen }) => {
  const footerContainerStyle = isFullScreen
  ? `${st.footer_container} ${st.footer_container__fullscreen}`
  : st.footer_container;

  return (
    <footer className={footerContainerStyle}>

      <a className={st.footer_link} href={footer.authorGitHubLink}>
        <GithubLogo styleClass={st.footer_icon__github}/>
        &nbsp;{footer.authorGitHubText}
      </a>

      <a className={st.footer_link} href={footer.rssLink}>
        <RssLogo styleClass={st.footer_icon__rss}/>
      </a>

    </footer>
  );
}

const mapStateToProps = ({ isFullScreen }) => ({ isFullScreen });

export default connect(mapStateToProps)(Footer);
