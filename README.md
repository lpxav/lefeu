# Papa, j’ai découvert le feu

**Papa, j’ai découvert le feu** est un site éducatif interactif en français pour les enfants d’environ 8 à 14 ans. Il raconte l’histoire de l’énergie humaine, du feu jusqu’à l’intelligence artificielle, avec un ton familial, curieux et nuancé.

Le projet est volontairement simple à déployer : **HTML, CSS et JavaScript uniquement**, sans backend et sans dépendance externe obligatoire.

## Fonctionnalités

- Page d’accueil immersive avec illustration CSS.
- Frise chronologique interactive.
- Chapitres générés depuis un objet JSON dans `data.js`.
- Cartes de bénéfices, dilemmes et dialogue père/enfant.
- Activités interactives simples : cartes cliquables, gestion de forêt, batterie, trajet d’une donnée, etc.
- Scores d’énergie sous forme de jauges.
- Progression locale avec `localStorage` : chapitres lus, dernier chapitre, pourcentage.
- Section “Je réfléchis” en accordéons.
- Mini-jeu final “Construis ta ville idéale”.
- Mode nuit.
- Design responsive mobile, tablette et desktop.

## Lancer le site localement

### Méthode la plus simple

Ouvrez directement `index.html` dans votre navigateur.

### Avec un petit serveur local

Si vous préférez servir le dossier comme un site statique, choisissez la commande adaptée à votre environnement.

#### Windows

Si `python3` affiche “Python est introuvable”, essayez d’abord le lanceur Windows :

```powershell
py -m http.server 8000
```

Si Python n’est pas installé, vous pouvez aussi utiliser Node.js :

```powershell
npx serve .
```

#### macOS / Linux

```bash
python3 -m http.server 8000
```

Puis ouvrez :

```text
http://localhost:8000
```

> Astuce : le site fonctionne aussi en ouvrant directement `index.html`, car il ne dépend d’aucun backend.

## Modifier les chapitres dans le JSON

Tout le contenu pédagogique est dans `data.js`, dans la constante globale `ENERGY_DATA`.

Pour ajouter ou modifier un chapitre :

1. Ouvrez `data.js`.
2. Modifiez le tableau `chapters`.
3. Respectez la structure d’un chapitre :
   - `id`
   - `order`
   - `title`
   - `period`
   - `theme`
   - `icon`
   - `story`
   - `simple_explanation`
   - `benefits`
   - `dilemmas`
   - `child_question`
   - `father_answer`
   - `activity`
   - `key_sentence`
   - `energy_scores`
4. Rechargez la page dans le navigateur.

Les grandes questions sont dans `big_questions`. Le mini-jeu final est configuré dans `final_city_game`.

## Déployer sur GitHub Pages

1. Créez un dépôt GitHub.
2. Ajoutez les fichiers : `index.html`, `style.css`, `app.js`, `data.js`, `README.md`.
3. Poussez le code sur la branche principale.
4. Dans GitHub : **Settings → Pages**.
5. Choisissez la branche `main` et le dossier racine `/`.
6. Enregistrez : GitHub Pages publiera le site.

## Déployer sur Netlify

1. Connectez votre dépôt GitHub à Netlify.
2. Choisissez le projet.
3. Laissez la commande de build vide.
4. Indiquez le dossier de publication : `/`.
5. Déployez.

## Idées d’amélioration futures

- Ajout d’illustrations générées ou dessinées à la main.
- Mode quiz avec score pédagogique.
- Version imprimable pour classe ou famille.
- Voix audio père/enfant.
- Sauvegarde de profils enfants.
- Export de progression.
- Activités drag & drop plus avancées.
- Fiches parents/enseignants.
