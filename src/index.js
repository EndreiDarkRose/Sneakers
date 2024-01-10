import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.js";
import Cart from "./components/Card/index.js";
import Basket from "./components/Drawer.js";
import Header from "./components/Header.js";
import ErrorPage from "./errorPage.js";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
