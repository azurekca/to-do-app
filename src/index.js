import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalSyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalSyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
