import React from 'react';

import Header from '../header';
import Footer from '../footer';
import AppMain from '../app-main';

import st from './app.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <div className={st.app_content}>

        <Header />

        <div className={st.app_main}>
          <AppMain />
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
