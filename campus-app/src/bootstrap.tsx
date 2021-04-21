import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  ReactDOM.render(<App onNavigate={onNavigate} />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-campus-app-root');
  const onNavigate = (id) => console.log('Navigate to', id);

  if (devRoot) {
    mount(devRoot, { onNavigate });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
