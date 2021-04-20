import React, { lazy, Suspense } from 'react';
import { useHistory } from 'react-router';

import { mount } from 'campus/CampusApp';
// const { mount } = lazy(() => import('campus/CampusApp'));

import useMount from '../hook/useMount';

const CampusApp = () => {
  const history = useHistory();
  const handleNavigateOut = (id) => {
    history.push(`/studio/${id}`);
  };

  const handleNavigateBack = () => {
    history.goBack();
  };
  const ref = useMount(mount, {
    onNavigateBack: handleNavigateBack,
    onNavigateOut: handleNavigateOut,
  });

  return <div id='campus-app-root' ref={ref}></div>;
};

export default CampusApp;
