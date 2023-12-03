import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../src/context/authContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
