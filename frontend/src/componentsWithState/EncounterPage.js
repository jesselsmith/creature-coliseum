import React from 'react';
import { connect } from 'react-redux'
import Encounter from '../statelessComponents/Encounter'
import { Route } from 'react-router-dom'
import EncounterList from './EncounterList'

const encounterPage = props => {
  if (props.loading) {
    return <h2>Encounters loading...</h2>
  } else {
    return (
      <div>
        <Route exact path={props.match.url} render={() => <h3>Choose and Encounter from the List Below or create one</h3>} />
        <Route path={`${props.match.url}/:encounterId`}
          render={routerProp => {
            const encounter = props.encounters.find(encounter => encounter.id === routerProp.match.params.encounterId)
            return <Encounter
              encounter={encounter}
              monsters={filterRelationships(encounter, this.props.monsters)}
              players={filterRelationships(encounter, this.props.players)}
              deleteEncounter={this.props.deleteEncounter}
              deletePlayer={this.props.deletePlayer}
              deleteMonster={this.props.deleteMonster}
            />
          }} />
        <EncounterList encounters={props.encounters} loading={props.loading} />
      </div>
    )
  }
}

const filterRelationships = (encounterFromList, relationshipArray) => {
  return relationshipArray.filter(relation => relation.relationships.encounter.data.id === encounterFromList.id)
}

const mapStateToProps = state => {
  return ({
    encounters: state.data.encounters,
    monsters: state.data.monsters,
    players: state.data.players,
    loading: state.data.loading
  })
}

export default connect(mapStateToProps, { deleteEncounter, deletePlayer, deleteMonster })(encounterPage)