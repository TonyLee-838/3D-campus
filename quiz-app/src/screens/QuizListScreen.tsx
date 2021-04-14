import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import {
  Badge,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { LibraryBooks } from "@material-ui/icons";

import Screen from "../components/common/Screen";
import { log } from "node:console";
import { useHistory } from "react-router";

const quizzes = [
  {
    id: "jdanofka",
    title: "互换性与测量技术 1",
    description: "章节 1.1.1 练习题",
  },
  {
    id: "gsgd",
    title: "互换性与测量技术 232",
    description: "章节 1.3.1 练习题",
  },
  {
    id: "fgsdg",
    title: "互换性与测量技术 3",
    description: "章节 2.1.1 练习题",
  },
];

const QuizListScreen = () => {
  const classes = useStyle();
  const history = useHistory();

  const [activeQuiz, setActiveQuiz] = useState<number>(-1);

  const handleReset = () => {
    setActiveQuiz(-1);
  };

  const handleQuizSelect = (event, index) => {
    event.stopPropagation();
    setActiveQuiz(index);
  };

  const handleQuizEntry = (id) => {
    history.replace(`/quiz/${id}`);
  };

  return (
    <Screen justifyContent="start" alignItems="start" onReset={handleReset}>
      <Typography className={classes.mainTitle} variant="h1">
        练习台
      </Typography>
      <Typography className={classes.menuTitle} variant="h2">
        待完成练习
        <Badge badgeContent={quizzes.length} color="secondary">
          <LibraryBooks />
        </Badge>
      </Typography>
      <Stepper activeStep={activeQuiz} orientation="vertical">
        {quizzes.map((quiz, index) => (
          <Step
            className={classes.quizContainer}
            completed={false}
            key={quiz.id}
          >
            <StepLabel onClick={(event) => handleQuizSelect(event, index)}>
              <Typography className={classes.quizTitle}>
                {quiz.title}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>{quiz.description}</Typography>
              <Button
                onClick={() => handleQuizEntry(quiz.id)}
                variant="contained"
              >
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
      fontSize: "128px",
      margin: "45px 15px",
      // width: '100%',
    },
    menuTitle: {
      margin: "0px 15px",
      fontSize: "64px",
      // width: '100%',
      "& svg": {
        marginRight: "5px",
        width: "1.5rem",
      },
    },
    quizTitle: {
      fontSize: "40px",
    },
    quizContainer: {
      "& *": {
        cursor: "pointer",
        fontSize: "36px",
      },
    },
  },
  { index: 5 }
);

export default QuizListScreen;
