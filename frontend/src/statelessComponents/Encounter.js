import React from 'react';
import MonsterList from './MonsterList'
import PlayerList from './PlayerList'


const encounter = props => {
  return (
    <div>
      <h2>{props.encounter.attributes.title}</h2>
      <button class='delete' onClick={() => props.deleteEncounter(props.encounter.id) }>X</button>
      <div>Difficulty: {props.encounter.attributes.difficulty}</div>
      <MonsterList monsters={props.monsters} encounterId={props.encounter.id} />
      <PlayerList players={props.players} encounterId={props.encounter.id} />
      <div>Total XP: {props.encounter.attributes.xp}, Adjusted XP: {props.encounter.attributes.adjusted_xp}, XP Per Player: {props.encounter.attributes.xp_per_player}</div>
    </div>
  )
}

export default encounter