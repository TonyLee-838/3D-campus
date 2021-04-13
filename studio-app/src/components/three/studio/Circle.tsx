import React, { useRef } from "react";
// three
import { useFrame } from "react-three-fiber";

// config
import colors from "../../../config/colors";
import { SUITABLE_RADIUS } from "../../../config/studio";

// type
import { Dims3 } from "../../../types";

interface CircleProps {
  position: Dims3;
}

const Circle = ({ position }: CircleProps) => {
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
