import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/fonts/roboto/stylesheet.css';
import './shared/styles/index.css';
import './shared/styles/custom-styles.css';
import './shared/styles/variables.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    //<App/>
);
