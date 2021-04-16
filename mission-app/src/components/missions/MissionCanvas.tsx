import React from 'react';
import { createUseStyles } from 'react-jss';

//Components
import Bricks from './Bricks';
import MissionInfoCard from './MissionInfoCard';

//Store
import { useHoveredId } from '../../store/brickStore';

const MissionCanvas = () => {
  const { hoveredId } = useHoveredId();

  const classes = useStyle();

  return (
    <div id='mission-canvas-container' className={classes.container}>
      <Bricks />
      {hoveredId && <MissionInfoCard />}
    </div>
  );
};

const useStyle = createUseStyles(
  {
    container: {
      width: '100%',
      height: '100%',
    },
  },
  { index: 10 }
);

export default MissionCanvas;
