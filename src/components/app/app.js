import React from 'react';

import CovidService from '../../services/covid-service';
import CountriesService from '../../services/countries-service';
import './app.css';

const App = () => {
  const covidService = new CovidService();
  const countriesService = new CountriesService();

  covidService.getSummary()
    .then((data) => console.log(data));

  countriesService.getAllDataFiltered()
    .then((data) => console.log(data));

  return (
    <div className='app'>
      Hello
    </div>
  );
}

export default App;
