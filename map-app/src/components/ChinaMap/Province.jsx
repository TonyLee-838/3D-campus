import React from 'react';
import { Shape, Vector3, BufferGeometry } from 'three';
import {
  getLocalPosition,
  mapDepth,
  locationsOfProvinces,
  getMeshCenter,
  getCameraSuitableZPosition,
} from './mapTools';

const Province = ({
  provinceData,
  lineColor,
  blockColor,
  onPointerOut,
  onPointerOver,
  onPointerMove,
  onClick,
}) => {
  const coordinates = provinceData.geometry.coordinates;
  const properties = provinceData.properties;

  const getProvinceLocation = (mesh, name) => {
    const center = getMeshCenter(mesh);
    const z = getCameraSuitableZPosition(mesh);
    const position = new Vector3(center.x, center.y, z);
    const lookAt = center;
    locationsOfProvinces[name] = {};
    locationsOfProvinces[name]['position'] = position;
    locationsOfProvinces[name]['lookAt'] = lookAt;
  };

  return (
    <group
      key={properties.name}
      onUpdate={(e) => {
        getProvinceLocation(e.children[0].children[1], properties.name);
      }}
    >
      {coordinates.map((multiPolygon, i) => {
        return multiPolygon.map((polygon, j) => {
          const shape = new Shape();
          const shapePoints = [];
          for (let i = 0; i < polygon.length; i++) {
            const [lat, lng] = polygon[i];
            const { x, y } = getLocalPosition({ lat, lng });
            if (!i) {
              shape.moveTo(x, y);
            }
            shape.lineTo(x, y);
            shapePoints.push(new Vector3(x, y, mapDepth));
          }
          const lineGeometry = new BufferGeometry().setFromPoints(shapePoints);
          // locationsOfProvinces[properties.name]
          return (
            <group key={`province-${i}-${j}}`}>
              <line geometry={lineGeometry}>
                <lineBasicMaterial color={lineColor} linewidth={10} />
              </line>
              <mesh
                userData={properties}
                onPointerOver={onPointerOver}
                onPointerOut={onPointerOut}
                onPointerMove={onPointerMove}
                onClick={onClick}
              >
                <extrudeGeometry args={[shape, { depth: mapDepth, bevelEnabled: false }]} />
                <meshBasicMaterial color={blockColor} opacity={0.7} transparent />
              </mesh>
            </group>
          );
        });
      })}
    </group>
  );
};

export default Province;
