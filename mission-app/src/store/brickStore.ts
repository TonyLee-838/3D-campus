import { useMemo } from "react";
import * as THREE from "three";
import create, { State } from "zustand";
import { gradientColors } from "../config/colors";
import { PointerLocations } from "../types";
import { useMissionStore, useSubjectColorMap } from "./missionStore";

interface BrickStoreState extends State {
  hoveredId: string;
  pointerLocations: PointerLocations;
  // currentPage:number,
  // pageSize:number,
  selectedSubjectId: string;

  setHoveredId: (id: string) => void;
  setPointerLocations: (location: PointerLocations) => void;
  setSelectedSubjectId: (subject: string) => void;
}

export const useBrickStore = create<BrickStoreState>((setState) => ({
  hoveredId: "",
  pointerLocations: { x: 0, y: 0 },
  selectedSubjectId: "All",

  setHoveredId: (id: string) => setState({ hoveredId: id }),
  setPointerLocations: (locations: PointerLocations) =>
    setState({ pointerLocations: locations }),
  setSelectedSubjectId: (subject: string) =>
    setState({ selectedSubjectId: subject }),
}));

export const useBrickArray = () => {
  const { missions } = useMissionStore();
  const { selectedSubjectId } = useBrickStore();

  const colorMap = useSubjectColorMap();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tempColor = new THREE.Color();

  return useMemo(() => {
    const filtered = missions.filter(
      (mission) =>
        selectedSubjectId === "All" || mission.subjectId === selectedSubjectId
    );

    const sorted = filtered.sort((m1, m2) => {
      if (!(m1.completedTime && m2.completedTime))
        return +m2.completed - +m1.completed;

      return m1.completedTime.getTime() - m2.completedTime.getTime();
    });

    const currentIndex = sorted.findIndex((mission) => !mission.completed) - 1;

    const bricks = sorted.map((mission) => ({
      id: mission.id,
      colors: mission.completed
        ? colorMap[mission.subjectId]
        : gradientColors.grey,
    }));

    return {
      bricks,
      currentIndex,
    };
  }, [colorMap, missions, selectedSubjectId, tempColor]);
};

export const useHoveredId = () => {
  const hoveredId = useBrickStore((state) => state.hoveredId);
  const setHoveredId = useBrickStore((state) => state.setHoveredId);

  return { hoveredId, setHoveredId };
};
export const usePointerLocations = () => {
  const pointerLocations = useBrickStore((state) => state.pointerLocations);
  const setPointerLocations = useBrickStore(
    (state) => state.setPointerLocations
  );

  return { pointerLocations, setPointerLocations };
};

// const array = [
//   { id: 1, value: true, weight: 100 },
//   { id: 2, value: true, weight: 132 },
//   { id: 3, value: false },
//   { id: 4, value: true, weight: 50 },
//   { id: 5, value: true, weight: 500 },
// ];

// const result = array.sort((a, b) => {
//   const completedNotEqual = +b.value - +a.value;
//   if (completedNotEqual) return completedNotEqual;

//   if (!a.weight || !b.weight) return 0;

//   return a.weight - b.weight;
//   // return Number(b.value) - Number(a.value);
//   // return +b.value - +a.value;
// });

// console.log(result);
