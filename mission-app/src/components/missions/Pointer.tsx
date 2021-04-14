import React, { useMemo, useRef, useState } from 'react';

import { createUseStyles } from 'react-jss';

import colors from '../../config/colors';

const Pointer = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <figure className={classes.head}></figure>
      <div className={classes.body}>
        <div className={classes.cube}>
          <div className={classes.front} />
          <div className={classes.back} />
          <div className={classes.left} />
          <div className={classes.right} />
          <div className={classes.top} />
          <div className={classes.bottom} />
        </div>
      </div>
    </div>
  );
};

const HEIGHT = 100;
const WIDTH = 25;
const DEPTH = 25;
const OFFSET = 12.5;

const useStyle = createUseStyles({
  '@keyframes head-hover': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
  '@keyframes body-rotate': {
    from: {
      transform: 'rotateY(0deg)',
    },
    to: {
      transform: 'rotateY(360deg)',
    },
  },
  container: {
    width: '150px',
    height: '150px',
  },

  body: {
    perspective: '1200px',
    perspectiveOrigin: '70% -130px',
    height: '100%',
    width: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  head: {
    // display: 'block',
    borderRadius: '50%',
    height: '35px',
    width: '35px',
    // margin: 0,
    background: 'radial-gradient(circle at 10px 10px, #5cabff, #000)',
    animation: '$head-hover 3s infinite',
    marginLeft: 22.5,
    marginBottom: 5,
  },

  cube: {
    animation: '$body-rotate 10s linear infinite',
    cursor: 'pointer',
    display: 'block',
    margin: '0 15px',
    position: 'relative',
    width: 50,
    boxShadow: '5px 5px 24px 0px rgba(0, 0, 0, 0.2)',
    transformStyle: 'preserve-3d',

    // transform: 'translateX(-15px)',
    // transition: 'all 0.15s ease-in-out',
    // transform: `rotateY(90deg) translateY(${-HEIGHT}px)`,

    '& div': {
      background: 'radial-gradient(circle at 10px 10px, #5cabff, #000)',
      opacity: 0.8,
      position: 'absolute',
      boxShadow: '0px -2px 2px rgba(20, 20, 20, 0.3)',
    },
  },
  front: {
    transform: `translate3d(0px,0px,${WIDTH}px) translateX(12.5px) translateZ(-12.5px)`,
    width: DEPTH,
    height: HEIGHT,
  },
  back: {
    transform: `rotateY(180deg) translateX(-${OFFSET}px) translateZ(${OFFSET}px)`,
    width: DEPTH,
    height: HEIGHT,
  },
  right: {
    transform: `rotateY(-270deg) translate3d(0px,0px,${
      DEPTH - WIDTH
    }px) translateX(${OFFSET}px) translateZ(${OFFSET}px)`,
    transformOrigin: 'top right',
    width: WIDTH,
    height: HEIGHT,
  },
  left: {
    transform: `rotateY(270deg) translateX(-${OFFSET}px) translateZ(-${OFFSET}px)`,
    transformOrigin: 'center left',
    width: WIDTH,
    height: HEIGHT,
  },
  top: {
    transform: `rotateX(90deg) rotateZ(-90deg) translate3d(${-WIDTH / 2}px,${
      -WIDTH / 2
    }px,0px) translateY(${OFFSET}px) translateX(${OFFSET}px) `,
    transformOrigin: 'top center',
    width: WIDTH,
    height: DEPTH,
  },
  bottom: {
    transform: `rotateX(90deg) translateY(${WIDTH}px) translateZ(${
      WIDTH - HEIGHT
    }px) translateY(-${OFFSET}px) translateX(${OFFSET}px)`,
    transformOrigin: 'bottom center',
    width: DEPTH,
    height: WIDTH,
  },
});

export default Pointer;
