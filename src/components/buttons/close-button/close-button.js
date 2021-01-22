import React from 'react';

import Button from '../button';
import { CloseIcon } from '../../icons';

import st from './close-button.module.scss';

const CloseButton = ({
  onClick = () => {},
  styleClass = null,
}) => {
  return (
    <Button
      styleClass={`${st.close_button_container} ${styleClass}`}
      onClick={(evt) => onClick(evt)}
      icon={<CloseIcon />}
    />
  );
}

export default CloseButton;
