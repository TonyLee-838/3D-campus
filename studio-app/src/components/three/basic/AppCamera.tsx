import React from 'react';

//Three
import { PerspectiveCamera } from '@react-three/drei';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cameraConfig, devCameraConfig } from '../../../config/camera';

interface forwardProps {
  position?: [number, number, number];
  children?: any;
}

const AppCamera = (props: forwardProps) => {
  return (
    <PerspectiveCamera makeDefault position={props.position} {...cameraConfig}>
      {props.children}
    </PerspectiveCamera>
  );
};
export default AppCamera;
