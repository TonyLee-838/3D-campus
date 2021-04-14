import React from "react";

// config
import colors from "../../../config/colors";

const Ceiling = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 30, 0]}>
      <planeBufferGeometry args={[60, 60]} />
      <meshPhongMaterial color={colors.white} />
    </mesh>
  );
};

export default Ceiling;
