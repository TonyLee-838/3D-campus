import React, { Suspense } from "react";
import "./App.css";

// three
import { Canvas } from "react-three-fiber";

// components
import DomMain from "./components/dom/DomMain";
import StudioScene from "./components/three/studio/StudioScene";

// hooks
import { useAppPrepare } from "./hooks/useAppPrepare";

function App() {
  useAppPrepare();
  return (
    <div className="App">
      <DomMain />
      <Canvas concurrent colorManagement>
        <Suspense fallback={null}>
          <StudioScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
