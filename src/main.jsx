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
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import ProductDetails from './components/ProductDetails';

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
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/products/:id',
        // element: <Products></Products>
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
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
