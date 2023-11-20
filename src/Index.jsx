// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/Index.scss';
import { createStore } from 'your-store-library'; // Import your store library
import App from './App';
import { withHover, withRandomColor, withRotate } from './animationHelpers'; // Import animation helpers

import reportWebVitals from './reportWebVitals';

const useStore = createStore({
  background: "#0099FF",
});

const AppWithAnimation = withRandomColor(withHover(withRotate(App)));

ReactDOM.render(
  <React.StrictMode>
    <AppWithAnimation />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();