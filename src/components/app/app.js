import React from 'react';

import Header from '../header';
import Footer from '../footer';
import AppMain from '../app-main';
import NotificationList from '../notification-list';

import st from './app.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <div className={st.app_content}>
        <Header />
        <AppMain />
        <Footer />
        <NotificationList />
      </div>
    </div>
  );
}

export default App;
