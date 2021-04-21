import { useEffect, useRef } from "react";

// three
import { useThree, useFrame } from "react-three-fiber";

// hooks
import { useStudioStore } from "../store/studioStore";

// utils
import { getDistanceOfTwoPoints } from "../utils/calculate";

// types
import { Dims3, ModelName } from "../types";

interface Config {
  // the maxinum distance between player and suitable position
  maxDistance?: number;
  // show this message when the player in suitable position
  successMessage?: string;
  // show this message to help player quit at anytime
  quitMessage?: string;
}

const defaultConfig: Config = {
  maxDistance: 2,
  successMessage: "按E进入学习",
  quitMessage: "按E可退出此项学习",
};

export const useMouseControl = (
  modelName: ModelName,
  config: Config = defaultConfig
) => {
  const { camera } = useThree();
  const setMessage = useStudioStore((state) => state.setMessage);
  const suitablePositions = useStudioStore((state) => state.suitablePositions);
  const setPointerLocked = useStudioStore((state) => state.setPointerLocked);

  const pointerLockControlRef = useStudioStore(
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
  };

  const endReady = (): void => {
    // console.log("endREADY: ");
    setPointerLocked(true);
    setMessage(config.successMessage);
    pointerLockControlRef.lock();
    pointerLockControlRef.connect();
  };

  const handlePressE = (e: KeyboardEvent) => {
    // if (e.key === "q") console.log("ready.current: ", ready.current);

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
    // console.log("use-effect");
    window.addEventListener("keypress", handlePressE);
    return () => {
      window.removeEventListener("keypress", handlePressE);
    };
  }, []);

  const suitablePosition = suitablePositions[modelName];
  useFrame(() => {
    const distance = getDistanceOfTwoPoints(
      camera.position.x,
      camera.position.z,
      suitablePosition[0],
      suitablePosition[2]
    );
    suitability.current = distance < config.maxDistance;
    if (suitability.current && !lastSuitability.current) {
      setMessage(config.successMessage);
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
