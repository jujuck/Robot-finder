## Let's start with React => Components, Props, State and filtering

Premièrement, clone le *repo* et execute npm install

## Un petit tour d'horizon
Tu trouveras dans le dossier src, le fichier app.js (Point d'entrée de l'application). Celui ci importe le jeux de données que nous allons utiliser et qui est stocké dans un fichier *data.json* dans le dossier data. C'est un tableau de 10 fiches d'identité de robot.

## Affichons nos robots
- 1/ Créer une carte simple de robot avec une ```<div>``` et un ```<h2>``` qui affichera le nom du robot directement dans le return de *app.js* avec la méthode `map()`
- 2/ Complète le template avec le username, phone, email et website et ajoute du style
- 3/ Création d'un composant RobotCard avec le template dans *./component/RobotCard.jsx* et remplacement du template par la balise `<RobotCard />`. On pensera à importer le composant dans *App.js* et à ajouter les props `robot` pour le transfert de donnée
- 4/ Ajout d'un sous composant `<RobotAdress />` dans le `<RobotCard />`, et mise en place d'un template avec les infos suite, street zipcode et city
- 5/ Création d'un composant `<RobotAdress />` permettant d'afficher les informations de l'adresse (Suite, zipcode, city). Import et mise en place dans le `<RobotCard />`. Puis, on va ajouter un bouton *toggle* permettant d'afficher ou non l'adresse. Ajout d'un state [display, setDisplay] initialisé à false. Onclick sur le bouton, on inverse la valeur de display (** si true, alors false et si false alors true **). Puis on se sert de cette valeur pour afficher ou non les infos adresse avec un opérateur ternaire. Intégrer le css de cette nouvelle étape pour finir.


