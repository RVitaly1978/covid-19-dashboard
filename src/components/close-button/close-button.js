import React from 'react';

import { CloseButtonIcon } from './index';

import st from './close-button.module.scss';

const CloseButton = ({
  id = 'closeButton',
  onClick = () => {},
  isDisabled = false,
}) => {
  return (
    <button className={st.button_container}
      type='button'
      id={id}
      disabled={isDisabled}
      onClick={(evt) => onClick(evt)}
    >
      <CloseButtonIcon />
    </button>
  );
}

export default CloseButton;
