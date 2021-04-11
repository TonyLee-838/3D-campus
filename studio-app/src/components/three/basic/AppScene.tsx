import React, { ReactNode, Suspense } from 'react';

//Three
import { Physics } from '@react-three/cannon';

//Components
import AppCamera from './AppCamera';
import AppLights from './AppLights';
import AppControl from './AppControl';

import colors from '../../../config/colors';

interface AppCanvasProps {
  children: ReactNode;
}

const AppScene = ({ children }: AppCanvasProps) => {
  return (
    <>
      <AppCamera />
      {/* <fog attach='fog' args={[colors.white, 200, 450]} /> */}
      <AppLights />

      <Physics gravity={[0, -35, 0]}>
        <AppControl />
        <Suspense fallback={null}>{children}</Suspense>
      </Physics>
    </>
  );
};

export default AppScene;
