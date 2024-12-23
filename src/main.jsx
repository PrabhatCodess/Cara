import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={process.env.VERCEL ? "/" : "/Cara"}>
    <App />
  </BrowserRouter>
)
