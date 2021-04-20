import React, { Suspense } from 'react';
import { useHistory } from 'react-router';

import { mount } from 'map/MapApp';

import useMount from '../hook/useMount';
import LoadingPage from '../pages/LoadingPage';

const MapApp = () => {
  const history = useHistory();
  const handleNavigateOut = (id) => {
    history.push(`/campus/${id}`);
  };

  const ref = useMount(mount, { onNavigateOut: handleNavigateOut });

  return <div id='map-app-root' ref={ref}></div>;
};

export default MapApp;
