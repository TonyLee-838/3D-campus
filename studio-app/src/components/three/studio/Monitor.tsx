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
    <group>
      <mesh ref={monitorRef} position={[15.5, 5.5, 13.5]} rotation={[Math.PI / 2, 0, 0]}>
        <Html transform center rotation={[-Math.PI / 2, Math.PI, 0]}>
          <div style={{ width: '820px', height: '380px' }}>
            <Suspense fallback={null}>
              <MissionApp />
            </Suspense>
          </div>
        </Html>
        <boxBufferGeometry args={[20.5, 0.75, 10]} />
        <meshBasicMaterial color={colors.blues.sky} transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

export default Monitor;
