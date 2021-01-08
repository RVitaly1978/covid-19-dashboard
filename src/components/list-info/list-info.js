import { connect } from 'react-redux';

import ListInfo from './list-info-view';

const mapStateToProps = ({ listData }) => {
  return {
    data: listData,
  };
};

export default connect(mapStateToProps)(ListInfo);
