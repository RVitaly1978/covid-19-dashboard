import React from 'react';

import st from './sort-radio.module.scss';

const SortRadio = ({ label, id, name, value, isChecked, onClick }) => {
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

      <label
        className={st.view_label}
        htmlFor={id}>
        {label}
      </label>

    </span>
  );

}

export default SortRadio;
