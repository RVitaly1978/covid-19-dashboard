import React from 'react';

import st from './fullscreen-open-icon.module.scss';

const FullscreenOpenIcon = ({ iconColor }) => {
  return (
    <div className={st.icon_container}>
      <div className={st.icon_corner}>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
      </div>
      <div className={st.icon_corner}>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
      </div>
      <div className={st.icon_corner}>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
      </div>
      <div className={st.icon_corner}>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
        <span style={{ backgroundColor: iconColor }} className={st.icon_line}></span>
      </div>
    </div>
  );
}

export default FullscreenOpenIcon;
