## Let's start with React => Components, Props, State and filtering

First, clone the *repo* and run npm install.
On the repo you can see a fix branch. On the correction branch, each commit (cf history => https://github.com/jujuck/Robot-finder/commits/correction) corresponds to a stage of the project. You can therefore compare your code to the correction, at each stage of the project.

## A brief overview
You will find in the src folder, the app.js file (Application entry point). This imports the dataset that we are going to use and which is stored in a *data.json* file in the data folder. It is an array of 10 robot identity cards.

## Let's display our robots
- 1/ Create a simple robot map with a ```<div>``` and a ```<h2>``` which will display the name of the robot directly in the return of *app.js* with the method `map()`
- 2/ Complete the template with username, phone, email and website and add style
- 3/ Creation of a RobotCard component with the template in *./components/RobotCard.jsx* and replacement of the template by the tag `<RobotCard />`. We will think about importing the component in *App.js* and adding the `robot` props for data transfer
- 4/ Creation of a component `<RobotAdress />` allowing to display the information of the address (Suite, zipcode, city). Import and set up in the `<RobotCard />`. Then, we will add a *toggle* button allowing to display or not the address. Addition of a state [display, setDisplay] initialized to false. Onclick on the button, we invert the value of display (** if true, then false and if false then true **). Then we use this value to display or not the address information with a ternary operator. Integrate the css of this new step to finish.
- 5/ Addition of a robot image from its id in the component `<RobotCard />`. We will use the url *https://robohash.org/< Robot ID >?set=set2* as source. Feel free to style it.

## Let's filter our robots
- 6/ Addition of a search input in the *app.js*. We will memorize its value in a state created for the occasion. Consider your style.
- 7/ Implement the search result directly in the *return* of *app.js* by adding a `.filter()` function (cf doc => https://developer.mozilla.org/en-US/ docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and an includes (see doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) in your condition.

## Let's restructure our code
- 8/ Let's now pass our filter space into its own component. To do this, you will have to pass it the value of the state, as well as its method for the update.

## Congratulation. You have just made your first Robot search engine.
