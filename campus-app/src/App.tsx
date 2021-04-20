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

const PORT = 8086;

function App({
  onNavigate = (id: string) => {
    window.location.replace(`http://10.139.85.66:8082?studioId=${id}`);
  },
}) {
  useAppPrepare();
  const setEnterStudio = useCampusStore((state) => state.setEnterStudio);
  setEnterStudio(onNavigate);

  useEffect(() => {
    globalThis.publicPath = `http://${location.hostname}:${PORT}`;
  }, []);

  return (
    <div className='App'>
      <DomMain />
      <Canvas concurrent colorManagement>
        <CoordinateSystem />
        <CampusScene />
      </Canvas>
    </div>
  );
}

export default App;
