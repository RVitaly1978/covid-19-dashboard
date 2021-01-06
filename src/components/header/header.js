import React from 'react';

import st from './header.module.scss';

const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.header_content}>
        Covid-19 Dashboard
      </div>
    </div>
  );
}

export default Header;
