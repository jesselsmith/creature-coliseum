import React, { Component } from 'react';
import MonsterForm from './MonsterForm'

class Monster extends Component{
  state = {
    showForm: false
  }

  displayInfoOrForm = () => {
    if(this.state.showForm){
      return <MonsterForm
        encounterId={this.props.monster.relationships.encounter.id}
        method={'PATCH'}
        unmount={() => this.setState({showForm: false})}
        currentState={{
          name: this.props.monster.attributes.name,
          cr: this.props.monster.attributes.cr,
          encounter_id: this.props.monster.relationships.encounter.id
        }}
        monsterId = {this.props.monster.id}
      />
    }else{
      return (
        <div>
          {this.props.monster.attributes.name}, CR: {this.props.monster.attributes.cr}
          <button onClick={() => this.props.deleteMonster(this.props.monster.id)} >X</button>
        </div >
      )
    }
  }

  render(){
    {displayInfoOrForm}
  }

}

 
export default Monster