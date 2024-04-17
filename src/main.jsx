import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routs from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import AOS from "aos";
AOS.init()
import "aos/dist/aos.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={routs}></RouterProvider></AuthProvider>

  
  </React.StrictMode>,
)
