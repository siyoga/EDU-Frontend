import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

export const host = 'http://213.226.127.157:8080';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
