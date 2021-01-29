import React from 'react';

import Button from '../button';
import { TriangleUpIcon } from '../../icons';

import st from './triangle-up-button.module.scss';

const TriangleUpButton = ({
  id = undefined,
  onClick = () => {},
  styleClass = null,
  styleClassIcon = null,
}) => {
  return (
    <Button
      styleClass={`${st.button_container} ${styleClass}`}
      id = {id}
      onClick={(evt) => onClick(evt)}
      icon={<TriangleUpIcon styleClass={styleClassIcon} />}
    />
  );
}

export default TriangleUpButton;
