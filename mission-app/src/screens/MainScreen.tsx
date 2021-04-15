import React from 'react';
import { createUseStyles } from 'react-jss';

//Components
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import MissionCanvas from '../components/missions/MissionCanvas';
import PaginationButtons from '../components/missions/PaginationButtons';

// import { AppStyleSheet } from '../types';

const MainScreen = () => {
  const classes = useStyle();

  return (
    <div id='main-screen-container' className={classes.screen}>
      <Header />
      <div id='main' className={classes.main}>
        <Sidebar />
        <div id='content' className={classes.content}>
          <MissionCanvas />
          <PaginationButtons />
        </div>
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // padding: '30px',
  },
});

export default MainScreen;
