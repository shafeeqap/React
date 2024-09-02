import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shafeeq from './Child.jsx'
import {Hello} from './Child.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Shafeeq/> */}
    {/* <Hello/> */}
  </React.StrictMode>,
)
