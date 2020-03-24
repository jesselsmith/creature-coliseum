import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchEncounters } from './actions/fetchActions'
import { fetchBreeds } from './actions/breedActions'
import NavBar from './componentsWithState/NavBar'

class App extends Component {
  componentDidMount = () => {
    document.title = 'Creature Coliseum'
    this.props.fetchEncounters()
    this.props.fetchBreeds()
  }

  render() {
    return (
        <Router>
          <div>
            <Route path="/" render={routerProps => <NavBar {...routerProps} />} />
          </div>
        </Router>
    )
  }
}


export default connect(null, { fetchEncounters, fetchBreeds })(App);