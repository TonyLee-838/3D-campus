import { useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { InstancedMesh, Matrix4 } from "three";

const Road2 = () => {
  const texture = useTexture("./public/3d/road.asphalt.png");

  const ref = useRef<InstancedMesh>(null!);
  useEffect(() => {
    ref.current.setMatrixAt(0, new Matrix4());
  }, []);

  return (
    <instancedMesh ref={ref} count={5}>
      <planeBufferGeometry />
      <meshPhongMaterial map={texture} />
    </instancedMesh>
  );
};

export default Road2;
