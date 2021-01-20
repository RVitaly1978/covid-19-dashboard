import React from 'react';
import { connect } from 'react-redux';

import { setFilterCase } from '../../store';

import { CaseRadio } from './index';

import { cases, CONFIRMED } from '../../constants';

import st from './case-switcher.module.scss';

const CaseSwitcher = ({ value = CONFIRMED, setValue, name }) => {

  const onClick = (evt) => {
    const { value } = evt.target;
    setValue(value.toLowerCase());
  }

  const items = cases.map(({ itemCase, color }) => {
    return (
      <li key={itemCase} className={st.switcher_item}>
        <CaseRadio
          label={itemCase}
          id={itemCase}
          name={name}
          value={itemCase}
          isChecked={itemCase === value}
          onClick={onClick}
          color={color} />
      </li>
    );
  });

  return (
    <ul className={st.view_switcher}>
      {items}
    </ul>
  );
}

const mapStateToProps = ({ filterCase }) => {
  return {
    value: filterCase,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => dispatch(setFilterCase(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseSwitcher);
