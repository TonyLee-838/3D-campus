import React, { Suspense, useEffect } from "react";
import "./App.css";

// Three

import { Canvas } from "react-three-fiber";
import { softShadows } from "@react-three/drei";

// Components
import MissionPanel from "./components/dom/MissionPanel";
import DomMain from "./components/dom/DomMain";
import Message from "./components/dom/Message";
import StudioScene from "./components/three/studio/StudioScene";

// Hooks
import { useStudioStore } from "./store/studioStore";

// Http
import {
  getBookShelfData,
  getMonitorData,
  getDeskData,
  getNPCData,
  getNoteData,
} from "./http/studio";

// softShadows({
//   frustum: 3.75, // Frustum width (default: 3.75) must be a float
//   size: 0.005, // World size (default: 0.005) must be a float
//   near: 9.5, // Near plane (default: 9.5) must be a float
//   samples: 17, // Samples (default: 17) must be a int
//   rings: 11, //
// });

function App() {
  const message = useStudioStore((state) => state.message);
  const setBookshelfData = useStudioStore((state) => state.setBookshelfData);
  const setMonitorData = useStudioStore((state) => state.setMonitorData);
  const setDeskData = useStudioStore((state) => state.setDeskData);
  const setNPCData = useStudioStore((state) => state.setNPCData);
  const setNoteData = useStudioStore((state) => state.setNoteData);

  // get all necessary data
  const getData = async () => {
    setBookshelfData(await getBookShelfData());
    setMonitorData(await getMonitorData());
    setDeskData(await getDeskData());
    setNPCData(await getNPCData());
    setNoteData(await getNoteData());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <DomMain />
      <Canvas concurrent colorManagement>
        <Suspense fallback={null}>
          <StudioScene />
        </Suspense>
      </Canvas>
      <Message content={message} />

      {/* <MissionPanel handleClose={() => {}}></MissionPanel> */}
    </div>
  );
}

export default App;
