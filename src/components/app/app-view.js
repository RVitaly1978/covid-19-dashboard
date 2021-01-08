import React from 'react';

import Header from '../header';
import Footer from '../footer';
import UpdateInfo from '../update-info';
import TableInfo from '../table-info';
import ListInfo from '../list-info';
import CountrySearch from '../country-search';
import FilterChange from '../filter-change';

import st from './app.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <div className={st.app_content}>

        <Header />

        <div className={st.app_main}>
          <UpdateInfo />
          <CountrySearch />
          <TableInfo />
          <FilterChange />
          <ListInfo />
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
