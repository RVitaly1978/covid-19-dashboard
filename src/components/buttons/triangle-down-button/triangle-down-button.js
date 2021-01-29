import React from 'react';

import Button from '../button';
import { TriangleDownIcon } from '../../icons';

import st from './triangle-down-button.module.scss';

const TriangleDownButton = ({
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
      icon={<TriangleDownIcon styleClass={styleClassIcon} />}
    />
  );
}

export default TriangleDownButton;
