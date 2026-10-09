import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Le chemin de base doit correspondre à l'adresse de publication sur GitHub Pages :
// l'application est servie dans le sous-dossier react-app/ du dépôt cv-john-doe
// (https://<utilisateur>.github.io/cv-john-doe/react-app/).
// En développement et sur CodeSandbox, la base reste « / ».
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/cv-john-doe/react-app/" : "/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));
