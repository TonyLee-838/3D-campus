import { Vector2 } from 'three';
import { Dims2, IRoad } from '../types';

export const useRoadData = (from: [number, number], to: [number, number], roadLength: number) => {
  const direction = new Vector2(to[0], to[1]).sub(new Vector2(from[0], from[1]));

  //Diagonal Length
  const length = Math.ceil(direction.length() / roadLength);

  const rotationY = Math.acos(direction.normalize().x);

  return { length, rotationY };
};

export const isOrthogonal = (roadA: IRoad, roadB: IRoad) => {
  return !(
    (roadA.from[0] - roadA.to[0]) * (roadB.from[1] - roadB.to[1]) +
    (roadA.from[1] - roadA.to[1]) * (roadB.from[0] - roadB.to[0])
  );
};

export const hasIntersection = (lengthwiseRoad: IRoad, widthwiseRoad: IRoad) => {
  return (
    lengthwiseRoad.from[0] <= Math.max(widthwiseRoad.from[0], widthwiseRoad.to[0]) &&
    lengthwiseRoad.from[0] >= Math.min(widthwiseRoad.from[0], widthwiseRoad.to[0]) &&
    widthwiseRoad.from[1] <= Math.max(lengthwiseRoad.from[1], lengthwiseRoad.to[1]) &&
    widthwiseRoad.from[1] >= Math.min(lengthwiseRoad.from[1], lengthwiseRoad.to[1])
  );
};

export const categorize = (roads: IRoad[]) => {
  return roads.reduce(
    (result, road) => {
      road.from[0] - road.to[0] ? result.widthwise.push(road) : result.lengthwise.push(road);

      return result;
    },
    { lengthwise: [] as IRoad[], widthwise: [] as IRoad[] }
  );
};

export const useIntersections = (roads: IRoad[]) => {
  const eligibleRoads = roads.filter(
    (road) => !(road.from[0] - road.to[0] && road.from[1] - road.to[1])
  );

  const categorized = categorize(eligibleRoads);

  return categorized.widthwise.reduce((intersections, widthwiseRoad) => {
    categorized.lengthwise.forEach((lengthwiseRoad) => {
      if (!hasIntersection(lengthwiseRoad, widthwiseRoad)) return;

      const intersection = [lengthwiseRoad.from[0], widthwiseRoad.from[1]] as Dims2;

      intersections.push(intersection);
    });

    return intersections;
  }, [] as Dims2[]);
};

const fakeData = [
  { from: [80, 40], to: [80, 150] },
  { from: [20, 90], to: [170, 90] },
  { from: [20, 180], to: [120, 180] },
  { from: [120, 80], to: [120, 180] },
  { from: [20, 80], to: [170, 90] },
];

// console.log(isOrthogonal(fakeData[0],fakeData[1]))
