import React from 'react';
import Monster from '../componentsWithState/Monster'
import MonsterForm from '../componentsWithState/MonsterForm'

const monsterList = props => {
  return (
    <div>
      <h3>Monsters</h3>
      {props.monsters.map(monster => <Monster monster={monster} key={monster.id} deleteMonster={props.deleteMonster} />)}
      <MonsterForm encounterId={props.encounterId} />
    </div>
  )
}

export default monsterList
