import React from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows } from '@react-three/drei';

//components
// import CampusScene from './components/three/campus/CampusScene';
// import CoordinateSystem from './components/three/basic/CoordinateSystem';
import DomMain from './components/dom/DomMain';
import StudioScene from './components/three/studio/StudioScene';
import { AppStyleSheet } from './types';
// import StudioScene from './components/three/studio/StudioScene';

softShadows({
  frustum: 3.75, // Frustum width (default: 3.75) must be a float
  size: 0.005, // World size (default: 0.005) must be a float
  near: 9.5, // Near plane (default: 9.5) must be a float
  samples: 17, // Samples (default: 17) must be a int
  rings: 11, //
});

function App() {
  return (
    <div className='App' style={styles.app}>
      <DomMain />

      <Canvas mode='concurrent' shadows>
        <StudioScene />
      </Canvas>
    </div>
  );
}

const styles: AppStyleSheet = {
  app: {
    width: '100%',
    height: '100%',
  },
};

export default App;
