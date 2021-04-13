import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// hooks
import { useStudioStore } from "../../../store/studioStore";

export default function Desk(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./3d/desk/desk.gltf");
  const deskData = useStudioStore((state) => state.deskData);
  const { position, rotation } = deskData;
  return (
    <group
      ref={group}
      scale={[2.5, 2.5, 2.5]}
      dispose={null}
      rotation={rotation}
      position={position}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.None}
          position={[0, 0, 0]}
          rotation={[0, 0, -1.57]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./3d/desk/desk.gltf");
