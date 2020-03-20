import React from 'react';

const monster = props => {
  return (
    <div>
      {props.monster.attributes.name}, CR: { props.monster.attributes.cr}
      <button onClick={() => props.deleteMonster(props.monster.id)} >X</button>
    </div >
  )
}

export default monster