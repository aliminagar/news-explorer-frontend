import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamically set base depending on mode
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/news-explorer-frontend/" : "/",
  plugins: [react()],
}));
