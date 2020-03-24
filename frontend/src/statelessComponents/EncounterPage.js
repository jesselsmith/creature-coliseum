import React, { Component } from 'react';
import { connect } from 'react-redux'
import Encounter from '../componentsWithState/Encounter'
import { Route } from 'react-router-dom'
import EncounterList from './EncounterList'
import { deleteEncounter, deletePlayer, deleteMonster } from '../actions/fetchActions'
import BreedList from '../componentsWithState/BreedList'

class EncounterPage extends Component{
  filterRelationships = (encounterFromList, relationshipArray) => {
    return relationshipArray.filter(relation => relation.relationships.encounter.data.id === encounterFromList.id)
  }

  displayEncounter = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return (
        <div>
          <Route exact path={this.props.match.url} render={() => <h3>Choose an Encounter from the List Below or Create One</h3>} />
          <Route path={`${this.props.match.url}/:encounterId`}
            render={routerProp => {
              debugger
              const encounter = this.props.encounters.find(encounter => encounter.id === routerProp.match.params.encounterId)
              return (
                <div>
                  <div className='breed-list'>
                    <BreedList encounterId={encounter.id} url={routerProp.match.url} />
                  </div>
                  <Encounter
                    encounter={encounter}
                    monsters={this.filterRelationships(encounter, this.props.monsters)}
                    players={this.filterRelationships(encounter, this.props.players)}
                    deleteEncounter={this.props.deleteEncounter}
                    deletePlayer={this.props.deletePlayer}
                    deleteMonster={this.props.deleteMonster}
                  />
                </div>
              )
              
            }} />
          <EncounterList encounters={this.props.encounters} loading={this.props.loading} />
        </div>
      )
    }
  }

  render(){
    return this.displayEncounter()
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

export default connect(mapStateToProps, { deleteEncounter, deletePlayer, deleteMonster })(EncounterPage)