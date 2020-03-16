import React from 'react';
import Monster from './Monster'
import MonsterForm from '../componentsWithState/MonsterForm'

const monsterList = props => {
  return (
    <div>
      <h3>Monsters</h3>
      {props.monsters.map(monster => <Monster monster={monster} key={monster.id} />)}
      <MonsterForm encounterId={props.encounterId} />
    </div>
  )
}

export default monsterList
