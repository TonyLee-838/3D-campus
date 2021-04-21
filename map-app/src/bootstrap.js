import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el, { onNavigateOut }) => {
  ReactDOM.render(<App onNavigate={onNavigateOut} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-map-app-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
