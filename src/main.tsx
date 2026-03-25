import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app/globals.css";

const redirect = new URLSearchParams(window.location.search).get("p");

if (redirect) {
  const nextUrl = `${window.location.pathname}${redirect}${window.location.hash}`;
  window.history.replaceState(null, "", nextUrl);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
