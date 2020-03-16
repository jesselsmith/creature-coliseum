import React, { Component } from 'react';
import Monster from './Monster'

export default class MonsterList extends Component {

  render() {
    return (
      <div>
        <h3>Monsters</h3>
        {this.props.monsters.map(monster => <Monster monster={monster} key={monster.id} />)}
      </div>
    )
  }
}