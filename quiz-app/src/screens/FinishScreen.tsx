import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';

//Components
import CheckMark from '../components/CheckMark';
import Screen from '../components/common/Screen';
import colors from '../config/color';

const FinishScreen = () => {
  const classes = useStyle();

  return (
    <Screen>
      <div className={classes.checkMark}>
        <CheckMark />
      </div>
      <Typography className={classes.message} variant='h3'>
        练习已提交!
      </Typography>
      <div className={classes.controls}>
        <Button variant='contained' className={classes.resultButton}>
          查看结果
        </Button>
        <Button variant='contained' className={classes.finishButton}>
          返回
        </Button>
      </div>
    </Screen>
  );
};

const useStyle = createUseStyles(
  {
    finishButton: {
      color: colors.white,
      fontSize: '18px',
      backgroundColor: colors.green,
    },
    resultButton: {
      fontSize: '18px',
      marginRight: '30px',
    },
    checkMark: {
      width: '25%',
    },
    controls: {
      marginTop: '50px',
    },
    message: {
      marginTop: '50px',
    },
  },
  { index: 9, classNamePrefix: 'finish' }
);

export default FinishScreen;
