import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./styles/index.css";

/**
 * Point d'entrée de l'application.
 * Monte le composant racine <App /> dans l'élément #root de index.html.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
