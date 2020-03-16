import React from 'react';

const player = props => {
  return (
    <div>
      {props.player.attributes.name}, Level: { props.player.attributes.level}
    </div >
  )
}

export default player