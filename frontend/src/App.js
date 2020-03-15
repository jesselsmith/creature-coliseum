import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import EncounterList from './containers/EncounterList'
import { fetchEncounters } from './actions/fetchActions'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/encounters" render={routerProps => <EncounterList {...routerProps} />} />
      </Router>
    )
  }
}


export default connect(null, { fetchEncounters })(App);