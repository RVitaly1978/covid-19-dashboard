import React from 'react';

import st from './bounce-loading.module.scss';

const BounceLoading = ({ styleClass = null }) => {
  return (
    <div className={`${st.bounce_container} ${styleClass}`}>
      <span className={`${st.bounce_point} ${st.bounce_point__1}`}></span>
      <span className={`${st.bounce_point} ${st.bounce_point__2}`}></span>
      <span className={st.bounce_point}></span>
    </div>
  );
}

export default BounceLoading;
