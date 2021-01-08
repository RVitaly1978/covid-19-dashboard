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
      <div className={st.view_content}>

        <input
          type='checkbox'
          id={id}
          checked={isChecked}
          onChange={onChange}
          data-on={labelOn}
          data-off={labelOff}
        />

        <label htmlFor={id}>
          {labelOn}-{labelOff}
        </label>

      </div>
    </div>
  );
}

export default ToggleSwitcher;
