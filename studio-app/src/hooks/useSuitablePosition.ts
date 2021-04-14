import { useState } from "react";

// three
import { useThree } from "react-three-fiber";
import { useSpring } from "react-spring/three";

// hooks
import { useStudioStore } from "../store/studioStore";

// types
import { Dims3, ModelData } from "../types/index";

// utils
import { getDistanceOfTwoPoints } from "../utils/calculate";

interface Config {
  // suitable distance that target model away from user
  distance?: number;
  // suitable circle radius
  suitableRadius?: number;
  // height where camera look at (in other word,it's height of user)
  heightOfLookAt?: number;
  // the fraction distance between user and target model, default is 1/3
  distanceFraction?: number;
  // the height which the positionY of sub model should add
  heightOfSubModelFineTune?: number;

  // rotateZ?: number;
}

interface SubModelData extends ModelData {
  startAnimationFunction?: () => void;
  endAnimationFunction?: () => void;
}

interface UseSuitablePosition {
  (modelData: ModelData, subModelData?: SubModelData, config?: Config);
}

const defaultConfig: Config = {
  distance: 2.5,
  heightOfLookAt: 2.3,
  distanceFraction: 1 / 2,
  heightOfSubModelFineTune: 0.2,
  suitableRadius: 1.2,
  // rotateZ: 0,
};

export const useSuitablePosition: UseSuitablePosition = (
  modelData,
  subModelData,
  config = defaultConfig
) => {
  // init
  const { camera } = useThree();
  const [activity, setActivity] = useState<boolean>(false);
  const setMessage = useStudioStore((state) => state.setMessage);
  const controlApi = useStudioStore((state) => state.controlApi);
  const setPointerLocked = useStudioStore((state) => state.setPointerLocked);
  const { position: modelPosition, rotation: modelRotation } = modelData;
  const { position: subModelPosition, rotation: subModelRotation } =
    subModelData || modelData;

  Object.keys(defaultConfig).forEach((key) => {
    config[key] = config[key] || defaultConfig[key];
  });

  const suitableX =
    Math.cos(Math.PI / 2 - modelRotation[1]) * config.distance +
    modelPosition[0];
  const suitableY = modelPosition[1] + 1;
  const suitableZ =
    Math.sin(Math.PI / 2 - modelRotation[1]) * config.distance +
    modelPosition[2];

  const suitablePositionForPlayer = [suitableX, 0.1, suitableZ];

  const playerInSuitablePosition = (message?: string): boolean => {
    const { x: cameraX, z: cameraZ } = camera.position;
    const distance = getDistanceOfTwoPoints(
      cameraX,
      cameraZ,
      suitableX,
      suitableZ
    );
    const result = distance <= config.suitableRadius;
    if (!result) setMessage(message);
    return result;
  };

  const startActivity = (message?: string): void => {
    setMessage(message);
    controlApi.position.set(suitableX, suitableY, suitableZ);
    camera.lookAt(modelPosition[0], config.heightOfLookAt, modelPosition[2]);
    if (subModelData) {
      setActivity(true);
      if (subModelData.startAnimationFunction)
        subModelData.startAnimationFunction();
    }
    setTimeout(() => {
      controlApi.position.set(suitableX, suitableY, suitableZ);
      camera.lookAt(modelPosition[0], config.heightOfLookAt, modelPosition[2]);
      setTimeout(() => {
        setPointerLocked(false);
      }, 100);
    }, 200);
  };

  const endActivity = (message?: string): void => {
    if (subModelData) {
      setActivity(false);
      if (subModelData.endAnimationFunction)
        subModelData.endAnimationFunction();
    }
    setMessage(message);
    setPointerLocked(true);
  };

  const getSubModelAnimation = (): { position: Dims3; rotation: Dims3 } => {
    const rotation: Dims3 = modelRotation;
    // rotation[2] += config.rotateZ;
    const fineTuningFactor = 0.05;
    const x =
      suitableX +
      (modelPosition[0] - suitableX) * config.distanceFraction -
      fineTuningFactor;
    const y = config.heightOfLookAt + config.heightOfSubModelFineTune;
    const z =
      suitableZ +
      (modelPosition[2] - suitableZ) * config.distanceFraction +
      fineTuningFactor;
    const position: Dims3 = [x, y, z];

    return { position, rotation };
  };

  const {
    position: animationPosition,
    rotation: animationRotation,
  } = getSubModelAnimation();

  const subModelAnimation = useSpring({
    position: activity ? animationPosition : subModelPosition,
    rotation: activity ? animationRotation : subModelRotation,
  });

  return {
    suitablePositionForPlayer,
    playerInSuitablePosition,
    startActivity,
    endActivity,
    activity,
    subModelAnimation,
  };
};

export const getSuitablePositions = (modelsData: ModelData[]) => {
  const suitablePositions = [];
  modelsData.forEach((data) => {
    const { suitablePositionForPlayer } = useSuitablePosition(data);
    suitablePositions.push(suitablePositionForPlayer);
  });
  return suitablePositions;
};
