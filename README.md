# EditeurMd

EditeurMd est une application web réalisée avec React permettant d'éditer et de prévisualiser du texte au format Markdown en temps réel.

## Fonctionnalités

- Édition de texte Markdown dans une zone de texte.
- Prévisualisation instantanée du rendu HTML à partir du Markdown.
- Sauvegarde automatique du texte dans le navigateur (localStorage).
- Prise en charge des styles Bootstrap pour une interface moderne.
- Exemple de texte Markdown fourni au démarrage.

## Installation

1. Télécharger ce dépôt.

2. Installez les dépendances :

```sh
   npm install marked bootstrap
```

## Utilisation
Pour lancer l'application :

```sh
npm start
```

L'application sera accessible à l'adresse http://localhost:3000.

## Dépendances principales
- React
- marked (pour parser le Markdown)
- Bootstrap (pour le style)

## Structure du projet

- `src/App.js` : Composant principal de l'application.
- `src/sampleTexte.js` : Exemple de texte Markdown affiché au démarrage.
- `public/index.html` : Fichier HTML principal.

## Auteur

Montsy744 - Hugo Straseele

---
Ce projet a été créé dans le cadre d'un apprentissage React et Markdown.