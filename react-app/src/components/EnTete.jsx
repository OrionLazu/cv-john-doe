/**
 * En-tête de l'application : titre principal et courte accroche.
 * Composant fonctionnel sans état.
 */
export default function EnTete() {
  return (
    <header className="app-entete text-center text-white py-5">
      <div className="container">
        <h1 className="app-titre">
          <i className="fa-brands fa-github me-2" aria-hidden="true" />
          Github user
        </h1>
        <p className="lead mb-0">
          Les informations publiques d&apos;un profil GitHub, récupérées en direct via l&apos;API.
        </p>
      </div>
    </header>
  );
}
