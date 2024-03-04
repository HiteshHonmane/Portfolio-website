import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='dark:bg-[#3c3c3c]'>
    <App />
    </div>
  </React.StrictMode>,
)
