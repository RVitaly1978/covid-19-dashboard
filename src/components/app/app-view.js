import React from 'react';

import Header from '../header';
import Footer from '../footer';
import TableInfo from '../table-info';
import ListInfo from '../list-info';
import CountrySearch from '../country-search';
import ControlsPanel from '../controls-panel';
import ChartInfo from '../chart-info';
import MapInfo from '../map-info';

import st from './app.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <div className={st.app_content}>

        <Header />
        <ControlsPanel />

        <div className={st.app_main}>
          <MapInfo />
          <ChartInfo />
          <CountrySearch />
          <TableInfo />
          <ListInfo />
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
