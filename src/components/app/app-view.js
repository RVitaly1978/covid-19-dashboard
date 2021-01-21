import React from 'react';

import { identifiers as C } from '../../constants';

import Header from '../header';
import Footer from '../footer';
import TableInfo from '../table-info';
import ListInfo from '../list-info';
import ChartInfo from '../chart-info';
import MapInfo from '../map-info';
import FullscreenWrapper from '../fullscreen-wrapper';

import st from './app.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <div className={st.app_content}>

        <Header />

        <div className={st.app_main}>
          <div id={C.fullscreenNode} className={st.main_fullscreen} />

          <div className={st.app_main_table}>
            <TableInfo />
          </div>

          <div className={st.app_main_list}>
            <FullscreenWrapper>
              <ListInfo />
            </FullscreenWrapper>
          </div>

          <div className={st.app_main_map}>
            <FullscreenWrapper>
              <MapInfo />
            </FullscreenWrapper>
          </div>

          <div className={st.app_main_chart}>
            <FullscreenWrapper>
              <ChartInfo />
            </FullscreenWrapper>
          </div>
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
