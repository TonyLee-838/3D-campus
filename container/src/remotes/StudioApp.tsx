import React, { Suspense } from 'react';
import { useHistory } from 'react-router';

import { mount } from 'studio/StudioApp';

import useMount from '../hook/useMount';

const StudioApp = () => {
  const history = useHistory();
  const handleNavigateBack = () => {
    history.goBack();
  };

  const ref = useMount(mount, { onNavigateBack: handleNavigateBack });

  return <div id='studio-app-root' ref={ref}></div>;
};

export default StudioApp;
