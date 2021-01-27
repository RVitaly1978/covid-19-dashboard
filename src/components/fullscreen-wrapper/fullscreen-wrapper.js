import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';

import { identifiers as C } from '../../constants';
import { setIsFullScreen } from '../../store';

import { FullScreenOpenButton, FullScreenCloseButton } from '../buttons';

import st from './fullscreen-wrapper.module.scss';

const FullscreenWrapper = ({ children, isFullScreen, setIsFullScreen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalNode = useRef(null);

  useEffect(() => {
    modalNode.current = document.getElementById(C.fullscreenNode);
    return () => modalNode.current && (modalNode.current = null);
  }, []);

  const onClickToOpen = () => {
    setIsFullScreen(true);
    setIsOpen(true);
  }

  const onClickToClose = () => {
    setIsFullScreen(false);
    setIsOpen(false);
  }

  const button = isFullScreen && isOpen
    ? (<FullScreenCloseButton
        styleClass={st.wrapper_button}
        onClick={onClickToClose} />)
    : (<FullScreenOpenButton
        styleClass={st.wrapper_button}
        onClick={onClickToOpen} />);

  if (isFullScreen && isOpen && modalNode.current) {
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

const mapStateToProps = ({ isFullScreen }) => {
  return {
    isFullScreen,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setIsFullScreen: (value) => dispatch(setIsFullScreen(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullscreenWrapper);
