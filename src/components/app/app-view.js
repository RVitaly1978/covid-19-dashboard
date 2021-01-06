import React from 'react';

import Header from '../header';
import Footer from '../footer';
import UpdateInfo from '../update-info';
import TableInfo from '../table-info';
import ListInfo from '../list-info';

import st from './app.module.scss';

const App = ({ countriesCovidData }) => {
  console.log(countriesCovidData);

  return (
    <div className={st.app}>
      <div className={st.app_content}>

        <Header />

        <div className={st.app_main}>
          <UpdateInfo />
          <TableInfo />
          <ListInfo />
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
