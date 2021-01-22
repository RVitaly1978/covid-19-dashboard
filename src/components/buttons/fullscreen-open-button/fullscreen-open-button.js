import React from 'react';

import Button from '../button';
import { FullscreenOpenIcon } from '../../icons';

import st from './fullscreen-open-button.module.scss';

const FullScreenOpenButton = ({
  onClick = () => {},
  styleClass = null,
}) => {
  return (
    <Button
      styleClass={`${st.fullscreen_open_button_container} ${styleClass}`}
      onClick={(evt) => onClick(evt)}
      icon={<FullscreenOpenIcon />}
    />
  );
}

export default FullScreenOpenButton;
