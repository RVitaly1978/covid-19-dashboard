import { connect } from 'react-redux';

import TableInfo from './table-info-view';

const mapStateToProps = ({ globalCovidData = {} }) => {
  return {
    country: globalCovidData.country,
    confirmed: globalCovidData.TotalConfirmed,
    recovered: globalCovidData.TotalRecovered,
    deaths: globalCovidData.TotalDeaths,
  };
};

export default connect(mapStateToProps)(TableInfo);
