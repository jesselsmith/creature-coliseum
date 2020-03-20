import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Encounter from '../statelessComponents/Encounter'
import EncounterForm from './EncounterForm'
import { deleteEncounter, deletePlayer, deleteMonster } from '../actions/fetchActions'

class EncounterList extends Component {

  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return this.props.encounters.map(encounter => {
        return (
          <li key={encounter.id}><Link to={`/encounters/${encounter.id}`}>{encounter.attributes.title}</Link></li>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <h2>Encounters</h2>
        <EncounterForm />
        <ul>
          {this.displayEncounterList()}
        </ul>
      </div>
    )
  }
}

export default EncounterList