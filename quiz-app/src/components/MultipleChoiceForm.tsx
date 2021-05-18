import React from 'react';

//UI
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface MultipleChoiceQuestionFormProps {
  index: number;
  onSelect: (value: string) => void;
  question: MultipleChoiceQuestion;
  selected: string;
}

const MultipleChoiceQuestionForm = ({
  selected,
  question,
  onSelect,
  index,
}: MultipleChoiceQuestionFormProps) => {
  return (
    <>
      <FormControl component='fieldset'>
        <FormLabel component='h3'>{`${index}.\t(${question.score} 分)\t${question.title}`}</FormLabel>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={selected || ''}
          onChange={(_, value) => onSelect(value)}
        >
          {question.options.map((option) => (
            <FormControlLabel
              value={option.label}
              key={option.id}
              control={<Radio />}
              label={`${option.label}.\t\t${option.content}`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MultipleChoiceQuestionForm;
