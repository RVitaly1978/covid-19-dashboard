import React from 'react';

import st from './close-icon.module.scss';

const CloseIcon = ({ iconColor }) => {
  return (
    <div className={st.icon_container}>
      <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
      <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
    </div>
  );
}

export default CloseIcon;
