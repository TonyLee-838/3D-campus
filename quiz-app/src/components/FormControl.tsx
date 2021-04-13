import React from 'react';
import { createUseStyles } from 'react-jss';

//UI
import { Button, MobileStepper, Typography } from '@material-ui/core';

import { useQuizProgress, useStore } from '../store/useStore';
import colors from '../config/color';
import { useHistory } from 'react-router';

const FormControl = () => {
  const classes = useStyle();
  const history = useHistory();

  const answers = useStore((state) => state.answers);
  const { finished, total } = useQuizProgress();

  const handleSubmit = () => {
    console.log(answers);
    history.push('/finish');
  };

  return (
    <div className={classes.buttonGroup}>
      <MobileStepper
        variant='progress'
        steps={total}
        position='static'
        activeStep={finished}
        nextButton={
          <Typography
            className={classes.stepperLabel}
            variant='h5'
          >{`${finished} / ${total}`}</Typography>
        }
        backButton={null}
        className={classes.stepper}
      />
      <Button variant='contained' disabled={finished < total} color='primary' onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
};

const useStyle = createUseStyles(
  {
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: '10px 35px',
    },
    stepper: {
      width: '300px',
      height: '20px',
      background: colors.white,
      '&  div': {
        width: '80%',
        borderRadius: '5px',
      },
    },
    stepperLabel: {
      fontSize: '16px',
    },
  },
  { index: 6, classNamePrefix: 'controls' }
);

export default FormControl;
