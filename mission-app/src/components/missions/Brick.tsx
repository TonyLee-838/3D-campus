import React, { MouseEventHandler, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { GradientColor } from '../../types';
import Pointer from './Pointer';

interface BrickProps {
  colors: GradientColor;
  depth?: number;
  height: number;
  id: string;
  margin?: number;
  hovered: boolean;
  havePointer: boolean;
  onMouseMove: (event, id) => void;
  onMouseLeave: () => void;
  width?: number;
  zIndex: number;
}

const getBackgroundStyle = (colors) => {
  const fromString = colors.from.map((color) => color + ' 0%');
  const toString = colors.to.map((color) => color + ' 100%');

  return `linear-gradient(to bottom, ${fromString},${toString})`;
};

const Brick = React.memo((props: BrickProps) => {
  const defaultProps = { width: 70, depth: 300, margin: 50 };
  const classes = useBrickStyles({ ...defaultProps, ...props });

  return (
    <div
      className={classes.cube}
      onMouseEnter={(e) => props.onMouseMove(e, props.id)}
      onMouseLeave={props.onMouseLeave}
    >
      {props.havePointer && <Pointer />}
      <div className={classes.front} />
      <div className={classes.back}></div>
      <div className={classes.left} />

      <div className={classes.right}></div>
      <div className={classes.top}>{/* <div className={classes.dot}></div> */}</div>
      <div className={classes.bottom} />
    </div>
  );
});

const useBrickStyles = createUseStyles<string, BrickProps>((theme) => ({
  dot: {
    width: 15,
    height: 15,
    borderRadius: 12.5,
    backgroundColor: 'red !important',
    opacity: 1,
  },
  wrapper: {
    width: 'max-content',
    height: 'max-content',
  },
  cube: {
    cursor: 'pointer',
    display: 'block',
    margin: '0 15px',
    position: 'relative',
    width: (props: BrickProps) => props.margin,
    boxShadow: '5px 5px 24px 0px rgba(0, 0, 0, 0.2)',
    transformStyle: 'preserve-3d',
    transition: 'all 0.15s ease-in-out',
    transform: ({ height, hovered }: BrickProps) =>
      `rotateY(90deg) translateY(${-height}px) ${hovered ? 'scale3d(1.05,1.05,1.05)' : ''}`,
    zIndex: (props: BrickProps) => props.zIndex,

    '& div': {
      background: (props: BrickProps) => getBackgroundStyle(props.colors),
      opacity: 0.6,
      position: 'absolute',
      boxShadow: '0px 0px 2px #ffffff',
    },
  },
  front: {
    transform: ({ width }: BrickProps) => `translate3d(0px,0px,${width}px)`,
    width: '300px',
    height: (props: BrickProps) => props.height,
  },
  back: {
    transform: `rotateY(180deg)`,
    width: '300px',
    height: (props: BrickProps) => props.height,
  },
  right: {
    transform: ({ depth, width }: BrickProps) =>
      `rotateY(-270deg) translate3d(0px,0px,${depth - width}px)`,
    transformOrigin: 'top right',
    width: (props: BrickProps) => props.width,
    height: (props: BrickProps) => props.height,
  },
  left: {
    transform: `rotateY(270deg)`,
    transformOrigin: 'center left',
    width: (props: BrickProps) => props.width,
    height: (props: BrickProps) => props.height,
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: ({ width }: BrickProps) =>
      `rotateX(90deg) rotateZ(-90deg) translate3d(${-width / 2}px,${-width / 2}px,0px)`,
    transformOrigin: 'top center',
    width: (props: BrickProps) => props.width,
    height: '300px',
  },
  bottom: {
    transform: ({ width, height }: BrickProps) =>
      `rotateX(90deg) translateY(${width}px) translateZ(${width - height}px)`,
    transformOrigin: 'bottom center',
    width: '300px',
    height: (props: BrickProps) => props.width,
  },
}));

export default Brick;
