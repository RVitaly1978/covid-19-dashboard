import React from 'react';

import st from './close-icon.module.scss';

const CloseIcon = () => {
  return (
    <div className={st.icon_container}>
      <span className={st.icon_line}></span>
      <span className={st.icon_line}></span>
    </div>
  );
}

export default CloseIcon;
