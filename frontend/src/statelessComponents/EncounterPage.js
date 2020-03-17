import React from 'react';
import { connect } from 'react-redux'
import Encounter from '../statelessComponents/Encounter'
import { Route } from 'react-router-dom'
import EncounterList from '../componentsWithState/EncounterList'

const encounterPage = props => {
  return (
    loadingEncounters(props)
  )
}
const loadingEncounters = props => {
  if (props.loading || props.encounters.length <= 0) {
    return <h2>Encounters loading...</h2>
  } else {
    return (
      <div>
        <Route exact path={props.match.url} component={EncounterList} />
        <Route path={`${props.match.url}/:encounterId`}
          render={routerProp => {
            const encounter = props.encounters.find(encounter => encounter.id === routerProp.match.params.encounterId)
            return <Encounter
              encounter={encounter}
              monsters={filterRelationships(encounter, props.monsters)}
              players={filterRelationships(encounter, props.players)}
            />
          }} />
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

export default connect(mapStateToProps)(encounterPage)