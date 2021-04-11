import { useState } from "react";
import { lLToXY, mapDepth } from "./mapTools";
import { Vector3 } from "three";
import {
  SchoolsData,
  PointerFunction,
  MouseFunction,
} from "../../types/ChinaMap";

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
  const isSearched: boolean = searchedSchoolId === userData.id;
  const meshComponent = (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      userData={userData}
      onPointerMove={onPointerMove}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={(e) => {
        setHover(false);
        onPointerOut(e);
      }}
      onClick={(e) => {
        onClick(e);
      }}
    >
      <cylinderGeometry args={[0.8, 0.8, 1, 10, 1]} />
      <meshBasicMaterial
        color={isSearched ? "green" : hovered ? "red" : "yellow"}
        transparent
        opacity={0.6}
      />
    </mesh>
  );

  return meshComponent;
};

interface SchoolsProps {
  schoolsData: any;
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
  return schoolsData.map((item) => {
    const xY = lLToXY(item.location);
    const position = new Vector3(xY[0], xY[1], mapDepth + 1.2);
    return (
      <School
        key={`school-${item.id}`}
        position={position}
        userData={{ id: item.id, name: item.name, info: item.info }}
        onPointerMove={onPointerMove}
        onPointerOut={onPointerOut}
        onClick={onClick}
        searchedSchoolId={searchedSchoolId}
      />
    );
  });
};

export default Schools;
