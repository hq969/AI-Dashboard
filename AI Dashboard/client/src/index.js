import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";  // Import global styles (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")  // Injects React app into index.html
);
