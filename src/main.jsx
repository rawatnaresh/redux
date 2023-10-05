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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"Products/",
        element: <Products />,
      },
      {
        path:"Carts/",
        element: <Carts />,
      }
    ]
  },
  {
    path: "product/:productId",
    element: <p>bbb </p>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
