import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  setFilterCase,
} from '../../store';

import st from './filter-change.module.scss';

const FilterChange = ({ value='confirmed', setValue }) => {
  const [filter, setFilter] = useState(value);

  const onSubmit = (evt) => {
    evt.preventDefault();
    setValue(filter);
  }

  const onChange = (evt) => {
    const { value } = evt.target;
    setFilter(value.toLowerCase());
  }

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>
        <form
          onSubmit={onSubmit}
        >
          <input
            type='search'
            autoComplete='off'
            autoFocus={true}
            placeholder='Type the filter'
            value={filter}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterChange);
