import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { identifiers as C } from '../../constants';

import st from './fullscreen-wrapper.module.scss';

const FullscreenWrapper = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const modalNode = useRef(null);

  useEffect(() => {
    modalNode.current = document.getElementById(C.fullscreenNode);
    return () => modalNode.current && (modalNode.current = null);
  }, []);

  const onClickTo = () => {
    setIsFullScreen(true);
  }

  const onClickFrom = () => {
    modalNode.current.classList.remove(st.main_fullscreen__open);
    setIsFullScreen(false);
  }

  const button = isFullScreen
    ? (<button
        className={st.view_button}
        onClick={onClickFrom}
      >X</button>)
    : (<button
        className={st.view_button}
        onClick={onClickTo}
      >O</button>);

  if (isFullScreen && modalNode.current) {
    modalNode.current.classList.add(st.main_fullscreen__open);

    return createPortal(
      <>
        {button}
        {children}
      </>,
      modalNode.current
    );
  }

  return (
    <>
      {button}
      {children}
    </>
  );
}

export default FullscreenWrapper;
