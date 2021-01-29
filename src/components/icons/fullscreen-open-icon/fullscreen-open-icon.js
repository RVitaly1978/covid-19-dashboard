import React from 'react';

import st from './fullscreen-open-icon.module.scss';

const FullscreenOpenIcon = ({ styleClass = null }) => {
  return (
    <div className={st.icon_container}>
      <div className={st.icon_corner}>
        <span className={`${st.icon_line} ${styleClass}`} />
        <span className={`${st.icon_line} ${styleClass}`} />
      </div>
      <div className={st.icon_corner}>
        <span className={`${st.icon_line} ${styleClass}`} />
        <span className={`${st.icon_line} ${styleClass}`} />
      </div>
      <div className={st.icon_corner}>
        <span className={`${st.icon_line} ${styleClass}`} />
        <span className={`${st.icon_line} ${styleClass}`} />
      </div>
      <div className={st.icon_corner}>
        <span className={`${st.icon_line} ${styleClass}`} />
        <span className={`${st.icon_line} ${styleClass}`} />
      </div>
    </div>
  );
}

export default FullscreenOpenIcon;
