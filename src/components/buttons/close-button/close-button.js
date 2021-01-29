import React from 'react';

import Button from '../button';
import { CloseIcon } from '../../icons';

import st from './close-button.module.scss';

const CloseButton = ({
  id = undefined,
  onClick = () => {},
  styleClass = null,
  styleClassIcon = null,
}) => {
  return (
    <Button
      styleClass={`${st.close_button_container} ${styleClass}`}
      id = {id}
      onClick={(evt) => onClick(evt)}
      icon={<CloseIcon styleClass={styleClassIcon} />}
    />
  );
}

export default CloseButton;
