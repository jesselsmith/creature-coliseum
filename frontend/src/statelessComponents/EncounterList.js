import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EncounterForm from './EncounterForm'

class EncounterList extends Component {

  displayEncounterList = () => {
    if (this.props.loading) {
      return <h2>Encounters loading...</h2>
    } else {
      return this.props.encounters.map(encounter => {
        return (
          <li key={encounter.id}>
            <Link to={`/encounters/${encounter.id}`}>
                {encounter.attributes.title} APL: {encounter.attributes.average_player_level} Difficulty: {encounter.attributes.difficulty}
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
        <EncounterForm />
        <ul>
          {this.displayEncounterList()}
        </ul>
      </div>
    )
  }
}

export default EncounterList