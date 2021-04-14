import { CSSProperties } from 'react';

export interface AppStyleSheet {
  [index: string]: CSSProperties;
}

export interface PointerLocations {
  x: number;
  y: number;
}

export interface Mission {
  id: string;
  description: string;
  completed: boolean;
  completedTime?: Date;
  current: number;
  subjectId: string;
}

export interface Subject {
  id: string;
  name: string;
  total: number;
  colors: {
    from: string[];
    to: string[];
  };
}

export interface GradientColor {
  from: string[];
  to: string[];
}
