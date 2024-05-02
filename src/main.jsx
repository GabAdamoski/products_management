import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DataInfoContextProvider } from '.././src/context/DataInfoContext.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataInfoContextProvider>
      <App />
    </DataInfoContextProvider>
  </React.StrictMode>,
)
