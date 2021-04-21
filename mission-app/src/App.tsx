import React, { useEffect } from 'react';
import MainScreen from './screens/MainScreen';
import { useMissionStore } from './store/missionStore';

import { missions, fakeSubjects } from './data/fakeMissions';

import './index.css';

import { AppStyleSheet } from './types';

function App() {
  const { setMissions, setSubjects } = useMissionStore();

  useEffect(() => {
    setMissions(missions);
    setSubjects(fakeSubjects);
  }, [setMissions, setSubjects]);

  return (
    <div style={styles.app}>
      <MainScreen />
    </div>
  );
}

const styles: AppStyleSheet = {
  app: {
    height: '100vh',
  },
};

export default App;
