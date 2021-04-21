import { useHelper } from '@react-three/drei';
import React, { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

import colors from '../../../config/colors';

const AppLights = () => {
  const sunRef = useRef();

  // useHelper(sunRef, DirectionalLightHelper);
  return (
    <>
      <hemisphereLight args={[colors.blues.sky, colors.shadow, 0.6]} />
      <ambientLight intensity={0.35} />

      <directionalLight
        ref={sunRef}
        // castShadow
        color={'#fff0cc'}
        position={[-500, 1500, 500]}
        intensity={1}
        // shadow-mapSize-width={1280}
        // shadow-mapSize-height={1280}
        // shadow-mapSize-left={-1280}
        // shadow-mapSize-right={1280}
        // shadow-mapSize-top={100}
        // shadow-mapSize-bottom={-2}
      />
      {/* <directionalLight position={[0, 500, 0]} intensity={0.1} /> */}
      <pointLight position={[0, 500, 0]} intensity={0.44} color={'#fff0cc'} />
      <pointLight position={[700, 500, 0]} intensity={0.44} color={'#fff0cc'} />
      <pointLight position={[-700, 500, 0]} intensity={0.44} color={'#fff0cc'} />
      <pointLight position={[0, 500, 700]} intensity={0.44} color={'#fff0cc'} />
      <pointLight position={[0, 500, -700]} intensity={0.44} color={'#fff0cc'} />
      {/* <pointLight position={[10, 25, 10]} intensity={0.6} /> */}
    </>
  );
};

export default AppLights;
