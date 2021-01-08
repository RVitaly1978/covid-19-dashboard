import React from 'react';
import { connect } from 'react-redux';

import { setSearchValue } from '../../store';

import st from './country-search.module.scss';

const CountrySearch = ({ value='', setValue }) => {
  const onChange = (evt) => {
    const { value } = evt.target;
    return setValue(value);
  }

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>
        <input
          type='search'
          autoComplete='off'
          autoFocus={true}
          placeholder='Type the country'
          value={value}
          onChange={onChange}
        />
      </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);
