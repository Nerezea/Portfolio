import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
);
