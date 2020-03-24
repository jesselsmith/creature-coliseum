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

  setPage = pageNumber => {
    this.setState({
      currentPage: pageNumber
    })
  }

  shouldAddButton = () => {
    return this.props.url.includes('encounters')
  }

  displayBreeds = () => {
    if(this.props.loading){
      return <tr><td>Monsters Loading...</td></tr>
    }else{
      const index = this.state.currentPage * this.PAGE_LENGTH - this.PAGE_LENGTH
      return this.props.breeds.slice(index, index + this.PAGE_LENGTH).map(breed => {
        return <Breed key={breed.id} breed={breed} shouldAddButton={this.shouldAddButton()} addMonster={this.addMonsterFromBreed} />
      })
    }
  }

  generateTableHeaders = () => {
    if(this.props.url.includes('monster')){
      return (
        <tr>
          <th>Name</th>
          <th>CR</th>
          <th>Type</th>
          <th>Size</th>
          <th>Spell Caster?</th>
          <th>AC</th>
          <th>Attack Bonus</th>
        </tr>
      )
    }else{
      return (
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
      )
    }
  }

  render(){
    return(
      <div className='breed-list'>
        <BreedSearch />
        <table>
          <thead>
            {this.generateTableHeaders()}
          </thead>
          <tbody>
            {this.displayBreeds()}
          </tbody>
        </table>
        <BreedPageButtons numEntries={this.props.breeds.length} entriesPerPage={this.PAGE_LENGTH} currentPage={this.state.currentPage} changePage={this.setPage} />
      </div>
      
    )
  }
}

export default connect(state => ({breeds: state.breeds.breeds, loading: state.breeds.loading }), { postMonster } )(BreedList)