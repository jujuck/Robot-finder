## Let's start with React => Components, Props, State and filtering

Premièrement, clone le *repo* et execute npm install.
Sur le repo, vous pouvez voir une branche correction. Sur la branche correction, chaque commit (cf history => https://github.com/jujuck/Robot-finder/commits/correction) correspond à une étape du projet. Vous pouvez donc comparez votre code à la correction, à chaque étape du projet.

## Un petit tour d'horizon
Tu trouveras dans le dossier src, le fichier app.js (Point d'entrée de l'application). Celui ci importe le jeux de données que nous allons utiliser et qui est stocké dans un fichier *data.json* dans le dossier data. C'est un tableau de 10 fiches d'identité de robot.

## Affichons nos robots
- 1/ Créer une carte simple de robot avec une ```<div>``` et un ```<h2>``` qui affichera le nom du robot directement dans le return de *app.js* avec la méthode `map()`
- 2/ Complète le template avec le username, phone, email et website et ajoute du style
- 3/ Création d'un composant RobotCard avec le template dans *./components/RobotCard.jsx* et remplacement du template par la balise `<RobotCard />`. On pensera à importer le composant dans *App.js* et à ajouter les props `robot` pour le transfert de donnée
- 4/ Création d'un composant `<RobotAdress />` permettant d'afficher les informations de l'adresse (Suite, zipcode, city). Import et mise en place dans le `<RobotCard />`. Puis, on va ajouter un bouton *toggle* permettant d'afficher ou non l'adresse. Ajout d'un state [display, setDisplay] initialisé à false. Onclick sur le bouton, on inverse la valeur de display (** si true, alors false et si false alors true **). Puis on se sert de cette valeur pour afficher ou non les infos adresse avec un opérateur ternaire. Intégrer le css de cette nouvelle étape pour finir.
- 5/ Ajout d'une image de robot à partir de son id dans le composant `<RobotCard />`. On utilisera l'url *https://robohash.org/< L'id du robot >?set=set2* comme source. N'hésites pas à le styliser.

## Filtrons nos robots
- 6/ Ajout d'un input de recherche dans le *app.js*. On memorisera sa valeur dans un state crée pour l'occasion. Pensez à votre style.
- 7/ Implementer le résultat de la recherche directement dans le *return* de *app.js* en ajoutant un  fonction `.filter()` (cf doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) et un includes (cf doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) dans votre conition.

## Restructurons notre code
- 8/ Passons maintenant notre espace de filtre dans son propre composant. Pour cela il faudra lui passer la valeur du state, ainsi que sa méthode pour la mise à jour.

## Félicitations. Vous venez de faire votre premier moteur de recherche de Robot.


