import React, { Component } from 'react';
import Player from './Player'

export default class PlayerList extends Component {

  render() {
    return (
      <div>
        <h3>Players</h3>
        {this.props.players.map(player => <Player player={player} />)}
      </div>
    )
  }
}