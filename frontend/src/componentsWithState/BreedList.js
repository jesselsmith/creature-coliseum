import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breed from '../statelessComponents/Breed'
class BreedList extends Component {
  displayBreeds = () => {
    this.props.breeds.map(breed => {
      <tr key={breed.id}><Breed breed={breed} /></tr>
    })
  }

  render(){
    return(
      <table>
        {this.displayBreeds()}
      </table>
    )
  }
}

export default connect(state => ({breeds: state.breeds.breeds }))