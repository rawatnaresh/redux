import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import Header from "./header.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Products from './routes/products';
import Carts from './routes/carts';
import ProductDetails from './routes/productDetails';
import Cart from './routes/cartDetails'
import Signup from './routes/signup';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"products/",
        element: <Products />,
      },
      {
        path:"carts/",
        element: <Carts />,
      }
    ]
  },
  {
    path: "product/:productId",
    element: <ProductDetails />
  },
  {
    path: "carts/:cartId",
    element: <Cart />
  },
  {
    path: "signup/",
    element: <Signup />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
