import React, { Component } from 'react';
import { connect } from 'react-redux'
import { link } from 'react-router-dom'
import Encounter from '../statelessComponents/Encounter'
import EncounterForm from './EncounterForm'
import { deleteEncounter, deletePlayer, deleteMonster } from '../actions/fetchActions'

class EncounterList extends Component {

  filterRelationships = (encounterFromList, relationshipArray) => {
    return relationshipArray.filter(relation => relation.relationships.encounter.data.id === encounterFromList.id)
  }

  removeEncounter = encounterId => {
    this.props.deleteEncounter(encounterId)
  }

  removePlayer = playerId => {
    this.props.deletePlayer(playerId)
  }

  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return this.props.encounters.map(encounter => {
        return (
          <Link key={encounter.id} to={`/encounters/${encounter.id}`}>{encounter.title}</Link>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <EncounterForm />
        {this.displayEncounterList()}
      </div>
    )
  }
}

export default EncounterList