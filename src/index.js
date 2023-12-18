import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./routes/App";
import Cart from "./routes/components/Card/index.js";
import Basket from "./routes/components/Drawer.js";
import Header from "./routes/components/Header.js";
import ErrorPage from "./routes/errorPage.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
