import React from 'react';

import st from './close-icon.module.scss';

const CloseIcon = ({ styleClass = null }) => {
  return (
    <div className={st.icon_container}>
      <span className={`${st.icon_line} ${styleClass}`} />
      <span className={`${st.icon_line} ${styleClass}`} />
    </div>
  );
}

export default CloseIcon;
