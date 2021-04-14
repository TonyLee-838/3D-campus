import React from 'react';
import { createUseStyles } from 'react-jss';

//UI
import { FormLabel, TextField } from '@material-ui/core';

interface TextEntryFormProps {
  question: TextEntryQuestion;
  index: number;
  value: string;
  onChange: (value: string) => void;
}

const TextEntryForm = ({ index, question, value, onChange }: TextEntryFormProps) => {
  const classes = useStyle();

  return (
    <>
      <FormLabel
        className={classes.title}
        component='legend'
      >{`${index}.\t(${question.score} 分)\t${question.title}`}</FormLabel>
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classes.input}
        label='答案'
        multiline
        rows={10}
        placeholder='请在此输入你的答案...'
        variant='outlined'
      />
    </>
  );
};

const useStyle = createUseStyles({
  title: {
    margin: '15px 5px',
  },
  input: {},
});

export default TextEntryForm;
