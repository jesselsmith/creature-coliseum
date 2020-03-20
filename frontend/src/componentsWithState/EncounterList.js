import React, { Component } from 'react';
import { connect } from 'react-redux'
import Encounter from '../statelessComponents/Encounter'
import EncounterForm from './EncounterForm'
import { deleteEncounter } from '../actions/fetchActions'

class EncounterList extends Component {

  filterRelationships = (encounterFromList, relationshipArray) => {
    return relationshipArray.filter(relation => relation.relationships.encounter.data.id === encounterFromList.id)
  }

  removeEncounter = encounterId => {
    this.props.deleteEncounter(encounterId)
  }

  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return this.props.encounters.map(encounter => {
        return (
          <Encounter
            encounter={encounter}
            monsters={this.filterRelationships(encounter, this.props.monsters)}
            players={this.filterRelationships(encounter, this.props.players)}
            deleteEncounter={this.removeEncounter}
            key={encounter.id}
          />
        )
      })
    }
  }
  render() {
    return (
      <div>
        {this.displayEncounterList()}
        <EncounterForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    encounters: state.data.encounters,
    monsters: state.data.monsters,
    players: state.data.players,
    loading: state.data.loading
  })
}

export default connect(mapStateToProps, { deleteEncounter })(EncounterList)