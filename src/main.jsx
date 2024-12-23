import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';


const basename = process.env.VERCEL ? '/' : '/Cara/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);