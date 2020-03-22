import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breed from '../statelessComponents/Breed'
class BreedList extends Component {
  displayBreeds = () => {
    this.props.breeds.map(breed => {
      <Breed key={breed.id} breed={breed} />
    })
  }

  render(){
    return(
      <table>
        <th><td>Name</td><td>CR</td><td>Type</td><td>Size</td><td>Spell Caster?</td><td>AC</td><td>Attack Bonus</td></th>
        {this.displayBreeds()}
      </table>
    )
  }
}

export default connect(state => ({breeds: state.breeds.breeds }))