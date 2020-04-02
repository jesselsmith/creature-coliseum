import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EncounterForm from '../componentsWithState/EncounterForm'

class EncounterList extends Component {
  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return this.props.encounters.map(encounter => {
        return (
          <li key={encounter.id}>
            <Link to={`/encounters/${encounter.id}`}>
                <button>{encounter.attributes.title} APL: {encounter.attributes.average_player_level} Difficulty: {encounter.attributes.difficulty}</button>
            </Link>
            </li>
        )
      })
    }
  }
  
  render() {
    return (
      <div className='encounter-list'>
        <h2>Encounters</h2>
        <EncounterForm method={'POST'} />
        <h3>Saved Encounters:</h3>
        <ul className='encounter-list'>
          {this.displayEncounterList()}
        </ul>
      </div>
    )
  }
}

export default EncounterList