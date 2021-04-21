import React, { useRef } from "react";

// three
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "react-three-fiber";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useMouseControl } from "../../../hooks/useMouseControl";
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";

type GLTFResult = GLTF & {
  nodes: {
    网格294: THREE.Mesh;
    网格294_1: THREE.Mesh;
    网格294_2: THREE.Mesh;
    网格294_3: THREE.Mesh;
    网格294_4: THREE.Mesh;
    网格294_5: THREE.Mesh;
    网格294_6: THREE.Mesh;
    网格294_7: THREE.Mesh;
    网格294_8: THREE.Mesh;
    网格294_9: THREE.Mesh;
    网格294_10: THREE.Mesh;
    网格294_11: THREE.Mesh;
    网格294_12: THREE.Mesh;
    网格294_13: THREE.Mesh;
    网格294_14: THREE.Mesh;
    网格294_15: THREE.Mesh;
  };
  materials: {
    ["Material #25"]: THREE.MeshStandardMaterial;
    ["01 - Default.002"]: THREE.MeshStandardMaterial;
    ["金属架.001"]: THREE.MeshStandardMaterial;
    plant: THREE.MeshStandardMaterial;
    胡桃木: THREE.MeshStandardMaterial;
    ["01 - Default.001"]: THREE.MeshStandardMaterial;
    ["DARK BROWN MATTE"]: THREE.MeshStandardMaterial;
    bookgreen: THREE.MeshStandardMaterial;
    ["玻璃.001"]: THREE.MeshStandardMaterial;
    ["鹅卵石.001"]: THREE.MeshStandardMaterial;
    ["干支.001"]: THREE.MeshStandardMaterial;
    bookpagewhite: THREE.MeshStandardMaterial;
    bookred: THREE.MeshStandardMaterial;
    ["BOOK COVER.001"]: THREE.MeshStandardMaterial;
    ["DARK BROWN MATTE.001"]: THREE.MeshStandardMaterial;
    bookblue: THREE.MeshStandardMaterial;
  };
};

export default function Bookshelf(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "./public/3d/common/bookshelf.glb"
  ) as GLTFResult;
  const { position, rotation } = useStudioStore((state) => state.bookshelfData);

  useMouseControl("bookshelf");

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
    >
      <group
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.06, -0.06, -0.06]}
      >
        <mesh
          geometry={nodes.网格294.geometry}
          material={materials["Material #25"]}
        />
        <mesh
          geometry={nodes.网格294_1.geometry}
          material={materials["01 - Default.002"]}
        />
        <mesh
          geometry={nodes.网格294_2.geometry}
          material={materials["金属架.001"]}
        />
        <mesh geometry={nodes.网格294_3.geometry} material={materials.plant} />
        <mesh geometry={nodes.网格294_4.geometry} material={materials.胡桃木} />
        <mesh
          geometry={nodes.网格294_5.geometry}
          material={materials["01 - Default.001"]}
        />
        <mesh
          geometry={nodes.网格294_6.geometry}
          material={materials["DARK BROWN MATTE"]}
        />
        <mesh
          geometry={nodes.网格294_7.geometry}
          material={materials.bookgreen}
        />
        <mesh
          geometry={nodes.网格294_8.geometry}
          material={materials["玻璃.001"]}
        />
        <mesh
          geometry={nodes.网格294_9.geometry}
          material={materials["鹅卵石.001"]}
        />
        <mesh
          geometry={nodes.网格294_10.geometry}
          material={materials["干支.001"]}
        />
        <mesh
          geometry={nodes.网格294_11.geometry}
          material={materials.bookpagewhite}
        />
        <mesh
          geometry={nodes.网格294_12.geometry}
          material={materials.bookred}
        />
        <mesh
          geometry={nodes.网格294_13.geometry}
          material={materials["BOOK COVER.001"]}
        />
        <mesh
          geometry={nodes.网格294_14.geometry}
          material={materials["DARK BROWN MATTE.001"]}
        />
        <mesh
          geometry={nodes.网格294_15.geometry}
          material={materials.bookblue}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./public/3d/common/bookshelf.glb");
