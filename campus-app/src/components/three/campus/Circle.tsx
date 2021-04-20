import React, { useEffect, useRef } from "react";
// three
import { useFrame } from "react-three-fiber";

// config
import colors from "../../../config/colors";

// type
import { Dims3 } from "../../../types";

import { SUITABLE_RADIUS } from "../../../config/campus";

interface CircleProps {
  position: Dims3;
}

const Circle = ({ position }: CircleProps) => {
  // console.log("position: ", position);
  const meshRef = useRef(null);
  useFrame(() => {
    if (meshRef && meshRef.current) {
      meshRef.current.rotation.z += 0.05;
    }
  });

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} ref={meshRef}>
      <circleBufferGeometry args={[SUITABLE_RADIUS, 10]} />
      <meshBasicMaterial color={colors.reds.watermelon} />
    </mesh>
  );
};

export default Circle;
