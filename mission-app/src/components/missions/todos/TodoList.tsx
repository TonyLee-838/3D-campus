import React from 'react';
import { createUseStyles } from 'react-jss';

import { Card, CardContent, Chip, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { Create, LiveTv } from '@material-ui/icons';

const fakeMissions = {};

const TodoList = () => {
  const classes = useStyle();

  return (
    <Card id='current-mission' className={classes.container}>
      <Typography variant='h3'>任务列表</Typography>
      <div className={classes.stepper}>
        <Stepper activeStep={-1} orientation='vertical'>
          <Step>
            <StepLabel>
              <div className={classes.stepLabel}>
                <LiveTv />
                <Typography component='label'>观看Java课程 章节 1.2.3</Typography>
              </div>
              {/* <Chip icon={<LiveTv />} /> */}
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <div className={classes.stepLabel}>
                <Create />
                <Typography component='label'>完成Java课程練習 章节 1.2.5</Typography>
              </div>
              {/* <Chip icon={<LiveTv />} /> */}
            </StepLabel>
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
  stepLabel: {
    display: 'flex',
    alignItems: 'center',
    '& > * ': {
      marginRight: '10px',
    },
    // '& > svg': {
    //   fontSize: '1.5rem',
    // },
    '& > label': {
      fontSize: '1.2rem',
    },
  },
});

export default TodoList;
