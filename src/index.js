import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import ServicesContext from './context';
import CovidService from './services/covid-service';
import CovidHistoricalService from './services/covid-historical-service';
import CountriesService from './services/countries-service';

import App from './components/app';
import './styles/index.scss';

const service = {
  covidService: new CovidService(),
  covidHistoricalService: new CovidHistoricalService(),
  countriesService: new CountriesService(),
};

ReactDOM.render(
  <Provider store={store}>
    <ServicesContext.Provider value={service}>
      <App />
    </ServicesContext.Provider>
  </Provider>,
  document.getElementById('root')
);
