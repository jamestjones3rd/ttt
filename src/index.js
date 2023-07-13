import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';  //may be the wrong css folder

import App from './App';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
