import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import EncounterPage from './statelessComponents/EncounterPage'
import { fetchEncounters } from './actions/fetchActions'
import { fetchBreeds } from './actions/breedActions'
import BreedList from './componentsWithState/BreedList'
import Home from './statelessComponents/Home'
import NavBar from './componentsWithState/NavBar'

class App extends Component {
  componentDidMount = () => {
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