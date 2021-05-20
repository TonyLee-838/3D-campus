import React, { useEffect } from 'react';

import MainScreen from './screens/MainScreen';
import { useMissionStore } from './store/missionStore';

import { getDataFromBackend } from './api/getData';

import './index.css';

import { AppStyleSheet } from './types';

function App() {
  const { setMissions, setSubjects } = useMissionStore();

  const fetchData = async () => {
    const { missions, subjects } = await getDataFromBackend();
    setMissions(missions);
    setSubjects(subjects);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
