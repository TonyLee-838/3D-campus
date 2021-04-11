import { Canvas } from "react-three-fiber";
import { useEffect, useState } from "react";

export const TestComponent = ({ handleClick }) => {
  useEffect(() => {
    console.log("go");
  }, []);
  return (
    <mesh onClick={handleClick}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
};
