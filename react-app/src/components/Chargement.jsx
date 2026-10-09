/**
 * Indicateur de chargement affiché pendant l'appel à l'API GitHub.
 */
export default function Chargement() {
  return (
    <div className="text-center py-5" role="status" aria-live="polite">
      <div className="spinner-border text-primary" aria-hidden="true" />
      <p className="mt-3 mb-0">Chargement du profil…</p>
    </div>
  );
}
