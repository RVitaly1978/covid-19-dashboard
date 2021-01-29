import React from 'react';
import { connect } from 'react-redux';

import { identifiers, SORT_ORDER_UP, SORT_ORDER_DOWN } from '../../constants';
import { setSortBy, setSortOrder } from '../../store';

import SortSwitcher from '../sort-switcher';
import { Button } from '../buttons';
import { TriangleDownIcon, TriangleUpIcon } from '../icons';

import st from './list-controls-panel.module.scss';

const ListControlsPanel = ({ sortBy, sortOrder, setSortBy, setSortOrder }) => {

  const onClick = (evt) => {
    const { id } = evt.target;
    const value = (id === SORT_ORDER_UP)
      ? SORT_ORDER_DOWN
      : SORT_ORDER_UP;
    setSortOrder(value);
  }

  const Icon = (sortOrder === SORT_ORDER_UP)
    ? TriangleUpIcon
    : TriangleDownIcon;

  return (
    <div className={st.controls_container}>

      <div className={st.switcher_item}>
        <SortSwitcher
          name={identifiers.sortSwitcherRadioName}
          value={sortBy}
          setValue={setSortBy} />
      </div>

      <div className={st.switcher_item}>
        <Button
          id={sortOrder}
          styleClass={st.switcher_button}
          onClick={onClick}
          icon={<Icon styleClass={st.button_icon} />}
        />
      </div>

    </div>
  );
};

const mapStateToProps = ({ sortBy, sortOrder }) => {
  return {
    sortBy, sortOrder,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSortBy: (value) => dispatch(setSortBy(value)),
  setSortOrder: (value) => dispatch(setSortOrder(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListControlsPanel);
