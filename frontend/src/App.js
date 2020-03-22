import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import EncounterPage from './componentsWithState/EncounterPage'
import { fetchEncounters } from './actions/fetchActions'
import { fetchBreeds } from './actions/breedActions'
import BreedList from './componentsWithState/BreedList';

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
          <Route path='/breeds' component={BreedList} />
        </div>
      </Router>
    )
  }
}


export default connect(null, { fetchEncounters, fetchBreeds })(App);