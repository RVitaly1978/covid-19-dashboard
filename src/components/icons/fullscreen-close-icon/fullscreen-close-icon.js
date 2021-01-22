import React from 'react';

import st from './fullscreen-close-icon.module.scss';

const FullscreenCloseIcon = () => {
  return (
    <div className={st.icon_container}>
      <div className={st.icon_corner}>
        <span className={st.icon_line}></span>
        <span className={st.icon_line}></span>
      </div>
      <div className={st.icon_corner}>
        <span className={st.icon_line}></span>
        <span className={st.icon_line}></span>
      </div>
      <div className={st.icon_corner}>
        <span className={st.icon_line}></span>
        <span className={st.icon_line}></span>
      </div>
      <div className={st.icon_corner}>
        <span className={st.icon_line}></span>
        <span className={st.icon_line}></span>
      </div>
    </div>
  );
}

export default FullscreenCloseIcon;
