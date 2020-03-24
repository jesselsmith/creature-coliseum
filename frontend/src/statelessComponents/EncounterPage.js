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

  generateEncounterList =() => {
    return <EncounterList encounters={this.props.encounters} loading={this.props.loading} />
  }

  displayEncounter = () => {
    if (this.props.loading) {
      return <h2 className='main'>Encounters loading...</h2>
    } else {
      return (
        <div className='main'>
          <Route exact path={this.props.match.url} render={() => {
            return(
              <div>
                <h3>Choose an Encounter from the List Below or Create One</h3>
                {this.generateEncounterList()}
              </div>
            )
          }} />
          <Route path={`${this.props.match.url}/:encounterId`}
            render={routerProp => {
              const encounter = this.props.encounters.find(encounter => encounter.id === routerProp.match.params.encounterId)
              return (
                <div>
                  <div className='encounter'>
                    <Encounter
                      encounter={encounter}
                      monsters={this.filterRelationships(encounter, this.props.monsters)}
                      players={this.filterRelationships(encounter, this.props.players)}
                      deleteEncounter={this.props.deleteEncounter}
                      deletePlayer={this.props.deletePlayer}
                      deleteMonster={this.props.deleteMonster}
                    />
                    {this.generateEncounterList()}
                  </div>
                  <div className='breed-list'>
                    <BreedList encounterId={encounter.id} url={routerProp.match.url} />
                  </div>
                </div>
              )
            }} />
          
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