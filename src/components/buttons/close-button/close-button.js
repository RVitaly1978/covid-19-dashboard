import React from 'react';

import Button from '../button';
import { CloseIcon } from '../../icons';

import st from './close-button.module.scss';

const CloseButton = ({
  id = undefined,
  onClick = () => {},
  styleClass = null,
  iconColor = undefined,
}) => {
  return (
    <Button
      styleClass={`${st.close_button_container} ${styleClass}`}
      id = {id}
      onClick={(evt) => onClick(evt)}
      icon={<CloseIcon iconColor={iconColor} />}
    />
  );
}

export default CloseButton;
