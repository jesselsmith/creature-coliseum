import React, {Component} from 'react';
import MonsterList from '../statelessComponents/MonsterList'
import PlayerList from '../statelessComponents/PlayerList'
import EditButton from '../statelessComponents/EditButton'
import EncounterForm from './EncounterForm'


class Encounter extends Component{

  state ={ 
    showForm: false
  }

  displayTitleOrForm = () => {
    if(this.state.showForm){
      return(
        <div>Edit Title:
          <EncounterForm 
            method={'PATCH'}
            encounterId={this.props.encounter.id}
            unmount={() => this.setState({showForm: false})}
            currentTitle={this.props.encounter.attributes.title}
          />
        </div>
      )
    }else{
      return(
        <div>
          <h2>{this.props.encounter.attributes.title}</h2>
          <EditButton edit={() =>{this.setState({showForm: true})}} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.displayTitleOrForm()}
        <button className='delete' onClick={() => this.props.deleteEncounter(this.props.encounter.id) }>X</button>
        <div>Difficulty: {this.props.encounter.attributes.difficulty}</div>
        <MonsterList monsters={this.props.monsters} encounterId={this.props.encounter.id} deleteMonster={this.props.deleteMonster}/>
        <PlayerList players={this.props.players} encounterId={this.props.encounter.id} deletePlayer={this.props.deletePlayer} />
        <div>Total XP: {this.props.encounter.attributes.xp}, Adjusted XP: {this.props.encounter.attributes.adjusted_xp}, XP Per Player: {this.props.encounter.attributes.xp_per_player}</div>
      </div>
    )
  }
}

export default Encounter