import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breed from '../statelessComponents/Breed'
import BreedSearch from './BreedSearch'
import { postMonster } from '../actions/fetchActions'
import BreedPageButtons from '../statelessComponents/BreedPageButtons'

class BreedList extends Component {

  PAGE_LENGTH = 25

  state = {
    currentPage: 1
  }

  addMonsterFromBreed = breedId => {
    this.props.postMonster({ breed_id: breedId, encounter_id: this.props.encounterId })
  }

  displayBreeds = () => {
    if(this.props.loading){
      return <tr><td>Monsters Loading...</td></tr>
    }else{
      const index = this.state.currentPage * this.PAGE_LENGTH - this.PAGE_LENGTH
      return this.props.breeds.slice(index, index + this.PAGE_LENGTH).map(breed => {
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
              <th></th>
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
        <BreedPageButtons numEntries={this.props.breeds.length} entriesPerPage={this.PAGE_LENGTH} currentPage={this.state.currentPage} />
      </div>
      
    )
  }
}

export default connect(state => ({breeds: state.breeds.breeds, loading: state.breeds.loading }), { postMonster } )(BreedList)