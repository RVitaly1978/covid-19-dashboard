import { connect } from 'react-redux';

import { formattingDate } from '../../helpers';

import UpdateInfo from './update-info-view';

const mapStateToProps = ({ lastUpdateCovidData }) => {
  return {
    lastUpdate: formattingDate(lastUpdateCovidData),
  };
};

export default connect(mapStateToProps)(UpdateInfo);
