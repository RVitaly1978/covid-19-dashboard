import React from 'react';

import Header from '../header';
import Footer from '../footer';
import UpdateInfo from '../update-info';
import TableInfo from '../table-info';
import ListInfo from '../list-info';
import CountrySearch from '../country-search';
import ControlsPanel from '../controls-panel';

import st from './app.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <div className={st.app_content}>

        <Header />
        <ControlsPanel />

        <div className={st.app_main}>
          <UpdateInfo />
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
