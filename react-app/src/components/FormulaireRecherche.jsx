import { useEffect, useState } from "react";

/**
 * Formulaire de recherche d'un profil GitHub.
 *
 * Le champ est un composant contrôlé : sa valeur est stockée dans un état local
 * et n'est remontée au composant parent qu'à la validation du formulaire.
 *
 * @param {{pseudonyme: string, onRechercher: Function, desactive: boolean}} props
 */
export default function FormulaireRecherche({ pseudonyme, onRechercher, desactive }) {
  const [saisie, setSaisie] = useState(pseudonyme);

  // Garde le champ synchronisé si le pseudonyme est modifié depuis le parent.
  useEffect(() => {
    setSaisie(pseudonyme);
  }, [pseudonyme]);

  function gererEnvoi(evenement) {
    evenement.preventDefault();
    const valeur = saisie.trim();

    if (valeur) {
      onRechercher(valeur);
    }
  }

  return (
    <form className="row g-2 justify-content-center mb-5" onSubmit={gererEnvoi}>
      <div className="col-12 col-sm-8 col-lg-5">
        <label className="form-label visually-hidden" htmlFor="pseudonyme">
          Nom d&apos;utilisateur GitHub
        </label>
        <input
          className="form-control form-control-lg"
          id="pseudonyme"
          name="pseudonyme"
          type="search"
          value={saisie}
          placeholder="Nom d'utilisateur GitHub"
          autoComplete="off"
          spellCheck="false"
          onChange={(evenement) => setSaisie(evenement.target.value)}
        />
      </div>
      <div className="col-12 col-sm-auto d-grid">
        <button className="btn btn-primary btn-lg" type="submit" disabled={desactive || !saisie.trim()}>
          <i className="fa-solid fa-magnifying-glass me-2" aria-hidden="true" />
          Rechercher
        </button>
      </div>
    </form>
  );
}
