import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { identifiers as C } from '../../constants';

import { FullScreenOpenButton, FullScreenCloseButton } from '../buttons';

import st from './fullscreen-wrapper.module.scss';

const FullscreenWrapper = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const modalNode = useRef(null);
  const modalNodeClassName = useRef();

  useEffect(() => {
    modalNode.current = document.getElementById(C.fullscreenNode);
    modalNodeClassName.current = modalNode.current.className;

    return () => {
      modalNode.current && (modalNode.current = null);
      modalNodeClassName.current && (modalNodeClassName.current = undefined);
    };
  }, []);

  const onClickToOpen = () => {
    setIsFullScreen(true);
  }

  const onClickToClose = () => {
    modalNode.current.className = modalNodeClassName.current;
    setIsFullScreen(false);
  }

  const button = isFullScreen
    ? (<FullScreenCloseButton
        styleClass={st.wrapper_button}
        onClick={onClickToClose} />)
    : (<FullScreenOpenButton
        styleClass={st.wrapper_button}
        onClick={onClickToOpen} />);

  if (isFullScreen && modalNode.current) {
    modalNode.current.className = st.fullscreen_open;

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
