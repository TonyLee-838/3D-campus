import React from 'react';

import { Canvas } from '@react-three/fiber';
import { Button, ButtonGroup, Card, CardContent } from '@material-ui/core';
import Bricks from './Bricks';
import Lights from './Lights';
import Pointer from './Pointer';

import { AppStyleSheet } from '../../types';
import MissionInfoCard from './MissionInfoCard';
import { useHoveredId } from '../../store/brickStore';

const MissionCanvas = () => {
  const { hoveredId } = useHoveredId();

  return (
    <div style={styles.container}>
      <div style={styles.canvasContainer}>
        <div style={styles.pointer}>{/* <Pointer /> */}</div>
        <Bricks />
      </div>
      {hoveredId && <MissionInfoCard />}
    </div>
  );
};

const styles: AppStyleSheet = {
  canvasContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  pointer: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    zIndex: 99,
  },
  bricks: {},
};

export default MissionCanvas;
