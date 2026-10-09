import { useCallback, useEffect, useState } from "react";

const API_GITHUB = "https://api.github.com/users";

/**
 * Hook personnalisé chargé de récupérer un profil public sur l'API GitHub.
 *
 * Il encapsule toute la gestion d'état de l'appel réseau :
 * données du profil, indicateur de chargement et message d'erreur.
 * La requête précédente est annulée (AbortController) si le pseudonyme change
 * avant la fin du chargement, ce qui évite les mises à jour concurrentes.
 *
 * @param {string} pseudonyme - Nom d'utilisateur GitHub à interroger.
 * @returns {{profil: object|null, chargement: boolean, erreur: string|null, recharger: Function}}
 */
export function useProfilGitHub(pseudonyme) {
  const [profil, setProfil] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [compteur, setCompteur] = useState(0);

  /** Force un nouvel appel à l'API avec le pseudonyme courant. */
  const recharger = useCallback(() => {
    setCompteur((valeur) => valeur + 1);
  }, []);

  useEffect(() => {
    const nom = (pseudonyme || "").trim();

    if (!nom) {
      setProfil(null);
      setChargement(false);
      setErreur("Merci de saisir un nom d'utilisateur GitHub.");
      return undefined;
    }

    const controleur = new AbortController();

    async function chargerProfil() {
      setChargement(true);
      setErreur(null);

      try {
        const reponse = await fetch(`${API_GITHUB}/${encodeURIComponent(nom)}`, {
          headers: { Accept: "application/vnd.github+json" },
          signal: controleur.signal,
        });

        if (reponse.status === 404) {
          throw new Error(`Aucun utilisateur GitHub ne correspond à « ${nom} ».`);
        }

        if (reponse.status === 403) {
          throw new Error(
            "Limite de requêtes de l'API GitHub atteinte. Merci de réessayer dans quelques minutes."
          );
        }

        if (!reponse.ok) {
          throw new Error(`Erreur ${reponse.status} lors de l'appel à l'API GitHub.`);
        }

        const donnees = await reponse.json();
        setProfil(donnees);
      } catch (exception) {
        if (exception.name === "AbortError") {
          return;
        }
        setProfil(null);
        setErreur(exception.message || "Une erreur inattendue est survenue.");
      } finally {
        if (!controleur.signal.aborted) {
          setChargement(false);
        }
      }
    }

    chargerProfil();

    return () => controleur.abort();
  }, [pseudonyme, compteur]);

  return { profil, chargement, erreur, recharger };
}
