import React from 'react';

import st from './button.module.scss';

const Button = ({
  id = undefined,
  onClick = () => {},
  isDisabled = false,
  icon = null,
  styleClass = null,
  dataTitle = null,
  dataPlacement = null,
}) => {
  return (
    <button
      className={`${st.button_container} ${styleClass}`}
      type='button'
      id={id}
      disabled={isDisabled}
      onClick={(evt) => onClick(evt)}
      data-title={dataTitle}
      data-placement={dataPlacement}
    >
      {icon}
    </button>
  );
}

export default Button;
