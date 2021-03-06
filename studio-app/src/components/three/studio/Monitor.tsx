import React, { useEffect, useRef } from "react";

// components
import Mission from "../../dom/Mission";

// three
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";
import { useMouseControl } from "../../../hooks/useMouseControl";

type GLTFResult = GLTF & {
  nodes: {
    网格001: THREE.Mesh;
    网格001_1: THREE.Mesh;
    网格001_2: THREE.Mesh;
    网格001_3: THREE.Mesh;
    网格001_4: THREE.Mesh;
  };
  materials: {
    ["2 - Default.001"]: THREE.MeshStandardMaterial;
    ["2.001"]: THREE.MeshStandardMaterial;
    ["灯.001"]: THREE.MeshStandardMaterial;
    ["1.001"]: THREE.MeshStandardMaterial;
    ["Metal_Chrome.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Monitor(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "./public/3d/common/monitor.glb"
  ) as GLTFResult;
  const monitorData = useStudioStore((state) => state.monitorData);
  const { startActivity } = useSuitablePosition(monitorData, null, {
    heightOfLookAt: 3.3,
    modelName: "monitor",
  });

  const { ready } = useMouseControl("monitor");
  useEffect(() => {
    if (ready.current) {
      startActivity();
    }
  }, [ready.current]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={monitorData.position}
      rotation={monitorData.rotation}
      scale={[0.016, 0.018, 0.018]}
    >
      <Mission />
      <group rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1.05]}>
        <mesh
          geometry={nodes.网格001.geometry}
          material={materials["2 - Default.001"]}
        />
        <mesh
          geometry={nodes.网格001_1.geometry}
          material={materials["2.001"]}
        />
        <mesh
          geometry={nodes.网格001_2.geometry}
          material={materials["灯.001"]}
        />
        <mesh
          geometry={nodes.网格001_3.geometry}
          material={materials["1.001"]}
        />
        <mesh
          geometry={nodes.网格001_4.geometry}
          material={materials["Metal_Chrome.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./public/3d/common/monitor.glb");
