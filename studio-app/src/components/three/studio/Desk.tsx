import React, { useRef } from "react";

// three
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useMouseControl } from "../../../hooks/useMouseControl";

type GLTFResult = GLTF & {
  nodes: {
    网格045: THREE.Mesh;
    网格045_1: THREE.Mesh;
    网格045_2: THREE.Mesh;
    网格045_3: THREE.Mesh;
    网格045_4: THREE.Mesh;
    网格045_5: THREE.Mesh;
    网格045_6: THREE.Mesh;
    网格045_7: THREE.Mesh;
    网格045_8: THREE.Mesh;
    网格045_9: THREE.Mesh;
    网格045_10: THREE.Mesh;
    网格045_11: THREE.Mesh;
    网格045_12: THREE.Mesh;
    网格045_13: THREE.Mesh;
    网格045_14: THREE.Mesh;
    网格045_15: THREE.Mesh;
    网格045_16: THREE.Mesh;
    网格045_17: THREE.Mesh;
    网格045_18: THREE.Mesh;
    网格045_19: THREE.Mesh;
    网格045_20: THREE.Mesh;
  };
  materials: {
    ["BOOK COVER"]: THREE.MeshStandardMaterial;
    ["DARK BROWN MATTE.002"]: THREE.MeshStandardMaterial;
    ["胡桃木.001"]: THREE.MeshStandardMaterial;
    漆白: THREE.MeshStandardMaterial;
    ["Material #25.001"]: THREE.MeshStandardMaterial;
    H: THREE.MeshStandardMaterial;
    Z: THREE.MeshStandardMaterial;
    SENG: THREE.MeshStandardMaterial;
    PING: THREE.MeshStandardMaterial;
    NUI: THREE.MeshStandardMaterial;
    HUISHE: THREE.MeshStandardMaterial;
    ["Material #32"]: THREE.MeshStandardMaterial;
    ANU: THREE.MeshStandardMaterial;
    ["BLUE MATTE"]: THREE.MeshStandardMaterial;
    ["WHITE MATTE"]: THREE.MeshStandardMaterial;
    F: THREE.MeshStandardMaterial;
    Default: THREE.MeshStandardMaterial;
    ["TAN PLASTIC"]: THREE.MeshStandardMaterial;
    ["TAN PLSTC SHINY"]: THREE.MeshStandardMaterial;
    BUTTONS: THREE.MeshStandardMaterial;
    CHROME: THREE.MeshStandardMaterial;
  };
};

export default function Desk(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "./public/3d/common/desk.glb"
  ) as GLTFResult;
  const deskData = useStudioStore((state) => state.deskData);
  const { position, rotation } = deskData;
  // useActivity(position);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
    >
      <group scale={[0.0028, 0.002, 0.004]}>
        <mesh
          geometry={nodes.网格045.geometry}
          material={materials["BOOK COVER"]}
        />
        <mesh
          geometry={nodes.网格045_1.geometry}
          material={materials["DARK BROWN MATTE.002"]}
        />
        <mesh
          geometry={nodes.网格045_2.geometry}
          material={materials["胡桃木.001"]}
        />
        <mesh geometry={nodes.网格045_3.geometry} material={materials.漆白} />
        <mesh
          geometry={nodes.网格045_4.geometry}
          material={materials["Material #25.001"]}
        />
        <mesh geometry={nodes.网格045_5.geometry} material={materials.H} />
        <mesh geometry={nodes.网格045_6.geometry} material={materials.Z} />
        <mesh geometry={nodes.网格045_7.geometry} material={materials.SENG} />
        <mesh geometry={nodes.网格045_8.geometry} material={materials.PING} />
        <mesh geometry={nodes.网格045_9.geometry} material={materials.NUI} />
        <mesh
          geometry={nodes.网格045_10.geometry}
          material={materials.HUISHE}
        />
        <mesh
          geometry={nodes.网格045_11.geometry}
          material={materials["Material #32"]}
        />
        <mesh geometry={nodes.网格045_12.geometry} material={materials.ANU} />
        <mesh
          geometry={nodes.网格045_13.geometry}
          material={materials["BLUE MATTE"]}
        />
        <mesh
          geometry={nodes.网格045_14.geometry}
          material={materials["WHITE MATTE"]}
        />
        <mesh geometry={nodes.网格045_15.geometry} material={materials.F} />
        <mesh
          geometry={nodes.网格045_16.geometry}
          material={materials.Default}
        />
        <mesh
          geometry={nodes.网格045_17.geometry}
          material={materials["TAN PLASTIC"]}
        />
        <mesh
          geometry={nodes.网格045_18.geometry}
          material={materials["TAN PLSTC SHINY"]}
        />
        <mesh
          geometry={nodes.网格045_19.geometry}
          material={materials.BUTTONS}
        />
        <mesh
          geometry={nodes.网格045_20.geometry}
          material={materials.CHROME}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./public/3d/common/desk.glb");
