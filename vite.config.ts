import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { GITHUB_PAGES_REPO } from "./src/lib/site-config";

export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? `/${GITHUB_PAGES_REPO}/` : "/",
  plugins: [react()],
}));
