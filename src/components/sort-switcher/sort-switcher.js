import React from 'react';

import { sortBy, BY_VALUE } from '../../constants';

import { SortRadio } from './index';

import st from './sort-switcher.module.scss';

const SortSwitcher = ({ value = BY_VALUE, setValue, name }) => {

  const onClick = (evt) => {
    const { value } = evt.target;
    setValue(value);
  }

  const items = sortBy.map(({ sortBy, label }) => {
    return (
      <li key={sortBy} className={st.switcher_item}>
        <SortRadio
          label={label}
          id={sortBy}
          name={name}
          value={sortBy}
          isChecked={sortBy === value}
          onClick={onClick} />
      </li>
    );
  });

  return (
    <ul className={st.view_switcher}>
      {items}
    </ul>
  );
}

export default SortSwitcher;