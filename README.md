# CV en ligne de John Doe

Devoir du Centre Européen de Formation : **« Optimisez votre CV en ligne avec React.js »**.

Le dépôt regroupe les deux parties du projet :

| Dossier | Contenu | En ligne |
|---|---|---|
| [`site/`](site/) | Site vitrine statique : HTML5, CSS3, Bootstrap 5, JavaScript vanilla | <https://orionlazu.github.io/cv-john-doe/> |
| [`react-app/`](react-app/) | Application React affichant les informations d'un profil GitHub | <https://orionlazu.github.io/cv-john-doe/react-app/> |

Chaque dossier possède son propre README détaillé.

---

## Prérequis

| Outil | Version | Utilisé pour |
|---|---|---|
| Navigateur récent | Chrome, Firefox, Edge ou Safari à jour | les deux parties |
| Git | 2.30 ou plus | cloner le dépôt |
| [Node.js](https://nodejs.org/) | 18 ou plus (20 LTS recommandé) | l'application React (facultatif pour le site) |
| npm | 9 ou plus (livré avec Node.js) | l'application React |

Une connexion internet est nécessaire : Bootstrap 5, Font Awesome 6 et la police
Nunito Sans sont chargés depuis leurs CDN, et l'application React interroge l'API GitHub.

---

## Installation

```bash
git clone https://github.com/OrionLazu/cv-john-doe.git
cd cv-john-doe
```

Le site vitrine ne demande aucune installation. Pour l'application React :

```bash
cd react-app
npm install
```

---

## Lancement

### Site vitrine

```bash
cd site
npx serve .
```

Puis ouvrez l'adresse affichée dans le terminal (<http://localhost:3000> par défaut).
Le site s'ouvre aussi directement en double-cliquant sur `site/index.html`, ou avec
l'extension **Live Server** de Visual Studio Code.

### Application React

```bash
cd react-app
npm run dev
```

L'application est disponible sur <http://localhost:3000>.

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Build de production dans `react-app/dist/` |
| `npm run preview` | Sert le build de production sur <http://localhost:4173> |
| `npm run lint` | Vérification du code avec ESLint |

---

## Structure du dépôt

```
cv-john-doe/
├── site/                     # Site vitrine (6 pages HTML)
│   ├── assets/               #   CSS, JavaScript et images
│   ├── docs/w3c/             #   Captures des validateurs W3C
│   ├── robots.txt
│   └── sitemap.xml
├── react-app/                # Application React (Vite)
│   ├── src/
│   │   ├── App.jsx           #   Composant principal fonctionnel
│   │   ├── hooks/            #   Hook personnalisé d'appel à l'API GitHub
│   │   └── components/       #   Composant séparé d'affichage du profil
│   └── package.json
└── .github/
    ├── workflows/deploy.yml  # Build et déploiement sur GitHub Pages
    └── PULL_REQUEST_TEMPLATE.md
```

---

## Déploiement

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) se
déclenche à chaque `push` sur `main`. Il construit l'application React, puis
publie sur **GitHub Pages** :

- le contenu de `site/` à la racine : <https://orionlazu.github.io/cv-john-doe/> ;
- le build de `react-app/` dans le sous-dossier `/react-app/`.

## Validation W3C

Les captures des validateurs HTML et CSS du W3C, ainsi que la procédure suivie,
se trouvent dans [`site/docs/w3c/`](site/docs/w3c/).

## Organisation du travail

Chaque étape a fait l'objet d'une issue, d'une branche dédiée et d'une pull request
vers `develop`. `develop` est fusionnée dans `main` à chaque version.

## Licence

Code source sous licence MIT : voir [`LICENSE`](LICENSE).
