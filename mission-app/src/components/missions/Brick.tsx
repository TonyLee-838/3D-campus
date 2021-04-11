import React, { MouseEventHandler, useState } from 'react';

import { createUseStyles } from 'react-jss';
import colors from '../../config/colors';

interface BrickProps {
  color: string;
  depth?: number;
  height: number;
  margin?: number;
  hovered: boolean;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: () => void;
  width?: number;
  zIndex: number;
}

const Brick = (props: BrickProps) => {
  const defaultProps = { width: 70, depth: 300, margin: 50 };
  const classes = useBrickStyles({ ...defaultProps, ...props });

  return (
    <div className={classes.cube} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      <div className={classes.front} />
      <div className={classes.back} />
      <div className={classes.left} />
      <div className={classes.right} />
      <div className={classes.top} />
      <div className={classes.bottom} />
    </div>
  );
};

const useBrickStyles = createUseStyles<string, BrickProps>((theme) => ({
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
      background: (props: BrickProps) =>
        `linear-gradient(to bottom, ${colors.white} 0%, ${props.color} 70%)`,
      opacity: 0.8,
      position: 'absolute',
      boxShadow: '0px -2px 2px rgba(20, 20, 20, 0.3)',
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

const LENGTH = 10;
const getZIndex = (index: number, total: number) =>
  Math.floor(Math.abs(total / 2 - Math.abs(total / 2 - index)));

// const MyBricks = () => {
//   const classes = useBricksStyles();
//   return (
//     <div className={classes.scene}>
//       {Array.from({ length: LENGTH }).map((_, i) => (
//         <Brick color='' height={50 + i * 10} width={50} key={i} zIndex={getZIndex(i, LENGTH)} />
//       ))}
//     </div>
//   );
// };

// const useBricksStyles = createUseStyles((theme) => ({
//   scene: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // position: 'relative',
//     perspective: '1200px',
//     perspectiveOrigin: '70% -130px',
//     height: '100%',
//     width: '100%',
//   },
// }));

export default Brick;
