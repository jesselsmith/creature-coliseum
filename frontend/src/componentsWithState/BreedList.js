import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breed from '../statelessComponents/Breed'
import { postMonster } from '../actions/fetchActions'

class BreedList extends Component {

  state = {
    currentPage: 1,
    numPage: this.props.breeds.length / 50 + 1
  }

  addMonsterFromBreed = breedId => {
    this.props.postMonster({ breed_id: breedId, encounter_id: this.props.encounterId })
  }

  displayBreeds = () => {
    if(this.props.loading){
      return <tr><td>Monsters Loading...</td></tr>
    }else{
      const index = this.state.currentPage * 50 - 50
      return this.props.breeds.slice(index, index + 50).map(breed => {
        return <Breed key={breed.id} breed={breed} addMonster={this.addMonsterFromBreed} />
      })
    }
  }

  render(){
    return(
      <div className='breed-list'>
        <BreedSearch />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>CR</th>
              <th>Type</th>
              <th>Size</th>
              <th>Spell Caster?</th>
              <th>AC</th>
              <th>Attack Bonus</th>
            </tr>
          </thead>
          <tbody>
            {this.displayBreeds()}
          </tbody>
        </table>
      </div>
      
    )
  }
}

export default connect(state => ({breeds: state.breeds.breeds, loading: state.breeds.loading }), { postMonster } )(BreedList)