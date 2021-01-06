import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store} from './store';

import { CovidServiceContext, CountriesServiceContext } from './context';
import CovidService from './services/covid-service';
import CountriesService from './services/countries-service';

import App from './components/app';
import './styles/index.scss';

const covidService = new CovidService();
const countriesService = new CountriesService();

ReactDOM.render(
  <Provider store={store}>
    <CovidServiceContext.Provider value={covidService}>
      <CountriesServiceContext.Provider value={countriesService}>
        <App />
      </CountriesServiceContext.Provider>
    </CovidServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
