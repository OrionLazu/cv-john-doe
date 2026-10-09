# CV en ligne – John Doe

Site vitrine d'un développeur web full stack, réalisé dans le cadre du devoir
**« Optimisez votre CV en ligne avec React.js »** (CEF).

Ce dossier contient la **partie site statique** (HTML5, CSS3, Bootstrap 5, JavaScript vanilla).
L'application React qui affiche le profil GitHub se trouve dans le dossier
[`react-app/`](../react-app/) du même dépôt.

---

## Aperçu

| | |
|---|---|
| **Site en ligne** | <https://orionlazu.github.io/cv-john-doe/> |
| **Application React** | <https://orionlazu.github.io/cv-john-doe/react-app/> |
| **Pages** | Accueil, Services, Réalisations, Blog, Contact, Mentions légales |

---

## Prérequis

Le site est **100 % statique** : aucun build, aucune dépendance à installer.

| Outil | Version | Obligatoire |
|---|---|---|
| Navigateur moderne | Chrome / Firefox / Edge / Safari à jour | oui |
| Git | ≥ 2.30 | pour cloner le dépôt |
| Node.js | ≥ 18 | non — uniquement pour le serveur local optionnel |

Une **connexion internet est nécessaire** au premier chargement : Bootstrap 5,
Font Awesome 6 et la police Nunito Sans sont chargés depuis leurs CDN respectifs.

---

## Installation

```bash
git clone https://github.com/OrionLazu/cv-john-doe.git
cd cv-john-doe/site
```

## Lancement

### Option 1 — ouverture directe

Ouvrez `index.html` dans votre navigateur. Toutes les pages sont liées entre elles
par des chemins relatifs, l'ouverture en `file://` fonctionne.

### Option 2 — serveur local (recommandé)

Un serveur local évite les restrictions du protocole `file://` et reproduit
les conditions de l'hébergement.

```bash
# avec Node.js
npx serve .

# ou avec Python 3
python3 -m http.server 8000
```

Puis ouvrez <http://localhost:8000>.

### Option 3 — Visual Studio Code

Installez l'extension **Live Server**, faites un clic droit sur `index.html`
puis « Open with Live Server ».

---

## Structure du projet

```
site/
├── index.html               # Accueil : bandeau plein écran + section « À propos »
├── services.html            # Offre de services (3 prestations)
├── realisations.html        # Portfolio (3 réalisations)
├── blog.html                # Blog (6 articles)
├── contact.html             # Formulaire de contact + coordonnées + Google Map
├── mentions-legales.html    # Mentions légales (accordéon Bootstrap, non indexée)
├── favicon.ico
├── robots.txt               # Interdit l'indexation des mentions légales
├── sitemap.xml
├── .nojekyll                # Désactive Jekyll sur GitHub Pages
├── assets/
│   ├── css/style.css        # CSS personnalisé (charte graphique)
│   ├── js/script.js         # JavaScript vanilla (nav active, retour en haut, formulaire)
│   └── images/              # Illustrations, photo « À propos », visuels du portfolio
└── docs/
    └── w3c/                 # Captures d'écran des validateurs W3C
```

---

## Charte graphique

| Élément | Valeur |
|---|---|
| Police | **Nunito Sans** (Google Fonts) — 400 pour le corps, 600 pour les titres et `<strong>` |
| Icônes | **Font Awesome 6** |
| Couleur principale | `#0d6efd` |
| Couleur du texte | `#444` |
| Couleur des titres | `#1e1e1e` |
| Couleur de fond | `#EEE` |
| Balises `<strong>` | `#000000` |

### Effets demandés

| Effet | Implémentation |
|---|---|
| Survol d'un lien de navigation | `rgba(255, 255, 255, 0.8)` — `.jd-header .nav-link:hover` |
| Survol d'un article de la page services | icône en `#cde1f8` — `.jd-service:hover .jd-service-icone` |
| Survol du bouton « retour en haut » | fond `#298eff` — `.jd-haut-de-page:hover` |
| Superposition du bandeau d'accueil | `rgba(0, 0, 0, 0.3)` — `.jd-hero::before` |
| Superposition de la section contact | `rgba(0, 105, 255, 0.5)` — `.jd-contact::before` |

Tous les effets utilisent des **transitions CSS** et respectent la préférence
système `prefers-reduced-motion`.

---

## JavaScript (Vanilla JS, sans dépendance)

`assets/js/script.js` assure trois fonctions :

1. **Lien de navigation actif** — la classe `active` est appliquée en comparant
   le nom du fichier courant à la cible de chaque lien.
2. **Bouton « retour en haut »** — masqué en haut de page, il apparaît au-delà de
   300 px de défilement (écouteur `scroll` passif + `requestAnimationFrame`).
3. **Validation du formulaire de contact** — les cinq champs sont obligatoires ;
   la validation native HTML5 est complétée par les styles Bootstrap et par un
   contrôle du format du téléphone.

---

## Référencement naturel (SEO)

- Une balise `<title>` et une `<meta name="description">` uniques par page.
- Balises Open Graph et Twitter Card pour le partage sur les réseaux sociaux.
- Données structurées **JSON-LD** de type `Person` sur la page d'accueil.
- `<link rel="canonical">` sur chaque page.
- `sitemap.xml` et `robots.txt`.
- Page des mentions légales exclue de l'indexation via
  `<meta name="robots" content="noindex, nofollow">` **et** `robots.txt`.
- Liens sortants vers les réseaux sociaux en `rel="noopener noreferrer nofollow"`
  et `target="_blank"`.
- Structure de titres cohérente : un seul `<h1>` par page.
- Attributs `alt` descriptifs, `width`/`height` et `loading="lazy"` sur les images.

---

## Validation W3C

Les captures d'écran des validateurs se trouvent dans [`docs/w3c/`](docs/w3c/).

| Validateur | Adresse |
|---|---|
| HTML | <https://validator.w3.org/nu/> |
| CSS | <https://jigsaw.w3.org/css-validator/> |

> Le validateur CSS signale des avertissements sur les fichiers **Bootstrap** et
> **Font Awesome** chargés depuis leur CDN : ce sont des fichiers tiers minifiés,
> non modifiés par le projet. Le fichier `assets/css/style.css` est validé sans erreur.

---

## Déploiement

Le site est publié sur **GitHub Pages** par le workflow
[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), placé à la racine
du dépôt et déclenché à chaque `push` sur `main`. Le contenu de ce dossier est publié
à la racine du site, l'application React dans le sous-dossier `/react-app/`.

Pour activer la publication sur un nouveau dépôt :
**Settings → Pages → Build and deployment → Source : GitHub Actions**.

---

## Personnalisation

Les URL de production pointent vers <https://orionlazu.github.io/cv-john-doe/>.
Pour publier le site sur un autre compte, remplacez cette adresse dans :

- `robots.txt` et `sitemap.xml`
- les balises `<link rel="canonical">` et `<meta property="og:*">` des six pages,
  ainsi que les données structurées JSON-LD de `index.html`
- ce fichier `README.md`

Les liens `https://github.com/github-john-doe` du pied de page sont ceux du profil
fictif de John Doe : ils ne changent pas.

Un rechercher-remplacer sur l'ensemble du projet suffit
(`Ctrl+Maj+H` dans Visual Studio Code).

---

## Compatibilité et accessibilité

- Responsive : mobile (< 576 px), tablette (768 px) et desktop (≥ 992 px).
- Navigation repliée en menu « hamburger » sur mobile et tablette.
- Lien d'évitement vers le contenu principal.
- Libellés associés à chaque champ de formulaire, `aria-label` sur les liens icônes.
- Contrastes conformes aux recommandations WCAG AA.

---

## Licence

Code source sous licence MIT — voir [`LICENSE`](../LICENSE).
Les contenus textuels et les visuels sont fournis à titre d'exemple pédagogique.
