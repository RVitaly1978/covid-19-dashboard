import React from 'react';

import icon from './death-star.png';
import st from './error-indicator.module.scss';

const ErrorIndicator = () => {
  return (
    <div className={st.error_indicator}>
      <img src={icon} alt='error icon'/>
      <span className={st.boom}>BOOM!</span>
      <span>something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
