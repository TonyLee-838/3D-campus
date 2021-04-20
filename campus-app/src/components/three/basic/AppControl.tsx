import React from 'react';

//Three
import { useThree } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

//Components

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FirstPersonalControl from './FirstPersonControl';

const AppControl = () => {
  const { gl, camera } = useThree();

  return (
    <>
      <FirstPersonalControl />
      {/* <OrbitControls camera={camera} domElement={gl.domElement} /> */}
    </>
  );
};

export default AppControl;
