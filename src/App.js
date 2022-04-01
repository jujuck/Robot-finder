import React, { useState } from 'react';
import './App.css';
/** Import de la donnée */
import Robots from './data/data';
/** Import de composant */
import RobotCard from './components/RobotCard';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div class="searchContainer card">
        <Search search={search} handleSearchUpdate={setSearch} />
      </div>
      <div className="robotContainer">
        {Robots
          .filter(robot => robot.name.includes(search))
          .map((robot) => <RobotCard key={robot.id} robot={robot} />)}
      </div>
    </div>
  );
}

export default App;
