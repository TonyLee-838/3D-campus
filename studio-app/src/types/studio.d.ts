import { Api } from "@react-three/cannon/";

export type ControlApi = Api[1];

export type Dims3 = [number, number, number];

export type BookModelType = "b1" | "b2" | "b3";
export type BookshelfModelType = "b1" | "b2" | "b3";
export type MonitorModelType = "m1" | "m2" | "m3";
export type DeskModelType = "d1" | "d2" | "d3";

export interface BookshelfData {
  position: Dims3;
  rotation: Dims3;
  modelType: BookshelfModelType;
}

export interface BookData {
  id: number;
  position: Dims3;
  rotation: Dims3;
  modelType: BookModelType;
}

export interface MonitorData {
  position: Dims3;
  rotation: Dims3;
  modelType: MonitorModelType;
}

export interface DeskData {
  position: Dims3;
  rotation: Dims3;
  modelType: DeskModelType;
}

export type MissionStatus = "finished" | "doing" | "no-assigin";

export interface MissionData {
  courseId: number;
  courseName: string;
  missionId: number;
  missionName: string;
  status: MissionStatus;
}

export interface MissionsData {
  [key: string]: MissionData[];
}
