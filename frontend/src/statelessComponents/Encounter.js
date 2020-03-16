import React from 'react';
import MonsterList from './MonsterList'
import PlayerList from './PlayerList'


const encounter = props => {
  return (
    <div>
      <h2>{props.encounter.attributes.title}</h2>
      <MonsterList monsters={props.monsters} encounterId={props.encounter.id} />
      <PlayerList players={props.players} encounterId={props.encounter.id} />
    </div>
  )
}

export default encounter