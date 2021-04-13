// types
import { Dims3 } from "../types/index";
import { Camera } from "three";

// config
import { DISTANCE, SUITABLE_RADIUS, PLAYER_HEIGHT } from "../config/studio";

// hooks
import { useStudioStore } from "../store/studioStore";

const getDistanceBetweenTwoPoints = (
  x1: number,
  z1: number,
  x2: number,
  z2: number
) => {
  const dx = x1 - x2;
  const dz = z1 - z2;
  return Math.sqrt(dx * dx + dz * dz);
};

// Instructions for using this hook
// 1. The original point of target object must in the bottom center of this target object
// 2. The original direction of target object must point to the positive Z axis
// 3. The original direction of sub target object must point to the positive Z axis
// For example, bookshelf is a target object, book is a sub target object

export const useSuitablePosition = (
  camera: Camera,
  targetObjectPosition: Dims3,
  targetObjectRotation: Dims3
) => {
  const position = targetObjectPosition;
  const rotation = targetObjectRotation;

  const suitableX =
    Math.cos(Math.PI / 2 - rotation[1]) * DISTANCE + position[0];
  const suitableY = position[1] + 1;
  const suitableZ =
    Math.sin(Math.PI / 2 - rotation[1]) * DISTANCE + position[2];

  // the suitable position which player should in
  const getSuitablePositionForPlayer = (): Dims3 => {
    return [suitableX, 0.1, suitableZ];
  };

  // judege if player is in suitable position for target object
  const isPlayerInSuitablePosition = (): boolean => {
    const { x: cameraX, z: cameraZ } = camera.position;
    const distance = getDistanceBetweenTwoPoints(
      cameraX,
      cameraZ,
      suitableX,
      suitableZ
    );
    return distance <= SUITABLE_RADIUS;
  };

  const controlApi = useStudioStore((state) => state.controlApi);
  const setPointerLocked = useStudioStore((state) => state.setPointerLocked);

  // move player to a suitable position for target object
  const movePlayerToSuitablePosition = (): void => {
    controlApi.position.set(suitableX, suitableY, suitableZ);
    setTimeout(() => {
      console.log("position set");
      controlApi.position.set(suitableX, suitableY, suitableZ);
    }, 200);
  };

  // make player look at suitable direction for target object
  const playerLookAtSuitableDirection = (): void => {
    camera.lookAt(position[0], PLAYER_HEIGHT + 0.5, position[2]);
    setTimeout(() => {
      camera.lookAt(position[0], PLAYER_HEIGHT + 0.5, position[2]);
    }, 200);
  };

  const makePlayerSuitable = (): void => {
    movePlayerToSuitablePosition();
    playerLookAtSuitableDirection();
    setTimeout(() => {
      setPointerLocked(false);
    }, 200);
  };

  // suitable rotation that makes player can watch the front-side of sub target object
  const getSuitableRotationForSubTargetObject = (): Dims3 => {
    return rotation;
  };

  // get suitable position that makes player can watch sub target object in a good distance
  const getSuitablePositionForSubTargetObject = (
    distanceFromPlayer: number = 1 / 2
  ): Dims3 => {
    const fineTuningFactor = 0.05;
    const x =
      suitableX +
      (position[0] - suitableX) * distanceFromPlayer -
      fineTuningFactor;
    const y = PLAYER_HEIGHT + 0.6;
    const z =
      suitableZ +
      (position[2] - suitableZ) * distanceFromPlayer +
      fineTuningFactor;
    return [x, y, z];
  };

  return {
    getSuitablePositionForPlayer,
    isPlayerInSuitablePosition,
    // movePlayerToSuitablePosition,
    // playerLookAtSuitableDirection,
    makePlayerSuitable,
    getSuitableRotationForSubTargetObject,
    getSuitablePositionForSubTargetObject,
  };
};
