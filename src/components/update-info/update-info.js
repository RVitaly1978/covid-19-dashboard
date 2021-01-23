import { connect } from 'react-redux';

import { formattingDate } from '../../helpers';

import UpdateInfo from './update-info-view';

const mapStateToProps = ({ summaryGlobalCovidData, isLoading }) => {
  const lastUpdateCovidData = summaryGlobalCovidData.data
    ? summaryGlobalCovidData.data.date
    : undefined;

  return {
    lastUpdate: formattingDate(lastUpdateCovidData),
    isLoading,
  };
};

export default connect(mapStateToProps)(UpdateInfo);
