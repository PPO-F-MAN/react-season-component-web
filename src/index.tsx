import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles
      styles={{
        body: {
          fontFamily: 'proxima-nova, sans-serif, Roboto',
        },
      }}
    />
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
