import React from 'react';

import st from './case-radio.module.scss';

const CaseRadio = ({ label, id, name, value, isChecked, onClick, color }) => {
  return (
    <span className={st.view_switcher}>

      <input className={st.view_input}
        type='radio'
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        onClick={onClick}
      />

      <label style={{ color: color }}
        className={st.view_label}
        htmlFor={id}>
        {label}
      </label>

    </span>
  );

}

export default CaseRadio;
