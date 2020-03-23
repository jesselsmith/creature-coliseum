import React, { Component } from 'react';
import { connect } from 'react-redux'
import Encounter from '../statelessComponents/Encounter'
import { Route } from 'react-router-dom'
import EncounterList from '../statelessComponents/EncounterList'
import { deleteEncounter, deletePlayer, deleteMonster } from '../actions/fetchActions'
import BreedList from './BreedList'

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
          <Route exact path={this.props.match.url} render={() => <h3>Choose and Encounter from the List Below or create one</h3>} />
          <Route path={`${this.props.match.url}/:encounterId`}
            render={routerProp => {
              const encounter = this.props.encounters.find(encounter => encounter.id === routerProp.match.params.encounterId)
              return (
                <div>
                  <div className='breed-list'>
                    <BreedList encounterId={encounter.id} />
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