/**
 * Formate une date ISO 8601 renvoyée par l'API GitHub en date lisible en français.
 *
 * @param {string} valeurIso - Date au format ISO 8601 (ex. « 2016-06-09T17:14:00Z »).
 * @returns {string} Date formatée (ex. « 9 juin 2016 »), ou une chaîne vide si la valeur est absente.
 */
export function formaterDate(valeurIso) {
  if (!valeurIso) {
    return "";
  }

  const date = new Date(valeurIso);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Formate un nombre selon la convention française (séparateur de milliers).
 *
 * @param {number} valeur - Nombre à formater.
 * @returns {string} Nombre formaté (ex. « 1 234 »).
 */
export function formaterNombre(valeur) {
  const nombre = Number(valeur);
  return Number.isFinite(nombre) ? new Intl.NumberFormat("fr-FR").format(nombre) : "0";
}
