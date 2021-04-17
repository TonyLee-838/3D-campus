import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createUseStyles } from 'react-jss';

//components
import QuizScreen from './screens/QuizScreen';
import { useNavigation, useStore } from './store/useStore';
import { getFakeQuiz } from './data/fakeQuiz';
import FinishScreen from './screens/FinishScreen';
import QuizListScreen from './screens/QuizListScreen';

// const routes = {
//   Finish: <FinishScreen />,
//   Quiz: <QuizScreen />,
//   QuizList: <QuizListScreen />,
// };

const getScreen = (screen) => {
  switch (screen) {
    case 'finish':
      return FinishScreen;
    case 'quiz':
      return QuizScreen;

    default:
      return QuizListScreen;
  }
};
const App = () => {
  const classes = useStyle();
  const { screen } = useNavigation();

  const CurrentScreen = getScreen(screen);

  return (
    <div className={classes.main}>
      <CurrentScreen />
    </div>
  );
};

const useStyle = createUseStyles({
  main: {
    width: '100vw',
    height: '1800px',
  },
});

export default App;
