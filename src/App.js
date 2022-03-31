import React from 'react';
/** Import de la donnée */
import './App.css';

import Robots from './data/data';

function App() {
  console.log(Robots)
  return (
    <div className="App">
      <h1>Robot Finder</h1>
      {Robots.map((robot) => {
        return (<div key={robot.id}>
          <h3>{robot.name}</h3>
        </div>)
      })}
    </div>
  );
}

export default App;
