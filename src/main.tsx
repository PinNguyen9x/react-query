import Profile from '@/pages/profile'
import TnxDetails from '@/pages/tnx-details'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'tnx-details',
        element: <TnxDetails />,
      },
    ],
  },
])

// create once with default options
const queryClient = new QueryClient()
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
