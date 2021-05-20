import React from 'react';

import { createUseStyles } from 'react-jss';

//components
import QuizScreen from './screens/QuizScreen';
import { useNavigation } from './store/useStore';
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
