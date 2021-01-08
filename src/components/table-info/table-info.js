import { connect } from 'react-redux';

import TableInfo from './table-info-view';

const mapStateToProps = ({ tableData }) => {
  return {
    ...tableData,
  };
};

export default connect(mapStateToProps)(TableInfo);
