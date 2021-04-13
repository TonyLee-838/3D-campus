import React, { useEffect, useRef } from 'react';

//Three
import { useThree, useFrame } from 'react-three-fiber';
import { PointerLockControls } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { Mesh, Vector3 } from 'three';

//Hooks
import { usePlayerControls } from '../../../hooks/useUserControl';
import colors from '../../../config/colors';
import { useStudioStore } from '../../../store/studioStore';

const SPEED = 15;

const FirstPersonalControl = () => {
  const pointerLocked = useStudioStore((state) => state.pointerLocked);

  const { camera, gl } = useThree();

  const pointerControlRef = useRef<PointerLockControls>(null!);
  const fogRef = useRef<Mesh>();

  const { moveForward, moveBackward, moveLeft, moveRight, jump } = usePlayerControls();

  const [cylinderRef, api] = useSphere(() => ({
    fixedRotation: false,
    position: [0, 2, -4],
    args: 1,
    mass: 50,
    rotation: [0, 0, 0],
  }));

  const setControlApi = useStudioStore((state) => state.setControlApi);
  setControlApi(api);

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api]);

  useFrame(() => {
    // if pointerLocked === false, player can't control himself/herself
    if (!cylinderRef.current || !pointerLocked) return;

    const position = cylinderRef.current.position;
    camera.position.copy(position);
    camera.translateY(1.7);

    fogRef.current?.position.copy(position);

    const direction = new Vector3();

    const frontVector = new Vector3(0, 0, Number(moveBackward) - Number(moveForward));
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    //Allow Double-Jump
    if (jump && Math.abs(Number(velocity.current[1].toFixed(2))) < 0.05) {
      api.velocity.set(velocity.current[0], 20, velocity.current[2]);
    }
  });

  return (
    <>
      {/* {if pointerLocked === false, player can't control camera} */}
      {pointerLocked && (
        <PointerLockControls ref={pointerControlRef} camera={camera} domElement={gl.domElement} />
      )}

      <mesh ref={cylinderRef}>
        <sphereBufferGeometry args={[1.7 / 2]} />
        <meshBasicMaterial color={colors.oranges.carrot} />
      </mesh>
    </>
  );
};

export default FirstPersonalControl;
