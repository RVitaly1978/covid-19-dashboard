import React from 'react';

import Button from '../button';
import { FullscreenCloseIcon } from '../../icons';

import st from './fullscreen-close-button.module.scss';

const FullScreenCloseButton = ({
  onClick = () => {},
  styleClass = null,
  styleClassIcon = null,
}) => {
  return (
    <Button
      styleClass={`${st.fullscreen_close_button_container} ${styleClass}`}
      onClick={(evt) => onClick(evt)}
      icon={<FullscreenCloseIcon styleClass={styleClassIcon} />}
    />
  );
}

export default FullScreenCloseButton;
