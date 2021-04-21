import { Api } from "@react-three/cannon/";

export type ControlApi = Api[1];

export type Dims3 = [number, number, number];

export type ModelType = number;

export interface ModelData {
  position: Dims3;
  rotation: Dims3;
  modelType?: ModelType;
}

export interface BookModelData extends ModelData {
  id: number;
}

export interface BookContent {
  id: number;
  name: string;
  videoUrl: string;
}

export type MissionStatus = "finished" | "doing" | "no-assigin";

export type MissionType = "exercise" | "video";

export interface MissionData {
  courseId: number;
  courseName: string;
  missionId: number;
  missionName: string;
  status: MissionStatus;
  type: MissionType;
}

export interface MissionsData {
  [key: string]: MissionData[];
}

export type ModelName = "bookshelf" | "monitor" | "desk" | "npc" | "none";

export interface SuitablePositions {
  bookshelf: Dims3;
  monitor: Dims3;
  desk: Dims3;
  npc: Dims3;
}
