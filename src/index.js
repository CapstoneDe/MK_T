import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ERDiagram from './ERDiagram';

ReactDOM.render(
  <React.StrictMode>
    <ERDiagram />
  </React.StrictMode>,
  document.getElementById('root')
);
