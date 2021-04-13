import React, { useEffect, useRef, useState } from 'react';

// Three
import { useGLTF, useAnimations, Html } from '@react-three/drei';
import { useSpring, a } from 'react-spring/three';
import { useThree } from 'react-three-fiber';

// Components
import BookContent from '../../dom/BookContent';

// Hooks
import { useStudioStore } from '../../../store/studioStore';
import { useSuitablePosition } from '../../../hooks/useSuitablePosition';
// import { useConfiguredGLTF } from '../../../hooks/useConfiguredGLTF'

export default function Book({ position, rotation }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./public/3d/book/book.gltf');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    const animation = actions['Take 01'];
    animation.repetitions = 1;
    // console.log("booknode", nodes);
  }, [actions]);

  const { camera } = useThree();
  const [open, setOpen] = useState(false);

  const setMessage = useStudioStore((state) => state.setMessage);
  const setPointerLocked = useStudioStore((state) => state.setPointerLocked);
  const bookshelfData = useStudioStore((state) => state.bookshelfData);

  const {
    isPlayerInSuitablePosition,
    getSuitablePositionForSubTargetObject,
    getSuitableRotationForSubTargetObject,
    makePlayerSuitable,
  } = useSuitablePosition(camera, bookshelfData.position, bookshelfData.rotation);

  const openBook = useSpring({
    rotation: open ? getSuitableRotationForSubTargetObject() : rotation,
    position: open ? getSuitablePositionForSubTargetObject() : position,
  });

  const handleOpenBook = () => {
    // if (!isPlayerInSuitablePosition()) {
    //   return setMessage("请站到书架前指定位置！");
    // }
    setMessage('正在学习...');
    playInOrder();
    makePlayerSuitable();
  };

  const playInOrder = () => {
    setOpen(true);
    const animation = actions['Take 01'];
    animation.reset();
    animation.clampWhenFinished = true;
    animation.timeScale = 1;
    animation.play();
  };
  const playInReverse = () => {
    setOpen(false);
    const animation = actions['Take 01'];
    animation.reset();
    animation.timeScale = -1;
    animation.pause = false;
    animation.play();
  };

  const handleCloseBook = () => {
    setMessage('学习完成...');
    playInReverse();
    setPointerLocked(true);
  };

  return (
    <group ref={group} dispose={null} onClick={handleOpenBook}>
      <a.group
        name='RootNode_(gltf_orientation_matrix)'
        position={openBook.position}
        rotation={openBook.rotation}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive object={nodes.Armature_rootJoint} />
        {open && (
          <Html center>
            <BookContent handleClose={handleCloseBook} />
          </Html>
        )}
        <skinnedMesh
          geometry={nodes.Book_0.geometry}
          material={materials.Base}
          skeleton={nodes.Book_0.skeleton}
        />
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]} />
      </a.group>
    </group>
  );
}

useGLTF.preload('./public/3d/book/book.gltf');
