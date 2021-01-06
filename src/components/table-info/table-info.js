import { connect } from 'react-redux';

import { getCountryData } from '../../helpers';

import TableInfo from './table-info-view';

const mapStateToProps = ({
  countriesCovidData, country, isDataNew, isDataPer100,
}) => {
  return {
    ...getCountryData(countriesCovidData, country, isDataNew, isDataPer100),
  };
};

export default connect(mapStateToProps)(TableInfo);
