import React from 'react'

const RobotCard = ({ robot }) => {
  return (
    <div className="robotCard">
      <h3>{robot.name}</h3>
      <h4>{robot.username}</h4>
      <p><b>Email : </b><small>{robot.email}</small></p>
      <p><b>WebSite : </b><small>{robot.website}</small></p>
    </div>
  )
}

export default RobotCard