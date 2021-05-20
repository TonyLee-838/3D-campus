import React, { useCallback } from 'react';
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
  const { paginated, currentPage, pageSize } = usePagination(bricks);

  const handleMouseMove = useCallback((event, id) => {
    event.stopPropagation();

    const pointerLocations = { x: event.clientX, y: event.clientY };
    setPointerLocations(pointerLocations);
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId('');
  }, []);

  return (
    <div className={classes.scene}>
      {paginated.map((brick, i) => {
        return (
          <Brick
            colors={brick.colors}
            key={brick.id}
            id={brick.id}
            height={40 + i * 20}
            hovered={hoveredId === brick.id}
            havePointer={pageSize * (currentPage - 1) + i === currentIndex}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            width={50}
            zIndex={getZIndex(i, 22)}
          />
        );
      })}
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
    position: 'relative',
    transform: 'translateY(300px)',
  },
}));
export default Bricks;
