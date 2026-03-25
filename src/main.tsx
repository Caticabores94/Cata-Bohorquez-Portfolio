import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./app/globals.css";

function resolveLegacyPagesRedirect(value: string) {
  let current = value;

  for (let depth = 0; depth < 6; depth += 1) {
    let decoded = current;

    try {
      decoded = decodeURIComponent(current);
    } catch {
      decoded = current;
    }

    if (decoded.startsWith("/?p=") || decoded.startsWith("?p=")) {
      const nested = decoded.replace(/^\//, "").replace(/^\?/, "");
      const nestedRedirect = new URLSearchParams(nested).get("p");

      if (nestedRedirect) {
        current = nestedRedirect;
        continue;
      }
    }

    return decoded;
  }

  return current;
}

const isGithubPagesBuild = import.meta.env.MODE === "github-pages";
const Router = isGithubPagesBuild ? HashRouter : BrowserRouter;
const browserBaseName = import.meta.env.BASE_URL.replace(/\/$/, "");

if (isGithubPagesBuild) {
  const redirect = new URLSearchParams(window.location.search).get("p");

  if (redirect) {
    const resolvedPath = resolveLegacyPagesRedirect(redirect);
    const normalizedPath = resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`;
    window.history.replaceState(null, "", `${window.location.pathname}#${normalizedPath}`);
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router {...(!isGithubPagesBuild ? { basename: browserBaseName } : {})}>
      <App />
    </Router>
  </React.StrictMode>,
);
