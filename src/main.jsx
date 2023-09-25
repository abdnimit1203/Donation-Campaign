import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Staistics from "./pages/Statistics/Staistics";
import MainLayout from "./layout/MainLayout";
import DonationDetails from './components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("/donationData.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Staistics></Staistics>,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch("/donationData.json")

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
