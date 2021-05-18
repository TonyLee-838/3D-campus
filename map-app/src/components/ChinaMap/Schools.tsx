import React, { useState } from 'react';
import { getLocalPosition, mapDepth } from './mapTools';
import { Vector3 } from 'three';
import { SchoolsData, PointerFunction, MouseFunction } from '../../types/ChinaMap';

interface SchoolProps {
  position: Vector3;
  userData: any;
  onPointerMove: PointerFunction;
  onPointerOut: PointerFunction;
  onClick: MouseFunction;
  searchedSchoolId?: number;
}

const School = ({
  position,
  userData,
  onPointerMove,
  onPointerOut,
  onClick,
  searchedSchoolId,
}: SchoolProps) => {
  const [hovered, setHover] = useState<boolean>(false);
  const isSearched = searchedSchoolId === userData.id;

  const color = isSearched ? 'green' : hovered ? 'red' : 'yellow';

  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      userData={userData}
      onPointerMove={onPointerMove}
      onPointerOver={() => setHover(true)}
      onPointerOut={(e) => {
        setHover(false);
        onPointerOut(e);
      }}
      onClick={onClick}
    >
      <cylinderGeometry args={[0.8, 0.8, 1, 10, 1]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

interface SchoolsProps {
  schoolsData: SchoolsData[];
  onPointerMove: PointerFunction;
  onPointerOut: PointerFunction;
  onClick: MouseFunction;
  searchedSchoolId?: number;
}

const Schools = ({
  schoolsData,
  onPointerMove,
  onPointerOut,
  onClick,
  searchedSchoolId = -1,
}: SchoolsProps) => {
  return (
    <>
      {schoolsData.map(({ id, location, name, info }) => {
        const { x, y } = getLocalPosition(location);
        // const xY = lLToXY(location);
        const position = new Vector3(x, y, mapDepth + 1.2);
        return (
          <School
            key={info.id}
            position={position}
            userData={{ id, name, info }}
            onPointerMove={onPointerMove}
            onPointerOut={onPointerOut}
            onClick={onClick}
            searchedSchoolId={searchedSchoolId}
          />
        );
      })}
    </>
  );
};

export default Schools;
