import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';

//Components
import Header from '../components/common/Header';
import SubjectTabs from '../components/common/SubjectTabs';
import MissionCanvas from '../components/missions/MissionCanvas';
import PaginationButtons from '../components/missions/PaginationButtons';
import TodoList from '../components/missions/todos/TodoList';

// import { AppStyleSheet } from '../types';

const MainScreen = () => {
  const classes = useStyle();

  return (
    <div id='main-screen-container' className={classes.screen}>
      <Header />
      <div id='main' className={classes.main}>
        <TodoList />
        <Card id='canvas' className={classes.canvas}>
          <SubjectTabs />
          <MissionCanvas />
          <PaginationButtons />
        </Card>
      </div>
    </div>
  );
};

const useStyle = createUseStyles(
  {
    canvas: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      // height: '100%',
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
      '& > div': {
        margin: '15px',
      },
      // padding: '30px',
    },
  },
  { index: 7, classNamePrefix: 'mission' }
);

export default MainScreen;
