import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';

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
        <Route path='/login' component={LoginPage} />
        <Redirect from='/' to='/login' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
