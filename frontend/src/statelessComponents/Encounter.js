import React from 'react';
import MonsterList from './MonsterList'
import PlayerList from './PlayerList'


const encounter = props => {
  return (
    <div>
      <h2>{props.encounter.attributes.title}</h2>
      <div><MonsterList monsters={props.monsters} /></div>
      <div><PlayerList players={props.players} /></div>
    </div>
  )
}

export default encounter