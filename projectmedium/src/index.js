import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Theme from './Contexts/ThemeContexts';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme >
        <App />
      </Theme >
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
