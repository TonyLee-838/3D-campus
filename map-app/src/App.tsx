import React from 'react';
import './App.css';

import ChinaMap from './components/ChinaMap';

function App({ onNavigate }) {
  return <ChinaMap onNavigate={onNavigate} />;
}

export default App;
