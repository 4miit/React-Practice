import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import store from './Redux/store'
import { Provider } from 'react-redux'
import { Counter } from './Redux/Redux'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
     <App/>
     <Provider store={store}>
         <Counter/>
     </Provider>
     
    
  </React.StrictMode>,
)
