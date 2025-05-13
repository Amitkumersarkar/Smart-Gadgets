import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Navbar from './Layout/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }

    ]
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/products',
    element: <Products></Products>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
