import create, { State } from 'zustand';

import { GradientColor, Mission, Subject } from '../types';

interface MissionStoreState extends State {
  missions: Mission[];
  subjects: Subject[];
  setMissions: (missions: Mission[]) => void;
  setSubjects: (subjects: Subject[]) => void;
}

export const useMissionStore = create<MissionStoreState>((setState) => ({
  missions: [],
  subjects: [],
  setMissions: (missions) => setState({ missions }),
  setSubjects: (subjects) => setState({ subjects }),
}));

export const useSubjects = () => {
  const { subjects, setSubjects } = useMissionStore();

  return { subjects, setSubjects };
};

export const useSubjectColorMap = () => {
  const subjects = useMissionStore((state) => state.subjects);

  return subjects.reduce((result, subject) => {
    result[subject.id] = subject.colors;

    return result;
  }, {} as { [index: string]: GradientColor });
};

export const useMissionById = (id: string) => {
  const missions = useMissionStore((state) => state.missions);

  return missions.find((mission) => mission.id === id);
};
