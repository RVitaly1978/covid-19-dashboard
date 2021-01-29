import React from 'react';

import st from './triangle-down-icon.module.scss';

const TriangleDownIcon = ({ styleClass = null }) => {
  return (
    <div className={st.icon_container}>
      <div className={`${st.icon_figure} ${styleClass}`} />
    </div>
  );
}

export default TriangleDownIcon;
