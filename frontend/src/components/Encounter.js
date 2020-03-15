import React from 'react';
import MonsterList from '../containers/MonsterList'
import PlayerList from '../containers/PlayerList'


const encounter = props => {
  return (
    <div>
      <h2>{props.attributes.title}</h2>
      <div>Monster List</div>
      <div>Player List</div>
    </div>
  )
}

export default encounter