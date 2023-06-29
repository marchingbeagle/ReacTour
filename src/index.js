import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoadTripsProvider } from "context/LoadTripsContext";
import Home from "routes/Home";
import DefaultPage from "components/DefaultPage";
import ErrorPage from "routes/ErrorPage";
import "./index.css";
import AboutUs from "routes/AboutUs";
import ContactUs from "routes/ContactUs";
import Trips from "routes/Trips";

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
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadTripsProvider>
      <RouterProvider router={router} />
    </LoadTripsProvider>
  </React.StrictMode>
);
