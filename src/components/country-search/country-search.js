import React from 'react';
import { connect } from 'react-redux';

import { setSearchValue, setCountryCode } from '../../store';
import { DEFAULT_SEARCH_VALUE } from '../../constants';

import st from './country-search.module.scss';

const CountrySearch = ({ value=DEFAULT_SEARCH_VALUE, setValue, setCode }) => {
  const onChange = (evt) => {
    const { value } = evt.target;
    setValue(value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    setCode(undefined);
  }

  return (
    <div className={st.view_container}>
      <form
        onSubmit={onSubmit}
      >
        <input className={st.view_search}
          type='search'
          autoComplete='off'
          autoFocus={true}
          placeholder='Type the country'
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

const mapStateToProps = ({ searchValue }) => {
  return {
    value: searchValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => dispatch(setSearchValue(value)),
  setCode: (value) => dispatch(setCountryCode(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);
