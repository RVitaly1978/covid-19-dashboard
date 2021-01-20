import React, { useState } from 'react';

import st from './fullscreen-wrapper.module.scss';

const FullscreenWrapper = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onClickTo = () => {
    setIsFullScreen(true);
  }

  const onClickFrom = () => {
    setIsFullScreen(false);
  }

  const style = isFullScreen
    ? `${st.view_container} ${st.view_container__fullscreen}`
    : st.view_container;

  const button = isFullScreen
    ? (<button
        className={st.view_button}
        onClick={onClickFrom}
      >X</button>)
    : (<button
        className={st.view_button}
        onClick={onClickTo}
      >O</button>);

  return (
    <div className={style}>
      <div className={st.view_content}>
        {button}
        {children}
      </div>
    </div>
  );
}

export default FullscreenWrapper;
