import React, { Component } from 'react';
import { connect } from 'react-redux'
import Encounter from '../components/Encounter'
import { addEncounter } from '../actions/encounterActions'

class EncounterList extends Component {

  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      debugger
      return this.props.encounters.map(encounter => <Encounter encounter={encounter} key={encounter.id} />)
    }
  }
  render() {
    return (
      <div>
        {this.displayEncounterList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    encounters: state.encountersReducer.encounters,
    loading: state.encountersReducer.loading
  })
}

export default connect(mapStateToProps, { addEncounter })(EncounterList)