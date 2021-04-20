import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLightHelper } from "three";

import colors from "../../../config/colors";

const AppLights = () => {
  const sunRef = useRef();

  // useHelper(sunRef, DirectionalLightHelper);
  return (
    <>
      {/* <hemisphereLight args={[colors.blues.sky, colors.shadow, 0.6]} /> */}
      <ambientLight intensity={0.35} />

      <directionalLight
        ref={sunRef}
        castShadow
        color={"#fff0cc"}
        position={[-1000, 1500, 1000]}
        intensity={2.5}
        // shadow-mapSize-width={1280}
        // shadow-mapSize-height={1280}
        // shadow-mapSize-left={-256}
        // shadow-mapSize-right={256}
        // shadow-mapSize-top={100}
        // shadow-mapSize-bottom={-2}
      />
      <directionalLight position={[0, 500, 0]} intensity={0.1} />
      {/* <pointLight position={[0, 15, 0]} intensity={0.3} /> */}
      {/* <pointLight position={[10, 25, 10]} intensity={0.6} /> */}
    </>
  );
};

export default AppLights;
