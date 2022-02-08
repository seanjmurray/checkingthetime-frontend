import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// React Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

