# Profil GitHub – Application React

Application **React** qui affiche les informations publiques d'un profil GitHub,
récupérées en direct via l'[API REST de GitHub](https://docs.github.com/en/rest).

Réalisée dans le cadre du devoir **« Optimisez votre CV en ligne avec React.js »** (CEF).
Le site vitrine qui l'accompagne se trouve dans le dossier
[`site/`](../site/) du même dépôt.

---

## Aperçu

| | |
|---|---|
| **Application en ligne** | <https://orionlazu.github.io/cv-john-doe/react-app/> |
| **CodeSandbox** | <https://codesandbox.io/s/github/OrionLazu/cv-john-doe/tree/main/react-app> |
| **Profil interrogé par défaut** | `github-john-doe` |
| **Point d'entrée de l'API** | `https://api.github.com/users/github-john-doe` |

L'application affiche : le nom, l'avatar, la biographie, le nombre d'abonnés,
le nombre d'abonnements, le nombre de dépôts publics, la localisation, le site web,
la date de création et de dernière modification du compte, ainsi que l'URL des dépôts.

Un champ de recherche permet d'interroger **n'importe quel autre profil GitHub**.

---

## Prérequis

| Outil | Version minimale |
|---|---|
| [Node.js](https://nodejs.org/) | **18.0** (20 LTS recommandé) |
| npm | **9** (livré avec Node.js) |
| Git | 2.30 |

Vérifiez votre installation :

```bash
node --version
npm --version
```

---

## Installation

```bash
git clone https://github.com/OrionLazu/cv-john-doe.git
cd cv-john-doe/react-app
npm install
```

## Lancement

### Serveur de développement

```bash
npm run dev
```

L'application est disponible sur <http://localhost:3000> avec rechargement à chaud.

### Build de production

```bash
npm run build     # génère le dossier dist/
npm run preview   # sert le build sur http://localhost:4173
```

### Vérification du code

```bash
npm run lint
```

---

## Structure du projet

```
react-app/
├── index.html                       # Page hôte : contient <div id="root">
├── vite.config.js                   # Configuration Vite (base GitHub Pages)
├── sandbox.config.json              # Configuration CodeSandbox
├── package.json
├── package-lock.json                # Versions exactes des dépendances (npm ci)
└── src/
    ├── main.jsx                     # Point d'entrée : monte <App /> dans #root
    ├── App.jsx                      # COMPOSANT PRINCIPAL FONCTIONNEL (état + composition)
    ├── hooks/
    │   └── useProfilGitHub.js       # HOOK PERSONNALISÉ : appel API, chargement, erreur
    ├── components/
    │   ├── EnTete.jsx               # Titre de l'application
    │   ├── FormulaireRecherche.jsx  # Champ contrôlé pour changer de profil
    │   ├── ProfilGitHub.jsx         # COMPOSANT SÉPARÉ D'AFFICHAGE DU PROFIL
    │   ├── Indicateur.jsx           # Tuile statistique réutilisable
    │   ├── Chargement.jsx           # Indicateur de chargement
    │   └── MessageErreur.jsx        # Message d'erreur + bouton « Réessayer »
    ├── utils/
    │   └── dates.js                 # Formatage des dates et des nombres en français
    └── styles/
        └── index.css                # Styles de l'application (charte du site)
```

---

## Architecture React

### Composants fonctionnels et hooks

L'application n'utilise **que des composants fonctionnels**. Aucun composant de classe.

| Hook | Où | Rôle |
|---|---|---|
| `useState` | `App.jsx` | Mémorise le pseudonyme GitHub recherché |
| `useState` | `useProfilGitHub.js` | Mémorise le profil, l'état de chargement et l'erreur |
| `useState` | `FormulaireRecherche.jsx` | Champ de saisie contrôlé |
| `useEffect` | `useProfilGitHub.js` | Déclenche l'appel à l'API quand le pseudonyme change |
| `useEffect` | `FormulaireRecherche.jsx` | Resynchronise le champ avec la valeur du parent |
| `useCallback` | `App.jsx`, `useProfilGitHub.js` | Stabilise les fonctions passées en props |

### Séparation des responsabilités

```
App.jsx  ──(état : pseudonyme)──►  useProfilGitHub  ──►  fetch(api.github.com)
   │                                     │
   │                            { profil, chargement, erreur }
   │                                     │
   └──────────►  <ProfilGitHub profil={profil} />   ← affichage uniquement
```

`ProfilGitHub.jsx` est une **fonction séparée dédiée à l'affichage** : elle ne
réalise aucun appel réseau et ne gère aucun état. Elle reçoit les données en
props et se contente de les mettre en forme, conformément au cahier des charges.

### Gestion des états de l'interface

| Situation | Rendu |
|---|---|
| Requête en cours | `<Chargement />` (spinner Bootstrap, `aria-live="polite"`) |
| Utilisateur introuvable (404) | `<MessageErreur />` : « Aucun utilisateur GitHub ne correspond à … » |
| Quota d'API dépassé (403) | `<MessageErreur />` : « Limite de requêtes de l'API GitHub atteinte… » |
| Autre erreur HTTP | `<MessageErreur />` avec le code de statut |
| Succès | `<ProfilGitHub />` |

Un `AbortController` annule la requête précédente si le pseudonyme change avant
la fin du chargement, ce qui évite les mises à jour d'état concurrentes.

> **À savoir :** l'API GitHub publique est limitée à **60 requêtes par heure et par
> adresse IP** sans authentification. Au-delà, l'application affiche un message
> explicite avec un bouton « Réessayer ».

---

## Déploiement

### GitHub Pages (automatique)

Le workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml),
placé à la racine du dépôt, vérifie le code, construit l'application et la publie
dans le sous-dossier `/react-app/` du site à chaque `push` sur `main`.

Activation : **Settings → Pages → Build and deployment → Source : GitHub Actions**.

Le champ `base` de `vite.config.js` vaut `/cv-john-doe/react-app/` en production :
il doit correspondre à l'adresse de publication, sinon les fichiers CSS et JS ne
seront pas trouvés et la page restera blanche.

### CodeSandbox

Le cahier des charges autorise explicitement l'hébergement sur CodeSandbox.
Importez le dépôt depuis <https://codesandbox.io/p/github> ou ouvrez directement
le sous-dossier `react-app` :

```
https://codesandbox.io/s/github/OrionLazu/cv-john-doe/tree/main/react-app
```

Le fichier `sandbox.config.json` configure le conteneur Node et le port 3000.

---

## Personnalisation

Deux notions à ne pas confondre :

| Où | Quoi | Faut-il le changer ? |
|---|---|---|
| `package.json` (`homepage`, `repository`), `vite.config.js` (`base`), ce README | Le **compte et le dépôt qui hébergent** l'application | Oui, avec vos propres nom d'utilisateur et nom de dépôt |
| `PSEUDONYME_PAR_DEFAUT` dans `src/App.jsx` | Le **profil GitHub affiché** au chargement | Non : `github-john-doe` est le profil prévu par le sujet |

---

## Accessibilité et qualité

- Structure sémantique : `<header>`, `<main>`, `<footer>`, `<article>`, `<dl>`.
- Le champ de recherche possède un `<label>` (masqué visuellement).
- L'indicateur de chargement est annoncé aux lecteurs d'écran (`role="status"`).
- Les icônes décoratives portent `aria-hidden="true"`.
- Les liens externes utilisent `rel="noopener noreferrer"`.
- Les dates sont dans des balises `<time datetime="…">`.
- L'avatar possède un attribut `alt` descriptif.
- La préférence système `prefers-reduced-motion` est respectée.

---

## Licence

MIT — voir [`LICENSE`](../LICENSE).
