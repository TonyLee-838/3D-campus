import React from 'react';
import { Html } from '@react-three/drei';

import MissionApp from '../external/MissionApp';

const Mission = () => {
  return (
    <Html transform scale={[8.2, 7.7, 7.7]} position={[0, 112, 0]}>
      <MissionApp />
    </Html>
  );
};

export default Mission;
