import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PreloaderProvider } from './Components/PreloaderContext.jsx'; // Adjust the import path as necessary



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <PreloaderProvider>
    <App />
    </PreloaderProvider>
  </BrowserRouter>
)
