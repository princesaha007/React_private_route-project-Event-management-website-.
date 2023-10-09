import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoute from './Router/Route'
import AuthProvider from './providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={myRoute}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
