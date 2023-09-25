import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dummy from './Dummy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dummy dummyValue={974}></Dummy>,
    children: [
      {
        path: "/home",
    element: <Dummy dummyValue={974}></Dummy>,
      },
      {
        path: "/donation",
        element: <Dummy dummyValue={974}></Dummy>,
      },
      {
        path: "/statistics",
        element: <Dummy dummyValue={974}></Dummy>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
