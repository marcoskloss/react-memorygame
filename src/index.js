import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css'

import MemoryGame from './MemoryGame'

ReactDOM.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>,
  document.getElementById('root')
);
