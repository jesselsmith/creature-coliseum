import React, { Component } from 'react';
import PlayerForm from './PlayerForm'
import EditButton from '../statelessComponents/EditButton'


class Player extends Component{
  state = {
    showForm: false
  }

  displayInfoOrForm = () => {
    if(this.state.showForm){
      return <PlayerForm
        encounterId={this.props.player.relationships.encounter.id}
        method='PATCH'
        unmount={() => this.setState({showForm: false})}
        currentState={{
          name: this.props.player.attributes.name,
          level: this.props.player.attributes.level,
          encounter_id: this.props.player.relationships.encounter.id
        }}
        playerId = {this.props.player.id}
      />
    }else{
      return (
        <div>
          {this.props.player.attributes.name}, Level: { this.props.player.attributes.level}
          <EditButton edit={() =>{this.setState({showForm: true})}} />
          <button onClick={() => this.props.deletePlayer(this.props.player.id)} >X</button>
        </div >
      ) 
    }
  }

  render(){
    return this.displayInfoOrForm()
  }
}

export default Player