import { LL, ProjectionFunction, XY } from "../../types/ChinaMap";

import { Vector3, Mesh } from "three";

import { geoMercator } from "d3-geo";

const mapScale: number = 250;

const getProjection = () => {
  return geoMercator()
    .center([105.367, 34.031])
    .scale(mapScale)
    .translate([0, 0]);
};

export const mapDepth: number = 4.1;

export const projection: ProjectionFunction = getProjection();

// change Latitude and longitude(lL) to x and y
// lL: [longitude, Latitude]
export const lLToXY = (lL: LL): XY => {
  const result = projection(lL);
  result[1] = -result[1];
  return result;
};

export const getMeshCenter = (mesh: any): Vector3 => {
  const geometry = mesh.geometry;
  geometry.computeBoundingSphere();
  const vector = geometry.boundingSphere.center;
  return vector;
};

export const getCameraSuitableZPosition = (mesh: any): number => {
  const geometry = mesh.geometry;
  geometry.computeBoundingSphere();
  const { radius } = geometry.boundingSphere;
  return radius > 30 ? 220 + (radius - 30) * 10 : 220 + (radius - 30) * 2;
};

export let locationsOfProvinces: any = {};
