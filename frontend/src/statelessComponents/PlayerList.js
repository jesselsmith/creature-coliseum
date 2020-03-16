import React from 'react';
import Player from './Player'
import PlayerForm from '../componentsWithState/PlayerForm'

const playerList = props => {
  return (
    <div>
      <h3>Players</h3>
      {props.players.map(player => <Player player={player} key={player.id} />)}
      <PlayerForm encounterId={props.encounterId} />
    </div>
  )
}

export default playerList