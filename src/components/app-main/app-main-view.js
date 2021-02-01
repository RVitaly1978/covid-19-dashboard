import React from 'react';

import { identifiers as C } from '../../constants';

import TableInfo from '../table-info';
import ListInfo from '../list-info';
import ChartInfo from '../chart-info';
import MapInfo from '../map-info';
import FullscreenWrapper from '../fullscreen-wrapper';

import st from './app-main.module.scss';

const AppMainView = ({ isFullScreen }) => {
  const appMainStyle = isFullScreen
    ? `${st.app_main} ${st.app_main__fullscreen}`
    : st.app_main;

  const fullscreenNodeStyle = isFullScreen
    ? st.main_fullscreen_container__fullscreen
    : st.main_fullscreen_container;

  const appMainDataStyle = isFullScreen
    ? st.app_main_data__fullscreen
    : st.app_main_data;

  return (
    <main className={appMainStyle}>
      <div id={C.fullscreenNode} className={fullscreenNodeStyle} />

      <div className={appMainDataStyle}>

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
    </main>
  );
}

export default AppMainView;
