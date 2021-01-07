import { connect } from 'react-redux';

import { getCountryData } from '../../helpers';

import ListInfo from './list-info-view';

const mapStateToProps = ({
  countriesCovidData, countryCode, isDataNew, isDataPer100,
}) => {
  return {
    ...getCountryData(countriesCovidData, countryCode, isDataNew, isDataPer100),
  };
};

export default connect(mapStateToProps)(ListInfo);
