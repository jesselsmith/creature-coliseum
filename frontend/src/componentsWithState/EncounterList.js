import React, { Component } from 'react';
import { connect } from 'react-redux'
import Encounter from '../statelessComponents/Encounter'
import EncounterForm from './EncounterForm'

class EncounterList extends Component {

  filterRelationships = (encounterFromList, relationshipArray) => {
    return relationshipArray.filter(relation => relation.relationships.encounter.data.id === encounterFromList.id)
  }

  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return this.props.encounters.map(encounter => {
        return (
          <div>
            <Encounter
              encounter={encounter}
              monsters={this.filterRelationships(encounter, this.props.monsters)}
              players={this.filterRelationships(encounter, this.props.players)}
              key={encounter.id}
            />
            <EncounterForm />
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <Route exact path={this.props.match.url} render={() => this.displayEncounterList} />
        <Route path={`${this.props.match.url}/:encounterId`} render={routerProp => <Encounter encounter={encounters[routerProp]} />} />
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

export default connect(mapStateToProps)(EncounterList)