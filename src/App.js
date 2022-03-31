import React from 'react';
import './App.css';
/** Import de la donnée */
import Robots from './data/data';
/** Import de composant */
import RobotCard from './components/RobotCard';

function App() {
  console.log(Robots)
  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div className="robotContainer">
        {Robots.map((robot) => <RobotCard key={robot.id} robot={robot} />)}
      </div>
    </div>
  );
}

export default App;
