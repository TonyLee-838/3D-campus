import React, { Suspense, useRef } from 'react';

//Three
import { Mesh } from 'three';
import { Html } from '@react-three/drei';

//Config
import colors from '../../../config/colors';
import MissionApp from '../../dom/MissionApp';

const Monitor = () => {
  const monitorRef = useRef<Mesh>();

  return (
    <group position={[15.5, 3.5, 13.5]}>
      <Html
        transform
        center
        rotation={[0, Math.PI, 0]}
        scale={[0.7, 0.7, 0.7]}
        position={[-3, 4.7, 0]}

        // style={{ width: '120px', height: '180px' }}
      >
        <Suspense fallback={null}>
          <MissionApp />
        </Suspense>
      </Html>
      <mesh ref={monitorRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxBufferGeometry args={[43.5, 0.75, 30]} />
        <meshBasicMaterial color={colors.blues.sky} transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

export default Monitor;
