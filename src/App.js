import React from 'react';
/** Import de la donnée */
import './App.css';

import Robots from './data/data';

function App() {
  console.log(Robots)
  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div className="robotContainer">
        {Robots.map((robot) => {
          return (<div key={robot.id} className="robotCard">
            <h3>{robot.name}</h3>
            <h4>{robot.username}</h4>
            <p><b>Email : </b><small>{robot.email}</small></p>
            <p><b>WebSite : </b><small>{robot.website}</small></p>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
