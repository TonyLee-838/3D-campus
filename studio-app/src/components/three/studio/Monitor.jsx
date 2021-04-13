import React, { useRef } from "react";

// hooks
import { useGLTF } from "@react-three/drei";
import { useStudioStore } from "../../../store/studioStore";

export default function Monitor() {
  const group = useRef();
  const { nodes, materials } = useGLTF("./3d/monitor/monitor.gltf");
  const monitorData = useStudioStore((state) => state.monitorData);
  const position = monitorData.position;
  const rotation = monitorData.rotation;

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      dispose={null}
      scale={[0.3, 0.2, 0.2]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.tv_tv_0.geometry}
            material={materials["material.001"]}
            position={[0.22, -0.06, -0.07]}
            rotation={[0, 0, 0]}
            scale={[1.34, 1.34, 1.34]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./3d/monitor/monitor.gltf");
