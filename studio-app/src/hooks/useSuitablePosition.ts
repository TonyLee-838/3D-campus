import { useEffect, useRef, useState } from "react";

// three
import { useFrame, useThree } from "react-three-fiber";
import { SpringValue, useSpring } from "react-spring/three";

// hooks
import { useStudioStore } from "../store/studioStore";

// types
import { Dims3, ModelData, ModelName, SuitablePositions } from "../types/index";

// utils
import { getDistanceOfTwoPoints } from "../utils/calculate";

interface Config {
  // suitable distance that target model away from user
  distance?: number;
  // height where camera look at (in other word,it's height of user)
  heightOfLookAt?: number;
  // the fraction distance between user and target model, default is 1/3
  distanceFraction?: number;
  // the height which the positionY of sub model should add
  heightOfSubModelFineTune?: number;
  // this name is for getting suitable position from store
  // if it's undefined, this hook will calculte suitable position again
  modelName?: ModelName;
  // a parameter for NPC model
  lookAtPosition?: Dims3;
}

interface SubModelData extends ModelData {
  startAnimationFunction?: () => void;
  endAnimationFunction?: () => void;
}

const defaultConfig: Config = {
  distance: 2.5,
  heightOfLookAt: 2.3,
  distanceFraction: 1 / 2,
  heightOfSubModelFineTune: 0.2,
  modelName: "none",
  lookAtPosition: null,
};

export const useSuitablePosition = (
  modelData: ModelData,
  subModelData?: SubModelData,
  config: Config = defaultConfig
) => {
  // init
  const { camera } = useThree();
  const [activity, setActivity] = useState<boolean>(false);
  const controlApi = useStudioStore((state) => state.controlApi);
  const suitablePositions = useStudioStore((state) => state.suitablePositions);
  const { position: modelPosition, rotation: modelRotation } = modelData;
  const { position: subModelPosition, rotation: subModelRotation } =
    subModelData || modelData;

  Object.keys(defaultConfig).forEach((key) => {
    config[key] = config[key] || defaultConfig[key];
  });

  const [suitableX, suitableY, suitableZ] =
    suitablePositions[config.modelName] ||
    getSuitablePosition(modelData, config.distance);

  const startActivity = (): void => {
    const lookAtPosition = config.lookAtPosition || [
      modelPosition[0],
      config.heightOfLookAt,
      modelPosition[2],
    ];
    controlApi.position.set(suitableX, 1, suitableZ);
    camera.lookAt(lookAtPosition[0], lookAtPosition[1], lookAtPosition[2]);
    if (subModelData) {
      setActivity(true);
      if (subModelData.startAnimationFunction)
        subModelData.startAnimationFunction();
    }
    setTimeout(() => {
      controlApi.position.set(suitableX, 1, suitableZ);
      camera.lookAt(lookAtPosition[0], lookAtPosition[1], lookAtPosition[2]);
    }, 200);
  };

  const endActivity = (): void => {
    if (subModelData) {
      setActivity(false);
      if (subModelData.endAnimationFunction)
        subModelData.endAnimationFunction();
    }
  };

  // sub-model animation
  const getSubModelAnimation = (): { position: Dims3; rotation: Dims3 } => {
    const rotation = modelRotation;
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
    activity,
    subModelAnimation,
    startActivity,
    endActivity,
  };
};

export const getSuitablePosition = (
  modelData: ModelData,
  distance: number = defaultConfig.distance
): Dims3 => {
  const modelPosition = modelData.position;
  const modelRotation = modelData.rotation;
  const suitableX =
    Math.cos(Math.PI / 2 - modelRotation[1]) * distance + modelPosition[0];
  // const suitableY = modelPosition[1] + 1;
  const suitableZ =
    Math.sin(Math.PI / 2 - modelRotation[1]) * distance + modelPosition[2];
  return [suitableX, 0.1, suitableZ];
};

// const add = (array1: number[], array2: number[]) => {
//   return array1.reduce((result, number, index) => {
//     result[index] = number + array2[index];

//     return result;
//   }, []);
// };

// export const getSuitablePositions = (modelsData: ModelData[]) => {
//   const suitablePositions = [];
//   modelsData.forEach((data) => {
//     const { suitablePositionForPlayer } = useSuitablePosition(data);
//     suitablePositions.push(suitablePositionForPlayer);
//   });
//   return suitablePositions;
// };
