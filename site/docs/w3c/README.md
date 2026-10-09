# Validation W3C

Le cahier des charges demande de fournir des **captures d'écran des résultats des
validateurs W3C**. Ce dossier les regroupe.

## Résultats

Toutes les validations ont été réalisées sur le site publié
(<https://orionlazu.github.io/cv-john-doe/>).

| Fichier | Contenu | Résultat |
|---|---|---|
| [`html-index.png`](html-index.png) | Validation de `index.html` | Aucune erreur ni avertissement |
| [`html-services.png`](html-services.png) | Validation de `services.html` | Aucune erreur ni avertissement |
| [`html-realisations.png`](html-realisations.png) | Validation de `realisations.html` | Aucune erreur ni avertissement |
| [`html-blog.png`](html-blog.png) | Validation de `blog.html` | Aucune erreur ni avertissement |
| [`html-contact.png`](html-contact.png) | Validation de `contact.html` | Aucune erreur ni avertissement |
| [`html-mentions-legales.png`](html-mentions-legales.png) | Validation de `mentions-legales.html` | Aucune erreur ni avertissement |
| [`html-react-app.png`](html-react-app.png) | Validation de la page de l'application React | Aucune erreur ni avertissement |
| [`css-style.png`](css-style.png) | Validation de `assets/css/style.css` | Aucune erreur |
| [`css-react-app.png`](css-react-app.png) | Validation de la feuille de style de l'application React | Aucune erreur |

### Avertissements du validateur CSS

Le validateur CSS affiche quelques avertissements, qui ne sont pas des erreurs :

- **« vendor extension »** sur la pile de polices : le validateur prend le nom
  de police système `-apple-system` pour une propriété propriétaire ;
- **« CSS variables are not statically checked »** : le validateur ne sait pas
  analyser les variables CSS (`var(--…)`), il le signale à titre d'information ;
- **« no background-color » / « no color »** : simples conseils de lisibilité,
  la couleur de fond `#EEE` étant héritée de l'élément `body`.

### Aperçu

![Validation HTML de la page d'accueil](html-index.png)

![Validation CSS de la feuille de style du site](css-style.png)

## Procédure

### 1. Validateur HTML — <https://validator.w3.org/nu/>

Une fois le site publié, la méthode la plus rapide est la validation par URL :

```
https://validator.w3.org/nu/?doc=https%3A%2F%2Forionlazu.github.io%2Fcv-john-doe%2Findex.html
```

Répétez pour chaque page en remplaçant `index.html`.

Avant publication, utilisez l'onglet **« Validate by File Upload »** (envoi du
fichier `.html`) ou **« Validate by Direct Input »** (copier-coller du code source).

Capturez l'écran affichant le message vert
**« Document checking completed. No errors or warnings to show. »**

### 2. Validateur CSS — <https://jigsaw.w3.org/css-validator/>

```
https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Forionlazu.github.io%2Fcv-john-doe%2Fassets%2Fcss%2Fstyle.css&profile=css3svg
```

Ou onglet **« Par upload de fichier »** avec `assets/css/style.css`.

Capturez l'écran affichant
**« Félicitations ! Aucune erreur trouvée. »**

## Remarque importante

Ne validez que **votre propre feuille de styles** `assets/css/style.css`.

Si vous validez la page entière, le validateur CSS analyse aussi **Bootstrap 5**
et **Font Awesome 6**, chargés depuis leur CDN. Ces fichiers tiers minifiés
génèrent des avertissements (propriétés propriétaires, valeurs expérimentales)
qui ne relèvent pas du code du projet et qu'il n'est pas possible de corriger
sans modifier les bibliothèques.

## Points contrôlés en amont

Le code livré a été vérifié sur les points suivants avant validation :

- DOCTYPE HTML5 et `lang="fr"` sur `<html>`
- `<meta charset>` et `<meta name="viewport">` présents
- Balises correctement imbriquées et fermées
- Aucun `id` dupliqué dans une même page
- Un seul `<h1>` par page, hiérarchie de titres sans saut de niveau
- Attribut `alt` sur toutes les images
- Attribut `title` sur l'iframe Google Maps
- `rel="noopener"` sur tous les liens `target="_blank"`
- Chaque champ de formulaire associé à un `<label for>`
- Toutes les ancres internes pointent vers un `id` existant
