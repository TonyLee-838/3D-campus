import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createUseStyles } from 'react-jss';

//components
import QuizScreen from './screens/QuizScreen';
import { useStore } from './store/useStore';
import { getFakeQuiz } from './data/fakeQuiz';
import FinishScreen from './screens/FinishScreen';
import QuizListScreen from './screens/QuizListScreen';

const App = () => {
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.main}>
        <Switch>
          <Route path='/finish' component={FinishScreen} />
          <Route path='/quiz/:id' component={QuizScreen} />
          <Route path='/' component={QuizListScreen} />
        </Switch>
      </div>
    </Router>
  );
};

const useStyle = createUseStyles({
  main: {
    width: '100vw',
    height: '100vh',
  },
});

export default App;
