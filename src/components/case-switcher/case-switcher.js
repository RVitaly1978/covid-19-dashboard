import React from 'react';

import { cases, CONFIRMED, tooltips as tt } from '../../constants';

import InputRadio from '../input-radio';

import st from './case-switcher.module.scss';

const CaseSwitcher = ({
  value = CONFIRMED, setValue, name, styleClass,
}) => {

  const onClick = (evt) => {
    setValue(evt.target.value);
  }

  const items = cases.map(({ itemCase, color }) => {
    return (
      <li key={itemCase} className={st.switcher_item}>

        <InputRadio
          styleLabel={{ color: color }}
          styleClass={st.switcher_radio}
          id={itemCase}
          name={name}
          value={itemCase}
          isChecked={itemCase === value}
          onClick={onClick}
          label={itemCase} />

      </li>
    );
  });

  return (
    <ul className={`${st.switcher_container} ${styleClass}`}
      data-title={tt.caseSwitcher}
      data-placement='bottom'
    >
      {items}
    </ul>
  );
}

export default CaseSwitcher;
