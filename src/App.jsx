import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";

import Login from './pages/login/login'
import Register from './pages/register/register';

import Header from './components/header/Header';
import Footer from './components/footer/footer';

import HomePage from './pages/homepage/HomePage';
import Products from './pages/products/Products';






function App() {
  //create Layout
  const Layout = () => {
    return (
      <div className="layout-app">
        <Header/>
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 not found this page</div>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: "products",
          element: <Products/>
        }
      ]
    }, 
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
