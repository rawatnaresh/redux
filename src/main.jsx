import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
