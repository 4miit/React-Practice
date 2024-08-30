import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Parent from './UseCallback/parent'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <App/>
     <Parent></Parent>
  </React.StrictMode>,
)
