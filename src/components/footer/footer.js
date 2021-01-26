import React from 'react';

import { footer } from '../../constants';

import st from './footer.module.scss';

const Footer = () => {
  return (
    <div className={st.footer_container}>

      <a className={`${st.footer_link} ${st.footer_link__github}`}
        href={footer.authorGitHubLink}>
        {footer.authorGitHubText}
      </a>

      <a className={`${st.footer_link}`}
        href={footer.rssLink}>
        {footer.rssText}
      </a>

    </div>
  );
}

export default Footer;
