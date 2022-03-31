import React from 'react';

import RobotAdress from './RobotAdress';

const RobotCard = ({ robot }) => {
  return (
    <div className="robotCard">
      <h3>{robot.name}</h3>
      <h4>{robot.username}</h4>
      <p><b>Email : </b><small>{robot.email}</small></p>
      <p><b>WebSite : </b><small>{robot.website}</small></p>
      <RobotAdress address={robot.address} />
    </div>
  )
}

export default RobotCard