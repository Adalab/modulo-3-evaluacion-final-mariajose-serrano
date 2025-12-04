// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/modulo-3-evaluacion-final-mariajose-serrano/", // 👈 MUY IMPORTANTE
  build: {
    outDir: "docs", // para que Pages use /docs directamente
  },
});
