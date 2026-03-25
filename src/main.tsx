import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./app/globals.css";

const isGithubPagesBuild = import.meta.env.MODE === "github-pages";
const Router = isGithubPagesBuild ? HashRouter : BrowserRouter;
const browserBaseName = import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router {...(!isGithubPagesBuild ? { basename: browserBaseName } : {})}>
      <App />
    </Router>
  </React.StrictMode>,
);
