import React, { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';

// components
import CampusScene from './components/three/campus/CampusScene';
import CoordinateSystem from './components/three/basic/CoordinateSystem';
import DomMain from './components/dom/DomMain';

// hooks
import { useCampusStore } from './store/CampusStore';
import { useAppPrepare } from './hooks/useAppPrepare';

function App({ onNavigate }) {
  useAppPrepare();
  const setEnterStudio = useCampusStore((state) => state.setEnterStudio);
  setEnterStudio(onNavigate);

  return (
    <div className='App'>
      <DomMain />
      <Canvas concurrent colorManagement>
        <CampusScene />
      </Canvas>
    </div>
  );
}

export default App;
