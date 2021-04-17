import React, { useEffect, useRef, useState } from "react";

// three
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useSpring, a } from "react-spring/three";
import { useThree } from "react-three-fiber";

// components
import BookContent from "../../dom/BookContent";

// hooks
import { useStudioStore } from "../../../store/studioStore";
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";

export default function Book({ position, rotation }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./public/3d/book/book.gltf"
  );
  const { actions, mixer } = useAnimations(animations, group);
  useEffect(() => {
    const animation = actions["Take 01"];
    animation.repetitions = 1;

    mixer.addEventListener("finished", (e) => {
      console.log(mixer);
      console.log("finished", e);
    });
  }, [actions]);

  const bookshelfData = useStudioStore((state) => state.bookshelfData);

  const playInOrder = () => {
    const animation = actions["Take 01"];
    animation.reset();
    animation.clampWhenFinished = true;
    animation.timeScale = 1;
    animation.play();
  };
  const playInReverse = () => {
    const animation = actions["Take 01"];
    animation.reset();
    animation.timeScale = -1;
    animation.pause = false;
    animation.play();
  };

  const {
    activity,
    startActivity,
    endActivity,
    subModelAnimation,
    playerInSuitablePosition,
  } = useSuitablePosition(bookshelfData, {
    position,
    rotation,
    startAnimationFunction: playInOrder,
    endAnimationFunction: playInReverse,
  });

  const handleOpenBook = () => {
    if (playerInSuitablePosition("请站到书柜前")) {
      startActivity("开始读书");
    }
  };
  const handleCloseBook = () => {
    endActivity("读书完成");
  };

  const openBook = subModelAnimation;

  return (
    <group ref={group} dispose={null} onClick={handleOpenBook}>
      <a.group
        name="RootNode_(gltf_orientation_matrix)"
        position={openBook.position}
        rotation={openBook.rotation}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive object={nodes.Armature_rootJoint} />
        {activity && (
          <Html center>
            <BookContent handleClose={handleCloseBook} />
          </Html>
        )}
        <skinnedMesh
          geometry={nodes.Book_0.geometry}
          material={materials.Base}
          skeleton={nodes.Book_0.skeleton}
        />
        <group
          position={[4.08, 1.01, 5.9]}
          rotation={[-0.27, 0.6, 1.93]}
          scale={[1, 1, 1]}
        />
      </a.group>
    </group>
  );
}

useGLTF.preload("./public/3d/book/book.gltf");
