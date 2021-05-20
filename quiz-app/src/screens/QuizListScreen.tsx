import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import { LibraryBooks } from '@material-ui/icons';
import { Badge, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@material-ui/core';

import Screen from '../components/common/Screen';
import { useNavigation, useStore } from '../store/useStore';
import { getQuiz, getQuizList } from '../api';

const QuizListScreen = () => {
  const classes = useStyle();

  const { navigate } = useNavigation();

  const [quizzes, setQuizzes] = useState([]);
  const [activeQuiz, setActiveQuiz] = useState<number>(-1);

  const setQuiz = useStore((state) => state.setQuiz);

  const fetchQuizList = async () => {
    const list = await getQuizList();
    setQuizzes(list);
  };

  useEffect(() => {
    fetchQuizList();
  });

  const handleReset = () => {
    setActiveQuiz(-1);
  };

  const handleQuizSelect = (event, index) => {
    event.stopPropagation();
    setActiveQuiz(index);
  };

  const handleQuizEntry = async (id) => {
    const quiz = await getQuiz(id);
    setQuiz(quiz);

    navigate('quiz');
  };

  return (
    <Screen justifyContent='start' alignItems='start' onReset={handleReset}>
      <Typography className={classes.mainTitle} variant='h1'>
        练习台
      </Typography>
      <Typography className={classes.menuTitle} variant='h2'>
        待完成练习
        <Badge badgeContent={quizzes.length} color='secondary'>
          <LibraryBooks />
        </Badge>
      </Typography>
      <Stepper activeStep={activeQuiz} orientation='vertical'>
        {quizzes.map((quiz, index) => (
          <Step className={classes.quizContainer} completed={false} key={quiz.id}>
            <StepLabel onClick={(event) => handleQuizSelect(event, index)}>
              <Typography className={classes.quizTitle}>{quiz.title}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{quiz.description}</Typography>
              <Button onClick={() => handleQuizEntry(quiz.id)} variant='contained'>
                进入练习
              </Button>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Screen>
  );
};

const useStyle = createUseStyles(
  {
    mainTitle: {
      fontSize: '64px',
      margin: '45px 15px',
      // width: '100%',
    },
    menuTitle: {
      margin: '0px 15px',
      fontSize: '32px',
      // width: '100%',
      '& svg': {
        marginRight: '5px',
        width: '1.5rem',
      },
    },
    quizTitle: {
      fontSize: '20px',
    },
    quizContainer: {
      '& *': {
        cursor: 'pointer',
      },
    },
  },
  { index: 5 }
);

export default QuizListScreen;
