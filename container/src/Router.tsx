import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingPage from './pages/LoadingPage';

const CampusApp = lazy(() => import('./remotes/CampusApp'));
const MapApp = lazy(() => import('./remotes/MapApp'));
const StudioApp = lazy(() => import('./remotes/StudioApp'));

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/campus/:id'
          render={() => (
            <Suspense fallback={<LoadingPage />}>
              <CampusApp />
            </Suspense>
          )}
        />
        <Route
          path='/studio/:id'
          render={() => (
            <Suspense fallback={<LoadingPage />}>
              <StudioApp />
            </Suspense>
          )}
        />
        <Route
          path='/map'
          render={() => (
            <Suspense fallback={<LoadingPage />}>
              <MapApp />
            </Suspense>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
