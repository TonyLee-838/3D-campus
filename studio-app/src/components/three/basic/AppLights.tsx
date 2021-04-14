import React, { useRef } from "react";

const AppLights = () => {
  const sunRef = useRef();

  return (
    <>
      <ambientLight color={"#ffffff"} intensity={0.7} />

      <directionalLight
        ref={sunRef}
        // castShadow
        color={"#fff0cc"}
        position={[-200, 200, 200]}
        intensity={1}
        // shadow-mapSize-width={1280}
        // shadow-mapSize-height={1280}
        // shadow-mapSize-left={-256}
        // shadow-mapSize-right={256}
        // shadow-mapSize-top={100}
        // shadow-mapSize-bottom={-2}
      />
      <directionalLight
        color={"#fff0cc"}
        position={[200, 200, -200]}
        intensity={1}
      />
    </>
  );
};

export default AppLights;
