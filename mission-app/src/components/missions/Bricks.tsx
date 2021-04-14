import React from 'react';
import { createUseStyles } from 'react-jss';
import { gradientColors } from '../../config/colors';
import { useBrickArray, useHoveredId, usePointerLocations } from '../../store/brickStore';
import { usePagination } from '../../store/globalStore';

import Brick from './Brick';

const getZIndex = (index: number, total: number) => Math.abs(Math.abs(total / 2 - index) - total / 2);

const Bricks = () => {
  const classes = useBricksStyles();

  const { hoveredId, setHoveredId } = useHoveredId();
  const { setPointerLocations } = usePointerLocations();
  const { bricks, currentIndex } = useBrickArray();
  const { paginated } = usePagination(bricks);

  const handleMouseMove = (event, id) => {
    console.log(id);

    event.stopPropagation();

    const pointerLocations = { x: event.clientX, y: event.clientY };
    setPointerLocations(pointerLocations);
    if (hoveredId !== id) {
      setHoveredId(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredId('');
  };

  const randomColor = () => {
    const e = Object.keys(gradientColors).map((key) => gradientColors[key]);

    return e[Math.floor(Math.random() * e.length)];
  };

  return (
    <div className={classes.scene}>
      {paginated.map((brick, i) => (
        <Brick
          colors={randomColor()}
          key={brick.id}
          height={40 + i * 20}
          hovered={hoveredId === brick.id}
          onMouseMove={(event) => handleMouseMove(event, brick.id)}
          onMouseLeave={handleMouseLeave}
          width={50}
          zIndex={getZIndex(i, 22)}
        />
      ))}
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
    // overflow: 'hidden',
    transform: 'translateY(300px)',
  },
}));
export default Bricks;
