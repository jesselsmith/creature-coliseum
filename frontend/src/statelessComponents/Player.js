import React from 'react';

const player = props => {
  return (
    <div>
      {props.player.attributes.name}, Level: { props.player.attributes.level}
      <button onClick={() => props.deletePlayer(props.player.id)} >X</button>
    </div >
  )
}

export default player