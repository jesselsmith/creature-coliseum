import React from 'react';
import { connect } from 'react-redux'
import Encounter from '../statelessComponents/Encounter'
import { Route } from 'react-router-dom'
import EncounterList from './EncounterList'
import { deleteEncounter, deletePlayer, deleteMonster } from '../actions/fetchActions'
import BreedList from './BreedList'

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
            return (
              <div>
                <div className='breed-list'>
                  <BreedList encounterId={encounter.id} />
                </div>
                <Encounter
                  encounter={encounter}
                  monsters={filterRelationships(encounter, props.monsters)}
                  players={filterRelationships(encounter, props.players)}
                  deleteEncounter={props.deleteEncounter}
                  deletePlayer={props.deletePlayer}
                  deleteMonster={props.deleteMonster}
                />
              </div>
            )
            
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