import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoadTripsProvider } from "context/LoadTripsContext";
import Home from "routes/Home";
import DefaultPage from "components/DefaultPage";
import ErrorPage from "routes/ErrorPage";
import "./index.css";
import AboutUs from "routes/AboutUs";
import Trips from "routes/Trips";
import HeaderOnlyPage from "components/HeaderOnlyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "trips/:id",
        element: <Trips />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    element: <HeaderOnlyPage />,
    children: [
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadTripsProvider>
      <RouterProvider router={router} />
    </LoadTripsProvider>
  </React.StrictMode>
);
