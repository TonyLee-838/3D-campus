import { IBlock, Dims3, Dims2, EdgeType } from '../types';

export const useDecoration = (props: IBlock) => {
  const { dimensions, position, edgesHaveLights, edgesHaveTrees } = props;

  const topLeftPosition = useTopLeftPosition(dimensions, position);

  const treePositions = usePositions({
    blockDimensions: dimensions,
    blockPosition: topLeftPosition,
    edges: edgesHaveTrees,
    distanceAround: 8,
    margin: 15,
    modelLength: TREE_MODEL_LENGTH,
    modelWidth: TREE_MODEL_WIDTH,
    offset: 10,
  });

  const lightPositions = usePositions({
    blockDimensions: dimensions,
    blockPosition: topLeftPosition,
    edges: edgesHaveLights,
    distanceAround: 5,
    margin: 40,
    modelLength: LIGHT_MODEL_LENGTH,
    modelWidth: LIGHT_MODEL_WIDTH,
    offset: 10,
  });

  return {
    blockDimensions: [dimensions[0], 2, dimensions[1]] as Dims3,
    blockPosition: [position[0], 1, position[1]] as Dims3,
    treePositions,
    lightPositions,
  };
};

export const useTopLeftPosition = (dimensions: Dims2, position: Dims2): Dims2 => {
  return [position[0] - dimensions[0] / 2, position[1] - dimensions[1] / 2];
};

const TREE_MODEL_WIDTH = 3;
const TREE_MODEL_LENGTH = 3;

const LIGHT_MODEL_WIDTH = 3;
const LIGHT_MODEL_LENGTH = 3;

const SURFACE_HEIGHT = 0.15;

interface usePositionsArgs {
  blockDimensions: Dims2;
  blockPosition: Dims2;
  edges: EdgeType[];
  distanceAround: number;
  margin: number;
  modelWidth: number;
  modelLength: number;
  offset: number;
}

interface EdgeResult {
  position: Dims3;
  rotation: Dims3;
}

const usePositions = (args: usePositionsArgs) => {
  const { blockDimensions, blockPosition, distanceAround, edges, margin, offset } = args;

  const lengthwiseAmount = Math.floor(
    (blockDimensions[1] - 2 * distanceAround) / (margin + TREE_MODEL_WIDTH)
  );
  const widthwiseAmount = Math.floor(
    (blockDimensions[0] - 2 * distanceAround) / (margin + TREE_MODEL_LENGTH)
  );

  const formulaArgs = {
    up: {
      length: widthwiseAmount,
      step: TREE_MODEL_WIDTH + margin,
      startPosition: [blockPosition[0] + distanceAround + offset, blockPosition[1] + distanceAround],
      direction: 'widthwise',

      rotationY: -Math.PI / 2,
    },
    down: {
      length: widthwiseAmount,
      step: TREE_MODEL_WIDTH + margin,
      startPosition: [
        blockPosition[0] + distanceAround + offset,
        blockPosition[1] + blockDimensions[1] - distanceAround,
      ],
      rotationY: Math.PI / 2,
      direction: 'widthwise',
    },
    left: {
      length: lengthwiseAmount,
      step: TREE_MODEL_LENGTH + margin,
      startPosition: [blockPosition[0] + distanceAround, blockPosition[1] + distanceAround + offset],
      direction: 'lengthwise',
      rotationY: 0,
    },
    right: {
      direction: 'lengthwise',
      length: lengthwiseAmount,
      step: TREE_MODEL_LENGTH + margin,
      startPosition: [
        blockDimensions[0] + blockPosition[0] - distanceAround,
        blockPosition[1] + distanceAround + offset,
      ],
      rotationY: Math.PI,
    },
  };

  return edges.reduce((result, edge) => {
    const { length, direction, startPosition, step, rotationY } = formulaArgs[edge];

    const trees = mapEdges(length, step, startPosition as Dims2, direction, rotationY);

    return [...result, ...trees];
  }, [] as EdgeResult[]);
};

const mapEdges = (
  length: number,
  step: number,
  startPosition: Dims2,
  direction: string,
  rotationY: number
): EdgeResult[] => {
  const array = Array.from({ length });

  if (direction === 'lengthwise') {
    return array.map((_, i) => ({
      position: [startPosition[0], SURFACE_HEIGHT, startPosition[1] + i * step] as Dims3,
      rotation: [0, rotationY, 0] as Dims3,
    }));
  }

  return array.map((_, i) => ({
    position: [startPosition[0] + i * step, SURFACE_HEIGHT, startPosition[1]] as Dims3,
    rotation: [0, rotationY, 0] as Dims3,
  }));
};
