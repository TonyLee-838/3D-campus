import { useBox } from "@react-three/cannon";
import React from "react";
import colors from "../../../config/colors";

interface WallProps {
  rotationY: number;
}

const Wall = ({ rotationY }: WallProps) => {
  // const [wallRef] = useBox(() => ({
  //   type: "Static",
  // }));

  return (
    <group rotation={[0, rotationY, 0]} position={[0, 0, 0]}>
      <mesh
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[8, 20, 0]}
        // ref={wallRef}
      >
        <boxBufferGeometry args={[60, 0.01, 40]} />
        <meshPhongMaterial color={colors.oranges.tangerine} />
      </mesh>
    </group>
  );
};

export default Wall;
