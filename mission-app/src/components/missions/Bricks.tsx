import React from 'react';
import { createUseStyles } from 'react-jss';
import { useBrickArray, useHoveredId, usePointerLocations } from '../../store/brickStore';

import Brick from './Brick';

const getZIndex = (index: number, total: number) => Math.abs(Math.abs(total / 2 - index) - total / 2);

const Bricks = () => {
  const classes = useBricksStyles();

  const { hoveredId } = useHoveredId();
  const { setPointerLocations } = usePointerLocations();
  const { bricks, currentIndex } = useBrickArray();

  const handleMouseEnter = (event, index) => {
    console.log(index);
  };

  const handleMouseLeave = () => {};

  return (
    <div className={classes.scene}>
      {bricks.slice(1, 20).map((brick, i) => (
        <Brick
          color={brick.color}
          key={brick.id}
          height={30 + i * 15}
          hovered={hoveredId === brick.id}
          onMouseEnter={(event) => handleMouseEnter(event, i)}
          onMouseLeave={handleMouseLeave}
          width={50}
          zIndex={getZIndex(i, 22)}
        />
      ))}
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <Brick
          color=''
          height={50 + i * 10}
          key={i}
          hovered={!!hoveredId}
          onMouseEnter={(event) => handleMouseEnter(event, i)}
          onMouseLeave={handleMouseLeave}
          width={50}
          zIndex={getZIndex(i, 10)}
        />
      ))} */}
    </div>
  );
};

const useBricksStyles = createUseStyles((theme) => ({
  scene: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1200px',
    perspectiveOrigin: '70% -130px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
}));
export default Bricks;
