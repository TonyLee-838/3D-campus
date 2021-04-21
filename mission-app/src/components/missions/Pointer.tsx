import React from 'react';

import { createUseStyles } from 'react-jss';

const HOST = 'http://10.139.94.106:8081';

const Pointer = () => {
  const classes = useStyle();

  return <img src={`${HOST}/public/pointer.gif`} alt='pointer' className={classes.pointer} />;
};

const useStyle = createUseStyles({
  pointer: {
    position: 'absolute',
    transform: 'rotate3d(0,1,0,90deg) translate(-20px,-110px)',
    zIndex: 99,
  },
});

export default Pointer;
