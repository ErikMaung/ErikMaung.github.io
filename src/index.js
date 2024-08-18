import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core'; // Import MantineProvider

import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);