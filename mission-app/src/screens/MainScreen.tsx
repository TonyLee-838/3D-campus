import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

import MissionCanvas from '../components/missions/MissionCanvas';
import PaginationButtons from '../components/missions/PaginationButtons';

import { AppStyleSheet } from '../types';

const MainScreen = () => {
  return (
    <div id='main-screen-container' style={styles.screen}>
      <Header />
      <Sidebar />
      <div id='main' style={styles.main}>
        <MissionCanvas />
        <PaginationButtons />
      </div>
    </div>
  );
};

const styles: AppStyleSheet = {
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
  },
};

export default MainScreen;
