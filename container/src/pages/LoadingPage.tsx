import React from 'react';
import { createUseStyles } from 'react-jss';

import Progress from '../components/Progress';

const LoadingPage = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Progress />
    </div>
  );
};

const useStyle = createUseStyles(() => ({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#04002e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
}));

export default LoadingPage;
