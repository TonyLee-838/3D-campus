import {
  GeoPosition,
  LL,
  LocalPosition,
  Projector,
  XY,
} from "../../types/ChinaMap";

import { Vector3, Mesh } from "three";

import { geoMercator } from "d3-geo";

const MAP_SCALE: number = 250;
const CENTER_POSITION: [number, number] = [105.367, 34.031];

const createProjector = () => {
  return geoMercator()
    .center(CENTER_POSITION)
    .scale(MAP_SCALE)
    .translate([0, 0]);
};

export const mapDepth: number = 4.1;

export const projection: Projector = createProjector();

// change Latitude and longitude(lL) to x and y
// lL: [longitude, Latitude]
export const getLocalPosition = ({ lat, lng }: GeoPosition): LocalPosition => {
  const [x, y] = projection([lat, lng]);

  return {
    x,
    y: -y,
  };
};

// export const lLToXY = (lL: LL): XY => {
//   const result = getProjection(lL);
//   result[1] = -result[1];
//   return result;
// };

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
