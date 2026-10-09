/**
 * Message d'erreur accompagné d'un bouton permettant de relancer la requête.
 *
 * @param {{message: string, onReessayer: Function}} props
 */
export default function MessageErreur({ message, onReessayer }) {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <p className="mb-3">
        <i className="fa-solid fa-triangle-exclamation me-2" aria-hidden="true" />
        {message}
      </p>
      <button className="btn btn-outline-danger" type="button" onClick={onReessayer}>
        Réessayer
      </button>
    </div>
  );
}
