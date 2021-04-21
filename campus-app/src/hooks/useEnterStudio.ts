import { useEffect, useRef } from "react";

// three
import { useThree, useFrame } from "react-three-fiber";

// hooks
import { useCampusStore } from "../store/CampusStore";

// utils
import { getDistanceOfTwoPoints } from "../utils/math";

// config
import { SUITABLE_RADIUS as MAXDistance } from "../config/campus";

interface Config {
  // the maxinum distance between player and suitable position
  maxDistance?: number;
  // show this message when the player in suitable position
  helpMessage?: string;
  // show this message to help player quit at anytime
  quitMessage?: string;
}

const defaultConfig: Config = {
  maxDistance: MAXDistance,
  helpMessage: "按E进入工作室，开始学习",
  quitMessage: "按E可离开该工作室",
};

export const useEnterSudio = (
  buildingId: string,
  config: Config = defaultConfig
) => {
  const { camera } = useThree();
  const setMessage = useCampusStore((state) => state.setMessage);
  const suitablePositions = useCampusStore((state) => state.suitablePositions);
  const setPointerLocked = useCampusStore((state) => state.setPointerLocked);
  const enterStudio = useCampusStore((state) => state.enterStudio);
  const pointerLockControlRef = useCampusStore(
    (state) => state.pointerLockControlRef
  );
  Object.keys(defaultConfig).forEach((key) => {
    config[key] = config[key] || defaultConfig[key];
  });

  // activity
  let lastSuitability = useRef<boolean>(false);
  let suitability = useRef<boolean>(false);
  let ready = useRef<boolean>(false);

  const startReady = (): void => {
    pointerLockControlRef.unlock();
    pointerLockControlRef.disconnect();
    setMessage(config.quitMessage);
    setPointerLocked(false);
    enterStudio(buildingId);
  };

  const endReady = (): void => {
    setPointerLocked(true);
    setMessage(config.helpMessage);
    pointerLockControlRef.lock();
    pointerLockControlRef.connect();
  };

  const handlePressE = (e: KeyboardEvent) => {
    if (e.key === "e" && suitability.current) {
      if (!ready.current) {
        ready.current = true;
        startReady();
      } else {
        ready.current = false;
        endReady();
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keypress", handlePressE);
    return () => {
      window.removeEventListener("keypress", handlePressE);
    };
  }, []);

  const suitablePosition = suitablePositions[buildingId];
  useFrame(() => {
    const distance = getDistanceOfTwoPoints(
      camera.position.x,
      camera.position.z,
      suitablePosition[0],
      suitablePosition[1]
    );
    suitability.current = distance < config.maxDistance;
    if (suitability.current && !lastSuitability.current) {
      setMessage(config.helpMessage);
    }
    if (!suitability.current && lastSuitability.current) {
      setMessage(null);
    }
    lastSuitability.current = suitability.current;
  });

  return {
    ready,
  };
};

import { Dims2, IBuilding } from "../types";

export const getSuitablePosition = (
  building: IBuilding,
  distance: number = 30
): Dims2 => {
  const modelPosition = building.position;
  const modelRotationY = building.rotationY || 0;
  const suitableX =
    Math.cos(Math.PI / 2 - modelRotationY) * distance + modelPosition[0];
  const suitableZ =
    Math.sin(Math.PI / 2 - modelRotationY) * distance + modelPosition[1];
  return [suitableX, suitableZ];
};
