import React from "react";
import { createUseStyles } from "react-jss";

//UI
import { Card, CardContent, Divider, Typography } from "@material-ui/core";

//Components
import MultipleChoiceQuestionForm from "./MultipleChoiceForm";
import TextEntryForm from "./TextEntryForm";

//Store
import { useStore } from "../store/useStore";

const QuestionForm = () => {
  const { quiz, setAnswer, answers } = useStore();

  const classes = useStyle();

  const handleAnswer = (value: string, index: number) => {
    setAnswer(value, index);
  };

  return (
    <>
      <Card className={[classes.card, classes.header].join(" ")}>
        <Typography variant="h2" className={classes.title}>
          {quiz.title}
        </Typography>
        <Typography variant="h4" className={classes.description}>
          {quiz.description}
        </Typography>
      </Card>
      <Card className={[classes.card, classes.quiz].join(" ")}>
        <Divider />
        <CardContent className={classes.content}>
          {quiz.questions.map((question, index) =>
            question.type === "choice" ? (
              <MultipleChoiceQuestionForm
                index={index + 1}
                key={question.id}
                onSelect={(value) => handleAnswer(value, index)}
                question={question}
                selected={answers[index]}
              />
            ) : (
              <TextEntryForm
                key={question.id}
                question={question}
                index={index + 1}
                value={answers[index]}
                onChange={(value) => handleAnswer(value, index)}
              />
            )
          )}
        </CardContent>
      </Card>
    </>
  );
};

const useStyle = createUseStyles(
  {
    content: {},
    header: {
      marginBottom: "5px",
      padding: "5px 0",
      // top: -30,
      // position: 'sticky',
    },
    card: {
      position: "relative",
      width: "90%",
    },
    quiz: {
      height: "90%",
      overflow: "scroll !important",
      "& div": {
        display: "flex",
        flexDirection: "column",
        "& fieldset": {
          margin: "10px 0",
        },
      },
    },
    description: {
      margin: "5px 15px",
      fontSize: "16px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bolder",
      margin: "5px 15px",
    },
  },
  { index: 3 }
);

export default QuestionForm;
