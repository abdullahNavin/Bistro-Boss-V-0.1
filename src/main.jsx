import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routers/Routers'
import ContextProvider, { AuthContext } from './Context/ContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={Routers} />
    </ContextProvider>
  </StrictMode>,
)
