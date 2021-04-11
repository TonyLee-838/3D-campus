import { Color as ThreeColor } from "three/src/math/Color.d";
import React from "react";

import { PointerEvent as PE, MouseEvent as ME } from "react-three-fiber/canvas";

import { Vector3 } from "three";

export type MouseEvent = ME;

export type PointerEvenet = PE;

export type MouseFunction = (e: ME) => void;

export type PointerFunction = (e: PE) => void;

//经纬度
export type LL = Array<number>;

//X、Y坐标
export type XY = Array<number>;

export type Color = string | number | ThreeColor;

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export interface ProjectionFunction {
  (lL: LL): XY;
}

export interface CameraConfig {
  fov: number;
  position: Vector3;
  lookAt: Vector3;
}

export interface ZoomTarget {
  position: Vector3;
  lookAt: Vector3;
}

export interface SchoolsData {
  id: number;
  name: string;
  location: LL;
  info: string;
  province: string;
}

export type MapMode = "global" | "partical";
