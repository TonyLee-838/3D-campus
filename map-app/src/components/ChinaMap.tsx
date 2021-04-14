import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from 'drei';
import { Color as ThreeColor } from 'three';

import SearchBar from './ChinaMap/SearchBar';
import Info from './ChinaMap/Info';
import Provinces from './ChinaMap/Provinces';
import Schools from './ChinaMap/Schools';
import { Color, MapMode, SchoolsData, ZoomTarget } from '../types/ChinaMap';
import React, { useRef, useState } from 'react';

import { fakeSchoolsData } from './ChinaMap/fakeData';
import { locationsOfProvinces } from './ChinaMap/mapTools';

// import Town from "./model/Town";

interface ChinaMapProps {
  lineColor?: Color;
  blockColor?: Color;
  hoverColor?: Color;
}

let focused = false;

const ChinaMap = ({
  lineColor = '#ffffff',
  blockColor = '#1414AA',
  hoverColor = '#c32136',
}: ChinaMapProps) => {
  blockColor = new ThreeColor(blockColor);

  const infoRef = useRef<any>(null);
  const [searchedSchoolId, setSearchedSchoolId] = useState<number>(-1);
  const [zoomTarget, setZoomTarget] = useState<ZoomTarget>(null);

  const handleProvincePointerOut = (e) => {
    if (!e.object || !e.object.material || !infoRef) return;
    e.object.material.color.set(blockColor);
    infoRef.current.hidden();
  };

  const handleProvincePointerOver = (e) => {
    if (!e.object || !e.object.material || !infoRef) return;
    e.object.material.color.set(hoverColor);
  };

  const handleProvincePointerMove = (e) => {
    if (focused || !infoRef) return;
    infoRef.current.show(e.object.userData.name, e.clientX, e.clientY);
  };

  const handleProvinceClick = (e) => {
    focused = !focused;
    infoRef.current.hidden();
    setZoomTarget(null);
  };

  const handleSchoolPointerMove = (e) => {
    if (!infoRef) return;
    infoRef.current.show(`${e.object.userData.name}：${e.object.userData.info}`, e.clientX, e.clientY);
  };
  const handleSchoolPointerOut = (e) => {
    if (!infoRef) return;
    infoRef.current.hidden();
  };

  const handleSchoolClick = (e) => {};

  const handleSelectSearchResult = (id) => {
    if (id - 1 >= 0) {
      const targetProvince = locationsOfProvinces[fakeSchoolsData[id - 1].province];

      if (zoomTarget !== null) {
        setZoomTarget(null);
        setTimeout(() => {
          setZoomTarget(targetProvince);
        }, 350);
      } else {
        setZoomTarget(targetProvince);
      }
    }
  };

  return (
    <>
      <SearchBar searchData={fakeSchoolsData} onSelectSearchResult={handleSelectSearchResult} />
      <Info ref={infoRef} />
      <Canvas
        colorManagement={true}
        camera={{ position: [0, -120, 180], fov: 50 }}
        concurrent
        style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}
      >
        <Provinces
          lineColor={lineColor}
          blockColor={blockColor}
          onPointerOut={handleProvincePointerOut}
          onPointerOver={handleProvincePointerOver}
          onPointerMove={handleProvincePointerMove}
          onClick={handleProvinceClick}
          zoomTarget={zoomTarget}
        />
        <Schools
          schoolsData={fakeSchoolsData}
          onPointerMove={handleSchoolPointerMove}
          onPointerOut={handleSchoolPointerOut}
          onClick={handleSchoolClick}
          searchedSchoolId={searchedSchoolId}
        />
        {/* <OrbitControls /> */}
        <Stars />
        <ambientLight color={'#ffffff'} intensity={100} />
      </Canvas>
    </>
  );
};

export default ChinaMap;
