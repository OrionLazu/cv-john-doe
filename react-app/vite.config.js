import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Le chemin de base doit correspondre à l'adresse de publication sur GitHub Pages :
// l'application est servie dans le sous-dossier react-app/ du dépôt cv-john-doe
// (https://<utilisateur>.github.io/cv-john-doe/react-app/).
// En développement et sur CodeSandbox, la base reste « / ».

// CodeSandbox définit cette variable dans ses conteneurs : il n'y a pas de
// navigateur à ouvrir et l'application est servie sur un domaine *.csb.app.
const surCodeSandbox = Boolean(process.env.CODESANDBOX_HOST);

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/cv-john-doe/react-app/" : "/",
  server: {
    port: 3000,
    open: !surCodeSandbox,
    // Vite refuse par sécurité les domaines inconnus : on autorise CodeSandbox.
    allowedHosts: [".csb.app"],
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));
