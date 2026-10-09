import { useCallback, useState } from "react";

import EnTete from "./components/EnTete.jsx";
import FormulaireRecherche from "./components/FormulaireRecherche.jsx";
import ProfilGitHub from "./components/ProfilGitHub.jsx";
import Chargement from "./components/Chargement.jsx";
import MessageErreur from "./components/MessageErreur.jsx";
import { useProfilGitHub } from "./hooks/useProfilGitHub.js";

/** Profil interrogé par défaut au premier chargement de l'application. */
const PSEUDONYME_PAR_DEFAUT = "github-john-doe";

/**
 * Composant principal de l'application.
 *
 * Composant fonctionnel : il gère l'état du pseudonyme recherché avec le hook
 * useState, délègue l'appel réseau au hook personnalisé useProfilGitHub et
 * confie l'affichage des données au composant séparé <ProfilGitHub />.
 */
export default function App() {
  const [pseudonyme, setPseudonyme] = useState(PSEUDONYME_PAR_DEFAUT);
  const { profil, chargement, erreur, recharger } = useProfilGitHub(pseudonyme);

  const rechercher = useCallback((nouveauPseudonyme) => {
    setPseudonyme(nouveauPseudonyme);
  }, []);

  return (
    <div className="app">
      <EnTete />

      <main className="container py-5">
        <FormulaireRecherche
          pseudonyme={pseudonyme}
          onRechercher={rechercher}
          desactive={chargement}
        />

        {chargement ? <Chargement /> : null}

        {!chargement && erreur ? (
          <MessageErreur message={erreur} onReessayer={recharger} />
        ) : null}

        {!chargement && !erreur ? <ProfilGitHub profil={profil} /> : null}
      </main>

      <footer className="app-pied text-center py-4">
        <p className="mb-0">
          Données fournies par l&apos;
          <a href="https://docs.github.com/en/rest" target="_blank" rel="noopener noreferrer">
            API REST de GitHub
          </a>
          {" "}&mdash; Réalisé par John Doe
        </p>
      </footer>
    </div>
  );
}
