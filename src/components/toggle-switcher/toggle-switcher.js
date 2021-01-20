import React from 'react';

import st from './toggle-switcher.module.scss';

const ToggleSwitcher = ({
  isChecked=false, setChecked, labelOn, labelOff, id,
}) => {

  const onChange = (evt) => {
    const { checked } = evt.target;
    setChecked(checked);
  }

  return (
    <div className={st.view_container}>

      <span className={st.view_switcher}>

        <input className={st.view_input}
          type='checkbox'
          id={id}
          checked={isChecked}
          onChange={onChange}
          data-on={labelOn}
          data-off={labelOff}
        />

        <label
          className={st.view_label}
          htmlFor={id} />

      </span>

    </div>
  );
}

export default ToggleSwitcher;
