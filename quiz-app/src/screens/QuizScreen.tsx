import React from 'react';
import { createUseStyles } from 'react-jss';

//Components
import QuestionForm from '../components/QuestionForm';
import FormControl from '../components/FormControl';
import Screen from '../components/common/Screen';

const QuizScreen = () => {
  return (
    <Screen>
      <QuestionForm />
      <FormControl />
    </Screen>
  );
};

const useStyle = createUseStyles({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d7d7d7',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    padding: '30px 50px',
    backgroundColor: 'red',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizScreen;
