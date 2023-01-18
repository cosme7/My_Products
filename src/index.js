import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DarkTheme from './Theme/Theme'
import GlobalStyle from './Global/globalstyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkTheme>
      <GlobalStyle />
      <App />
    </DarkTheme>
  </React.StrictMode>
);
