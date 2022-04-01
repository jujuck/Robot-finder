import React from 'react';

import RobotAdress from './RobotAdress';

const RobotCard = ({ robot }) => {
  return (
    <div className="card">
      <h3>{robot.name}</h3>
      <h4>{robot.username}</h4>
      <p><b>Email : </b><small>{robot.email}</small></p>
      <p><b>WebSite : </b><small>{robot.website}</small></p>
      <div className="col-6 text-center">
        <img className="img-robot" src={`https://robohash.org/${robot.id}?set=set2`} alt={robot.name} />
      </div>
      <RobotAdress address={robot.address} />
    </div>
  )
}

export default RobotCard