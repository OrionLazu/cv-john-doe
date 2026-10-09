# Crédits et sources des visuels

Les photographies proviennent du site [Pixabay](https://pixabay.com/fr/), qui les
diffuse sous licence libre pour un usage personnel et commercial. Le lien de
crédit figure sur la page des mentions légales, onglet « Crédits ».

Un seul visuel est encore une **composition vectorielle originale** créée pour le
projet, en attendant la photographie correspondante : il est signalé dans la
colonne « Source » ci-dessous.

## Images d'arrière-plan (CSS)

Trois variantes par image : la version mobile est chargée par défaut, les plus
lourdes ne le sont qu'au-delà des seuils définis dans `assets/css/style.css`.

| Fichier | Rôle | Dimensions | Chargée à partir de |
|---|---|---|---|
| `hero-accueil-768.jpg` | Bandeau d'accueil, mobile | 768 × 768 | 0 px |
| `hero-accueil-1024.jpg` | Bandeau d'accueil, tablette | 1024 × 587 | 768 px |
| `hero-accueil.jpg` | Bandeau d'accueil, desktop | 1920 × 1100 | 1200 px |
| `banniere-768.jpg` | Bandeau intérieur, mobile | 768 × 250 | 0 px |
| `banniere-1024.jpg` | Bandeau intérieur, tablette | 1024 × 300 | 768 px |
| `banniere.jpg` | Bandeau intérieur, desktop | 1920 × 300 | 1200 px |
| `contact-bg.jpg` | Fond de la page contact | 1920 × 1107 | 0 px |

## Images de contenu (balises `<img>`)

| Fichier | Rôle | Dimensions | Source |
|---|---|---|---|
| `john-doe.jpg` | Photo de la section « À propos » | 200 × 200 | Pixabay |
| `realisation-fresh-food.jpg` | Carte portfolio 1 | 560 × 400 | Pixabay |
| `realisation-restaurant-akira.jpg` | Carte portfolio 2 | 560 × 400 | Pixabay |
| `realisation-espace-bien-etre.jpg` | Carte portfolio 3 | 560 × 400 | Pixabay |
| `blog-html-css.jpg` | Article 1 | 560 × 400 | Pixabay |
| `blog-vendre-web.jpg` | Article 2 | 560 × 400 | Pixabay |
| `blog-google.jpg` | Article 3 | 560 × 400 | Pixabay |
| `blog-responsive.jpg` | Article 4 | 560 × 400 | Pixabay |
| `blog-referencement.jpg` | Article 5 | 560 × 400 | illustration originale |
| `blog-apprendre.jpg` | Article 6 | 560 × 400 | Pixabay |

## Icônes

| Fichier | Rôle | Dimensions |
|---|---|---|
| `../../favicon.ico` | Favicon | 16, 32 et 48 px |
| `apple-touch-icon.png` | Icône iOS | 180 × 180 |
| `icon-512.png` | Icône haute définition | 512 × 512 |

## Remplacer une image

Gardez le **même nom de fichier** et un **ratio proche** : les images de contenu
sont recadrées en `object-fit: cover` et les arrière-plans en `background-size:
cover`. Si vous changez franchement de format, pensez à mettre à jour les
attributs `width` et `height` de la balise `<img>` correspondante.
