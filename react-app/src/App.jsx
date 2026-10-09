import { useProfilGitHub } from "./hooks/useProfilGitHub.js";

/** Profil interrogé par défaut au premier chargement de l'application. */
const PSEUDONYME_PAR_DEFAUT = "github-john-doe";

/**
 * Composant principal de l'application.
 *
 * Composant fonctionnel : l'appel à l'API GitHub est délégué au hook
 * personnalisé useProfilGitHub, qui expose les données, l'état de chargement
 * et l'éventuelle erreur.
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

        {!chargement && !erreur && profil ? (
          <article className="app-profil card mx-auto">
            <div className="card-body p-4">
              <h2 className="text-center">{profil.name || profil.login}</h2>
              <p className="text-center">
                <img className="app-avatar" src={profil.avatar_url} width="180" height="180" alt={`Avatar du profil GitHub ${profil.login}`} />
              </p>
              <p className="text-center">{profil.bio}</p>
              <p className="mb-1">Abonnés : {profil.followers}</p>
              <p className="mb-1">Abonnements : {profil.following}</p>
              <p className="mb-1">Créé le : {profil.created_at}</p>
              <p className="mb-1">Modifié le : {profil.updated_at}</p>
              <p className="mb-0 text-break">URL repositories : {profil.repos_url}</p>
            </div>
          </article>
        ) : null}
      </main>
    </div>
  );
}
