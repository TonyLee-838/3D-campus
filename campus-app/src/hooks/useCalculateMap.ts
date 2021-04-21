// types
import { Dims2, Style } from '../types';

const MINI_MAP_WIDTH = 300;
const MINI_MAP_HEIGHT = 300;
const ENTIRE_MAP_WIDTH = 1300;
const ENTIRE_MAP_HEIGHT = 1200;
const MODIFY_X = 650;
const MODIFY_Y = 650;

export const getMapPosition = (realPosition: Dims2, realDimensions: Dims2): Dims2 => {
  const x = MODIFY_X + realPosition[0] - realDimensions[0] / 2;
  const y = MODIFY_Y + realPosition[1] - realDimensions[1] / 2;
  return [x, y];
};

export const getBlockStyle = (realPosition: Dims2, realDimensions: Dims2): Style => {
  const [dx, dy] = getMapPosition(realPosition, realDimensions);
  const style: Style = {
    position: 'absolute',
    transform: `translate(${dx}px,${dy}px)`,
    width: realDimensions[0],
    height: realDimensions[1],
    backgroundColor: '#6e6e6e',
    border: '5px solid white',
  };
  return style;
};

export const getBuildingStyle = (
  realPosition: Dims2,
  width: number = 30,
  height: number = 30,
  hovered: boolean
) => {
  const [dx, dy] = getMapPosition(realPosition, [width, height]);
  const style: Style = {
    position: 'absolute',
    transform: `translate(${dx}px,${dy}px) scale(${hovered ? '1.2,1.2' : '1,1'})`,
    width,
    height,
    backgroundColor: '#2c655a',
    border: '3px solid white',
    borderRadius: '18px',
    textAlign: 'center',
    cursor: 'pointer',
  };
  return style;
};

export const getMiniMapStyle = (): Style => {
  const style: Style = {
    backgroundColor: 'white',
    width: `${MINI_MAP_WIDTH}px`,
    height: `${MINI_MAP_HEIGHT}px`,
    overflow: 'hidden',
    position: 'absolute',
    left: '0.01px',
    bottom: '0.01px',
    zIndex: 300,
    borderRadius: 1,
  };
  return style;
};

export const getEntireMapStyle = (): Style => {
  const style: Style = {
    position: 'absolute',
    backgroundColor: '#303030',
    width: `${ENTIRE_MAP_WIDTH}px`,
    height: `${ENTIRE_MAP_HEIGHT}px`,
    transform: `scale(0.5) translate(-${ENTIRE_MAP_WIDTH / 2}px, -${ENTIRE_MAP_HEIGHT / 2}px)`,
    zIndex: 300,
  };
  return style;
};

export const getPlayerEntireMapStyle = (realPosition: Dims2): Style => {
  const [x, y] = getMapPosition(realPosition, [0, 0]);
  const style: Style = {
    position: 'absolute',
    transform: `scale(2) translate(${x / 2 - 10}px,${y / 2 - 10}px)`,
    zIndex: 500,
  };
  return style;
};

export const getPlayerMiniMapStyle = (): Style => {
  const style: Style = {
    position: 'absolute',
    left: '135px',
    bottom: '110px',
    zIndex: 500,
  };
  return style;
};

export const getOffsetStyleOfMap = (playerPosition: Dims2): Style => {
  let dx = -ENTIRE_MAP_WIDTH;
  let dy = -ENTIRE_MAP_HEIGHT;
  dx -= playerPosition[0] - MINI_MAP_WIDTH;
  dy -= playerPosition[1] - MINI_MAP_HEIGHT;
  const style: Style = {
    transform: `scale(0.5) translate(${dx}px, ${dy}px)`,
  };
  return style;
};

export const getStudioNameStyle = (): Style => {
  const style: Style = {
    display: 'block',
    textAlign: 'center',
    width: '200px',
    transform: 'translate(-90px,40px)',
    fontSize: '20px',
    color: 'greenyellow',
    fontFamily: 'sans-serif',
  };
  return style;
};
