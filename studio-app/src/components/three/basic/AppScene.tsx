import React, { ReactNode, Suspense } from "react";

//Three
import { Physics } from "@react-three/cannon";

//Components
import AppCamera from "./AppCamera";
import AppLights from "./AppLights";
import FirstPersonalControl from "../basic/FirstPersonControl";

interface AppCanvasProps {
  children: ReactNode;
}

const AppScene = ({ children }: AppCanvasProps) => {
  return (
    <>
      <AppCamera />
      <AppLights />

      <Physics gravity={[0, -35, 0]}>
        <FirstPersonalControl />
        <Suspense fallback={null}>{children}</Suspense>
      </Physics>
    </>
  );
};

export default AppScene;
