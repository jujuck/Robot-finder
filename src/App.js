import React, { useState } from 'react';
import './App.css';
/** Import de la donnée */
import Robots from './data/data';
/** Import de composant */
import RobotCard from './components/RobotCard';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div class="searchContainer card">
        <label>
          Filtrer vos robots par nom
          <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>
      </div>
      <div className="robotContainer">
        {Robots.map((robot) => <RobotCard key={robot.id} robot={robot} />)}
      </div>
    </div>
  );
}

export default App;
