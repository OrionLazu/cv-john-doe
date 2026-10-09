import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Le chemin de base doit correspondre au nom du dépôt pour un déploiement
// sur GitHub Pages (https://<utilisateur>.github.io/cv-react-github/).
// En développement et sur CodeSandbox, la base reste « / ».
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/cv-react-github/" : "/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));
