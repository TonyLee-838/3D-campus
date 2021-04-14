import React, { useEffect } from 'react';
import './App.css';

// Three

import { Canvas } from 'react-three-fiber';
import { softShadows } from '@react-three/drei';

// Components
import DomMain from './components/dom/DomMain';
import StudioScene from './components/three/studio/StudioScene';
import Message from './components/dom/Message';
import Aim from './components/dom/Aim';

// Hooks
import { useStudioStore } from './store/studioStore';

// Http
import { getBookShelfData, getMonitorData, getDeskData } from './http/studio';
import MissionPanel from './components/dom/MissionPanel';
import QuizApp from './components/dom/QuizApp';

// softShadows({
//   frustum: 3.75, // Frustum width (default: 3.75) must be a float
//   size: 0.005, // World size (default: 0.005) must be a float
//   near: 9.5, // Near plane (default: 9.5) must be a float
//   samples: 17, // Samples (default: 17) must be a int
//   rings: 11, //
// });

function App() {
  const message = useStudioStore((state) => state.message);
  const bookshelfData = useStudioStore((state) => state.bookshelfData);
  const monitorData = useStudioStore((state) => state.monitorData);
  const deskData = useStudioStore((state) => state.deskData);
  const setBookshelfData = useStudioStore((state) => state.setBookshelfData);
  const setMonitorData = useStudioStore((state) => state.setMonitorData);
  const setDeskData = useStudioStore((state) => state.setDeskData);

  // get all necessary data
  const getData = async () => {
    const bookShelfData = await getBookShelfData();
    const monitorData = await getMonitorData();
    const deskData = await getDeskData();
    setBookshelfData(bookShelfData);
    setMonitorData(monitorData);
    setDeskData(deskData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <DomMain />
      <QuizApp />
      <Canvas concurrent colorManagement>
        {bookshelfData && monitorData && deskData && <StudioScene />}
      </Canvas>
      <Message content={message} />
      {/* <MissionPanel /> */}
    </div>
  );
}

export default App;
