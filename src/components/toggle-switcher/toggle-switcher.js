import React from 'react';

import st from './toggle-switcher.module.scss';

const ToggleSwitcher = ({
  id, isChecked=false, setChecked, labelOn, labelOff, styleClass,
  dataTitle = null, dataPlacement = null,
}) => {

  const onChange = (evt) => {
    const { checked } = evt.target;
    setChecked(checked);
  }

  return (
    <div
      className={`${st.switcher_container} ${styleClass}`}
      data-title={dataTitle}
      data-placement={dataPlacement}
    >

      <input className={st.switcher_input}
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={onChange}
        data-on={labelOn}
        data-off={labelOff} />

      <label
        className={st.switcher_label}
        htmlFor={id} />

    </div>
  );
}

export default ToggleSwitcher;
