import React, { useRef, useState } from "react";

// three
import { Html, useGLTF, useHelper } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";
import { useSpring, a } from "react-spring/three";
import { useBox } from "@react-three/cannon";
import Quiz from "../../dom/Quiz";
import { BoxHelper } from "three";

// type

type GLTFResult = GLTF & {
  nodes: {
    Plane001__0: THREE.Mesh;
  };
  materials: {
    fucccc: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "./public/3d/common/note.glb"
  ) as GLTFResult;
  const deskData = useStudioStore((state) => state.deskData);
  const { position, rotation } = useStudioStore((state) => state.noteData);

  // useHelper(group, BoxHelper, "red");

  const config = {
    distance: 2.5,
    heightOfLookAt: 2,
    heightOfSubModelFineTune: -0.25,
    // rotateZ: - Math.PI / 3,
  };

  const {
    playerInSuitablePosition,
    startActivity,
    endActivity,
    activity,
    subModelAnimation,
  } = useSuitablePosition(deskData, { position, rotation }, config);

  const handleClickNote = (e) => {
    e.stopPropagation();
    console.log(e.object);
    if (playerInSuitablePosition("请站到指定位置")) {
      startActivity("开始做习题");
      // setTimeout(() => {
      //   endActivity("取消做习题");
      // }, 3000);
    }
  };

  const handleCloseQuiz = () => {
    endActivity("取消");
  };

  return (
    <a.group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.02, 0.02, 0.02]}
      position={subModelAnimation.position}
      rotation={subModelAnimation.rotation}
      onClick={handleClickNote}
    >
      <Quiz onClick={handleCloseQuiz} />
      <group rotation={[0, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.16, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Plane001__0.geometry}
              material={materials.fucccc}
              position={[0.16, 0, 0]}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload("./public/3d/common/note.glb");
