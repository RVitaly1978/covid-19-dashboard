import React from 'react';

import Button from '../button';
import { FullscreenOpenIcon } from '../../icons';

import st from './fullscreen-open-button.module.scss';

const FullScreenOpenButton = ({
  onClick = () => {},
  styleClass = null,
  styleClassIcon = null,
}) => {
  return (
    <Button
      styleClass={`${st.fullscreen_open_button_container} ${styleClass}`}
      onClick={(evt) => onClick(evt)}
      icon={<FullscreenOpenIcon styleClass={styleClassIcon} />}
    />
  );
}

export default FullScreenOpenButton;
