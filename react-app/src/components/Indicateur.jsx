import { formaterNombre } from "../utils/dates.js";

/**
 * Petite tuile statistique (abonnés, abonnements, dépôts publics…).
 *
 * @param {{libelle: string, valeur: number, icone: string}} props
 */
export default function Indicateur({ libelle, valeur, icone }) {
  return (
    <div className="col-4">
      <div className="app-indicateur h-100 text-center p-3">
        <p className="app-indicateur-icone mb-1">
          <i className={icone} aria-hidden="true" />
        </p>
        <p className="app-indicateur-valeur mb-0">{formaterNombre(valeur)}</p>
        <p className="app-indicateur-libelle mb-0">{libelle}</p>
      </div>
    </div>
  );
}
