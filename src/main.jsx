import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Navbar } from './Navbar/Navbar.jsx'
import App from './Filter/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

<Navbar/>
<App/>
  </React.StrictMode>,
)
