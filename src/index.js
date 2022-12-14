import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OtraBarraPrincipal from './componentes/OtraBarraPrincipal'
import reportWebVitals from './reportWebVitals';
import OtraBarra from './componentes/OtraBarra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OtraBarra/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) nose
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
