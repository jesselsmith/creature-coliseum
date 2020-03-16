import React, { Component } from 'react';
import Monster from '../components/Monster'

export default class MonsterList extends Component {

  render() {
    return (
      <div>
        <h3>Monsters</h3>
        {this.props.monsters.map(monster => <Monster monster={monster} />)}
      </div>
    )
  }
}