import React from "react";
import ReactDOM from "react-dom/client";

import "modern-normalize/modern-normalize.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AreaSelector from "./pages/AreaSelector.jsx";
import WeatherCity from "./pages/WeatherCity.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AreaSelector />,
  },
  {
    path: "/weather",
    element: <WeatherCity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
