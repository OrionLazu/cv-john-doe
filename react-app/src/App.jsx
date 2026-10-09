/**
 * Composant principal de l'application.
 * Première version : gabarit statique, l'appel à l'API GitHub est ajouté ensuite.
 */
export default function App() {
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
        <p className="text-center">Application en cours de développement.</p>
      </main>
    </div>
  );
}
