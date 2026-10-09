import ProfilGitHub from "./components/ProfilGitHub.jsx";
import { useProfilGitHub } from "./hooks/useProfilGitHub.js";

/** Profil interrogé par défaut au premier chargement de l'application. */
const PSEUDONYME_PAR_DEFAUT = "github-john-doe";

/**
 * Composant principal de l'application.
 *
 * Il gère l'état, délègue l'appel réseau au hook personnalisé useProfilGitHub
 * et confie l'affichage des données au composant séparé <ProfilGitHub />.
 */
export default function App() {
  const { profil, chargement, erreur } = useProfilGitHub(PSEUDONYME_PAR_DEFAUT);

  return (
    <div className="app">
      <header className="app-entete text-center text-white py-5">
        <div className="container">
          <h1 className="app-titre">Github user</h1>
          <p className="lead mb-0">
            Les informations publiques d&apos;un profil GitHub, récupérées en direct via l&apos;API.
          </p>
        </div>
      </header>

      <main className="container py-5">
        {chargement ? <p className="text-center">Chargement du profil…</p> : null}

        {!chargement && erreur ? (
          <p className="text-center text-danger">{erreur}</p>
        ) : null}

        {!chargement && !erreur ? <ProfilGitHub profil={profil} /> : null}
      </main>
    </div>
  );
}
