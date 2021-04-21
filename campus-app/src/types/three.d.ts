export type KeyType = 'KeyW' | 'KeyA' | 'KeyS' | 'KeyD' | 'Space';

export type MovementType = 'moveForward' | 'moveBackward' | 'moveLeft' | 'moveRight' | 'jump';

export type KeyMap = {
  [key in KeyType]: MovementType;
};
export type MovementMap = {
  [key in MovementType]: boolean;
};

export type Dims2 = [number, number];
export type Dims3 = [number, number, number];

export interface IRoad {
  from: Dims2;
  to: Dims2;
}

export type BuildingModelType = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8';

export interface IBuilding {
  id: string;
  colors?: {
    primary: string;
    secondary?: string;
  };
  scale?: number;
  position: Dims2;
  rotationY?: number;
  model: BuildingModelType;
  name?: string;
}

export interface IBlock {
  position: Dims2;
  dimensions: Dims2;
  edgesHaveTrees: EdgeType[];
  edgesHaveLights: EdgeType[];
  buildings: IBuilding[];
}

export interface ISmallDecoration extends ExternalModel {
  type: '1' | '2' | '3' | '4' | '5';
}
export interface Intersection extends ExternalModel {
  crossWalkAmount: number;
}

export interface ExternalModel {
  position: Dims2;
  rotationY: number;
  scale?: number;
}

export type EdgeType = 'up' | 'down' | 'left' | 'right';

export type EdgeDecorations = {
  [key in EdgeType]: EdgeDecorationType[];
};

export type EdgeDecorationType = 'trees' | 'lights';

export type SuitablePosition = Dims2;

export interface SuitablePositions {
  // buildingId: [x,z]
  [key: string]: SuitablePosition;
}
