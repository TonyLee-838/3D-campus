import React from 'react';
import { createUseStyles } from 'react-jss';

import { Card, CardContent, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

const fakeMissions = {};

const TodoList = () => {
  const classes = useStyle();

  return (
    <Card id='current-mission' className={classes.container}>
      <Typography variant='h3'>任务列表</Typography>
      <div className={classes.stepper}>
        <Stepper activeStep={-1} orientation='vertical'>
          <Step>
            <StepLabel>111</StepLabel>
          </Step>
          <Step>
            <StepLabel>111</StepLabel>
          </Step>
          <Step>
            <StepLabel>111</StepLabel>
          </Step>
          <Step>
            <StepLabel>111</StepLabel>
          </Step>
        </Stepper>
      </div>
    </Card>
  );
};

const useStyle = createUseStyles({
  container: {
    width: '450px',
    // height: '100%',
    backgroundColor: 'red',
    padding: '15px',
  },
  stepper: {
    width: '100%',
  },
});

export default TodoList;
