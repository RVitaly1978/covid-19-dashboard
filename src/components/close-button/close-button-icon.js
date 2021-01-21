import React from 'react';

import st from './close-button-icon.module.scss';

const CloseButtonIcon = () => {
  return (
    <div className={st.icon_container}>
      <span className={st.icon_line}></span>
      <span className={st.icon_line}></span>
    </div>
  );
}

export default CloseButtonIcon;
