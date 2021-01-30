import React from 'react';

import st from './input-radio.module.scss';

const InputRadio = ({
  id, name, value, isChecked, onClick, styleClass, label, styleLabel,
}) => {
  return (
    <span className={`${st.switcher_container} ${styleClass}`}>

      <input className={st.switcher_input}
        type='radio'
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        onClick={onClick} />

      <label style={styleLabel}
        className={st.switcher_label}
        htmlFor={id}
      >{label}</label>

    </span>
  );
}

export default InputRadio;
