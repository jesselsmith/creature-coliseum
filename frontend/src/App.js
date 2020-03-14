import React, { Component } from 'react';
import EncounterList from './containers/EncounterList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>ENCOUNTERS</h1>
        <EncounterList />
      </div>
    )
  }
}

export default App;