import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n.js'
import './index.css'
import { MoodContextProvider } from './Components/UseContext/MoodContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoodContextProvider>
      <App />
    </MoodContextProvider>
  </React.StrictMode>,
)
