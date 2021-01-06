import { connect } from 'react-redux';

import ListInfo from './list-info-view';

const mapStateToProps = ({ countriesCovidData = [] }) => {
  const [ country = {} ] = countriesCovidData;

  return {
    country: country.Country,
    flag: country.flag,
    population: country.population,
    confirmed: country.TotalConfirmed,
    recovered: country.TotalRecovered,
    deaths: country.TotalDeaths,
  };
};

export default connect(mapStateToProps)(ListInfo);
