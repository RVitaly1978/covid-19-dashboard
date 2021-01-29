import React from 'react';

import st from './triangle-up-icon.module.scss';

const TriangleUpIcon = ({ styleClass = null }) => {
  return (
    <div className={st.icon_container}>
      <div className={`${st.icon_figure} ${styleClass}`} />
    </div>
  );
}

export default TriangleUpIcon;
