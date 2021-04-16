import { useMemo } from 'react';
import create, { State } from 'zustand';
import shallow from 'zustand/shallow';

import { gradientColors } from '../config/colors';
import { PointerLocations } from '../types';
import { useMissionStore, useSubjectColorMap } from './missionStore';

interface BrickStoreState extends State {
  hoveredId: string;
  pointerLocations: PointerLocations;
  // currentPage:number,
  // pageSize:number,
  selectedSubjectIndex: number;

  setHoveredId: (id: string) => void;
  setPointerLocations: (location: PointerLocations) => void;
  setSelectedSubjectIndex: (index: number) => void;
}

export const useBrickStore = create<BrickStoreState>((setState) => ({
  hoveredId: '',
  pointerLocations: { x: 0, y: 0 },
  selectedSubjectIndex: -1,

  setHoveredId: (id: string) => setState({ hoveredId: id }),
  setPointerLocations: (locations: PointerLocations) => setState({ pointerLocations: locations }),
  setSelectedSubjectIndex: (index: number) => setState({ selectedSubjectIndex: index }),
}));

export const useBrickArray = () => {
  const { missions, subjects } = useMissionStore(
    (state) => ({ missions: state.missions, subjects: state.subjects }),
    shallow
  );
  const selectedSubjectIndex = useBrickStore((state) => state.selectedSubjectIndex);

  const colorMap = useSubjectColorMap();

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return useMemo(() => {
    const filtered = missions.filter(
      (mission) => selectedSubjectIndex === -1 || mission.subjectId === subjects[selectedSubjectIndex].id
    );

    const sorted = filtered.sort((m1, m2) => {
      if (!(m1.completedTime && m2.completedTime)) return +m2.completed - +m1.completed;

      return m1.completedTime.getTime() - m2.completedTime.getTime();
    });

    const currentIndex = sorted.findIndex((mission) => !mission.completed) - 1;

    const bricks = sorted.map((mission) => ({
      id: mission.id,
      colors: mission.completed ? colorMap[mission.subjectId] : gradientColors.grey,
    }));

    return {
      bricks,
      currentIndex,
    };
  }, [colorMap, missions, selectedSubjectIndex]);
};

export const useHoveredId = () => {
  // const hoveredId = useBrickStore((state) => state.hoveredId);
  // const setHoveredId = useBrickStore((state) => state.setHoveredId);

  return useBrickStore(
    (state) => ({ hoveredId: state.hoveredId, setHoveredId: state.setHoveredId }),
    shallow
  );
};
export const usePointerLocations = () => {
  // const pointerLocations = useBrickStore((state) => state.pointerLocations);
  // const setPointerLocations = useBrickStore((state) => state.setPointerLocations);

  return useBrickStore(
    (state) => ({
      pointerLocations: state.pointerLocations,
      setPointerLocations: state.setPointerLocations,
    }),
    shallow
  );

  // return { pointerLocations, setPointerLocations };
};
