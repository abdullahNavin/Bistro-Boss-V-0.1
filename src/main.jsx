import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routers/Routers'
import ContextProvider from './Context/ContextProvider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers} />
      </QueryClientProvider>
    </ContextProvider>
  </StrictMode>,
)
