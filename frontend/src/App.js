import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import EncounterPage from './componentsWithState/EncounterPage'
import { fetchEncounters } from './actions/fetchActions'
import { fetchBreeds } from './actions/breedActions'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchEncounters()
    this.props.fetchBreeds()
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/encounters" render={routerProps => <EncounterPage {...routerProps} />} />
        </div>
      </Router>
    )
  }
}


export default connect(state => ({ encounters: state.data.encounters }), { fetchEncounters })(App);