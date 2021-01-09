import { connect } from 'react-redux';

import { getTableData } from '../../helpers';

import TableInfo from './table-info-view';

const mapStateToProps = (state) => {
  return {
    ...getTableData(state),
  };
};

export default connect(mapStateToProps)(TableInfo);
