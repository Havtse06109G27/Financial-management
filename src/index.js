import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/Hauora/Hauora-Bold.ttf";
import "./fonts/Hauora/Hauora-Medium.ttf";
import "./fonts/Hauora/Hauora-Regular.ttf";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>
);
