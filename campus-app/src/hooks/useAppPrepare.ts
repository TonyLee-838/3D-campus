import { useEffect, useState } from "react";

// http
import { getCampusData } from "../http/campus";

// hooks
import { useCampusStore } from "../store/CampusStore";
import { getSuitablePosition } from "../hooks/useEnterStudio";

// types
import { IBlock, IBuilding } from "../types";

const SPECIAL_BUILDINGS_ID = ["xsadsa", "csese"];

let showEntireMap = false;

export const useAppPrepare = () => {
  const setBlocks = useCampusStore((state) => state.setBlocks);
  const setBuildings = useCampusStore((state) => state.setBuildings);
  const setSuitablePositions = useCampusStore(
    (state) => state.setSuitablePositions
  );

  const getData = async () => {
    const blocksData = await getCampusData();
    setBlocks(blocksData);

    const buildings: IBuilding[] = [];
    blocksData.forEach((block) => buildings.push(...block.buildings));
    setBuildings(buildings);

    const suitablePositions = {};
    buildings.forEach((building) => {
      const distance = SPECIAL_BUILDINGS_ID.includes(building.id) ? 60 : 40;
      suitablePositions[building.id] = getSuitablePosition(building, distance);
    });
    setSuitablePositions(suitablePositions);
  };

  const setShowEntireMap = useCampusStore((state) => state.setShowEntireMap);
  const handlePressM = (e: KeyboardEvent) => {
    if (e.key === "m") {
      setShowEntireMap((showEntireMap = !showEntireMap));
    }
  };
  useEffect(() => {
    getData();
    window.addEventListener("keypress", handlePressM);
    return () => {
      window.removeEventListener("keypress", handlePressM);
    };
  }, []);
};
