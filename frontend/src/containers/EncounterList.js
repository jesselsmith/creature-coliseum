import React, { Component } from 'react';
import { connect } from 'react-redux'
import Encounter from '../components/Encounter'
import { addEncounter } from '../actions/encounterActions'

class EncounterList extends Component {
  render() {
    return (
      <div>
        {this.props.encounters.map(encounter => <Encounter encounter={encounter} key={encounter.id} />)}
      </div>
    )
  }
}

export default connect(state => ({ encounters: state.encounters }), { addEncounter })(EncounterList)