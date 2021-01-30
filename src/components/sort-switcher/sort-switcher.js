import React from 'react';

import { sortBy, BY_VALUE, tooltips as tt } from '../../constants';

import InputRadio from '../input-radio';

import st from './sort-switcher.module.scss';

const SortSwitcher = ({
  value = BY_VALUE, setValue, name, styleClass,
}) => {

  const onClick = (evt) => {
    const { value } = evt.target;
    setValue(value);
  }

  const items = sortBy.map(({ sortBy, label }) => {
    return (
      <li key={sortBy} className={st.switcher_item}>
        <InputRadio
          styleClass={st.switcher_radio}
          id={sortBy}
          name={name}
          value={sortBy}
          isChecked={sortBy === value}
          onClick={onClick}
          label={label} />
      </li>
    );
  });

  return (
    <ul className={`${st.switcher_container} ${styleClass}`}
      data-title={tt.sortSwitcher}
      data-placement='bottom'
    >
      {items}
    </ul>
  );
}

export default SortSwitcher;