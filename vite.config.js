import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/modulo-3-evaluacion-final-mariajose-serrano/",
  build: {
    outDir: "docs",
  },
  server: {
    open: "/",
    watch: {
      usePolling: true,
    },
  },
});
